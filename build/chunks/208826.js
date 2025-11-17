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
  let e = (0, Chunk481060.s9z)(e => u(e)),
    t = (0, Chunk442837.e7)([Chunk574254.Z], () => Chunk574254.Z.isOpen()),
    n = (0, Chunk442837.e7)([Chunk819640.Z], () => Chunk819640.Z.hasLayers()),
    [d, f] = Chunk473749.useState(false),
    _ = (0, Chunk728285.Aq)();
  return Chunk473749.useEffect(() => {
    function e() {
      f(true)
    }

    function t() {
      f(false)
    }
    return _.subscribe(Chunk981631.CkL.POPOUT_SHOW, module), _.subscribe(Chunk981631.CkL.POPOUT_HIDE, exports), () => {
      _.unsubscribe(Chunk981631.CkL.POPOUT_SHOW, module), _.unsubscribe(Chunk981631.CkL.POPOUT_HIDE, exports)
    }
  }, [_]), module || exports || d || require
}