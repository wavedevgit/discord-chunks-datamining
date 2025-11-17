/** Chunk was on web.js **/
/** chunk id: 219066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk911969 = require("./911969.js"),
  Chunk254711 = require("./254711.js"),
  Chunk213459 = require("./213459.js"),
  Chunk10718 = require("./10718.js"),
  Chunk148958 = require("./148958.js"),
  Chunk689079 = require("./689079.js");

function f(e) {
  var t;
  let {
    context: n
  } = e, i = "channel" === n.type ? n.channel : true, f = (0, l.LD)(null == i ? true : i.guild_id, true), {
    commandsByActiveSection: _,
    loading: p
  } = c.wi({
    context: n,
    filters: {
      commandTypes: [o.yU.CHAT, o.yU.PRIMARY_ENTRY_POINT]
    },
    options: {
      placeholderCount: 0,
      limit: d.tn,
      includeFrecency: true
    },
    allowFetch: true
  }), h = r.useMemo(() => _.reduce((e, t) => {
    let {
      section: n,
      data: r
    } = t;
    return r.length > 0 && e.add(n.id), e
  }, new Set), [_]), m = r.useMemo(() => {
    var e, t;
    return Object.values(null != (t = null == (e = f.result) ? true : e.sections) ? t : {}).map(e => {
      let {
        descriptor: t
      } = e;
      return t
    }).filter(e => !(e.id in s.Tm) && h.has(e.id))
  }, [null == (t = f.result) ? true : t.sections, h]), g = (0, u.h)(m);
  return {
    appsInThisServer: r.useMemo(() => a().compact(g.map(e => {
      let {
        application: t
      } = e;
      return t
    })).map(e => ({
      application: e
    })), [g]),
    isLoading: f.fetchState.fetching || p
  }
}