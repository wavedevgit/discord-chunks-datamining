/** Chunk was on 64935 **/
/** chunk id: 269802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk355200 = require("./355200.js");

function u(e) {
  let {
    message: t,
    compact: n,
    usernameHook: u
  } = e, d = (0, a.Ay)(t), p = u(d), m = o.intl.format(o.t["Rv+TSM"], {
    username: d.nick,
    usernameHook: p,
    topic: t.content
  });
  return (0, r.jsx)(s.A, {
    className: c.d,
    iconNode: (0, r.jsx)(l.qux, {
      size: "md",
      color: i.A.unsafe_rawColors.GREEN_360.css
    }),
    iconContainerClassName: c.z,
    timestamp: t.timestamp,
    compact: n,
    children: m
  })
}