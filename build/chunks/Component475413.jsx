/** Chunk was on web.js **/
/** chunk id: 475413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ef: () => O,
  j8: () => E,
  kF: () => b,
  oY: () => v,
  tG: () => y,
  y: () => I
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk693789 = require("./693789.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk27556 = require("./27556.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let g = {
  primary: a()(Chunk27556.themeColor, Chunk27556.primary),
  secondary: a()(Chunk27556.themeColor, Chunk27556.secondary),
  none: ""
};
var E = function(e) {
  return e.TEXT = "text", e.ICON = "icon", e.BANNER = "banner", e.HOVER = "hover", e
}({});
let b = e => {
  var {
    action: t,
    color: n = s.zx.Colors.PRIMARY,
    themeColor: i = "primary",
    className: o,
    innerClassName: l,
    onClick: d,
    ref: _
  } = e, p = h(e, ["action", "color", "themeColor", "className", "innerClassName", "onClick", "ref"]);
  let {
    trackUserProfileAction: m
  } = (0, c.KZ)(), E = e => {
    null != t && m({
      action: t
    }), null == d || d(e)
  };
  return (0, r.jsx)(s.zx, f({
    buttonRef: _,
    className: a()(u.button, o),
    innerClassName: a()(u.buttonInner, l),
    color: a()(n, g[i]),
    look: s.zx.Looks.FILLED,
    size: s.zx.Sizes.SMALL,
    onClick: E
  }, p))
};

function y(e) {
  var {
    text: t,
    icon: n,
    ref: i
  } = e, o = h(e, ["text", "icon", "ref"]);
  return (0, r.jsxs)(b, p(f({
    "aria-label": t
  }, o), {
    ref: i,
    children: [null != n && (0, r.jsx)(n, {
      size: "xs",
      color: "currentColor"
    }), t]
  }))
}
let O = Chunk73800.forwardRef(function(e, t) {
    var {
      icon: n,
      tooltipText: i,
      tooltipPosition: o,
      tooltipAlign: c,
      tooltipDelay: d,
      tooltipClassName: _,
      tooltipContainerClassName: m,
      ariaLabel: g,
      className: E,
      innerClassName: y,
      shouldShowTooltip: O = true
    } = e, v = h(e, ["icon", "tooltipText", "tooltipPosition", "tooltipAlign", "tooltipDelay", "tooltipClassName", "tooltipContainerClassName", "ariaLabel", "className", "innerClassName", "shouldShowTooltip"]);
    return (0, r.jsx)(l.DY3, {
      text: i,
      position: o,
      align: c,
      "aria-label": false,
      delay: d,
      shouldShow: O,
      className: m,
      tooltipClassName: _,
      children: (0, r.jsx)(b, p(f({
        buttonRef: t,
        className: a()(u.icon, E),
        innerClassName: a()(u.icon, y),
        look: s.zx.Looks.FILLED,
        size: s.zx.Sizes.NONE,
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
  v = Chunk73800.forwardRef(function(e, t) {
    var {
      className: n,
      innerClassName: i
    } = e, o = h(e, ["className", "innerClassName"]);
    return (0, r.jsx)(O, f({
      ref: t,
      className: a()(u.banner, n),
      innerClassName: a()(u.banner, i),
      color: u.bannerColor,
      themeColor: "none"
    }, o))
  });

function I(e) {
  var {
    isHovering: t,
    className: n,
    innerClassName: i
  } = e, o = h(e, ["isHovering", "className", "innerClassName"]);
  return (0, r.jsx)(O, f({
    className: a()(u.hover, {
      [u.visible]: t
    }, n),
    innerClassName: a()(u.hover, i),
    color: u.hoverColor,
    themeColor: "none",
    look: s.zx.Looks.BLANK
  }, o))
}