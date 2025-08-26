/** Chunk was on 63751 **/
/** chunk id: 245286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk82084 = require("./82084.jsx"),
  Chunk131051 = require("./131051.js"),
  Chunk996733 = require("./996733.js"),
  Chunk604227 = require("./604227.jsx"),
  Chunk920952 = require("./920952.js");

function b(e) {
  let t = (0, c.Z7)(),
    n = (0, a.Z)(s.Z, t);
  return (0, o.jsx)(i.Z, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), o.forEach(function(t) {
        var o;
        o = n[t], t in e ? Object.defineProperty(e, t, {
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = o
      })
    }
    return e
  }({
    root: n,
    sidebarHeader: _,
    sidebarFooter: l.Z
  }, e))
}

function _() {
  let e = (0, Chunk996733.Z7)();
  return (0, Chunk951288.jsx)("div", {
    children: (0, Chunk951288.jsx)(Chunk481060.E1j, {
      size: "md",
      query: module,
      onChange: Chunk996733.yN,
      onClear: () => (0, Chunk996733.yN)("")
    })
  })
}