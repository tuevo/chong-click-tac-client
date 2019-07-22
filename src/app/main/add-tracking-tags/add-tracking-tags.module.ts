import { NgModule } from '@angular/core';
import { AddTrackingTagsRoutingModule } from './add-tracking-tags-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { InputTextModule } from '../../shared/components/input-text/input-text.module';
import { InputTextareaModule } from '../../shared/components/input-textarea/input-textarea.module';
import { SelectTextModule } from '../../shared/components/select-text/select-text.module';
import { CheckboxGroupModule } from '../../shared/components/checkbox-group/checkbox-group.module';

import { FuseSharedModule } from '@fuse/shared.module';

import { SelectCampaignsComponent } from './select-campaigns/select-campaigns.component';


@NgModule({
  declarations: [SelectCampaignsComponent],
  imports: [

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatBadgeModule,
    MatCheckboxModule,

    CheckboxGroupModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    SelectTextModule,

    FuseSharedModule,

    AddTrackingTagsRoutingModule
  ]
})
export class AddTrackingTagsModule { }
