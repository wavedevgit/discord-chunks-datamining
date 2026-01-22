/** Chunk was on web.js **/
/** chunk id: 108094, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => l
}), require("./734808.js"), require("./896048.js"), require("./65821.js");
var Chunk852015 = require("./852015.js"),
  Chunk144367 = require("./144367.js"),
  Chunk428420 = require("./428420.js"),
  Chunk324281 = require("./324281.js");
class o extends Chunk324281.G {
  create(e) {
    let t = {
      badgeLabel: "",
      acknowledgedBadgeLabel: ""
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
          a.badgeLabel = e.string();
          break;
        case 2:
          a.acknowledgedBadgeLabel = e.string();
          break;
        default:
          let s = n.readUnknownField;
          if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let o = e.skip(i);
          false !== s && (true === s ? r.f$.onRead : s)(this.typeName, a, t, i, o)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.badgeLabel && t.tag(1, r.O0.LengthDelimited).string(e.badgeLabel), "" !== e.acknowledgedBadgeLabel && t.tag(2, r.O0.LengthDelimited).string(e.acknowledgedBadgeLabel);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.f$.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.PremiumTab", [{
      no: 1,
      name: "badge_label",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "acknowledged_badge_label",
      kind: "scalar",
      T: 9
    }])
  }
}
let l = new o