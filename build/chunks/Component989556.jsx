/** Chunk was on 47841 **/
/** chunk id: 989556, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk81461 = require("./81461.jsx"),
  Chunk801264 = require("./801264.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk652215 = require("./652215.js"),
  Chunk583970 = require("./583970.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk175820 = require("./175820.js");
let h = function(e) {
  let {
    className: t,
    guildId: n,
    tag: i,
    badge: h,
    primaryColor: j,
    secondaryColor: O,
    isDisabled: y = false
  } = e, v = (0, s.bG)([g.A], () => g.A.getProps().originalProfile), A = null != v && v.tag !== i;

  function E(e) {
    f.A.updateGuildProfile(n, {
      tag: e
    })
  }
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsx)(c.D0$, {
      label: p.intl.string(m.default["tN+8pD"]),
      children: e => (0, r.jsxs)("div", {
        className: x.I8,
        children: [(0, r.jsx)("div", {
          className: x.sx,
          children: (0, r.jsx)(a.ob, {
            id: e.controlId,
            className: x.U3,
            inputClassName: l()(x.f1, "heading-sm/semibold"),
            maxLength: 4,
            autoFocus: true,
            placeholder: "WUMP",
            prefixElement: (0, r.jsx)(o.J, {
              badge: h,
              width: 40,
              height: 40,
              primaryTintColor: j,
              secondaryTintColor: O
            }),
            disabled: y,
            value: null != i ? i : "",
            onChange: E
          })
        }), (0, r.jsx)("div", {
          className: x.e7,
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: p.intl.string(m.default.CrHXHt)
          })
        })]
      })
    }), A && (0, r.jsx)(d.A, {
      className: x.O2,
      children: (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: p.intl.format(m.default["4ZKDXq"], {
          articleUrl: u.A.getArticleURL(b.MVz.SERVER_TAGS)
        })
      })
    })]
  })
}