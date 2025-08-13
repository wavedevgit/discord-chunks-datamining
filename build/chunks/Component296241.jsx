/** Chunk was on 1272 **/
/** chunk id: 296241, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk208450 = require("./208450.jsx"),
  Chunk401623 = require("./401623.js");
let o = Chunk73800.memo(function(e) {
  let {
    searchContext: t,
    focusSectionProps: n
  } = e;
  return (0, r.jsx)(l.o, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    searchContext: t,
    className: a.search,
    searchBarContainerClassName: a.searchBarContainer,
    searchBarClassName: a.searchBar,
    searchPopoutClassName: a.searchPopout
  }, n))
})