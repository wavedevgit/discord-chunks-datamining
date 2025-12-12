/** Chunk was on web.js **/
/** chunk id: 686660, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  gs: () => l,
  p1: () => c,
  s8: () => s
}), require("./314940.js");
var Chunk278074 = require("./278074.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.jsx"),
  s = function(e) {
    return e.ALL_MESSAGES = "all_messages", e.MENTIONS = "mentions", e.NOTHING = "nothing", e.CUSTOM = "custom", e
  }({});

function l(e, t) {
  return (0, r.EQ)([t, e]).with([i.bL.ALL_MESSAGES, a.i.ALL_MESSAGES], () => "all_messages").with([i.bL.ONLY_MENTIONS, a.i.UNSET], () => "mentions").with([i.bL.ONLY_MENTIONS, a.i.ONLY_MENTIONS], () => "mentions").with([i.bL.NO_MESSAGES, a.i.UNSET], () => "nothing").with([i.bL.NO_MESSAGES, a.i.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
}

function c(e) {
  return (0, r.EQ)(e).with("all_messages", () => o.intl.string(o.t.hZrr6k)).with("mentions", () => o.intl.string(o.t.y59NJm)).with("nothing", () => o.intl.string(o.t["pGn/bJ"])).with("custom", () => o.intl.string(o.t["32yow9"])).exhaustive()
}