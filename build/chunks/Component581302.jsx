/** Chunk was on 76349 **/
/** chunk id: 581302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk693789 = require("./693789.jsx"),
  Chunk789164 = require("./789164.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk52647 = require("./52647.js"),
  Chunk237012 = require("./237012.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk906406 = require("./906406.js");
let m = function() {
  let {
    resetOnboardingExperience: e,
    resetQuestStatus: t
  } = (0, Chunk52647.Z)();
  return (0, Chunk951288.jsx)(Chunk789164.h, {
    title: "Virtual Currency Configuration",
    className: Chunk906406.container,
    children: (0, Chunk951288.jsxs)(Chunk237012.E_, {
      label: "Reset Onboarding State",
      direction: "vertical",
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-feedback-info",
        children: "Click the button below to reset your onboarding state for Virtual Currency."
      }), (0, Chunk951288.jsx)(Chunk693789.zx, {
        onClick: () => {
          module(), exports(), (0, Chunk703656.uL)(Chunk981631.Z5c.APP)
        },
        children: "Reset Onboarding State"
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-feedback-info",
        children: "Your may have to refresh your client after being redirected to the main application in order to see these changes."
      })]
    })
  })
}