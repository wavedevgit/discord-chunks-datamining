/** Chunk was on web.js **/
/** chunk id: 631536, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => c
}), require("./980754.js"), require("./388685.js"), require("./415506.js");
var Chunk230367 = require("./230367.js"),
  Chunk320215 = require("./320215.js"),
  Chunk240773 = require("./240773.js"),
  Chunk495852 = require("./495852.js"),
  Chunk7883 = require("./7883.js");
class l extends Chunk495852.C {
  create(e) {
    let t = {
      boxAnimationUrl: "",
      trinketAnimationUrl: "",
      trinketGlowAnimationUrl: ""
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
          a.boxAnimationUrl = e.string();
          break;
        case 2:
          a.trinketAnimationUrl = e.string();
          break;
        case 3:
          a.trinketGlowAnimationUrl = e.string();
          break;
        case 4:
          a.gradient = s.p.internalBinaryRead(e, e.uint32(), n, a.gradient);
          break;
        default:
          let o = n.readUnknownField;
          if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let l = e.skip(i);
          false !== o && (true === o ? r.z.onRead : o)(this.typeName, a, t, i, l)
      }
    }
    return a
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.boxAnimationUrl && t.tag(1, r.TD.LengthDelimited).string(e.boxAnimationUrl), "" !== e.trinketAnimationUrl && t.tag(2, r.TD.LengthDelimited).string(e.trinketAnimationUrl), "" !== e.trinketGlowAnimationUrl && t.tag(3, r.TD.LengthDelimited).string(e.trinketGlowAnimationUrl), e.gradient && s.p.internalBinaryWrite(e.gradient, t.tag(4, r.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    returnfalse !== i && (true == i ? r.z.onWrite : i)(this.typeName, e, t), t
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
      T: () => s.p
    }])
  }
}
let c = new l