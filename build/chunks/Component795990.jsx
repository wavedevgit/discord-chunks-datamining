/** Chunk was on 76708 **/
/** chunk id: 795990, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function g(e) {
  let {
    widgetType: t
  } = e, n = t === l.l.FAVORITE_GAMES ? c.LM.BALDURS_GATE_3 : c.LM.CYBERPUNK_2077, {
    coverImageUrl: i,
    localizedName: o
  } = (0, a.$)(n);
  return (0, r.jsxs)("div", {
    className: m.placeholderDetailCard,
    children: [(0, r.jsx)("div", {
      className: m.placeholderCover,
      children: null != i && "" !== i ? (0, r.jsx)("img", {
        src: i,
        alt: null != o ? o : "",
        className: m.placeholderGameImage
      }) : (0, r.jsx)("div", {
        className: m.placeholderGameFallback
      })
    }), (0, r.jsxs)("div", {
      className: m.placeholderText,
      children: [(0, r.jsx)("div", {
        className: m.placeholderBar
      }), (0, r.jsx)("div", {
        className: m.placeholderBar
      })]
    })]
  })
}

function b(e) {
  let {
    widgetType: t
  } = e, n = t === l.l.WANT_TO_PLAY_GAMES ? [c.LM.ROBLOX, c.LM.VALORANT, c.LM.LEAGUE_OF_LEGENDS] : [c.LM.ZENLESS_ZONE_ZERO, c.LM.ELDEN_RING, c.LM.RED_DEAD_REDEMPTION_2];
  return (0, r.jsx)("div", {
    className: m.placeholderCoverGrid,
    children: n.map((e, t) => (0, r.jsx)(j, {
      applicationId: e
    }, t))
  })
}

function j(e) {
  let {
    applicationId: t
  } = e, {
    coverImageUrl: n,
    localizedName: i
  } = (0, a.$)(t);
  return (0, r.jsx)("div", {
    className: m.placeholderCoverItem,
    children: null != n && "" !== n ? (0, r.jsx)("img", {
      src: n,
      alt: null != i ? i : "",
      className: m.placeholderGameImage
    }) : (0, r.jsx)("div", {
      className: m.placeholderGameFallback
    })
  })
}

function y(e) {
  let {
    widgetType: t
  } = e, n = i.useCallback(() => {
    (0, s.qH)(t), (0, d.L$)(u.qb.WIDGET_ADDED)
  }, [t]);
  return (0, r.jsxs)(o.P3F, {
    className: m.widgetPromptContainer,
    onClick: n,
    "aria-label": "Add widget: ".concat(p.intl.string(f.N[t])),
    children: [(() => {
      switch (t) {
        case l.l.FAVORITE_GAMES:
        case l.l.CURRENT_GAMES:
          return (0, r.jsx)(g, {
            widgetType: t
          });
        case l.l.WANT_TO_PLAY_GAMES:
        case l.l.PLAYED_GAMES:
          return (0, r.jsx)(b, {
            widgetType: t
          });
        default:
          return null
      }
    })(), (0, r.jsxs)("div", {
      className: m.widgetPromptOverlay,
      children: [(0, r.jsx)("div", {
        className: m.addButton,
        children: (0, r.jsx)(o.oFk, {
          size: "md",
          color: "currentColor"
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: p.intl.string(f.N[t])
      })]
    })]
  })
}

function O() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk958461.empty,
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk958461.textContainer,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t.oqalCw)
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.O9SQ1d)
      })]
    }), (0, Chunk255367.jsx)("ul", {
      className: Chunk958461.widgetGrid,
      "aria-label": Chunk388032.intl.string(Chunk388032.t["+EIBSE"]),
      children: Chunk247397.r.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(y, {
          widgetType: e
        })
      }, e))
    })]
  })
}