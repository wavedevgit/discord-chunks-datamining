/** Chunk was on 64838 **/
/** chunk id: 860151, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk192023 = require("./192023.js"),
  Chunk373370 = require("./373370.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk73231 = require("./73231.js");
let d = function(e) {
  let {
    className: t,
    autoplay: n,
    quest: s,
    questContent: d,
    taskDetails: E,
    location: S,
    sourceQuestContent: m
  } = e, T = (0, o.DD)({
    quest: s,
    taskDetails: E,
    location: S,
    questContent: d,
    sourceQuestContent: m
  }), A = (0, u.h)({
    location: S,
    questConfig: s.config
  });
  return (0, l.jsxs)("div", {
    className: r()(c.wrapper, t),
    style: A ? true : {
      color: s.config.colors.primary
    },
    children: [(0, l.jsx)(a.Z, {
      autoplay: n,
      className: c.rewardTile,
      quest: s,
      questContent: d,
      location: S,
      sourceQuestContent: m
    }), (0, l.jsx)("div", {
      className: c.copy,
      children: (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: T
      })
    })]
  })
}