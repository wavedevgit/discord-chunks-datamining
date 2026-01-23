/** Chunk was on 47841 **/
/** chunk id: 366846, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  D: () => b
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

function b(e) {
  let {
    requireTerms: t,
    rules: n
  } = e, l = (0, o.bG)([u.A], () => u.A.getProps().guild), b = null == l ? true : l.id, h = i.useCallback(e => {
    if (null == b || null == n) return null;
    g.A.setPendingInviteRules(b, e, [...n])
  }, [b, n]), x = i.useCallback(e => {
    if (null == b) return null;
    g.A.setPendingInviteRules(b, t, e)
  }, [b, t]);
  return null == l ? null : null == n ? (0, r.jsx)(c.y$y, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.dOG, {
      label: p.intl.string(p.t.d21uOr),
      description: p.intl.string(p.t.SzpUBF),
      onChange: h,
      checked: t
    }), t && (0, r.jsx)(m.o, {
      guildId: l.id
    }), (0, r.jsx)("div", {
      className: s()(f.aO, {
        [f.r9]: !t
      }),
      children: (0, r.jsxs)("div", {
        inert: t ? true : "",
        children: [(0, r.jsx)(a.DZT, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: f.lo,
          children: p.intl.string(p.t.XcAzbo)
        }), (0, r.jsx)(d._, {
          guild: l,
          rules: n,
          setRules: x,
          disabled: !t
        })]
      })
    })]
  })
}