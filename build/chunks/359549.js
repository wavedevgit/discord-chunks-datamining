/** Chunk was on web.js **/
/** chunk id: 359549, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b,
  J: () => y
}), require("./896048.js"), require("./938796.js");
var Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk554146 = require("./554146.js"),
  Chunk522305 = require("./522305.js"),
  Chunk735991 = require("./735991.js"),
  Chunk627363 = require("./627363.js"),
  Chunk826673 = require("./826673.js"),
  Chunk438652 = require("./438652.js"),
  Chunk954571 = require("./954571.js"),
  Chunk450995 = require("./450995.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js");
let h = new Set;

function m(e) {
  return (0, i.Lt)(e.flags, p.gfo.CLOUD_GAMING_DEMO) && (0, i.Lt)(e.flags, p.gfo.EMBEDDED)
}

function g(e) {
  let {
    countryCode: t,
    activity: n
  } = e;
  return null == t || !n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t))
}

function E(e) {
  let t = null != e ? (0, f.A)(e) : null,
    n = null == t ? true : t.id,
    {
      data: i,
      refetch: a
    } = (0, l.YY)(n);
  return r.useEffect(() => {
    null == n || null == i || null != i.bot || h.has(n) || (a(), h.add(n))
  }, [n, i, a]), i
}

function y(e) {
  let {
    data: t
  } = (0, u.Q)(), n = E(e), {
    bot: r
  } = null != n ? n : {
    bot: null
  };
  return null != e && ((null == e ? true : e.embeddedActivityConfig) == null || !!g({
    countryCode: null == t ? true : t.alpha2,
    activity: e.embeddedActivityConfig
  })) && (!!m(e) || null != r && null != n && !!(0, o.Ag)(n) && ((null == n ? true : n.embeddedActivityConfig) == null || !!g({
    countryCode: null == t ? true : t.alpha2,
    activity: n.embeddedActivityConfig
  })))
}

function b(e) {
  let {
    application: t,
    analyticsLocations: n
  } = e, i = y(t), {
    bot: o
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
      (0, c.Dr)(a.M.CLOUD_PLAY_NEW_BADGE, {
        dismissAction: _.i.TAKE_ACTION
      }), (0, c.Dr)(a.M.CLOUD_PLAY_POPOVER, {
        dismissAction: _.i.TAKE_ACTION
      })
    };
    return m(t) && null != o ? () => {
      e(), d.default.track(p.HAw.CLOUD_PLAY_CTA_CLICKED, {
        source_application_id: t.id,
        launching_application_id: t.id,
        location_stack: n
      }), (0, s.Q)({
        appId: t.id,
        botId: o.id,
        analyticsLocations: null != n ? n : []
      })
    } : null != f && null != h ? () => {
      e(), d.default.track(p.HAw.CLOUD_PLAY_CTA_CLICKED, {
        source_application_id: t.id,
        launching_application_id: f,
        location_stack: n
      }), (0, s.Q)({
        appId: f,
        botId: h,
        analyticsLocations: null != n ? n : []
      })
    } : true
  }, [i, t, o, f, h, n])
}