/** Chunk was on 72853 **/
/** chunk id: 32574, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk594174 = require("./594174.js"),
  Chunk118589 = require("./118589.js"),
  Chunk62272 = require("./62272.jsx");
let f = function(e) {
  let {
    onSubmit: t
  } = e, n = (0, i.e7)([s.default], () => s.default.getCurrentUser());
  return (0, r.jsx)(d.Q, {
    title: "Lorem ipsum dolor",
    actions: [{
      text: "Consectetur adipiscing",
      variant: "primary",
      onClick: () => {
        (null == n ? true : n.ageVerificationStatus) === l.F$.UNVERIFIED ? o.Z.showAgeVerificationGetStartedModal({
          entryPoint: c.cU.SAFETY_FLOWS,
          onClose: () => t({
            type: u.rY.Empty
          })
        }) : t({
          type: u.rY.Empty
        })
      }
    }],
    children: (0, r.jsxs)(a.Kqy, {
      gap: 8,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        children: "Ut enim ad minim veniam quis"
      })]
    })
  })
}