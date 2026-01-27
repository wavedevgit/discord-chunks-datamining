/** Chunk was on web.js **/
/** chunk id: 391622, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk324861 = require("./324861.js"),
  Chunk749226 = require("./749226.js");
let s = {
  title: "Orb Onboarding",
  stories: [{
    name: "Orb Onboarding Reset",
    id: "orb-onboarding-reset",
    component: function() {
      let {
        resetOnboardingExperience: e
      } = (0, a.A)();
      return (0, r.jsxs)("div", {
        className: o.YG,
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