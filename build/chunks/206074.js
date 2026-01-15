/** Chunk was on web.js **/
/** chunk id: 206074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y,
  q: () => b
}), require("./388685.js"), require("./997841.js");
var Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk704215 = require("./704215.js"),
  Chunk915346 = require("./915346.js"),
  Chunk783097 = require("./783097.js"),
  Chunk728345 = require("./728345.js"),
  Chunk266454 = require("./266454.js"),
  Chunk165062 = require("./165062.js"),
  Chunk626135 = require("./626135.js"),
  Chunk131734 = require("./131734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js");
let h = new Set;

function m(e) {
  return (0, i.yE)(e.flags, p.udG.CLOUD_GAMING_DEMO) && (0, i.yE)(e.flags, p.udG.EMBEDDED)
}

function g(e) {
  let {
    countryCode: t,
    activity: n
  } = e;
  return null == t || !n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t))
}

function E(e) {
  let t = null != e ? (0, f.Z)(e) : null,
    n = null == t ? true : t.id,
    {
      data: i,
      refetch: a
    } = (0, l.IX)(n);
  return r.useEffect(() => {
    null == n || null == i || null != i.bot || h.has(n) || (a(), h.add(n))
  }, [n, i, a]), i
}

function b(e) {
  let {
    data: t
  } = (0, u.f)(), n = E(e), {
    bot: r
  } = null != n ? n : {
    bot: null
  };
  return null != e && ((null == e ? true : e.embeddedActivityConfig) == null || !!g({
    countryCode: null == t ? true : t.alpha2,
    activity: e.embeddedActivityConfig
  })) && (!!m(e) || null != r && null != n && !!(0, s.ye)(n) && ((null == n ? true : n.embeddedActivityConfig) == null || !!g({
    countryCode: null == t ? true : t.alpha2,
    activity: n.embeddedActivityConfig
  })))
}

function y(e) {
  let {
    application: t,
    analyticsLocations: n
  } = e, i = b(t), {
    bot: s
  } = null != t ? t : {
    bot: null
  }, l = E(t), {
    bot: u
  } = null != l ? l : {
    bot: null
  }, f = null == l ? true : l.id, h = null == u ? true : u.id;
  return r.useMemo(() => {
    if (!i || null == t) return null;
    let e = () => {
      (0, c.Q3)(a.z.CLOUD_PLAY_NEW_BADGE, {
        dismissAction: _.L.TAKE_ACTION
      }), (0, c.Q3)(a.z.CLOUD_PLAY_POPOVER, {
        dismissAction: _.L.TAKE_ACTION
      })
    };
    return m(t) && null != s ? () => {
      e(), d.default.track(p.rMx.CLOUD_PLAY_CTA_CLICKED, {
        source_application_id: t.id,
        launching_application_id: t.id,
        location_stack: n
      }), (0, o.W)({
        appId: t.id,
        botId: s.id,
        analyticsLocations: null != n ? n : []
      })
    } : null != f && null != h ? () => {
      e(), d.default.track(p.rMx.CLOUD_PLAY_CTA_CLICKED, {
        source_application_id: t.id,
        launching_application_id: f,
        location_stack: n
      }), (0, o.W)({
        appId: f,
        botId: h,
        analyticsLocations: null != n ? n : []
      })
    } : true
  }, [i, t, s, f, h, n])
}