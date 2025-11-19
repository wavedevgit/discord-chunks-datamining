/** Chunk was on 47435 **/
/** chunk id: 529840, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk715156 = require("./715156.js");

function d(e) {
  var t;
  let {
    user: r,
    checked: i,
    onChange: d,
    disabled: c
  } = e, {
    avatarSrc: x,
    eventHandlers: p
  } = (0, o.Z)({
    userId: null == r ? true : r.id,
    size: l.EFr.SIZE_32
  }), h = null != (t = r.globalName) ? t : r.username;
  return (0, a.jsxs)("div", {
    className: C.container,
    children: [(0, a.jsxs)("div", {
      className: C.user,
      children: [(0, a.jsx)(l.qEK, function(e) {
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
          [C.muted]: c
        }),
        src: x,
        "aria-label": h,
        size: l.EFr.SIZE_32
      }, p)), (0, a.jsx)(l.Text, {
        color: c ? "text-muted" : "text-default",
        variant: "text-md/semibold",
        children: h
      })]
    }), (0, a.jsx)("div", {
      className: C.checkbox,
      children: (0, a.jsx)(n.$q, {
        disabled: c,
        value: i,
        onChange: (e, t) => d(r, t)
      })
    })]
  })
}