/** Chunk was on web.js **/
/** chunk id: 291511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk524437 = require("./524437.js"),
  Chunk400313 = require("./400313.jsx"),
  Chunk947707 = require("./947707.jsx"),
  Chunk800651 = require("./800651.js"),
  Chunk915009 = require("./915009.js"),
  Chunk652262 = require("./652262.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let e = (0, c.M)(),
    t = (0, l.xf)(),
    n = [{
      value: i.Q4.BLUR,
      label: u.intl.string(u.t.S49Uad)
    }, {
      value: i.Q4.BLOCK,
      label: u.intl.string(u.t["D/157Y"])
    }];
  if (null == t || null == e) return null;
  let d = t => {
      (0, s.zj)(e, t)
    },
    {
      explicitContentFriendDm: f,
      explicitContentNonFriendDm: p
    } = t;
  return (0, r.jsxs)(a.n, {
    description: u.intl.string(u.t.Wnojv1),
    children: [(0, r.jsx)(o.Z, {
      title: u.intl.string(u.t["+uI23H"]),
      value: f,
      onChange: e => d({
        explicitContentFriendDm: e
      }),
      options: n
    }), (0, r.jsx)(o.Z, {
      title: u.intl.string(u.t["Yh+HX1"]),
      value: p,
      onChange: e => d({
        explicitContentNonFriendDm: e
      }),
      options: n
    })]
  })
}