/** Chunk was on 47435 **/
/** chunk id: 529840, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk123037 = require("./123037.js");

function o(e) {
  var t;
  let {
    user: a,
    checked: i,
    onChange: o,
    disabled: C
  } = e, {
    avatarSrc: c,
    eventHandlers: x
  } = (0, l.Z)({
    userId: null == a ? true : a.id,
    size: n.EFr.SIZE_32
  }), f = null != (t = a.globalName) ? t : a.username;
  return (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsxs)("div", {
      className: d.user,
      children: [(0, r.jsx)(n.qEK, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(a);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = a[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        className: s()({
          [d.muted]: C
        }),
        src: c,
        "aria-label": f,
        size: n.EFr.SIZE_32
      }, x)), (0, r.jsx)(n.Text, {
        color: C ? "text-muted" : "text-default",
        variant: "text-md/semibold",
        children: f
      })]
    }), (0, r.jsx)("div", {
      className: d.checkbox,
      children: (0, r.jsx)(n.Checkbox, {
        disabled: C,
        checked: i,
        onChange: e => o(a, e),
        label: ""
      })
    })]
  })
}