/** Chunk was on web.js **/
/** chunk id: 161572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk837411 = require("./837411.js"),
  Chunk705556 = require("./705556.jsx"),
  Chunk955418 = require("./955418.jsx"),
  Chunk155493 = require("./155493.js");

function l(e) {
  let {
    user: t,
    guildId: n,
    channelId: l,
    onClose: c,
    appContext: u,
    disableAutoFocus: d = false
  } = e, f = (0, i.Z)(t.id, n);
  return (0, r.jsxs)("div", {
    className: s.footer,
    children: [f && (0, r.jsx)(o.Z, {
      user: t,
      guildId: n,
      channelId: l,
      onClose: c,
      disableAutoFocus: d
    }), !f && (0, r.jsx)(a.Z, {
      user: t,
      guildId: n,
      onClose: c,
      fullWidth: true,
      appContext: u
    })]
  })
}