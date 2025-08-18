/** Chunk was on 64838 **/
/** chunk id: 860151, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk192023 = require("./192023.js"),
  Chunk373370 = require("./373370.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk73231 = require("./73231.js");
let d = function(e) {
  let {
    className: t,
    autoplay: n,
    quest: r,
    questContent: d,
    taskDetails: E,
    location: m,
    sourceQuestContent: p
  } = e, f = (0, a.DD)({
    quest: r,
    taskDetails: E,
    location: m,
    questContent: d,
    sourceQuestContent: p
  }), j = (0, o.h)({
    location: m,
    questConfig: r.config
  });
  return (0, l.jsxs)("div", {
    className: s()(c.wrapper, t),
    style: j ? true : {
      color: r.config.colors.primary
    },
    children: [(0, l.jsx)(u.Z, {
      autoplay: n,
      className: c.rewardTile,
      quest: r,
      questContent: d,
      location: m,
      sourceQuestContent: p
    }), (0, l.jsx)("div", {
      className: c.copy,
      children: (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: f
      })
    })]
  })
}