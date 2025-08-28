/** Chunk was on web.js **/
/** chunk id: 206074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g,
  q: () => m
}), require("./997841.js");
var Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk915346 = require("./915346.js"),
  Chunk783097 = require("./783097.js"),
  Chunk728345 = require("./728345.js"),
  Chunk266454 = require("./266454.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk133340 = require("./133340.js"),
  Chunk131734 = require("./131734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js");

function h(e) {
  return (0, u.yE)(e.flags, _.udG.CLOUD_GAMING_DEMO) && (0, u.yE)(e.flags, _.udG.EMBEDDED)
}

function m(e, t) {
  let {
    enabled: n
  } = d.t.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  }), r = null != e ? (0, f.Z)(e) : null, i = null == r ? true : r.id, {
    data: a
  } = (0, s.IX)(i), {
    bot: l
  } = null != a ? a : {
    bot: null
  };
  return !!n && null != e && (!!h(e) || null != i && null != l && null != a && !!(0, o.ye)(a))
}

function g(e) {
  let {
    application: t,
    analyticsLocations: n
  } = e, o = m(t, n.length > 0 ? n[n.length - 1] : ""), {
    bot: u
  } = null != t ? t : {
    bot: null
  }, d = (0, f.Z)(t), g = null == d ? true : d.id, {
    data: E
  } = (0, s.IX)(g), {
    bot: b
  } = null != E ? E : {
    bot: null
  };
  return r.useMemo(() => {
    if (!o || null == t) return null;
    let e = () => {
      (0, l.Q3)(i.z.CLOUD_PLAY_NEW_BADGE, {
        dismissAction: p.L.TAKE_ACTION
      }), (0, l.Q3)(i.z.CLOUD_PLAY_POPOVER, {
        dismissAction: p.L.TAKE_ACTION
      })
    };
    return h(t) && null != u ? () => {
      e(), c.default.track(_.rMx.CLOUD_PLAY_CTA_CLICKED, {
        source_application_id: t.id,
        launching_application_id: t.id,
        location_stack: n
      }), (0, a.W)({
        appId: t.id,
        botId: u.id,
        analyticsLocations: null != n ? n : []
      })
    } : null != g && null != b ? () => {
      e(), c.default.track(_.rMx.CLOUD_PLAY_CTA_CLICKED, {
        source_application_id: t.id,
        launching_application_id: g,
        location_stack: n
      }), (0, a.W)({
        appId: g,
        botId: b.id,
        analyticsLocations: null != n ? n : []
      })
    } : true
  }, [o, t, u, g, b, n])
}