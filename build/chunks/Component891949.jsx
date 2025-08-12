/** Chunk was on 89311 **/
/** chunk id: 891949, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk312097 = require("./312097.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk110568 = require("./110568.js"),
  Chunk995512 = require("./995512.js");

function u(e) {
  let {
    detectedGame: t,
    trackAction: r
  } = e, u = a.useRef(null), m = a.useMemo(() => {
    let e = t.artwork.map(e => ({
      url: e,
      type: "IMAGE"
    }));
    return [...t.screenshots.map(e => ({
      url: e,
      type: "IMAGE"
    })), ...e]
  }, [t.artwork, t.screenshots]), g = m.length > 2;

  function p(e) {
    if (null == u.current) return;
    let t = u.current.getScrollerState().scrollLeft;
    u.current.scrollTo({
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
      className: g ? d.gameProfileMediaSmall : d.gameProfileMediaLarge,
      children: [(0, n.jsx)(i.xVE, {
        ref: u,
        className: d.imageScroller,
        orientation: "horizontal",
        children: m.map((e, t) => (0, n.jsx)(i.P3F, {
          className: d.imageClickable,
          focusProps: {
            offset: 4,
            ringClassName: d.gameArtworkFocusRing
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
            className: d.gameArtwork,
            alt: s.intl.formatToPlainString(s.t.COYYrq, {
              game: name
            })
          })
        }, t))
      }), g && (0, n.jsxs)("div", {
        className: d.mediaOverlay,
        children: [(0, n.jsx)("div", {
          className: d.gradientLeft
        }), (0, n.jsx)(i.P3F, {
          className: d.arrowClickable,
          onClick: () => p(false),
          children: (0, n.jsx)(i.whL, {
            className: d.arrow,
            color: "currentColor"
          })
        }), (0, n.jsx)("div", {
          className: d.gradientRight
        }), (0, n.jsx)(i.P3F, {
          className: d.arrowClickable,
          onClick: () => p(1),
          children: (0, n.jsx)(i.ZSh, {
            className: d.arrow,
            color: "currentColor"
          })
        })]
      })]
    })]
  })
}