/** Chunk was on 44799 **/
/** chunk id: 460608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk665957 = require("./665957.js"),
  Chunk659679 = require("./659679.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk83085 = require("./83085.js");

function u(e) {
  let {
    guildId: t
  } = e, n = (0, l.Z)(t);
  return 0 === n.length ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.X6q, {
      className: s.header,
      variant: "eyebrow",
      color: "text-subtle",
      children: a.intl.string(a.t.yM9Krm)
    }), (0, r.jsx)(i.zJl, {
      className: s.container,
      fade: true,
      children: n.map((e, t) => (0, r.jsx)(o.Z, {
        boost: e
      }, "boost-activity-".concat(t)))
    })]
  })
}