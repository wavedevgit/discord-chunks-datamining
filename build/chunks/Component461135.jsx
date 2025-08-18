/** Chunk was on 91173 **/
/** chunk id: 461135, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  } = e, u = (0, l.ZP)(t), d = c(u), p = o.intl.format(o.t.Yy6vLi, {
    username: u.nick,
    usernameHook: d,
    topic: t.content
  });
  return (0, r.jsx)(a.Z, {
    className: s.stageSystemMessage,
    iconNode: (0, r.jsx)(i.ewx, {
      size: "md",
      color: "currentColor"
    }),
    iconContainerClassName: s.iconContainer,
    timestamp: t.timestamp,
    compact: n,
    children: p
  })
}