/** Chunk was on web.js **/
/** chunk id: 210817, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk877481 = require("./877481.js"),
  Chunk358085 = require("./358085.js"),
  Chunk817788 = require("./817788.js");
let o = {
  async getRobloxSubgameURL(e) {
    let t = (0, i.isMac)() ? (0, a.VX)(e) : a.HQ;
    return (0, i.isDesktop)() && await r.Z.isProtocolRegistered(t) ? (0, a.VX)(e) : (0, a.uf)(e)
  }
}