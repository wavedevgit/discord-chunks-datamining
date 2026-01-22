/** Chunk was on 97492 **/
/** chunk id: 467480, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk192308 = require("./192308.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk544231 = require("./544231.js"),
  Chunk338510 = require("./338510.js"),
  Chunk151119 = require("./151119.js"),
  Chunk278941 = require("./278941.js"),
  Chunk665909 = require("./665909.js"),
  Chunk186111 = require("./186111.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk327337 = require("./327337.js"),
  Chunk985018 = require("./985018.jsx");
let y = Chunk64700.memo(function(e) {
  let {
    channel: t
  } = e, y = (0, d.u)(t.id), O = (0, f.S)(t.id), j = (0, p.e)(t.id), v = (0, a.useHasAnyModalOpen)(), x = (0, i.bG)([b.A], () => b.A.hasLayers()), E = l.useCallback(() => O ? A.intl.string(A.t["16QyDv"]) : null != j ? A.intl.string(A.t.kCN9i0) : null, [O, j]), _ = l.useMemo(() => (O || null != j) && !v && !x, [O, j, v, x]), [C, S] = l.useState(E());
  l.useEffect(() => {
    null != j && null != y && (o.ORC.announce(A.intl.string(A.t.acsXuG)), setTimeout(() => {
      (0, u.xi)(t.id, [j.id])
    }, 5e3), (0, h.QF)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: j.id,
      warningType: j.type,
      isNudgeWarning: null != j,
      viewName: h.gN.SAFETY_TOOLS_NUDGE_TOOLTIP
    })), O && (o.ORC.announce(A.intl.string(A.t["1dxCqG"])), setTimeout(() => {
      (0, u.bg)(t.id)
    }, 5e3))
  }, [t, j, y, O]), (0, c.Ay)(() => {
    null != y && (0, h.QF)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: y.id,
      warningType: y.type,
      isNudgeWarning: null != j,
      viewName: h.gN.SAFETY_TOOLS_BUTTON
    })
  }), l.useEffect(() => {
    let e = E();
    null != e && S(e)
  }, [O, j, E]);
  let I = l.useCallback(() => {
    null != j && (0, u.xi)(t.id, [j.id]), null != y && ((0, o.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("45033"), n.e("46717"), n.e("13693")]).then(n.bind(n, 788099));
      return n => {
        let {
          onClose: l,
          transitionState: i
        } = n;
        return (0, r.jsx)(e, {
          otherUserId: t.getRecipientId(),
          channelId: t.id,
          warningId: y.id,
          warningType: y.type,
          onClose: l,
          transitionState: i
        })
      }
    }, {
      modalKey: m.V
    }), (0, h._$)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: y.id,
      warningType: y.type,
      cta: h.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
      isNudgeWarning: null != j
    }))
  }, [j, y, t]);
  return null == y ? null : (0, r.jsx)(s.m_, {
    forceOpen: _,
    text: C,
    position: "bottom",
    children: (0, r.jsx)(g.Ay.Icon, {
      icon: o.lmn,
      onClick: I,
      tooltip: A.intl.string(A.t.rpc2qv),
      tooltipDisabled: null != j
    })
  })
})