/** Chunk was on 21376 **/
/** chunk id: 557359, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk296991 = require("./296991.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk217472 = require("./217472.js"),
  Chunk651390 = require("./651390.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk229271 = require("./229271.js");

function b(e) {
  let {
    requireTerms: t,
    rules: n
  } = e, l = (0, o.e7)([m.Z], () => m.Z.getProps().guild), b = null == l ? true : l.id, x = i.useCallback(e => {
    if (null == b || null == n) return null;
    g.Z.setPendingInviteRules(b, e, [...n])
  }, [b, n]), j = i.useCallback(e => {
    if (null == b) return null;
    g.Z.setPendingInviteRules(b, t, e)
  }, [b, t]);
  return null == l ? null : null == n ? (0, r.jsx)(d.$jN, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: h.headerContainer,
      children: [(0, r.jsxs)("div", {
        className: h.headerText,
        children: [(0, r.jsx)(a.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: f.intl.string(f.t.d21uOj)
        }), (0, r.jsx)(a.xvT, {
          tag: "p",
          variant: "text-sm/medium",
          color: "text-secondary",
          className: h.bodyText,
          children: f.intl.string(f.t.SzpUBA)
        })]
      }), (0, r.jsx)(c.T2, {
        onChange: x,
        checked: t
      })]
    }), t && (0, r.jsx)(p.c, {
      guildId: l.id
    }), (0, r.jsx)("div", {
      className: s()(h.rules, {
        [h.disabled]: !t
      }),
      children: (0, r.jsxs)("div", {
        inert: t ? true : "",
        children: [(0, r.jsx)(a.X6q, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: h.rulesHeader,
          children: f.intl.string(f.t.XcAzbm)
        }), (0, r.jsx)(u.k, {
          guild: l,
          rules: n,
          setRules: j,
          disabled: !t
        })]
      })
    })]
  })
}