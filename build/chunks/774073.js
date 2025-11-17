/** Chunk was on web.js **/
/** chunk id: 774073, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => y,
  z6: () => b
}), require("./997841.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk683076 = require("./683076.js"),
  Chunk442837 = require("./442837.js"),
  Chunk812206 = require("./812206.js"),
  Chunk565183 = require("./565183.js"),
  Chunk669764 = require("./669764.js"),
  Chunk210753 = require("./210753.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk539746 = require("./539746.js"),
  Chunk981631 = require("./981631.js");
let m = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      r = arguments.length > 3 ? arguments[3] : true;
    f.default.track(h.rMx.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
      game_profile_available: e,
      application_id: t,
      rejection_reason: n,
      source: r
    })
  },
  g = (e, t) => {
    let n = [];
    return null == e || null == t ? ["no match"] : ((0, _.yE)(t.flags, h.udG.GAME_PROFILE_DISABLED) && n.push("profile disabled"), e.themes.includes(o.i.EROTIC) && n.push("nsfw"), (null == e.summary || 0 === e.summary.length) && n.push("no summary"), (null == e.summary || 0 === e.summary.length) && n.push("no summary"), n)
  },
  E = (e, t) => 0 === g(e, t).length,
  b = e => E(u.Z.getGame(e), l.Z.getApplication(e)),
  y = e => {
    let {
      location: t,
      applicationId: n = "",
      autoTrackExposure: i = true,
      source: o,
      trackEntryPointImpression: l = true
    } = e, f = r.useRef(false), _ = (0, p.xG)(t, i);
    (0, d.M)(_ && "" !== n ? n : null);
    let h = (0, s.e7)([u.Z], () => u.Z.getGame(n)),
      b = (0, c.Z)(n),
      y = r.useMemo(() => null != h && null != b ? E(h, b) : null, [b, h]);
    return r.useEffect(() => {
      !f.current && _ && l && false === u.Z.isFetching(n) && null != h && null != y && (a()(null != o, "Cannot track a Game Profile Entry Point Impressions without a source."), m(y, n, g(h), o), f.current = true)
    }, [y, n, _, h, o, l]), {
      shouldOpenGameProfile: _ && true === y,
      applicationId: n
    }
  }