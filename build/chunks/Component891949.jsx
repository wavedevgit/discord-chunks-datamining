/** Chunk was on 89311 **/
/** chunk id: 891949, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk312097 = require("./312097.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226788 = require("./226788.js"),
  Chunk275914 = require("./275914.js");

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
  }, [t.artwork, t.screenshots]), g = m.length > 2;

  function f(e) {
    if (null == u.current) return;
    let t = u.current.getScrollerState().scrollLeft;
    u.current.scrollTo({
      to: t + 280 * e,
      animate: true
    })
  }
  return 0 === m.length ? null : (0, a.jsxs)("div", {
    children: [(0, a.jsx)(r.Heading, {
      className: c.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: s.intl.string(s.t.bNdK5x)
    }), (0, a.jsxs)("div", {
      className: g ? d.gameProfileMediaSmall : d.gameProfileMediaLarge,
      children: [(0, a.jsx)(r.xVE, {
        ref: u,
        className: d.imageScroller,
        orientation: "horizontal",
        children: m.map((e, t) => (0, a.jsx)(r.P3F, {
          className: d.imageClickable,
          focusProps: {
            offset: 4,
            ringClassName: d.gameArtworkFocusRing
          },
          onClick: () => {
            n(o.as.ClickImage), (0, l.K)({
              items: m,
              startingIndex: t,
              shouldHideMediaOptions: true,
              location: "GameProfileMedia"
            })
          },
          children: (0, a.jsx)("img", {
            src: e.url,
            className: d.gameArtwork,
            alt: s.intl.formatToPlainString(s.t.COYYrn, {
              game: name
            })
          })
        }, t))
      }), g && (0, a.jsxs)("div", {
        className: d.mediaOverlay,
        children: [(0, a.jsx)("div", {
          className: d.gradientLeft
        }), (0, a.jsx)(r.P3F, {
          className: d.arrowClickable,
          onClick: () => f(false),
          children: (0, a.jsx)(r.whL, {
            className: d.arrow,
            color: "currentColor"
          })
        }), (0, a.jsx)("div", {
          className: d.gradientRight
        }), (0, a.jsx)(r.P3F, {
          className: d.arrowClickable,
          onClick: () => f(1),
          children: (0, a.jsx)(r.ZSh, {
            className: d.arrow,
            color: "currentColor"
          })
        })]
      })]
    })]
  })
}