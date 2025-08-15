/** Chunk was on 6049 **/
/** chunk id: 557359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk296991 = require("./296991.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk217472 = require("./217472.js"),
  Chunk651390 = require("./651390.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk229271 = require("./229271.js");

function f(e) {
  let {
    requireTerms: t,
    rules: n
  } = e, l = (0, o.e7)([u.Z], () => u.Z.getProps().guild), f = null == l ? true : l.id, b = i.useCallback(e => {
    if (null == f || null == n) return null;
    m.Z.setPendingInviteRules(f, e, [...n])
  }, [f, n]), x = i.useCallback(e => {
    if (null == f) return null;
    m.Z.setPendingInviteRules(f, t, e)
  }, [f, t]);
  return null == l ? null : null == n ? (0, r.jsx)(c.$jN, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: h.headerContainer,
      children: [(0, r.jsxs)("div", {
        className: h.headerText,
        children: [(0, r.jsx)(s.X6, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: p.intl.string(p.t.d21uOj)
        }), (0, r.jsx)(s.xv, {
          tag: "p",
          variant: "text-sm/medium",
          color: "text-secondary",
          className: h.bodyText,
          children: p.intl.string(p.t.SzpUBA)
        })]
      }), (0, r.jsx)(c.rsf, {
        onChange: b,
        checked: t
      })]
    }), t && (0, r.jsx)(g.c, {
      guildId: l.id
    }), (0, r.jsx)("div", {
      className: a()(h.rules, {
        [h.disabled]: !t
      }),
      children: (0, r.jsxs)("div", {
        inert: t ? true : "",
        children: [(0, r.jsx)(s.X6, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: h.rulesHeader,
          children: p.intl.string(p.t.XcAzbm)
        }), (0, r.jsx)(d.k, {
          guild: l,
          rules: n,
          setRules: x,
          disabled: !t
        })]
      })
    })]
  })
}