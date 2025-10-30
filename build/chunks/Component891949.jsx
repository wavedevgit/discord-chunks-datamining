/** Chunk was on 89311 **/
/** chunk id: 891949, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk312097 = require("./312097.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk456486 = require("./456486.js"),
  Chunk823117 = require("./823117.js");

function u(e) {
  let {
    detectedGame: t,
    trackAction: n
  } = e, u = i.useRef(null), m = i.useMemo(() => {
    let e = t.artwork.map(e => ({
      url: e,
      type: "IMAGE"
    }));
    return [...t.screenshots.map(e => ({
      url: e,
      type: "IMAGE"
    })), ...e]
  }, [t.artwork, t.screenshots]), f = m.length > 2;

  function p(e) {
    if (null == u.current) return;
    let t = u.current.getScrollerState().scrollLeft;
    u.current.scrollTo({
      to: t + 280 * e,
      animate: true
    })
  }
  return 0 === m.length ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(l.Heading, {
      className: c.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: o.intl.string(o.t.bNdK5x)
    }), (0, r.jsxs)("div", {
      className: f ? d.gameProfileMediaSmall : d.gameProfileMediaLarge,
      children: [(0, r.jsx)(l.xVE, {
        ref: u,
        className: d.imageScroller,
        orientation: "horizontal",
        children: m.map((e, t) => (0, r.jsx)(l.P3F, {
          className: d.imageClickable,
          focusProps: {
            offset: 4,
            ringClassName: d.gameArtworkFocusRing
          },
          onClick: () => {
            n(s.as.ClickImage), (0, a.K)({
              items: m,
              startingIndex: t,
              shouldHideMediaOptions: true,
              location: "GameProfileMedia"
            })
          },
          children: (0, r.jsx)("img", {
            src: e.url,
            className: d.gameArtwork,
            alt: o.intl.formatToPlainString(o.t.COYYrn, {
              game: name
            })
          })
        }, t))
      }), f && (0, r.jsxs)("div", {
        className: d.mediaOverlay,
        children: [(0, r.jsx)("div", {
          className: d.gradientLeft
        }), (0, r.jsx)(l.P3F, {
          className: d.arrowClickable,
          onClick: () => p(false),
          children: (0, r.jsx)(l.whL, {
            className: d.arrow,
            color: "currentColor"
          })
        }), (0, r.jsx)("div", {
          className: d.gradientRight
        }), (0, r.jsx)(l.P3F, {
          className: d.arrowClickable,
          onClick: () => p(1),
          children: (0, r.jsx)(l.ZSh, {
            className: d.arrow,
            color: "currentColor"
          })
        })]
      })]
    })]
  })
}