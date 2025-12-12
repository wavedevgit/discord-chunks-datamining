/** Chunk was on web.js **/
/** chunk id: 496207, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk914010 = require("./914010.js"),
  Chunk558217 = require("./558217.js"),
  Chunk185923 = require("./185923.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk147913.Z {
  handleInteraction(e) {
    let {
      interaction: t
    } = e;
    if ([a.qR.EmojiButtonMouseEntered].includes(t)) {
      let e = i.Z.getGuildId();
      (0, o.O)(e)
    }
  }
  constructor(...e) {
    super(...e), s(this, "actions", {
      EMOJI_INTERACTION_INITIATED: this.handleInteraction
    })
  }
}
let c = new l