/** Chunk was on 26489 **/
/** chunk id: 211145, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk391173 = require("./391173.js");

function d(e) {
  var t;
  let {
    user: s,
    checked: a,
    onChange: d,
    disabled: o
  } = e, {
    avatarSrc: c,
    eventHandlers: x
  } = (0, n.A)({
    userId: null == s ? true : s.id,
    size: r._3J.SIZE_32
  }), p = null != (t = s.globalName) ? t : s.username;
  return (0, i.jsxs)("div", {
    className: C.kL,
    children: [(0, i.jsxs)("div", {
      className: C.kQ,
      children: [(0, i.jsx)(r.euF, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
            return Object.getOwnPropertyDescriptor(s, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = s[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({
        className: l()({
          [C.SU]: o
        }),
        src: c,
        "aria-label": p,
        size: r._3J.SIZE_32
      }, x)), (0, i.jsx)(r.Text, {
        color: o ? "text-muted" : "text-default",
        variant: "text-md/semibold",
        children: p
      })]
    }), (0, i.jsx)("div", {
      className: C.kv,
      children: (0, i.jsx)(r.Checkbox, {
        disabled: o,
        checked: a,
        onChange: e => d(s, e),
        label: ""
      })
    })]
  })
}