import {
  rates,
  routes,
  LOCALE,
  EXTREME,
  Address,
  CURRENCY,
  GetPriceDto,
  DeliveryType,
} from "./constants";
import { Service } from "typedi";

@Service()
export class PriceService {
  getPrice(body: GetPriceDto) {
    let value: number = 0;
    const r1 = this._getRouteNumber(body.pickupAddress);
    const r2 = this._getRouteNumber(body.dropoffAddress);
    if (r1 === EXTREME || r2 === EXTREME) return EXTREME;

    value = this._getRoutePrice(r1, r2);

    if (body.deliveryType === DeliveryType.EXPRESS) value *= 2;

    const price = this._formatCurreny(value);

    return { value, price };
  }

  private _getRoutePrice(r1: number, r2: number) {
    return rates[r1][r2];
  }

  private _getRouteNumber(address: Address) {
    return routes[address];
  }

  private _formatCurreny(value: number) {
    return new Intl.NumberFormat(LOCALE, {
      style: "currency",
      currency: CURRENCY,
    }).format(value);
  }
}
