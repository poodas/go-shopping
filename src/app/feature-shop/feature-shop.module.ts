import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureDialogComponent } from "./feature-dialog/feature-dialog.component";
import { FeatureRouteModule } from "./feature-route/feature-route.module";

@NgModule({
  declarations: [FeatureDialogComponent],
  imports: [CommonModule, FeatureRouteModule]
})
export class FeatureShopModule {}
