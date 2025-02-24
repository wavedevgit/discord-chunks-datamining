/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  $: () => C
}), r(653041);
var n = r(200651),
  i = r(192379),
  l = r(120356),
  o = r.n(l),
  a = r(642128),
  s = r(873546),
  c = r(481060),
  d = r(774078),
  u = r(388032),
  p = r(108912),
  f = r(781385),
  h = r(585616);

function b(e) {
  let {
    endDate: t
  } = e, {
    days: r,
    hours: i,
    minutes: l,
    seconds: o
  } = (0, d.Z)(t), a = function(e, t, r, n) {
    let i = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      l = [];
    return e > 0 && l.push(i(e, u.NW.string(u.t.QJyuxc))), (t > 0 || l.length > 0) && l.push(i(t, u.NW.string(u.t["1LyF1t"]))), (r > 0 || l.length > 0) && l.push(i(r, u.NW.string(u.t.n7dksL))), l.push(i(n, u.NW.string(u.t["6m/6nJ"]))), l.join(":")
  }(r, i, l, o);
  return (0, n.jsx)(c.Text, {
    variant: "heading-md/medium",
    className: p.countdown,
    tag: "div",
    children: (0, n.jsx)("div", {
      role: "timer",
      "aria-relevant": "all",
      children: a
    })
  })
}
let C = i.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: r,
    displayOptions: i,
    isFullScreen: l
  } = e, d = (0, c.q_F)({
    transform: "translateX(-50%) ".concat(r ? "translateY(-75%)" : "translateY(0%)"),
    opacity: +!!r,
    config: {
      tension: 120,
      friction: 12
    }
  });
  return (0, n.jsxs)(a.animated.div, {
    className: o()([p.countDownWrapper, l && p.fullScreenWrapper, s.tq && p.mobileWrapper]),
    role: "status",
    style: function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n
        })
      }
      return e
    }({}, i.style, d),
    children: [(0, n.jsx)(c.Text, {
      variant: "text-md/medium",
      className: p.countdownLabel,
      children: i.label()
    }), null != i.iconSrc && (0, n.jsx)("img", {
      src: i.iconSrc,
      className: p.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, n.jsx)(b, {
      endDate: t
    }), (0, n.jsx)("img", {
      src: f.Z,
      className: o()(p.sparkles, p.left),
      alt: "",
      "aria-hidden": !0
    }), (0, n.jsx)("img", {
      src: h.Z,
      className: o()(p.sparkles, p.right),
      alt: "",
      "aria-hidden": !0
    })]
  })
})