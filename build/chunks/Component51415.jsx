/** Chunk was on 87665 **/
/** chunk id: 51415, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk272008 = require("./272008.js"),
  Chunk981631 = require("./981631.js"),
  Chunk929920 = require("./929920.js");
let c = function() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk929920.container,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-feedback-info",
      style: {
        marginBottom: "8px"
      },
      children: "Click the button below to clear your Minor Reward Capping History."
    }), (0, Chunk951288.jsx)(Chunk481060.Button, {
      onClick: () => {
        (0, Chunk272008.it)(), (0, Chunk703656.uL)(Chunk981631.Z5c.QUEST_HOME_V2)
      },
      text: "Clear History"
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-feedback-info",
      children: "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes."
    })]
  })
}