/** Chunk was on web.js **/
/** chunk id: 628844, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk830960 = require("./830960.js"),
  Chunk99977 = require("./99977.js"),
  Chunk26118 = require("./26118.js"),
  Chunk840767 = require("./840767.jsx"),
  Chunk633302 = require("./633302.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk860076 = require("./860076.js"),
  Chunk606582 = require("./606582.js"),
  Chunk754545 = require("./754545.js"),
  Chunk745020 = require("./745020.js"),
  Chunk51089 = require("./51089.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function D(e) {
  let {
    checkpointData: t
  } = e, {
    cardId: n,
    numMessagesSent: R = 0,
    totalVoiceMinutes: D = 0,
    numEmojisSent: x = 0,
    topEmoji: L,
    topGame: j,
    topGuild: M,
    powerLevel: k,
    powerLevelPercentile: U
  } = t, G = new Intl.NumberFormat(I.intl.currentLocale, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2
  }).format(R), Z = new Intl.NumberFormat(I.intl.currentLocale, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2
  }).format(x), B = (0, _.nJ)(D), F = (0, _.UN)(n), V = f.F[n], H = (0, c.dQu)(V.primaryColor).hex(), Y = (0, c.dQu)(V.secondaryColor).hex({
    opacity: .2
  }), W = (0, o.e7)([b.Z], () => b.Z.getGuild(null == M ? true : M.guildId)), K = (0, v.CJ)(), {
    enabled: z
  } = p.c.useConfig({
    location: "message_component"
  }), q = new Intl.NumberFormat(I.intl.currentLocale, {
    notation: "compact",
    compactDisplay: "short"
  }), Q = (0, _.QB)(null != U ? U : 0), X = (0, i.useMemo)(() => {
    let e = [];
    e.push(P);
    for (let t = 0; t < 8; t++) e.push(N);
    return e.push(A), e
  }, []), J = () => {
    var e, t;
    let n = E.Z.getChannel(null == K || null == (e = K.message) ? true : e.channel_id);
    y.default.track(S.rMx.CHECKPOINT_CARD_CLICKED, w({
      other_user_id: null == K || null == (t = K.message) ? true : t.author.id
    }, (0, d.v_)(n), (0, d.hH)(null == n ? true : n.guild_id))), (0, m.Z)("message_component")
  };
  return (0, r.jsxs)("div", {
    className: C.container,
    style: {
      backgroundColor: H
    },
    children: [(0, r.jsxs)("div", {
      className: C.card,
      children: [(0, r.jsx)("img", {
        src: F,
        alt: "",
        className: C.asset,
        style: {
          backgroundColor: H
        }
      }), (0, r.jsxs)("div", {
        className: C.stats,
        children: [(0, r.jsxs)("div", {
          className: C.stat,
          children: [(0, r.jsx)(a.kBi, {
            color: s.Z.colors.BLACK,
            size: "xs"
          }), (0, r.jsx)(a.xvT, {
            variant: "text-sm/medium",
            className: C.statText,
            children: G
          })]
        }), (0, r.jsxs)("div", {
          className: C.stat,
          children: [(0, r.jsx)(a.S6n, {
            color: s.Z.colors.BLACK,
            size: "xs"
          }), (0, r.jsx)(a.xvT, {
            variant: "text-sm/medium",
            className: C.statText,
            children: B
          })]
        }), (0, r.jsxs)("div", {
          className: C.stat,
          children: [(0, r.jsx)(a.EO4, {
            color: s.Z.colors.BLACK,
            size: "xs"
          }), (0, r.jsx)(a.xvT, {
            variant: "text-sm/medium",
            className: C.statText,
            children: Z
          })]
        }), (0, r.jsx)("div", {
          className: C.stat,
          children: null == L ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a.IMN, {
              color: s.Z.colors.BLACK,
              size: "xs"
            }), (0, r.jsx)(a.xvT, {
              variant: "text-sm/medium",
              className: C.statText,
              children: I.intl.string(T.default["fn+gnp"])
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u.Z, {
              emojiId: L.emojiId,
              emojiName: L.emojiName,
              className: C.statImage
            }), (0, r.jsx)(a.xvT, {
              variant: "text-sm/medium",
              className: C.statText,
              children: null == L.emojiId ? h.ZP.convertSurrogateToName(L.emojiName) : ":".concat(L.emojiName, ":")
            })]
          })
        }), (0, r.jsx)("div", {
          className: C.stat,
          children: null == j ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a.IMN, {
              color: s.Z.colors.BLACK,
              size: "xs"
            }), (0, r.jsx)(a.xvT, {
              variant: "text-sm/medium",
              className: C.statText,
              children: I.intl.string(T.default["26V/4h"])
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("img", {
              src: O.ZP.getApplicationIconURL({
                id: j.applicationId,
                icon: j.applicationImageId
              }),
              alt: "",
              className: C.statImage
            }), (0, r.jsx)(a.xvT, {
              variant: "text-sm/medium",
              className: C.statText,
              children: j.applicationName
            })]
          })
        }), (0, r.jsx)("div", {
          className: C.stat,
          children: null == M ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a.IMN, {
              color: s.Z.colors.BLACK,
              size: "xs"
            }), (0, r.jsx)(a.xvT, {
              variant: "text-sm/medium",
              className: C.statText,
              children: I.intl.string(T.default.eoLmk1)
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [null != W ? (0, r.jsx)(g.Z, {
              guild: W,
              size: g.Z.Sizes.SMOL,
              className: C.statImage
            }) : (0, r.jsx)(a.QTo, {
              color: s.Z.colors.BLACK,
              size: "xs"
            }), (0, r.jsx)(a.xvT, {
              variant: "text-sm/medium",
              className: C.statText,
              children: M.guildName
            })]
          })
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: C.footer,
      style: {
        backgroundColor: Y
      },
      children: [(0, r.jsx)(a.X6q, {
        variant: "display-sm",
        className: C.title,
        children: I.intl.string(T.default["CdU/PF"])
      }), z ? (0, r.jsx)(l.u, {
        text: I.intl.string(T.default.r8GEbK),
        "aria-label": false,
        children: (0, r.jsxs)(a.P3F, {
          className: C.cta,
          onClick: J,
          children: [(0, r.jsx)(a.xvT, {
            variant: "text-sm/bold",
            className: C.ctaText,
            children: I.intl.string(I.t.I0v0Qv)
          }), (0, r.jsx)(a.d4D, {
            color: s.Z.colors.BLACK,
            size: "xs"
          })]
        })
      }) : null]
    }), (0, r.jsxs)("div", {
      className: C.powerContainer,
      style: {
        backgroundColor: H
      },
      children: [(0, r.jsx)("div", {
        className: C.powerBar,
        children: X.map((e, t) => (0, r.jsx)("img", {
          className: C.noDrag,
          src: e,
          width: 4,
          alt: "",
          style: {
            opacity: t >= Q ? .3 : 1
          }
        }, t))
      }), (0, r.jsxs)("div", {
        className: C.powerText,
        children: [(0, r.jsx)(a.xvT, {
          variant: "text-xs/normal",
          className: C.statText,
          children: "LVL"
        }), (0, r.jsx)(a.xvT, {
          variant: "text-xs/bold",
          className: C.statText,
          children: q.format(null != k ? k : 0)
        })]
      })]
    })]
  })
}