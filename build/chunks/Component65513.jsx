/** Chunk was on 21738 **/
/** chunk id: 65513, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T,
  s: () => j
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk960488 = require("./960488.js"),
  Chunk323889 = require("./323889.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk736653 = require("./736653.js"),
  Chunk975807 = require("./975807.js"),
  Chunk151252 = require("./151252.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk579473 = require("./579473.js"),
  Chunk561844 = require("./561844.js"),
  Chunk590202 = require("./590202.js"),
  Chunk415441 = require("./415441.jsx"),
  Chunk73473 = require("./73473.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk794053 = require("./794053.js");

function N(e) {
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
            mimetype: (0, A.vm)(t.url),
            isAnimated: false
          },
          assetId: t.url
        },
        videoAsset: {
          alt: n.altText,
          className: C.LY,
          asset: {
            url: n.url,
            mimetype: (0, A.vm)(n.url),
            isAnimated: true
          },
          assetId: n.url
        }
      })
    })]
  })
}

function T(e) {
  let {
    config: t,
    onQuestCtaClick: n
  } = e, l = (0, s.zy)(), A = (0, s.W6)(), {
    enabled: E
  } = (0, g.Z)({
    location: I.rE.QUEST_HOME_DESKTOP
  }), T = (0, p.Ay)(), [j, x] = i.useState("display-lg"), P = i.useCallback(e => {
    e.contentRect.width < 500 ? x("display-md") : x("display-lg")
  }, []), w = (0, d.w)(P, [], {
    fireOnMount: true
  }), L = (0, c.bG)([f.A], () => f.A.quests);
  return (0, r.jsx)(O.R, {
    adContentId: t.campaignId,
    adCreativeType: o.p.TAKEOVER,
    questContent: m.uF.QUEST_HOME_TAKEOVER,
    sourceQuestContent: m.uF.QUEST_HOME_TAKEOVER,
    children: e => (0, r.jsx)("div", {
      className: a()(C.iE, {
        "theme-dark": T === v.NJ.LIGHT,
        [C.Qx]: !E
      }),
      ref: t => {
        w.current = t, e.current = t
      },
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
                variant: j,
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
                  (0, h.A)(t.ctaSponsorUrl.url), (0, _.vK)({
                    adContentId: t.campaignId,
                    adCreativeType: o.p.TAKEOVER,
                    questContent: m.uF.QUEST_HOME_TAKEOVER,
                    questContentCTA: b.Cy.OPEN_GAME_LINK,
                    sourceQuestContent: m.uF.QUEST_HOME_TAKEOVER
                  })
                },
                size: "md",
                text: t.ctaSponsorUrl.title,
                variant: "overlay-primary"
              }), t.ctaQuests.map((e, i) => L.has(e.questId) ? (0, r.jsx)(u.Button, {
                onClick: () => {
                  var r, i;
                  A.replace((r = function(e) {
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
                  }({}, l), i = i = {
                    hash: true
                  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r)
                    }
                    return n
                  })(Object(i)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
                  }), r)), null == n || n(), window.requestIdleCallback(() => {
                    (0, y.navigateToQuestHome)({
                      questId: e.questId
                    })
                  }), (0, _.vK)({
                    adContentId: t.campaignId,
                    adCreativeType: o.p.TAKEOVER,
                    questContent: m.uF.QUEST_HOME_TAKEOVER,
                    questContentCTA: b.Cy.VIEW_QUESTS,
                    sourceQuestContent: m.uF.QUEST_HOME_TAKEOVER
                  })
                },
                size: "md",
                text: e.title,
                variant: "color-mix"
              }, i) : null)]
            })]
          })]
        }), (0, r.jsx)(N, {
          assetImage: t.assetHeroImage,
          assetVideo: t.assetHeroVideo
        })]
      })
    })
  })
}

function j() {
  return (0, r.jsx)("div", {
    className: a()(C.iE, C.FG, C.B3),
    children: (0, r.jsx)(u.y$y, {})
  })
}