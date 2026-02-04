/** Chunk was on 59569 **/
/** chunk id: 973397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk417597 = require("./417597.js"),
  Chunk524799 = require("./524799.js"),
  Chunk585958 = require("./585958.js"),
  Chunk760751 = require("./760751.js"),
  Chunk486020 = require("./486020.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  var t;
  let {
    coverImageUrl: n,
    localizedName: c,
    isFetching: u
  } = (0, i.n)(e), d = (0, r.bG)([a.A], () => a.A.getDetectableGame(e)), f = (0, r.bG)([l.A], () => l.A.canFetch(e));
  return {
    coverImageUrl: null != n ? n : o.Ay.getGameAssetURL({
      id: e,
      hash: null == d ? true : d.cover_image_hash,
      keepAspectRatio: true
    }),
    gameName: null != (t = null != c ? c : null == d ? true : d.name) ? t : s.intl.string(s.t.GIWFlF),
    isLoading: f || u
  }
}