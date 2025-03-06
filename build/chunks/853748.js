/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  $: () => p
}), n(653041);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  s = n.n(a),
  o = n(642128),
  i = n(873546),
  c = n(481060),
  d = n(774078),
  u = n(388032),
  m = n(546277),
  g = n(781385),
  f = n(585616);

function h(e) {
  let {
    endDate: t
  } = e, {
    days: n,
    hours: l,
    minutes: a,
    seconds: s
  } = (0, d.Z)(t), o = function(e, t, n, r) {
    let l = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      a = [];
    return e > 0 && a.push(l(e, u.NW.string(u.t.QJyuxc))), (t > 0 || a.length > 0) && a.push(l(t, u.NW.string(u.t["1LyF1t"]))), (n > 0 || a.length > 0) && a.push(l(n, u.NW.string(u.t.n7dksL))), a.push(l(r, u.NW.string(u.t["6m/6nJ"]))), a.join(":")
  }(n, l, a, s);
  return (0, r.jsx)(c.Text, {
    variant: "heading-md/medium",
    className: m.countdown,
    tag: "div",
    children: (0, r.jsx)("div", {
      role: "timer",
      "aria-relevant": "all",
      children: o
    })
  })
}
let p = l.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: n,
    displayOptions: l,
    isFullScreen: a
  } = e, d = (0, c.q_F)({
    transform: "translateX(-50%) ".concat(n ? "translateY(-75%)" : "translateY(0%)"),
    opacity: +!!n,
    config: {
      tension: 120,
      friction: 12
    }
  });
  return (0, r.jsxs)(o.animated.div, {
    className: s()([m.countDownWrapper, a && m.fullScreenWrapper, i.tq && m.mobileWrapper]),
    role: "status",
    style: function(e) {
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
    }({}, l.style, d),
    children: [(0, r.jsx)(c.Text, {
      variant: "text-md/medium",
      className: m.countdownLabel,
      children: l.label()
    }), null != l.iconSrc && (0, r.jsx)("img", {
      src: l.iconSrc,
      className: m.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, r.jsx)(h, {
      endDate: t
    }), (0, r.jsx)("img", {
      src: g.Z,
      className: s()(m.sparkles, m.left),
      alt: "",
      "aria-hidden": !0
    }), (0, r.jsx)("img", {
      src: f.Z,
      className: s()(m.sparkles, m.right),
      alt: "",
      "aria-hidden": !0
    })]
  })
})