/** Chunk was on web.js **/
/** chunk id: 206074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O,
  q: () => y
}), require("./388685.js"), require("./997841.js");
var Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk915346 = require("./915346.js"),
  Chunk783097 = require("./783097.js"),
  Chunk728345 = require("./728345.js"),
  Chunk266454 = require("./266454.js"),
  Chunk165062 = require("./165062.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk133340 = require("./133340.js"),
  Chunk131734 = require("./131734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js");
let m = new Set;

function g(e) {
  return (0, d.yE)(e.flags, p.udG.CLOUD_GAMING_DEMO) && (0, d.yE)(e.flags, p.udG.EMBEDDED)
}

function E(e) {
  let {
    countryCode: t,
    activity: n
  } = e;
  return null == t || !n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t))
}

function b(e) {
  let t = null != e ? (0, _.Z)(e) : null,
    n = null == t ? true : t.id,
    {
      data: i,
      refetch: a
    } = (0, s.IX)(n);
  return r.useEffect(() => {
    null == n || null == i || null != i.bot || m.has(n) || (a(), m.add(n))
  }, [n, i, a]), i
}

function y(e, t) {
  let {
    enabled: n
  } = f.tL.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  }), {
    data: r
  } = (0, c.f)(), i = b(e), {
    bot: a
  } = null != i ? i : {
    bot: null
  }, s = (0, f.b0)(null == e ? true : e.id);
  return null != e && (!!n || !!s) && ((null == e ? true : e.embeddedActivityConfig) == null || !!E({
    countryCode: null == r ? true : r.alpha2,
    activity: e.embeddedActivityConfig
  })) && (!!g(e) || null != a && null != i && !!(0, o.ye)(i) && ((null == i ? true : i.embeddedActivityConfig) == null || !!E({
    countryCode: null == r ? true : r.alpha2,
    activity: i.embeddedActivityConfig
  })))
}

function O(e) {
  let {
    application: t,
    analyticsLocations: n
  } = e, o = y(t, n.length > 0 ? n[n.length - 1] : ""), {
    bot: s
  } = null != t ? t : {
    bot: null
  }, c = b(t), {
    bot: d
  } = null != c ? c : {
    bot: null
  };
  return r.useMemo(() => {
    if (!o || null == t) return null;
    let e = () => {
      (0, l.Q3)(i.z.CLOUD_PLAY_NEW_BADGE, {
        dismissAction: h.L.TAKE_ACTION
      }), (0, l.Q3)(i.z.CLOUD_PLAY_POPOVER, {
        dismissAction: h.L.TAKE_ACTION
      })
    };
    return g(t) && null != s ? () => {
      e(), u.default.track(p.rMx.CLOUD_PLAY_CTA_CLICKED, {
        source_application_id: t.id,
        launching_application_id: t.id,
        location_stack: n
      }), (0, a.W)({
        appId: t.id,
        botId: s.id,
        analyticsLocations: null != n ? n : []
      })
    } : (null == c ? true : c.id) != null && (null == d ? true : d.id) != null ? () => {
      e(), u.default.track(p.rMx.CLOUD_PLAY_CTA_CLICKED, {
        source_application_id: t.id,
        launching_application_id: c.id,
        location_stack: n
      }), (0, a.W)({
        appId: c.id,
        botId: d.id,
        analyticsLocations: null != n ? n : []
      })
    } : true
  }, [o, t, s, null == c ? true : c.id, null == d ? true : d.id, n])
}