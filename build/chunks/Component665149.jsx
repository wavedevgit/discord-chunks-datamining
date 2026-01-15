/** Chunk was on web.js **/
/** chunk id: 665149, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JO: () => S,
  ZP: () => N,
  iz: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk608863 = require("./608863.jsx"),
  Chunk873546 = require("./873546.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk290297 = require("./290297.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk79712 = require("./79712.jsx"),
  Chunk195262 = require("./195262.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
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
let O = 24,
  v = e => {
    let {
      className: t,
      wrapperClassName: n,
      children: i,
      onContextMenu: a,
      onClick: s,
      onKeyDown: l,
      id: c,
      muted: d = false,
      level: f = 1,
      ref: p
    } = e, h = (0, r.jsx)(u.y5t, {
      forceLevel: f,
      children: (0, r.jsx)(u.Heading, {
        variant: "text-md/medium",
        color: d ? "text-default" : true,
        className: o()(t, _.title, {
          [_.titleClickable]: null != s
        }),
        id: c,
        children: i
      })
    });
    return null != s ? (0, r.jsx)(u.P3F, {
      innerRef: p,
      onClick: s,
      onContextMenu: a,
      onKeyDown: l,
      className: o()(n, _.titleWrapper),
      children: h
    }) : (0, r.jsx)("div", {
      ref: p,
      className: o()(n, _.titleWrapper),
      onContextMenu: a,
      onKeyDown: l,
      children: h
    })
  },
  S = Chunk473749.forwardRef(function(e, t) {
    let {
      className: n,
      iconClassName: i,
      children: a,
      selected: s = false,
      disabled: l = false,
      showBadge: d = false,
      badgePosition: p = "bottom",
      color: h,
      foreground: g,
      background: E,
      icon: b,
      iconSize: y = O,
      onClick: v,
      onContextMenu: S,
      tooltip: I = null,
      tooltipPosition: T = "bottom",
      tooltipAlign: C,
      tooltipDisabled: A,
      tooltipSpacing: N,
      role: P,
      "aria-label": w,
      "aria-hidden": R,
      "aria-checked": D,
      "aria-expanded": x,
      "aria-haspopup": L,
      "data-jump-section": j
    } = e, M = null != E ? {
      secondaryColorClass: E
    } : {}, k = (0, r.jsx)(b, m({
      x: 0,
      y: 0,
      width: y,
      height: y,
      size: "custom",
      className: o()(i, _.icon),
      colorClass: null != g ? g : true,
      color: null != h ? h : "currentColor"
    }, M)), U = w;
    return null == U && "string" == typeof I && (U = I), (0, r.jsx)(c.u, {
      __unsupportedReactNodeAsText: I,
      position: T,
      align: C,
      shouldShow: !A,
      spacing: N,
      ariaHidden: true,
      children: null == v ? (0, r.jsx)("div", {
        ref: t,
        className: o()(n, _.iconWrapper, {
          [_.iconDisabled]: l
        }),
        "aria-label": U,
        children: (0, r.jsx)(b, m({
          x: 0,
          y: 0,
          width: y,
          height: y,
          size: "custom",
          className: o()(i, _.icon),
          colorClass: null != g ? g : true,
          color: null != h ? h : "currentColor",
          "aria-hidden": R
        }, M))
      }) : (0, r.jsxs)(u.P3F, {
        innerRef: t,
        tag: "div",
        onClick: l ? true : v,
        onContextMenu: l ? true : S,
        className: o()(n, {
          [_.iconWrapper]: true,
          [_.clickable]: !l && null != v,
          [_.selected]: s,
          [_.iconDisabled]: l
        }),
        role: P,
        "aria-label": U,
        "aria-hidden": R,
        "aria-checked": D,
        "aria-haspopup": L,
        "aria-expanded": x,
        tabIndex: l || null == v ? false : 0,
        "data-jump-section": j,
        children: [d ? (0, r.jsx)(f.ZP, {
          mask: "top" === p ? f.ZP.Masks.HEADER_BAR_BADGE_TOP : f.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
          height: y,
          width: y,
          children: k
        }) : k, d ? (0, r.jsx)("span", {
          className: o()(_.iconBadge, "top" === p ? _.iconBadgeTop : _.iconBadgeBottom)
        }) : null, a]
      })
    })
  }),
  I = Chunk473749.forwardRef(function(e, t) {
    var {
      className: n
    } = e, i = b(e, ["className"]);
    return (0, r.jsx)(S, E(m({}, i), {
      className: o()(_.channelIcon, n),
      ref: t
    }))
  }),
  T = e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)(p.Z, {
      className: o()(_.dot, t)
    })
  };

function C(e) {
  let {
    direction: t = "right",
    className: n
  } = e;
  return "right" === t ? (0, r.jsx)(u.Fbu, {
    size: "md",
    color: "currentColor",
    className: o()(_.caret, n)
  }) : (0, r.jsx)(u.V7D, {
    size: "md",
    color: "currentColor",
    className: o()(_.caret, n)
  })
}
let A = e => {
  let {
    className: t,
    innerClassName: n,
    toolbarClassName: a,
    children: c,
    childrenBottom: f,
    toolbar: p,
    onDoubleClick: h,
    "aria-label": m,
    "aria-labelledby": g,
    role: E,
    scrollable: b,
    transparent: y = false,
    hidden: O = false
  } = e, v = i.useRef(null), S = i.useContext(d.Z);
  return (0, r.jsx)("section", {
    className: o()(t, _.container, {
      [_.themed]: !y,
      [_.transparent]: y,
      [_.themedMobile]: l.tq,
      [_.hidden]: O
    }),
    "aria-label": m,
    "aria-labelledby": g,
    role: E,
    ref: v,
    children: (0, r.jsxs)(u.JcV, {
      containerRef: v,
      children: [(0, r.jsxs)("div", {
        className: _.upperContainer,
        children: [(0, r.jsxs)("div", {
          className: o()(_.children, n, {
            [_.scrollable]: b
          }),
          onDoubleClick: h,
          children: [l.tq && null != S ? (0, r.jsx)(s.r, {
            onClick: S,
            className: _.hamburger
          }) : null, c]
        }), null != p ? (0, r.jsx)("div", {
          className: o()(_.toolbar, a),
          children: p
        }) : null]
      }), f]
    })
  })
};
A.Icon = S, A.ChannelIcon = I, A.Title = v, A.Divider = T, A.Caret = C;
let N = A