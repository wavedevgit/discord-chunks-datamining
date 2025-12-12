/** Chunk was on web.js **/
/** chunk id: 897674, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u,
  g: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk146282 = require("./146282.js"),
  Chunk327220 = require("./327220.js"),
  Chunk959580 = require("./959580.js"),
  Chunk371177 = require("./371177.js");

function c(e, t) {
  let {
    types: n
  } = e;
  return null == n || !!n.has(t.content_type)
}

function u(e) {
  let {
    id: t,
    unrankedEntries: n = false
  } = e, {
    feed: u,
    filters: d
  } = (0, i.cj)([o.Z], () => ({
    feed: o.Z.getFeed(t),
    filters: o.Z.getFilters()
  })), f = r.useMemo(() => {
    let e = n ? null == u ? true : u.unranked_game_entries.map(e => e.content) : null == u ? true : u.entries.map(e => e.content);
    return null != d ? null == e ? true : e.filter(e => c(d, e)) : e
  }, [u, d, n]);
  return f = (0, a.Z)(f), f = (0, s.Z)(f), f = (0, l.Z)(f)
}