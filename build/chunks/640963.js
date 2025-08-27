/** Chunk was on web.js **/
/** chunk id: 640963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk493683 = require("./493683.js"),
  Chunk592125 = require("./592125.js");

function s(e) {
  let {
    channelId: t,
    onUpdateComplete: n
  } = e, [s, l] = r.useState(false), c = r.useRef(null), u = (0, i.e7)([o.Z], () => {
    var e, n;
    return null == (n = o.Z.getChannel(t)) || null == (e = n.wallpaper) ? true : e.wallpaperId
  }), d = r.useCallback(() => {
    s && (null == n || n(c.current), l(false))
  }, [n, s]), f = r.useCallback(async (e, t, n) => {
    l(true), c.current = t;
    try {
      (await a.Z.setWallpaper(e, t)).ok || null == n || n();
      let r = setTimeout(() => d(), 5e3);
      return () => clearTimeout(r)
    } catch (e) {
      null == n || n(), l(false)
    }
  }, [l, d]);
  return r.useEffect(() => {
    (null != u ? u : null) === c.current && d()
  }, [u, d]), {
    isUpdating: s,
    updateChatWallpaper: f
  }
}