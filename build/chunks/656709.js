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
    doNotNotifyOnError: s,
    location: l
  } = e, c = i.ZP.parse(t, n), u = {
    unverified_content: o
  };
  return r.Z.sendMessage(t.id, c, a, {
    contentInventoryEntry: u,
    doNotNotifyOnError: s,
    location: l
  })
}

function a(e) {
  let {
    channel: t,
    content: n,
    whenReady: o,
    doNotNotifyOnError: a,
    location: s
  } = e, l = i.ZP.parse(t, n);
  return r.Z.sendMessage(t.id, l, o, {
    doNotNotifyOnError: a,
    location: s
  })
}