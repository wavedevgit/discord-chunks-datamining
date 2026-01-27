/** Chunk was on web.js **/
/** chunk id: 68166, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk186111 = require("./186111.js"),
  Chunk712687 = require("./712687.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  return !Object.entries(e).every(e => {
    let [t, n] = e;
    return 0 === n.length
  })
}

function d() {
  let e = (0, a.red)(e => u(e)),
    t = (0, i.bG)([l.A], () => l.A.isOpen()),
    n = (0, i.bG)([s.A], () => s.A.hasLayers()),
    [d, f] = r.useState(false),
    p = (0, o.aL)();
  return r.useEffect(() => {
    function e() {
      f(true)
    }

    function t() {
      f(false)
    }
    return p.subscribe(c.jej.POPOUT_SHOW, e), p.subscribe(c.jej.POPOUT_HIDE, t), () => {
      p.unsubscribe(c.jej.POPOUT_SHOW, e), p.unsubscribe(c.jej.POPOUT_HIDE, t)
    }
  }, [p]), e || t || d || n
}