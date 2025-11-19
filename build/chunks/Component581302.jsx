/** Chunk was on 91394 **/
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
  Chunk906406 = require("./906406.js");
let c = function() {
  let {
    resetOnboardingExperience: e,
    resetQuestStatus: t
  } = (0, Chunk52647.Z)();
  return (0, Chunk54381.jsx)("div", {
    className: Chunk906406.container,
    children: (0, Chunk54381.jsxs)(Chunk481060.C3N, {
      label: "Virtual Currency Configuration",
      description: "Click the button below to reset your onboarding state for Virtual Currency.",
      children: [(0, Chunk54381.jsx)("div", {
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          text: "Reset Onboarding State",
          onClick: () => {
            module(), exports(), (0, Chunk703656.uL)(Chunk981631.Z5c.APP)
          }
        })
      }), (0, Chunk54381.jsx)(Chunk481060.Wn, {
        messageType: Chunk481060.QYI.INFO,
        children: "Your may have to refresh your client after being redirected to the main application in order to see these"
      })]
    })
  })
}