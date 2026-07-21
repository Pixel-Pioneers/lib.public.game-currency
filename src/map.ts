import { GameCurrency, GameCurrencyClass } from './types/currency'

/** NEVER change these values as it may have a knock on effect breaking connected systems */

type CurrencyConfiguration = {
  currencyCode: GameCurrency
  displayCode: string
  currencyName: string
  singularName?: string
  currencyClass: GameCurrencyClass
  displayFractionDigits: number
  storeFractionDigits: number
  redeemable: boolean
  convertible: boolean
}

const currencyConfigurationMapRaw: Record<GameCurrency, CurrencyConfiguration> = {
  [GameCurrency.GoldCoins]: {
    currencyCode: GameCurrency.GoldCoins,
    displayCode: 'GC',
    currencyName: 'Gold',
    currencyClass: GameCurrencyClass.Standard,
    displayFractionDigits: 0,
    storeFractionDigits: 2,
    redeemable: false,
    convertible: false,
  },
  [GameCurrency.SweepsCoins]: {
    currencyCode: GameCurrency.SweepsCoins,
    displayCode: 'SC',
    currencyName: 'Sweeps',
    currencyClass: GameCurrencyClass.Promotional,
    displayFractionDigits: 2,
    storeFractionDigits: 4,
    redeemable: true,
    convertible: false,
  },
  [GameCurrency.Bits]: {
    currencyCode: GameCurrency.Bits,
    displayCode: 'BT',
    currencyName: 'Bits',
    currencyClass: GameCurrencyClass.Standard,
    displayFractionDigits: 0,
    storeFractionDigits: 2,
    redeemable: false,
    convertible: false,
  },
  [GameCurrency.Bucks]: {
    currencyCode: GameCurrency.Bucks,
    displayCode: 'BK',
    currencyName: 'Bucks',
    currencyClass: GameCurrencyClass.Promotional,
    displayFractionDigits: 2,
    storeFractionDigits: 4,
    redeemable: true,
    convertible: false,
  },
  [GameCurrency.Credits]: {
    currencyCode: GameCurrency.Credits,
    displayCode: 'CRD',
    currencyName: 'Credits',
    currencyClass: GameCurrencyClass.Standard,
    displayFractionDigits: 2,
    storeFractionDigits: 4,
    redeemable: false,
    convertible: false,
  },
  [GameCurrency.RedeemableCredits]: {
    currencyCode: GameCurrency.RedeemableCredits,
    displayCode: 'RCR',
    currencyName: 'Coins',
    singularName: 'Coin',
    currencyClass: GameCurrencyClass.Standard,
    displayFractionDigits: 2,
    storeFractionDigits: 4,
    redeemable: true,
    convertible: false,
  },
  [GameCurrency.Gems]: {
    currencyCode: GameCurrency.Gems,
    displayCode: 'GEM',
    currencyName: 'Gems',
    singularName: 'Gem',
    currencyClass: GameCurrencyClass.Promotional,
    displayFractionDigits: 2,
    storeFractionDigits: 4,
    redeemable: false,
    convertible: true,
  },
}

export { currencyConfigurationMapRaw }
