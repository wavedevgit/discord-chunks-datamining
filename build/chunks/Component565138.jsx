/** Chunk was on web.js **/
/** chunk id: 565138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk799899 = require("./799899.js"),
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
  Chunk532168 = require("./532168.js");

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

function S(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
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
  C = {
    [A.SMOL]: 16,
    [A.MINI]: 20,
    [A.SMALLER]: 24,
    [A.SMALL]: 30,
    [A.MEDIUM]: 40,
    [A.LARGE]: 50,
    [A.LARGER]: 64,
    [A.XLARGE]: 100
  },
  N = {
    [A.SMOL]: [10, 10, 8, 6, 6, 4],
    [A.MINI]: [12, 12, 10, 10, 8, 6, 4],
    [A.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
    [A.SMALL]: [14, 14, 12, 12, 10, 8, 6],
    [A.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
    [A.LARGE]: [18, 18, 16, 16, 14, 12, 10],
    [A.LARGER]: [19, 19, 17, 17, 15, 13, 11],
    [A.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
  };
class R extends Chunk647438.PureComponent {
  renderAcronym() {
    let {
      guild: e,
      iconSrc: t
    } = this.props;
    return null != module.icon || null != exports ? null : (0, Chunk951288.jsx)("div", {
      className: Chunk532168.acronym,
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
    return module ? (0, Chunk951288.jsx)(Chunk372769.Z, {
      className: Chunk532168.guildIconBadge,
      guild: exports,
      badgeStrokeColor: require,
      tooltipColor: r,
      tooltipDelay: Chunk647438
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
        textScale: f,
        showTooltip: _,
        tooltipPosition: p,
        onClick: m,
        to: g,
        badgeStrokeColor: y,
        animate: v,
        tabIndex: T,
        iconSrc: A,
        "aria-hidden": C,
        lossless: R,
        iconSize: P
      } = require,
      w = S(require, ["guild", "className", "showBadge", "active", "size", "style", "textScale", "showTooltip", "tooltipPosition", "onClick", "to", "badgeStrokeColor", "animate", "tabIndex", "iconSrc", "aria-hidden", "lossless", "iconSize"]),
      D = N[Chunk442837],
      x = null != Chunk451478 ? Chunk481060.P3F : "div",
      L = (0, Chunk601964.gM)(r);
    return (0, Chunk951288.jsxs)(x, I(O({
      className: s()(Chunk532168.icon, Chunk647438, (0, Chunk153066.l)(Chunk532168, "iconSize", Chunk442837), {
        [null != (e = (0, Chunk153066.l)(Chunk532168, "iconActive", Chunk442837)) ? module : ""]: Chunk799899,
        [Chunk532168.iconInactive]: !Chunk799899,
        [Chunk532168.noIcon]: null == r.icon
      }),
      "aria-hidden": C,
      style: null == r.icon ? O({
        fontSize: (null != (t = D[L.length]) ? exports : D[D.length - 1]) * Chunk891819
      }, Chunk692547) : Chunk692547,
      onClick: null != Chunk956664 || null == Chunk451478 ? true : Chunk451478,
      tabIndex: T
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
    return exports ? (0, Chunk951288.jsx)(Chunk481060.aML, {
      text: module.name,
      position: require,
      "aria-label": false,
      children: e => a.cloneElement(a.Children.only(this.renderIcon()), O({}, e))
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
    return null != module ? (0, Chunk951288.jsx)(Chunk799899.rU, {
      "aria-hidden": Chunk647438,
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
    size: a,
    iconSize: o,
    lossless: s
  } = e;
  return null == r && (r = t instanceof _.JO ? t.getIconURL(null != o ? o : C[a], n && m.Z.isFocused()) : (0, h.EB)(t, null != o ? o : C[a], n && m.Z.isFocused(), s)), {
    style: I(O({}, i), {
      backgroundImage: (0, g.rv)(r)
    })
  }
})((0, Chunk891819.N)(e => (0, i.jsx)(R, O({}, e))));
class w extends(r = Chunk647438.PureComponent) {
  render() {
    return (0, Chunk951288.jsx)(P, O({}, this.props))
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