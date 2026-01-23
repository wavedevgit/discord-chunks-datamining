/** Chunk was on 26489 **/
/** chunk id: 211145, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk391173 = require("./391173.js");

function d(e) {
  var t;
  let {
    user: i,
    checked: a,
    onChange: d,
    disabled: o
  } = e, {
    avatarSrc: c,
    eventHandlers: x
  } = (0, n.A)({
    userId: null == i ? true : i.id,
    size: l._3J.SIZE_32
  }), p = null != (t = i.globalName) ? t : i.username;
  return (0, s.jsxs)("div", {
    className: C.kL,
    children: [(0, s.jsxs)("div", {
      className: C.kQ,
      children: [(0, s.jsx)(l.euF, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable
          }))), s.forEach(function(t) {
            var s;
            s = i[t], t in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = s
          })
        }
        return e
      }({
        className: r()({
          [C.SU]: o
        }),
        src: c,
        "aria-label": p,
        size: l._3J.SIZE_32
      }, x)), (0, s.jsx)(l.Text, {
        color: o ? "text-muted" : "text-default",
        variant: "text-md/semibold",
        children: p
      })]
    }), (0, s.jsx)("div", {
      className: C.kv,
      children: (0, s.jsx)(l.Checkbox, {
        disabled: o,
        checked: a,
        onChange: e => d(i, e),
        label: ""
      })
    })]
  })
}