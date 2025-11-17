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
  let e = (0, Chunk652262.M)(),
    t = (0, Chunk915009.xf)(),
    n = [{
      value: Chunk524437.Q4.BLUR,
      label: Chunk388032.intl.string(Chunk388032.t.S49Uad)
    }, {
      value: Chunk524437.Q4.BLOCK,
      label: Chunk388032.intl.string(Chunk388032.t["D/157Y"])
    }];
  if (null == exports || null == module) return null;
  let d = t => {
      (0, s.zj)(e, t)
    },
    {
      explicitContentFriendDm: f,
      explicitContentNonFriendDm: _
    } = exports;
  return (0, Chunk54381.jsxs)(Chunk400313.n, {
    description: Chunk388032.intl.string(Chunk388032.t.Wnojv1),
    children: [(0, Chunk54381.jsx)(Chunk947707.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["+uI23H"]),
      value: f,
      onChange: e => d({
        explicitContentFriendDm: e
      }),
      options: require
    }), (0, Chunk54381.jsx)(Chunk947707.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["Yh+HX1"]),
      value: _,
      onChange: e => d({
        explicitContentNonFriendDm: e
      }),
      options: require
    })]
  })
}