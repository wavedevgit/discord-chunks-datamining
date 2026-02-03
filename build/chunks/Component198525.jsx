/** Chunk was on web.js **/
/** chunk id: 198525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => V
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk92674 = require("./92674.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk401843 = require("./401843.js"),
  Chunk765671 = require("./765671.js"),
  Chunk775602 = require("./775602.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk734057 = require("./734057.js"),
  Chunk341915 = require("./341915.js"),
  Chunk714510 = require("./714510.js"),
  Chunk579473 = require("./579473.js"),
  Chunk561844 = require("./561844.js"),
  Chunk590202 = require("./590202.js"),
  Chunk792620 = require("./792620.js"),
  Chunk814793 = require("./814793.js"),
  Chunk73473 = require("./73473.js"),
  Chunk201805 = require("./201805.jsx"),
  Chunk646764 = require("./646764.jsx"),
  Chunk398025 = require("./398025.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk784569 = require("./784569.js");

function M(e, t, n) {
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
      M(e, t, n[t])
    })
  }
  return e
}
let k = "8px",
  U = "11px",
  G = 222;

function F(e) {
  var t, S, M, F, V;
  let {
    quest: B,
    memberListItemRef: H,
    applicationStream: Y,
    position: W,
    closePopout: K,
    updatePosition: z,
    impressionRef: q,
    name: Z
  } = e, Q = (0, s.bG)([g.A], () => {
    var e;
    return null != (e = g.A.getChannel(null == Y ? true : Y.channelId)) ? e : null
  }), X = (0, T.ix)({
    quest: B,
    questContent: E.uF.MEMBERS_LIST,
    sourceQuestContent: E.uF.MEMBERS_LIST
  }), J = (null == B || null == (S = B.userStatus) ? true : S.claimedAt) != null, $ = (null == B || null == (M = B.userStatus) ? true : M.enrolledAt) != null, ee = (null == B || null == (F = B.userStatus) ? true : F.completedAt) != null, et = (0, s.bG)([m.A], () => m.A.getState().theme), en = (0, c.Mw)(et) ? D.NJ.DARK : D.NJ.LIGHT, er = (0, s.bG)([_.A], () => _.A.useReducedMotion), {
    ref: ei,
    height: ea
  } = (0, p.Ay)(), [eo, es] = i.useState(er), el = (0, h.aL)(), ec = (0, o.KF)();
  i.useEffect(() => {
    let e = ec.current;
    return null == e || e.addEventListener("scroll", K), () => {
      null == e || e.removeEventListener("scroll", K)
    }
  }, [K, ec]), i.useEffect(() => {
    let e = ec.current,
      t = H.current;
    if (null == e || null == t) return;
    let n = new MutationObserver(() => z());
    return n.observe(e, {
      childList: true,
      subtree: true
    }), () => {
      n.disconnect()
    }
  }, [H, ec, z]);
  let eu = (0, u.zhh)({
      from: {
        height: 0
      },
      height: null != ea ? ea : 0,
      config: {
        tension: 450,
        friction: 45
      },
      onRest: () => es(true)
    }),
    ed = (0, u.pnh)(eo, {
      from: {
        opacity: 0,
        scale: 0
      },
      enter: {
        opacity: 1,
        scale: 1
      }
    }),
    ef = () => {
      el.dispatch(P.jej.POPOUT_CLOSE)
    },
    ep = "top" === W ? "".concat(k, " ").concat(k, " 0 0") : "0 0 ".concat(k, " ").concat(k),
    e_ = () => {
      (0, O.Y5)({
        questId: B.id,
        questContent: E.uF.MEMBERS_LIST,
        questContentCTA: v.Cy.OPEN_DISCLOSURE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: E.uF.MEMBERS_LIST
      }), (0, w.Zc)(B, {
        content: E.uF.MEMBERS_LIST,
        ctaContent: v.Cy.OPEN_DISCLOSURE,
        sourceQuestContent: E.uF.MEMBERS_LIST
      })
    },
    eh = () => {
      (0, O.Y5)({
        questId: B.id,
        questContent: E.uF.MEMBERS_LIST,
        questContentCTA: v.Cy.LEARN_MORE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: E.uF.MEMBERS_LIST
      }), (0, w.navigateToQuestHome)({
        fromContent: E.uF.MEMBERS_LIST,
        questId: B.id
      })
    },
    em = e => {
      e.stopPropagation(), e_()
    },
    eg = () => {
      (0, I.Ll)(Y, Q) && null != Q ? ((0, O.Y5)({
        questId: B.id,
        questContent: E.uF.MEMBERS_LIST,
        questContentCTA: v.Cy.WATCH_STREAM,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: E.uF.MEMBERS_LIST
      }), (0, u.mMO)(async () => {
        let {
          default: e
        } = await n.e("72879").then(n.bind(n, 48274));
        return t => (0, r.jsx)(e, j({
          username: null != Z ? Z : "",
          onConfirm: () => ((0, O.Y5)({
            questId: B.id,
            questContent: E.uF.MEMBERS_LIST,
            questContentCTA: v.Cy.WATCH_STREAM_CONFIRM,
            trackGuildAndChannelMetadata: true,
            sourceQuestContent: E.uF.MEMBERS_LIST
          }), d.default.selectVoiceChannel(Q.id), (0, f.Nl)(Y))
        }, t))
      })) : eh()
    },
    eE = (0, y.NA)({
      quest: B
    }),
    ey = (() => {
      if (ee && !J) return {
        headerText: L.intl.string(L.t.gHerLS),
        ctaText: L.intl.string(L.t.cfY4PE),
        handleClickCta: X,
        tileAssetType: "reward"
      };
      if ($ && !J) return {
        headerText: L.intl.string(L.t.uH2sf2),
        ctaText: L.intl.string(L.t.VN1Ajl),
        handleClickCta: eh,
        tileAssetType: "reward"
      };
      if ((0, I.Ll)(Y, Q)) return {
        headerText: L.intl.string(L.t.Bz6SkH),
        ctaText: L.intl.string(L.t.BXFP30),
        handleClickCta: eg,
        tileAssetType: "game"
      };
      let e = (0, I.vA)(B) ? eE : L.intl.string(L.t["BSXPZ+"]);
      return {
        headerText: (0, I.vA)(B) && (0, A.vl)(B) && !B.config.features.includes(R.Li.CLOUD_GAMING_ACTIVITY) ? e : L.intl.string(L.t.Bz6SkH),
        ctaText: e,
        handleClickCta: eh,
        tileAssetType: "game"
      }
    })();
  return (0, r.jsx)(a.animated.div, {
    ref: e => {
      q.current = e
    },
    "aria-expanded": eo,
    className: x.iE,
    style: {
      width: null != (t = null == (V = H.current) ? true : V.clientWidth) ? t : G,
      height: eu.height,
      overflow: eo ? "visible" : "hidden",
      borderRadius: ep
    },
    children: (0, r.jsxs)("div", {
      ref: e => {
        ei.current = e
      },
      className: x.kL,
      style: {
        borderRadius: ep
      },
      children: [(0, r.jsxs)("div", {
        className: x.Mn,
        children: [(0, r.jsxs)("div", {
          className: x.kb,
          children: [(0, r.jsx)(u.Heading, {
            variant: "heading-sm/semibold",
            children: ey.headerText
          }), (0, r.jsxs)(u.DUT, {
            className: x.yj,
            onClick: e => {
              ef(), em(e)
            },
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-muted",
              className: x.BK,
              children: L.intl.format(L.t["Lm8/mH"], {
                gamePublisher: B.config.messages.gamePublisher
              })
            }), (0, r.jsx)(u.cBN, {
              size: "custom",
              className: x.$y,
              width: U,
              height: U,
              color: u.LU0.colors.INTERACTIVE_TEXT_DEFAULT
            })]
          })]
        }), (0, r.jsx)("div", {
          className: x.pG,
          children: (0, r.jsxs)("div", {
            className: x.zc,
            children: [ed((e, t) => t && (0, r.jsx)(a.animated.div, {
              style: {
                opacity: (0, N.a)(e.opacity),
                scale: (0, N.a)(e.scale)
              },
              className: x.ae
            })), "game" === ey.tileAssetType && (0, r.jsx)("img", {
              alt: L.intl.formatToPlainString(L.t.IskzPg, {
                gameTitle: B.config.messages.gameTitle,
                gamePublisher: B.config.messages.gamePublisher
              }),
              className: x.TW,
              src: (0, b.tW)(B, b.fY.GAME_TILE, en).url
            }), "reward" === ey.tileAssetType && (0, r.jsx)(C.A, {
              className: x.TW,
              quest: B,
              questContent: E.uF.MEMBERS_LIST,
              learnMoreStyle: "icon",
              onClick: ef,
              sourceQuestContent: E.uF.MEMBERS_LIST
            })]
          })
        })]
      }), (0, r.jsx)(l.$nd, {
        variant: "secondary",
        text: ey.ctaText,
        onClick: () => {
          ef(), ey.handleClickCta()
        },
        fullWidth: true
      })]
    })
  })
}

function V(e) {
  return (0, r.jsx)(S.R, {
    questOrQuests: e.quest,
    questContent: E.uF.MEMBERS_LIST,
    trackGuildAndChannelMetadata: true,
    sourceQuestContent: E.uF.MEMBERS_LIST,
    children: t => (0, r.jsx)(F, j({
      impressionRef: t
    }, e))
  })
}