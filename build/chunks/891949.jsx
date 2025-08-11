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
  Chunk263930 = require("./263930.js"),
  Chunk301736 = require("./301736.js");

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
  return 0 === m.length ? null : <div>{<i.X6q className={c.sectionHeader} variant={"text-md/semibold"} color={"header-primary"}>{s.intl.string(s.t["bNdK5+"])}</i.X6q>}{<div className={g ? d.gameProfileMediaSmall : d.gameProfileMediaLarge}>{<i.xVE ref={u} className={d.imageScroller} orientation={"horizontal"}>{m.map((e, t) => (0, n.jsx)(i.P3F, {
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
        }, t))}</i.xVE>}{g && <div className={d.mediaOverlay}>{<div className={d.gradientLeft} />}{<i.P3F className={d.arrowClickable} onClick={() => p(false)}><i.whL className={d.arrow} color={"currentColor"} /></i.P3F>}{<div className={d.gradientRight} />}{<i.P3F className={d.arrowClickable} onClick={() => p(1)}><i.ZSh className={d.arrow} color={"currentColor"} /></i.P3F>}</div>}</div>}</div>
}