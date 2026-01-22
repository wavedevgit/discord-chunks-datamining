/** Chunk was on 47841 **/
/** chunk id: 366846, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  D: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk241499 = require("./241499.jsx"),
  Chunk555337 = require("./555337.js"),
  Chunk564864 = require("./564864.js"),
  Chunk501381 = require("./501381.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk82196 = require("./82196.js");

function p(e) {
  let {
    requireTerms: t,
    rules: n
  } = e, l = (0, c.bG)([u.A], () => u.A.getProps().guild), p = null == l ? true : l.id, x = i.useCallback(e => {
    if (null == p || null == n) return null;
    f.A.setPendingInviteRules(p, e, [...n])
  }, [p, n]), h = i.useCallback(e => {
    if (null == p) return null;
    f.A.setPendingInviteRules(p, t, e)
  }, [p, t]);
  return null == l ? null : null == n ? (0, r.jsx)(o.y$y, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.dOG, {
      label: b.intl.string(b.t.d21uOr),
      description: b.intl.string(b.t.SzpUBF),
      onChange: x,
      checked: t
    }), t && (0, r.jsx)(g.o, {
      guildId: l.id
    }), (0, r.jsx)("div", {
      className: s()(m.aO, {
        [m.r9]: !t
      }),
      children: (0, r.jsxs)("div", {
        inert: t ? true : "",
        children: [(0, r.jsx)(a.DZT, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: m.lo,
          children: b.intl.string(b.t.XcAzbo)
        }), (0, r.jsx)(d._, {
          guild: l,
          rules: n,
          setRules: h,
          disabled: !t
        })]
      })
    })]
  })
}