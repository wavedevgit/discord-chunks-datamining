/** Chunk was on 27069 **/
/** chunk id: 795990, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210753 = require("./210753.js"),
  Chunk804919 = require("./804919.js"),
  Chunk86419 = require("./86419.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk247397 = require("./247397.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk958461 = require("./958461.js");

function b(e) {
  let {
    widgetType: t
  } = e, r = t === i.l.FAVORITE_GAMES ? c.LM.BALDURS_GATE_3 : c.LM.CYBERPUNK_2077, {
    coverImageUrl: l,
    localizedName: a
  } = (0, o.$)(r);
  return (0, n.jsxs)("div", {
    className: p.placeholderDetailCard,
    children: [(0, n.jsx)("div", {
      className: p.placeholderCover,
      children: null != l && "" !== l ? (0, n.jsx)("img", {
        src: l,
        alt: null != a ? a : "",
        className: p.placeholderGameImage
      }) : (0, n.jsx)("div", {
        className: p.placeholderGameFallback
      })
    }), (0, n.jsxs)("div", {
      className: p.placeholderText,
      children: [(0, n.jsx)("div", {
        className: p.placeholderBar
      }), (0, n.jsx)("div", {
        className: p.placeholderBar
      })]
    })]
  })
}

function O(e) {
  let {
    widgetType: t
  } = e, r = t === i.l.WANT_TO_PLAY_GAMES ? [c.LM.ROBLOX, c.LM.VALORANT, c.LM.LEAGUE_OF_LEGENDS] : [c.LM.ZENLESS_ZONE_ZERO, c.LM.ELDEN_RING, c.LM.RED_DEAD_REDEMPTION_2];
  return (0, n.jsx)("div", {
    className: p.placeholderCoverGrid,
    children: r.map((e, t) => (0, n.jsx)(m, {
      applicationId: e
    }, t))
  })
}

function m(e) {
  let {
    applicationId: t
  } = e, {
    coverImageUrl: r,
    localizedName: l
  } = (0, o.$)(t);
  return (0, n.jsx)("div", {
    className: p.placeholderCoverItem,
    children: null != r && "" !== r ? (0, n.jsx)("img", {
      src: r,
      alt: null != l ? l : "",
      className: p.placeholderGameImage
    }) : (0, n.jsx)("div", {
      className: p.placeholderGameFallback
    })
  })
}

function j(e) {
  let {
    widgetType: t
  } = e, r = l.useCallback(() => {
    (0, s.qH)(t), (0, u.L$)(d.qb.WIDGET_ADDED)
  }, [t]);
  return (0, n.jsxs)(a.P3F, {
    className: p.widgetPromptContainer,
    onClick: r,
    "aria-label": "Add widget: ".concat(g.intl.string(f.NP[t])),
    children: [(() => {
      switch (t) {
        case i.l.FAVORITE_GAMES:
        case i.l.CURRENT_GAMES:
          return (0, n.jsx)(b, {
            widgetType: t
          });
        case i.l.WANT_TO_PLAY_GAMES:
        case i.l.PLAYED_GAMES:
          return (0, n.jsx)(O, {
            widgetType: t
          });
        default:
          return null
      }
    })(), (0, n.jsxs)("div", {
      className: p.widgetPromptOverlay,
      children: [(0, n.jsx)("div", {
        className: p.addButton,
        children: (0, n.jsx)(a.oFk, {
          size: "md",
          color: "currentColor"
        })
      }), (0, n.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: g.intl.string(f.NP[t])
      })]
    })]
  })
}

function y() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk958461.empty,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk958461.textContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t.oqalCw)
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.O9SQ1d)
      })]
    }), (0, Chunk951288.jsx)("ul", {
      className: Chunk958461.widgetGrid,
      "aria-label": Chunk388032.intl.string(Chunk388032.t["+EIBSE"]),
      children: Chunk247397.rR.map(e => (0, n.jsx)("li", {
        children: (0, n.jsx)(j, {
          widgetType: e
        })
      }, e))
    })]
  })
}