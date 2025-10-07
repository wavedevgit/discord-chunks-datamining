/** Chunk was on 91053 **/
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
  Chunk807597 = require("./807597.js");
let _ = Chunk647438.memo(function(e) {
  let {
    channel: t
  } = e, _ = (0, d.h)(t.id), j = (0, u.o)(t.id), O = (0, p.M)(t.id), x = (0, a.f9)(), v = (0, l.e7)([f.Z], () => f.Z.hasLayers()), C = i.useCallback(() => j ? b.intl.string(b.t["16QyDg"]) : null != O ? b.intl.string(b.t.kCN9i4) : null, [j, O]), I = i.useMemo(() => (j || null != O) && !x && !v, [j, O, x, v]), [E, S] = i.useState(C());
  i.useEffect(() => {
    null != O && null != _ && (s.uvj.announce(b.intl.string(b.t.acsXuL)), setTimeout(() => {
      (0, c.T)(t.id, [O.id])
    }, 5e3), (0, h.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: O.id,
      warningType: O.type,
      isNudgeWarning: null != O,
      viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
    })), j && (s.uvj.announce(b.intl.string(b.t["1dxCqK"])), setTimeout(() => {
      (0, c.Ot)(t.id)
    }, 5e3))
  }, [t, O, _, j]), (0, o.ZP)(() => {
    null != _ && (0, h.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: _.id,
      warningType: _.type,
      isNudgeWarning: null != O,
      viewName: h.pb.SAFETY_TOOLS_BUTTON
    })
  }), i.useEffect(() => {
    let e = C();
    null != e && S(e)
  }, [j, O, C]);
  let Z = i.useCallback(() => {
    null != O && (0, c.T)(t.id, [O.id]), null != _ && ((0, s.ZDy)(async () => {
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
      isNudgeWarning: null != O
    }))
  }, [O, _, t]);
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
      tooltipDisabled: null != O
    })
  })
})