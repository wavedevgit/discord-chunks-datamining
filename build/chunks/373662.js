/** Chunk was on 13368 **/
n.d(t, {
  ZP: () => b,
  fO: () => g,
  sF: () => p
});
var r = n(200651),
  a = n(192379),
  i = n(120356),
  o = n.n(i),
  l = n(481060),
  c = n(377171),
  s = n(951394),
  u = n(407477),
  _ = n(388032),
  d = n(852747);

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, a = function(e, t) {
    if (null == e) return {};
    var n, r, a = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
    return a
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
  }
  return a
}
let p = a.forwardRef(function(e, t) {
  var {
    label: n,
    ariaLabel: a,
    tooltipText: i,
    tooltipColor: p,
    icon: g,
    iconProps: b,
    onClick: v,
    onTooltipShow: h,
    onTooltipHide: I,
    disabled: y,
    dangerous: S,
    separator: E,
    sparkle: C,
    showNewBadge: P,
    buttonClassName: O,
    children: A
  } = e, N = m(e, ["label", "ariaLabel", "tooltipText", "tooltipColor", "icon", "iconProps", "onClick", "onTooltipShow", "onTooltipHide", "disabled", "dangerous", "separator", "sparkle", "showNewBadge", "buttonClassName", "children"]);
  let {
    canShowReactionsOnMessageHover: w
  } = u.ZP.useExperiment({
    location: "HoverBarButton"
  }, {
    autoTrackExposure: !0
  });
  return u.Xb.useExperiment({
    location: "HoverBarButton"
  }, {
    autoTrackExposure: !0
  }), (0, r.jsx)(l.ua7, {
    text: null != i ? i : n,
    color: null != p ? p : l.FGA.PRIMARY,
    "aria-label": n,
    onTooltipShow: h,
    onTooltipHide: I,
    hideOnClick: !0,
    tooltipClassName: d.tooltip,
    children: e => {
      var i, u;
      let {
        onMouseEnter: m,
        onMouseLeave: p,
        onClick: h
      } = e;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(s.zx, (i = f({
          ref: t,
          className: o()(O, {
            [d.hoverBarButton]: w
          }),
          onMouseEnter: m,
          onMouseLeave: p,
          onClick: e => {
            null == h || h(), v(e)
          },
          "aria-label": null != a ? a : n,
          disabled: y,
          dangerous: S
        }, N), u = u = {
          children: [null != g ? (0, r.jsx)(g, f({
            className: d.icon,
            color: "currentColor"
          }, b)) : null, null != A ? (0, r.jsx)("div", {
            className: o()(d.icon, d.buttonContent),
            children: A
          }) : null, C && (0, r.jsx)(l.K1N, {}), P && (0, r.jsx)(l.IGR, {
            text: _.intl.string(_.t.y2b7CA),
            color: c.Z.BG_BRAND,
            className: d.newBadge
          })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(u)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(u, e))
        }), i)), E && (0, r.jsx)(s.Z0, {})]
      })
    }
  })
});

function g(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)("div", {
    className: o()(d.separator, t)
  })
}

function b(e) {
  var {
    children: t
  } = e, n = m(e, ["children"]);
  let {
    canShowReactionsOnMessageHover: a
  } = u.ZP.useExperiment({
    location: "HoverBar"
  }, {
    autoTrackExposure: !0
  });
  return u.Xb.useExperiment({
    location: "HoverBar"
  }, {
    autoTrackExposure: !0
  }), (0, r.jsx)(s.ZP, {
    className: o()(n.className, d.popover, {
      [d.popoverReactionHoverBar]: a
    }),
    children: t
  })
}