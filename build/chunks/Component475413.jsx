/** Chunk was on web.js **/
/** chunk id: 475413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ef: () => y,
  j8: () => E,
  oY: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk693789 = require("./693789.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk107389 = require("./107389.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let g = {
  primary: o()(Chunk107389.themeColor, Chunk107389.primary),
  secondary: o()(Chunk107389.themeColor, Chunk107389.secondary),
  none: ""
};
var E = function(e) {
  return e.TEXT = "text", e.ICON = "icon", e.BANNER = "banner", e.HOVER = "hover", e
}({});
let b = e => {
    var {
      action: t,
      color: n = s.Button.Colors.PRIMARY,
      themeColor: i = "primary",
      className: a,
      innerClassName: l,
      onClick: d,
      ref: _
    } = e, m = h(e, ["action", "color", "themeColor", "className", "innerClassName", "onClick", "ref"]);
    let {
      trackUserProfileAction: E
    } = (0, c.KZ)(), b = e => {
      null != t && E({
        action: t
      }), null == d || d(e)
    };
    return (0, r.jsx)(s.Button, p(f({
      buttonRef: _,
      className: o()(u.button, a),
      innerClassName: o()(u.buttonInner, l),
      color: o()(n, g[i]),
      look: s.Button.Looks.FILLED,
      size: s.Button.Sizes.SMALL,
      onClick: b
    }, m), {
      "data-migration-pending": true
    }))
  },
  y = Chunk647438.forwardRef(function(e, t) {
    var {
      icon: n,
      tooltipText: i,
      tooltipPosition: a,
      tooltipAlign: c,
      tooltipDelay: d,
      tooltipClassName: _,
      tooltipContainerClassName: m,
      ariaLabel: g,
      className: E,
      innerClassName: y,
      shouldShowTooltip: O = true
    } = e, v = h(e, ["icon", "tooltipText", "tooltipPosition", "tooltipAlign", "tooltipDelay", "tooltipClassName", "tooltipContainerClassName", "ariaLabel", "className", "innerClassName", "shouldShowTooltip"]);
    return (0, r.jsx)(l.jSM, {
      text: i,
      position: a,
      align: c,
      "aria-label": false,
      delay: d,
      shouldShow: O,
      className: m,
      tooltipClassName: _,
      children: (0, r.jsx)(b, p(f({
        buttonRef: t,
        className: o()(u.icon, E),
        innerClassName: o()(u.icon, y),
        look: s.Button.Looks.FILLED,
        size: s.Button.Sizes.NONE,
        grow: false,
        "aria-label": "string" == typeof i && null == g ? i : g
      }, v), {
        children: (0, r.jsx)(n, {
          size: "xs",
          color: "currentColor"
        })
      }))
    })
  }),
  O = Chunk647438.forwardRef(function(e, t) {
    var {
      className: n,
      innerClassName: i
    } = e, a = h(e, ["className", "innerClassName"]);
    return (0, r.jsx)(y, f({
      ref: t,
      className: o()(u.banner, n),
      innerClassName: o()(u.banner, i),
      color: u.bannerColor,
      themeColor: "none"
    }, a))
  })