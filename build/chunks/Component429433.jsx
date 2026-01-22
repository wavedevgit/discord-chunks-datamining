/** Chunk was on web.js **/
/** chunk id: 429433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk937773 = require("./937773.jsx"),
  Chunk307731 = require("./307731.js");

function s(e) {
  let {
    channel: t,
    closePopout: n,
    analyticsOverride: s,
    onSelectEmoji: o,
    messageId: l
  } = e;
  return (0, r.jsx)(i.A, {
    closePopout: n,
    channel: t,
    onSelectEmoji: o,
    pickerIntention: a.b_.REACTION,
    analyticsOverride: s,
    messageId: l
  })
}