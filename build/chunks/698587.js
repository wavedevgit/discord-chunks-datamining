/** Chunk was on web.js **/
/** chunk id: 698587, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => u
}), require("./980754.js"), require("./388685.js"), require("./415506.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js"),
  Chunk7883 = require("./7883.js"),
  Chunk60814 = require("./60814.js");
class c extends Chunk495852.C {
  create(e) {
    let t = {
      headerKey: "",
      desktopBodyKey: "",
      mobileBodyKey: "",
      bannerAssetUrl: "",
      backgroundAssetUrl: "",
      cardAssetUrl: ""
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
          a.headerKey = e.string();
          break;
        case 2:
          a.desktopBodyKey = e.string();
          break;
        case 3:
          a.mobileBodyKey = e.string();
          break;
        case 4:
          a.avatarAsset = l.F.internalBinaryRead(e, e.uint32(), n, a.avatarAsset);
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
          a.gradient = s.p.internalBinaryRead(e, e.uint32(), n, a.gradient);
          break;
        default:
          let o = n.readUnknownField;
          if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let c = e.skip(i);
          false !== o && (true === o ? r.z.onRead : o)(this.typeName, a, t, i, c)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.headerKey && t.tag(1, r.TD.LengthDelimited).string(e.headerKey), "" !== e.desktopBodyKey && t.tag(2, r.TD.LengthDelimited).string(e.desktopBodyKey), "" !== e.mobileBodyKey && t.tag(3, r.TD.LengthDelimited).string(e.mobileBodyKey), e.avatarAsset && l.F.internalBinaryWrite(e.avatarAsset, t.tag(4, r.TD.LengthDelimited).fork(), n).join(), "" !== e.bannerAssetUrl && t.tag(5, r.TD.LengthDelimited).string(e.bannerAssetUrl), "" !== e.backgroundAssetUrl && t.tag(6, r.TD.LengthDelimited).string(e.backgroundAssetUrl), "" !== e.cardAssetUrl && t.tag(7, r.TD.LengthDelimited).string(e.cardAssetUrl), e.gradient && s.p.internalBinaryWrite(e.gradient, t.tag(8, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.GiftPlanSelectionCardBanner", [{
      no: 1,
      name: "header_key",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "desktop_body_key",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "mobile_body_key",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "avatar_asset",
      kind: "message",
      T: () => Chunk60814.F
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
      T: () => Chunk7883.p
    }])
  }
}
let u = new c