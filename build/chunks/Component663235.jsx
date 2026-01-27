/** Chunk was on 20941 **/
/** chunk id: 663235, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
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

function P(e) {
  let {
    checkpointData: t
  } = e, {
    cardId: n,
    numMessagesSent: P = 0,
    totalVoiceMinutes: w = 0,
    numEmojisSent: T = 0,
    topEmoji: R,
    topGame: L,
    topGuild: D,
    powerLevel: k,
    powerLevelPercentile: M
  } = t, H = new Intl.NumberFormat(A.intl.currentLocale, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2
  }).format(P), U = new Intl.NumberFormat(A.intl.currentLocale, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2
  }).format(T), F = (0, p.Xq)(w), G = (0, p.OW)(n), V = m.f[n], B = (0, c.rdh)(V.primaryColor).hex(), W = (0, c.rdh)(V.secondaryColor).hex({
    opacity: .2
  }), z = (0, i.bG)([y.A], () => y.A.getGuild(null == D ? true : D.guildId)), K = (0, C.jc)(), {
    enabled: Z
  } = f.w.useConfig({
    location: "message_component"
  }), Y = new Intl.NumberFormat(A.intl.currentLocale, {
    notation: "compact",
    compactDisplay: "short"
  }), q = (0, p._V)(null != M ? M : 0), X = (0, l.useMemo)(() => {
    let e = [];
    e.push(I);
    for (let t = 0; t < 8; t++) e.push(N);
    return e.push(S), e
  }, []);
  return (0, r.jsxs)("div", {
    className: E.kL,
    style: {
      backgroundColor: B
    },
    children: [(0, r.jsxs)("div", {
      className: E.Nr,
      children: [(0, r.jsx)("img", {
        src: G,
        alt: "",
        className: E.LY,
        style: {
          backgroundColor: B
        }
      }), (0, r.jsxs)("div", {
        className: E.M1,
        children: [(0, r.jsxs)("div", {
          className: E.dJ,
          children: [(0, r.jsx)(a.oyn, {
            color: s.A.colors.BLACK,
            size: "xs"
          }), (0, r.jsx)(a.EYj, {
            variant: "text-sm/medium",
            className: E.KA,
            children: H
          })]
        }), (0, r.jsxs)("div", {
          className: E.dJ,
          children: [(0, r.jsx)(a.cNw, {
            color: s.A.colors.BLACK,
            size: "xs"
          }), (0, r.jsx)(a.EYj, {
            variant: "text-sm/medium",
            className: E.KA,
            children: F
          })]
        }), (0, r.jsxs)("div", {
          className: E.dJ,
          children: [(0, r.jsx)(a.nm2, {
            color: s.A.colors.BLACK,
            size: "xs"
          }), (0, r.jsx)(a.EYj, {
            variant: "text-sm/medium",
            className: E.KA,
            children: U
          })]
        }), (0, r.jsx)("div", {
          className: E.dJ,
          children: null == R ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a._7Z, {
              color: s.A.colors.BLACK,
              size: "xs"
            }), (0, r.jsx)(a.EYj, {
              variant: "text-sm/medium",
              className: E.KA,
              children: A.intl.string(O.default["fn+gnp"])
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u.A, {
              emojiId: R.emojiId,
              emojiName: R.emojiName,
              className: E.iY
            }), (0, r.jsx)(a.EYj, {
              variant: "text-sm/medium",
              className: E.KA,
              children: null == R.emojiId ? b.Ay.convertSurrogateToName(R.emojiName) : ":".concat(R.emojiName, ":")
            })]
          })
        }), (0, r.jsx)("div", {
          className: E.dJ,
          children: null == L ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a._7Z, {
              color: s.A.colors.BLACK,
              size: "xs"
            }), (0, r.jsx)(a.EYj, {
              variant: "text-sm/medium",
              className: E.KA,
              children: A.intl.string(O.default["26V/4h"])
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("img", {
              src: j.Ay.getApplicationIconURL({
                id: L.applicationId,
                icon: L.applicationImageId
              }),
              alt: "",
              className: E.iY
            }), (0, r.jsx)(a.EYj, {
              variant: "text-sm/medium",
              className: E.KA,
              children: L.applicationName
            })]
          })
        }), (0, r.jsx)("div", {
          className: E.dJ,
          children: null == D ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a._7Z, {
              color: s.A.colors.BLACK,
              size: "xs"
            }), (0, r.jsx)(a.EYj, {
              variant: "text-sm/medium",
              className: E.KA,
              children: A.intl.string(O.default.eoLmk1)
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [null != z ? (0, r.jsx)(g.A, {
              guild: z,
              size: g.A.Sizes.SMOL,
              className: E.iY
            }) : (0, r.jsx)(a.RR9, {
              color: s.A.colors.BLACK,
              size: "xs"
            }), (0, r.jsx)(a.EYj, {
              variant: "text-sm/medium",
              className: E.KA,
              children: D.guildName
            })]
          })
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: E.qr,
      style: {
        backgroundColor: W
      },
      children: [(0, r.jsx)(a.DZT, {
        variant: "display-sm",
        className: E.DD,
        children: A.intl.string(O.default["CdU/PF"])
      }), Z ? (0, r.jsx)(o.m_, {
        text: A.intl.string(O.default.r8GEbK),
        "aria-label": false,
        children: (0, r.jsxs)(a.DUT, {
          className: E.lO,
          onClick: () => {
            var e, t;
            let n = x.A.getChannel(null == K || null == (e = K.message) ? true : e.channel_id);
            v.default.track(_.HAw.CHECKPOINT_CARD_CLICKED, function(e) {
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
              other_user_id: null == K || null == (t = K.message) ? true : t.author.id
            }, (0, d.dI)(n), (0, d.H$)(null == n ? true : n.guild_id))), (0, h.A)("message_component")
          },
          children: [(0, r.jsx)(a.EYj, {
            variant: "text-sm/bold",
            className: E.Ic,
            children: A.intl.string(A.t.I0v0Qv)
          }), (0, r.jsx)(a.KS6, {
            color: s.A.colors.BLACK,
            size: "xs"
          })]
        })
      }) : null]
    }), (0, r.jsxs)("div", {
      className: E.hC,
      style: {
        backgroundColor: B
      },
      children: [(0, r.jsx)("div", {
        className: E.TO,
        children: X.map((e, t) => (0, r.jsx)("img", {
          className: E.mG,
          src: e,
          width: 4,
          alt: "",
          style: {
            opacity: t >= q ? .3 : 1
          }
        }, t))
      }), (0, r.jsxs)("div", {
        className: E.JA,
        children: [(0, r.jsx)(a.EYj, {
          variant: "text-xs/normal",
          className: E.KA,
          children: "LVL"
        }), (0, r.jsx)(a.EYj, {
          variant: "text-xs/bold",
          className: E.KA,
          children: Y.format(null != k ? k : 0)
        })]
      })]
    })]
  })
}