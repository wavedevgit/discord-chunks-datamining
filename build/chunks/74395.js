/** Chunk was on 7685 **/
/** chunk id: 74395, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk810412 = require("./810412.js"),
  Chunk914853 = require("./914853.js"),
  Chunk509295 = require("./509295.js"),
  Chunk406595 = require("./406595.js");

function o(e) {
  let {
    tab: t,
    targetId: n,
    shouldStopPropagation: o,
    widgetType: u
  } = e;
  return l.useCallback(e => {
    o && (null == e || e.preventDefault(), null == e || e.stopPropagation());
    let [l] = a.A.isFavorite(t, n);
    (0, s.k)({
      tab: t,
      targetId: n,
      isFavorite: !l
    }), (0, r.YX)(u, {
      type: r.Z5.FAVORITE,
      value: l ? r.IP.REMOVED_FROM_FAVORITES : r.IP.ADDED_TO_FAVORITES,
      secondaryValue: t,
      userId: t === i.x.FRIENDS ? n : true
    })
  }, [o, t, n, u])
}