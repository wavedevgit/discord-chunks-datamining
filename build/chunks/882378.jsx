/** Chunk was on 49152 **/
/** chunk id: 882378, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk426195 = require("./426195.js");
let x = Chunk73800.memo(function(e) {
  let {
    channel: t
  } = e, x = (0, u.h)(t.id), _ = (0, d.o)(t.id), j = (0, h.M)(t.id), O = (0, a.f9)(), v = (0, l.e7)([f.Z], () => f.Z.hasLayers()), C = i.useCallback(() => _ ? b.intl.string(b.t["16QyDg"]) : null != j ? b.intl.string(b.t.kCN9i4) : null, [_, j]), E = i.useMemo(() => (_ || null != j) && !O && !v, [_, j, O, v]), [S, I] = i.useState(C());
  i.useEffect(() => {
    null != j && null != x && (s.uvj.announce(b.intl.string(b.t.acsXuL)), setTimeout(() => {
      (0, c.T)(t.id, [j.id])
    }, 5e3), (0, p.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: j.id,
      warningType: j.type,
      isNudgeWarning: null != j,
      viewName: p.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
    })), _ && (s.uvj.announce(b.intl.string(b.t["1dxCqK"])), setTimeout(() => {
      (0, c.Ot)(t.id)
    }, 5e3))
  }, [t, j, x, _]), (0, o.ZP)(() => {
    null != x && (0, p.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: x.id,
      warningType: x.type,
      isNudgeWarning: null != j,
      viewName: p.pb.SAFETY_TOOLS_BUTTON
    })
  }), i.useEffect(() => {
    let e = C();
    null != e && I(e)
  }, [_, j, C]);
  let Z = i.useCallback(() => {
    null != j && (0, c.T)(t.id, [j.id]), null != x && ((0, s.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("49508"), n.e("9738"), n.e("71745")]).then(n.bind(n, 611446));
      return n => {
        let {
          onClose: i,
          transitionState: l
        } = n;
        return <e otherUserId={t.getRecipientId()} channelId={t.id} warningId={x.id} warningType={x.type} onClose={i} transitionState={l} />
      }
    }, {
      modalKey: m.X_
    }), (0, p.qc)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: x.id,
      warningType: x.type,
      cta: p.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
      isNudgeWarning: null != j
    }))
  }, [j, x, t]);
  return null == x ? null : <s.ua7 forceOpen={E} text={S} color={s.FGA.BRAND} position={"bottom"} tooltipClassName={y.tooltip} tooltipContentClassName={y.tooltipContent}>{() => (0, r.jsx)(g.ZP.Icon, {
      icon: s.b7C,
      onClick: Z,
      tooltip: b.intl.string(b.t.rpc2qq),
      tooltipDisabled: null != j
    })}</s.ua7>
})