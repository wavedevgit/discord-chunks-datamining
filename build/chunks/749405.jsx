/** Chunk was on 1272 **/
/** chunk id: 749405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk359110 = require("./359110.js"),
  Chunk6025 = require("./6025.js"),
  Chunk433355 = require("./433355.js"),
  Chunk26373 = require("./26373.js"),
  Chunk486622 = require("./486622.js"),
  Chunk376191 = require("./376191.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk23704 = require("./23704.js");

function h(e) {
  let {
    active: t,
    user: n,
    channel: h
  } = e, g = (0, c.K)(), m = i.useCallback(() => {
    (0, l.showToast)((0, l.createToast)(p.intl.string(p.t.EDYbS0), l.ToastType.FAILURE))
  }, []), b = i.useCallback(() => {
    o.Z.closeChannelSidebar(s.uZ)
  }, []), _ = i.useCallback(() => {
    o.Z.closeChannelSidebar(s.uZ), g && (0, a.Kh)(h.id)
  }, [h.id, g]), {
    acceptMessageRequest: O,
    rejectMessageRequest: E,
    isAcceptLoading: y,
    isRejectLoading: v,
    isUserProfileLoading: I,
    isOptimisticAccepted: C,
    isOptimisticRejected: S
  } = (0, u.m)({
    user: n,
    onAcceptSuccess: _,
    onRejectSuccess: b,
    onError: m
  }), N = y || v || I || C || S;
  return <div className={f.container}>{<d.Z channel={h} otherUser={n} active={t} />}{<div className={f.actions}>{<div data-button-hoisted-classname-wrapper={true} className={f.button}><l.zxk variant={"secondary"} size={"sm"} text={p.intl.string(p.t.B2nygY)} onClick={e => {
            e.stopPropagation(), E(h.id)
          }} disabled={N} loading={v || S} /></div>}{<div data-button-hoisted-classname-wrapper={true} className={f.button}><l.zxk variant={"primary"} size={"sm"} text={p.intl.string(p.t.Kz8Pws)} onClick={e => {
            e.stopPropagation(), O(h.id)
          }} disabled={N} loading={y || I || C} /></div>}</div>}</div>
}