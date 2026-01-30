/** Chunk was on 64935 **/
/** chunk id: 753073, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk355200 = require("./355200.js");

function c(e) {
  let {
    message: t,
    compact: n,
    usernameHook: c
  } = e, u = (0, l.Ay)(t), d = c(u), p = s.intl.format(s.t["zla/ux"], {
    username: u.nick,
    usernameHook: d,
    topic: t.content
  });
  return (0, r.jsx)(a.A, {
    className: o.d,
    iconNode: (0, r.jsx)(i.qux, {
      size: "md",
      color: "currentColor"
    }),
    iconContainerClassName: o.z,
    timestamp: t.timestamp,
    compact: n,
    children: p
  })
}