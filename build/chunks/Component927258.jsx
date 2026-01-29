/** Chunk was on 2827 **/
/** chunk id: 927258, original params: e,t,n (module,exports,require) **/
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
let d = e => {
  let {
    navBarSections: t,
    activeSectionId: n
  } = e, d = {
    [a.k.HOME]: o.intl.string(o.t.uGRXjS),
    [a.k.WHATS_NEW]: o.intl.string(o.t["mfcR/v"]),
    [a.k.BEST_OF_NITRO]: o.intl.string(o.t.xQKkE8),
    [a.k.PLANS]: o.intl.string(o.t.wyNMnm),
    [a.k.COMPARE]: o.intl.string(o.t.pwD7If)
  }, u = Object.values(t).sort((e, t) => e.order - t.order);
  return (0, r.jsx)(l.A, {
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
          children: u.map(e => {
            let t = n === e.id,
              l = d[e.id];
            return (0, r.jsxs)(i.DUT, {
              className: c.S0,
              onClick: e.scrollToSection,
              children: [(0, r.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: l
              }), t && (0, r.jsx)("div", {
                className: c.W0
              })]
            }, l)
          })
        })]
      }), (0, r.jsx)(s.A, {
        size: "sm",
        variant: "overlay-secondary"
      })]
    })
  })
}