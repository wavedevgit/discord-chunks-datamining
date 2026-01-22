/** Chunk was on web.js **/
/** chunk id: 448613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => d
}), require("./65821.js");
var Chunk308528 = require("./308528.js"),
  Chunk843472 = require("./843472.js"),
  Chunk355622 = require("./355622.js"),
  Chunk428249 = require("./428249.js"),
  Chunk451909 = require("./451909.js"),
  Chunk734057 = require("./734057.js"),
  Chunk460350 = require("./460350.js"),
  Chunk381941 = require("./381941.js");
let d = async e => {
  let {
    userId: t,
    content: n,
    location: d,
    openChannel: f = true,
    whenReady: p = false,
    entry: _,
    nonce: h
  } = e, {
    valid: m,
    failureReason: g
  } = await (0, c.i)({
    type: a.oU.NORMAL,
    content: n,
    channel: null
  });
  if (!m) throw Error(g);
  let E = f ? await r.A.openPrivateChannel({
      recipientIds: t,
      location: d
    }) : await r.A.getOrEnsurePrivateChannel(t),
    b = l.A.getChannel(E);
  if (null == b) throw Error("Failed to open private channel");
  if (null != _)(0, s.d)({
    channel: b,
    content: n,
    entry: _,
    whenReady: p,
    doNotNotifyOnError: false,
    location: u.Hx.USER_PROFILE
  });
  else {
    let e = o.Ay.parse(b, n);
    return i.A.sendMessage(b.id, e, p, {
      location: u.Hx.USER_PROFILE,
      nonce: h
    })
  }
}