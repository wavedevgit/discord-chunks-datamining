/** Chunk was on web.js **/
/** chunk id: 295822, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => d
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
    t = (0, l.T3)();
  if (null == t || null == e) return null;
  let {
    goreContentFriendDm: n,
    goreContentNonFriendDm: d
  } = t, f = t => {
    (0, s.Jr)(e, t)
  }, p = [{
    value: i.Q4.BLUR,
    label: u.intl.string(u.t.S49Uad)
  }, {
    value: i.Q4.BLOCK,
    label: u.intl.string(u.t["D/157Y"])
  }];
  return (0, r.jsxs)(a.n, {
    description: u.intl.string(u.t.XgH9eh),
    children: [(0, r.jsx)(o.Z, {
      title: u.intl.string(u.t["+uI23H"]),
      value: n,
      onChange: e => f({
        goreContentFriendDm: e
      }),
      options: p
    }), (0, r.jsx)(o.Z, {
      title: u.intl.string(u.t["Yh+HX1"]),
      value: d,
      onChange: e => f({
        goreContentNonFriendDm: e
      }),
      options: p
    })]
  })
}