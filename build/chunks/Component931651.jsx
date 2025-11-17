/** Chunk was on web.js **/
/** chunk id: 931651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk907040 = require("./907040.jsx"),
  Chunk185923 = require("./185923.js");

function o(e) {
  let {
    channel: t,
    closePopout: n,
    analyticsOverride: o,
    onSelectEmoji: s,
    messageId: l
  } = e;
  return (0, r.jsx)(i.Z, {
    closePopout: n,
    channel: t,
    onSelectEmoji: s,
    pickerIntention: a.Hz.REACTION,
    analyticsOverride: o,
    messageId: l
  })
}