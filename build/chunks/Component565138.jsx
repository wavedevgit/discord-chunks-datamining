/** Chunk was on web.js **/
/** chunk id: 565138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
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
  Chunk532168 = require("./532168.js");

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

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
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
  R = {
    [C.SMOL]: [10, 10, 8, 6, 6, 4],
    [C.MINI]: [12, 12, 10, 10, 8, 6, 4],
    [C.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
    [C.SMALL]: [14, 14, 12, 12, 10, 8, 6],
    [C.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
    [C.LARGE]: [18, 18, 16, 16, 14, 12, 10],
    [C.LARGER]: [19, 19, 17, 17, 15, 13, 11],
    [C.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
  };
class P extends Chunk473749.PureComponent {
  renderAcronym() {
    let {
      guild: e,
      iconSrc: t
    } = this.props;
    return null != module.icon || null != exports ? null : (0, Chunk54381.jsx)("div", {
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
    return module ? (0, Chunk54381.jsx)(Chunk372769.Z, {
      className: Chunk532168.guildIconBadge,
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
        showTooltip: _,
        tooltipPosition: p,
        onClick: h,
        to: g,
        badgeStrokeColor: E,
        animate: O,
        tabIndex: I,
        iconSrc: A,
        "aria-hidden": C,
        lossless: N,
        iconSize: P
      } = require,
      D = S(require, ["guild", "className", "showBadge", "active", "size", "style", "textScale", "showTooltip", "tooltipPosition", "onClick", "to", "badgeStrokeColor", "animate", "tabIndex", "iconSrc", "aria-hidden", "lossless", "iconSize"]),
      w = R[Chunk442837],
      L = null != Chunk372769 ? Chunk481060.P3F : "div",
      x = (0, Chunk601964.gM)(r);
    return (0, Chunk54381.jsxs)(L, T(v({
      className: s()(Chunk532168.icon, Chunk473749, (0, Chunk153066.l)(Chunk532168, "iconSize", Chunk442837), {
        [null != (e = (0, Chunk153066.l)(Chunk532168, "iconActive", Chunk442837)) ? module : ""]: Chunk319498,
        [Chunk532168.iconInactive]: !Chunk319498,
        [Chunk532168.noIcon]: null == r.icon
      }),
      "aria-hidden": C,
      style: null == r.icon ? v({
        fontSize: (null != (t = w[x.length]) ? exports : w[w.length - 1]) * Chunk681715
      }, Chunk692547) : Chunk692547,
      onClick: null != Chunk451478 || null == Chunk372769 ? true : Chunk372769,
      tabIndex: I
    }, D), {
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
let D = Chunk442837.ZP.connectStores([Chunk451478.Z], e => {
  let {
    guild: t,
    animate: n,
    iconSrc: r,
    style: i,
    size: a,
    iconSize: o,
    lossless: s
  } = e;
  return null == r && (r = t instanceof p.JO ? t.getIconURL(null != o ? o : N[a], n && g.Z.isFocused()) : (0, m.EB)(t, null != o ? o : N[a], n && g.Z.isFocused(), s)), {
    style: T(v({}, i), {
      backgroundImage: (0, E.rv)(r)
    })
  }
})((0, Chunk891819.N)(e => (0, i.jsx)(P, v({}, e))));
class w extends(r = Chunk473749.PureComponent) {
  render() {
    return (0, Chunk54381.jsx)(D, v({}, this.props))
  }
}
O(w, "Sizes", C), O(w, "defaultProps", {
  size: C.LARGE,
  textScale: 1,
  showBadge: false,
  showTooltip: false,
  active: false,
  tooltipPosition: "top",
  badgeStrokeColor: Chunk692547.Z.unsafe_rawColors.WHITE_500.css,
  animate: false
});
let L = w