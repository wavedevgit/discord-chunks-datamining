/** Chunk was on web.js **/
/** chunk id: 978656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => u
}), require("./734808.js"), require("./896048.js"), require("./65821.js");
var Chunk852015 = require("./852015.js"),
  Chunk144367 = require("./144367.js"),
  Chunk428420 = require("./428420.js"),
  Chunk324281 = require("./324281.js"),
  Chunk414525 = require("./414525.js"),
  Chunk453360 = require("./453360.js");
class c extends Chunk324281.G {
  create(e) {
    let t = {
      header: "",
      desktopBody: "",
      mobileBody: "",
      bannerAssetUrl: "",
      backgroundAssetUrl: "",
      cardAssetUrl: ""
    };
    return globalThis.Object.defineProperty(t, a.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let a = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          a.header = e.string();
          break;
        case 2:
          a.desktopBody = e.string();
          break;
        case 3:
          a.mobileBody = e.string();
          break;
        case 4:
          a.avatarAsset = l.i.internalBinaryRead(e, e.uint32(), n, a.avatarAsset);
          break;
        case 5:
          a.bannerAssetUrl = e.string();
          break;
        case 6:
          a.backgroundAssetUrl = e.string();
          break;
        case 7:
          a.cardAssetUrl = e.string();
          break;
        case 8:
          a.gradient = s.H.internalBinaryRead(e, e.uint32(), n, a.gradient);
          break;
        case 9:
          a.bannerAsset = l.i.internalBinaryRead(e, e.uint32(), n, a.bannerAsset);
          break;
        case 10:
          a.backgroundAsset = l.i.internalBinaryRead(e, e.uint32(), n, a.backgroundAsset);
          break;
        case 11:
          a.cardAsset = l.i.internalBinaryRead(e, e.uint32(), n, a.cardAsset);
          break;
        case 12:
          a.mobileBannerAsset = l.i.internalBinaryRead(e, e.uint32(), n, a.mobileBannerAsset);
          break;
        default:
          let o = n.readUnknownField;
          if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let c = e.skip(i);
          false !== o && (true === o ? r.f$.onRead : o)(this.typeName, a, t, i, c)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.header && t.tag(1, r.O0.LengthDelimited).string(e.header), "" !== e.desktopBody && t.tag(2, r.O0.LengthDelimited).string(e.desktopBody), "" !== e.mobileBody && t.tag(3, r.O0.LengthDelimited).string(e.mobileBody), e.avatarAsset && l.i.internalBinaryWrite(e.avatarAsset, t.tag(4, r.O0.LengthDelimited).fork(), n).join(), "" !== e.bannerAssetUrl && t.tag(5, r.O0.LengthDelimited).string(e.bannerAssetUrl), "" !== e.backgroundAssetUrl && t.tag(6, r.O0.LengthDelimited).string(e.backgroundAssetUrl), "" !== e.cardAssetUrl && t.tag(7, r.O0.LengthDelimited).string(e.cardAssetUrl), e.gradient && s.H.internalBinaryWrite(e.gradient, t.tag(8, r.O0.LengthDelimited).fork(), n).join(), e.bannerAsset && l.i.internalBinaryWrite(e.bannerAsset, t.tag(9, r.O0.LengthDelimited).fork(), n).join(), e.backgroundAsset && l.i.internalBinaryWrite(e.backgroundAsset, t.tag(10, r.O0.LengthDelimited).fork(), n).join(), e.cardAsset && l.i.internalBinaryWrite(e.cardAsset, t.tag(11, r.O0.LengthDelimited).fork(), n).join(), e.mobileBannerAsset && l.i.internalBinaryWrite(e.mobileBannerAsset, t.tag(12, r.O0.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.f$.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.GiftPlanSelectionCardBanner", [{
      no: 1,
      name: "header",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "desktop_body",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "mobile_body",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "avatar_asset",
      kind: "message",
      T: () => l.i
    }, {
      no: 5,
      name: "banner_asset_url",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "background_asset_url",
      kind: "scalar",
      T: 9
    }, {
      no: 7,
      name: "card_asset_url",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "gradient",
      kind: "message",
      T: () => s.H
    }, {
      no: 9,
      name: "banner_asset",
      kind: "message",
      T: () => l.i
    }, {
      no: 10,
      name: "background_asset",
      kind: "message",
      T: () => l.i
    }, {
      no: 11,
      name: "card_asset",
      kind: "message",
      T: () => l.i
    }, {
      no: 12,
      name: "mobile_banner_asset",
      kind: "message",
      T: () => l.i
    }])
  }
}
let u = new c