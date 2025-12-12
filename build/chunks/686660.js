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
  return (0, r.EQ)([t, e]).with([i.bL.ALL_MESSAGES, o.i.ALL_MESSAGES], () => "all_messages").with([i.bL.ONLY_MENTIONS, o.i.UNSET], () => "mentions").with([i.bL.ONLY_MENTIONS, o.i.ONLY_MENTIONS], () => "mentions").with([i.bL.NO_MESSAGES, o.i.UNSET], () => "nothing").with([i.bL.NO_MESSAGES, o.i.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
}

function c(e) {
  return (0, r.EQ)(e).with("all_messages", () => a.intl.string(a.t.hZrr6k)).with("mentions", () => a.intl.string(a.t.y59NJm)).with("nothing", () => a.intl.string(a.t["pGn/bJ"])).with("custom", () => a.intl.string(a.t["32yow9"])).exhaustive()
}