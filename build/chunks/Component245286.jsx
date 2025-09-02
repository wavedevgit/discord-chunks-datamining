/** Chunk was on 47129 **/
/** chunk id: 245286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk82084 = require("./82084.jsx"),
  Chunk131051 = require("./131051.js"),
  Chunk996733 = require("./996733.js"),
  Chunk914578 = require("./914578.jsx"),
  Chunk920952 = require("./920952.js");

function c(e) {
  let t = (0, s.Z7)(),
    {
      node: n,
      directory: i
    } = (0, o.Z)(u.Z, t);
  return (0, r.jsx)(l.Z, function(e) {
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
    root: n,
    directory: i,
    sidebarHeader: d,
    sidebarFooter: a.Z
  }, e))
}

function d() {
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