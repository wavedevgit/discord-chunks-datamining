/** Chunk was on web.js **/
/** chunk id: 828186, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => u
}), require("./980754.js"), require("./388685.js"), require("./415506.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js"),
  Chunk60814 = require("./60814.js"),
  Chunk7883 = require("./7883.js");
class c extends Chunk495852.C {
  create(e) {
    let t = {
      assetUrl: "",
      desktopBody: "",
      mobileBody: "",
      backgroundAssetUrl: ""
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
          a.assetUrl = e.string();
          break;
        case 2:
          a.desktopBody = e.string();
          break;
        case 3:
          a.mobileBody = e.string();
          break;
        case 4:
          a.gradient = l.p.internalBinaryRead(e, e.uint32(), n, a.gradient);
          break;
        case 5:
          a.backgroundAssetUrl = e.string();
          break;
        case 6:
          a.asset = s.F.internalBinaryRead(e, e.uint32(), n, a.asset);
          break;
        case 7:
          a.backgroundAsset = s.F.internalBinaryRead(e, e.uint32(), n, a.backgroundAsset);
          break;
        case 8:
          a.mobileBackgroundAsset = s.F.internalBinaryRead(e, e.uint32(), n, a.mobileBackgroundAsset);
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
    "" !== e.assetUrl && t.tag(1, r.TD.LengthDelimited).string(e.assetUrl), "" !== e.desktopBody && t.tag(2, r.TD.LengthDelimited).string(e.desktopBody), "" !== e.mobileBody && t.tag(3, r.TD.LengthDelimited).string(e.mobileBody), e.gradient && l.p.internalBinaryWrite(e.gradient, t.tag(4, r.TD.LengthDelimited).fork(), n).join(), "" !== e.backgroundAssetUrl && t.tag(5, r.TD.LengthDelimited).string(e.backgroundAssetUrl), e.asset && s.F.internalBinaryWrite(e.asset, t.tag(6, r.TD.LengthDelimited).fork(), n).join(), e.backgroundAsset && s.F.internalBinaryWrite(e.backgroundAsset, t.tag(7, r.TD.LengthDelimited).fork(), n).join(), e.mobileBackgroundAsset && s.F.internalBinaryWrite(e.mobileBackgroundAsset, t.tag(8, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.GiftCustomizationBanner", [{
      no: 1,
      name: "asset_url",
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
      name: "gradient",
      kind: "message",
      T: () => l.p
    }, {
      no: 5,
      name: "background_asset_url",
      kind: "scalar",
      T: 9
    }, {
      no: 6,
      name: "asset",
      kind: "message",
      T: () => s.F
    }, {
      no: 7,
      name: "background_asset",
      kind: "message",
      T: () => s.F
    }, {
      no: 8,
      name: "mobile_background_asset",
      kind: "message",
      T: () => s.F
    }])
  }
}
let u = new c