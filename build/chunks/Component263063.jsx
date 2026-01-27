/** Chunk was on web.js **/
/** chunk id: 263063, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk758879 = require("./758879.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk162532 = require("./162532.jsx"),
  Chunk624793 = require("./624793.js"),
  Chunk714991 = require("./714991.jsx"),
  Chunk260509 = require("./260509.js"),
  Chunk531685 = require("./531685.js"),
  Chunk515718 = require("./515718.js"),
  Chunk821589 = require("./821589.js"),
  Chunk263499 = require("./263499.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = T(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let C = {
    SMOL: "Smol",
    MINI: "Mini",
    SMALLER: "Smaller",
    SMALL: "Small",
    MEDIUM: "Medium",
    LARGE: "Large",
    LARGER: "Larger",
    XLARGE: "XLarge"
  },
  N = {
    [C.SMOL]: 16,
    [C.MINI]: 20,
    [C.SMALLER]: 24,
    [C.SMALL]: 30,
    [C.MEDIUM]: 40,
    [C.LARGE]: 50,
    [C.LARGER]: 64,
    [C.XLARGE]: 100
  },
  w = {
    [C.SMOL]: [10, 10, 8, 6, 6, 4],
    [C.MINI]: [12, 12, 10, 10, 8, 6, 4],
    [C.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
    [C.SMALL]: [14, 14, 12, 12, 10, 8, 6],
    [C.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
    [C.LARGE]: [18, 18, 16, 16, 14, 12, 10],
    [C.LARGER]: [19, 19, 17, 17, 15, 13, 11],
    [C.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
  };
class R extends Chunk64700.PureComponent {
  renderAcronym() {
    let {
      guild: e,
      iconSrc: t
    } = this.props;
    return null != e.icon || null != t ? null : (0, i.jsx)("div", {
      className: b.acronym,
      children: (0, m.Rb)(e)
    })
  }
  renderBadge() {
    let {
      showBadge: e,
      guild: t,
      badgeStrokeColor: n,
      badgeTooltipColor: r,
      badgeTooltipDelay: a
    } = this.props;
    return e ? (0, i.jsx)(h.A, {
      className: b.guildIconBadge,
      guild: t,
      badgeStrokeColor: n,
      tooltipColor: r,
      tooltipDelay: a
    }) : null
  }
  renderIcon() {
    var e, t;
    let n = this.props,
      {
        guild: r,
        className: a,
        showBadge: o,
        active: l,
        size: c,
        style: u = {},
        textScale: d,
        showTooltip: p,
        tooltipPosition: _,
        onClick: h,
        to: g,
        badgeStrokeColor: E,
        animate: O,
        tabIndex: A,
        iconSrc: T,
        "aria-hidden": C,
        lossless: N,
        iconSize: R
      } = n,
      P = S(n, ["guild", "className", "showBadge", "active", "size", "style", "textScale", "showTooltip", "tooltipPosition", "onClick", "to", "badgeStrokeColor", "animate", "tabIndex", "iconSrc", "aria-hidden", "lossless", "iconSize"]),
      D = w[c],
      L = null != h ? f.DUT : "div",
      x = (0, m.Rb)(r);
    return (0, i.jsxs)(L, I(v({
      className: s()(b.icon, a, (0, y.t)(b, "iconSize", c), {
        [null != (e = (0, y.t)(b, "iconActive", c)) ? e : ""]: l,
        [b.iconInactive]: !l,
        [b.noIcon]: null == r.icon
      }),
      "aria-hidden": C,
      style: null == r.icon ? v({
        fontSize: (null != (t = D[x.length]) ? t : D[D.length - 1]) * d
      }, u) : u,
      onClick: null != g || null == h ? true : h,
      tabIndex: A
    }, P), {
      children: [this.renderAcronym(), this.renderBadge()]
    }))
  }
  renderTooltip() {
    let {
      guild: e,
      showTooltip: t,
      tooltipPosition: n
    } = this.props;
    return t ? (0, i.jsx)(d.m_, {
      text: e.name,
      position: n,
      "aria-label": false,
      children: this.renderIcon()
    }) : this.renderIcon()
  }
  render() {
    let {
      to: e,
      guild: t,
      source: n,
      tabIndex: r,
      "aria-hidden": a
    } = this.props;
    return null != e ? (0, i.jsx)(l.N_, {
      "aria-hidden": a,
      to: {
        pathname: e,
        state: null != n ? {
          analyticsSource: n
        } : null
      },
      "aria-label": t.name,
      tabIndex: r,
      children: this.renderTooltip()
    }) : this.renderTooltip()
  }
}
let P = Chunk311907.Ay.connectStores([Chunk531685.A], e => {
  let {
    guild: t,
    animate: n,
    iconSrc: r,
    style: i,
    size: a,
    iconSize: o,
    lossless: s
  } = e;
  return null == r && (r = t instanceof _.GO ? t.getIconURL(null != o ? o : N[a], n && g.A.isFocused()) : (0, m.Iv)(t, null != o ? o : N[a], n && g.A.isFocused(), s)), {
    style: I(v({}, i), {
      backgroundImage: (0, E.wU)(r)
    })
  }
})((0, Chunk162532.Y)(e => (0, i.jsx)(R, v({}, e))));
class D extends(r = Chunk64700.PureComponent) {
  render() {
    return (0, i.jsx)(P, v({}, this.props))
  }
}
O(D, "Sizes", C), O(D, "defaultProps", {
  size: C.LARGE,
  textScale: 1,
  showBadge: false,
  showTooltip: false,
  active: false,
  tooltipPosition: "top",
  badgeStrokeColor: Chunk827734.A.unsafe_rawColors.WHITE.css,
  animate: false
});
let L = D