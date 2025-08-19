/** Chunk was on 66181 **/
/** chunk id: 326528, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => d
});
var Chunk481060 = require("./481060.js"),
  Chunk358085 = require("./358085.js"),
  Chunk991346 = require("./991346.js"),
  Chunk168308 = require("./168308.js"),
  Chunk726985 = require("./726985.js"),
  Chunk332325 = require("./332325.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let e = (0, Chunk168308.bC)(),
    t = (0, Chunk991346.Gj)(Chunk726985.s6.GAMES),
    n = [{
      id: Chunk332325.Z.MY_GAMES,
      title: Chunk388032.intl.string(Chunk388032.t["5DMgp6"]),
      icon: Chunk481060.xoD,
      predicate: () => !Chunk358085.isPlatformEmbedded,
      setting: Chunk726985.s6.GAMES_MY_GAMES
    }, {
      id: Chunk332325.Z.CLIPS,
      title: Chunk388032.intl.string(Chunk388032.t.z2jK6e),
      icon: Chunk481060.AlX,
      setting: Chunk726985.s6.GAMES_CLIPS
    }, {
      id: Chunk332325.Z.OVERLAY,
      title: Chunk388032.intl.string(Chunk388032.t.bNqkDw),
      icon: Chunk481060.n6r,
      predicate: () => !module,
      setting: Chunk726985.s6.GAMES_OVERLAY
    }, {
      id: Chunk332325.Z.ACTIVITY_PRIVACY,
      title: Chunk388032.intl.string(Chunk388032.t.Cq98yM),
      icon: Chunk481060.qOE,
      setting: Chunk726985.s6.GAMES_ACTIVITY_PRIVACY
    }].filter(e => null == e.predicate || !e.predicate());
  if (null != exports && exports.size > 0) {
    let e = require.filter(e => t.has(e.setting));
    return module.length > 0 ? module : require
  }
  return require
}