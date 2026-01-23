/** Chunk was on 13530 **/
/** chunk id: 94836, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk256905 = require("./256905.jsx"),
  Chunk409626 = require("./409626.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk851822 = require("./851822.js"),
  Chunk351886 = require("./351886.js");

function d(e) {
  let {
    detectedGame: t,
    trackAction: n
  } = e, d = r.useRef(null), m = r.useMemo(() => {
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
  return 0 === m.length ? null : (0, l.jsxs)("div", {
    children: [(0, l.jsx)(i.Heading, {
      className: c.bV,
      variant: "text-md/semibold",
      color: "text-strong",
      children: o.intl.string(o.t.bNdK5x)
    }), (0, l.jsxs)("div", {
      className: f ? u.DA : u.pZ,
      children: [(0, l.jsx)(i.zCo, {
        ref: d,
        className: u.ec,
        orientation: "horizontal",
        children: m.map((e, t) => (0, l.jsx)(i.DUT, {
          className: u.gw,
          focusProps: {
            offset: 4,
            ringClassName: u.jR
          },
          onClick: () => {
            n(s.Ws.ClickImage), (0, a.R)({
              items: m,
              startingIndex: t,
              shouldHideMediaOptions: true,
              location: "GameProfileMedia"
            })
          },
          children: (0, l.jsx)("img", {
            src: e.url,
            className: u.Zm,
            alt: o.intl.formatToPlainString(o.t.COYYrn, {
              game: name
            })
          })
        }, t))
      }), f && (0, l.jsxs)("div", {
        className: u.NA,
        children: [(0, l.jsx)("div", {
          className: u.EJ
        }), (0, l.jsx)(i.DUT, {
          className: u.G9,
          onClick: () => g(false),
          children: (0, l.jsx)(i.rJJ, {
            className: u.UE,
            color: "currentColor"
          })
        }), (0, l.jsx)("div", {
          className: u.Pj
        }), (0, l.jsx)(i.DUT, {
          className: u.G9,
          onClick: () => g(1),
          children: (0, l.jsx)(i.EdP, {
            className: u.UE,
            color: "currentColor"
          })
        })]
      })]
    })]
  })
}