/** Chunk was on 86142 **/
/** chunk id: 444316, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk36522 = require("./36522.js");

function u(e) {
  let {
    friendMemberIds: t
  } = e, n = (0, i.yK)([a.default], () => t.slice(0, 3).map(e => a.default.getUser(e)).filter(e => null != e));
  if (0 === n.length) return null;
  let u = n[0],
    d = {
      count: t.length - 1,
      username: u.username,
      username2: 2 === t.length && n.length >= 2 ? n[1].username : ""
    },
    h = o.intl.format(o.t["5NHEPu"], d);
  return (0, r.jsxs)("div", {
    className: c.kL,
    children: [(0, r.jsx)("div", {
      className: c.yA,
      children: n.map((e, t) => (0, r.jsx)("div", {
        className: c.R3,
        style: {
          zIndex: n.length - t
        },
        children: (0, r.jsx)(l.A, {
          user: e,
          size: s._3J.SIZE_16
        })
      }, e.id))
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: h
    })]
  })
}