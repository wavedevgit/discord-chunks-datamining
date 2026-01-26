/** Chunk was on 65298 **/
/** chunk id: 491982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk976860 = require("./976860.js"),
  Chunk324861 = require("./324861.js"),
  Chunk652215 = require("./652215.js"),
  Chunk663024 = require("./663024.js");
let c = function() {
  let {
    resetOnboardingExperience: e,
    resetQuestStatus: t
  } = (0, i.A)();
  return (0, a.jsx)("div", {
    className: o.k,
    children: (0, a.jsxs)(l.nVY, {
      label: "Virtual Currency Configuration",
      description: "Click the button below to reset your onboarding state for Virtual Currency.",
      children: [(0, a.jsx)("div", {
        children: (0, a.jsx)(l.Button, {
          text: "Reset Onboarding State",
          onClick: () => {
            e(), t(), (0, r.pX)(s.BVt.APP)
          }
        })
      }), (0, a.jsx)(l.po8, {
        messageType: l.YCn.INFO,
        children: "Your may have to refresh your client after being redirected to the main application in order to see these"
      })]
    })
  })
}