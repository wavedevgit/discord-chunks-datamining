/** Chunk was on web.js **/
/** chunk id: 754050, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk916822 = require("./916822.js"),
  a = require.n(Chunk916822),
  Chunk554352 = require("./554352.js"),
  Chunk418034 = require("./418034.js");

function l(e) {
  var t = e.children,
    n = e.innerRef,
    i = r.useContext(o.$$),
    l = r.useCallback(function(e) {
      (0, s.cZ)(n, e), (0, s.oV)(i, e)
    }, [n, i]);
  return r.useEffect(function() {
    return function() {
      return (0, s.cZ)(n, null)
    }
  }, []), r.useEffect(function() {
    a()(!!i, "`Reference` should not be used outside of a `Manager` component.")
  }, [i]), (0, s.vq)(t)({
    ref: l
  })
}