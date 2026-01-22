/** Chunk was on 21738 **/
/** chunk id: 257402, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk544420 = require("./544420.js"),
  Chunk626584 = require("./626584.js"),
  Chunk760751 = require("./760751.js");
let s = {};

function o(e) {
  let {
    name: t,
    hash: n,
    missingData: r
  } = e;
  for (let e of (a.A.markGameReported(t), r))
    if ("icon" === e) {
      let e = s[t];
      null != e && i.A.uploadIcon(t, n, e);
      return
    } else new l.A("GameStoreIconManager").log("Could not find missing data key: ".concat(e))
}

function c(e) {
  let {
    gameName: t,
    icon: n
  } = e;
  s[t] = n
}
let u = {
  initialize() {
    r.h.subscribe("UNVERIFIED_GAME_UPDATE", o), r.h.subscribe("GAME_ICON_UPDATE", c)
  }
}