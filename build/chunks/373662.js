/** Chunk was on 13368 **/
n.d(t, {
  ZP: () => v,
  fO: () => b,
  sF: () => m
});
var r = n(255367),
  i = n(73800),
  o = n(120356),
  a = n.n(o),
  l = n(481060),
  c = n(377171),
  u = n(951394),
  d = n(407477),
  s = n(388032),
  _ = n(852747);

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

function p(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      o = Object.keys(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let m = i.forwardRef(function(e, t) {
  var {
    label: n,
    ariaLabel: i,
    tooltipText: o,
    tooltipColor: m,
    icon: b,
    iconProps: v,
    onClick: h,
    onTooltipShow: g,
    onTooltipHide: y,
    disabled: I,
    dangerous: S,
    separator: O,
    sparkle: E,
    showNewBadge: C,
    buttonClassName: P,
    children: w
  } = e, A = p(e, ["label", "ariaLabel", "tooltipText", "tooltipColor", "icon", "iconProps", "onClick", "onTooltipShow", "onTooltipHide", "disabled", "dangerous", "separator", "sparkle", "showNewBadge", "buttonClassName", "children"]);
  let {
    canShowReactionsOnMessageHover: T
  } = d.ZP.useExperiment({
    location: "HoverBarButton"
  }, {
    autoTrackExposure: !0
  });
  return d.Xb.useExperiment({
    location: "HoverBarButton"
  }, {
    autoTrackExposure: !0
  }), (0, r.jsx)(l.ua7, {
    text: null != o ? o : n,
    color: null != m ? m : l.FGA.PRIMARY,
    "aria-label": n,
    onTooltipShow: g,
    onTooltipHide: y,
    hideOnClick: !0,
    tooltipClassName: _.tooltip,
    children: e => {
      var o, d;
      let {
        onMouseEnter: p,
        onMouseLeave: m,
        onClick: g
      } = e;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(u.zx, (o = f({
          ref: t,
          className: a()(P, {
            [_.hoverBarButton]: T
          }),
          onMouseEnter: p,
          onMouseLeave: m,
          onClick: e => {
            null == g || g(), h(e)
          },
          "aria-label": null != i ? i : n,
          disabled: I,
          dangerous: S
        }, A), d = d = {
          children: [null != b ? (0, r.jsx)(b, f({
            className: _.icon,
            color: "currentColor"
          }, v)) : null, null != w ? (0, r.jsx)("div", {
            className: a()(_.icon, _.buttonContent),
            children: w
          }) : null, E && (0, r.jsx)(l.K1N, {}), C && (0, r.jsx)(l.IGR, {
            text: s.intl.string(s.t.y2b7CA),
            color: c.Z.BG_BRAND,
            className: _.newBadge
          })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(d)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(d)).forEach(function(e) {
          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(d, e))
        }), o)), O && (0, r.jsx)(u.Z0, {})]
      })
    }
  })
});

function b(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)("div", {
    className: a()(_.separator, t)
  })
}

function v(e) {
  var {
    children: t
  } = e, n = p(e, ["children"]);
  let {
    canShowReactionsOnMessageHover: i
  } = d.ZP.useExperiment({
    location: "HoverBar"
  }, {
    autoTrackExposure: !0
  });
  return d.Xb.useExperiment({
    location: "HoverBar"
  }, {
    autoTrackExposure: !0
  }), (0, r.jsx)(u.ZP, {
    className: a()(n.className, _.popover, {
      [_.popoverReactionHoverBar]: i
    }),
    children: t
  })
}