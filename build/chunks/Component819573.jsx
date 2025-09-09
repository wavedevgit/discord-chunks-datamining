/** Chunk was on 1272 **/
/** chunk id: 819573, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk264418 = require("./264418.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk526167 = require("./526167.js"),
  Chunk648613 = require("./648613.jsx"),
  Chunk951570 = require("./951570.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk401039 = require("./401039.js"),
  Chunk571454 = require("./571454.js");
let m = e => {
  let {
    targetElementRef: t,
    dismissCoachmark: n,
    children: m,
    cohort: b
  } = e, _ = (0, r.jsx)(s.Z, {
    subscriptionTier: u.Si.TIER_2,
    children: e => {
      let {
        onClick: s
      } = e;
      return (0, r.jsx)(i.Z, {
        targetElementRef: t,
        position: "right",
        align: "top",
        size: "video",
        caretConfig: {
          position: "left",
          align: "start"
        },
        title: f.intl.string(f.t.qh6bEx),
        body: f.intl.format(f.t["70LoNT"], {
          helpCenterLink: c.lB
        }),
        graphic: {
          type: "video",
          src: (0, o.rO)() ? h.Z : g.Z,
          loop: true
        },
        gradientColor: "nitro-pink",
        actions: [{
          text: f.intl.string(f.t.J61px8),
          variant: "expressive",
          onClick: e => {
            b === c.TO.COHORT_3 ? (0, a.uL)(d.Z5c.APPLICATION_STORE) : s(e), n(p.L.USER_DISMISS)
          },
          icon: l.SrA
        }],
        onRequestClose: () => {
          n(p.L.USER_DISMISS)
        }
      })
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      children: m
    }), _]
  })
}