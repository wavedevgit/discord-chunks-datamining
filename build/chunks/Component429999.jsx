/** Chunk was on web.js **/
/** chunk id: 429999, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => c,
  X: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk49436 = require("./49436.js"),
  Chunk381963 = require("./381963.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  l = function(e) {
    return e.NOT_FOUND = "not_found", e.MOBILE_ONLY = "mobile_only", e
  }({});

function c(e) {
  let {
    questId: t,
    reason: n = "not_found"
  } = e;
  return (0, r.jsx)(a.S, {
    questId: t,
    fallbackReason: o.V_.UNKNOWN_QUEST,
    bodyText: s.intl.string("mobile_only" === n ? s.t.Pag1gS : s.t.c9275Z),
    questContent: i.jn.INVALID_QUEST_EMBED
  })
}