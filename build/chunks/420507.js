/** Chunk was on web.js **/
/** chunk id: 420507, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => l
});
var Chunk73800 = require("./73800.js"),
  Chunk820282 = require("./820282.js"),
  a = require.n(Chunk820282),
  Chunk166842 = require("./166842.js"),
  Chunk50039 = require("./50039.js");

function l(e) {
  var t = e.children,
    n = e.innerRef,
    i = r.useContext(o.mq),
    l = r.useCallback(function(e) {
      (0, s.k$)(n, e), (0, s.DL)(i, e)
    }, [n, i]);
  return r.useEffect(function() {
    return function() {
      return (0, s.k$)(n, null)
    }
  }, []), r.useEffect(function() {
    a()(!!i, "`Reference` should not be used outside of a `Manager` component.")
  }, [i]), (0, s.$p)(t)({
    ref: l
  })
}