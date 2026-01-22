/** Chunk was on web.js **/
/** chunk id: 882530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk317097 = require("./317097.js"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk211332 = require("./211332.js"),
  Chunk473169 = require("./473169.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = y(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let O = l().memoize(e => {
  let t = false;
  if (null != e && (0, c.qt)(e)) {
    let n = (0, c.LX)(e);
    null != n && (t = .2 > (0, c.OK)(n))
  }
  return t ? d.A.unsafe_rawColors.BLACK.css : d.A.unsafe_rawColors.WHITE.css
});
class A extends Chunk64700.PureComponent {
  render() {
    let e, {
        selected: t,
        color: n,
        className: i,
        children: a
      } = this.props,
      o = O(n);
    return t ? e = {
      color: o,
      background: null != n ? n : d.A.unsafe_rawColors.BRAND_500.css
    } : null != n && (e = {
      color: n
    }), (0, r.jsx)(u.vN3, {
      offset: {
        left: 4
      },
      children: (0, r.jsxs)(p.A, {
        className: s()(h.OR, i, {
          [h.wH]: t
        }),
        onClick: this.handleClick,
        onKeyUp: this.handleKeyUp,
        align: p.A.Align.CENTER,
        style: E({}, e, this.props.style),
        role: "button",
        tabIndex: 0,
        children: [(0, r.jsx)(p.A, {
          align: p.A.Align.CENTER,
          className: h.Ix,
          shrink: 1,
          children: a
        }), t && (0, r.jsx)(p.A, {
          wrap: p.A.Wrap.WRAP,
          className: m.Gf,
          grow: 0,
          shrink: 0,
          children: (0, r.jsx)(f.A9s, {
            size: "md",
            color: o
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      color: O(this.props.color)
    }), g(this, "handleKeyUp", e => {
      if (e.which === _.Ks6.ENTER || e.which === _.Ks6.SPACE) {
        let e = this.props,
          {
            onClick: t
          } = e;
        t(b(e, ["onClick"]))
      }
    }), g(this, "handleClick", () => {
      let e = this.props,
        {
          onClick: t
        } = e;
      t(b(e, ["onClick"]))
    })
  }
}
let v = A