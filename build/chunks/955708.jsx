/** Chunk was on 5749 **/
/** chunk id: 955708, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => f,
  x: () => m
}), require("./388685.js");
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk378298 = require("./378298.js"),
  Chunk473092 = require("./473092.js"),
  Chunk684471 = require("./684471.jsx"),
  Chunk745982 = require("./745982.jsx"),
  Chunk463439 = require("./463439.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk257025 = require("./257025.js");

function h(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), i.forEach(function(e) {
      var i;
      i = n[e], e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = i
    })
  }
  return t
}

function g(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      n.push.apply(n, i)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}
var m = ((i = {})[i.INTRO = 0] = "INTRO", i[i.SAFETY_TIPS = 1] = "SAFETY_TIPS", i[i.TAKE_ACTION = 2] = "TAKE_ACTION", i);
let f = t => {
  let {
    warningId: e,
    warningType: n,
    senderId: i,
    modalProps: m,
    channelId: f
  } = t, [_, b] = s.useState(0), O = s.useMemo(() => ({
    channelId: f,
    senderId: i,
    warningId: e,
    warningType: n,
    isNudgeWarning: false
  }), [f, i, e, n]);
  s.useEffect(() => {
    (0, c.KQ)(g(h({}, O), {
      viewName: c.pb.SAFETY_TAKEOVER_MODAL
    }))
  }, [O]);
  let v = s.useCallback(t => {
      (0, c.qc)(g(h({}, O), {
        cta: t
      }))
    }, [O]),
    [j, T] = s.useState(false);

  function E(t) {
    b(t)
  }
  return <a.Y0X data-migration-pending={true} transitionState={m.transitionState} parentComponent={"InappropriateConversationModal"}>{<div className={p.container}><a.MyZ width={440} activeSlide={_} centered={false} overflow={"visible"} contentDisplay={"flex"}>{<a.Mi4 id={0}><l.Z warningId={e} senderId={i} trackAnalyticsEvent={v} onNavigate={E} /></a.Mi4>}{<a.Mi4 id={1}><d.Z warningId={e} senderId={i} trackAnalyticsEvent={v} /></a.Mi4>}{<a.Mi4 id={2}><u.Z warningId={e} senderId={i} trackAnalyticsEvent={v} channelId={f} hasReported={j} onReport={function() {
              T(true)
            }} /></a.Mi4>}</a.MyZ></div>}{<a.mzw data-migration-pending={true} className={p.footer}>{<a.Avr variant={"secondary"} size={"sm"} text={x.intl.string(x.t.cpT0Cg)} onClick={function() {
          m.onClose(), (0, o.T)(f, [e]), v(c.NM.USER_TAKEOVER_MODAL_DISMISS)
        }} textVariant={"text-sm/normal"} />}{0 !== _ && <a.Avr variant={"secondary"} size={"sm"} text={x.intl.string(x.t["13/7kZ"])} textVariant={"text-sm/normal"} onClick={() => E(0)} />}</a.mzw>}</a.Y0X>
}