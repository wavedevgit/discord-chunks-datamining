/** Chunk was on 63962 **/
/** chunk id: 882378, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk554828 = require("./554828.js");
let _ = Chunk647438.memo(function(e) {
  let {
    channel: t
  } = e, _ = (0, d.h)(t.id), O = (0, u.o)(t.id), j = (0, p.M)(t.id), v = (0, a.f9)(), x = (0, l.e7)([f.Z], () => f.Z.hasLayers()), C = i.useCallback(() => O ? b.intl.string(b.t["16QyDg"]) : null != j ? b.intl.string(b.t.kCN9i4) : null, [O, j]), I = i.useMemo(() => (O || null != j) && !v && !x, [O, j, v, x]), [E, S] = i.useState(C());
  i.useEffect(() => {
    null != j && null != _ && (s.uvj.announce(b.intl.string(b.t.acsXuL)), setTimeout(() => {
      (0, c.T)(t.id, [j.id])
    }, 5e3), (0, h.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: j.id,
      warningType: j.type,
      isNudgeWarning: null != j,
      viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
    })), O && (s.uvj.announce(b.intl.string(b.t["1dxCqK"])), setTimeout(() => {
      (0, c.Ot)(t.id)
    }, 5e3))
  }, [t, j, _, O]), (0, o.ZP)(() => {
    null != _ && (0, h.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: _.id,
      warningType: _.type,
      isNudgeWarning: null != j,
      viewName: h.pb.SAFETY_TOOLS_BUTTON
    })
  }), i.useEffect(() => {
    let e = C();
    null != e && S(e)
  }, [O, j, C]);
  let Z = i.useCallback(() => {
    null != j && (0, c.T)(t.id, [j.id]), null != _ && ((0, s.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("37031"), n.e("89650"), n.e("2742")]).then(n.bind(n, 611446));
      return n => {
        let {
          onClose: i,
          transitionState: l
        } = n;
        return (0, r.jsx)(e, {
          otherUserId: t.getRecipientId(),
          channelId: t.id,
          warningId: _.id,
          warningType: _.type,
          onClose: i,
          transitionState: l
        })
      }
    }, {
      modalKey: m.X_
    }), (0, h.qc)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: _.id,
      warningType: _.type,
      cta: h.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
      isNudgeWarning: null != j
    }))
  }, [j, _, t]);
  return null == _ ? null : (0, r.jsx)(s.ua7, {
    forceOpen: I,
    text: E,
    color: s.FGA.BRAND,
    position: "bottom",
    tooltipClassName: y.tooltip,
    tooltipContentClassName: y.tooltipContent,
    children: () => (0, r.jsx)(g.ZP.Icon, {
      icon: s.b7C,
      onClick: Z,
      tooltip: b.intl.string(b.t.rpc2qq),
      tooltipDisabled: null != j
    })
  })
})