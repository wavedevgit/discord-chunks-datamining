/** Chunk was on 30202 **/
/** chunk id: 333576, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk693789 = require("./693789.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk703656 = require("./703656.js"),
  Chunk52647 = require("./52647.js"),
  Chunk450272 = require("./450272.jsx"),
  Chunk981631 = require("./981631.js");
let u = function() {
  let {
    resetOnboardingAnnouncementModal: e,
    resetQuestStatus: t
  } = (0, Chunk52647.Z)();
  return (0, Chunk255367.jsxs)(Chunk450272.$0, {
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Virtual Currency Configuration"
    }), (0, Chunk255367.jsxs)(Chunk450272.E_, {
      label: "Reset Onboarding State",
      direction: "vertical",
      children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-feedback-info",
        style: {
          marginBottom: "8px"
        },
        children: "Click the button below to reset your onboarding state for Virtual Currency."
      }), (0, Chunk255367.jsx)(Chunk693789.zx, {
        onClick: () => {
          module(), exports(), (0, Chunk37234.xf)(), (0, Chunk703656.uL)(Chunk981631.Z5c.APP)
        },
        children: "Reset Onboarding State"
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-feedback-info",
        children: "Your may have to refresh your client after being redirected to the main application in order to see these changes."
      })]
    })]
  })
}