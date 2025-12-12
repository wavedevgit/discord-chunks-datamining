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
    entry: _
  } = e, {
    valid: m,
    failureReason: h
  } = await (0, c.v)({
    type: o.Ie.NORMAL,
    content: n,
    channel: null
  });
  if (!m) throw Error(h);
  let g = f ? await r.Z.openPrivateChannel({
      recipientIds: t,
      location: d
    }) : await r.Z.getOrEnsurePrivateChannel(t),
    E = l.Z.getChannel(g);
  if (null == E) throw Error("Failed to open private channel");
  if (null != _)(0, a.p)({
    channel: E,
    content: n,
    entry: _,
    whenReady: p,
    doNotNotifyOnError: false,
    location: u.dy.USER_PROFILE
  });
  else {
    let e = s.ZP.parse(E, n);
    return i.Z.sendMessage(E.id, e, p, {
      location: u.dy.USER_PROFILE
    })
  }
}