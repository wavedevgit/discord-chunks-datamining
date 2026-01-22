/** Chunk was on web.js **/
/** chunk id: 887700, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk10716 = require("./10716.js"),
  Chunk249350 = require("./249350.js"),
  Chunk685954 = require("./685954.js"),
  Chunk81790 = require("./81790.js");

function c(e) {
  let {
    guildId: t,
    enableFilter: n = false
  } = e, {
    filter: c
  } = (0, i.cf)([a.A], () => ({
    filter: a.A.getFilter()
  })), u = (0, s.n)(t), d = (0, o.A)(u), f = (0, l.t)();
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