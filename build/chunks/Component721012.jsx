/** Chunk was on 58227 **/
/** chunk id: 721012, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
require("./120356.js");
var Chunk666917 = require("./666917.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk490369 = require("./490369.js");

function c(e) {
  let {
    testimonial: t,
    className: n
  } = e, {
    message: r,
    profilePic: i,
    adminTitle: c,
    emphasisColor: d = "interactive-normal"
  } = t;
  return (0, l.jsxs)("div", {
    className: n,
    children: [(0, l.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      children: s.intl.format(r, {
        testimonialHook: (e, t) => (0, l.jsx)(a.Text, {
          tag: "span",
          variant: "text-sm/bold",
          color: d,
          children: e
        }, t)
      })
    }), (0, l.jsxs)("div", {
      className: o.userContainer,
      children: [(0, l.jsx)(a.qEK, {
        src: i,
        size: a.EFr.SIZE_16,
        "aria-hidden": true
      }), (0, l.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: c
      })]
    })]
  })
}

function d(e) {
  let {
    testimonials: t
  } = e, [
    [n, i], c
  ] = r.useState([0, "right"]), d = r.useCallback(() => {
    c(e => {
      let [n] = e;
      return 0 === n ? [t.length - 1, "left"] : [n - 1, "left"]
    })
  }, [c, t.length]), m = r.useCallback(() => {
    c(e => {
      let [n] = e;
      return [(n + 1) % t.length, "right"]
    })
  }, [c, t.length]), g = t[n], h = r.useCallback((e, t, n, r) => (0, l.jsx)(u, {
    item: t,
    state: n,
    cleanup: r,
    direction: i
  }, e), [i]);
  return (0, l.jsxs)("div", {
    className: o.testimonialHeroContainer,
    children: [(0, l.jsx)("div", {
      className: o.animatedContainer,
      children: (0, l.jsx)(a.W3x, {
        items: [g],
        renderItem: h,
        getItemKey: e => e.adminTitle
      })
    }), (0, l.jsx)(a.Text, {
      variant: "text-lg/bold",
      className: o.heroQuotes,
      children: "“"
    }), (0, l.jsxs)("div", {
      className: o.testimonialsControls,
      children: [(0, l.jsx)(a.hU, {
        size: "sm",
        variant: "secondary",
        icon: a.whL,
        onClick: d,
        "aria-label": s.intl.string(s.t["13/7kX"])
      }), (0, l.jsx)(a.hU, {
        size: "sm",
        variant: "secondary",
        icon: a.ZSh,
        onClick: m,
        "aria-label": s.intl.string(s.t.PDTjLN)
      })]
    })]
  })
}

function u(e) {
  let {
    item: t,
    state: n,
    cleanup: r,
    direction: s
  } = e, [d] = (0, a.q_F)(() => {
    switch (n) {
      case a.pJH.ENTERED:
        return {
          from: {
            transform: "right" === s ? "translateX(150%)" : "translate(-150%)"
          }, to: {
            transform: "translateX(0%)"
          }
        };
      case a.pJH.YEETED:
        return {
          from: {
            transform: "translateX(0%)"
          }, to: {
            transform: "right" === s ? "translateX(-150%)" : "translate(150%)"
          }, onRest: r
        };
      default:
        return {}
    }
  }, "respect-motion-settings", [n]);
  return (0, l.jsx)(i.animated.div, {
    style: d,
    children: (0, l.jsx)(c, {
      className: o.testimonial,
      testimonial: t
    })
  })
}