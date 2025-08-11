/** Chunk was on 75708 **/
/** chunk id: 71363, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk975298 = require("./975298.js"),
  Chunk626135 = require("./626135.js"),
  Chunk695349 = require("./695349.js"),
  Chunk103433 = require("./103433.js"),
  Chunk166021 = require("./166021.js"),
  Chunk22189 = require("./22189.jsx"),
  Chunk391110 = require("./391110.js"),
  Chunk75077 = require("./75077.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk614729 = require("./614729.js"),
  Chunk865215 = require("./865215.js");
let S = e => {
  let t, n, {
      isAllPerksVisible: s,
      setIsAllPerksVisible: S,
      previousComponent: T
    } = e,
    I = r.useRef(null),
    N = r.useRef(null),
    y = Object.entries((0, x.Z)()).reduce((e, t) => {
      let [n, i] = t;
      returnfalse !== i.canReveal && "upcomingDropUntimed" !== i.name && (e[n] = i), e
    }, {}),
    {
      analyticsLocations: A
    } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [P, R] = r.useState(false),
    D = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
    Z = (0, j.mN)(),
    {
      fractionalState: w
    } = (0, p.Z)(),
    k = (0, h.W)();
  return Z ? (t = C.intl.string(C.t["+vt7w8"]), n = C.intl.string(C.t.LgHbnJ)) : (t = C.intl.string(C.t.LgHbnJ), n = C.intl.string(C.t["+vt7w8"])), <c.yWw className={a()(O.allPerksScroller, {
      [O.open]: s,
      [O.openCloseReduceMotion]: D
    })} ref={I}><div className={O.container}><m.Gt value={A}>{<f.Z className={O.heroHeading} onBackClick={() => {
            S(false), g.default.track(E.rMx.NITRO_HOME_NAVIGATION, {
              current_component: _.MQ.SEE_ALL,
              next_component: T,
              interaction_component: "Back Button"
            })
          }} />}{<div className={O.column}>{<c.X6q variant={"heading-xxl/extrabold"} color={"header-primary"} className={O.heading}>{t}</c.X6q>}{<b.Z className={O.cardCarousel} cards={(0, j.ZM)({
              perksCards: y,
              variant: _.gM.CARD_CAROUSEL_FIRST_ROW,
              isPremiumSubscriber: Z,
              hideCardsOnNarrowScreen: true,
              fractionalState: w,
              isInReverseTrial: k
            })} cardType={_.gM.CARD_CAROUSEL_FIRST_ROW} />}{<c.X6q variant={"heading-xxl/extrabold"} color={"header-primary"} className={O.heading}>{n}</c.X6q>}{<b.Z className={O.cardCarousel} cards={(0, j.ZM)({
              perksCards: y,
              variant: _.gM.CARD_CAROUSEL_SECOND_ROW,
              isPremiumSubscriber: Z,
              hideCardsOnNarrowScreen: true,
              fractionalState: w,
              isInReverseTrial: k
            })} cardType={_.gM.CARD_CAROUSEL_SECOND_ROW} />}{<c.X6q variant={"heading-xxl/extrabold"} color={"header-primary"} className={O.heading}>{C.intl.string(C.t.LTaxu7)}</c.X6q>}{<b.Z className={O.cardCarousel} cards={(0, j.ZM)({
              perksCards: y,
              variant: _.gM.CARD_CAROUSEL_THIRD_ROW,
              isPremiumSubscriber: Z,
              hideCardsOnNarrowScreen: true,
              fractionalState: w,
              isInReverseTrial: k
            })} cardType={_.gM.CARD_CAROUSEL_THIRD_ROW} />}</div>}{<div className={O.footerSpacing} />}{<o.$ innerRef={N} onChange={e => {
            e && !P && (g.default.track(E.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: A
            }), R(true))
          }}><div ref={N} className={O.bottomOfPageVisibilitySensor} /></o.$>}{<img src={v} className={O.bottomIllustration} width={112} height={85} alt={C.intl.string(C.t.X4IxWF)} />}</m.Gt></div></c.yWw>
}