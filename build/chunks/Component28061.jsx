/** Chunk was on 84533 **/
/** chunk id: 28061, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk871952 = require("./871952.js");

function c(e) {
  var t;
  let {
    user: a,
    checked: i,
    onChange: c,
    disabled: d
  } = e, {
    avatarSrc: u,
    eventHandlers: m
  } = (0, l.Z)({
    userId: null == a ? true : a.id,
    size: n.EFr.SIZE_32
  }), x = null != (t = a.globalName) ? t : a.username;
  return (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)("div", {
      className: o.userAvatar,
      children: (0, r.jsx)(n.qEK, function(e) {
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
          [o.muted]: d
        }),
        src: u,
        "aria-label": x,
        size: n.EFr.SIZE_32
      }, m))
    }), (0, r.jsxs)("div", {
      className: o.usernameContainer,
      children: [(0, r.jsx)(n.Text, {
        className: o.userName,
        color: d ? "text-muted" : "text-default",
        variant: "text-md/semibold",
        children: a.username
      }), (0, r.jsx)(n.Text, {
        className: o.userName,
        color: d ? "text-muted" : "text-secondary",
        variant: "text-xs/normal",
        children: "@".concat(x)
      })]
    }), (0, r.jsx)("div", {
      className: o.checkbox,
      children: (0, r.jsx)(n.XZJ, {
        disabled: d,
        value: i,
        onChange: (e, t) => c(a, t)
      })
    })]
  })
}