/** Chunk was on 6043 **/
/** chunk id: 581302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk52647 = require("./52647.js"),
  Chunk981631 = require("./981631.js"),
  Chunk295710 = require("./295710.js");
let c = function() {
  let {
    resetOnboardingExperience: e,
    resetQuestStatus: t
  } = (0, l.Z)();
  return (0, a.jsx)("div", {
    className: o.container,
    children: (0, a.jsxs)(r.C3N, {
      label: "Virtual Currency Configuration",
      description: "Click the button below to reset your onboarding state for Virtual Currency.",
      children: [(0, a.jsx)("div", {
        children: (0, a.jsx)(r.Button, {
          text: "Reset Onboarding State",
          onClick: () => {
            e(), t(), (0, i.uL)(s.Z5c.APP)
          }
        })
      }), (0, a.jsx)(r.Wn, {
        messageType: r.QYI.INFO,
        children: "Your may have to refresh your client after being redirected to the main application in order to see these"
      })]
    })
  })
}