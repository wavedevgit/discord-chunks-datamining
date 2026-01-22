/** Chunk was on web.js **/
/** chunk id: 127219, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => c,
  o: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk341915 = require("./341915.js"),
  Chunk665816 = require("./665816.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx"),
  l = function(e) {
    return e.NOT_FOUND = "not_found", e.MOBILE_ONLY = "mobile_only", e
  }({});

function c(e) {
  let {
    questId: t,
    reason: n = "not_found"
  } = e;
  return (0, r.jsx)(a.i, {
    questId: t,
    fallbackReason: s.eA.UNKNOWN_QUEST,
    bodyText: o.intl.string("mobile_only" === n ? o.t.Pag1gS : o.t.c9275Z),
    questContent: i.uF.INVALID_QUEST_EMBED
  })
}