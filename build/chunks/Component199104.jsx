/** Chunk was on 1272 **/
/** chunk id: 199104, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk365113 = require("./365113.js"),
  Chunk352455 = require("./352455.jsx"),
  Chunk480294 = require("./480294.js"),
  Chunk791359 = require("./791359.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk708567 = require("./708567.js");

function I(e) {
  let {
    isStandalone: t
  } = e, {
    analyticsLocations: n
  } = (0, d.ZP)(u.Z.ACTIVE_NOW_COLUMN), i = (0, a.e7)([g.Z], () => g.Z.hasConsented(b.pjP.PERSONALIZATION)) ? [] : [s.z.NOW_PLAYING_CONSENT_CARD], I = m.o.useConfig({
    location: "nowplaying"
  }).demureActivityCards, y = m.o.useConfig({
    location: "nowplaying"
  }).friendsTab, v = (0, p.Dt)();
  return (0, r.jsx)(d.Gt, {
    value: n,
    children: (0, r.jsx)(c.Z, {
      section: b.jXE.ACTIVE_NOW_COLUMN,
      children: (0, r.jsx)("aside", {
        className: l()(O.container, {
          [O.refreshActiveNow]: I,
          "refresh-active-now": I
        }),
        "aria-labelledby": v,
        children: (0, r.jsx)(o.Ttm, {
          className: l()(O.scroller, {
            [O.standalone]: t
          }),
          children: (0, r.jsxs)("div", {
            className: l()({
              [O.standaloneContainer]: t
            }),
            children: [y ? null : (0, r.jsx)(o.Heading, {
              variant: "heading-lg/semibold",
              className: O.header,
              id: v,
              children: E.intl.string(E.t.F4Zggw)
            }), (0, r.jsx)(f.ZP, {
              contentTypes: i,
              children: e => {
                let {
                  visibleContent: t,
                  markAsDismissed: n
                } = e;
                if (t === s.z.NOW_PLAYING_CONSENT_CARD) return (0, r.jsx)(h.Z, {
                  className: O.__invalid_consentCard,
                  markAsDismissed: n
                })
              }
            }), (0, r.jsx)(_.Z, {})]
          })
        })
      })
    })
  })
}