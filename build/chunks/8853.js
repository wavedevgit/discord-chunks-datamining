/** Chunk was on web.js **/
/** chunk id: 8853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => p
}), require("./980754.js"), require("./388685.js"), require("./415506.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js"),
  Chunk922122 = require("./922122.js"),
  Chunk999755 = require("./999755.js"),
  Chunk990830 = require("./990830.js"),
  Chunk214611 = require("./214611.js"),
  Chunk740111 = require("./740111.js");
class f extends Chunk495852.C {
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
            announcementModalVariant1: d.xY.internalBinaryRead(e, e.uint32(), n, a.properties.announcementModalVariant1)
          };
          break;
        case 4:
          a.properties = {
            oneofKind: "premiumTab",
            premiumTab: u.C.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTab)
          };
          break;
        case 5:
          a.properties = {
            oneofKind: "marketingPageBanner",
            marketingPageBanner: c.w.internalBinaryRead(e, e.uint32(), n, a.properties.marketingPageBanner)
          };
          break;
        case 6:
          a.properties = {
            oneofKind: "paymentModalBanner",
            paymentModalBanner: l.j.internalBinaryRead(e, e.uint32(), n, a.properties.paymentModalBanner)
          };
          break;
        case 7:
          a.properties = {
            oneofKind: "mobileBottomSheet",
            mobileBottomSheet: s.g.internalBinaryRead(e, e.uint32(), n, a.properties.mobileBottomSheet)
          };
          break;
        case 3:
          a.contentIdentifier = e.string();
          break;
        default:
          let o = n.readUnknownField;
          if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let f = e.skip(i);
          false !== o && (true === o ? r.z.onRead : o)(this.typeName, a, t, i, f)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "placeholder" === e.properties.oneofKind && t.tag(1, r.TD.LengthDelimited).string(e.properties.placeholder), "announcementModalVariant1" === e.properties.oneofKind && d.xY.internalBinaryWrite(e.properties.announcementModalVariant1, t.tag(2, r.TD.LengthDelimited).fork(), n).join(), "premiumTab" === e.properties.oneofKind && u.C.internalBinaryWrite(e.properties.premiumTab, t.tag(4, r.TD.LengthDelimited).fork(), n).join(), "marketingPageBanner" === e.properties.oneofKind && c.w.internalBinaryWrite(e.properties.marketingPageBanner, t.tag(5, r.TD.LengthDelimited).fork(), n).join(), "paymentModalBanner" === e.properties.oneofKind && l.j.internalBinaryWrite(e.properties.paymentModalBanner, t.tag(6, r.TD.LengthDelimited).fork(), n).join(), "mobileBottomSheet" === e.properties.oneofKind && s.g.internalBinaryWrite(e.properties.mobileBottomSheet, t.tag(7, r.TD.LengthDelimited).fork(), n).join(), "" !== e.contentIdentifier && t.tag(3, r.TD.LengthDelimited).string(e.contentIdentifier);
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
      T: () => Chunk740111.xY
    }, {
      no: 4,
      name: "premium_tab",
      kind: "message",
      oneof: "properties",
      T: () => Chunk214611.C
    }, {
      no: 5,
      name: "marketing_page_banner",
      kind: "message",
      oneof: "properties",
      T: () => Chunk990830.w
    }, {
      no: 6,
      name: "payment_modal_banner",
      kind: "message",
      oneof: "properties",
      T: () => Chunk999755.j
    }, {
      no: 7,
      name: "mobile_bottom_sheet",
      kind: "message",
      oneof: "properties",
      T: () => Chunk922122.g
    }, {
      no: 3,
      name: "content_identifier",
      kind: "scalar",
      T: 9
    }])
  }
}
let p = new f