/** Chunk was on 77512 **/
/** chunk id: 696936, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => c,
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk762641 = require("./762641.js");
let c = {
  RED: Chunk762641.redMessageBlock,
  YELLOW: Chunk762641.yellowMessageBlock,
  BROWN: Chunk762641.brownMessageBlock
};

function a(e) {
  let {
    color: t,
    icon: n,
    children: i,
    className: c
  } = e;
  return (0, r.jsx)(o.kzN, {
    icon: e => (0, r.jsx)(n, function(e) {
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
      height: 20,
      width: 20
    }, e)),
    iconClassName: s.messageBlockIcon,
    className: l()(t, c),
    children: i
  })
}