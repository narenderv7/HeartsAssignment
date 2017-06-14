import { Component ,OnInit } from '@angular/core';
import { HttpService } from "./services/http-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  private makes: Array<any> = [];
  private models: Array<any> = [];
  private name: String;
  private brandName: String;
  private model: Object;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.makes = [];
    // Calling http service to get Car Makes
    this.httpService.getBrands().subscribe((res) => {
      this.makes.push(res);
      this.name = "Brand"
    });
  }

  selectedBrandId(id) {
    this.model = null;
    this.models = [];
    // Calling http service to get Car Models for selected Make
    this.httpService.getModels(id).subscribe((res) => {
      this.models.push(res);
      this.name = "Model"
    });
    let brand = this.makes.filter((item) => { return item.make == id });
    this.brandName = brand[0].name;
  }

  selectedModelId(id) {
    let model = this.models.filter((item) => { return item.model == id });
    this.model = model[0];
  }
}
