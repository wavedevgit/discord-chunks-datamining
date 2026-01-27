/** Chunk was on web.js **/
/** chunk id: 611656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => b,
  oS: () => y
}), require("./938796.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk763956 = require("./763956.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk587895 = require("./587895.js"),
  Chunk858177 = require("./858177.js"),
  Chunk524799 = require("./524799.js"),
  Chunk585958 = require("./585958.js"),
  Chunk954571 = require("./954571.js"),
  Chunk658160 = require("./658160.js"),
  Chunk652215 = require("./652215.js");
let m = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      r = arguments.length > 3 ? arguments[3] : true;
    p.default.track(h.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
      game_profile_available: e,
      application_id: t,
      rejection_reason: n,
      source: r
    })
  },
  g = (e, t) => {
    let n = [];
    return null == e || null == t ? ["no match"] : ((0, s.Lt)(t.flags, h.gfo.GAME_PROFILE_DISABLED) && n.push("profile disabled"), e.themes.includes(o.W.EROTIC) && n.push("nsfw"), (null == e.summary || 0 === e.summary.length) && n.push("no summary"), (null == e.summary || 0 === e.summary.length) && n.push("no summary"), n)
  },
  E = (e, t) => 0 === g(e, t).length,
  y = e => E(d.A.getGame(e), c.A.getApplication(e)),
  b = e => {
    let {
      location: t,
      applicationId: n = "",
      autoTrackExposure: i = true,
      source: o,
      trackEntryPointImpression: s = true
    } = e, c = r.useRef(false), p = (0, _.MH)(t, i);
    (0, f.e)(p && "" !== n ? n : null);
    let h = (0, l.bG)([d.A], () => d.A.getGame(n)),
      y = (0, u.O)(n),
      b = r.useMemo(() => null != h && null != y ? E(h, y) : null, [y, h]);
    return r.useEffect(() => {
      !c.current && p && s && false === d.A.isFetching(n) && null != h && null != b && (a()(null != o, "Cannot track a Game Profile Entry Point Impressions without a source."), m(b, n, g(h), o), c.current = true)
    }, [b, n, p, h, o, s]), {
      shouldOpenGameProfile: p && true === b,
      applicationId: n
    }
  }