/** Chunk was on web.js **/
/** chunk id: 676765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk155718 = require("./155718.js"),
  Chunk827785 = require("./827785.js"),
  Chunk264322 = require("./264322.js"),
  Chunk842209 = require("./842209.js"),
  Chunk768879 = require("./768879.js"),
  Chunk73510 = require("./73510.js");

function f(e) {
  var t;
  let {
    context: n
  } = e, i = "channel" === n.type ? n.channel : true, f = (0, l.ON)(null == i ? true : i.guild_id, true), {
    commandsByActiveSection: p,
    loading: _
  } = c.cu({
    context: n,
    filters: {
      commandTypes: [s.kc.CHAT, s.kc.PRIMARY_ENTRY_POINT]
    },
    options: {
      placeholderCount: 0,
      limit: d.Hi,
      includeFrecency: true
    },
    allowFetch: true
  }), h = r.useMemo(() => p.reduce((e, t) => {
    let {
      section: n,
      data: r
    } = t;
    return r.length > 0 && e.add(n.id), e
  }, new Set), [p]), m = r.useMemo(() => {
    var e, t;
    return Object.values(null != (e = null == (t = f.result) ? true : t.sections) ? e : {}).map(e => {
      let {
        descriptor: t
      } = e;
      return t
    }).filter(e => !(e.id in o.gZ) && h.has(e.id))
  }, [null == (t = f.result) ? true : t.sections, h]), g = (0, u.I)(m);
  return {
    appsInThisServer: r.useMemo(() => a().compact(g.map(e => {
      let {
        application: t
      } = e;
      return t
    })).map(e => ({
      application: e
    })), [g]),
    isLoading: f.fetchState.fetching || _
  }
}