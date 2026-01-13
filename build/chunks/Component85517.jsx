/** Chunk was on 1272 **/
/** chunk id: 85517, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j,
  o: () => P
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk828700 = require("./828700.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk410030 = require("./410030.js"),
  Chunk782568 = require("./782568.js"),
  Chunk825102 = require("./825102.js"),
  Chunk626135 = require("./626135.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk550601 = require("./550601.js");

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

function N(e) {
  let {
    asset: t
  } = e;
  if ("image" === t.assetType) return (0, r.jsxs)("div", {
    className: C.heroImageBackground,
    children: [(0, r.jsx)("div", {
      className: C.backgroundOverlay
    }), (0, r.jsx)("div", {
      className: C.heroImage,
      children: (0, r.jsx)("img", {
        className: C.image,
        src: t.url,
        alt: t.altText
      })
    }), (0, r.jsx)("div", {
      className: a()(C.heroImage, C.heroImageBlurred, C.heroImageBlurredB),
      children: (0, r.jsx)("img", {
        className: C.image,
        src: t.url,
        alt: ""
      })
    }), (0, r.jsx)("div", {
      className: a()(C.heroImage, C.heroImageBlurred, C.heroImageBlurredA),
      children: (0, r.jsx)("img", {
        className: C.image,
        src: t.url,
        alt: ""
      })
    })]
  })
}

function j(e) {
  let {
    config: t,
    onQuestCtaClick: n
  } = e, l = (0, o.TH)(), j = (0, o.k6)(), {
    enabled: P
  } = (0, g.W)({
    location: O.dr.QUEST_HOME_DESKTOP
  }), x = (0, p.ZP)(), [Z, A] = i.useState("display-lg"), w = i.useCallback(e => {
    e.contentRect.width < 500 ? A("display-md") : A("display-lg")
  }, []), L = (0, d.y)(w, [], {
    fireOnMount: true
  }), R = (0, c.e7)([b.Z], () => b.Z.quests);
  return i.useEffect(() => {
    h.default.track(v.rMx.QUEST_CONTENT_VIEWED, T(S({}, (0, m.mH)(_.jn.QUEST_HOME_TAKEOVER)), {
      quest_id: t.campaignId,
      is_targeted: false
    }))
  }, [t.campaignId]), (0, r.jsx)("div", {
    className: a()(C.wrapper, {
      "theme-dark": x === I.BR.LIGHT,
      [C.wrapperWithOldDiscoveryHeader]: !P
    }),
    ref: L,
    children: (0, r.jsxs)("div", {
      className: C.contentWrapper,
      children: [(0, r.jsxs)(u.Kqy, {
        className: C.content,
        direction: "vertical",
        justify: "space-between",
        children: [(0, r.jsxs)(u.Kqy, {
          direction: "horizontal",
          justify: "space-between",
          align: "start",
          children: [(0, r.jsx)("img", {
            src: t.assetSponsorImage.url,
            alt: t.assetSponsorImage.altText,
            className: C.logo
          }), (0, r.jsx)(u.Text, {
            color: "text-strong",
            variant: "text-sm/normal",
            className: C.sponsoredTag,
            children: y.intl.string(y.t.OJjFi5)
          })]
        }), (0, r.jsxs)(u.Kqy, {
          className: C.contentBody,
          gap: 16,
          children: [(0, r.jsxs)(u.Kqy, {
            gap: 8,
            children: [(0, r.jsx)(u.Heading, {
              color: "text-strong",
              variant: Z,
              className: C.title,
              children: t.labelTitle
            }), (0, r.jsx)(u.Text, {
              color: "text-strong",
              variant: "text-md/normal",
              className: C.subtitle,
              children: t.labelSubtitle
            })]
          }), (0, r.jsxs)(u.ButtonGroup, {
            children: [(0, r.jsx)(u.Button, {
              onClick: () => {
                (0, f.Z)(t.ctaSponsorUrl.url), h.default.track(v.rMx.QUEST_CONTENT_CLICKED, S({
                  quest_id: t.campaignId,
                  cta_name: m.jZ.OPEN_GAME_LINK,
                  click_id: (0, s.Z)(),
                  is_targeted: false
                }, (0, m.mH)(_.jn.QUEST_HOME_TAKEOVER)))
              },
              size: "md",
              text: t.ctaSponsorUrl.title,
              variant: "overlay-primary"
            }), t.ctaQuests.map((e, i) => R.has(e.questId) ? (0, r.jsx)(u.Button, {
              onClick: () => {
                j.replace(T(S({}, l), {
                  hash: true
                })), null == n || n(), window.requestIdleCallback(() => {
                  (0, E.navigateToQuestHome)({
                    questId: e.questId
                  })
                }), h.default.track(v.rMx.QUEST_CONTENT_CLICKED, S({
                  quest_id: t.campaignId,
                  cta_name: m.jZ.LEARN_MORE,
                  click_id: (0, s.Z)(),
                  is_targeted: false
                }, (0, m.mH)(_.jn.QUEST_HOME_TAKEOVER)))
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

function P() {
  return (0, r.jsx)("div", {
    className: a()(C.wrapper, C.contentWrapper, C.contentWrapperLoading),
    children: (0, r.jsx)(u.$jN, {})
  })
}