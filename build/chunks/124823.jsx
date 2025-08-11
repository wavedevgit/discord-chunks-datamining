/** Chunk was on 49152 **/
/** chunk id: 124823, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk597312 = require("./597312.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk580552 = require("./580552.js"),
  Chunk680295 = require("./680295.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.js"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk892001 = require("./892001.js"),
  Chunk899007 = require("./899007.js"),
  Chunk648052 = require("./648052.js"),
  Chunk867176 = require("./867176.js"),
  Chunk280885 = require("./280885.js"),
  Chunk900927 = require("./900927.js"),
  Chunk678738 = require("./678738.js"),
  Chunk502762 = require("./502762.js"),
  Chunk530 = require("./530.jsx"),
  Chunk679332 = require("./679332.js"),
  Chunk544989 = require("./544989.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.js"),
  Chunk638414 = require("./638414.js"),
  Chunk283189 = require("./283189.js");

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
    channel: n
  } = e, w = __OVERLAY__ || !(0, d.Z)(t.id), A = (0, m.ZP)(t.id), D = (0, o.ZP)(), k = i.useRef(Date.now()), {
    analyticsLocations: L
  } = (0, u.ZP)(c.Z.USER_PROFILE_SIDEBAR), M = (0, f.ZB)({
    layout: "SIDEBAR",
    userId: t.id,
    channelId: n.id
  }), U = i.useRef(null), F = (0, s.Z)(U), H = e => {
    (0, b.openUserProfileModal)(R({
      sourceAnalyticsLocations: L,
      hideRestrictedProfile: true
    }, M, e))
  };
  return <u.Gt value={L}><f.Mt value={M} openedAt={k.current} fetchStartedAt={null == A ? true : A.fetchStartedAt} fetchEndedAt={null == A ? true : A.fetchEndedAt} isLoaded={null == A ? true : A.isLoaded}><C.Z ref={U} user={t} displayProfile={A} themeType={Z.lY.SIDEBAR} themeOverride={D}>{<l.u2>{<I.Z><S.Z user={t} /></I.Z>}{<div className={T.header}>{<_.Z user={t} displayProfile={A} themeType={Z.lY.SIDEBAR} animateOnHover={!F} />}{<y.Z user={t} displayProfile={A} channelId={n.id} themeType={Z.lY.SIDEBAR} onOpenProfile={w ? true : H} />}</div>}{<div className={N.body}>{<E.Z user={t} nickname={p.ZP.getName(null, n.id, t)} pronouns={null == A ? true : A.pronouns} onOpenProfile={w ? true : H} tags={(0, r.jsx)(x.Z, {
                displayProfile: A,
                themeType: Z.lY.SIDEBAR
              })} />}{<C.Z.Overlay className={N.overlay}>{<v.Z heading={P.intl.string(P.t["61W33d"])} headingColor={"header-primary"}><j.Z userBio={null == A ? true : A.bio} userId={t.id} animateOnHover={true} isHovering={F} /></v.Z>}{<v.Z heading={P.intl.string(P.t["A//N4u"])} headingColor={"header-primary"}><O.Z userId={t.id} /></v.Z>}</C.Z.Overlay>}</div>}</l.u2>}{!w && <div className={T.footer}><a.P3F onClick={() => {
              H(), (0, g.pQ)(R({
                action: "PRESS_VIEW_PROFILE",
                analyticsLocations: L
              }, M))
            }} className={T.footerButton}>{P.intl.string(P.t["+Xp3ho"])}</a.P3F></div>}{(null == A ? true : A.profileEffectId) != null && <h.Z profileEffectId={null == A ? true : A.profileEffectId} isHovering={F} />}</C.Z></f.Mt></u.Gt>
}