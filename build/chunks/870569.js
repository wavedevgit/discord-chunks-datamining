/** Chunk was on 31256 **/
n.d(t, {
  Z: () => c
});
var l = n(200651);
n(192379);
var r = n(120356),
  i = n.n(r),
  o = n(481060),
  a = n(686546),
  s = n(796171);

function c(e) {
  let {
    tooltipText: t,
    children: n,
    onContextMenu: r,
    onClick: c,
    disabled: u,
    icon: d,
    iconForeground: E,
    innerClassName: f,
    className: p,
    redGlow: h,
    tooltipClassName: C,
    onMouseEnter: _,
    onMouseLeave: O,
    "aria-label": g,
    "aria-checked": S,
    role: T,
    tooltipColor: I,
    tooltipForceOpen: N,
    tooltipContentClassName: b,
    plated: v
  } = e, m = "function" == typeof d ? (0, l.jsx)(d, {
    width: 20,
    height: 20,
    size: "custom",
    colorClass: null != E ? E : "",
    color: "currentColor"
  }) : d;
  return (0, l.jsx)(o.ua7, {
    tooltipClassName: C,
    text: t,
    "aria-label": g,
    color: I,
    tooltipContentClassName: b,
    forceOpen: N,
    children: e => {
      var t, d, {
          onClick: E,
          onMouseEnter: C,
          onMouseLeave: g
        } = e,
        I = function(e, t) {
          if (null == e) return {};
          var n, l, r = function(e, t) {
            if (null == e) return {};
            var n, l, r = {},
              i = Object.keys(e);
            for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
          }
          return r
        }(e, ["onClick", "onMouseEnter", "onMouseLeave"]);
      return (0, l.jsxs)(o.zxk, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = l
          })
        }
        return e
      }({}, I), d = d = {
        look: o.zxk.Looks.BLANK,
        size: o.zxk.Sizes.NONE,
        disabled: u,
        innerClassName: f,
        wrapperClassName: i()(s.button, p),
        className: i()(s.button, p, {
          [s.redGlow]: h,
          [s.disabled]: u,
          [s.enabled]: !u,
          [s.plated]: v,
          [s.plateMuted]: h && v
        }),
        onClick: e => {
          null != E && E(), null != c && c(e)
        },
        onMouseEnter: () => {
          null == C || C(), null == _ || _()
        },
        onMouseLeave: () => {
          null == g || g(), null == O || O()
        },
        onContextMenu: r,
        role: T,
        "aria-checked": S,
        focusProps: {
          offset: {
            left: -1,
            top: -1,
            right: 1,
            bottom: 1
          }
        },
        children: [null != n ? (0, l.jsx)(a.ZP, {
          width: 20,
          height: 20,
          mask: a.ZP.Masks.PANEL_BUTTON,
          children: m
        }) : m, n]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(d)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(d)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(d, e))
      }), t))
    }
  })
}