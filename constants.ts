import { IsEnum } from "class-validator";

export const LOCALE = "en-NG";
export const CURRENCY = "NGN";
export const EXTREME = "EXTREME";

export enum DeliveryType {
  REGULAR = "REGULAR",
  EXPRESS = "EXPRESS",
}

export enum Address {
  VI = "VI",
  IJU = "IJU",
  VGC = "VGC",
  EPE = "EPE",
  YABA = "YABA",
  OGBA = "OGBA",
  AJAH = "AJAH",
  KETU = "KETU",
  MOWE = "MOWE",
  ISOLO = "ISOLO",
  IKOYI = "IKOYI",
  OKOTA = "OKOTA",
  APAPA = "APAPA",
  AMUWO = "AMUWO",
  IKEJA = "IKEJA",
  OGUDU = "OGUDU",
  OMOLE = "OMOLE",
  AGEGE = "AGEGE",
  OJODU = "OJODU",
  IKOTA = "IKOTA",
  ELEKO = "ELEKO",
  IBAFO = "IBAFO",
  MARINA = "MARINA",
  MAGODO = "MAGODO",
  OSHODI = "OSHODI",
  ISHAGA = "ISHAGA",
  AGBARA = "AGBARA",
  AGUNGI = "AGUNGI",
  IKOTUN = "IKOTUN",
  IGANDO = "IGANDO",
  BADORE = "BADORE",
  EJIGBO = "EJIGBO",
  JIBOWU = "JIBOWU",
  FESTAC = "FESTAC",
  AWOYAYA = "AWOYAYA",
  BADAGRY = "BADAGRY",
  IKORODU = "IKORODU",
  JAKANDE = "JAKANDE",
  ILUPEJU = "ILUPEJU",
  CHEVRON = "CHEVRON",
  ELEGUSHI = "ELEGUSHI",
  MARYLAND = "MARYLAND",
  SATELITE = "SATELITE",
  ALIMOSHO = "ALIMOSHO",
  SURULERE = "SURULERE",
  SANGOTEDO = "SANGOTEDO",
  "OJO ALABA" = "OJO ALABA",
  "PALMGROOVE" = "PALMGROOVE",
  "LEKKI PH 1" = "LEKKI PH 1",
  "ABULE EGBA" = "ABULE EGBA",
  "TRADE FAIR" = "TRADE FAIR",
  "REDEEM CAMP" = "REDEEM CAMP",
  "LAGOS ISLAND" = "LAGOS ISLAND",
  "DANGOTE REFINARY" = "DANGOTE REFINARY",
  "ABRAHAM ADESANYA" = "ABRAHAM ADESANYA",
}

export class GetPriceDto {
  @IsEnum(Address)
  pickupAddress: Address;

  @IsEnum(Address)
  dropoffAddress: Address;

  @IsEnum(DeliveryType)
  deliveryType: DeliveryType;
}

