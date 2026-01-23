/** Chunk was on web.js **/
/** chunk id: 663235, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk58149 = require("./58149.js"),
  Chunk222713 = require("./222713.js"),
  Chunk488556 = require("./488556.js"),
  Chunk57882 = require("./57882.js"),
  Chunk146104 = require("./146104.jsx"),
  Chunk7584 = require("./7584.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk622865 = require("./622865.js"),
  Chunk155919 = require("./155919.js"),
  Chunk756362 = require("./756362.js"),
  Chunk626715 = require("./626715.js"),
  Chunk427401 = require("./427401.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function D(e) {
  let {
    checkpointData: t
  } = e, {
    cardId: n,
    numMessagesSent: w = 0,
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
  }).format(w), V = new Intl.NumberFormat(I.intl.currentLocale, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2
  }).format(x), F = (0, _.Xq)(D), B = (0, _.OW)(n), H = f.f[n], Y = (0, c.rdh)(H.primaryColor).hex(), W = (0, c.rdh)(H.secondaryColor).hex({
    opacity: .2
  }), K = (0, s.bG)([y.A], () => y.A.getGuild(null == M ? true : M.guildId)), z = (0, v.jc)(), {
    enabled: q
  } = p.w.useConfig({
    location: "message_component"
  }), X = new Intl.NumberFormat(I.intl.currentLocale, {
    notation: "compact",
    compactDisplay: "short"
  }), Z = (0, _._V)(null != U ? U : 0), Q = (0, i.useMemo)(() => {
    let e = [];
    e.push(R);
    for (let t = 0; t < 8; t++) e.push(N);
    return e.push(C), e
  }, []), $ = () => {
    var e, t;
    let n = E.A.getChannel(null == z || null == (e = z.message) ? true : e.channel_id);
    b.default.track(A.HAw.CHECKPOINT_CARD_CLICKED, P({
      other_user_id: null == z || null == (t = z.message) ? true : t.author.id
    }, (0, d.dI)(n), (0, d.H$)(null == n ? true : n.guild_id))), (0, h.A)("message_component")
  };
  return (0, r.jsxs)("div", {
    className: T.kL,
    style: {
      backgroundColor: Y
    },
    children: [(0, r.jsxs)("div", {
      className: T.Nr,
      children: [(0, r.jsx)("img", {
        src: B,
        alt: "",
        className: T.LY,
        style: {
          backgroundColor: Y
        }
      }), (0, r.jsxs)("div", {
        className: T.M1,
        children: [(0, r.jsxs)("div", {
          className: T.dJ,
          children: [(0, r.jsx)(a.oyn, {
            color: o.A.colors.BLACK,
            size: "xs"
          }), (0, r.jsx)(a.EYj, {
            variant: "text-sm/medium",
            className: T.KA,
            children: G
          })]
        }), (0, r.jsxs)("div", {
          className: T.dJ,
          children: [(0, r.jsx)(a.cNw, {
            color: o.A.colors.BLACK,
            size: "xs"
          }), (0, r.jsx)(a.EYj, {
            variant: "text-sm/medium",
            className: T.KA,
            children: F
          })]
        }), (0, r.jsxs)("div", {
          className: T.dJ,
          children: [(0, r.jsx)(a.nm2, {
            color: o.A.colors.BLACK,
            size: "xs"
          }), (0, r.jsx)(a.EYj, {
            variant: "text-sm/medium",
            className: T.KA,
            children: V
          })]
        }), (0, r.jsx)("div", {
          className: T.dJ,
          children: null == L ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a._7Z, {
              color: o.A.colors.BLACK,
              size: "xs"
            }), (0, r.jsx)(a.EYj, {
              variant: "text-sm/medium",
              className: T.KA,
              children: I.intl.string(S.default["fn+gnp"])
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u.A, {
              emojiId: L.emojiId,
              emojiName: L.emojiName,
              className: T.iY
            }), (0, r.jsx)(a.EYj, {
              variant: "text-sm/medium",
              className: T.KA,
              children: null == L.emojiId ? m.Ay.convertSurrogateToName(L.emojiName) : ":".concat(L.emojiName, ":")
            })]
          })
        }), (0, r.jsx)("div", {
          className: T.dJ,
          children: null == j ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a._7Z, {
              color: o.A.colors.BLACK,
              size: "xs"
            }), (0, r.jsx)(a.EYj, {
              variant: "text-sm/medium",
              className: T.KA,
              children: I.intl.string(S.default["26V/4h"])
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("img", {
              src: O.Ay.getApplicationIconURL({
                id: j.applicationId,
                icon: j.applicationImageId
              }),
              alt: "",
              className: T.iY
            }), (0, r.jsx)(a.EYj, {
              variant: "text-sm/medium",
              className: T.KA,
              children: j.applicationName
            })]
          })
        }), (0, r.jsx)("div", {
          className: T.dJ,
          children: null == M ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a._7Z, {
              color: o.A.colors.BLACK,
              size: "xs"
            }), (0, r.jsx)(a.EYj, {
              variant: "text-sm/medium",
              className: T.KA,
              children: I.intl.string(S.default.eoLmk1)
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [null != K ? (0, r.jsx)(g.A, {
              guild: K,
              size: g.A.Sizes.SMOL,
              className: T.iY
            }) : (0, r.jsx)(a.RR9, {
              color: o.A.colors.BLACK,
              size: "xs"
            }), (0, r.jsx)(a.EYj, {
              variant: "text-sm/medium",
              className: T.KA,
              children: M.guildName
            })]
          })
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: T.qr,
      style: {
        backgroundColor: W
      },
      children: [(0, r.jsx)(a.DZT, {
        variant: "display-sm",
        className: T.DD,
        children: I.intl.string(S.default["CdU/PF"])
      }), q ? (0, r.jsx)(l.m_, {
        text: I.intl.string(S.default.r8GEbK),
        "aria-label": false,
        children: (0, r.jsxs)(a.DUT, {
          className: T.lO,
          onClick: $,
          children: [(0, r.jsx)(a.EYj, {
            variant: "text-sm/bold",
            className: T.Ic,
            children: I.intl.string(I.t.I0v0Qv)
          }), (0, r.jsx)(a.KS6, {
            color: o.A.colors.BLACK,
            size: "xs"
          })]
        })
      }) : null]
    }), (0, r.jsxs)("div", {
      className: T.hC,
      style: {
        backgroundColor: Y
      },
      children: [(0, r.jsx)("div", {
        className: T.TO,
        children: Q.map((e, t) => (0, r.jsx)("img", {
          className: T.mG,
          src: e,
          width: 4,
          alt: "",
          style: {
            opacity: t >= Z ? .3 : 1
          }
        }, t))
      }), (0, r.jsxs)("div", {
        className: T.JA,
        children: [(0, r.jsx)(a.EYj, {
          variant: "text-xs/normal",
          className: T.KA,
          children: "LVL"
        }), (0, r.jsx)(a.EYj, {
          variant: "text-xs/bold",
          className: T.KA,
          children: X.format(null != k ? k : 0)
        })]
      })]
    })]
  })
}