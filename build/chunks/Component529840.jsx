/** Chunk was on 83667 **/
/** chunk id: 529840, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk715156 = require("./715156.js");

function c(e) {
  var t;
  let {
    user: s,
    checked: r,
    onChange: c,
    disabled: o
  } = e, {
    avatarSrc: u,
    eventHandlers: h
  } = (0, l.Z)({
    userId: null == s ? true : s.id,
    size: i.EFr.SIZE_32
  }), m = null != (t = s.globalName) ? t : s.username;
  return (0, n.jsxs)("div", {
    className: d.container,
    children: [(0, n.jsxs)("div", {
      className: d.user,
      children: [(0, n.jsx)(i.qEK, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(s);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
            return Object.getOwnPropertyDescriptor(s, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = s[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({
        className: a()({
          [d.muted]: o
        }),
        src: u,
        "aria-label": m,
        size: i.EFr.SIZE_32
      }, h)), (0, n.jsx)(i.Text, {
        color: o ? "text-muted" : "text-default",
        variant: "text-md/semibold",
        children: m
      })]
    }), (0, n.jsx)("div", {
      className: d.checkbox,
      children: (0, n.jsx)(i.XZJ, {
        disabled: o,
        value: r,
        onChange: (e, t) => c(s, t)
      })
    })]
  })
}