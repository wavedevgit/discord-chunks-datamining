/** Chunk was on 1272 **/
/** chunk id: 296241, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk738018 = require("./738018.js"),
  Chunk607802 = require("./607802.js"),
  Chunk208450 = require("./208450.jsx"),
  Chunk921667 = require("./921667.js");
let u = Chunk647438.memo(function(e) {
  let {
    searchContext: t,
    focusSectionProps: n
  } = e, i = (0, l.e7)([a.Z], () => {
    let {
      mode: e
    } = a.Z.getState(t);
    return (0, o.Fz)(e.filter)
  });
  return (0, r.jsx)(s.o, function(e) {
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
    className: c.appTitleSearch,
    searchBarContainerClassName: c.appTitleSearchBarContainer,
    searchBarClassName: c.appTitleSearchBar,
    searchPopoutClassName: i ? c.appTitleSearchPopoutDatePicker : c.appTitleSearchPopout,
    popoutAlignment: "center"
  }, n))
})