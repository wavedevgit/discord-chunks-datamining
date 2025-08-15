/** Chunk was on web.js **/
/** chunk id: 206074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m,
  q: () => h
}), require("./997841.js");
var Chunk73800 = require("./73800.js"),
  Chunk704215 = require("./704215.js"),
  Chunk915346 = require("./915346.js"),
  Chunk783097 = require("./783097.js"),
  Chunk728345 = require("./728345.js"),
  Chunk266454 = require("./266454.js"),
  Chunk630388 = require("./630388.js"),
  Chunk133340 = require("./133340.js"),
  Chunk131734 = require("./131734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js");

function p(e) {
  return (0, c.yE)(e.flags, f.udG.CLOUD_GAMING_DEMO) && (0, c.yE)(e.flags, f.udG.EMBEDDED)
}

function h(e, t) {
  let {
    enabled: n
  } = u.t.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  }), r = null != e ? (0, d.Z)(e) : null, i = null == r ? true : r.id, {
    data: a
  } = (0, s.IX)(i), {
    bot: l
  } = null != a ? a : {
    bot: null
  };
  return !!n && null != e && (!!p(e) || null != i && null != l && null != a && !!(0, o.ye)(a))
}

function m(e) {
  let {
    application: t,
    location: n,
    analyticsLocations: o
  } = e, c = h(t, n), {
    bot: u
  } = null != t ? t : {
    bot: null
  }, f = (0, d.Z)(t), m = null == f ? true : f.id, {
    data: g
  } = (0, s.IX)(m), {
    bot: E
  } = null != g ? g : {
    bot: null
  };
  return r.useMemo(() => {
    if (!c || null == t) return null;
    let e = () => {
      (0, l.Q3)(i.z.CLOUD_PLAY_NEW_BADGE, {
        dismissAction: _.L.TAKE_ACTION
      })
    };
    return p(t) && null != u ? () => {
      e(), (0, a.W)({
        appId: t.id,
        botId: u.id,
        analyticsLocations: null != o ? o : []
      })
    } : null != m && null != E ? () => {
      e(), (0, a.W)({
        appId: m,
        botId: E.id,
        analyticsLocations: null != o ? o : []
      })
    } : true
  }, [c, t, u, m, E, o])
}