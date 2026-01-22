/** Chunk was on web.js **/
/** chunk id: 978926, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => l
}), require("./734808.js"), require("./896048.js"), require("./65821.js");
var Chunk852015 = require("./852015.js"),
  Chunk144367 = require("./144367.js"),
  Chunk428420 = require("./428420.js"),
  Chunk324281 = require("./324281.js");
class o extends Chunk324281.G {
  create(e) {
    let t = {
      body: ""
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
      if (1 === t) a.body = e.string();
      else {
        let s = n.readUnknownField;
        if ("throw" === s) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let o = e.skip(i);
        false !== s && (true === s ? r.f$.onRead : s)(this.typeName, a, t, i, o)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.body && t.tag(1, r.O0.LengthDelimited).string(e.body);
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.f$.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.GiftReminderNagbar", [{
      no: 1,
      name: "body",
      kind: "scalar",
      T: 9
    }])
  }
}
let l = new o