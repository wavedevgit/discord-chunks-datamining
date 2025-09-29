/** Chunk was on 66663 **/
/** chunk id: 51415, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk272008 = require("./272008.js"),
  Chunk937797 = require("./937797.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk929920 = require("./929920.js");
let u = function() {
  let {
    enabled: e
  } = Chunk937797.m8.useConfig({
    location: Chunk46140.dr.INTERNAL_TOOLING
  });
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk929920.container,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-feedback-info",
      style: {
        marginBottom: "8px"
      },
      children: "Click the button below to clear your Minor Reward Capping History."
    }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
      onClick: () => {
        (0, Chunk272008.it)(), (0, Chunk703656.uL)(module ? Chunk981631.Z5c.QUEST_HOME_V2 : Chunk981631.Z5c.QUEST_HOME)
      },
      text: "Clear History"
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-feedback-info",
      children: "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes."
    })]
  })
}