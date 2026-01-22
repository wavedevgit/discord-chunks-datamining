/** Chunk was on web.js **/
/** chunk id: 887555, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => s,
  jK: () => u,
  o0: () => l
}), require("./896048.js");
var Chunk600975 = require("./600975.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let s = (0, Chunk600975.C)({
    kind: "user",
    id: "2021-08_regional_payment_methods",
    label: "Regional Payment Methods",
    defaultConfig: {
      enabledPaymentTypes: [],
      forceCountryCode: null,
      validCountryCodes: []
    },
    treatments: [{
      id: 1,
      label: "Regional Payment Method for Germany",
      config: {
        enabledPaymentTypes: [],
        forceCountryCode: "DE",
        validCountryCodes: ["DE"]
      }
    }, {
      id: 2,
      label: "Regional Payment Method for US",
      config: {
        enabledPaymentTypes: [Chunk652215.hes.VENMO, Chunk652215.hes.CASH_APP],
        forceCountryCode: "US",
        validCountryCodes: ["US"]
      }
    }, {
      id: 3,
      label: "Regional Payment Method for Brazil",
      config: {
        enabledPaymentTypes: [],
        forceCountryCode: "BR",
        validCountryCodes: ["BR"]
      }
    }, {
      id: 4,
      label: "Regional Payment Method for Turkey",
      config: {
        enabledPaymentTypes: [],
        forceCountryCode: "TR",
        validCountryCodes: ["TR"]
      }
    }, {
      id: 5,
      label: "Regional Payment Method for Poland",
      config: {
        enabledPaymentTypes: [Chunk652215.hes.PRZELEWY24],
        forceCountryCode: "PL",
        validCountryCodes: ["PL"]
      }
    }, {
      id: 6,
      label: "Enable paysafecard",
      config: {
        enabledPaymentTypes: [Chunk652215.hes.PAYSAFE_CARD],
        forceCountryCode: "DE",
        validCountryCodes: ["BG", "CZ", "DK", "HU", "RO", "SE", "DE"]
      }
    }, {
      id: 7,
      label: "Regional Payment Method for Philippines",
      config: {
        enabledPaymentTypes: [Chunk652215.hes.GCASH],
        forceCountryCode: "PH",
        validCountryCodes: ["PH"]
      }
    }, {
      id: 8,
      label: "Regional Payment Method for Malaysia",
      config: {
        enabledPaymentTypes: [Chunk652215.hes.GRABPAY_MY],
        forceCountryCode: "MY",
        validCountryCodes: ["MY"]
      }
    }, {
      id: 9,
      label: "Regional Payment Method for Vietnam",
      config: {
        enabledPaymentTypes: [Chunk652215.hes.MOMO_WALLET],
        forceCountryCode: "VN",
        validCountryCodes: ["VN"]
      }
    }, {
      id: 10,
      label: "Regional Payment Method for Indonesia",
      config: {
        enabledPaymentTypes: [Chunk652215.hes.GOPAY_WALLET],
        forceCountryCode: "ID",
        validCountryCodes: ["ID"]
      }
    }, {
      id: 11,
      label: "Regional Payment Method for South Korea",
      config: {
        enabledPaymentTypes: [Chunk652215.hes.KAKAOPAY],
        forceCountryCode: "KR",
        validCountryCodes: ["KR"]
      }
    }, {
      id: 12,
      label: "Regional Payment Method for Belgium",
      config: {
        enabledPaymentTypes: [Chunk652215.hes.PAYSAFE_CARD, Chunk652215.hes.BANCONTACT],
        forceCountryCode: "BE",
        validCountryCodes: ["BE"]
      }
    }, {
      id: 13,
      label: "Regional Payment Method for Austria",
      config: {
        enabledPaymentTypes: [Chunk652215.hes.PAYSAFE_CARD, Chunk652215.hes.EPS],
        forceCountryCode: "AT",
        validCountryCodes: ["AT"]
      }
    }, {
      id: 14,
      label: "Regional Payment Method for Netherlands",
      config: {
        enabledPaymentTypes: [Chunk652215.hes.PAYSAFE_CARD, Chunk652215.hes.IDEAL],
        forceCountryCode: "NL",
        validCountryCodes: ["NL"]
      }
    }, {
      id: 15,
      label: "Launch Paysafecard",
      config: {
        enabledPaymentTypes: [Chunk652215.hes.PAYSAFE_CARD],
        forceCountryCode: "ES",
        validCountryCodes: ["ES", "IT"]
      }
    }, {
      id: 16,
      label: "Launch Cash App",
      config: {
        enabledPaymentTypes: [Chunk652215.hes.CASH_APP],
        forceCountryCode: "US",
        validCountryCodes: ["US"]
      }
    }]
  }),
  o = new Map([
    ["abn_amro", "ABN AMRO"],
    ["asn_bank", "ASN Bank"],
    ["bunq", "Bunq"],
    ["ing ", "ING"],
    ["knab", "Knab"],
    ["n26", "N26"],
    ["nn", "Nationale-Nederlanden"],
    ["rabobank", "Rabobank"],
    ["revolut", "Revolut"],
    ["regiobank", "RegioBank"],
    ["sns_bank", "SNS Bank (De Volksbank)"],
    ["triodos_bank", "Triodos Bank"],
    ["van_lanschot", "Van Lanschot"],
    ["yoursafe", "Yoursafe"],
    ["handelsbanken", "Handelsbanken"]
  ]);

function l(e) {
  return true !== e && o.has(e) ? o.get(e) : a.intl.string(a.t.jdPblk)
}
let c = new Map([
  ["arzte_und_apotheker_bank", "\xc4rzte- und Apothekerbank"],
  ["austrian_anadi_bank_ag", "Austrian Anadi Bank AG"],
  ["bank_austria", "Bank Austria"],
  ["bankhaus_carl_spangler", "Bankhaus Carl Sp\xe4ngler & Co.AG"],
  ["bankhaus_schelhammer_und_schattera_ag", "Bankhaus Schelhammer & Schattera AG"],
  ["bawag_psk_ag", "BAWAG P.S.K. AG"],
  ["bks_bank_ag", "BKS Bank AG"],
  ["brull_kallmus_bank_ag", "Br\xfcll Kallmus Bank AG"],
  ["btv_vier_lander_bank", "BTV VIER L\xc4NDER BANK"],
  ["capital_bank_grawe_gruppe_ag", "Capital Bank Grawe Gruppe AG"],
  ["dolomitenbank", "Dolomitenbank"],
  ["easybank_ag", "Easybank AG"],
  ["erste_bank_und_sparkassen", "Erste Bank und Sparkassen"],
  ["hypo_alpeadriabank_international_ag", "Hypo Alpe-Adria-Bank International AG"],
  ["hypo_noe_lb_fur_niederosterreich_u_wien", "HYPO NOE LB f\xfcr Nieder\xf6sterreich u. Wien"],
  ["hypo_oberosterreich_salzburg_steiermark", "HYPO Ober\xf6sterreich, Salzburg, Steiermark"],
  ["hypo_tirol_bank_ag", "Hypo Tirol Bank AG"],
  ["hypo_vorarlberg_bank_ag", "Hypo Vorarlberg Bank AG"],
  ["hypo_bank_burgenland_aktiengesellschaft", "HYPO-BANK BURGENLAND Aktiengesellschaft"],
  ["marchfelder_bank", "Marchfelder Bank"],
  ["oberbank_ag", "Oberbank AG"],
  ["raiffeisen_bankengruppe_osterreich", "Raiffeisen Bankengruppe \xd6sterreich"],
  ["schoellerbank_ag", "Schoellerbank AG"],
  ["sparda_bank_wien", "Sparda-Bank Wien"],
  ["volksbank_gruppe", "Volksbank Gruppe"],
  ["volkskreditbank_ag", "Volkskreditbank AG"],
  ["vr_bank_braunau", "VR-Bank Braunau"]
]);

function u(e) {
  return true !== e && c.has(e) ? c.get(e) : a.intl.string(a.t.jdPblk)
}