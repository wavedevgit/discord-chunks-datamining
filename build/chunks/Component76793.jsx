/** Chunk was on web.js **/
/** chunk id: 76793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk906732 = require("./906732.jsx");
require("./90641.js"), require("./615830.js");
var Chunk630759 = require("./630759.js"),
  Chunk931500 = require("./931500.js");
require("./921157.js");
var Chunk892001 = require("./892001.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk147111 = require("./147111.js");

function g(e) {
  let {
    userId: t,
    count: n
  } = e, {
    analyticsLocations: d
  } = (0, c.ZP)(), g = (0, a.e7)([p.default], () => p.default.getUser(t)), E = _.ZP.getFormattedName(g), b = i.useCallback(() => {
    (0, u.Zn)(t)
  }, [t]), y = i.useCallback(() => (0, f.openUserProfileModal)({
    userId: t,
    sourceAnalyticsLocations: d
  }), [t, d]);
  return i.useEffect(() => {
    (0, s.PR)(t)
  }, [t]), (0, r.jsxs)("div", {
    className: h.section,
    children: [null != g && (0, r.jsx)(l.Z, {
      className: h.avatar,
      user: g,
      size: o.EFr.SIZE_40
    }), (0, r.jsxs)("div", {
      className: h.text,
      children: [(0, r.jsx)(o.P3F, {
        className: h.username,
        onClick: y,
        children: (0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "interactive-active",
          children: E
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-default",
        children: m.intl.format(m.t["/MBjYF"], {
          count: n
        })
      })]
    }), (0, r.jsx)(o.P3F, {
      onClick: b,
      className: h.sectionIconContainer,
      children: (0, r.jsx)(o.XHJ, {
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
    index: s
  } = e, l = (0, u.bo)(a.timestamp), c = i.useCallback(() => {
    (0, u.ZU)(n, a.verifiedKey)
  }, [a.verifiedKey, n]);
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsxs)("div", {
      className: h.text,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-sm/semibold",
        color: "interactive-active",
        children: m.intl.format(m.t.N4qBBO, {
          index: s + 1
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: l
      })]
    }), (0, r.jsx)(o.P3F, {
      className: h.icon,
      onClick: c,
      children: (0, r.jsx)(o.Dio, {
        size: "md",
        color: o.TVs.colors.INTERACTIVE_NORMAL
      })
    })]
  })
}

function b(e) {
  let {
    userId: t
  } = e, n = (0, d._)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g, {
      userId: t,
      count: n.length
    }), n.map((e, a) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(E, {
        className: h.row,
        userId: t,
        index: a,
        verification: e
      }), a !== n.length - 1 && (0, r.jsx)("div", {
        className: h.divider
      })]
    }, "".concat(a, "-").concat(e.timestamp)))]
  })
}
require("./197571.js")