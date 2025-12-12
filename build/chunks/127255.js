/** Chunk was on web.js **/
/** chunk id: 127255, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk115130 = require("./115130.js"),
  Chunk694312 = require("./694312.js"),
  Chunk405625 = require("./405625.js"),
  Chunk664097 = require("./664097.js");

function c(e) {
  let {
    guildId: t,
    enableFilter: n = false
  } = e, {
    filter: c
  } = (0, i.cj)([a.Z], () => ({
    filter: a.Z.getFilter()
  })), u = (0, o.E)(t), d = (0, s.Z)(u), f = (0, l.o)();
  return r.useMemo(() => {
    function e(e) {
      return !!(!n || "" === c || e.application.name.toLowerCase().includes(c.toLowerCase()))
    }
    let t = [...f].filter(e),
      r = new Set(t.map(e => e.application.id));
    for (let n of d) !r.has(n.application.id) && e(n) && t.push(n);
    return t
  }, [f, n, c, d])
}