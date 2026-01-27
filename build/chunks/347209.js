/** Chunk was on web.js **/
/** chunk id: 347209, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk967198 = require("./967198.js"),
  Chunk17591 = require("./17591.js"),
  Chunk307731 = require("./307731.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk439372.A {
  handleInteraction(e) {
    let {
      interaction: t
    } = e;
    if ([o.Vl.EmojiButtonMouseEntered].includes(t)) {
      let e = i.A.getGuildId();
      (0, a.V)(e)
    }
  }
  constructor(...e) {
    super(...e), s(this, "actions", {
      EMOJI_INTERACTION_INITIATED: this.handleInteraction
    })
  }
}
let c = new l