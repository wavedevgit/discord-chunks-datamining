/** Chunk was on web.js **/
/** chunk id: 565138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk688642 = require("./688642.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk891819 = require("./891819.jsx"),
  Chunk231053 = require("./231053.js"),
  Chunk372769 = require("./372769.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk451478 = require("./451478.js"),
  Chunk956664 = require("./956664.js"),
  Chunk153066 = require("./153066.js"),
  Chunk812737 = require("./812737.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
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
  C = {
    [A.SMOL]: [10, 10, 8, 6, 6, 4],
    [A.MINI]: [12, 12, 10, 10, 8, 6, 4],
    [A.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
    [A.SMALL]: [14, 14, 12, 12, 10, 8, 6],
    [A.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
    [A.LARGE]: [18, 18, 16, 16, 14, 12, 10],
    [A.LARGER]: [19, 19, 17, 17, 15, 13, 11],
    [A.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
  };
class R extends Chunk73800.PureComponent {
  renderAcronym() {
    let {
      guild: e,
      iconSrc: t
    } = this.props;
    return null != module.icon || null != exports ? null : (0, Chunk255367.jsx)("div", {
      className: Chunk812737.acronym,
      children: (0, Chunk601964.gM)(module)
    })
  }
  renderBadge() {
    let {
      showBadge: e,
      guild: t,
      badgeStrokeColor: n,
      badgeTooltipColor: r,
      badgeTooltipDelay: o
    } = this.props;
    return module ? (0, Chunk255367.jsx)(Chunk372769.Z, {
      className: Chunk812737.guildIconBadge,
      guild: exports,
      badgeStrokeColor: require,
      tooltipColor: r,
      tooltipDelay: Chunk73800
    }) : null
  }
  renderIcon() {
    var e, t;
    let n = this.props,
      {
        guild: r,
        className: o,
        showBadge: a,
        active: l,
        size: c,
        style: u = {},
        textScale: f,
        showTooltip: _,
        tooltipPosition: p,
        onClick: m,
        to: g,
        badgeStrokeColor: y,
        animate: v,
        tabIndex: S,
        iconSrc: A,
        "aria-hidden": N,
        lossless: R,
        iconSize: P
      } = require,
      w = T(require, ["guild", "className", "showBadge", "active", "size", "style", "textScale", "showTooltip", "tooltipPosition", "onClick", "to", "badgeStrokeColor", "animate", "tabIndex", "iconSrc", "aria-hidden", "lossless", "iconSize"]),
      D = C[Chunk442837],
      L = null != Chunk451478 ? Chunk481060.P3F : "div",
      x = (0, Chunk601964.gM)(r);
    return (0, Chunk255367.jsxs)(L, I(O({
      className: s()(Chunk812737.icon, Chunk73800, (0, Chunk153066.l)(Chunk812737, "iconSize", Chunk442837), {
        [null != (e = (0, Chunk153066.l)(Chunk812737, "iconActive", Chunk442837)) ? module : ""]: Chunk688642,
        [Chunk812737.iconInactive]: !Chunk688642,
        [Chunk812737.noIcon]: null == r.icon
      }),
      "aria-hidden": N,
      style: null == r.icon ? O({
        fontSize: (null != (t = D[x.length]) ? exports : D[D.length - 1]) * Chunk891819
      }, Chunk692547) : Chunk692547,
      onClick: null != Chunk956664 || null == Chunk451478 ? true : Chunk451478,
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
    return exports ? (0, Chunk255367.jsx)(Chunk481060.ua7, {
      text: module.name,
      position: require,
      "aria-label": false,
      children: e => o.cloneElement(o.Children.only(this.renderIcon()), O({}, e))
    }) : this.renderIcon()
  }
  render() {
    let {
      to: e,
      guild: t,
      source: n,
      tabIndex: r,
      "aria-hidden": o
    } = this.props;
    return null != module ? (0, Chunk255367.jsx)(Chunk688642.rU, {
      "aria-hidden": Chunk73800,
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
let P = Chunk442837.ZP.connectStores([Chunk451478.Z], e => {
  let {
    guild: t,
    animate: n,
    iconSrc: r,
    style: i,
    size: o,
    iconSize: a,
    lossless: s
  } = e;
  return null == r && (r = t instanceof _.JO ? t.getIconURL(null != a ? a : N[o], n && m.Z.isFocused()) : (0, h.EB)(t, null != a ? a : N[o], n && m.Z.isFocused(), s)), {
    style: I(O({}, i), {
      backgroundImage: (0, g.rv)(r)
    })
  }
})((0, Chunk891819.N)(e => (0, i.jsx)(R, O({}, e))));
class w extends(r = Chunk73800.PureComponent) {
  render() {
    return (0, Chunk255367.jsx)(P, O({}, this.props))
  }
}
y(w, "Sizes", A), y(w, "defaultProps", {
  size: A.LARGE,
  textScale: 1,
  showBadge: false,
  showTooltip: false,
  active: false,
  tooltipPosition: "top",
  badgeStrokeColor: Chunk692547.Z.unsafe_rawColors.WHITE_500.css,
  animate: false
});
let D = w