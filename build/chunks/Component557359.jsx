/** Chunk was on 9536 **/
/** chunk id: 557359, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk651612 = require("./651612.js");

function p(e) {
  let {
    requireTerms: t,
    rules: n
  } = e, l = (0, o.e7)([u.Z], () => u.Z.getProps().guild), p = null == l ? true : l.id, h = i.useCallback(e => {
    if (null == p || null == n) return null;
    g.Z.setPendingInviteRules(p, e, [...n])
  }, [p, n]), x = i.useCallback(e => {
    if (null == p) return null;
    g.Z.setPendingInviteRules(p, t, e)
  }, [p, t]);
  return null == l ? null : null == n ? (0, r.jsx)(c.$jN, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.rsf, {
      label: f.intl.string(f.t.d21uOr),
      description: f.intl.string(f.t.SzpUBF),
      onChange: h,
      checked: t
    }), t && (0, r.jsx)(m.c, {
      guildId: l.id
    }), (0, r.jsx)("div", {
      className: a()(b.rules, {
        [b.disabled]: !t
      }),
      children: (0, r.jsxs)("div", {
        inert: t ? true : "",
        children: [(0, r.jsx)(s.X6q, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: b.rulesHeader,
          children: f.intl.string(f.t.XcAzbo)
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