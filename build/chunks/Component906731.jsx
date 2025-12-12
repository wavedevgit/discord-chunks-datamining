/** Chunk was on web.js **/
/** chunk id: 906731, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk52647 = require("./52647.js"),
  Chunk616926 = require("./616926.js");
let s = {
  title: "Orb Onboarding",
  stories: [{
    name: "Orb Onboarding Reset",
    id: "orb-onboarding-reset",
    component: function() {
      let {
        resetOnboardingExperience: e
      } = (0, Chunk52647.Z)();
      return (0, Chunk54381.jsxs)("div", {
        className: Chunk616926.verticalContainer,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: "text-feedback-info",
          style: {
            marginBottom: "8px"
          },
          children: "Use this to reset your user's DCF Orb Onboarding state."
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          onClick: () => module(),
          text: "Reset Announcement Modal State"
        })]
      })
    },
    controls: {}
  }]
}