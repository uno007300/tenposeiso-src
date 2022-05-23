// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  siteName: '店舗清掃.com',
  companyName: 'メンテナンスNo1',
  address: '〒162-0851 東京都新宿区',
  phone: '0120-993-163',
  email: 'info@tenposeiso.com',
  time: '月-土 09:00 AM - 18:00 PM',
  boss: '王相勲(ワンサンフン)',
  analytics: {
    id: 'UA-227178925-1' // IDを設定する、environment.prod.tsにも
  },
  baseUrl: 'https://localhost:44332'
};

/*
https://bloglife.azurewebsites.net/
baseUrl: 'https://localhost:44332'
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
