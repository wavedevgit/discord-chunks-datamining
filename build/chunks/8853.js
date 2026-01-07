/** Chunk was on web.js **/
/** chunk id: 8853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => y
}), require("./980754.js"), require("./388685.js"), require("./415506.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js"),
  Chunk359295 = require("./359295.js"),
  Chunk323407 = require("./323407.js"),
  Chunk279882 = require("./279882.js"),
  Chunk828186 = require("./828186.js"),
  Chunk698587 = require("./698587.js"),
  Chunk497504 = require("./497504.js"),
  Chunk631536 = require("./631536.js"),
  Chunk922122 = require("./922122.js"),
  Chunk999755 = require("./999755.js"),
  Chunk990830 = require("./990830.js"),
  Chunk214611 = require("./214611.js"),
  Chunk740111 = require("./740111.js");
class b extends Chunk495852.C {
  create(e) {
    let t = {
      properties: {
        oneofKind: true
      },
      contentIdentifier: ""
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let a = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          a.properties = {
            oneofKind: "placeholder",
            placeholder: e.string()
          };
          break;
        case 2:
          a.properties = {
            oneofKind: "announcementModalVariant1",
            announcementModalVariant1: E.xY.internalBinaryRead(e, e.uint32(), n, a.properties.announcementModalVariant1)
          };
          break;
        case 4:
          a.properties = {
            oneofKind: "premiumTab",
            premiumTab: g.C.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTab)
          };
          break;
        case 5:
          a.properties = {
            oneofKind: "marketingPageBanner",
            marketingPageBanner: h.w.internalBinaryRead(e, e.uint32(), n, a.properties.marketingPageBanner)
          };
          break;
        case 6:
          a.properties = {
            oneofKind: "paymentModalBanner",
            paymentModalBanner: m.j.internalBinaryRead(e, e.uint32(), n, a.properties.paymentModalBanner)
          };
          break;
        case 7:
          a.properties = {
            oneofKind: "mobileBottomSheet",
            mobileBottomSheet: _.g.internalBinaryRead(e, e.uint32(), n, a.properties.mobileBottomSheet)
          };
          break;
        case 8:
          a.properties = {
            oneofKind: "giftIcon",
            giftIcon: p.O.internalBinaryRead(e, e.uint32(), n, a.properties.giftIcon)
          };
          break;
        case 9:
          a.properties = {
            oneofKind: "giftIconCoachmark",
            giftIconCoachmark: f.h.internalBinaryRead(e, e.uint32(), n, a.properties.giftIconCoachmark)
          };
          break;
        case 10:
          a.properties = {
            oneofKind: "giftPlanSelectionCardBanner",
            giftPlanSelectionCardBanner: d.C.internalBinaryRead(e, e.uint32(), n, a.properties.giftPlanSelectionCardBanner)
          };
          break;
        case 11:
          a.properties = {
            oneofKind: "giftCustomizationBanner",
            giftCustomizationBanner: u.m.internalBinaryRead(e, e.uint32(), n, a.properties.giftCustomizationBanner)
          };
          break;
        case 12:
          a.properties = {
            oneofKind: "billingSettingsNitroGiftBanner",
            billingSettingsNitroGiftBanner: c.V.internalBinaryRead(e, e.uint32(), n, a.properties.billingSettingsNitroGiftBanner)
          };
          break;
        case 13:
          a.properties = {
            oneofKind: "giftReminderNagbar",
            giftReminderNagbar: l.p.internalBinaryRead(e, e.uint32(), n, a.properties.giftReminderNagbar)
          };
          break;
        case 14:
          a.properties = {
            oneofKind: "giftReminderCoachmark",
            giftReminderCoachmark: s.r.internalBinaryRead(e, e.uint32(), n, a.properties.giftReminderCoachmark)
          };
          break;
        case 3:
          a.contentIdentifier = e.string();
          break;
        default:
          let o = n.readUnknownField;
          if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let b = e.skip(i);
          false !== o && (true === o ? r.z.onRead : o)(this.typeName, a, t, i, b)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "placeholder" === e.properties.oneofKind && t.tag(1, r.TD.LengthDelimited).string(e.properties.placeholder), "announcementModalVariant1" === e.properties.oneofKind && E.xY.internalBinaryWrite(e.properties.announcementModalVariant1, t.tag(2, r.TD.LengthDelimited).fork(), n).join(), "premiumTab" === e.properties.oneofKind && g.C.internalBinaryWrite(e.properties.premiumTab, t.tag(4, r.TD.LengthDelimited).fork(), n).join(), "marketingPageBanner" === e.properties.oneofKind && h.w.internalBinaryWrite(e.properties.marketingPageBanner, t.tag(5, r.TD.LengthDelimited).fork(), n).join(), "paymentModalBanner" === e.properties.oneofKind && m.j.internalBinaryWrite(e.properties.paymentModalBanner, t.tag(6, r.TD.LengthDelimited).fork(), n).join(), "mobileBottomSheet" === e.properties.oneofKind && _.g.internalBinaryWrite(e.properties.mobileBottomSheet, t.tag(7, r.TD.LengthDelimited).fork(), n).join(), "giftIcon" === e.properties.oneofKind && p.O.internalBinaryWrite(e.properties.giftIcon, t.tag(8, r.TD.LengthDelimited).fork(), n).join(), "giftIconCoachmark" === e.properties.oneofKind && f.h.internalBinaryWrite(e.properties.giftIconCoachmark, t.tag(9, r.TD.LengthDelimited).fork(), n).join(), "giftPlanSelectionCardBanner" === e.properties.oneofKind && d.C.internalBinaryWrite(e.properties.giftPlanSelectionCardBanner, t.tag(10, r.TD.LengthDelimited).fork(), n).join(), "giftCustomizationBanner" === e.properties.oneofKind && u.m.internalBinaryWrite(e.properties.giftCustomizationBanner, t.tag(11, r.TD.LengthDelimited).fork(), n).join(), "billingSettingsNitroGiftBanner" === e.properties.oneofKind && c.V.internalBinaryWrite(e.properties.billingSettingsNitroGiftBanner, t.tag(12, r.TD.LengthDelimited).fork(), n).join(), "giftReminderNagbar" === e.properties.oneofKind && l.p.internalBinaryWrite(e.properties.giftReminderNagbar, t.tag(13, r.TD.LengthDelimited).fork(), n).join(), "giftReminderCoachmark" === e.properties.oneofKind && s.r.internalBinaryWrite(e.properties.giftReminderCoachmark, t.tag(14, r.TD.LengthDelimited).fork(), n).join(), "" !== e.contentIdentifier && t.tag(3, r.TD.LengthDelimited).string(e.contentIdentifier);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [{
      no: 1,
      name: "placeholder",
      kind: "scalar",
      oneof: "properties",
      T: 9
    }, {
      no: 2,
      name: "announcement_modal_variant_1",
      kind: "message",
      oneof: "properties",
      T: () => E.xY
    }, {
      no: 4,
      name: "premium_tab",
      kind: "message",
      oneof: "properties",
      T: () => g.C
    }, {
      no: 5,
      name: "marketing_page_banner",
      kind: "message",
      oneof: "properties",
      T: () => h.w
    }, {
      no: 6,
      name: "payment_modal_banner",
      kind: "message",
      oneof: "properties",
      T: () => m.j
    }, {
      no: 7,
      name: "mobile_bottom_sheet",
      kind: "message",
      oneof: "properties",
      T: () => _.g
    }, {
      no: 8,
      name: "gift_icon",
      kind: "message",
      oneof: "properties",
      T: () => p.O
    }, {
      no: 9,
      name: "gift_icon_coachmark",
      kind: "message",
      oneof: "properties",
      T: () => f.h
    }, {
      no: 10,
      name: "gift_plan_selection_card_banner",
      kind: "message",
      oneof: "properties",
      T: () => d.C
    }, {
      no: 11,
      name: "gift_customization_banner",
      kind: "message",
      oneof: "properties",
      T: () => u.m
    }, {
      no: 12,
      name: "billing_settings_nitro_gift_banner",
      kind: "message",
      oneof: "properties",
      T: () => c.V
    }, {
      no: 13,
      name: "gift_reminder_nagbar",
      kind: "message",
      oneof: "properties",
      T: () => l.p
    }, {
      no: 14,
      name: "gift_reminder_coachmark",
      kind: "message",
      oneof: "properties",
      T: () => s.r
    }, {
      no: 3,
      name: "content_identifier",
      kind: "scalar",
      T: 9
    }])
  }
}
let y = new b