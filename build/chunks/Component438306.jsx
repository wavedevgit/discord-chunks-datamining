/** Chunk was on 71264 **/
/** chunk id: 438306, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk933557 = require("./933557.js"),
  Chunk454585 = require("./454585.js"),
  Chunk131704 = require("./131704.js"),
  Chunk496675 = require("./496675.js"),
  Chunk967128 = require("./967128.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk737893 = require("./737893.js"),
  Chunk602009 = require("./602009.js");

function g(e) {
  let {
    channel: t
  } = e, n = (0, o.ZP)(t, true), g = (0, r.e7)([u.Z], () => u.Z.can(p.Plq.MANAGE_CHANNELS, t) && c.dF.has(t.type));
  return (0, i.jsxs)(d.ZP, {
    channelId: t.id,
    children: [(0, i.jsx)(d.Kq, {
      channelType: t.type
    }), (0, i.jsx)(d.Ot, {
      children: h.intl.format(h.t.I3R7Vn, {
        channelName: n
      })
    }), (0, i.jsx)(d.jz, {
      className: m.markup,
      children: h.intl.format(h.t.pYMVRT, {
        channelName: n,
        topicHook: () => s.Z.parseTopic(t.topic, true, {
          channelId: t.id
        })
      })
    }), g ? (0, i.jsx)("div", {
      className: f.buttonContainer,
      children: (0, i.jsx)(l.Button, {
        size: "sm",
        variant: "secondary",
        text: h.intl.string(h.t["3gUsJb"]),
        onClick: () => {
          a.ZP.open(t.id)
        },
        icon: l.vdY
      })
    }) : null]
  })
}