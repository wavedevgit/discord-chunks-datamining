/** Chunk was on 1272 **/
/** chunk id: 408026, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk224706 = require("./224706.js"),
  Chunk710845 = require("./710845.js"),
  Chunk77498 = require("./77498.js");
let o = {};

function s(e) {
  let {
    name: t,
    hash: n,
    missingData: r
  } = e;
  for (let e of (a.Z.markGameReported(t), r))
    if ("icon" === e) {
      let e = o[t];
      null != e && i.Z.uploadIcon(t, n, e);
      return
    } else new l.Z("GameStoreIconManager").log("Could not find missing data key: ".concat(e))
}

function c(e) {
  let {
    gameName: t,
    icon: n
  } = e;
  o[t] = n
}
let u = {
  initialize() {
    Chunk570140.Z.subscribe("UNVERIFIED_GAME_UPDATE", s), Chunk570140.Z.subscribe("GAME_ICON_UPDATE", c)
  }
}