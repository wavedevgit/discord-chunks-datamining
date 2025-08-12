/** Chunk was on web.js **/
/** chunk id: 6572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk963838 = require("./963838.js"),
  Chunk37091 = require("./37091.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk872269 = require("./872269.js");

function d(e) {
  let t, {
      channelId: n,
      userId: i
    } = e,
    [d, f] = (0, a.Wu)([l.Z], () => [l.Z.getWaitingHighFive(n, i), l.Z.getCompletedHighFive(n, i)]);
  if (null != f) t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      alt: c.intl.string(c.t.W6HwU1),
      src: (0, s._r)({
        name: f[0],
        id: null,
        animated: false
      }),
      className: o()(u.completeLeft, u.highFive)
    }), (0, r.jsx)("img", {
      alt: c.intl.string(c.t.W6HwU1),
      src: (0, s._r)({
        name: f[1],
        id: null,
        animated: false
      }),
      className: o()(u.completeRight, u.highFive)
    })]
  });
  else {
    if (null == d) return null;
    t = (0, r.jsx)("img", {
      alt: c.intl.string(c.t.W6HwU1),
      src: (0, s._r)({
        name: d,
        id: null,
        animated: false
      }),
      className: o()(u.waiting, u.highFive)
    })
  }
  return (0, r.jsx)("div", {
    className: u.root,
    children: t
  })
}