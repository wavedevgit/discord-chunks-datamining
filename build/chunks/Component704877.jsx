/** Chunk was on web.js **/
/** chunk id: 704877, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./638769.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk65470 = require("./65470.jsx"),
  Chunk716442 = require("./716442.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk547629 = require("./547629.js");
let u = e => Object.values(e).sort((e, t) => e.order - t.order),
  d = e => {
    let {
      navBarSections: t,
      activeSectionId: n
    } = e, d = {
      [o.k.HOME]: l.intl.string(l.t.uGRXjS),
      [o.k.WHATS_NEW]: l.intl.string(l.t["mfcR/v"]),
      [o.k.BEST_OF_NITRO]: l.intl.string(l.t.xQKkE8),
      [o.k.PLANS]: l.intl.string(l.t.wyNMnm),
      [o.k.COMPARE]: l.intl.string(l.t.pwD7If)
    }, f = u(t);
    return (0, r.jsx)(a.A, {
      className: c.TQ,
      transparent: true,
      children: (0, r.jsxs)("div", {
        className: c.Wc,
        children: [(0, r.jsxs)("div", {
          className: c.wG,
          children: [(0, r.jsx)(i.tvc, {
            className: c.nE,
            colorClass: c.oG
          }), (0, r.jsx)("div", {
            className: c.zc,
            children: f.map(e => {
              let t = n === e.id,
                a = d[e.id];
              return (0, r.jsxs)(i.DUT, {
                className: c.S0,
                onClick: e.scrollToSection,
                children: [(0, r.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  color: "text-strong",
                  children: a
                }), t && (0, r.jsx)("div", {
                  className: c.W0
                })]
              }, a)
            })
          })]
        }), (0, r.jsx)(s.A, {
          size: "sm",
          variant: "overlay-secondary"
        })]
      })
    })
  }