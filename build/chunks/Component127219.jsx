/** Chunk was on 64935 **/
/** chunk id: 127219, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => u,
  o: () => c
});
var r, Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk341915 = require("./341915.js"),
  Chunk665816 = require("./665816.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx"),
  c = ((r = {}).NOT_FOUND = "not_found", r.MOBILE_ONLY = "mobile_only", r);

function u(e) {
  let {
    questId: t,
    reason: n = "not_found"
  } = e;
  return (0, i.jsx)(a.i, {
    questId: t,
    fallbackReason: s.eA.UNKNOWN_QUEST,
    bodyText: o.intl.string("mobile_only" === n ? o.t.Pag1gS : o.t.c9275Z),
    questContent: l.uF.INVALID_QUEST_EMBED
  })
}