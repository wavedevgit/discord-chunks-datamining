/** Chunk was on web.js **/
/** chunk id: 346951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk707558 = require("./707558.jsx"),
  Chunk577720 = require("./577720.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk503414 = require("./503414.js");
let u = "SWzB1mx2o5k",
  d = () => [{
    icon: Chunk503414.perkNewsletter,
    title: Chunk388032.intl.string(Chunk388032.t.vURCf3),
    description: Chunk388032.intl.string(Chunk388032.t.qqp5ZW)
  }, {
    icon: Chunk503414.perkBadge,
    title: Chunk388032.intl.string(Chunk388032.t.j4RYIy),
    description: Chunk388032.intl.string(Chunk388032.t["3N3YOD"])
  }, {
    icon: Chunk503414.perkChallenges,
    title: Chunk388032.intl.string(Chunk388032.t.Yu1bAg),
    description: Chunk388032.intl.string(Chunk388032.t.noChoK)
  }];
class f extends Chunk647438.Component {
  render() {
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk503414.features,
      children: [(0, Chunk951288.jsx)(Chunk577720.Z, {
        className: Chunk503414.video,
        videoID: u
      }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
        className: Chunk503414.perksHeading,
        variant: "heading-sm/semibold",
        children: Chunk388032.intl.string(Chunk388032.t["ITh5+/"])
      }), (0, Chunk951288.jsx)(Chunk707558.Z, {
        features: d()
      })]
    })
  }
}
let _ = f