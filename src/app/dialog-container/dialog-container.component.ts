import {
  Component,
  AfterContentInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from "@angular/core";
import { ShoppingService } from "../shopping.service";
import { DialogContentComponent } from "../dialog-content/dialog-content.component";

@Component({
  selector: "app-dialog-container",
  templateUrl: "./dialog-container.component.html",
  styleUrls: ["./dialog-container.component.styl"]
})
export class DialogContainerComponent implements AfterContentInit {
  public productDetails;
  //view container ref: it tells view child to load container and read it as view container ref
  // view container ref method allows us to use create container method
  @ViewChild("container", { read: ViewContainerRef, static: true })
  containerRef;
  constructor(
    private _service: ShoppingService,
    private resolver: ComponentFactoryResolver,
    private vc: ViewContainerRef
  ) {}

  ngAfterContentInit() {
    this.getProductDetails();
  }

  getProductDetails(): void {
    this._service.getProductDetails().subscribe(result => {
      this.productDetails = result;
      console.log(this.productDetails);
      if (this.productDetails) {
        for (let i = 0; i < this.productDetails.jackets.length; i++) {
          console.log();
          const singlePostFactory = this.resolver.resolveComponentFactory(
            DialogContentComponent
          );
          let dataToBeSent = this.vc.createComponent(singlePostFactory);
          dataToBeSent.instance.parentData = this.productDetails.jackets[i];
        }
      }
    });
  }
}
