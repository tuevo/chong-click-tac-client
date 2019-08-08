import { environment } from 'environments/environment';

export namespace API {
  export namespace User {
    export const Login = environment.hostApi + '/api/users/login';
    export const Register = environment.hostApi + '/api/users/register';
    export const ForgotPassword = environment.hostApi + '/api/users/forget-password';
    export const ResendEmail = environment.hostApi + '/api/users/confirm/resend';
    export const ResetPassword = environment.hostApi + '/api/users/reset-password';
    export const LoginByGoogle = environment.hostApi + '/api/users/login-by-google';
    export const getLoggedInInfo = environment.hostApi + '/api/users/info';
    export const confirmEmail = environment.hostApi + '/api/users/confirm';
  }
  export namespace AdwordsAccount {
    export const getAccounts = environment.hostApi + '/api/account-adwords';
    export const addAccount = environment.hostApi + '/api/account-adwords';
    export const autoBlockingRangeIP = environment.hostApi + '/api/account-adwords/{account_id}/auto-blocking-range-ip';
    export const autoBlocking3G4G = environment.hostApi + '/api/account-adwords/{account_id}/auto-blocking-3g4g';
    export const blockIPs = environment.hostApi + '/api/account-adwords/{account_id}/ips';
    export const autoBlockingDevice = environment.hostApi + '/api/account-adwords/{account_id}/auto-blocking-device';
    export const autoBlockingIP = environment.hostApi + '/api/account-adwords/{account_id}/auto-blocking-ip';
    export const setDeviceCampaignRunning = environment.hostApi + '/api/account-adwords/{account_id}/report/device'
    export const getOriginalCampaigns = environment.hostApi + '/api/account-adwords/{account_id}/original-campaigns';
    export const getDeviceReport = environment.hostApi + '/api/account-adwords/{account_id}/report/device';
    export const removeBlockedIPs = environment.hostApi + '/api/account-adwords/{account_id}/ips';
    export const blockSampleIP = environment.hostApi + '/api/account-adwords/{account_id}/block-sample-ip';
    export const unblockSampleIP = environment.hostApi + '/api/account-adwords/{account_id}/unblock-sample-ip';
    export const addCampaignTracking = environment.hostApi + '/api/account-adwords/{account_id}/campaigns';
    export const checkAccountAcceptance = environment.hostApi + '/api/account-adwords/connection-confirmation';
    export const getBlockedSampleIP = environment.hostApi + '/api/account-adwords/{account_id}/block-sample-ip';
    export const getBlockedCustomIPs = environment.hostApi + '/api/account-adwords/{account_id}/ips';
    export const getTrackingCampaigns = environment.hostApi + '/api/account-adwords/{account_id}/campaigns';
  }
  export namespace Website {
    export const getWebsites = environment.hostApi + '/api/websites?accountId={accountId}';
    export const addWebsite = environment.hostApi + '/api/websites';
    export const removeWebsite = environment.hostApi + '/api/websites/{website_id}';
    export const getWebsiteTrackingInfo = environment.hostApi + '/api/account-adwords/{account_id}/verify-acctached-code-domains'
  }
  export namespace Report {
    export const getAccountReport = environment.hostApi + '/api/account-adwords/{account_id}/report?from={from}&to={to}';
  }
}