export const routes: any = {
  [Address.YABA]: 1,
  [Address.IKEJA]: 1,
  [Address.JIBOWU]: 1,
  [Address.ILUPEJU]: 1,
  [Address.MARYLAND]: 1,
  [Address.SURULERE]: 1,
  [Address.PALMGROOVE]: 1,

  [Address.ISOLO]: 2,
  [Address.OKOTA]: 2,
  [Address.OSHODI]: 2,

  [Address.AMUWO]: 3,
  [Address.FESTAC]: 3,
  [Address.SATELITE]: 3,

  [Address.APAPA]: 4,
  [Address["OJO ALABA"]]: 4,
  [Address["TRADE FAIR"]]: 4,

  [Address.KETU]: 5,
  [Address.OGBA]: 5,
  [Address.OGUDU]: 5,
  [Address.OMOLE]: 5,
  [Address.AGEGE]: 5,
  [Address.OJODU]: 5,
  [Address.MAGODO]: 5,

  [Address.IJU]: 6,
  [Address.ISHAGA]: 6,
  [Address.IKOTUN]: 6,
  [Address.IGANDO]: 6,
  [Address.EJIGBO]: 6,
  [Address.ALIMOSHO]: 6,
  [Address["ABULE EGBA"]]: 6,

  [Address.VI]: 7,
  [Address.IKOYI]: 7,
  [Address.MARINA]: 7,
  [Address["LAGOS ISLAND"]]: 7,

  [Address.AGUNGI]: 8,
  [Address.CHEVRON]: 8,
  [Address.JAKANDE]: 8,
  [Address.ELEGUSHI]: 8,
  [Address["LEKKI PH 1"]]: 8,

  [Address.VGC]: 9,
  [Address.AJAH]: 9,
  [Address.IKOTA]: 9,
  [Address.BADORE]: 9,
  [Address.AWOYAYA]: 9,
  [Address.SANGOTEDO]: 9,
  [Address["ABRAHAM ADESANYA"]]: 9,

  [Address.IKORODU]: 10,

  [Address.EPE]: EXTREME,
  [Address.MOWE]: EXTREME,
  [Address.ELEKO]: EXTREME,
  [Address.IBAFO]: EXTREME,
  [Address.AGBARA]: EXTREME,
  [Address.BADAGRY]: EXTREME,
  [Address["REDEEM CAMP"]]: EXTREME,
  [Address["DANGOTE REFINARY"]]: EXTREME,
};

export const rates: any = {
  1: {
    1: 1_000,
    2: 1_000,
    3: 1_500,
    4: 2_000,
    5: 1_000,
    6: 1_500,
    7: 1_500,
    8: 1_500,
    9: 2_000,
    10: 2_000,
  },

  2: {
    1: 1_000,
    2: 1_000,
    3: 1_000,
    4: 1_500,
    5: 1_000,
    6: 1_500,
    7: 1_500,
    8: 1_500,
    9: 2_000,
    10: 2_000,
  },

  3: {
    1: 1_500,
    2: 1_000,
    3: 1_000,
    4: 2_000,
    5: 1_500,
    6: 1_500,
    7: 1_500,
    8: 1_500,
    9: 2_000,
    10: 2_000,
  },

  4: {
    1: 2_000,
    2: 1_500,
    3: 1_500,
    4: 1_500,
    5: 2_000,
    6: 2_000,
    7: 2_000,
    8: 2_000,
    9: 2_000,
    10: 2_500,
  },

  5: {
    1: 1_000,
    2: 1_000,
    3: 1_500,
    4: 2_000,
    5: 1_000,
    6: 1_500,
    7: 1_500,
    8: 1_500,
    9: 2_000,
    10: 2_000,
  },

  6: {
    1: 1_500,
    2: 1_500,
    3: 1_500,
    4: 2_000,
    5: 1_500,
    6: 1_000,
    7: 1_500,
    8: 2_000,
    9: 2_000,
    10: 2_500,
  },

  7: {
    1: 1_500,
    2: 1_500,
    3: 1_500,
    4: 2_000,
    5: 1_500,
    6: 2_000,
    7: 1_000,
    8: 1_000,
    9: 1_500,
    10: 2_500,
  },

  8: {
    1: 1_500,
    2: 1_500,
    3: 1_500,
    4: 2_000,
    5: 1_500,
    6: 1_500,
    7: 1_000,
    8: 1_000,
    9: 1_000,
    10: 2_500,
  },
  9: {
    1: 2_000,
    2: 2_000,
    3: 2_000,
    4: 2_500,
    5: 2_000,
    6: 2_000,
    7: 1_500,
    8: 1_000,
    9: 1_000,
    10: 2_500,
  },

  10: {
    1: 2_000,
    2: 2_000,
    3: 2_000,
    4: 2_500,
    5: 2_000,
    6: 2_500,
    7: 2_500,
    8: 2_500,
    9: 2_500,
    10: 1_000,
  },
};
