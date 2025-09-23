/** Chunk was on 1272 **/
/** chunk id: 199104, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
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
  Chunk321286 = require("./321286.js");

function _() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.ACTIVE_NOW_COLUMN), t = (0, Chunk442837.e7)([Chunk480294.Z], () => Chunk480294.Z.hasConsented(Chunk981631.pjP.PERSONALIZATION)) ? [] : [Chunk704215.z.NOW_PLAYING_CONSENT_CARD], n = (0, Chunk313201.Dt)();
  return (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: module,
    children: (0, Chunk951288.jsx)(Chunk410575.Z, {
      section: Chunk981631.jXE.ACTIVE_NOW_COLUMN,
      children: (0, Chunk951288.jsx)("aside", {
        className: Chunk321286.container,
        "aria-labelledby": require,
        children: (0, Chunk951288.jsxs)(Chunk481060.Ttm, {
          className: Chunk321286.scroller,
          children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
            variant: "heading-lg/semibold",
            className: Chunk321286.header,
            id: require,
            children: Chunk388032.intl.string(Chunk388032.t.F4Zgg4)
          }), (0, Chunk951288.jsx)(Chunk243778.ZP, {
            contentTypes: exports,
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              if (t === l.z.NOW_PLAYING_CONSENT_CARD) return (0, r.jsx)(p.Z, {
                className: b.__invalid_consentCard,
                markAsDismissed: n
              })
            }
          }), (0, Chunk951288.jsx)(Chunk791359.Z, {})]
        })
      })
    })
  })
}