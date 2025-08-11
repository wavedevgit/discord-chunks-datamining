/** Chunk was on web.js **/
/** chunk id: 103113, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk580552 = require("./580552.js"),
  Chunk313201 = require("./313201.js"),
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
  Chunk502762 = require("./502762.js"),
  Chunk530 = require("./530.jsx"),
  Chunk679332 = require("./679332.js"),
  Chunk544989 = require("./544989.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.js"),
  Chunk200669 = require("./200669.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function P(e) {
  let {
    user: t,
    guildId: n,
    channelId: C,
    messageId: P,
    roleId: w,
    openedAt: D,
    setPopoutRef: L,
    closePopout: x,
    disableUserProfileLink: M = __OVERLAY__,
    newAnalyticsLocations: k = [],
    disableAutoFocus: j = false
  } = e, U = (0, h.ZP)(t.id, n), {
    analyticsLocations: G
  } = (0, l.ZP)([...k, s.Z.USER_PROFILE_POPOUT]), B = (0, _.ZB)({
    layout: "POPOUT",
    userId: t.id,
    guildId: n,
    channelId: C,
    messageId: P,
    roleId: w
  }), Z = i.useRef(null), F = (0, a.Z)(Z);
  i.useEffect(() => {
    null == L || L(null == Z ? true : Z.current)
  }, [Z, L]);
  let V = () => {
      null == x || x(), (0, m.openUserProfileModal)(R({
        sourceAnalyticsLocations: G,
        hideRestrictedProfile: true
      }, B))
    },
    H = !M && (0, c.Z)(t.id),
    Y = () => H ? <o.sNh id={"view-profile"} label={A.intl.string(A.t["+Xp3ho"])} action={() => {
        V(), (0, p.pQ)(R({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: G
        }, B))
      }} /> : null,
    W = j ? "div" : o.VqE,
    K = (0, u.Dt)(),
    z = f.ZP.useName(n, C, t);
  return <l.Gt value={G}><_.Mt value={B} openedAt={D} fetchStartedAt={null == U ? true : U.fetchStartedAt} fetchEndedAt={null == U ? true : U.fetchEndedAt} isLoaded={null == U ? true : U.isLoaded}><W ref={Z} aria-labelledby={K}>{<o.nn4><o.H id={K}>{A.intl.format(A.t.KRe1Fh, {
              name: z
            })}</o.H></o.nn4>}{<O.Z user={t} displayProfile={U} themeType={S.lY.POPOUT}>{<T.Z><I.Z user={t} viewProfileItem={Y()} /></T.Z>}{<div className={N.header}>{<b.Z user={t} displayProfile={U} guildId={n} themeType={S.lY.POPOUT} />}{<g.Z user={t} displayProfile={U} guildId={n} channelId={C} themeType={S.lY.POPOUT} onOpenProfile={H ? V : true} />}</div>}{<o.Ttm fade={true} className={N.body}>{<v.Z user={t} nickname={f.ZP.getName(n, C, t)} onOpenProfile={H ? V : true} tags={(0, r.jsx)(E.Z, {
                displayProfile: U,
                themeType: S.lY.POPOUT,
                onClose: x
              })} />}{<y.Z userId={t.id} userBio={null == U ? true : U.bio} setLineClamp={false} textColor={"header-primary"} />}</o.Ttm>}{<div className={N.footer} />}</O.Z>}{(null == U ? true : U.profileEffectId) != null && <d.Z profileEffectId={null == U ? true : U.profileEffectId} isHovering={F} />}</W></_.Mt></l.Gt>
}