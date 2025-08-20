/** Chunk was on 37447 **/
/** chunk id: 683650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => u,
  o: () => c
});
var r, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk497505 = require("./497505.js"),
  Chunk543433 = require("./543433.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  u = ((r = {}).NOT_FOUND = "not_found", r.MOBILE_ONLY = "mobile_only", r);

function c(e) {
  let {
    questId: t,
    reason: n = "not_found"
  } = e;
  return (0, o.jsx)(i.w, {
    questId: t,
    fallbackReason: a.V_.UNKNOWN_QUEST,
    bodyText: l.intl.string("mobile_only" === n ? l.t.Pag1gY : l.t.CTn0yc),
    questContent: s.jn.INVALID_QUEST_EMBED
  })
}