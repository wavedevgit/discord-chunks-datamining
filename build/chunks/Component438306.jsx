/** Chunk was on 81985 **/
/** chunk id: 438306, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
  Chunk312794 = require("./312794.js"),
  Chunk960324 = require("./960324.js");

function m(e) {
  let {
    channel: t
  } = e, n = (0, o.ZP)(t, true), m = (0, i.e7)([u.Z], () => u.Z.can(p.Plq.MANAGE_CHANNELS, t) && c.dF.has(t.type));
  return (0, r.jsxs)(d.ZP, {
    channelId: t.id,
    children: [(0, r.jsx)(d.Kq, {
      channelType: t.type
    }), (0, r.jsx)(d.Ot, {
      children: f.intl.format(f.t.I3R7Vn, {
        channelName: n
      })
    }), (0, r.jsx)(d.jz, {
      className: g.markup,
      children: f.intl.format(f.t.pYMVRT, {
        channelName: n,
        topicHook: () => s.Z.parseTopic(t.topic, true, {
          channelId: t.id
        })
      })
    }), m ? (0, r.jsx)("div", {
      className: h.buttonContainer,
      children: (0, r.jsx)(l.Button, {
        size: "sm",
        variant: "secondary",
        text: f.intl.string(f.t["3gUsJb"]),
        onClick: () => {
          a.ZP.open(t.id)
        },
        icon: l.vdY
      })
    }) : null]
  })
}