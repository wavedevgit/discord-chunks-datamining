/** Chunk was on web.js **/
/** chunk id: 24873, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N9: () => o,
  jL: () => c,
  jU: () => l
}), require("./801541.js");
var Chunk889137 = require("./889137.js"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js"),
  Chunk985018 = require("./985018.jsx"),
  o = function(e) {
    return e.ALL_MESSAGES = "all_messages", e.MENTIONS = "mentions", e.NOTHING = "nothing", e.CUSTOM = "custom", e
  }({});

function l(e, t) {
  return (0, r.YW)([t, e]).with([i.orn.ALL_MESSAGES, a.e.ALL_MESSAGES], () => "all_messages").with([i.orn.ONLY_MENTIONS, a.e.UNSET], () => "mentions").with([i.orn.ONLY_MENTIONS, a.e.ONLY_MENTIONS], () => "mentions").with([i.orn.NO_MESSAGES, a.e.UNSET], () => "nothing").with([i.orn.NO_MESSAGES, a.e.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
}

function c(e) {
  return (0, r.YW)(e).with("all_messages", () => s.intl.string(s.t.hZrr6k)).with("mentions", () => s.intl.string(s.t.y59NJm)).with("nothing", () => s.intl.string(s.t["pGn/bJ"])).with("custom", () => s.intl.string(s.t["32yow9"])).exhaustive()
}