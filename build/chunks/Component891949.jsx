/** Chunk was on 89311 **/
/** chunk id: 891949, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk312097 = require("./312097.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226788 = require("./226788.js"),
  Chunk275914 = require("./275914.js");

function d(e) {
  let {
    detectedGame: t,
    trackAction: r
  } = e, d = a.useRef(null), m = a.useMemo(() => {
    let e = t.artwork.map(e => ({
      url: e,
      type: "IMAGE"
    }));
    return [...t.screenshots.map(e => ({
      url: e,
      type: "IMAGE"
    })), ...e]
  }, [t.artwork, t.screenshots]), f = m.length > 2;

  function g(e) {
    if (null == d.current) return;
    let t = d.current.getScrollerState().scrollLeft;
    d.current.scrollTo({
      to: t + 280 * e,
      animate: true
    })
  }
  return 0 === m.length ? null : (0, n.jsxs)("div", {
    children: [(0, n.jsx)(i.X6q, {
      className: c.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: s.intl.string(s.t["bNdK5+"])
    }), (0, n.jsxs)("div", {
      className: f ? u.gameProfileMediaSmall : u.gameProfileMediaLarge,
      children: [(0, n.jsx)(i.xVE, {
        ref: d,
        className: u.imageScroller,
        orientation: "horizontal",
        children: m.map((e, t) => (0, n.jsx)(i.P3F, {
          className: u.imageClickable,
          focusProps: {
            offset: 4,
            ringClassName: u.gameArtworkFocusRing
          },
          onClick: () => {
            r(o.as.ClickImage), (0, l.K)({
              items: m,
              startingIndex: t,
              shouldHideMediaOptions: true,
              location: "GameProfileMedia"
            })
          },
          children: (0, n.jsx)("img", {
            src: e.url,
            className: u.gameArtwork,
            alt: s.intl.formatToPlainString(s.t.COYYrq, {
              game: name
            })
          })
        }, t))
      }), f && (0, n.jsxs)("div", {
        className: u.mediaOverlay,
        children: [(0, n.jsx)("div", {
          className: u.gradientLeft
        }), (0, n.jsx)(i.P3F, {
          className: u.arrowClickable,
          onClick: () => g(false),
          children: (0, n.jsx)(i.whL, {
            className: u.arrow,
            color: "currentColor"
          })
        }), (0, n.jsx)("div", {
          className: u.gradientRight
        }), (0, n.jsx)(i.P3F, {
          className: u.arrowClickable,
          onClick: () => g(1),
          children: (0, n.jsx)(i.ZSh, {
            className: u.arrow,
            color: "currentColor"
          })
        })]
      })]
    })]
  })
}