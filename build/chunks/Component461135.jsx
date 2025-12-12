/** Chunk was on web.js **/
/** chunk id: 461135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk519824 = require("./519824.js");

function c(e) {
  let {
    message: t,
    compact: n,
    usernameHook: c
  } = e, u = (0, o.ZP)(t), d = c(u), f = s.intl.format(s.t.Yy6vLs, {
    username: u.nick,
    usernameHook: d,
    topic: t.content
  });
  return (0, r.jsx)(a.Z, {
    className: l.stageSystemMessage,
    iconNode: (0, r.jsx)(i.ewx, {
      size: "md",
      color: "currentColor"
    }),
    iconContainerClassName: l.iconContainer,
    timestamp: t.timestamp,
    compact: n,
    children: f
  })
}