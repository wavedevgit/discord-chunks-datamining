/** Chunk was on 91053 **/
/** chunk id: 882378, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk378298 = require("./378298.js"),
  Chunk444957 = require("./444957.js"),
  Chunk276618 = require("./276618.js"),
  Chunk367408 = require("./367408.js"),
  Chunk473092 = require("./473092.js"),
  Chunk819640 = require("./819640.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk134612 = require("./134612.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk807597 = require("./807597.js");
let y = Chunk647438.memo(function(e) {
  let {
    channel: t
  } = e, y = (0, d.h)(t.id), x = (0, u.o)(t.id), v = (0, p.M)(t.id), j = (0, a.f9)(), O = (0, l.e7)([f.Z], () => f.Z.hasLayers()), C = i.useCallback(() => x ? b.intl.string(b.t["16QyDv"]) : null != v ? b.intl.string(b.t.kCN9i0) : null, [x, v]), I = i.useMemo(() => (x || null != v) && !j && !O, [x, v, j, O]), [S, E] = i.useState(C());
  i.useEffect(() => {
    null != v && null != y && (s.uvj.announce(b.intl.string(b.t.acsXuG)), setTimeout(() => {
      (0, c.T)(t.id, [v.id])
    }, 5e3), (0, h.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: v.id,
      warningType: v.type,
      isNudgeWarning: null != v,
      viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
    })), x && (s.uvj.announce(b.intl.string(b.t["1dxCqG"])), setTimeout(() => {
      (0, c.Ot)(t.id)
    }, 5e3))
  }, [t, v, y, x]), (0, o.ZP)(() => {
    null != y && (0, h.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: y.id,
      warningType: y.type,
      isNudgeWarning: null != v,
      viewName: h.pb.SAFETY_TOOLS_BUTTON
    })
  }), i.useEffect(() => {
    let e = C();
    null != e && E(e)
  }, [x, v, C]);
  let Z = i.useCallback(() => {
    null != v && (0, c.T)(t.id, [v.id]), null != y && ((0, s.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("37031"), n.e("89650"), n.e("37157")]).then(n.bind(n, 611446));
      return n => {
        let {
          onClose: i,
          transitionState: l
        } = n;
        return (0, r.jsx)(e, {
          otherUserId: t.getRecipientId(),
          channelId: t.id,
          warningId: y.id,
          warningType: y.type,
          onClose: i,
          transitionState: l
        })
      }
    }, {
      modalKey: m.X_
    }), (0, h.qc)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: y.id,
      warningType: y.type,
      cta: h.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
      isNudgeWarning: null != v
    }))
  }, [v, y, t]);
  return null == y ? null : (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    forceOpen: I,
    text: S,
    color: s.r6K.BRAND,
    position: "bottom",
    tooltipClassName: _.tooltip,
    tooltipContentClassName: _.tooltipContent,
    children: () => (0, r.jsx)(g.ZP.Icon, {
      icon: s.b7C,
      onClick: Z,
      tooltip: b.intl.string(b.t.rpc2qv),
      tooltipDisabled: null != v
    })
  })
})