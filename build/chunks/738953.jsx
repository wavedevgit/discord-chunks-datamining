/** Chunk was on web.js **/
/** chunk id: 738953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => z
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk126663 = require("./126663.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk980591 = require("./980591.js"),
  Chunk616780 = require("./616780.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk313201 = require("./313201.js"),
  Chunk359588 = require("./359588.js"),
  Chunk368326 = require("./368326.js"),
  Chunk429467 = require("./429467.js"),
  Chunk526031 = require("./526031.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk680295 = require("./680295.jsx"),
  Chunk622562 = require("./622562.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.js"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk113557 = require("./113557.jsx"),
  Chunk867176 = require("./867176.js"),
  Chunk451834 = require("./451834.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk544989 = require("./544989.jsx"),
  Chunk481932 = require("./481932.jsx"),
  Chunk195387 = require("./195387.jsx"),
  Chunk664794 = require("./664794.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk978395 = require("./978395.js"),
  Chunk161572 = require("./161572.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk200669 = require("./200669.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let K = 200;

function z(e) {
  let {
    user: t,
    currentUser: n,
    guildId: V,
    channelId: Y,
    messageId: z,
    roleId: q,
    openedAt: X,
    closePopout: Q,
    setPopoutRef: J,
    disableUserProfileLink: $ = __OVERLAY__,
    newAnalyticsLocations: ee = [],
    appContext: et,
    disableAutoFocus: en = false
  } = e, {
    analyticsLocations: er
  } = (0, _.ZP)([...ee, f.Z.USER_PROFILE_POPOUT]), ei = (0, T.ZB)({
    layout: "POPOUT",
    userId: t.id,
    guildId: V,
    channelId: Y,
    messageId: z,
    roleId: q
  }), eo = (0, a.e7)([v.Z], () => null != V ? v.Z.getGuild(V) : null), ea = i.useMemo(() => null != V ? {
    [V]: [t.id]
  } : {}, [V, t.id]);
  (0, d.$)(ea);
  let es = i.useRef(null),
    el = (0, A.ZP)(t.id, V),
    ec = (0, c.Z)(es),
    eu = (0, N.$m)(),
    ed = (0, l.q_F)({
      opacity: +(null != eu.interactionType),
      config: {
        duration: 150
      }
    });
  i.useEffect(() => {
    null == J || J(null == es ? true : es.current)
  }, [es, J]);
  let ef = i.useRef(null),
    [e_, ep] = i.useState(String(Date.now())),
    [eh, em] = i.useState(false);
  (0, u.Z)(() => {
    em(true)
  }, K), (0, O.fu)({
    targetElementRef: ef,
    onGetElementDimensionsAndBoundingRect: e => {
      let {
        hasElementPositionChanged: t
      } = e;
      t && ep(String(Date.now()))
    }
  });
  let eg = (0, h.Z)({
      location: "UserProfilePopout"
    }),
    eE = t.id === n.id,
    [eb, ey] = (0, b.US)(eg && eE ? [s.z.CUSTOM_STATUS_PROMPTS_COACHMARK] : []),
    eO = eb === s.z.CUSTOM_STATUS_PROMPTS_COACHMARK,
    ev = (0, m.p)({
      location: "UserProfilePopout"
    }),
    eI = i.useMemo(() => (0, g.Z)(), []),
    eT = e => {
      null == Q || Q(), (0, C.openUserProfileModal)(W(H({
        sourceAnalyticsLocations: er,
        hideRestrictedProfile: true,
        customStatusPrompt: eI
      }, ei, e), {
        appContext: et
      }))
    },
    eS = () => $ ? null : <l.sNh id={"view-profile"} label={Z.intl.string(Z.t["+Xp3ho"])} action={() => {
        eT(), (0, S.pQ)(H({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: er
        }, ei))
      }} />,
    eA = en ? "div" : l.VqE,
    eN = (0, p.Dt)(),
    eC = I.ZP.useName(null == eo ? true : eo.id, Y, t);
  return <_.Gt value={er}><T.Mt value={ei} openedAt={X} fetchStartedAt={null == el ? true : el.fetchStartedAt} fetchEndedAt={null == el ? true : el.fetchEndedAt} isLoaded={null == el ? true : el.isLoaded}><N.NJ value={eu}><eA ref={es} aria-labelledby={eN}>{<l.nn4><l.H id={eN}>{Z.intl.format(Z.t.KRe1Fh, {
                name: eC
              })}</l.H></l.nn4>}{<D.Z user={t} displayProfile={el} themeType={B.lY.POPOUT}>{null != eu.interactionType && <o.animated.div style={ed} className={F.backdrop} />}{<L.Z>{<M.Z shouldShowTooltip={null === eu.interactionType} user={t} guildId={V} channelId={Y} onClose={Q} appContext={et} />}{<x.Z shouldShowTooltip={null === eu.interactionType} themeType={B.lY.POPOUT} user={t} />}{!eE && <k.Z type={"banner"} user={t} guildId={V} viewProfileItem={eS()} appContext={et} />}</L.Z>}{<div className={F.header}>{<P.Z user={t} displayProfile={el} guildId={V} themeType={B.lY.POPOUT} />}{<w.Z userId={t.id} className={F.toast} onClose={Q} />}{<R.Z location={"UserProfilePopout"} user={t} displayProfile={el} guildId={V} channelId={Y} themeType={B.lY.POPOUT} onOpenProfile={$ ? true : eT} />}{eO && eh ? <E.Z positionKey={e_} markAsDismissed={ey} targetElementRef={ef} onTryFeature={Q}>{() => (0, r.jsx)(j.Z, {
                  ref: ef,
                  location: "UserProfilePopout",
                  user: t,
                  guildId: V,
                  channelId: Y,
                  themeType: B.lY.POPOUT,
                  onCloseProfile: Q,
                  prompt: eI
                })}</E.Z> : <j.Z ref={eO ? ef : true} location={"UserProfilePopout"} user={t} guildId={V} channelId={Y} themeType={B.lY.POPOUT} onCloseProfile={Q} prompt={ev ? eI : null} />}</div>}{<U.Z user={t} currentUser={n} displayProfile={el} guild={eo} isHovering={null == eu.interactionType && ec} onOpenProfile={$ ? true : eT} channelId={Y} onClose={Q} />}{<G.Z user={t} guildId={V} channelId={Y} onClose={Q} appContext={et} disableAutoFocus={en} />}{(null == el ? true : el.profileEffectId) != null && <y.Z profileEffectId={null == el ? true : el.profileEffectId} isHovering={ec} />}</D.Z>}</eA></N.NJ></T.Mt></_.Gt>
}