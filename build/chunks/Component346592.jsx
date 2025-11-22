/** Chunk was on 35129 **/
/** chunk id: 346592, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk685138 = require("./685138.js"),
  Chunk373370 = require("./373370.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk673655 = require("./673655.js");
let d = function(e) {
  let {
    className: t,
    autoplay: n,
    quest: l,
    questContent: d,
    taskDetails: p,
    location: f,
    sourceQuestContent: m
  } = e, b = (0, o.DD)({
    quest: l,
    taskDetails: p,
    location: f,
    questContent: d,
    sourceQuestContent: m
  }), E = (0, a.n)({
    location: f,
    questConfig: l.config
  }).enabled;
  return (0, r.jsxs)("div", {
    className: s()(c.wrapper, t),
    style: E ? true : {
      color: l.config.colors.primary
    },
    children: [(0, r.jsx)(u.Z, {
      autoplay: n,
      className: c.rewardTile,
      quest: l,
      questContent: d,
      location: f,
      sourceQuestContent: m
    }), (0, r.jsx)("div", {
      className: c.copy,
      children: (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: b
      })
    })]
  })
}