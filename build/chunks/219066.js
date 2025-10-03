/** Chunk was on 35755 **/
/** chunk id: 219066, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk911969 = require("./911969.js"),
  Chunk254711 = require("./254711.js"),
  Chunk213459 = require("./213459.js"),
  Chunk10718 = require("./10718.js"),
  Chunk148958 = require("./148958.js"),
  Chunk689079 = require("./689079.js");

function p(e) {
  var t;
  let {
    context: n
  } = e, i = "channel" === n.type ? n.channel : true, p = (0, s.LD)(null == i ? true : i.guild_id, true), {
    commandsByActiveSection: m,
    loading: f
  } = c.wi({
    context: n,
    filters: {
      commandTypes: [a.yU.CHAT, a.yU.PRIMARY_ENTRY_POINT]
    },
    options: {
      placeholderCount: 0,
      limit: d.tn,
      includeFrecency: true
    },
    allowFetch: true
  }), h = l.useMemo(() => m.reduce((e, t) => {
    let {
      section: n,
      data: l
    } = t;
    return l.length > 0 && e.add(n.id), e
  }, new Set), [m]), v = l.useMemo(() => {
    var e, t;
    return Object.values(null != (t = null == (e = p.result) ? true : e.sections) ? t : {}).map(e => {
      let {
        descriptor: t
      } = e;
      return t
    }).filter(e => !(e.id in o.Tm) && h.has(e.id))
  }, [null == (t = p.result) ? true : t.sections, h]), x = (0, u.h)(v);
  return {
    appsInThisServer: l.useMemo(() => r().compact(x.map(e => {
      let {
        application: t
      } = e;
      return t
    })).map(e => ({
      application: e
    })), [x]),
    isLoading: p.fetchState.fetching || f
  }
}