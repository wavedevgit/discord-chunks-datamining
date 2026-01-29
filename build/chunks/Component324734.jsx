/** Chunk was on 4670 **/
/** chunk id: 324734, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk271866 = require("./271866.js"),
  Chunk419954 = require("./419954.js"),
  Chunk147964 = require("./147964.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk912615 = require("./912615.jsx"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk419954.zD)(Chunk780964.X.ADVANCED_APPLICATION_TEST_MODE, {
  useTitle: () => c.intl.string(c.t.erOqlh),
  useSubtitle: () => c.intl.string(c.t["52hMnD"]),
  usePredicate: Chunk253932.Q_.useSetting,
  useValue: () => (0, l.bG)([u.A], () => null != u.A.testModeApplicationId),
  setValue: e => {
    e ? (0, s.qfG)(e => (0, n.jsx)(T.A, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
          return Object.getOwnPropertyDescriptor(i, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = i[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, e))) : r.cL()
  }
})