/** Chunk was on 59275 **/
/** chunk id: 155486, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk696292 = require("./696292.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk736653 = require("./736653.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk742589 = require("./742589.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk318346 = require("./318346.js"),
  Chunk151252 = require("./151252.js"),
  Chunk142270 = require("./142270.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk379177 = require("./379177.js"),
  Chunk365491 = require("./365491.js"),
  Chunk628979 = require("./628979.jsx"),
  Chunk494573 = require("./494573.jsx"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js");
require("./801416.js");
var Chunk49999 = require("./49999.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk78716 = require("./78716.js");

function N(e) {
  let {
    selectedTab: t,
    handleTransition: l
  } = e, s = (0, f.Ay)(), N = (0, o.bG)([A.default], () => A.default.getCurrentUser()), {
    enabled: k
  } = (0, E.Z)({
    location: "collectibles_shop_header_bar"
  }), {
    searchQuery: R
  } = (0, S.v)(), P = r.useRef(null), [D, w] = r.useState(false);
  (0, d.g)(P, r.useCallback(e => {
    w(e.contentRect.width < 800)
  }, []));
  let B = (0, x.rR)("CollectiblesShopHeaderBar"),
    M = B ? [c.M.ORB_RENTAL_NEW_BADGE] : [],
    [H, G] = (0, b.kn)(M),
    U = B && H === c.M.ORB_RENTAL_NEW_BADGE;
  r.useEffect(() => () => {
    U && G(j.i.USER_DISMISS)
  }, [U, G]);
  let F = r.useMemo(() => [{
      tab: _.G2.HOME,
      label: T.intl.string(T.t.ijDDwz)
    }, {
      tab: _.G2.CATALOG,
      label: T.intl.string(T.t.Ah5sJo),
      hasSubmenu: true
    }, ...k ? [{
      tab: _.G2.ORBS,
      label: T.intl.string(T.t.EBYkzk)
    }] : []], [k]),
    z = t === _.G2.ORBS ? y.liQ.SHOP_ORBS_TAB : y.liQ.COLLECTIBLES_SHOP,
    V = r.useCallback(() => {
      (0, h.Y)({
        pageType: z,
        sectionType: y.JJy.ORBS_BALANCE_MENU,
        ctaObject: y.ZSU.CTA_TO_QUEST_HOME
      }), (0, m.navigateToQuestHome)({
        fromContent: i.u.ORBS_BALANCE_MENU
      })
    }, [z]),
    K = r.useCallback(() => {
      (null == N ? true : N.id) != null && (0, p.openUserProfileModal)({
        userId: N.id,
        tabSection: L.RP.WISHLIST,
        showGuildProfile: false
      })
    }, [null == N ? true : N.id]),
    W = r.useCallback(e => {
      l(e), e === _.G2.ORBS && U && G(j.i.USER_DISMISS)
    }, [l, U, G]);
  return (0, n.jsx)(u.NPJ, {
    theme: s,
    children: e => (0, n.jsx)("div", {
      ref: P,
      children: (0, n.jsxs)(g.A, {
        disableDoubleClick: true,
        className: a()(e, I.jr),
        innerClassname: k ? I.vi : true,
        children: [(0, n.jsx)(u.DUT, {
          className: I.sU,
          onClick: () => l(_.G2.HOME),
          "aria-label": T.intl.string(T.t.pWG4ze) + " home",
          children: (0, n.jsx)(u.U1X, {
            size: "md",
            color: u.LU0.colors.TEXT_DEFAULT
          })
        }), (0, n.jsx)(O.A, {
          tabs: F,
          selectedTab: t,
          onTabSelect: W,
          showOrbRentalNewBadge: U
        }), (0, n.jsxs)("div", {
          className: I.sZ,
          children: [(0, n.jsx)(C.A, {
            handleTransition: l,
            selectedTab: t,
            isNarrow: D,
            hasText: "" !== R
          }), (0, n.jsx)(u.DUT, {
            className: I.ij,
            onClick: K,
            "aria-label": T.intl.string(T.t["7lZ31J"]),
            children: (0, n.jsx)(u.C3E, {
              size: "xs",
              color: "currentColor"
            })
          }), k && (0, n.jsx)(v.SS, {
            analyticsPage: z,
            cardAlignment: v.SS.CardAlignment.END,
            ctaText: T.intl.string(T.t.VC4Mq0),
            ctaOnClick: V,
            className: I.oz
          })]
        })]
      })
    })
  })
}