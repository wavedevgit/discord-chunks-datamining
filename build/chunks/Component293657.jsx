/** Chunk was on 92917 **/
/** chunk id: 293657, original params: e,t,n (module,exports,require) **/
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
  } = e, u = (0, l.Ay)(t), d = c(u), p = s.intl.format(s.t["dKW5C+"], {
    username: u.nick,
    usernameHook: d
  });
  return (0, r.jsx)(a.A, {
    className: o.d,
    iconNode: (0, r.jsx)(i.LvC, {
      size: "md",
      color: "currentColor"
    }),
    iconContainerClassName: o.z,
    timestamp: t.timestamp,
    compact: n,
    children: p
  })
}