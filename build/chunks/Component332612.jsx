/** Chunk was on web.js **/
/** chunk id: 332612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => b
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

function g(e) {
  let {
    userId: t,
    count: n
  } = e, {
    analyticsLocations: d
  } = (0, c.Ay)(), g = (0, a.bG)([p.default], () => p.default.getUser(t)), E = _.Ay.getFormattedName(g), b = i.useCallback(() => {
    (0, u.kj)(t)
  }, [t]), y = i.useCallback(() => (0, f.openUserProfileModal)({
    userId: t,
    sourceAnalyticsLocations: d
  }), [t, d]);
  return i.useEffect(() => {
    (0, o.wz)(t)
  }, [t]), (0, r.jsxs)("div", {
    className: m.uW,
    children: [null != g && (0, r.jsx)(l.A, {
      className: m.my,
      user: g,
      size: s._3J.SIZE_40
    }), (0, r.jsxs)("div", {
      className: m.Qq,
      children: [(0, r.jsx)(s.DUT, {
        className: m.Xh,
        onClick: y,
        children: (0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          color: "interactive-text-active",
          children: E
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-default",
        children: h.intl.format(h.t["/MBjYF"], {
          count: n
        })
      })]
    }), (0, r.jsx)(s.DUT, {
      onClick: b,
      className: m.Qz,
      children: (0, r.jsx)(s.ucK, {
        size: "xs"
      })
    })]
  })
}

function E(e) {
  let {
    className: t,
    userId: n,
    verification: a,
    index: o
  } = e, l = (0, u.tC)(a.timestamp), c = i.useCallback(() => {
    (0, u.W0)(n, a.verifiedKey)
  }, [a.verifiedKey, n]);
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsxs)("div", {
      className: m.Qq,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/semibold",
        color: "interactive-text-active",
        children: h.intl.format(h.t.N4qBBO, {
          index: o + 1
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: l
      })]
    }), (0, r.jsx)(s.DUT, {
      className: m.Kk,
      onClick: c,
      children: (0, r.jsx)(s.PGe, {
        size: "md",
        color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT
      })
    })]
  })
}

function b(e) {
  let {
    userId: t
  } = e, n = (0, d.k)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g, {
      userId: t,
      count: n.length
    }), n.map((e, a) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(E, {
        className: m.nM,
        userId: t,
        index: a,
        verification: e
      }), a !== n.length - 1 && (0, r.jsx)("div", {
        className: m.yF
      })]
    }, "".concat(a, "-").concat(e.timestamp)))]
  })
}
require("./473169.js")