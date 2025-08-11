/** Chunk was on 75708 **/
/** chunk id: 132547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk433811 = require("./433811.js"),
  Chunk214852 = require("./214852.js"),
  Chunk621853 = require("./621853.js"),
  Chunk484459 = require("./484459.js"),
  Chunk626135 = require("./626135.js"),
  Chunk560223 = require("./560223.js"),
  Chunk347475 = require("./347475.js"),
  Chunk342414 = require("./342414.js"),
  Chunk391110 = require("./391110.js"),
  Chunk71363 = require("./71363.jsx"),
  Chunk781800 = require("./781800.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk614729 = require("./614729.js"),
  Chunk865215 = require("./865215.js");
let N = e => {
  let {
    userId: t
  } = e;
  r.useEffect(() => {
    d.Z.wait(async () => {
      null != t && await (0, f.Z)(t)
    })
  }, [t]), (0, g.z)(p.X);
  let n = r.useRef(null),
    s = r.useRef(null),
    [N, y] = r.useState(false),
    {
      analyticsLocations: A
    } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [P, R] = r.useState(false),
    D = (0, l.e7)([h.Z], () => null != t ? h.Z.getUserProfile(t) : null),
    Z = "true" === new URLSearchParams(window.location.search).get("autoScroll");
  return (window.history.replaceState({}, "", window.location.pathname), null == D) ? <div className={a()(T.container, T.loading)}><c.$jN /></div> : <i.Fragment>{<c.yWw className={T.mainPageScroller} ref={n}><div className={T.container}><m.Gt value={A}>{<j.Z className={T.heroHeading} location={E.MQ.HOME} />}{<x.Z variant={E.gM.WHATS_NEW} className={T.whatsNew} noBackground={true} leftAlignHeaders={true} shouldAutoScroll={Z} />}{<x.Z className={T.perksDiscoverability} variant={E.gM.PERKS_DISCOVERABILITY} noBackground={true} leftAlignHeaders={true} showAllPerksButton={(0, i.jsx)(O.Z, {
              setIsAllPerksVisible: y,
              previousComponent: E.MQ.HOME
            })} />}{<_.Z className={T.giftNitro} location={u.Z.PREMIUM_MARKETING_GIFT_SECTION} analyticsLocation={{
              page: v.ZY5.NITRO_HOME,
              section: v.jXE.GIFT_BANNER
            }} />}{<div className={T.footerSpacing} />}{<o.$ innerRef={s} onChange={e => {
              e && !P && (b.default.track(v.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: A
              }), R(true))
            }}><div ref={s} className={T.bottomOfPageVisibilitySensor} /></o.$>}{<img src={I} className={T.bottomIllustration} width={112} height={85} alt={S.intl.string(S.t.X4IxWF)} />}</m.Gt></div></c.yWw>}{<C.Z isAllPerksVisible={N} setIsAllPerksVisible={y} previousComponent={E.MQ.HOME} />}</i.Fragment>
}