/** Chunk was on 49941 **/
/** chunk id: 394606, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk399606 = require("./399606.js"),
  Chunk669764 = require("./669764.js"),
  Chunk210753 = require("./210753.js"),
  Chunk77498 = require("./77498.js"),
  Chunk768581 = require("./768581.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  var t;
  let {
    coverImageUrl: n,
    localizedName: c,
    isFetching: u
  } = (0, l.$)(e), d = (0, r.e7)([a.Z], () => a.Z.getDetectableGame(e)), f = (0, r.e7)([i.Z], () => i.Z.canFetch(e));
  return {
    coverImageUrl: null != n ? n : o.ZP.getGameAssetURL({
      id: e,
      hash: null == d ? true : d.cover_image_hash,
      keepAspectRatio: true
    }),
    gameName: null != (t = null != c ? c : null == d ? true : d.name) ? t : s.intl.string(s.t.GIWFlF),
    isLoading: f || u
  }
}