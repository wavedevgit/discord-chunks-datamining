/** Chunk was on 47387 **/
/** chunk id: 6572, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk963838 = require("./963838.js"),
  Chunk37091 = require("./37091.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk573940 = require("./573940.js");

function d(e) {
  let t, {
      channelId: n,
      userId: l
    } = e,
    [d, f] = (0, a.Wu)([u.Z], () => [u.Z.getWaitingHighFive(n, l), u.Z.getCompletedHighFive(n, l)]);
  if (null != f) t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      alt: s.intl.string(s.t.W6HwU1),
      src: (0, o._r)({
        name: f[0],
        id: null,
        animated: false
      }),
      className: i()(c.completeLeft, c.highFive)
    }), (0, r.jsx)("img", {
      alt: s.intl.string(s.t.W6HwU1),
      src: (0, o._r)({
        name: f[1],
        id: null,
        animated: false
      }),
      className: i()(c.completeRight, c.highFive)
    })]
  });
  else {
    if (null == d) return null;
    t = (0, r.jsx)("img", {
      alt: s.intl.string(s.t.W6HwU1),
      src: (0, o._r)({
        name: d,
        id: null,
        animated: false
      }),
      className: i()(c.waiting, c.highFive)
    })
  }
  return (0, r.jsx)("div", {
    className: c.root,
    children: t
  })
}