/** Chunk was on 35129 **/
/** chunk id: 346592, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk373370 = require("./373370.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk673655 = require("./673655.js");
let c = function(e) {
  let {
    className: t,
    autoplay: n,
    quest: r,
    questContent: c,
    taskDetails: d,
    location: E,
    sourceQuestContent: m
  } = e, p = (0, o.DD)({
    quest: r,
    taskDetails: d,
    location: E,
    questContent: c,
    sourceQuestContent: m
  });
  return (0, l.jsxs)("div", {
    className: s()(u.wrapper, t),
    children: [(0, l.jsx)(a.Z, {
      autoplay: n,
      className: u.rewardTile,
      quest: r,
      questContent: c,
      location: E,
      sourceQuestContent: m
    }), (0, l.jsx)("div", {
      className: u.copy,
      children: (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: p
      })
    })]
  })
}