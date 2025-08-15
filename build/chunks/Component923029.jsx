/** Chunk was on 73551 **/
/** chunk id: 923029, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk911560 = require("./911560.js"),
  Chunk210887 = require("./210887.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk529834 = require("./529834.js");

function m(e) {
  let t, {
    channelId: m
  } = e;
  i.useEffect(() => {
    c.Z.loadThread(m)
  });
  let g = (0, a.e7)([d.Z], () => d.Z.getGuildId()) === p.I_8,
    b = (0, a.e7)([u.Z], () => u.Z.theme);
  return t = g ? (0, r.jsx)(o.OZU, {
    note: h.intl.string(h.t["D5SN5+"]),
    children: h.intl.string(h.t.xVTAdX)
  }) : null != m ? (0, r.jsx)(o.$jN, {
    type: o.$jN.Type.SPINNING_CIRCLE
  }) : (0, r.jsx)(o.OZU, {
    note: h.intl.string(h.t["LTr+x8"]),
    children: h.intl.string(h.t.ai6Lbm)
  }), (0, r.jsxs)("div", {
    className: f.noChannel,
    children: [l.tq && (0, r.jsx)(s.ZP, {
      children: null
    }), (0, r.jsxs)(o.ubH, {
      theme: b,
      children: [(0, r.jsx)(o.oxh, {
        darkSrc: g ? n(691270) : n(625065),
        lightSrc: g ? n(704139) : n(875184),
        width: 272,
        height: 222
      }), t]
    })]
  })
}