/** Chunk was on web.js **/
/** chunk id: 906731, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk52647 = require("./52647.js"),
  Chunk570810 = require("./570810.js");
let s = {
  title: "Orb Onboarding",
  stories: [{
    name: "Orb Onboarding Reset",
    id: "orb-onboarding-reset",
    component: function() {
      let {
        resetOnboardingExperience: e
      } = (0, a.Z)();
      return (0, r.jsxs)("div", {
        className: o.verticalContainer,
        children: [(0, r.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "text-feedback-info",
          style: {
            marginBottom: "8px"
          },
          children: "Use this to reset your user's DCF Orb Onboarding state."
        }), (0, r.jsx)(i.Button, {
          onClick: () => e(),
          text: "Reset Announcement Modal State"
        })]
      })
    },
    controls: {}
  }]
}