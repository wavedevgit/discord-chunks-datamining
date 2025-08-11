/** Chunk was on 32249 **/
/** chunk id: 536687, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => B
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk754700 = require("./754700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk210887 = require("./210887.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk566078 = require("./566078.js"),
  Chunk164495 = require("./164495.jsx"),
  Chunk472144 = require("./472144.jsx"),
  Chunk602667 = require("./602667.js"),
  Chunk644646 = require("./644646.js"),
  Chunk604162 = require("./604162.js"),
  Chunk747717 = require("./747717.js"),
  Chunk963123 = require("./963123.js"),
  Chunk281055 = require("./281055.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk844136 = require("./844136.js");

function L(e) {
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

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function V(e) {
  var t, n, o, a, C, x, N;
  let {
    transitionState: V,
    onClose: B,
    quest: Z,
    autoplay: F,
    videoSessionId: U,
    impressionRef: q,
    parentModalOpenStartClockTime: Y,
    sourceQuestContent: H
  } = e, Q = (0, O.il)(Z), z = (0, b.tP)(Z), G = (0, u.e7)([v.Z], () => v.Z.getState().theme), K = (0, d.wj)(G) ? k.BRd.DARK : k.BRd.LIGHT, W = (0, u.e7)([f.Z], () => f.Z.useReducedMotion), X = (0, g.aM)(), [$, J] = l.useState(Q.progressSeconds), [ee, et] = l.useState(false), {
    completedRatio: en,
    completedRatioDisplay: er
  } = (0, b.I)(Z), [el, eo] = (0, D.G6)(A.intl.string(A.t.RDE0SU), A.intl.string(A.t["+5kSoa"]), 1700), ei = null != (0, O.LM)(Z.config), [ea, es] = l.useState(false), ec = l.useRef(null), eu = (null == (t = Z.userStatus) ? true : t.claimedAt) != null ? ei ? A.intl.string(A.t.WYchdX) : A.intl.string(A.t.vTgCW1) : A.intl.string(A.t.cfY4PD), ed = l.useCallback(() => {
    (0, O.f2)(Z.id, {
      content: S.jn.VIDEO_MODAL,
      ctaContent: E.jZ.COPY_QUEST_URL,
      impressionId: X,
      sourceQuestContent: H
    }), eo()
  }, [X, Z.id, eo, H]), em = l.useCallback(() => {
    (0, O.f2)(Z.id, {
      content: S.jn.VIDEO_MODAL,
      ctaContent: E.jZ.COPY_QUEST_URL,
      impressionId: X,
      sourceQuestContent: H
    }), (0, p.showToast)((0, p.createToast)(A.intl.string(A.t["+5kSoa"]), p.ToastType.SUCCESS)), es(true), null != ec.current && clearTimeout(ec.current), ec.current = setTimeout(() => {
      es(false)
    }, 1700)
  }, [X, Z.id, H]);
  l.useEffect(() => () => {
    null != ec.current && clearTimeout(ec.current)
  }, []);
  let ep = async () => {
    if (null != B) {
      let e = _.r.build(Z.config).application.link;
      await (0, D.qP)(e) && B()
    }(0, O.nc)(Z, {
      content: S.jn.VIDEO_MODAL,
      ctaContent: E.jZ.OPEN_GAME_LINK,
      impressionId: X,
      sourceQuestContent: H
    })
  }, ef = () => {
    ((0, O.xN)(Z.config) || (0, O.Bg)(Z.config)) && B()
  }, ev = l.useMemo(() => _.r.build(Z.config).defaultRewardName, [Z]), eE = A.intl.formatToPlainString(A.t["12IWPz"], {
    rewardName: ev
  }), eg = null == (o = Z.config.taskConfigV2) || null == (n = o.tasks) ? true : n[c.X.WATCH_VIDEO];
  s()(null != eg, "VideoQuestModal: videoTask must not be null");
  let eO = (0, O.ZS)(eg),
    eb = "portrait" === eO;
  return <p.Y0X transitionState={V} size={p.CgR.DYNAMIC} className={i()(w.modalRoot, {
      [w.modalRootLandscape]: "landscape" === eO,
      [w.modalRootPortrait]: "portrait" === eO
    })} parentComponent={"Modal"}><div ref={e => {
        q.current = e
      }} className={w.modalBg}><div className={w.modalBody}><div className={w.modalContent}>{<div className={w.contentHeader}>{<p.P3F className={w.contentHeaderGameInfo} onClick={ep}>{<img alt={Z.config.messages.gameTitle} className={i()(w.contentHeaderLogotype, w.accentOnHover)} src={(0, h.fh)(Z, h.eC.LOGO_TYPE, K).url} />}{<P.Z />}{<div className={w.questHeading}>{<p.X6q variant={"heading-md/semibold"} color={"header-primary"}>{A.intl.format(A.t.EQa7oq, {
                    questName: Z.config.messages.questName
                  })}</p.X6q>}{<p.Text variant={"text-sm/medium"} color={"header-secondary"}>{Z.config.messages.gameTitle}</p.Text>}</div>}</p.P3F>}{!z && <p.ua7 position={"left"} text={eE} onTooltipShow={() => {
                et(true)
              }} onTooltipHide={() => {
                et(false)
              }}>{e => (0, r.jsx)(p.P3F, M(L({
                className: w.progressCont
              }, e), {
                children: (0, r.jsx)(y.Z, {
                  quest: Z,
                  size: 48,
                  percentComplete: en,
                  percentCompleteText: ee ? er : true,
                  percentCompleteTextVariant: "text-sm/medium",
                  children: (0, r.jsx)(T.Z, {
                    className: w.questProgressRewardTile,
                    quest: Z,
                    questContent: S.jn.VIDEO_MODAL,
                    autoplay: false,
                    location: I.dr.VIDEO_MODAL,
                    sourceQuestContent: H
                  })
                })
              }))}</p.ua7>}</div>}{<R.Z quest={Z} videoTask={eg} videoSessionId={U} parentTransitionState={V} onOptimisticProgressUpdate={J} autoplay={F} performanceClockStartTime={Y} onClose={B} sourceQuestContent={H} orientation={eO} />}{eb ? <div className={i()(w.contentFooterPortrait, w.contentFooterButtonCont)}>{<m.zx color={m.zx.Colors.PRIMARY} size={m.zx.Sizes.MEDIUM} className={w.portraitCtaBtn} onClick={ep}>{A.intl.string(A.t.nL0WvL)}</m.zx>}{<j.i className={w.portraitCtaBtn} size={m.zx.Sizes.MEDIUM} quest={Z} useReducedMotion={W} isExpanded={(null == (a = Z.userStatus) ? true : a.completedAt) != null} disabled={(null == (C = Z.userStatus) ? true : C.completedAt) == null} ctaLabel={eu} onClick={ef} questContent={S.jn.VIDEO_MODAL} sourceQuestContent={H} />}{<m.zx color={m.zx.Colors.PRIMARY} onClick={em} size={m.zx.Sizes.MEDIUM} className={i()(w.copyLinkBtn, w.footerBtn)} aria-label={A.intl.string(A.t.RDE0SU)}>{ea ? (0, r.jsx)(p.owK, {
                size: "md",
                color: p.TVs.colors.TEXT_FEEDBACK_POSITIVE
              }) : (0, r.jsx)(p.ua7, {
                text: A.intl.string(A.t.WqhZsr),
                children: e => (0, r.jsx)(p.TIy, L({
                  size: "md",
                  color: "currentColor"
                }, e))
              })}</m.zx>}</div> : <div className={w.contentFooter}>{<m.zx onClick={B} color={m.zx.Colors.PRIMARY} size={m.zx.Sizes.MEDIUM} className={w.footerBtn}>{A.intl.string(A.t.cpT0Cg)}</m.zx>}{<div className={w.contentFooterButtonCont}>{<m.zx color={m.zx.Colors.PRIMARY} onClick={ed} size={m.zx.Sizes.MEDIUM} className={i()(w.copyLinkBtn, w.footerBtn)}>{el}</m.zx>}{<j.i className={w.claimBtn} size={m.zx.Sizes.MEDIUM} quest={Z} useReducedMotion={W} isExpanded={(null == (x = Z.userStatus) ? true : x.completedAt) != null} disabled={(null == (N = Z.userStatus) ? true : N.completedAt) == null} ctaLabel={eu} onClick={ef} questContent={S.jn.VIDEO_MODAL} sourceQuestContent={H} />}</div>}</div>}</div></div></div></p.Y0X>
}

function B(e) {
  var {
    questId: t,
    overrideQuest: n,
    autoplay: l,
    openStartClockTime: o
  } = e, i = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["questId", "overrideQuest", "autoplay", "openStartClockTime"]);
  let a = (0, u.e7)([C.Z], () => C.Z.getQuest(t)),
    s = null != n ? n : a;
  return null != s ? <x.A questOrQuests={s} questContent={S.jn.VIDEO_MODAL} minViewTimeSeconds={N.zw} trackGuildAndChannelMetadata={true} sourceQuestContent={i.sourceQuestContent}>{e => (0, r.jsx)(V, M(L({}, i), {
      parentModalOpenStartClockTime: o,
      impressionRef: e,
      quest: s,
      autoplay: l
    }))}</x.A> : null
}