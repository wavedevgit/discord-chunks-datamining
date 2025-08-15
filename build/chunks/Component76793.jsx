/** Chunk was on 30202 **/
/** chunk id: 76793, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function b(e) {
  let {
    userId: t,
    count: n
  } = e, {
    analyticsLocations: u
  } = (0, c.ZP)(), b = (0, s.e7)([p.default], () => p.default.getUser(t)), x = g.ZP.getFormattedName(b), _ = r.useCallback(() => {
    (0, d.Zn)(t)
  }, [t]), j = r.useCallback(() => (0, m.openUserProfileModal)({
    userId: t,
    sourceAnalyticsLocations: u
  }), [t, u]);
  return r.useEffect(() => {
    (0, l.PR)(t)
  }, [t]), (0, i.jsxs)("div", {
    className: f.section,
    children: [null != b && (0, i.jsx)(o.Z, {
      className: f.avatar,
      user: b,
      size: a.EFr.SIZE_40
    }), (0, i.jsxs)("div", {
      className: f.text,
      children: [(0, i.jsx)(a.P3F, {
        className: f.username,
        onClick: j,
        children: (0, i.jsx)(a.Text, {
          variant: "text-md/semibold",
          color: "interactive-active",
          children: x
        })
      }), (0, i.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: h.intl.format(h.t["/MBjYG"], {
          count: n
        })
      })]
    }), (0, i.jsx)(a.P3F, {
      onClick: _,
      className: f.sectionIconContainer,
      children: (0, i.jsx)(a.XHJ, {
        size: "xs"
      })
    })]
  })
}

function x(e) {
  let {
    className: t,
    userId: n,
    verification: s,
    index: l
  } = e, o = (0, d.bo)(s.timestamp), c = r.useCallback(() => {
    (0, d.ZU)(n, s.verifiedKey)
  }, [s.verifiedKey, n]);
  return (0, i.jsxs)("div", {
    className: t,
    children: [(0, i.jsxs)("div", {
      className: f.text,
      children: [(0, i.jsx)(a.Text, {
        variant: "text-sm/semibold",
        color: "interactive-active",
        children: h.intl.format(h.t.N4qBBA, {
          index: l + 1
        })
      }), (0, i.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: o
      })]
    }), (0, i.jsx)(a.P3F, {
      className: f.icon,
      onClick: c,
      children: (0, i.jsx)(a.Dio, {
        size: "md",
        color: a.TVs.colors.INTERACTIVE_NORMAL
      })
    })]
  })
}

function _(e) {
  let {
    userId: t
  } = e, n = (0, u._)(t);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(b, {
      userId: t,
      count: n.length
    }), n.map((e, s) => (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)(x, {
        className: f.row,
        userId: t,
        index: s,
        verification: e
      }), s !== n.length - 1 && (0, i.jsx)("div", {
        className: f.divider
      })]
    }, "".concat(s, "-").concat(e.timestamp)))]
  })
}
require("./197571.js")