/** Chunk was on 59275 **/
/** chunk id: 155486, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => k
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

function k(e) {
  let {
    selectedTab: t,
    handleTransition: n
  } = e, s = (0, g.Ay)(), k = (0, o.bG)([v.default], () => v.default.getCurrentUser()), {
    enabled: N
  } = (0, h.Z)({
    location: "collectibles_shop_header_bar"
  }), {
    searchQuery: R
  } = (0, A.v)(), P = l.useRef(null), [B, w] = l.useState(false);
  (0, d.g)(P, l.useCallback(e => {
    w(e.contentRect.width < 800)
  }, []));
  let D = (0, C.rR)("CollectiblesShopHeaderBar"),
    M = D ? [c.M.ORB_RENTAL_NEW_BADGE] : [],
    [H, G] = (0, f.kn)(M),
    U = D && H === c.M.ORB_RENTAL_NEW_BADGE;
  l.useEffect(() => () => {
    U && G(j.i.USER_DISMISS)
  }, [U, G]);
  let F = l.useMemo(() => [{
      tab: O.G2.HOME,
      label: L.intl.string(L.t.ijDDwz)
    }, {
      tab: O.G2.CATALOG,
      label: L.intl.string(L.t.Ah5sJo),
      hasSubmenu: true
    }, ...N ? [{
      tab: O.G2.ORBS,
      label: L.intl.string(L.t.EBYkzk)
    }] : []], [N]),
    z = t === O.G2.ORBS ? y.liQ.SHOP_ORBS_TAB : y.liQ.COLLECTIBLES_SHOP,
    V = l.useCallback(() => {
      (0, b.Y)({
        pageType: z,
        sectionType: y.JJy.ORBS_BALANCE_MENU,
        ctaObject: y.ZSU.CTA_TO_QUEST_HOME
      }), (0, p.navigateToQuestHome)({
        fromContent: i.u.ORBS_BALANCE_MENU
      })
    }, [z]),
    K = l.useCallback(() => {
      (null == k ? true : k.id) != null && (0, _.openUserProfileModal)({
        userId: k.id,
        tabSection: T.RP.WISHLIST,
        showGuildProfile: false
      })
    }, [null == k ? true : k.id]),
    W = l.useCallback(e => {
      n(e), e === O.G2.ORBS && U && G(j.i.USER_DISMISS)
    }, [n, U, G]);
  return (0, r.jsx)(u.NPJ, {
    theme: s,
    children: e => (0, r.jsx)("div", {
      ref: P,
      children: (0, r.jsxs)(m.A, {
        disableDoubleClick: true,
        className: a()(e, I.jr),
        innerClassname: N ? I.vi : true,
        children: [(0, r.jsx)(u.DUT, {
          className: I.sU,
          onClick: () => n(O.G2.HOME),
          "aria-label": L.intl.string(L.t.pWG4ze) + " home",
          children: (0, r.jsx)(u.U1X, {
            size: "md",
            color: u.LU0.colors.TEXT_DEFAULT
          })
        }), (0, r.jsx)(S.A, {
          tabs: F,
          selectedTab: t,
          onTabSelect: W,
          showOrbRentalNewBadge: U
        }), (0, r.jsxs)("div", {
          className: I.sZ,
          children: [(0, r.jsx)(x.A, {
            handleTransition: n,
            selectedTab: t,
            isNarrow: B,
            hasText: "" !== R
          }), (0, r.jsx)(u.DUT, {
            className: I.ij,
            onClick: K,
            "aria-label": L.intl.string(L.t["7lZ31J"]),
            children: (0, r.jsx)(u.C3E, {
              size: "xs",
              color: "currentColor"
            })
          }), N && (0, r.jsx)(E.SS, {
            analyticsPage: z,
            cardAlignment: E.SS.CardAlignment.END,
            ctaText: L.intl.string(L.t.VC4Mq0),
            ctaOnClick: V,
            className: I.oz
          })]
        })]
      })
    })
  })
}