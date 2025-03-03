/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  $: () => m
}), r(653041);
var n = r(200651),
  l = r(192379),
  i = r(120356),
  o = r.n(i),
  a = r(642128),
  s = r(873546),
  c = r(481060),
  u = r(774078),
  d = r(388032),
  p = r(546277),
  f = r(781385),
  b = r(585616);

function h(e) {
  let {
    endDate: t
  } = e, {
    days: r,
    hours: l,
    minutes: i,
    seconds: o
  } = (0, u.Z)(t), a = function(e, t, r, n) {
    let l = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      i = [];
    return e > 0 && i.push(l(e, d.NW.string(d.t.QJyuxc))), (t > 0 || i.length > 0) && i.push(l(t, d.NW.string(d.t["1LyF1t"]))), (r > 0 || i.length > 0) && i.push(l(r, d.NW.string(d.t.n7dksL))), i.push(l(n, d.NW.string(d.t["6m/6nJ"]))), i.join(":")
  }(r, l, i, o);
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
let m = l.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: r,
    displayOptions: l,
    isFullScreen: i
  } = e, u = (0, c.q_F)({
    transform: "translateX(-50%) ".concat(r ? "translateY(-75%)" : "translateY(0%)"),
    opacity: +!!r,
    config: {
      tension: 120,
      friction: 12
    }
  });
  return (0, n.jsxs)(a.animated.div, {
    className: o()([p.countDownWrapper, i && p.fullScreenWrapper, s.tq && p.mobileWrapper]),
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
    }({}, l.style, u),
    children: [(0, n.jsx)(c.Text, {
      variant: "text-md/medium",
      className: p.countdownLabel,
      children: l.label()
    }), null != l.iconSrc && (0, n.jsx)("img", {
      src: l.iconSrc,
      className: p.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, n.jsx)(h, {
      endDate: t
    }), (0, n.jsx)("img", {
      src: f.Z,
      className: o()(p.sparkles, p.left),
      alt: "",
      "aria-hidden": !0
    }), (0, n.jsx)("img", {
      src: b.Z,
      className: o()(p.sparkles, p.right),
      alt: "",
      "aria-hidden": !0
    })]
  })
})