/** Chunk was on web.js **/
/** chunk id: 688912, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk873298 = require("./873298.js"),
  Chunk86689 = require("./86689.jsx"),
  Chunk639383 = require("./639383.jsx"),
  Chunk704724 = require("./704724.js"),
  Chunk171316 = require("./171316.js"),
  Chunk500470 = require("./500470.js"),
  Chunk985018 = require("./985018.jsx");

function d() {
  let e = (0, c.k)(),
    t = (0, l.xs)(),
    n = [{
      value: i.TO.BLUR,
      label: u.intl.string(u.t.S49Uad)
    }, {
      value: i.TO.BLOCK,
      label: u.intl.string(u.t["D/157Y"])
    }];
  if (null == t || null == e) return null;
  let d = t => {
      (0, o.Jz)(e, t)
    },
    {
      explicitContentFriendDm: f,
      explicitContentNonFriendDm: p
    } = t;
  return (0, r.jsxs)(a.E, {
    description: u.intl.string(u.t.Wnojv1),
    children: [(0, r.jsx)(s.A, {
      title: u.intl.string(u.t["+uI23H"]),
      value: f,
      onChange: e => d({
        explicitContentFriendDm: e
      }),
      options: n
    }), (0, r.jsx)(s.A, {
      title: u.intl.string(u.t["Yh+HX1"]),
      value: p,
      onChange: e => d({
        explicitContentNonFriendDm: e
      }),
      options: n
    })]
  })
}