/** Chunk was on web.js **/
/** chunk id: 864306, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk497505 = require("./497505.js"),
  Chunk937797 = require("./937797.js"),
  Chunk543433 = require("./543433.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    questId: t
  } = e, {
    enabled: n
  } = a.m8.useConfig({
    location: s.dr.EMBED_DESKTOP
  });
  return (0, r.jsx)(o.w, {
    questId: t,
    fallbackReason: s.V_.NOT_SHAREABLE_QUEST,
    bodyText: l.intl.string(n ? l.t.Rw9rwc : l.t.yj6fIi),
    questContent: i.jn.NOT_SHAREABLE_QUEST_EMBED
  })
}