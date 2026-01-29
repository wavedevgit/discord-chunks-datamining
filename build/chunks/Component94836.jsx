/** Chunk was on 13530 **/
/** chunk id: 94836, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => u,
  a: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk256905 = require("./256905.jsx"),
  Chunk409626 = require("./409626.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk851822 = require("./851822.js"),
  Chunk351886 = require("./351886.js");

function u(e) {
  let {
    detectedGame: t,
    trackAction: l
  } = e, u = i.useRef(null), m = i.useMemo(() => {
    let e = t.artwork.map(e => ({
      url: e,
      type: "IMAGE"
    }));
    return [...t.screenshots.map(e => ({
      url: e,
      type: "IMAGE"
    })), ...e]
  }, [t.artwork, t.screenshots]), x = m.length > 2;

  function f(e) {
    if (null == u.current) return;
    let t = u.current.getScrollerState().scrollLeft;
    u.current.scrollTo({
      to: t + 280 * e,
      animate: true
    })
  }
  return 0 === m.length ? null : (0, n.jsxs)("div", {
    children: [(0, n.jsx)(a.Heading, {
      className: c.bV,
      variant: "text-md/semibold",
      color: "text-strong",
      children: o.intl.string(o.t.bNdK5x)
    }), (0, n.jsxs)("div", {
      className: x ? d.DA : d.pZ,
      children: [(0, n.jsx)(a.zCo, {
        ref: u,
        className: d.ec,
        orientation: "horizontal",
        children: m.map((e, t) => (0, n.jsx)(a.DUT, {
          className: d.gw,
          focusProps: {
            offset: 4,
            ringClassName: d.jR
          },
          onClick: () => {
            l(s.Ws.ClickImage), (0, r.R)({
              items: m,
              startingIndex: t,
              shouldHideMediaOptions: true,
              location: "GameProfileMedia"
            })
          },
          children: (0, n.jsx)("img", {
            src: e.url,
            className: d.Zm,
            alt: o.intl.formatToPlainString(o.t.COYYrn, {
              game: name
            })
          })
        }, t))
      }), x && (0, n.jsxs)("div", {
        className: d.NA,
        children: [(0, n.jsx)("div", {
          className: d.EJ
        }), (0, n.jsx)(a.DUT, {
          className: d.G9,
          onClick: () => f(false),
          children: (0, n.jsx)(a.rJJ, {
            className: d.UE,
            color: "currentColor"
          })
        }), (0, n.jsx)("div", {
          className: d.Pj
        }), (0, n.jsx)(a.DUT, {
          className: d.G9,
          onClick: () => f(1),
          children: (0, n.jsx)(a.EdP, {
            className: d.UE,
            color: "currentColor"
          })
        })]
      })]
    })]
  })
}

function m(e) {
  let {
    detectedGame: t,
    trackAction: l
  } = e, u = i.useRef(null), m = i.useMemo(() => {
    let e = t.artwork.map(e => ({
      url: e,
      type: "IMAGE"
    }));
    return [...t.screenshots.map(e => ({
      url: e,
      type: "IMAGE"
    })), ...e]
  }, [t.artwork, t.screenshots]), x = m.length > 2;

  function f(e) {
    if (null == u.current) return;
    let t = u.current.getScrollerState().scrollLeft;
    u.current.scrollTo({
      to: t + 280 * e,
      animate: true
    })
  }
  return 0 === m.length ? null : (0, n.jsxs)("div", {
    children: [(0, n.jsx)(a.Heading, {
      className: c.bV,
      variant: "text-md/semibold",
      color: "text-strong",
      children: o.intl.string(o.t.bNdK5x)
    }), (0, n.jsxs)("div", {
      className: x ? d.DA : d.pZ,
      children: [(0, n.jsx)(a.zCo, {
        ref: u,
        className: d.ec,
        orientation: "horizontal",
        children: m.map((e, i) => (0, n.jsx)(a.DUT, {
          className: d.gw,
          focusProps: {
            offset: 4,
            ringClassName: d.jR
          },
          onClick: () => {
            l(s.Ws.ClickImage), (0, r.R)({
              items: m,
              startingIndex: i,
              shouldHideMediaOptions: true,
              location: "GameProfileMedia"
            })
          },
          children: (0, n.jsx)("img", {
            src: e.url,
            className: d.Zm,
            alt: o.intl.formatToPlainString(o.t.COYYrn, {
              game: t.name
            })
          })
        }, i))
      }), x && (0, n.jsxs)("div", {
        className: d.NA,
        children: [(0, n.jsx)("div", {
          className: d.EJ
        }), (0, n.jsx)(a.DUT, {
          className: d.G9,
          onClick: () => f(false),
          children: (0, n.jsx)(a.rJJ, {
            className: d.UE,
            color: "currentColor"
          })
        }), (0, n.jsx)("div", {
          className: d.Pj
        }), (0, n.jsx)(a.DUT, {
          className: d.G9,
          onClick: () => f(1),
          children: (0, n.jsx)(a.EdP, {
            className: d.UE,
            color: "currentColor"
          })
        })]
      })]
    })]
  })
}