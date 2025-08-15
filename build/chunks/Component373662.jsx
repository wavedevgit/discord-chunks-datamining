/** Chunk was on 96750 **/
/** chunk id: 373662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => b,
  fO: () => h,
  sF: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk951394 = require("./951394.jsx"),
  Chunk407477 = require("./407477.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk261334 = require("./261334.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let g = Chunk73800.forwardRef(function(e, t) {
  var {
    label: n,
    ariaLabel: i,
    tooltipText: l,
    tooltipColor: g,
    icon: h,
    iconProps: b,
    onClick: v,
    onTooltipShow: _,
    onTooltipHide: y,
    disabled: O,
    dangerous: S,
    separator: I,
    sparkle: j,
    showNewBadge: x,
    buttonClassName: E,
    children: P
  } = e, C = m(e, ["label", "ariaLabel", "tooltipText", "tooltipColor", "icon", "iconProps", "onClick", "onTooltipShow", "onTooltipHide", "disabled", "dangerous", "separator", "sparkle", "showNewBadge", "buttonClassName", "children"]);
  let {
    canShowReactionsOnMessageHover: T
  } = u.ZP.useExperiment({
    location: "HoverBarButton"
  }, {
    autoTrackExposure: true
  });
  return u.Xb.useExperiment({
    location: "HoverBarButton"
  }, {
    autoTrackExposure: true
  }), (0, r.jsx)(o.ua7, {
    text: null != l ? l : n,
    color: null != g ? g : o.FGA.PRIMARY,
    "aria-label": n,
    onTooltipShow: _,
    onTooltipHide: y,
    hideOnClick: true,
    tooltipClassName: f.tooltip,
    children: e => {
      var l, u;
      let {
        onMouseEnter: m,
        onMouseLeave: g,
        onFocus: _,
        onBlur: y,
        onClick: N
      } = e;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(c.zx, (l = p({
          ref: t,
          className: a()(E, {
            [f.hoverBarButton]: T
          }),
          onMouseEnter: m,
          onMouseLeave: g,
          onFocus: _,
          onBlur: y,
          onClick: e => {
            null == N || N(), v(e)
          },
          "aria-label": null != i ? i : n,
          disabled: O,
          dangerous: S
        }, C), u = u = {
          children: [null != h ? (0, r.jsx)(h, p({
            className: f.icon,
            color: "currentColor"
          }, b)) : null, null != P ? (0, r.jsx)("div", {
            className: a()(f.icon, f.buttonContent),
            children: P
          }) : null, j && (0, r.jsx)(o.K1N, {}), x && (0, r.jsx)(o.IGR, {
            text: d.intl.string(d.t.y2b7CA),
            color: s.Z.BG_BRAND,
            className: f.newBadge
          })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(u)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(u, e))
        }), l)), I && (0, r.jsx)(c.Z0, {})]
      })
    }
  })
});

function h(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)("div", {
    className: a()(f.separator, t)
  })
}

function b(e) {
  var {
    children: t
  } = e, n = m(e, ["children"]);
  let {
    canShowReactionsOnMessageHover: i
  } = u.ZP.useExperiment({
    location: "HoverBar"
  }, {
    autoTrackExposure: true
  });
  return u.Xb.useExperiment({
    location: "HoverBar"
  }, {
    autoTrackExposure: true
  }), (0, r.jsx)(c.ZP, {
    className: a()(n.className, f.popover, {
      [f.popoverReactionHoverBar]: i
    }),
    children: t
  })
}