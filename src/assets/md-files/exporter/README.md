# Angular Material Table Exporter

[![Node version](https://img.shields.io/npm/v/mat-table-exporter.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/mat-table-exporter)  ![Total Downloads](https://img.shields.io/npm/dm/mat-table-exporter.svg?style=for-the-badge)

This package is to make MatTable components exportable in ***excel, csv, txt*** and ***json*** formats. ***Pagination is also supported***. Applying MatTableExporter directive to your MatTable is enough to make it exportable. The directive uses different exporter services for different exporting types. You can also implement your own exporter and use it for your custom exporting requirements.

This project employs <a href="https://github.com/SheetJS/js-xlsx" target="_blank">xlsx sheetjs</a>, which is a great library and mature enough for the excel creation itself. In order to achieve a cross-browser file saving capability <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaverjs</a> is employed.

The MatTableExporter directive inside this package is a cdk-table-exporter subtype and provides support for angular material's cdkTable.
cdk-table-exporter facilitates the common exporting related functionalities for CdkTable implementations abstracting the behavior that can change among different CdkTables.

&nbsp;

## Getting Started

If you are employing angular material in your project. Install mat-table-exporter
```
npm install mat-table-exporter
```
NOTE: Angular versions older than Angular 8 should install mat-table-exporter@1.2.5
```
npm install mat-table-exporter@1.2.5
```

For Angular versions between 8-13 (inclusive), please install mat-table-exporter@10.2.4
```
npm install mat-table-exporter@10.2.4
```

After installing mat-table-exporter import MatTableExporterModule in your ngModule
```
import { MatTableExporterModule } from 'mat-table-exporter';
```
```
@NgModule({
  imports: [
    ...
    MatTableExporterModule
  ],
 ]})
```

&nbsp;

## Usage

`matTableExporter` is the directive selector.
```html
<mat-table matTableExporter [dataSource]="dataSource" #exporter="matTableExporter">
```

```html
<button mat-button (click)="exporter.exportTable('csv')"></button>
```

&nbsp;

##### * Stackblitz demo: <a href="https://stackblitz.com/edit/mte-demo" target="_blank">mte-demo</a>.

##### * Stackblitz demo of custom exporter <a href="https://stackblitz.com/edit/mte-cex-demo" target="_blank">mte-cex-demo</a>.

&nbsp;


## Support & Donations

Feel free to show your support. Donating supporters will be added into *Supporters* section inside the **README.md** of the repository.

[![GitHub Org's stars](https://img.shields.io/github/stars/HalitTalha/ng-material-extensions?logo=Github&style=for-the-badge)](https://github.com/HalitTalha/ng-material-extensions/stargazers) -> **Become a star-gazer, giving a star at Github** 


[![Crypto Donation](https://img.shields.io/badge/_-DONATE-4d4d4e?logo=bitcoin&style=for-the-badge)](https://commerce.coinbase.com/checkout/3643d820-81aa-46ca-9973-877c1184e082) -> **Donate in crypto currencies**


&nbsp;
## Licence

Apache-2.0
