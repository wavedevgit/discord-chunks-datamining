/** Chunk was on web.js **/
/** chunk id: 206074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _,
  q: () => f
}), require("./997841.js");
var Chunk73800 = require("./73800.js"),
  Chunk915346 = require("./915346.js"),
  Chunk783097 = require("./783097.js"),
  Chunk728345 = require("./728345.js"),
  Chunk630388 = require("./630388.js"),
  Chunk133340 = require("./133340.js"),
  Chunk131734 = require("./131734.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  return (0, s.yE)(e.flags, u.udG.CLOUD_GAMING_DEMO) && (0, s.yE)(e.flags, u.udG.EMBEDDED)
}

function f(e, t) {
  let {
    enabled: n
  } = l.t.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  }), r = null != e ? (0, c.Z)(e) : null, i = null == r ? true : r.id, {
    data: s
  } = (0, a.IX)(i), {
    bot: u
  } = null != s ? s : {
    bot: null
  };
  return !!n && null != e && (!!d(e) || null != i && null != u && null != s && !!(0, o.ye)(s))
}

function _(e) {
  let {
    application: t,
    location: n,
    analyticsLocations: o
  } = e, s = f(t, n), {
    bot: l
  } = null != t ? t : {
    bot: null
  }, u = (0, c.Z)(t), _ = null == u ? true : u.id, {
    data: p
  } = (0, a.IX)(_), {
    bot: h
  } = null != p ? p : {
    bot: null
  };
  return r.useMemo(() => s && null != t ? d(t) && null != l ? () => {
    (0, i.W)({
      appId: t.id,
      botId: l.id,
      analyticsLocations: null != o ? o : []
    })
  } : null != _ && null != h ? () => {
    (0, i.W)({
      appId: _,
      botId: h.id,
      analyticsLocations: null != o ? o : []
    })
  } : true : null, [o, l, s, t, h, _])
}