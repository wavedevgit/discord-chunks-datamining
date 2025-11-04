/** Chunk was on 47793 **/
/** chunk id: 394606, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk399606 = require("./399606.js"),
  Chunk669764 = require("./669764.js"),
  Chunk210753 = require("./210753.js"),
  Chunk77498 = require("./77498.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  var t;
  let {
    coverImageUrl: n,
    localizedName: c,
    isFetching: s
  } = (0, a.$)(e), u = (0, r.e7)([l.Z], () => l.Z.getDetectableGame(e)), d = (0, r.e7)([i.Z], () => i.Z.canFetch(e));
  return {
    coverImageUrl: n,
    gameName: null != (t = null != c ? c : null == u ? true : u.name) ? t : o.intl.string(o.t.GIWFlF),
    isLoading: d || s
  }
}