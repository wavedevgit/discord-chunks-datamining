/** Chunk was on 78376 **/
/** chunk id: 332612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk803306 = require("./803306.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk688810 = require("./688810.jsx");
require("./936388.js"), require("./714763.js");
var Chunk814278 = require("./814278.js"),
  Chunk699978 = require("./699978.js");
require("./818143.js");
var Chunk657331 = require("./657331.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk32086 = require("./32086.js");

function f(e) {
  let {
    userId: t,
    count: n
  } = e, {
    analyticsLocations: u
  } = (0, c.Ay)(), f = (0, l.bG)([p.default], () => p.default.getUser(t)), b = m.Ay.getFormattedName(f), h = i.useCallback(() => {
    (0, d.kj)(t)
  }, [t]), E = i.useCallback(() => (0, _.openUserProfileModal)({
    userId: t,
    sourceAnalyticsLocations: u
  }), [t, u]);
  return i.useEffect(() => {
    (0, a.wz)(t)
  }, [t]), (0, r.jsxs)("div", {
    className: A.uW,
    children: [null != f && (0, r.jsx)(o.A, {
      className: A.my,
      user: f,
      size: s._3J.SIZE_40
    }), (0, r.jsxs)("div", {
      className: A.Qq,
      children: [(0, r.jsx)(s.DUT, {
        className: A.Xh,
        onClick: E,
        children: (0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          color: "interactive-text-active",
          children: b
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-default",
        children: g.intl.format(g.t["/MBjYF"], {
          count: n
        })
      })]
    }), (0, r.jsx)(s.DUT, {
      onClick: h,
      className: A.Qz,
      children: (0, r.jsx)(s.ucK, {
        size: "xs"
      })
    })]
  })
}

function b(e) {
  let {
    className: t,
    userId: n,
    verification: l,
    index: a
  } = e, o = (0, d.tC)(l.timestamp), c = i.useCallback(() => {
    (0, d.W0)(n, l.verifiedKey)
  }, [l.verifiedKey, n]);
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsxs)("div", {
      className: A.Qq,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/semibold",
        color: "interactive-text-active",
        children: g.intl.format(g.t.N4qBBO, {
          index: a + 1
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: o
      })]
    }), (0, r.jsx)(s.DUT, {
      className: A.Kk,
      onClick: c,
      children: (0, r.jsx)(s.PGe, {
        size: "md",
        color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT
      })
    })]
  })
}

function h(e) {
  let {
    userId: t
  } = e, n = (0, u.k)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f, {
      userId: t,
      count: n.length
    }), n.map((e, l) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(b, {
        className: A.nM,
        userId: t,
        index: l,
        verification: e
      }), l !== n.length - 1 && (0, r.jsx)("div", {
        className: A.yF
      })]
    }, "".concat(l, "-").concat(e.timestamp)))]
  })
}
require("./473169.js")