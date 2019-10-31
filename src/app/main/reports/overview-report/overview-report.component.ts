import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DialogService } from 'app/shared/services/dialog.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { ReportService } from '../report.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SessionService } from 'app/shared/services/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Generals } from '../../../shared/constants/generals';

@Component({
  selector: 'app-overview-report',
  templateUrl: './overview-report.component.html',
  styleUrls: ['./overview-report.component.scss']
})
export class OverviewReportComponent extends PageBaseComponent implements OnInit {

  isProcessing: boolean = false;
  pageTotal: number;
  currentPageNumber: number;
  totalItems: number;
  pageLimit: number;

  TRAFFIC_SOURCE_TYPES: string[] = [
    'google/cpc',
    'google/organic',
    'google/display',
    'facebook/cpc',
    'facebook/referral',
    'bing/cpc',
    'bing/organic',
    'coccoc/cpc',
    'coccoc/organic',
    'direct/none',
    'other/referral'
  ];

  selectedDateRange: any = {
    start: moment().subtract(6, 'days'),
    end: moment()
  }
  locale: any = {
    format: 'DD/MM/YYYY',
    separator: ' Đến ',
    applyLabel: 'Áp dụng',
    cancelLabel: 'Đóng',
  };
  ranges: any = {
    'Hôm nay': [moment(), moment()],
    'Hôm qua': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    '1 tuần': [moment().subtract(6, 'days'), moment()],
  }

  highlinePagesCols: string[] = ['order', 'activePage', 'userOnAction'];
  highlinePages = [
    {
      activePage: 'https://click.appnet.edu.vn',
      userOnAction: {
        number: 1,
        percentage: 14.29
      }
    }
  ];

  overviewTableCols: string[] = ['createdAt', 'ip', 'trafficSource', 'session', 'status', 'os', 'browser', 'isPrivateBrowsing', 'networkCompany', 'location'];
  overviewTable = [];

  view: any[] = [325, 50];

  itemsPerPageOptions = Generals.Pagination.itemsPerPageOptions;

  // options
  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#F44336', '#44b543', '#039be5']
  };

  pieChart = {
    legend: true,
    explodeSlices: false,
    labels: false,
    doughnut: false,
    gradient: false,
    scheme: {
      domain: [
        '#87CEEB', '#f44336', '#039be5', '#ADFF2F', '#FF1493', '#44b543', '#FFD700', '#008080', '#FFA07A', '#8B008B', '#D3D3D3',
        //'#6FAAB0','#C4C24A','#8BC652', '#E94649','#F6B53F','#FB954F','#005277','#039be5','#9370DB', '#33495D', '#FF6384'
      ]
    },
    dataSource: [],
  };

  constructor(
    private _dialogService: DialogService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _reportService: ReportService,
    public _sessionService: SessionService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router

  ) {
    super();
  }

  ngOnInit() {
    this._fuseProgressBarService.show();
    this.pageLimit = this.itemsPerPageOptions[0].value;
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.getStatisticTrafficSourceReport();

          this.pageTotal = 0;

          const page = this._activatedRoute.snapshot.queryParamMap.get('page');

          if (page) {
            if (isNaN(Number(page)))
              return;
            this.currentPageNumber = Number(page);
          }
          else {
            this.currentPageNumber = 1;
            this._router.navigate([], {
              queryParams: {
                page: this.currentPageNumber,
              }
            });
          }

          this.getSessionReport(this.currentPageNumber);
        }
      });
    this.subscriptions.push(sub);
  }

  changeItemsPerPageOption(e) {
    this.currentPageNumber = 1;
    this._router.navigate([], {
      queryParams: {
        page: this.currentPageNumber,
      }
    });
    this.getSessionReport(this.currentPageNumber);
  }

  showReason(reason: any) {
    if (reason)
      console.log(reason.message);
    else console.log('Unknown');
  }

  getPercentage(value: number, total: number): number {
    const res = value * 100 / total
    return Math.round(res * 100) / 100;
  }

  getSessionReport(page: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const start = moment(this.selectedDateRange.start).format('DD-MM-YYYY');
    const end = moment(this.selectedDateRange.end).format('DD-MM-YYYY');

    const sub = this._reportService.getSessionReport({ from: start, to: end, page, limit: this.pageLimit })
      .subscribe(
        res => {
          this.overviewTable = res.data.trafficSourceData;

          setTimeout(() => {
            this.totalItems = res.data.totalItems;
            this.pageTotal = Math.ceil(this.totalItems / this.pageLimit);
            this._fuseProgressBarService.hide();
            this.isProcessing = false;
          }, 0);
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this.isProcessing = false;
          this._dialogService._openErrorDialog(error.error);
          this.pageTotal = 0;
        }
      );
    this.subscriptions.push(sub);
  }

  getStatisticTrafficSourceReport() {
    this.isProcessing = true;
    const start = moment(this.selectedDateRange.start).format('DD-MM-YYYY');
    const end = moment(this.selectedDateRange.end).format('DD-MM-YYYY');

    const sub = this._reportService.getStatisticTrafficSourceReport({ from: start, to: end })
      .subscribe(
        res => {

          let data = JSON.parse(JSON.stringify(res.data.TrafficSourceData));

          let sessionCountTotal = 0;
          data.forEach(element => {
            sessionCountTotal += element.sessionCount
          });

          const noIDs = data.filter(item => !item);
          let noIDSessionCountTotal = 0;
          noIDs.forEach(element => {
            noIDSessionCountTotal += element.sessionCount;
          });

          data = data.filter(item => item);
          const len = data.length;
          const dataSource = data.map((item, index) => {
            const sessionCount = index < len - 1 ? item.sessionCount : (item.sessionCount + noIDSessionCountTotal)
            return {
              name: (this.TRAFFIC_SOURCE_TYPES[item._id - 1] || 'Unknown') + ` - Số phiên ${sessionCount}`,
              value: this.getPercentage(sessionCount, sessionCountTotal)
            }
          });

          setTimeout(() => {
            this.pieChart.dataSource = dataSource;
            this.isProcessing = false;
          }, 0);
        },
        (error: HttpErrorResponse) => {
          this.isProcessing = false;
          this._dialogService._openErrorDialog(error.error);
        });
    this.subscriptions.push(sub);
  }

  onSelectDateRange(event) {
    if (moment(event.endDate).diff(moment(event.startDate), 'days') + 1 > 14) {
      this._dialogService._openInfoDialog('Vui lòng chọn khoảng thời gian thống kê trong vòng 14 ngày trở lại');
      return false;
    }
    return true;
  }

  onApplyDateRange() {
    this.currentPageNumber = 1;
    this._router.navigate([], {
      queryParams: {
        page: this.currentPageNumber,
      }
    });
    this.getStatisticTrafficSourceReport();
    this.getSessionReport(this.currentPageNumber);
  }

  changePage(event) {
    this.getSessionReport(event);
    this._router.navigate([], {
      queryParams: {
        page: event,
      }
    });
  }
}
