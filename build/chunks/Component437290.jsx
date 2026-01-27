/** Chunk was on 92917 **/
/** chunk id: 437290, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk429974 = require("./429974.js");

function d(e) {
  var t;
  let {
    user: n,
    checked: l,
    onChange: d,
    disabled: p,
    tooltipConfig: m
  } = e, f = i.useRef(null), {
    avatarSrc: g,
    eventHandlers: h
  } = (0, c.A)({
    userId: null == n ? true : n.id,
    size: o._3J.SIZE_32
  }), _ = null != (t = n.globalName) ? t : n.username;
  return (0, r.jsx)(s.m, {
    text: (null == m ? true : m.isActive(n, p)) ? m.text(n) : null,
    position: "top",
    anchorRef: f,
    asContainer: true,
    children: (0, r.jsxs)("div", {
      className: u.kL,
      children: [(0, r.jsx)("div", {
        className: u.dj,
        children: (0, r.jsx)(o.euF, function(e) {
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
          className: a()({
            [u.SU]: p
          }),
          src: g,
          "aria-label": _,
          size: o._3J.SIZE_32
        }, h))
      }), (0, r.jsxs)("div", {
        className: u.QV,
        children: [(0, r.jsx)(o.Text, {
          className: u.nT,
          color: p ? "text-muted" : "text-default",
          variant: "text-md/semibold",
          children: _
        }), (0, r.jsx)(o.Text, {
          className: u.nT,
          color: p ? "text-muted" : "text-subtle",
          variant: "text-xs/normal",
          children: n.username
        })]
      }), (0, r.jsx)("div", {
        ref: f,
        className: u.kv,
        children: (0, r.jsx)(o.Checkbox, {
          disabled: p,
          checked: l,
          onChange: e => d(n, e),
          label: ""
        })
      })]
    })
  })
}