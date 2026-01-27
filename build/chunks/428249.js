/** Chunk was on web.js **/
/** chunk id: 428249, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => o,
  d: () => a
});
var Chunk843472 = require("./843472.js"),
  Chunk451909 = require("./451909.js");

function a(e) {
  let {
    channel: t,
    content: n,
    entry: a,
    whenReady: o,
    doNotNotifyOnError: s,
    location: l
  } = e, c = i.Ay.parse(t, n), u = {
    unverified_content: a
  };
  return r.A.sendMessage(t.id, c, o, {
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
  } = e, l = i.Ay.parse(t, n);
  return r.A.sendMessage(t.id, l, a, {
    doNotNotifyOnError: o,
    location: s
  })
}