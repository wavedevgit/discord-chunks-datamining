/** Chunk was on web.js **/
/** chunk id: 164725, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => d
}), require("./467055.js");
var Chunk473749 = require("./473749.js"),
  Chunk835473 = require("./835473.js"),
  Chunk768494 = require("./768494.js"),
  Chunk929677 = require("./929677.js"),
  Chunk823379 = require("./823379.js");

function l(e) {
  return null != e && null != e.width && null != e.height
}

function c(e) {
  let t = null != e ? (0, o.ym)(e) : null;
  return l(t) ? t : null
}

function u(e, t) {
  var n, r, i, o, a, s, l, u, d, f, p, _;
  let m = e.getIconURL(16),
    h = null == t || null == (i = t.profile) || null == (r = i.data) || null == (n = r.primary) ? true : n.season,
    g = null == t || null == (s = t.profile) || null == (a = s.data) || null == (o = a.primary) ? true : o.rank_name,
    E = c(null == t || null == (d = t.profile) || null == (u = d.data) || null == (l = u.primary) ? true : l.rank_image),
    b = c(null == t || null == (_ = t.profile) || null == (p = _.data) || null == (f = p.primary) ? true : f.featured_played_character_image);
  return null == e || null == m || null == h || null == g || null == b ? null : {
    application: {
      id: e.id,
      name: e.name,
      icon: m
    },
    season: h,
    currentRankName: g,
    currentRankImage: E,
    featuredCharacterImage: b
  }
}

function d(e, t) {
  let n = (0, i.Z)(t.map(e => e.applicationId)),
    {
      data: o
    } = (0, a.O)(e);
  return r.useMemo(() => {
    var e;
    let r = Object.fromEntries(n.filter(s.lm).map(e => [e.id, e])),
      i = Object.fromEntries(null != (e = null == o ? true : o.map(e => [e.application_id, e])) ? e : []);
    return Object.fromEntries(t.map(e => {
      let t = r[e.applicationId],
        n = i[e.applicationId];
      if (null == t || null == n) return null;
      let o = u(t, n);
      return null == o ? null : [e.applicationId, o]
    }).filter(s.lm))
  }, [n, o, t])
}