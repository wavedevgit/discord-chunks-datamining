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
  let e = (0, Chunk652262.M)(),
    t = (0, Chunk915009.T3)();
  if (null == exports || null == module) return null;
  let {
    goreContentFriendDm: n,
    goreContentNonFriendDm: d
  } = exports, f = t => {
    (0, s.Jr)(e, t)
  }, p = [{
    value: Chunk524437.Q4.BLUR,
    label: Chunk388032.intl.string(Chunk388032.t.S49Uad)
  }, {
    value: Chunk524437.Q4.BLOCK,
    label: Chunk388032.intl.string(Chunk388032.t["D/157Y"])
  }];
  return (0, Chunk54381.jsxs)(Chunk400313.n, {
    description: Chunk388032.intl.string(Chunk388032.t.XgH9eh),
    children: [(0, Chunk54381.jsx)(Chunk947707.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["+uI23H"]),
      value: require,
      onChange: e => f({
        goreContentFriendDm: e
      }),
      options: p
    }), (0, Chunk54381.jsx)(Chunk947707.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["Yh+HX1"]),
      value: d,
      onChange: e => f({
        goreContentNonFriendDm: e
      }),
      options: p
    })]
  })
}