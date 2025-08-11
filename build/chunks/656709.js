/** Chunk was on web.js **/
/** chunk id: 656709, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => a,
  p: () => o
});
var Chunk904245 = require("./904245.js"),
  Chunk957730 = require("./957730.js");

function o(e) {
  let {
    channel: t,
    content: n,
    entry: o,
    whenReady: a,
    doNotNotifyOnError: s
  } = e, l = i.ZP.parse(t, n), c = {
    unverified_content: o
  };
  return r.Z.sendMessage(t.id, l, a, {
    contentInventoryEntry: c,
    doNotNotifyOnError: s
  })
}

function a(e) {
  let {
    channel: t,
    content: n,
    whenReady: o,
    doNotNotifyOnError: a
  } = e, s = i.ZP.parse(t, n);
  return r.Z.sendMessage(t.id, s, o, {
    doNotNotifyOnError: a
  })
}