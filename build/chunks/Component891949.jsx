/** Chunk was on 89311 **/
/** chunk id: 891949, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk312097 = require("./312097.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226788 = require("./226788.js"),
  Chunk275914 = require("./275914.js");

function d(e) {
  let {
    detectedGame: t,
    trackAction: n
  } = e, d = i.useRef(null), m = i.useMemo(() => {
    let e = t.artwork.map(e => ({
      url: e,
      type: "IMAGE"
    }));
    return [...t.screenshots.map(e => ({
      url: e,
      type: "IMAGE"
    })), ...e]
  }, [t.artwork, t.screenshots]), p = m.length > 2;

  function f(e) {
    if (null == d.current) return;
    let t = d.current.getScrollerState().scrollLeft;
    d.current.scrollTo({
      to: t + 280 * e,
      animate: true
    })
  }
  return 0 === m.length ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(l.X6q, {
      className: c.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: o.intl.string(o.t["bNdK5+"])
    }), (0, r.jsxs)("div", {
      className: p ? u.gameProfileMediaSmall : u.gameProfileMediaLarge,
      children: [(0, r.jsx)(l.xVE, {
        ref: d,
        className: u.imageScroller,
        orientation: "horizontal",
        children: m.map((e, t) => (0, r.jsx)(l.P3F, {
          className: u.imageClickable,
          focusProps: {
            offset: 4,
            ringClassName: u.gameArtworkFocusRing
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
            className: u.gameArtwork,
            alt: o.intl.formatToPlainString(o.t.COYYrq, {
              game: name
            })
          })
        }, t))
      }), p && (0, r.jsxs)("div", {
        className: u.mediaOverlay,
        children: [(0, r.jsx)("div", {
          className: u.gradientLeft
        }), (0, r.jsx)(l.P3F, {
          className: u.arrowClickable,
          onClick: () => f(false),
          children: (0, r.jsx)(l.whL, {
            className: u.arrow,
            color: "currentColor"
          })
        }), (0, r.jsx)("div", {
          className: u.gradientRight
        }), (0, r.jsx)(l.P3F, {
          className: u.arrowClickable,
          onClick: () => f(1),
          children: (0, r.jsx)(l.ZSh, {
            className: u.arrow,
            color: "currentColor"
          })
        })]
      })]
    })]
  })
}