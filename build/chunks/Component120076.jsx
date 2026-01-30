/** Chunk was on 50796 **/
/** chunk id: 120076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
require("./503698.js");
var Chunk864605 = require("./864605.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk301450 = require("./301450.js");

function c(e) {
  let {
    testimonial: t,
    className: n
  } = e, {
    message: r,
    profilePic: i,
    adminTitle: c,
    emphasisColor: d = "interactive-text-default"
  } = t;
  return (0, l.jsxs)("div", {
    className: n,
    children: [(0, l.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: a.intl.format(r, {
        testimonialHook: (e, t) => (0, l.jsx)(s.Text, {
          tag: "span",
          variant: "text-sm/bold",
          color: d,
          children: e
        }, t)
      })
    }), (0, l.jsxs)("div", {
      className: o.f1,
      children: [(0, l.jsx)(s.euF, {
        src: i,
        size: s._3J.SIZE_16,
        "aria-hidden": true
      }), (0, l.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-default",
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
  }, [c, t.length]), g = t[n], f = r.useCallback((e, t, n, r) => (0, l.jsx)(u, {
    item: t,
    state: n,
    cleanup: r,
    direction: i
  }, e), [i]);
  return (0, l.jsxs)("div", {
    className: o.FD,
    children: [(0, l.jsx)("div", {
      className: o.nI,
      children: (0, l.jsx)(s.Fai, {
        items: [g],
        renderItem: f,
        getItemKey: e => e.adminTitle
      })
    }), (0, l.jsx)(s.Text, {
      variant: "text-lg/bold",
      className: o.wV,
      children: "“"
    }), (0, l.jsxs)("div", {
      className: o.Jv,
      children: [(0, l.jsx)(s.K0, {
        size: "sm",
        variant: "secondary",
        icon: s.rJJ,
        onClick: d,
        "aria-label": a.intl.string(a.t["13/7kX"])
      }), (0, l.jsx)(s.K0, {
        size: "sm",
        variant: "secondary",
        icon: s.EdP,
        onClick: m,
        "aria-label": a.intl.string(a.t.PDTjLN)
      })]
    })]
  })
}

function u(e) {
  let {
    item: t,
    state: n,
    cleanup: r,
    direction: a
  } = e, [d] = (0, s.zhh)(() => {
    switch (n) {
      case s.wLy.ENTERED:
        return {
          from: {
            transform: "right" === a ? "translateX(150%)" : "translate(-150%)"
          }, to: {
            transform: "translateX(0%)"
          }
        };
      case s.wLy.YEETED:
        return {
          from: {
            transform: "translateX(0%)"
          }, to: {
            transform: "right" === a ? "translateX(-150%)" : "translate(150%)"
          }, onRest: r
        };
      default:
        return {}
    }
  }, "respect-motion-settings", [n]);
  return (0, l.jsx)(i.animated.div, {
    style: d,
    children: (0, l.jsx)(c, {
      className: o.EV,
      testimonial: t
    })
  })
}