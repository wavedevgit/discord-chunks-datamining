/** Chunk was on 72762 **/
/** chunk id: 416867, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk192635 = require("./192635.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk39281 = require("./39281.js");

function u(e) {
  let {
    transitionState: t,
    Icon: n,
    title: u,
    body: d,
    onClose: f
  } = e, p = (0, s.Dt)();
  return (0, r.jsxs)(l.Y0X, {
    className: c.container,
    transitionState: t,
    "aria-labelledby": p,
    parentComponent: "ActionCompletedSuccessModal",
    children: [(0, r.jsxs)(l.hzk, {
      children: [(0, r.jsx)(o.Z, {
        Icon: n
      }), (0, r.jsx)(l.LZC, {
        size: 24
      }), (0, r.jsx)(l.X6q, {
        id: p,
        className: c.__invalid_title,
        variant: "heading-xl/semibold",
        children: u
      }), (0, r.jsx)(l.LZC, {
        size: 8
      }), (0, r.jsx)(l.Text, {
        className: c.body,
        variant: "text-sm/normal",
        children: d
      })]
    }), (0, r.jsx)(l.LZC, {
      size: 24
    }), (0, r.jsx)(i.zx, {
      size: i.zx.Sizes.MEDIUM,
      grow: false,
      onClick: f,
      children: a.intl.string(a.t["NX+WJC"])
    })]
  })
}

function d(e) {
  (0, l.h7j)(t => (0, r.jsx)(u, function(e) {
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
  }({}, t, e)))
}