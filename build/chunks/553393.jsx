/** Chunk was on web.js **/
/** chunk id: 553393, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk126663 = require("./126663.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk393238 = require("./393238.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk258609 = require("./258609.js"),
  Chunk102172 = require("./102172.js"),
  Chunk210887 = require("./210887.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk617136 = require("./617136.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk602667 = require("./602667.js"),
  Chunk644646 = require("./644646.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk667105 = require("./667105.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk777444 = require("./777444.js");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}
let U = "8px",
  G = "11px",
  B = 222;

function Z(e, t) {
  return null != e && null != t && (0, g.p9)(t, v.Z, y.Z, O.Z, m.Z)[0]
}

function F(e) {
  var t, m, g, y, O;
  let {
    quest: v,
    memberListItemRef: N,
    applicationStream: k,
    position: F,
    closePopout: V,
    updatePosition: H,
    impressionRef: Y,
    name: W
  } = e, K = (0, s.e7)([b.Z], () => {
    var e;
    return null != (e = b.Z.getChannel(null == k ? true : k.channelId)) ? e : null
  }), z = (0, P.hf)({
    quest: v,
    questContent: S.jn.MEMBERS_LIST,
    sourceQuestContent: S.jn.MEMBERS_LIST
  }), q = (0, T.tP)(v), X = (null == v || null == (t = v.userStatus) ? true : t.claimedAt) != null, Q = (null == v || null == (m = v.userStatus) ? true : m.enrolledAt) != null, J = (null == v || null == (g = v.userStatus) ? true : g.completedAt) != null, $ = (0, s.e7)([E.Z], () => E.Z.getState().theme), ee = (0, l.wj)($) ? L.BR.DARK : L.BR.LIGHT, et = (0, s.e7)([h.Z], () => h.Z.useReducedMotion), {
    ref: en,
    height: er
  } = (0, _.ZP)(), [ei, eo] = i.useState(et), ea = (0, p.Aq)(), es = (0, a.eg)();
  i.useEffect(() => {
    let e = es.current;
    return null == e || e.addEventListener("scroll", V), () => {
      null == e || e.removeEventListener("scroll", V)
    }
  }, [V, es]), i.useEffect(() => {
    let e = es.current,
      t = N.current;
    if (null == e || null == t) return;
    let n = new MutationObserver(() => H());
    return n.observe(e, {
      childList: true,
      subtree: true
    }), () => {
      n.disconnect()
    }
  }, [N, es, H]);
  let el = (0, u.q_F)({
      from: {
        height: 0
      },
      height: null != er ? er : 0,
      config: {
        tension: 450,
        friction: 45
      },
      onRest: () => eo(true)
    }),
    ec = (0, u.Yzy)(ei, {
      from: {
        opacity: 0,
        scale: 0
      },
      enter: {
        opacity: 1,
        scale: 1
      }
    }),
    eu = () => {
      ea.dispatch(D.CkL.POPOUT_CLOSE)
    },
    ed = "top" === F ? "".concat(U, " ").concat(U, " 0 0") : "0 0 ".concat(U, " ").concat(U);
  if (null == v || q || X && !Z(k, K)) return null;
  let ef = () => {
      (0, I._3)({
        questId: v.id,
        questContent: S.jn.MEMBERS_LIST,
        questContentCTA: I.jZ.OPEN_DISCLOSURE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: S.jn.MEMBERS_LIST
      }), (0, R.openDisclosureModal)(v, {
        content: S.jn.MEMBERS_LIST,
        ctaContent: I.jZ.OPEN_DISCLOSURE,
        sourceQuestContent: S.jn.MEMBERS_LIST
      })
    },
    e_ = () => {
      (0, I._3)({
        questId: v.id,
        questContent: S.jn.MEMBERS_LIST,
        questContentCTA: I.jZ.LEARN_MORE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: S.jn.MEMBERS_LIST
      }), (0, R.navigateToQuestHome)({
        fromContent: S.jn.MEMBERS_LIST,
        questId: v.id
      })
    },
    ep = e => {
      e.stopPropagation(), ef()
    },
    eh = () => {
      Z(k, K) && null != K ? ((0, I._3)({
        questId: v.id,
        questContent: S.jn.MEMBERS_LIST,
        questContentCTA: I.jZ.WATCH_STREAM,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: S.jn.MEMBERS_LIST
      }), (0, u.ZDy)(async () => {
        let {
          default: e
        } = await n.e("85045").then(n.bind(n, 748862));
        return t => <e{...j({
          username: null != W ? W : "",
          onConfirm: () => ((0, I._3)({
            questId: v.id,
            questContent: S.jn.MEMBERS_LIST,
            questContentCTA: I.jZ.WATCH_STREAM_CONFIRM,
            trackGuildAndChannelMetadata: true,
            sourceQuestContent: S.jn.MEMBERS_LIST
          }), d.default.selectVoiceChannel(K.id), (0, f.iV)(k))
        }, t)} />
      })) : e_()
    },
    em = J && !X ? {
      headerText: x.intl.string(x.t.gHerLS),
      ctaText: x.intl.string(x.t.cfY4PD),
      handleClickCta: z,
      tileAssetType: "reward"
    } : Q && !X ? {
      headerText: x.intl.string(x.t.uH2sf3),
      ctaText: x.intl.string(x.t.VN1Ajo),
      handleClickCta: e_,
      tileAssetType: "reward"
    } : Z(k, K) ? {
      headerText: x.intl.string(x.t.Bz6SkJ),
      ctaText: x.intl.string(x.t.BXFP39),
      handleClickCta: eh,
      tileAssetType: "game"
    } : {
      headerText: x.intl.string(x.t.Bz6SkJ),
      ctaText: x.intl.string(x.t.BSXPZ2),
      handleClickCta: e_,
      tileAssetType: "game"
    };
  return <o.animated.div ref={e => {
      Y.current = e
    }} aria-expanded={ei} className={M.wrapper} style={{
      width: null != (O = null == (y = N.current) ? true : y.clientWidth) ? O : B,
      height: el.height,
      overflow: ei ? "visible" : "hidden",
      borderRadius: ed
    }}><div ref={e => {
        en.current = e
      }} className={M.container} style={{
        borderRadius: ed
      }}>{<div className={M.top}>{<div className={M.left}>{<u.X6q variant={"heading-sm/semibold"}>{em.headerText}</u.X6q>}{<u.P3F className={M.help} onClick={e => {
              eu(), ep(e)
            }}>{<u.Text variant={"text-xs/medium"} color={"text-muted"} className={M.helpText}>{x.intl.format(x.t["Lm8/mJ"], {
                gamePublisher: v.config.messages.gamePublisher
              })}</u.Text>}{<u.idN size={"custom"} className={M.helpIcon} width={G} height={G} color={u.TVs.colors.INTERACTIVE_NORMAL} />}</u.P3F>}</div>}{<div className={M.right}><div className={M.imgWrapper}>{ec((e, t) => t && <o.animated.div style={e} className={M.imgUnderlay} />)}{"game" === em.tileAssetType && <img alt={x.intl.formatToPlainString(x.t.IskzPj, {
                gameTitle: v.config.messages.gameTitle,
                gamePublisher: v.config.messages.gamePublisher
              })} className={M.assetTile} src={(0, A.fh)(v, A.eC.GAME_TILE, ee).url} />}{"reward" === em.tileAssetType && <C.Z className={M.assetTile} quest={v} questContent={S.jn.MEMBERS_LIST} learnMoreStyle={"icon"} location={w.dr.MEMBERS_LIST} onClick={eu} sourceQuestContent={S.jn.MEMBERS_LIST} />}</div></div>}</div>}{<c.zx onClick={() => {
          eu(), em.handleClickCta()
        }} color={c.zx.Colors.CUSTOM} className={M.ctaButton}>{em.ctaText}</c.zx>}</div></o.animated.div>
}

function V(e) {
  return null == e.quest || e.isQuestEnrollmentBlocked ? null : <N.A questOrQuests={e.quest} questContent={S.jn.MEMBERS_LIST} trackGuildAndChannelMetadata={true} sourceQuestContent={S.jn.MEMBERS_LIST}>{t => (0, r.jsx)(F, j({
      impressionRef: t
    }, e))}</N.A>
}