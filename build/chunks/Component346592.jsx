/** Chunk was on 83203 **/
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
  Chunk776665 = require("./776665.js");
let c = function(e) {
  let {
    className: t,
    autoplay: n,
    quest: l,
    questContent: c,
    taskDetails: d,
    location: E,
    sourceQuestContent: m
  } = e, f = (0, a.DD)({
    quest: l,
    taskDetails: d,
    location: E,
    questContent: c,
    sourceQuestContent: m
  });
  return (0, r.jsxs)("div", {
    className: s()(u.wrapper, t),
    children: [(0, r.jsx)(o.Z, {
      autoplay: n,
      className: u.rewardTile,
      quest: l,
      questContent: c,
      location: E,
      sourceQuestContent: m
    }), (0, r.jsx)("div", {
      className: u.copy,
      children: (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: f
      })
    })]
  })
}