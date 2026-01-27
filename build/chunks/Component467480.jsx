/** Chunk was on 77870 **/
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
  } = e, y = (0, d.u)(t.id), _ = (0, p.S)(t.id), O = (0, h.e)(t.id), j = (0, s.useHasAnyModalOpen)(), v = (0, i.bG)([g.A], () => g.A.hasLayers()), x = l.useCallback(() => _ ? A.intl.string(A.t["16QyDv"]) : null != O ? A.intl.string(A.t.kCN9i0) : null, [_, O]), E = l.useMemo(() => (_ || null != O) && !j && !v, [_, O, j, v]), [C, S] = l.useState(x());
  l.useEffect(() => {
    null != O && null != y && (o.ORC.announce(A.intl.string(A.t.acsXuG)), setTimeout(() => {
      (0, u.xi)(t.id, [O.id])
    }, 5e3), (0, f.QF)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: O.id,
      warningType: O.type,
      isNudgeWarning: null != O,
      viewName: f.gN.SAFETY_TOOLS_NUDGE_TOOLTIP
    })), _ && (o.ORC.announce(A.intl.string(A.t["1dxCqG"])), setTimeout(() => {
      (0, u.bg)(t.id)
    }, 5e3))
  }, [t, O, y, _]), (0, c.Ay)(() => {
    null != y && (0, f.QF)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: y.id,
      warningType: y.type,
      isNudgeWarning: null != O,
      viewName: f.gN.SAFETY_TOOLS_BUTTON
    })
  }), l.useEffect(() => {
    let e = x();
    null != e && S(e)
  }, [_, O, x]);
  let I = l.useCallback(() => {
    null != O && (0, u.xi)(t.id, [O.id]), null != y && ((0, o.mMO)(async () => {
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
      modalKey: b.V
    }), (0, f._$)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: y.id,
      warningType: y.type,
      cta: f.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
      isNudgeWarning: null != O
    }))
  }, [O, y, t]);
  return null == y ? null : (0, r.jsx)(a.m_, {
    forceOpen: E,
    text: C,
    position: "bottom",
    children: (0, r.jsx)(m.Ay.Icon, {
      icon: o.lmn,
      onClick: I,
      tooltip: A.intl.string(A.t.rpc2qv),
      tooltipDisabled: null != O
    })
  })
})