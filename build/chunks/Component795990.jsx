/** Chunk was on 11776 **/
/** chunk id: 795990, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210753 = require("./210753.js"),
  Chunk86419 = require("./86419.js"),
  Chunk247397 = require("./247397.js"),
  Chunk570911 = require("./570911.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk436860 = require("./436860.js");

function m(e) {
  let {
    widgetType: t
  } = e, n = t === i.l.FAVORITE_GAMES ? d.J6["23"] : d.J6["58"], {
    coverImageUrl: l,
    localizedName: o
  } = (0, a.$)(n);
  return (0, r.jsxs)("div", {
    className: f.placeholderDetailCard,
    children: [(0, r.jsx)("div", {
      className: f.placeholderCover,
      children: null != l && "" !== l ? (0, r.jsx)("img", {
        src: l,
        alt: null != o ? o : "Game cover",
        className: f.placeholderGameImage
      }) : (0, r.jsx)("div", {
        className: f.placeholderGameFallback
      })
    }), (0, r.jsxs)("div", {
      className: f.placeholderText,
      children: [(0, r.jsx)("div", {
        className: f.placeholderBar
      }), (0, r.jsx)("div", {
        className: f.placeholderBar
      })]
    })]
  })
}

function p(e) {
  let {
    widgetType: t
  } = e, n = t === i.l.WANT_TO_PLAY_GAMES ? [d.J6["0"], d.J6["1"], d.J6["2"]] : [d.J6["20"], d.J6["35"], d.J6["42"]];
  return (0, r.jsx)("div", {
    className: f.placeholderCoverGrid,
    children: n.map((e, t) => (0, r.jsx)(g, {
      applicationId: e
    }, t))
  })
}

function g(e) {
  let {
    applicationId: t
  } = e, {
    coverImageUrl: n,
    localizedName: l
  } = (0, a.$)(t);
  return (0, r.jsx)("div", {
    className: f.placeholderCoverItem,
    children: null != n && "" !== n ? (0, r.jsx)("img", {
      src: n,
      alt: null != l ? l : "Game cover",
      className: f.placeholderGameImage
    }) : (0, r.jsx)("div", {
      className: f.placeholderGameFallback
    })
  })
}

function b(e) {
  let {
    widgetType: t
  } = e, n = l.useCallback(() => {
    (0, c.qH)(t)
  }, [t]);
  return (0, r.jsxs)(o.P3F, {
    className: f.widgetPromptContainer,
    onClick: n,
    "aria-label": "Add widget: ".concat(u.intl.string(s.NP[t])),
    children: [(() => {
      switch (t) {
        case i.l.FAVORITE_GAMES:
        case i.l.CURRENT_GAMES:
          return (0, r.jsx)(m, {
            widgetType: t
          });
        case i.l.WANT_TO_PLAY_GAMES:
        case i.l.PLAYED_GAMES:
          return (0, r.jsx)(p, {
            widgetType: t
          });
        default:
          return null
      }
    })(), (0, r.jsxs)("div", {
      className: f.widgetPromptOverlay,
      children: [(0, r.jsx)("div", {
        className: f.addButton,
        children: (0, r.jsx)(o.oFk, {
          size: "md",
          color: "currentColor"
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: u.intl.string(s.NP[t])
      })]
    })]
  })
}

function j() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk436860.empty,
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk436860.textContainer,
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
      className: Chunk436860.widgetGrid,
      "aria-label": "Widget options",
      children: Chunk247397.rR.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(b, {
          widgetType: e
        })
      }, e))
    })]
  })
}