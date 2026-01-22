/** Chunk was on web.js **/
/** chunk id: 475450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u,
  l: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk99753 = require("./99753.js"),
  Chunk609190 = require("./609190.js"),
  Chunk630390 = require("./630390.js"),
  Chunk948443 = require("./948443.js");

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
  } = (0, i.cf)([a.A], () => ({
    feed: a.A.getFeed(t),
    filters: a.A.getFilters()
  })), f = r.useMemo(() => {
    let e = n ? null == u ? true : u.unranked_game_entries.map(e => e.content) : null == u ? true : u.entries.map(e => e.content);
    return null != d ? null == e ? true : e.filter(e => c(d, e)) : e
  }, [u, d, n]);
  return f = (0, s.A)(f), f = (0, o.A)(f), f = (0, l.A)(f)
}