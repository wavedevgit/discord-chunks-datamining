/** Chunk was on 1272 **/
/** chunk id: 199104, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk352455 = require("./352455.jsx"),
  Chunk480294 = require("./480294.js"),
  Chunk791359 = require("./791359.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk833047 = require("./833047.js");

function O() {
  let {
    analyticsLocations: e
  } = (0, d.ZP)(u.Z.ACTIVE_NOW_COLUMN), t = (0, a.e7)([h.Z], () => h.Z.hasConsented(b.pjP.PERSONALIZATION)) ? [] : [o.z.NOW_PLAYING_CONSENT_CARD], n = (0, p.Dt)();
  return (0, r.jsx)(d.Gt, {
    value: e,
    children: (0, r.jsx)(c.Z, {
      section: b.jXE.ACTIVE_NOW_COLUMN,
      children: (0, r.jsx)("aside", {
        className: l()(E.container, "refresh-active-now"),
        "aria-labelledby": n,
        children: (0, r.jsx)(s.Ttm, {
          className: E.scroller,
          children: (0, r.jsxs)("div", {
            children: [(0, r.jsx)(s.Heading, {
              variant: "heading-lg/semibold",
              className: E.header,
              id: n,
              children: _.intl.string(_.t.F4Zggw)
            }), (0, r.jsx)(f.ZP, {
              contentTypes: t,
              children: e => {
                let {
                  visibleContent: t,
                  markAsDismissed: n
                } = e;
                if (t === o.z.NOW_PLAYING_CONSENT_CARD) return (0, r.jsx)(g.Z, {
                  className: E.__invalid_consentCard,
                  markAsDismissed: n
                })
              }
            }), (0, r.jsx)(m.Z, {})]
          })
        })
      })
    })
  })
}