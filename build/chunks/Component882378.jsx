/** Chunk was on 82124 **/
/** chunk id: 882378, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk681715 = require("./681715.js"),
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
  Chunk388032 = require("./388032.jsx");
let v = Chunk473749.memo(function(e) {
  let {
    channel: t
  } = e, v = (0, d.h)(t.id), O = (0, p.o)(t.id), j = (0, f.M)(t.id), x = (0, a.useHasAnyModalOpen)(), C = (0, l.e7)([g.Z], () => g.Z.hasLayers()), E = i.useCallback(() => O ? y.intl.string(y.t["16QyDv"]) : null != j ? y.intl.string(y.t.kCN9i0) : null, [O, j]), S = i.useMemo(() => (O || null != j) && !x && !C, [O, j, x, C]), [_, I] = i.useState(E());
  i.useEffect(() => {
    null != j && null != v && (s.uvj.announce(y.intl.string(y.t.acsXuG)), setTimeout(() => {
      (0, u.T)(t.id, [j.id])
    }, 5e3), (0, h.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: j.id,
      warningType: j.type,
      isNudgeWarning: null != j,
      viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
    })), O && (s.uvj.announce(y.intl.string(y.t["1dxCqG"])), setTimeout(() => {
      (0, u.Ot)(t.id)
    }, 5e3))
  }, [t, j, v, O]), (0, c.ZP)(() => {
    null != v && (0, h.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: v.id,
      warningType: v.type,
      isNudgeWarning: null != j,
      viewName: h.pb.SAFETY_TOOLS_BUTTON
    })
  }), i.useEffect(() => {
    let e = E();
    null != e && I(e)
  }, [O, j, E]);
  let P = i.useCallback(() => {
    null != j && (0, u.T)(t.id, [j.id]), null != v && ((0, s.ZDy)(async () => {
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
          warningId: v.id,
          warningType: v.type,
          onClose: i,
          transitionState: l
        })
      }
    }, {
      modalKey: b.X_
    }), (0, h.qc)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: v.id,
      warningType: v.type,
      cta: h.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
      isNudgeWarning: null != j
    }))
  }, [j, v, t]);
  return null == v ? null : (0, r.jsx)(o.u, {
    forceOpen: S,
    text: _,
    position: "bottom",
    children: (0, r.jsx)(m.ZP.Icon, {
      icon: s.b7C,
      onClick: P,
      tooltip: y.intl.string(y.t.rpc2qv),
      tooltipDisabled: null != j
    })
  })
})