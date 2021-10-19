import { IsEnum } from "class-validator";
import { Address } from "../enums/address";
import { DeliveryType } from "../enums/delivery-type";

export class GetPriceDto {
  @IsEnum(Address)
  pickupAddress: Address;

  @IsEnum(Address)
  dropoffAddress: Address;

  @IsEnum(DeliveryType)
  deliveryType: DeliveryType;
}
