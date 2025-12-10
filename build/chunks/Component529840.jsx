/** Chunk was on 47435 **/
/** chunk id: 529840, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk715156 = require("./715156.js");

function C(e) {
  var t;
  let {
    user: r,
    checked: i,
    onChange: C,
    disabled: d
  } = e, {
    avatarSrc: c,
    eventHandlers: x
  } = (0, l.Z)({
    userId: null == r ? true : r.id,
    size: n.EFr.SIZE_32
  }), p = null != (t = r.globalName) ? t : r.username;
  return (0, a.jsxs)("div", {
    className: o.container,
    children: [(0, a.jsxs)("div", {
      className: o.user,
      children: [(0, a.jsx)(n.qEK, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = r[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({
        className: s()({
          [o.muted]: d
        }),
        src: c,
        "aria-label": p,
        size: n.EFr.SIZE_32
      }, x)), (0, a.jsx)(n.Text, {
        color: d ? "text-muted" : "text-default",
        variant: "text-md/semibold",
        children: p
      })]
    }), (0, a.jsx)("div", {
      className: o.checkbox,
      children: (0, a.jsx)(n.Checkbox, {
        disabled: d,
        checked: i,
        onChange: e => C(r, e),
        label: ""
      })
    })]
  })
}