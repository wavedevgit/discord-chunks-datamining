/** Chunk was on web.js **/
/** chunk id: 373662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => O,
  fO: () => y,
  sF: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk951394 = require("./951394.js"),
  Chunk407477 = require("./407477.js"),
  Chunk388032 = require("./388032.js"),
  Chunk852747 = require("./852747.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let b = Chunk73800.forwardRef(function(e, t) {
  var {
    label: n,
    ariaLabel: i,
    tooltipText: o,
    tooltipColor: _,
    icon: h,
    iconProps: E,
    onClick: b,
    onTooltipShow: y,
    onTooltipHide: O,
    disabled: v,
    dangerous: I,
    separator: T,
    sparkle: S,
    showNewBadge: A,
    buttonClassName: N,
    children: C
  } = e, R = g(e, ["label", "ariaLabel", "tooltipText", "tooltipColor", "icon", "iconProps", "onClick", "onTooltipShow", "onTooltipHide", "disabled", "dangerous", "separator", "sparkle", "showNewBadge", "buttonClassName", "children"]);
  let {
    canShowReactionsOnMessageHover: P
  } = u.ZP.useExperiment({
    location: "HoverBarButton"
  }, {
    autoTrackExposure: true
  });
  return u.Xb.useExperiment({
    location: "HoverBarButton"
  }, {
    autoTrackExposure: true
  }), <s.ua7 text={null != o ? o : n} color={null != _ ? _ : s.FGA.PRIMARY} aria-label={n} onTooltipShow={y} onTooltipHide={O} hideOnClick={true} tooltipClassName={f.tooltip}>{e => {
      let {
        onMouseEnter: o,
        onMouseLeave: u,
        onFocus: _,
        onBlur: g,
        onClick: y
      } = e;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(c.zx, m(p({
          ref: t,
          className: a()(N, {
            [f.hoverBarButton]: P
          }),
          onMouseEnter: o,
          onMouseLeave: u,
          onFocus: _,
          onBlur: g,
          onClick: e => {
            null == y || y(), b(e)
          },
          "aria-label": null != i ? i : n,
          disabled: v,
          dangerous: I
        }, R), {
          children: [null != h ? (0, r.jsx)(h, p({
            className: f.icon,
            color: "currentColor"
          }, E)) : null, null != C ? (0, r.jsx)("div", {
            className: a()(f.icon, f.buttonContent),
            children: C
          }) : null, S && (0, r.jsx)(s.K1N, {}), A && (0, r.jsx)(s.IGR, {
            text: d.intl.string(d.t.y2b7CA),
            color: l.Z.BG_BRAND,
            className: f.newBadge
          })]
        })), T && (0, r.jsx)(c.Z0, {})]
      })
    }}</s.ua7>
});

function y(e) {
  let {
    className: t
  } = e;
  return <div className={a()(f.separator, t)} />
}

function O(e) {
  var {
    children: t
  } = e, n = g(e, ["children"]);
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
  }), <c.ZP className={a()(n.className, f.popover, {
      [f.popoverReactionHoverBar]: i
    })}>{t}</c.ZP>
}