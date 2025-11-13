/** Chunk was on 14953 **/
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
  } = e, y = (0, d.h)(t.id), O = (0, u.o)(t.id), x = (0, p.M)(t.id), j = (0, a.f9)(), v = (0, l.e7)([f.Z], () => f.Z.hasLayers()), C = i.useCallback(() => O ? b.intl.string(b.t["16QyDv"]) : null != x ? b.intl.string(b.t.kCN9i0) : null, [O, x]), I = i.useMemo(() => (O || null != x) && !j && !v, [O, x, j, v]), [S, E] = i.useState(C());
  i.useEffect(() => {
    null != x && null != y && (s.uvj.announce(b.intl.string(b.t.acsXuG)), setTimeout(() => {
      (0, c.T)(t.id, [x.id])
    }, 5e3), (0, h.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: x.id,
      warningType: x.type,
      isNudgeWarning: null != x,
      viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
    })), O && (s.uvj.announce(b.intl.string(b.t["1dxCqG"])), setTimeout(() => {
      (0, c.Ot)(t.id)
    }, 5e3))
  }, [t, x, y, O]), (0, o.ZP)(() => {
    null != y && (0, h.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: y.id,
      warningType: y.type,
      isNudgeWarning: null != x,
      viewName: h.pb.SAFETY_TOOLS_BUTTON
    })
  }), i.useEffect(() => {
    let e = C();
    null != e && E(e)
  }, [O, x, C]);
  let Z = i.useCallback(() => {
    null != x && (0, c.T)(t.id, [x.id]), null != y && ((0, s.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("37031"), n.e("89650"), n.e("40394")]).then(n.bind(n, 611446));
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
      isNudgeWarning: null != x
    }))
  }, [x, y, t]);
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
      tooltipDisabled: null != x
    })
  })
})