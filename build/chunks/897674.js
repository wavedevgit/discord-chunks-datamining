/** Chunk was on 89311 **/
/** chunk id: 897674, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u,
  g: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk146282 = require("./146282.js"),
  Chunk327220 = require("./327220.js"),
  Chunk959580 = require("./959580.js"),
  Chunk371177 = require("./371177.js");

function c(e, t) {
  let {
    types: r
  } = e;
  return null == r || !!r.has(t.content_type)
}

function u(e) {
  let {
    id: t,
    unrankedEntries: r = false
  } = e, {
    feed: u,
    filters: d
  } = (0, a.cj)([i.Z], () => ({
    feed: i.Z.getFeed(t),
    filters: i.Z.getFilters()
  })), m = n.useMemo(() => {
    let e = r ? null == u ? true : u.unranked_game_entries.map(e => e.content) : null == u ? true : u.entries.map(e => e.content);
    return null != d ? null == e ? true : e.filter(e => c(d, e)) : e
  }, [u, d, r]);
  return m = (0, l.Z)(m), m = (0, o.Z)(m), m = (0, s.Z)(m)
}