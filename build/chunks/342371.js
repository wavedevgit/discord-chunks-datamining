/** Chunk was on web.js **/
/** chunk id: 342371, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => c
}), require("./734808.js"), require("./896048.js"), require("./65821.js");
var Chunk852015 = require("./852015.js"),
  Chunk144367 = require("./144367.js"),
  Chunk428420 = require("./428420.js"),
  Chunk324281 = require("./324281.js"),
  Chunk414525 = require("./414525.js");
class l extends Chunk324281.G {
  create(e) {
    let t = {
      boxAnimationUrl: "",
      trinketAnimationUrl: "",
      trinketGlowAnimationUrl: ""
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
          a.boxAnimationUrl = e.string();
          break;
        case 2:
          a.trinketAnimationUrl = e.string();
          break;
        case 3:
          a.trinketGlowAnimationUrl = e.string();
          break;
        case 4:
          a.gradient = s.H.internalBinaryRead(e, e.uint32(), n, a.gradient);
          break;
        default:
          let o = n.readUnknownField;
          if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let l = e.skip(i);
          false !== o && (true === o ? r.f$.onRead : o)(this.typeName, a, t, i, l)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.boxAnimationUrl && t.tag(1, r.O0.LengthDelimited).string(e.boxAnimationUrl), "" !== e.trinketAnimationUrl && t.tag(2, r.O0.LengthDelimited).string(e.trinketAnimationUrl), "" !== e.trinketGlowAnimationUrl && t.tag(3, r.O0.LengthDelimited).string(e.trinketGlowAnimationUrl), e.gradient && s.H.internalBinaryWrite(e.gradient, t.tag(4, r.O0.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.f$.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.GiftIcon", [{
      no: 1,
      name: "box_animation_url",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "trinket_animation_url",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "trinket_glow_animation_url",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "gradient",
      kind: "message",
      T: () => s.H
    }])
  }
}
let c = new l