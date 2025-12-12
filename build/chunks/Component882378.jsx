/** Chunk was on 41700 **/
/** chunk id: 882378, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk378298 = require("./378298.js"),
  Chunk513646 = require("./513646.js"),
  Chunk276618 = require("./276618.js"),
  Chunk367408 = require("./367408.js"),
  Chunk473092 = require("./473092.js"),
  Chunk819640 = require("./819640.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk134612 = require("./134612.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk962793 = require("./962793.js");
let O = Chunk473749.memo(function(e) {
  let {
    channel: t
  } = e, O = (0, d.h)(t.id), x = (0, u.o)(t.id), j = (0, p.M)(t.id), v = (0, a.useHasAnyModalOpen)(), C = (0, l.e7)([f.Z], () => f.Z.hasLayers()), I = i.useCallback(() => x ? b.intl.string(b.t["16QyDv"]) : null != j ? b.intl.string(b.t.kCN9i0) : null, [x, j]), _ = i.useMemo(() => (x || null != j) && !v && !C, [x, j, v, C]), [S, E] = i.useState(I());
  i.useEffect(() => {
    null != j && null != O && (s.uvj.announce(b.intl.string(b.t.acsXuG)), setTimeout(() => {
      (0, c.T)(t.id, [j.id])
    }, 5e3), (0, h.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: j.id,
      warningType: j.type,
      isNudgeWarning: null != j,
      viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
    })), x && (s.uvj.announce(b.intl.string(b.t["1dxCqG"])), setTimeout(() => {
      (0, c.Ot)(t.id)
    }, 5e3))
  }, [t, j, O, x]), (0, o.ZP)(() => {
    null != O && (0, h.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: O.id,
      warningType: O.type,
      isNudgeWarning: null != j,
      viewName: h.pb.SAFETY_TOOLS_BUTTON
    })
  }), i.useEffect(() => {
    let e = I();
    null != e && E(e)
  }, [x, j, I]);
  let Z = i.useCallback(() => {
    null != j && (0, c.T)(t.id, [j.id]), null != O && ((0, s.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("37031"), n.e("89650"), n.e("94253")]).then(n.bind(n, 611446));
      return n => {
        let {
          onClose: i,
          transitionState: l
        } = n;
        return (0, r.jsx)(e, {
          otherUserId: t.getRecipientId(),
          channelId: t.id,
          warningId: O.id,
          warningType: O.type,
          onClose: i,
          transitionState: l
        })
      }
    }, {
      modalKey: m.X_
    }), (0, h.qc)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: O.id,
      warningType: O.type,
      cta: h.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
      isNudgeWarning: null != j
    }))
  }, [j, O, t]);
  return null == O ? null : (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    forceOpen: _,
    text: S,
    color: s.r6K.BRAND,
    position: "bottom",
    tooltipClassName: y.tooltip,
    tooltipContentClassName: y.tooltipContent,
    children: () => (0, r.jsx)(g.ZP.Icon, {
      icon: s.b7C,
      onClick: Z,
      tooltip: b.intl.string(b.t.rpc2qv),
      tooltipDisabled: null != j
    })
  })
})