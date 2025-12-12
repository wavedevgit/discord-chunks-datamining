/** Chunk was on web.js **/
/** chunk id: 351483, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk112560 = require("./112560.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk926549 = require("./926549.js");
let Chunk978538 = require("./978538.js");

function u(e) {
  let {
    width: t,
    noArt: n = false,
    selected: i = false
  } = e;
  return (0, r.jsx)("div", {
    className: a()(l.content, l.streamHidden),
    children: (0, r.jsx)(o.Z, {
      className: l.streamHiddenEmptyState,
      artURL: c,
      noArt: n,
      selected: i,
      size: (0, o.L)(t),
      header: s.intl.string(s.t.wxbmeJ),
      description: s.intl.string(s.t.odF9WI)
    })
  })
}