/** Chunk was on web.js **/
/** chunk id: 478283, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk820282 = require("./820282.js"),
  o = require.n(Chunk820282),
  Chunk579995 = require("./579995.js"),
  Chunk658346 = require("./658346.js");

function l(e) {
  var t = e.children,
    n = e.innerRef,
    i = r.useContext(a.mq),
    l = r.useCallback(function(e) {
      (0, s.k$)(n, e), (0, s.DL)(i, e)
    }, [n, i]);
  return r.useEffect(function() {
    return function() {
      return (0, s.k$)(n, null)
    }
  }, []), r.useEffect(function() {
    o()(!!i, "`Reference` should not be used outside of a `Manager` component.")
  }, [i]), (0, s.$p)(t)({
    ref: l
  })
}