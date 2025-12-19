/** Chunk was on web.js **/
/** chunk id: 698305, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./415506.js");
var Chunk493683 = require("./493683.js"),
  Chunk904245 = require("./904245.js"),
  Chunk541716 = require("./541716.js"),
  Chunk656709 = require("./656709.js"),
  Chunk957730 = require("./957730.js"),
  Chunk592125 = require("./592125.js"),
  Chunk838440 = require("./838440.js"),
  Chunk959517 = require("./959517.js");
let d = async e => {
  let {
    userId: t,
    content: n,
    location: d,
    openChannel: f = true,
    whenReady: p = false,
    entry: _,
    nonce: m
  } = e, {
    valid: h,
    failureReason: g
  } = await (0, c.v)({
    type: a.Ie.NORMAL,
    content: n,
    channel: null
  });
  if (!h) throw Error(g);
  let E = f ? await r.Z.openPrivateChannel({
      recipientIds: t,
      location: d
    }) : await r.Z.getOrEnsurePrivateChannel(t),
    b = l.Z.getChannel(E);
  if (null == b) throw Error("Failed to open private channel");
  if (null != _)(0, o.p)({
    channel: b,
    content: n,
    entry: _,
    whenReady: p,
    doNotNotifyOnError: false,
    location: u.dy.USER_PROFILE
  });
  else {
    let e = s.ZP.parse(b, n);
    return i.Z.sendMessage(b.id, e, p, {
      location: u.dy.USER_PROFILE,
      nonce: m
    })
  }
}