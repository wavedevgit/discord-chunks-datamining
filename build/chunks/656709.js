/** Chunk was on web.js **/
/** chunk id: 656709, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => o,
  p: () => a
});
var Chunk904245 = require("./904245.js"),
  Chunk957730 = require("./957730.js");

function a(e) {
  let {
    channel: t,
    content: n,
    entry: a,
    whenReady: o,
    doNotNotifyOnError: s,
    location: l
  } = e, c = i.ZP.parse(t, n), u = {
    unverified_content: a
  };
  return r.Z.sendMessage(t.id, c, o, {
    contentInventoryEntry: u,
    doNotNotifyOnError: s,
    location: l
  })
}

function o(e) {
  let {
    channel: t,
    content: n,
    whenReady: a,
    doNotNotifyOnError: o,
    location: s
  } = e, l = i.ZP.parse(t, n);
  return r.Z.sendMessage(t.id, l, a, {
    doNotNotifyOnError: o,
    location: s
  })
}