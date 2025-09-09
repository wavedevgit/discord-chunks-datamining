/** Chunk was on web.js **/
/** chunk id: 206074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b,
  q: () => E
}), require("./997841.js");
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

function m(e) {
  return (0, d.yE)(e.flags, p.udG.CLOUD_GAMING_DEMO) && (0, d.yE)(e.flags, p.udG.EMBEDDED)
}

function g(e) {
  let {
    countryCode: t,
    activity: n
  } = e;
  return null == t || !n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t))
}

function E(e, t) {
  let {
    enabled: n
  } = f.t.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  }), {
    data: r
  } = (0, c.f)(), i = null != e ? (0, _.Z)(e) : null, a = null == i ? true : i.id, {
    data: l
  } = (0, s.IX)(a), {
    bot: u
  } = null != l ? l : {
    bot: null
  };
  return !!n && null != e && ((null == e ? true : e.embeddedActivityConfig) == null || !!g({
    countryCode: null == r ? true : r.alpha2,
    activity: e.embeddedActivityConfig
  })) && (!!m(e) || null != a && null != u && null != l && !!(0, o.ye)(l) && ((null == l ? true : l.embeddedActivityConfig) == null || !!g({
    countryCode: null == r ? true : r.alpha2,
    activity: l.embeddedActivityConfig
  })))
}

function b(e) {
  let {
    application: t,
    analyticsLocations: n
  } = e, o = E(t, n.length > 0 ? n[n.length - 1] : ""), {
    bot: c
  } = null != t ? t : {
    bot: null
  }, d = (0, _.Z)(t), f = null == d ? true : d.id, {
    data: g
  } = (0, s.IX)(f), {
    bot: b
  } = null != g ? g : {
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
    return m(t) && null != c ? () => {
      e(), u.default.track(p.rMx.CLOUD_PLAY_CTA_CLICKED, {
        source_application_id: t.id,
        launching_application_id: t.id,
        location_stack: n
      }), (0, a.W)({
        appId: t.id,
        botId: c.id,
        analyticsLocations: null != n ? n : []
      })
    } : null != f && null != b ? () => {
      e(), u.default.track(p.rMx.CLOUD_PLAY_CTA_CLICKED, {
        source_application_id: t.id,
        launching_application_id: f,
        location_stack: n
      }), (0, a.W)({
        appId: f,
        botId: b.id,
        analyticsLocations: null != n ? n : []
      })
    } : true
  }, [o, t, c, f, b, n])
}