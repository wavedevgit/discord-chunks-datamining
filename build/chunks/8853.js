/** Chunk was on 1272 **/
/** chunk id: 8853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => f
}), require("./980754.js"), require("./388685.js"), require("./415506.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js"),
  Chunk472069 = require("./472069.js"),
  Chunk999755 = require("./999755.js"),
  Chunk990830 = require("./990830.js"),
  Chunk214611 = require("./214611.js"),
  Chunk740111 = require("./740111.js");
class p extends Chunk495852.C {
  create(e) {
    let t = {
      properties: {
        oneofKind: true
      },
      contentIdentifier: ""
    };
    return globalThis.Object.defineProperty(t, l.C, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let l = null != i ? i : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          l.properties = {
            oneofKind: "placeholder",
            placeholder: e.string()
          };
          break;
        case 2:
          l.properties = {
            oneofKind: "announcementModalVariant1",
            announcementModalVariant1: d.xY.internalBinaryRead(e, e.uint32(), n, l.properties.announcementModalVariant1)
          };
          break;
        case 4:
          l.properties = {
            oneofKind: "premiumTab",
            premiumTab: u.C.internalBinaryRead(e, e.uint32(), n, l.properties.premiumTab)
          };
          break;
        case 5:
          l.properties = {
            oneofKind: "marketingPageBanner",
            marketingPageBanner: c.w.internalBinaryRead(e, e.uint32(), n, l.properties.marketingPageBanner)
          };
          break;
        case 6:
          l.properties = {
            oneofKind: "paymentModalBanner",
            paymentModalBanner: s.j.internalBinaryRead(e, e.uint32(), n, l.properties.paymentModalBanner)
          };
          break;
        case 7:
          l.properties = {
            oneofKind: "mobileBottomSheet",
            mobileBottomSheet: o.g.internalBinaryRead(e, e.uint32(), n, l.properties.mobileBottomSheet)
          };
          break;
        case 3:
          l.contentIdentifier = e.string();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let p = e.skip(i);
          false !== a && (true === a ? r.z.onRead : a)(this.typeName, l, t, i, p)
      }
    }
    return l
  }
  internalBinaryWrite(e, t, n) {
    "placeholder" === e.properties.oneofKind && t.tag(1, r.TD.LengthDelimited).string(e.properties.placeholder), "announcementModalVariant1" === e.properties.oneofKind && d.xY.internalBinaryWrite(e.properties.announcementModalVariant1, t.tag(2, r.TD.LengthDelimited).fork(), n).join(), "premiumTab" === e.properties.oneofKind && u.C.internalBinaryWrite(e.properties.premiumTab, t.tag(4, r.TD.LengthDelimited).fork(), n).join(), "marketingPageBanner" === e.properties.oneofKind && c.w.internalBinaryWrite(e.properties.marketingPageBanner, t.tag(5, r.TD.LengthDelimited).fork(), n).join(), "paymentModalBanner" === e.properties.oneofKind && s.j.internalBinaryWrite(e.properties.paymentModalBanner, t.tag(6, r.TD.LengthDelimited).fork(), n).join(), "mobileBottomSheet" === e.properties.oneofKind && o.g.internalBinaryWrite(e.properties.mobileBottomSheet, t.tag(7, r.TD.LengthDelimited).fork(), n).join(), "" !== e.contentIdentifier && t.tag(3, r.TD.LengthDelimited).string(e.contentIdentifier);
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
      T: () => Chunk472069.g
    }, {
      no: 3,
      name: "content_identifier",
      kind: "scalar",
      T: 9
    }])
  }
}
let f = new p