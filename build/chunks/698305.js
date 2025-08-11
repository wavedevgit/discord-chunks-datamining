/** Chunk was on web.js **/
/** chunk id: 698305, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./415506.js");
var Chunk493683 = require("./493683.js"),
  Chunk904245 = require("./904245.js"),
  Chunk541716 = require("./541716.js"),
  Chunk656709 = require("./656709.js"),
  Chunk957730 = require("./957730.js"),
  Chunk592125 = require("./592125.js"),
  Chunk838440 = require("./838440.js");
let u = async e => {
  let {
    userId: t,
    content: n,
    location: u,
    openChannel: d = true,
    whenReady: f,
    entry: _
  } = e, {
    valid: p,
    failureReason: h
  } = await (0, c.v)({
    type: o.Ie.NORMAL,
    content: n,
    channel: null
  });
  if (!p) throw Error(h);
  let m = d ? await r.Z.openPrivateChannel({
      recipientIds: t,
      location: u
    }) : await r.Z.getOrEnsurePrivateChannel(t),
    g = l.Z.getChannel(m);
  if (null == g) throw Error("Failed to open private channel");
  if (null != _)(0, a.p)({
    channel: g,
    content: n,
    entry: _,
    whenReady: f
  });
  else {
    let e = s.ZP.parse(g, n);
    return i.Z.sendMessage(g.id, e, f)
  }
}