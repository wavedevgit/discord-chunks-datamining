/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => S
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(392711),
  l = n.n(s),
  c = n(866442),
  u = n(692547),
  d = n(84735),
  f = n(481060),
  _ = n(600164),
  p = n(981631),
  h = n(831077),
  g = n(802138);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let y = l().memoize(e => {
  let t = !1;
  if (null != e && (0, c.FX)(e)) {
    let n = (0, c._i)(e);
    null != n && (t = .2 > (0, c.Bd)(n))
  }
  return t ? u.Z.unsafe_rawColors.BLACK_500.css : u.Z.unsafe_rawColors.WHITE_500.css
});
class O extends i.PureComponent {
  render() {
    let e;
    let {
      selected: t,
      color: n,
      className: i,
      children: o
    } = this.props, s = y(n);
    return t ? e = {
      color: s,
      background: null != n ? n : u.Z.unsafe_rawColors.BRAND_500.css
    } : null != n && (e = {
      color: n
    }), (0, r.jsx)(d.t, {
      offset: {
        left: 4
      },
      children: (0, r.jsxs)(_.Z, {
        className: a()(h.selectableItem, i, {
          [h.selected]: t
        }),
        onClick: this.handleClick,
        onKeyUp: this.handleKeyUp,
        align: _.Z.Align.CENTER,
        style: E({}, e, this.props.style),
        role: "button",
        tabIndex: 0,
        children: [(0, r.jsx)(_.Z, {
          align: _.Z.Align.CENTER,
          className: h.selectableItemLabel,
          shrink: 1,
          children: o
        }), t && (0, r.jsx)(_.Z, {
          wrap: _.Z.Wrap.WRAP,
          className: g.marginReset,
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
    super(...e), m(this, "state", {
      color: y(this.props.color)
    }), m(this, "handleKeyUp", e => {
      if (e.which === p.yXg.ENTER || e.which === p.yXg.SPACE) {
        let e = this.props,
          {
            onClick: t
          } = e;
        t(v(e, ["onClick"]))
      }
    }), m(this, "handleClick", () => {
      let e = this.props,
        {
          onClick: t
        } = e;
      t(v(e, ["onClick"]))
    })
  }
}
let S = O