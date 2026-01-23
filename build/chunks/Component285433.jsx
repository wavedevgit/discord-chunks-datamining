/** Chunk was on web.js **/
/** chunk id: 285433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk770178 = require("./770178.js"),
  Chunk765548 = require("./765548.js"),
  Chunk341915 = require("./341915.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk18437 = require("./18437.js"),
  Chunk590202 = require("./590202.js"),
  Chunk918338 = require("./918338.jsx"),
  Chunk270045 = require("./270045.jsx"),
  Chunk57718 = require("./57718.jsx"),
  Chunk847641 = require("./847641.jsx"),
  Chunk646764 = require("./646764.jsx"),
  Chunk433745 = require("./433745.js"),
  Chunk654487 = require("./654487.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk806449 = require("./806449.js");

function w(e, t, n) {
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
      w(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = (0, Chunk108531.animated)(Chunk397927.abt),
  L = e => {
    var t;
    let {
      isQuestExpired: n,
      quest: a,
      location: w,
      size: P,
      expansionSpring: L,
      isAnimating: j,
      isExpanded: M,
      isInteracting: k,
      contentPosition: U,
      toggleExpanded: G,
      sourceQuestContent: V
    } = e, {
      ref: F,
      height: B
    } = (0, d.Ay)(), [H, Y] = i.useState(null), [W, K] = i.useState(null), z = (0, p.A)(e => {
      let t = e.target;
      Y(t.offsetWidth), K(t.scrollWidth)
    }), q = (0, f.w)(z), Z = (0, I.a3)(w), X = w === _.uF.QUESTS_EMBED, Q = (0, h.wT)(a, S.rE.QUESTS_CARD, w, V), J = (null == (t = a.userStatus) ? true : t.completedAt) != null, $ = (0, g.Ut)(), ee = (0, m.S5)(a.config.expiresAt), et = (0, m.S5)(a.config.rewardsConfig.rewardsExpireAt), en = i.useMemo(() => null != a.config.cosponsorMetadata, [a]), er = e => {
      e.stopPropagation(), e.currentTarget.blur(), G(), $({
        questId: a.id,
        questContent: w,
        questContentCTA: M ? E.Cy.COLLAPSE : E.Cy.EXPAND,
        questContentPosition: U,
        sourceQuestContent: V
      })
    }, ei = () => null != H && null != W && H < W, ea = (0, r.jsx)(O.Ay, {
      className: N.Iu,
      logotypeClassName: en ? N.qN : true,
      gameTileSize: O.LU.MEDIUM,
      quest: a,
      separatorSpacing: O.C8.MEDIUM,
      theme: T.NJ.DARK,
      withGameTile: !X || null == a.config.cosponsorMetadata
    });
    return (0, r.jsxs)("div", {
      className: s()(N.nw, {
        [N.fu]: Z,
        [N.Gg]: X,
        [N.e5]: "xs" === P
      }),
      "aria-label": C.intl.string(C.t.dcl9MQ),
      style: {
        height: Z ? B : true
      },
      children: [(0, r.jsx)(y.A, {
        quest: a,
        isInteracting: k,
        containerClassName: N.v7,
        imageSize: {
          width: 660,
          height: 185
        },
        imageClassName: N.Z5
      }), (0, r.jsxs)("div", {
        className: N.wx,
        "aria-expanded": M,
        children: [(0, r.jsxs)(o.animated.div, {
          className: s()(N.VW, {
            [N.eX]: X
          }),
          style: {
            y: Z ? L.to({
              range: [0, 1],
              output: [I.es, 0]
            }) : true
          },
          children: [Z && (0, r.jsx)(o.animated.div, {
            className: N.gM,
            style: {
              opacity: L.to({
                range: [0, 1],
                output: [1, 0]
              }),
              visibility: j || !M ? "inherit" : "hidden"
            },
            "aria-hidden": !j && M,
            children: (0, r.jsxs)(u.sqX, {
              "aria-label": C.intl.string(C.t.dcl9MQ),
              onClick: er,
              className: N._F,
              children: [(0, r.jsx)("div", {
                className: N.SY,
                children: (0, r.jsx)(A.A, {
                  quest: a,
                  questContent: w,
                  className: N.EK,
                  sourceQuestContent: V
                })
              }), (0, r.jsxs)("div", {
                className: N.if,
                children: [(0, r.jsxs)("div", {
                  className: N.dc,
                  children: [ea, (0, r.jsx)(v.A, {
                    color: "always-white"
                  })]
                }), (0, r.jsx)(u.Text, {
                  variant: "text-xs/medium",
                  children: Q
                })]
              })]
            })
          }), (0, r.jsx)(o.animated.div, {
            ref: e => {
              F.current = e
            },
            className: s()(N.Yu, {
              [N.fu]: Z,
              [N.Gg]: X
            }),
            style: {
              opacity: L.to({
                range: [0, 1],
                output: [0, 1]
              }),
              visibility: j || M ? "inherit" : "hidden"
            },
            "aria-hidden": !j && !M,
            children: (0, r.jsxs)("div", {
              className: N.uA,
              children: [(0, r.jsxs)("div", {
                className: N._V,
                children: [ea, X ? null : (0, r.jsx)(v.A, {
                  color: "always-white"
                })]
              }), (0, r.jsxs)("div", {
                className: N.P9,
                children: [(0, r.jsx)(c.m, {
                  __unsupportedReactNodeAsText: a.config.messages.questName,
                  shouldShow: ei(),
                  children: (0, r.jsx)(u.Heading, {
                    ref: q,
                    variant: "lg" === P ? "heading-xxl/bold" : "sm" === P ? "heading-xl/bold" : "heading-lg/bold",
                    className: N.R_,
                    color: "always-white",
                    children: C.intl.format(C.t.EAYZAr, {
                      questName: a.config.messages.questName
                    })
                  })
                }), (0, r.jsx)(u.Text, {
                  variant: "text-xs/normal",
                  color: "always-white",
                  children: J ? C.intl.formatToPlainString(C.t.APddvF, {
                    expirationDate: et
                  }) : n ? C.intl.formatToPlainString(C.t.v7xMw7, {
                    expirationDate: ee
                  }) : C.intl.formatToPlainString(C.t["pX+fmn"], {
                    expirationDate: ee
                  })
                })]
              })]
            })
          })]
        }), (0, r.jsxs)(o.animated.div, {
          className: N._q,
          style: {
            top: Z ? L.to({
              range: [0, 1],
              output: [I.es / 2 - I.uR / 2, I.wl]
            }) : I.wl
          },
          children: [(0, r.jsx)(b.C, {
            questContent: w,
            quest: a,
            questContentPosition: U,
            shouldShowDisclosure: true,
            hideLearnMore: Z,
            showShareLink: !n && X,
            sourceQuestContent: V,
            children: e => (0, r.jsx)(o.animated.div, {
              style: {
                opacity: L,
                visibility: j || M ? "inherit" : "hidden"
              },
              "aria-hidden": !j && !M,
              children: (0, r.jsx)(u.DUT, D(R({}, e), {
                className: N.P0,
                "aria-label": C.intl.string(C.t.DEoVWZ),
                children: (0, r.jsx)(u.jNK, {
                  size: "md",
                  color: l.A.colors.WHITE
                })
              }))
            })
          }), !(0, I.rW)(w) && (0, r.jsx)(u.DUT, {
            onClick: er,
            className: N.P0,
            "aria-label": M ? C.intl.string(C.t.iTcuma) : C.intl.string(C.t.dcl9MQ),
            children: (0, r.jsx)(x, {
              style: {
                rotate: L.to({
                  range: [0, 1],
                  output: [0, 180]
                })
              },
              color: l.A.colors.WHITE
            })
          })]
        })]
      })]
    })
  }