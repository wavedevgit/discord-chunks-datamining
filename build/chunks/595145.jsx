/** Chunk was on 11776 **/
/** chunk id: 595145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ee
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk126663 = require("./126663.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk666520 = require("./666520.js"),
  Chunk727637 = require("./727637.js"),
  Chunk616780 = require("./616780.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk313201 = require("./313201.js"),
  Chunk368326 = require("./368326.js"),
  Chunk429467 = require("./429467.js"),
  Chunk320582 = require("./320582.js"),
  Chunk246016 = require("./246016.js"),
  Chunk680295 = require("./680295.js"),
  Chunk189156 = require("./189156.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk246946 = require("./246946.js"),
  Chunk585483 = require("./585483.js"),
  Chunk5192 = require("./5192.js"),
  Chunk111361 = require("./111361.js"),
  Chunk785717 = require("./785717.js"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk771362 = require("./771362.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk113557 = require("./113557.jsx"),
  Chunk648052 = require("./648052.js"),
  Chunk867176 = require("./867176.js"),
  Chunk280885 = require("./280885.jsx"),
  Chunk537006 = require("./537006.jsx"),
  Chunk681837 = require("./681837.js"),
  Chunk78806 = require("./78806.jsx"),
  Chunk91433 = require("./91433.jsx"),
  Chunk451834 = require("./451834.jsx"),
  Chunk900927 = require("./900927.js"),
  Chunk944043 = require("./944043.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk179828 = require("./179828.jsx"),
  Chunk993160 = require("./993160.js"),
  Chunk574887 = require("./574887.jsx"),
  Chunk693408 = require("./693408.js"),
  Chunk661462 = require("./661462.js"),
  Chunk768111 = require("./768111.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk517603 = require("./517603.js");

function ee(e) {
  var t;
  let {
    user: n,
    currentUser: ee,
    guildId: et,
    channelId: en,
    messageId: er,
    roleId: el,
    sessionId: ei,
    initialSection: eo,
    initialSubsection: ea,
    transitionState: ec,
    customStatusPrompt: es,
    openedAt: ed,
    onClose: eu,
    showGuildProfile: ef = true,
    sourceAnalyticsLocations: em = [],
    disableActionsForPreview: ep = false
  } = e, {
    analyticsLocations: eg
  } = (0, f.ZP)([...em, u.Z.USER_PROFILE_MODAL_V2]), eb = (0, P.ZB)({
    layout: "MODAL_V2",
    userId: n.id,
    sourceSessionId: ei,
    guildId: et,
    channelId: en,
    messageId: er,
    roleId: el,
    showGuildProfile: ef
  }), ej = l.useRef(null), eh = (0, s.Z)(ej), [ex, ey] = l.useState(false), ev = (0, E.$m)(), eO = (0, a.q_F)({
    opacity: +(null != ev.interactionType),
    config: {
      duration: 150
    }
  }), e_ = l.useMemo(() => null != et ? {
    [et]: [n.id]
  } : {}, [et, n.id]);
  (0, d.$)(e_);
  let eI = (0, T.ZP)(n.id, ef ? et : true),
    eP = _.ZP.useName(null == eI ? true : eI.guildId, en, n),
    {
      relationshipType: eZ,
      originApplicationId: eT
    } = (0, o.cj)([y.Z], () => ({
      relationshipType: y.Z.getRelationshipType(n.id),
      originApplicationId: y.Z.getOriginApplicationId(n.id)
    })),
    eN = (0, o.e7)([v.Z], () => v.Z.hidePersonalInformation),
    eE = null == eI ? true : eI.getBannerURL({
      canAnimate: false,
      size: 1024
    }),
    eS = (0, p.p)({
      location: "UserProfileModalV2"
    }),
    eA = l.useMemo(() => null != es ? es : (0, g.Z)(), [es]),
    ew = (0, J.Z)({
      user: n,
      currentUser: ee
    }),
    eC = (0, j.Y)({
      userId: n.id
    }),
    eL = (0, b.vh)(n.id),
    ek = (0, N.Z)(n.id),
    eD = (0, m.Dt)(),
    eG = Q.intl.format(Q.t.KRe1Fh, {
      name: eP
    });
  return l.useEffect(() => {
    let e = () => {
      ey(true), setTimeout(() => {
        ey(false)
      }, 1e3)
    };
    return O.S.subscribe(q.CkL.SHAKE_PROFILE_MODAL, e), () => {
      O.S.unsubscribe(q.CkL.SHAKE_PROFILE_MODAL, e)
    }
  }, []), <f.Gt value={eg}><P.Mt value={eb} openedAt={ed} fetchStartedAt={null == eI ? true : eI.fetchStartedAt} fetchEndedAt={null == eI ? true : eI.fetchEndedAt} isLoaded={null == eI ? true : eI.isLoaded}><E.NJ value={ev}><a.UkV isShaking={ex} intensity={1.4}><a.Y0X data-migration-pending={true} hideShadow={true} className={$.root} transitionState={ec} aria-labelledby={eD} parentComponent={"UserProfileModalV2"}>{ep ? <div className={$.previewBar}>{<a.X6q id={eD} variant={"heading-sm/normal"} color={"text-primary"}>{<a.nn4>{"".concat(Q.intl.string(Q.t.apViam), ": ").concat(eG)}</a.nn4>}{<span aria-hidden={true}>{Q.intl.string(Q.t.apViam)}</span>}</a.X6q>}{<a.zxk size={"sm"} variant={"secondary"} text={Q.intl.string(Q.t.ojM1xM)} onClick={eu} aria-label={Q.intl.string(Q.t.cpT0Cg)} />}</div> : <a.nn4><a.H id={eD}>{eG}</a.H></a.nn4>}{<a.y5t><U.Z className={ep ? $.disabled : true} user={n} displayProfile={eI} themeType={X.lY.MODAL_V2}>{null != eE && <div className={$.backgroundImage} style={{
                    backgroundImage: "url(".concat(eE, ")")
                  }} />}{null != ev.interactionType && <i.animated.div style={eO} className={$.backdrop} />}{<div className={$.profile} ref={(null == eI ? true : eI.profileEffectId) != null ? ej : true}>{<div className={$.profileHeader}>{<w.Z user={n} displayProfile={eI} themeType={X.lY.MODAL_V2} />}{<R.Z userId={n.id} onClose={eu} className={$.toast} />}{<S.Z location={"UserProfileModalV2"} user={n} displayProfile={eI} guildId={et} channelId={en} themeType={X.lY.MODAL_V2} />}{<V.Z location={"UserProfileModalV2"} user={n} guildId={et} channelId={en} themeType={X.lY.MODAL_V2} hasEntered={ec === a.Dvm.ENTERED} prompt={eS && n.id === ee.id ? eA : null} disableToolbar={ep} />}</div>}{<a.Ttm fade={true} className={$.profileBody}>{<F.Z user={n} onClose={eu} nickname={_.ZP.useName(null == eI ? true : eI.guildId, en, n)} nicknameIcons={(0, r.jsx)(k.Z, {
                        size: "sm",
                        userId: n.id
                      })} nicknameVariant={"heading-xl/semibold"} pronouns={null == eI ? true : eI.pronouns} tags={(0, r.jsx)(A.Z, {
                        displayProfile: eI,
                        themeType: X.lY.MODAL_V2,
                        onClose: eu
                      })} />}{eZ === q.OGo.PENDING_INCOMING && <U.Z.Overlay className={$.profileOverlay}><G.Z user={n} applicationId={eT} guildId={null != (t = null == eI ? true : eI.guildId) ? t : true} channelId={en} className={$.profileBanner} /></U.Z.Overlay>}{eL.map(e => {
                      var t;
                      let {
                        applicationId: l
                      } = e;
                      return <U.Z.Overlay className={$.profileOverlay}><G.Z user={n} guildId={null != (t = null == eI ? true : eI.guildId) ? t : true} channelId={en} isGameRelationship={true} applicationId={l} className={$.profileBanner} /></U.Z.Overlay>
                    })}{n.isProvisional && <U.Z.Overlay className={$.profileOverlay}><z.Z heading={Q.intl.string(Q.t.Iyka0d)} headingVariant={"text-md/semibold"} headingIcon={(0, r.jsx)(a.Mgn, {
                          size: "xs",
                          color: "currentColor"
                        })} className={$.profileBanner}><x.n userId={n.id} variant={"text-sm/normal"} /></z.Z></U.Z.Overlay>}{n.id === ee.id && <L.Z isPremiumUser={(0, I.I5)(ee)} onInteraction={eu} />}{<B.Z user={n} className={$.profileBanner} />}{<div className={$.profileButtons}><W.Z user={n} currentUser={ee} guildId={et} channelId={en} displayProfile={eI} relationshipType={eZ} onClose={eu} /></div>}{(null == eI ? true : eI.bio) != null && (null == eI ? true : eI.bio) !== "" && !eN && <C.Z userBio={eI.bio} setLineClamp={false} />}{eC.length > 0 && <z.Z heading={Q.intl.string(Q.t["Uv/eT0"])}><D.Z applicationIds={eC} /></z.Z>}{<z.Z heading={Q.intl.string(Q.t.a6XYDw)}><M.Z userId={n.id} guildId={null == eI ? true : eI.guildId} tooltipDelay={X.vB} /></z.Z>}{(null == eI ? true : eI.guildId) != null && <Y.Z user={n} currentUser={ee} guildId={eI.guildId} className={$.profileRolesSection} headingVariant={"text-xs/medium"} headingColor={"currentColor"} scrollIntoView={ea === X.Tb.ROLES} />}{ek.length > 0 && <z.Z heading={Q.intl.string(Q.t["3fe7U1"])} scrollIntoView={ea === X.Tb.CONNECTIONS}><H.Z connections={ek} userId={n.id} className={$.profileAppConnections} /></z.Z>}{<z.Z heading={Q.intl.string(Q.t["mQKv+v"])} scrollIntoView={ea === X.Tb.NOTE}><c.Z userId={n.id} className={$.profileNote} autoFocus={ea === X.Tb.NOTE} onUpdate={() => (0, Z.pQ)(function(e) {
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
                        }({
                          action: "SET_NOTE"
                        }, eb))} /></z.Z>}</a.Ttm>}{(null == eI ? true : eI.profileEffectId) != null && <h.Z profileEffectId={null == eI ? true : eI.profileEffectId} isHovering={eh} />}</div>}{<K.Z user={n} currentUser={ee} displayProfile={eI} guildId={et} channelId={en} items={ew} initialSection={eo} initialSubsection={ea} onClose={eu} />}</U.Z></a.y5t>}</a.Y0X></a.UkV></E.NJ></P.Mt></f.Gt>
}