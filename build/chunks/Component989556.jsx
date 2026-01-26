/** Chunk was on 39048 **/
/** chunk id: 989556, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
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
let x = function(e) {
  let {
    className: t,
    guildId: n,
    tag: i,
    badge: x,
    primaryColor: j,
    secondaryColor: _,
    isDisabled: O = false
  } = e, v = (0, s.bG)([m.A], () => m.A.getProps().originalProfile), y = null != v && v.tag !== i;

  function A(e) {
    g.A.updateGuildProfile(n, {
      tag: e
    })
  }
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsx)(o.D0$, {
      label: h.intl.string(f.default["tN+8pD"]),
      children: e => (0, r.jsxs)("div", {
        className: b.I8,
        children: [(0, r.jsx)("div", {
          className: b.sx,
          children: (0, r.jsx)(a.ob, {
            id: e.controlId,
            className: b.U3,
            inputClassName: l()(b.f1, "heading-sm/semibold"),
            maxLength: 4,
            autoFocus: true,
            placeholder: "WUMP",
            prefixElement: (0, r.jsx)(c.J, {
              badge: x,
              width: 40,
              height: 40,
              primaryTintColor: j,
              secondaryTintColor: _
            }),
            disabled: O,
            value: null != i ? i : "",
            onChange: A
          })
        }), (0, r.jsx)("div", {
          className: b.e7,
          children: (0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: h.intl.string(f.default.CrHXHt)
          })
        })]
      })
    }), y && (0, r.jsx)(d.A, {
      className: b.O2,
      children: (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: h.intl.format(f.default["4ZKDXq"], {
          articleUrl: u.A.getArticleURL(p.MVz.SERVER_TAGS)
        })
      })
    })]
  })
}