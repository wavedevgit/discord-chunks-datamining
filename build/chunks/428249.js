/** Chunk was on web.js **/
/** chunk id: 428249, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => s,
  d: () => a
});
var Chunk843472 = require("./843472.js"),
  Chunk451909 = require("./451909.js");

function a(e) {
  let {
    channel: t,
    content: n,
    entry: a,
    whenReady: s,
    doNotNotifyOnError: o,
    location: l
  } = e, c = i.Ay.parse(t, n), u = {
    unverified_content: a
  };
  return r.A.sendMessage(t.id, c, s, {
    contentInventoryEntry: u,
    doNotNotifyOnError: o,
    location: l
  })
}

function s(e) {
  let {
    channel: t,
    content: n,
    whenReady: a,
    doNotNotifyOnError: s,
    location: o
  } = e, l = i.Ay.parse(t, n);
  return r.A.sendMessage(t.id, l, a, {
    doNotNotifyOnError: s,
    location: o
  })
}