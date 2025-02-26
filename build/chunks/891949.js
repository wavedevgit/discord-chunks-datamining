/** Chunk was on 4493 **/
r.d(t, {
  Z: () => p
}), r(47120);
var n = r(200651),
  a = r(192379),
  i = r(481060),
  o = r(341176),
  l = r(312097),
  s = r(810568),
  c = r(388032),
  u = r(384370),
  d = r(448220);

function p(e) {
  let {
    detectedGame: t,
    trackAction: r
  } = e, p = a.useRef(null), m = a.useMemo(() => {
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
    if (null == p.current) return;
    let t = p.current.getScrollerState().scrollLeft;
    p.current.scrollTo({
      to: t + 280 * e,
      animate: !0
    })
  }
  return 0 === m.length ? null : (0, n.jsxs)("div", {
    children: [(0, n.jsx)(i.X6q, {
      className: u.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: c.NW.string(c.t["bNdK5+"])
    }), (0, n.jsxs)("div", {
      className: f ? d.gameProfileMediaSmall : d.gameProfileMediaLarge,
      children: [(0, n.jsx)(i.xVE, {
        ref: p,
        className: d.imageScroller,
        orientation: "horizontal",
        children: m.map((e, t) => (0, n.jsx)(i.P3F, {
          className: d.imageClickable,
          focusProps: {
            offset: 4,
            ringClassName: d.gameArtworkFocusRing
          },
          onClick: () => {
            r(s.as.ClickImage), (0, l.K)({
              className: d.mediaModal,
              items: m,
              fit: o.D.SCALE_DOWN,
              startingIndex: t,
              shouldHideMediaOptions: !0,
              shouldAnimateCarousel: !0,
              location: "GameProfileMedia"
            })
          },
          children: (0, n.jsx)("img", {
            src: e.url,
            className: d.gameArtwork,
            alt: c.NW.formatToPlainString(c.t.COYYrq, {
              game: name
            })
          })
        }, t))
      }), f && (0, n.jsxs)("div", {
        className: d.mediaOverlay,
        children: [(0, n.jsx)("div", {
          className: d.gradientLeft
        }), (0, n.jsx)(i.P3F, {
          className: d.arrowClickable,
          onClick: () => g(-1),
          children: (0, n.jsx)(i.whL, {
            className: d.arrow,
            color: "currentColor"
          })
        }), (0, n.jsx)("div", {
          className: d.gradientRight
        }), (0, n.jsx)(i.P3F, {
          className: d.arrowClickable,
          onClick: () => g(1),
          children: (0, n.jsx)(i.ZSh, {
            className: d.arrow,
            color: "currentColor"
          })
        })]
      })]
    })]
  })
}