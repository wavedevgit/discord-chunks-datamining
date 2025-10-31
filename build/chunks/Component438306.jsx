/** Chunk was on 88647 **/
/** chunk id: 438306, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk933557 = require("./933557.js"),
  Chunk454585 = require("./454585.js"),
  Chunk131704 = require("./131704.js"),
  Chunk496675 = require("./496675.js"),
  Chunk396769 = require("./396769.jsx"),
  Chunk967128 = require("./967128.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk734335 = require("./734335.js"),
  Chunk430864 = require("./430864.js");

function b(e) {
  let {
    channel: t
  } = e, n = (0, o.ZP)(t, true), b = (0, i.e7)([u.Z], () => u.Z.can(f.Plq.MANAGE_CHANNELS, t) && c.dF.has(t.type));
  return (0, r.jsxs)(p.ZP, {
    channelId: t.id,
    children: [(0, r.jsx)(p.Kq, {
      channelType: t.type
    }), (0, r.jsx)(p.Ot, {
      children: h.intl.format(h.t.I3R7Vn, {
        channelName: n
      })
    }), (0, r.jsx)(p.jz, {
      className: g.markup,
      children: h.intl.format(h.t.pYMVRT, {
        channelName: n,
        topicHook: () => s.Z.parseTopic(t.topic, true, {
          channelId: t.id
        })
      })
    }), b ? (0, r.jsx)("div", {
      className: m.buttonContainer,
      children: (0, r.jsx)(d.Z, {
        label: h.intl.string(h.t["3gUsJb"]),
        onClick: () => {
          a.ZP.open(t.id)
        },
        icon: (0, r.jsx)(l.vdY, {
          size: "xs",
          color: "currentColor"
        })
      })
    }) : null]
  })
}