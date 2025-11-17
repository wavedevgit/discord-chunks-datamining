/** Chunk was on web.js **/
/** chunk id: 683650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => l,
  o: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk497505 = require("./497505.js"),
  Chunk543433 = require("./543433.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  l = function(e) {
    return e.NOT_FOUND = "not_found", e.MOBILE_ONLY = "mobile_only", e
  }({});

function c(e) {
  let {
    questId: t,
    reason: n = "not_found"
  } = e;
  return (0, r.jsx)(a.w, {
    questId: t,
    fallbackReason: o.V_.UNKNOWN_QUEST,
    bodyText: s.intl.string("mobile_only" === n ? s.t.Pag1gS : s.t.c9275Z),
    questContent: i.jn.INVALID_QUEST_EMBED
  })
}