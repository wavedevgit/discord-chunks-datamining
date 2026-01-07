/** Chunk was on web.js **/
/** chunk id: 208826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk574254 = require("./574254.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  return !Object.entries(e).every(e => {
    let [t, n] = e;
    return 0 === n.length
  })
}

function d() {
  let e = (0, a.s9z)(e => u(e)),
    t = (0, i.e7)([l.Z], () => l.Z.isOpen()),
    n = (0, i.e7)([s.Z], () => s.Z.hasLayers()),
    [d, f] = r.useState(false),
    p = (0, o.Aq)();
  return r.useEffect(() => {
    function e() {
      f(true)
    }

    function t() {
      f(false)
    }
    return p.subscribe(c.CkL.POPOUT_SHOW, e), p.subscribe(c.CkL.POPOUT_HIDE, t), () => {
      p.unsubscribe(c.CkL.POPOUT_SHOW, e), p.unsubscribe(c.CkL.POPOUT_HIDE, t)
    }
  }, [p]), e || t || d || n
}