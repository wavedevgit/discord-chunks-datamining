/** Chunk was on 2535 **/
/** chunk id: 478057, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function c() {
  return (0, Chunk442837.e7)([Chunk594174.default], () => {
    var e, t;
    return (null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) === true || (null == (t = Chunk594174.default.getCurrentUser()) ? true : exports.isStaffPersonal()) === true
  }) ? (0, Chunk951288.jsx)(Chunk481060.sNh, {
    id: "playgrounds",
    label: "Playgrounds",
    action: () => {
      (0, Chunk37234.jN)(Chunk981631.S9g.MANA_PLAYGROUND)
    },
    children: (0, Chunk951288.jsxs)(Chunk481060.kSQ, {
      children: [(0, Chunk951288.jsx)(Chunk481060.sNh, {
        id: "mana-playground",
        label: "Mana Playground",
        action: () => {
          (0, Chunk37234.jN)(Chunk981631.S9g.MANA_PLAYGROUND)
        }
      }), (0, Chunk951288.jsx)(Chunk481060.sNh, {
        id: "revenue-playground",
        label: "Revenue Playground",
        action: () => {
          (0, Chunk37234.jN)(Chunk981631.S9g.REVENUE_PLAYGROUND)
        }
      })]
    }, "design-systems")
  }, "playgrounds") : null
}