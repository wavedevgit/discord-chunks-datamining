/** Chunk was on 63962 **/
/** chunk id: 923029, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk911560 = require("./911560.js"),
  Chunk210887 = require("./210887.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk790197 = require("./790197.js");

function g(e) {
  let t, {
    channelId: g
  } = e;
  i.useEffect(() => {
    c.Z.loadThread(g)
  });
  let m = (0, a.e7)([u.Z], () => u.Z.getGuildId()) === p.I_8,
    b = (0, a.e7)([d.Z], () => d.Z.theme);
  return t = m ? (0, r.jsx)(s.OZU, {
    note: h.intl.string(h.t["D5SN5/"]),
    children: h.intl.string(h.t.xVTAdb)
  }) : null != g ? (0, r.jsx)(s.$jN, {
    type: s.$jN.Type.SPINNING_CIRCLE
  }) : (0, r.jsx)(s.OZU, {
    note: h.intl.string(h.t["LTr+x9"]),
    children: h.intl.string(h.t.ai6Lbr)
  }), (0, r.jsxs)("div", {
    className: f.noChannel,
    children: [l.tq && (0, r.jsx)(o.ZP, {
      children: null
    }), (0, r.jsxs)(s.ubH, {
      theme: b,
      children: [(0, r.jsx)(s.oxh, {
        darkSrc: m ? n(691270) : n(625065),
        lightSrc: m ? n(704139) : n(875184),
        width: 272,
        height: 222
      }), t]
    })]
  })
}