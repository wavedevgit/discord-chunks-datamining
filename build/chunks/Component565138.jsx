/** Chunk was on web.js **/
/** chunk id: 565138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk319498 = require("./319498.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk891819 = require("./891819.jsx"),
  Chunk231053 = require("./231053.js"),
  Chunk372769 = require("./372769.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk451478 = require("./451478.js"),
  Chunk956664 = require("./956664.js"),
  Chunk153066 = require("./153066.js"),
  Chunk965005 = require("./965005.js");

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

function S(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = C(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let A = {
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
    [A.SMOL]: 16,
    [A.MINI]: 20,
    [A.SMALLER]: 24,
    [A.SMALL]: 30,
    [A.MEDIUM]: 40,
    [A.LARGE]: 50,
    [A.LARGER]: 64,
    [A.XLARGE]: 100
  },
  P = {
    [A.SMOL]: [10, 10, 8, 6, 6, 4],
    [A.MINI]: [12, 12, 10, 10, 8, 6, 4],
    [A.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
    [A.SMALL]: [14, 14, 12, 12, 10, 8, 6],
    [A.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
    [A.LARGE]: [18, 18, 16, 16, 14, 12, 10],
    [A.LARGER]: [19, 19, 17, 17, 15, 13, 11],
    [A.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
  };
class R extends Chunk473749.PureComponent {
  renderAcronym() {
    let {
      guild: e,
      iconSrc: t
    } = this.props;
    return null != module.icon || null != exports ? null : (0, Chunk54381.jsx)("div", {
      className: Chunk965005.acronym,
      children: (0, Chunk601964.gM)(module)
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
    return module ? (0, Chunk54381.jsx)(Chunk372769.Z, {
      className: Chunk965005.guildIconBadge,
      guild: exports,
      badgeStrokeColor: require,
      tooltipColor: r,
      tooltipDelay: Chunk473749
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
        onClick: m,
        to: g,
        badgeStrokeColor: E,
        animate: O,
        tabIndex: S,
        iconSrc: C,
        "aria-hidden": A,
        lossless: N,
        iconSize: R
      } = require,
      w = T(require, ["guild", "className", "showBadge", "active", "size", "style", "textScale", "showTooltip", "tooltipPosition", "onClick", "to", "badgeStrokeColor", "animate", "tabIndex", "iconSrc", "aria-hidden", "lossless", "iconSize"]),
      D = P[Chunk442837],
      x = null != Chunk372769 ? Chunk481060.P3F : "div",
      L = (0, Chunk601964.gM)(r);
    return (0, Chunk54381.jsxs)(x, I(v({
      className: s()(Chunk965005.icon, Chunk473749, (0, Chunk153066.l)(Chunk965005, "iconSize", Chunk442837), {
        [null != (e = (0, Chunk153066.l)(Chunk965005, "iconActive", Chunk442837)) ? module : ""]: Chunk319498,
        [Chunk965005.iconInactive]: !Chunk319498,
        [Chunk965005.noIcon]: null == r.icon
      }),
      "aria-hidden": A,
      style: null == r.icon ? v({
        fontSize: (null != (t = D[L.length]) ? exports : D[D.length - 1]) * Chunk681715
      }, Chunk692547) : Chunk692547,
      onClick: null != Chunk451478 || null == Chunk372769 ? true : Chunk372769,
      tabIndex: S
    }, w), {
      children: [this.renderAcronym(), this.renderBadge()]
    }))
  }
  renderTooltip() {
    let {
      guild: e,
      showTooltip: t,
      tooltipPosition: n
    } = this.props;
    return exports ? (0, Chunk54381.jsx)(Chunk681715.u, {
      text: module.name,
      position: require,
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
    return null != module ? (0, Chunk54381.jsx)(Chunk319498.rU, {
      "aria-hidden": Chunk473749,
      to: {
        pathname: module,
        state: null != require ? {
          analyticsSource: require
        } : null
      },
      "aria-label": exports.name,
      tabIndex: r,
      children: this.renderTooltip()
    }) : this.renderTooltip()
  }
}
let w = Chunk442837.ZP.connectStores([Chunk451478.Z], e => {
  let {
    guild: t,
    animate: n,
    iconSrc: r,
    style: i,
    size: a,
    iconSize: o,
    lossless: s
  } = e;
  return null == r && (r = t instanceof _.JO ? t.getIconURL(null != o ? o : N[a], n && g.Z.isFocused()) : (0, h.EB)(t, null != o ? o : N[a], n && g.Z.isFocused(), s)), {
    style: I(v({}, i), {
      backgroundImage: (0, E.rv)(r)
    })
  }
})((0, Chunk891819.N)(e => (0, i.jsx)(R, v({}, e))));
class D extends(r = Chunk473749.PureComponent) {
  render() {
    return (0, Chunk54381.jsx)(w, v({}, this.props))
  }
}
O(D, "Sizes", A), O(D, "defaultProps", {
  size: A.LARGE,
  textScale: 1,
  showBadge: false,
  showTooltip: false,
  active: false,
  tooltipPosition: "top",
  badgeStrokeColor: Chunk692547.Z.unsafe_rawColors.WHITE_500.css,
  animate: false
});
let x = D