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
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk736653 = require("./736653.js"),
  Chunk975807 = require("./975807.js"),
  Chunk151252 = require("./151252.js"),
  Chunk954571 = require("./954571.js"),
  Chunk216456 = require("./216456.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk794053 = require("./794053.js");

function S(e) {
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

function C(e, t) {
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

function N(e) {
  let {
    asset: t
  } = e;
  if ("image" === t.assetType) return (0, r.jsxs)("div", {
    className: v.km,
    children: [(0, r.jsx)("div", {
      className: v.Np
    }), (0, r.jsx)("div", {
      className: v.c8,
      children: (0, r.jsx)("img", {
        className: v.Sl,
        src: t.url,
        alt: t.altText
      })
    }), (0, r.jsx)("div", {
      className: a()(v.c8, v.UE, v.gv),
      children: (0, r.jsx)("img", {
        className: v.Sl,
        src: t.url,
        alt: ""
      })
    }), (0, r.jsx)("div", {
      className: a()(v.c8, v.UE, v.nd),
      children: (0, r.jsx)("img", {
        className: v.Sl,
        src: t.url,
        alt: ""
      })
    })]
  })
}

function T(e) {
  let {
    config: t,
    onQuestCtaClick: n
  } = e, l = (0, s.zy)(), T = (0, s.W6)(), {
    enabled: j
  } = (0, g.Z)({
    location: E.rE.QUEST_HOME_DESKTOP
  }), x = (0, p.Ay)(), [P, w] = i.useState("display-lg"), L = i.useCallback(e => {
    e.contentRect.width < 500 ? w("display-md") : w("display-lg")
  }, []), R = (0, d.w)(L, [], {
    fireOnMount: true
  }), D = (0, c.bG)([A.A], () => A.A.quests);
  return i.useEffect(() => {
    f.default.track(O.HAw.QUEST_CONTENT_VIEWED, C(S({}, (0, m.fF)(_.uF.QUEST_HOME_TAKEOVER)), {
      quest_id: t.campaignId,
      is_targeted: false
    }))
  }, [t.campaignId]), (0, r.jsx)("div", {
    className: a()(v.iE, {
      "theme-dark": x === y.NJ.LIGHT,
      [v.Qx]: !j
    }),
    ref: R,
    children: (0, r.jsxs)("div", {
      className: v.FG,
      children: [(0, r.jsxs)(u.BJc, {
        className: v.Qs,
        direction: "vertical",
        justify: "space-between",
        children: [(0, r.jsxs)(u.BJc, {
          direction: "horizontal",
          justify: "space-between",
          align: "start",
          children: [(0, r.jsx)("img", {
            src: t.assetSponsorImage.url,
            alt: t.assetSponsorImage.altText,
            className: v.wm
          }), (0, r.jsx)(u.Text, {
            color: "text-strong",
            variant: "text-sm/normal",
            className: v.yu,
            children: I.intl.string(I.t.OJjFi5)
          })]
        }), (0, r.jsxs)(u.BJc, {
          className: v.yp,
          gap: 16,
          children: [(0, r.jsxs)(u.BJc, {
            gap: 8,
            children: [(0, r.jsx)(u.Heading, {
              color: "text-strong",
              variant: P,
              className: v.DD,
              children: t.labelTitle
            }), (0, r.jsx)(u.Text, {
              color: "text-strong",
              variant: "text-md/normal",
              className: v.VA,
              children: t.labelSubtitle
            })]
          }), (0, r.jsxs)(u.ButtonGroup, {
            children: [(0, r.jsx)(u.Button, {
              onClick: () => {
                (0, h.A)(t.ctaSponsorUrl.url), f.default.track(O.HAw.QUEST_CONTENT_CLICKED, S({
                  quest_id: t.campaignId,
                  cta_name: m.Cy.OPEN_GAME_LINK,
                  click_id: (0, o.A)(),
                  is_targeted: false
                }, (0, m.fF)(_.uF.QUEST_HOME_TAKEOVER)))
              },
              size: "md",
              text: t.ctaSponsorUrl.title,
              variant: "overlay-primary"
            }), t.ctaQuests.map((e, i) => D.has(e.questId) ? (0, r.jsx)(u.Button, {
              onClick: () => {
                T.replace(C(S({}, l), {
                  hash: true
                })), null == n || n(), window.requestIdleCallback(() => {
                  (0, b.navigateToQuestHome)({
                    questId: e.questId
                  })
                }), f.default.track(O.HAw.QUEST_CONTENT_CLICKED, S({
                  quest_id: t.campaignId,
                  cta_name: m.Cy.LEARN_MORE,
                  click_id: (0, o.A)(),
                  is_targeted: false
                }, (0, m.fF)(_.uF.QUEST_HOME_TAKEOVER)))
              },
              size: "md",
              text: e.title,
              variant: "color-mix"
            }, i) : null)]
          })]
        })]
      }), (0, r.jsx)(N, {
        asset: t.assetHeroImage
      })]
    })
  })
}

function j() {
  return (0, r.jsx)("div", {
    className: a()(v.iE, v.FG, v.B3),
    children: (0, r.jsx)(u.y$y, {})
  })
}