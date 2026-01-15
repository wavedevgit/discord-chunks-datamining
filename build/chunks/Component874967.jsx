/** Chunk was on web.js **/
/** chunk id: 874967, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk866442 = require("./866442.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk261080 = require("./261080.js"),
  Chunk478411 = require("./478411.js");

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
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let O = l().memoize(e => {
  let t = false;
  if (null != e && (0, c.FX)(e)) {
    let n = (0, c._i)(e);
    null != n && (t = .2 > (0, c.Bd)(n))
  }
  return t ? d.Z.unsafe_rawColors.BLACK.css : d.Z.unsafe_rawColors.WHITE.css
});
class v extends Chunk473749.PureComponent {
  render() {
    let e, {
        selected: t,
        color: n,
        className: i,
        children: a
      } = this.props,
      s = O(n);
    return t ? e = {
      color: s,
      background: null != n ? n : d.Z.unsafe_rawColors.BRAND_500.css
    } : null != n && (e = {
      color: n
    }), (0, r.jsx)(u.tEY, {
      offset: {
        left: 4
      },
      children: (0, r.jsxs)(p.Z, {
        className: o()(h.selectableItem, i, {
          [h.selected]: t
        }),
        onClick: this.handleClick,
        onKeyUp: this.handleKeyUp,
        align: p.Z.Align.CENTER,
        style: E({}, e, this.props.style),
        role: "button",
        tabIndex: 0,
        children: [(0, r.jsx)(p.Z, {
          align: p.Z.Align.CENTER,
          className: h.selectableItemLabel,
          shrink: 1,
          children: a
        }), t && (0, r.jsx)(p.Z, {
          wrap: p.Z.Wrap.WRAP,
          className: m.marginReset,
          grow: 0,
          shrink: 0,
          children: (0, r.jsx)(f.dz2, {
            size: "md",
            color: s
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      color: O(this.props.color)
    }), g(this, "handleKeyUp", e => {
      if (e.which === _.yXg.ENTER || e.which === _.yXg.SPACE) {
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
let S = v