/** Chunk was on web.js **/
/** chunk id: 860151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk685138 = require("./685138.js"),
  Chunk373370 = require("./373370.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk73231 = require("./73231.js");
let d = function(e) {
  let {
    className: t,
    autoplay: n,
    quest: i,
    questContent: d,
    taskDetails: f,
    location: _,
    sourceQuestContent: p
  } = e, h = (0, l.DD)({
    quest: i,
    taskDetails: f,
    location: _,
    questContent: d,
    sourceQuestContent: p
  }), m = (0, s.n)({
    location: _,
    questConfig: i.config
  }).enabled;
  return (0, r.jsxs)("div", {
    className: a()(u.wrapper, t),
    style: m ? true : {
      color: i.config.colors.primary
    },
    children: [(0, r.jsx)(c.Z, {
      autoplay: n,
      className: u.rewardTile,
      quest: i,
      questContent: d,
      location: _,
      sourceQuestContent: p
    }), (0, r.jsx)("div", {
      className: u.copy,
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: h
      })
    })]
  })
}