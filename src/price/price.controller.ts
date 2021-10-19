import { Service } from "typedi";
import { GetPriceDto } from "./price.dto";
import { PriceService } from "./price.service";
import { Body, JsonController, Get } from "routing-controllers";

@Service()
@JsonController("/price")
export class PriceController {
  constructor(private priceService: PriceService) {}

  @Get()
  getPrice(@Body() body: GetPriceDto) {
    return this.priceService.getPrice(body);
  }
}
