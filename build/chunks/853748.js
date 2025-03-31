/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  $: () => h
}), n(653041);
var r = n(200651),
  l = n(192379),
  o = n(120356),
  a = n.n(o),
  i = n(642128),
  s = n(873546),
  c = n(481060),
  u = n(774078),
  d = n(388032),
  b = n(376531),
  p = n(716398),
  f = n(585616);

function g(e) {
  let {
    endDate: t
  } = e, {
    days: n,
    hours: l,
    minutes: o,
    seconds: a
  } = (0, u.Z)(t), i = function(e, t, n, r) {
    let l = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      o = [];
    return e > 0 && o.push(l(e, d.NW.string(d.t.QJyuxc))), (t > 0 || o.length > 0) && o.push(l(t, d.NW.string(d.t["1LyF1t"]))), (n > 0 || o.length > 0) && o.push(l(n, d.NW.string(d.t.n7dksL))), o.push(l(r, d.NW.string(d.t["6m/6nJ"]))), o.join(":")
  }(n, l, o, a);
  return (0, r.jsx)(c.Text, {
    variant: "heading-md/medium",
    className: b.countdown,
    tag: "div",
    children: (0, r.jsx)("div", {
      role: "timer",
      "aria-relevant": "all",
      children: i
    })
  })
}
let h = l.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: n,
    displayOptions: l,
    isFullScreen: o
  } = e, u = (0, c.q_F)({
    transform: "translateX(-50%) ".concat(n ? "translateY(-75%)" : "translateY(0%)"),
    opacity: +!!n,
    config: {
      tension: 120,
      friction: 12
    }
  });
  return (0, r.jsxs)(i.animated.div, {
    className: a()([b.countDownWrapper, o && b.fullScreenWrapper, s.tq && b.mobileWrapper]),
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
    }({}, l.style, u),
    children: [(0, r.jsx)(c.Text, {
      variant: "text-md/medium",
      className: b.countdownLabel,
      children: l.label()
    }), null != l.iconSrc && (0, r.jsx)("img", {
      src: l.iconSrc,
      className: b.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, r.jsx)(g, {
      endDate: t
    }), (0, r.jsx)("img", {
      src: p.Z,
      className: a()(b.sparkles, b.left),
      alt: "",
      "aria-hidden": !0
    }), (0, r.jsx)("img", {
      src: f.Z,
      className: a()(b.sparkles, b.right),
      alt: "",
      "aria-hidden": !0
    })]
  })
})