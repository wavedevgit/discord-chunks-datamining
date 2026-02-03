/** Chunk was on 37997 **/
/** chunk id: 437290, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk429974 = require("./429974.js");

function u(e) {
  var t;
  let {
    user: r,
    checked: s,
    onChange: u,
    disabled: b,
    tooltipConfig: x
  } = e, m = a.useRef(null), {
    avatarSrc: h,
    eventHandlers: _
  } = (0, o.A)({
    userId: null == r ? true : r.id,
    size: i._3J.SIZE_32
  }), f = null != (t = r.globalName) ? t : r.username;
  return (0, n.jsx)(c.m, {
    text: (null == x ? true : x.isActive(r, b)) ? x.text(r) : null,
    position: "top",
    anchorRef: m,
    asContainer: true,
    children: (0, n.jsxs)(i.DUT, {
      className: l()(d.kL, {
        [d.vk]: !b
      }),
      onClick: () => {
        b || u(r, !s)
      },
      children: [(0, n.jsx)("div", {
        className: d.dj,
        children: (0, n.jsx)(i.euF, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({
          className: l()({
            [d.SU]: b
          }),
          src: h,
          "aria-label": f,
          size: i._3J.SIZE_32
        }, _))
      }), (0, n.jsxs)("div", {
        className: d.QV,
        children: [(0, n.jsx)(i.Text, {
          className: d.nT,
          color: b ? "text-muted" : "text-default",
          variant: "text-md/semibold",
          children: f
        }), (0, n.jsx)(i.Text, {
          className: d.nT,
          color: b ? "text-muted" : "text-subtle",
          variant: "text-xs/normal",
          children: r.username
        })]
      }), (0, n.jsx)("div", {
        ref: m,
        className: d.kv,
        children: (0, n.jsx)(i.Checkbox, {
          disabled: b,
          checked: s,
          label: ""
        })
      })]
    })
  })
}