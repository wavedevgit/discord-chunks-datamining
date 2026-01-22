/** Chunk was on web.js **/
/** chunk id: 611656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => y,
  oS: () => b
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
    return null == e || null == t ? ["no match"] : ((0, o.Lt)(t.flags, h.gfo.GAME_PROFILE_DISABLED) && n.push("profile disabled"), e.themes.includes(s.W.EROTIC) && n.push("nsfw"), (null == e.summary || 0 === e.summary.length) && n.push("no summary"), (null == e.summary || 0 === e.summary.length) && n.push("no summary"), n)
  },
  E = (e, t) => 0 === g(e, t).length,
  b = e => E(d.A.getGame(e), c.A.getApplication(e)),
  y = e => {
    let {
      location: t,
      applicationId: n = "",
      autoTrackExposure: i = true,
      source: s,
      trackEntryPointImpression: o = true
    } = e, c = r.useRef(false), p = (0, _.MH)(t, i);
    (0, f.e)(p && "" !== n ? n : null);
    let h = (0, l.bG)([d.A], () => d.A.getGame(n)),
      b = (0, u.O)(n),
      y = r.useMemo(() => null != h && null != b ? E(h, b) : null, [b, h]);
    return r.useEffect(() => {
      !c.current && p && o && false === d.A.isFetching(n) && null != h && null != y && (a()(null != s, "Cannot track a Game Profile Entry Point Impressions without a source."), m(y, n, g(h), s), c.current = true)
    }, [y, n, p, h, s, o]), {
      shouldOpenGameProfile: p && true === y,
      applicationId: n
    }
  }