/** Chunk was on 49152 **/
/** chunk id: 983559, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk126663 = require("./126663.js"),
  Chunk597312 = require("./597312.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk680295 = require("./680295.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk113557 = require("./113557.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk451834 = require("./451834.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk952124 = require("./952124.jsx"),
  Chunk544989 = require("./544989.jsx"),
  Chunk481932 = require("./481932.jsx"),
  Chunk664794 = require("./664794.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk277117 = require("./277117.jsx"),
  Chunk52639 = require("./52639.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk638414 = require("./638414.js");

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function w(e) {
  let {
    user: t,
    currentUser: n,
    channel: f
  } = e, T = __OVERLAY__, w = (0, g.ZP)(t.id), D = (0, c.ZP)(), k = i.useRef(Date.now()), {
    analyticsLocations: L
  } = (0, d.ZP)(u.Z.USER_PROFILE_SIDEBAR), M = (0, p.ZB)({
    layout: "SIDEBAR",
    userId: t.id,
    channelId: f.id
  }), U = i.useRef(null), F = (0, o.Z)(U), H = (0, m.$m)(), G = (0, s.q_F)({
    opacity: +(null != H.interactionType),
    config: {
      duration: 150
    }
  }), B = e => {
    (0, b.openUserProfileModal)(R({
      sourceAnalyticsLocations: L,
      hideRestrictedProfile: true
    }, M, e))
  };
  return <d.Gt value={L}><p.Mt value={M} openedAt={k.current} fetchStartedAt={null == w ? true : w.fetchStartedAt} fetchEndedAt={null == w ? true : w.fetchEndedAt} isLoaded={null == w ? true : w.isLoaded}><m.NJ value={H}><j.Z ref={U} user={t} displayProfile={w} themeType={P.lY.SIDEBAR} themeOverride={D}>{null != H.interactionType && <l.animated.div style={G} className={N.backdrop} />}{<a.u2>{<v.Z>{<C.Z user={t} themeType={P.lY.SIDEBAR} shouldShowTooltip={null === H.interactionType} />}{t.bot ? <O.Z user={t} /> : <E.Z type={"banner"} user={t} />}</v.Z>}{<div className={N.header}>{<x.Z user={t} displayProfile={w} themeType={P.lY.SIDEBAR} animateOnHover={!F} className={N.banner} />}{<_.Z userId={t.id} className={N.toast} />}{<y.Z location={"UserProfileSidebar"} user={t} displayProfile={w} channelId={f.id} themeType={P.lY.SIDEBAR} onOpenProfile={T ? true : B} />}{<S.Z location={"UserProfileSidebar"} user={t} channelId={f.id} themeType={P.lY.SIDEBAR} disableToolbar={t.bot} />}</div>}{<I.Z user={t} currentUser={n} displayProfile={w} channel={f} isHovering={null == H.interactionType && F} onOpenProfile={T ? true : B} />}{<Z.Z user={t} channelId={f.id} />}</a.u2>}{!T && <A handleOpenProfile={B} analyticsLocations={L} context={M} />}{(null == w ? true : w.profileEffectId) != null && <h.Z profileEffectId={null == w ? true : w.profileEffectId} isHovering={F} urlQueryString={"dmView"} />}</j.Z></m.NJ></p.Mt></d.Gt>
}
let A = e => {
  let {
    handleOpenProfile: t,
    analyticsLocations: n,
    context: l
  } = e, [a, o] = i.useState("interactive-normal");
  return <div className={N.footer}><s.P3F onMouseEnter={() => o("interactive-hover")} onMouseLeave={() => o("interactive-normal")} onClick={() => {
        t(), (0, f.pQ)(R({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: n
        }, l))
      }} className={N.footerButton}><s.Text color={a} variant={"text-sm/normal"}>{T.intl.string(T.t["+Xp3ho"])}</s.Text></s.P3F></div>
}