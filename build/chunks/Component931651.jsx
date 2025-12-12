/** Chunk was on web.js **/
/** chunk id: 931651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk907040 = require("./907040.jsx"),
  Chunk185923 = require("./185923.js");

function a(e) {
  let {
    channel: t,
    closePopout: n,
    analyticsOverride: a,
    onSelectEmoji: s,
    messageId: l
  } = e;
  return (0, r.jsx)(i.Z, {
    closePopout: n,
    channel: t,
    onSelectEmoji: s,
    pickerIntention: o.Hz.REACTION,
    analyticsOverride: a,
    messageId: l
  })
}