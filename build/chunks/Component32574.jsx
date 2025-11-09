/** Chunk was on 22740 **/
/** chunk id: 32574, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
let m = function(e) {
  let {
    onSubmit: t
  } = e, n = (0, r.e7)([c.default], () => c.default.getCurrentUser());
  return (0, a.jsx)(u.Q, {
    title: "Lorem ipsum dolor",
    actions: [{
      text: "Consectetur adipiscing",
      variant: "primary",
      onClick: () => {
        (null == n ? true : n.ageVerificationStatus) === l.F$.UNVERIFIED ? s.Z.showAgeVerificationGetStartedModal({
          entryPoint: o.cU.SAFETY_FLOWS,
          onClose: () => t({
            type: d.rY.Empty
          })
        }) : t({
          type: d.rY.Empty
        })
      }
    }],
    children: (0, a.jsxs)(i.Kqy, {
      gap: 8,
      children: [(0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }), (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }), (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        children: "Ut enim ad minim veniam quis"
      })]
    })
  })
}