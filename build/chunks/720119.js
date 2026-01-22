/** Chunk was on web.js **/
/** chunk id: 720119, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => c
}), require("./734808.js"), require("./896048.js"), require("./65821.js");
var Chunk852015 = require("./852015.js"),
  Chunk144367 = require("./144367.js"),
  Chunk428420 = require("./428420.js"),
  Chunk324281 = require("./324281.js"),
  Chunk453360 = require("./453360.js");
class l extends Chunk324281.G {
  create(e) {
    let t = {
      header: "",
      body: "",
      assetUrl: ""
    };
    return globalThis.Object.defineProperty(t, a.$, {
      enumerable: false,
      value: this
    }), true !== e && (0, i.x)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let a = null != i ? i : this.create(),
      s = e.pos + t;
    for (; e.pos < s;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          a.header = e.string();
          break;
        case 2:
          a.body = e.string();
          break;
        case 3:
          a.assetUrl = e.string();
          break;
        case 4:
          a.asset = o.i.internalBinaryRead(e, e.uint32(), n, a.asset);
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let l = e.skip(i);
          false !== s && (true === s ? r.f$.onRead : s)(this.typeName, a, t, i, l)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.header && t.tag(1, r.O0.LengthDelimited).string(e.header), "" !== e.body && t.tag(2, r.O0.LengthDelimited).string(e.body), "" !== e.assetUrl && t.tag(3, r.O0.LengthDelimited).string(e.assetUrl), e.asset && o.i.internalBinaryWrite(e.asset, t.tag(4, r.O0.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.f$.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.GiftIconCoachmark", [{
      no: 1,
      name: "header",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "body",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "asset_url",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "asset",
      kind: "message",
      T: () => o.i
    }])
  }
}
let c = new l