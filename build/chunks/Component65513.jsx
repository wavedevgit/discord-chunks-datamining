/** Chunk was on 21738 **/
/** chunk id: 65513, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x,
  s: () => P
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk960488 = require("./960488.js"),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk736653 = require("./736653.js"),
  Chunk975807 = require("./975807.js"),
  Chunk151252 = require("./151252.js"),
  Chunk954571 = require("./954571.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk579473 = require("./579473.js"),
  Chunk590202 = require("./590202.js"),
  Chunk415441 = require("./415441.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk794053 = require("./794053.js");

function N(e) {
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

function T(e, t) {
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

function j(e) {
  let {
    assetImage: t,
    assetVideo: n
  } = e;
  return null == n ? (0, r.jsxs)("div", {
    className: C.Tv,
    children: [(0, r.jsx)("div", {
      className: C.Np
    }), (0, r.jsx)("div", {
      className: C.LO,
      children: (0, r.jsx)("img", {
        className: C.LY,
        src: t.url,
        alt: t.altText
      })
    }), (0, r.jsx)("div", {
      className: a()(C.LO, C.jx, C.hw),
      children: (0, r.jsx)("img", {
        className: C.LY,
        src: t.url,
        alt: ""
      })
    }), (0, r.jsx)("div", {
      className: a()(C.LO, C.jx, C.Co),
      children: (0, r.jsx)("img", {
        className: C.LY,
        src: t.url,
        alt: ""
      })
    })]
  }) : (0, r.jsxs)("div", {
    className: C.Tv,
    children: [(0, r.jsx)("div", {
      className: C.Np
    }), (0, r.jsx)("div", {
      className: C.LO,
      children: (0, r.jsx)(E.N, {
        showImage: false,
        showVideo: true,
        imageAsset: {
          alt: n.altText,
          className: C.LY,
          asset: {
            url: t.url,
            mimetype: (0, _.vm)(t.url),
            isAnimated: false
          },
          assetId: t.url
        },
        videoAsset: {
          alt: n.altText,
          className: C.LY,
          asset: {
            url: n.url,
            mimetype: (0, _.vm)(n.url),
            isAnimated: true
          },
          assetId: n.url
        }
      })
    })]
  })
}

function x(e) {
  let {
    config: t,
    onQuestCtaClick: n
  } = e, l = (0, s.zy)(), _ = (0, s.W6)(), {
    enabled: E
  } = (0, g.Z)({
    location: y.rE.QUEST_HOME_DESKTOP
  }), x = (0, p.Ay)(), [P, w] = i.useState("display-lg"), L = i.useCallback(e => {
    e.contentRect.width < 500 ? w("display-md") : w("display-lg")
  }, []), R = (0, d.w)(L, [], {
    fireOnMount: true
  }), D = (0, c.bG)([m.A], () => m.A.quests);
  return i.useEffect(() => {
    f.default.track(I.HAw.QUEST_CONTENT_VIEWED, T(N({}, (0, b.fF)(A.uF.QUEST_HOME_TAKEOVER)), {
      quest_id: t.campaignId,
      is_targeted: false
    }))
  }, [t.campaignId]), (0, r.jsx)("div", {
    className: a()(C.iE, {
      "theme-dark": x === v.NJ.LIGHT,
      [C.Qx]: !E
    }),
    ref: R,
    children: (0, r.jsxs)("div", {
      className: C.FG,
      children: [(0, r.jsxs)(u.BJc, {
        className: C.Qs,
        direction: "vertical",
        justify: "space-between",
        children: [(0, r.jsxs)(u.BJc, {
          direction: "horizontal",
          justify: "space-between",
          align: "start",
          children: [(0, r.jsx)("img", {
            src: t.assetSponsorImage.url,
            alt: t.assetSponsorImage.altText,
            className: C.wm
          }), (0, r.jsx)(u.Text, {
            color: "text-strong",
            variant: "text-sm/normal",
            className: C.yu,
            children: S.intl.string(S.t.OJjFi5)
          })]
        }), (0, r.jsxs)(u.BJc, {
          className: C.yp,
          gap: 16,
          children: [(0, r.jsxs)(u.BJc, {
            gap: 8,
            children: [(0, r.jsx)(u.Heading, {
              color: "text-strong",
              variant: P,
              className: C.DD,
              children: t.labelTitle
            }), (0, r.jsx)(u.Text, {
              color: "text-strong",
              variant: "text-md/normal",
              className: C.VA,
              children: t.labelSubtitle
            })]
          }), (0, r.jsxs)(u.ButtonGroup, {
            children: [(0, r.jsx)(u.Button, {
              onClick: () => {
                (0, h.A)(t.ctaSponsorUrl.url), f.default.track(I.HAw.QUEST_CONTENT_CLICKED, N({
                  quest_id: t.campaignId,
                  cta_name: b.Cy.OPEN_GAME_LINK,
                  click_id: (0, o.A)(),
                  is_targeted: false
                }, (0, b.fF)(A.uF.QUEST_HOME_TAKEOVER)))
              },
              size: "md",
              text: t.ctaSponsorUrl.title,
              variant: "overlay-primary"
            }), t.ctaQuests.map((e, i) => D.has(e.questId) ? (0, r.jsx)(u.Button, {
              onClick: () => {
                _.replace(T(N({}, l), {
                  hash: true
                })), null == n || n(), window.requestIdleCallback(() => {
                  (0, O.navigateToQuestHome)({
                    questId: e.questId
                  })
                }), f.default.track(I.HAw.QUEST_CONTENT_CLICKED, N({
                  quest_id: t.campaignId,
                  cta_name: b.Cy.VIEW_QUESTS,
                  click_id: (0, o.A)(),
                  is_targeted: false
                }, (0, b.fF)(A.uF.QUEST_HOME_TAKEOVER)))
              },
              size: "md",
              text: e.title,
              variant: "color-mix"
            }, i) : null)]
          })]
        })]
      }), (0, r.jsx)(j, {
        assetImage: t.assetHeroImage,
        assetVideo: t.assetHeroVideo
      })]
    })
  })
}

function P() {
  return (0, r.jsx)("div", {
    className: a()(C.iE, C.FG, C.B3),
    children: (0, r.jsx)(u.y$y, {})
  })
}