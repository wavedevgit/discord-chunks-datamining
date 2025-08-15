/** Chunk was on web.js **/
/** chunk id: 986398, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js"),
  Chunk81063 = require("./81063.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    leaderboard: t,
    className: n,
    ref: o
  } = e, s = (0, i.xF)(t.settings.application_id, t.settings.winner_asset_id);
  return null == s ? null : (0, r.jsx)("img", {
    className: n,
    src: s,
    alt: a.intl.string(a.t.QyRmzc),
    ref: o
  })
}