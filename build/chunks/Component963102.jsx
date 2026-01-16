/** Chunk was on 45620 **/
/** chunk id: 963102, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => B
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk636977 = require("./636977.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk410030 = require("./410030.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk984370 = require("./984370.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk507808 = require("./507808.js"),
  Chunk825102 = require("./825102.js"),
  Chunk775451 = require("./775451.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk763941 = require("./763941.js"),
  Chunk501431 = require("./501431.js"),
  Chunk554067 = require("./554067.jsx"),
  Chunk856908 = require("./856908.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk741764 = require("./741764.js"),
  Chunk921944 = require("./921944.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk379398 = require("./379398.js");

function B(e) {
  let {
    selectedTab: t,
    handleTransition: n
  } = e, a = (0, f.ZP)(), B = (0, o.e7)([v.default], () => v.default.getCurrentUser()), {
    enabled: N
  } = (0, C.W)({
    location: "collectibles_shop_header_bar"
  }), {
    searchQuery: R
  } = (0, S.S)(), P = l.useRef(null), [w, Z] = l.useState(false);
  (0, d.s)(P, l.useCallback(e => {
    Z(e.contentRect.width < k.J)
  }, []));
  let D = (0, x.Pc)("CollectiblesShopHeaderBar"),
    M = D ? [c.z.ORB_RENTAL_NEW_BADGE] : [],
    [H, F] = (0, g.US)(M),
    W = D && H === c.z.ORB_RENTAL_NEW_BADGE;
  l.useEffect(() => () => {
    W && F(T.L.USER_DISMISS)
  }, [W, F]);
  let U = l.useMemo(() => [{
      tab: y.AW.HOME,
      label: L.intl.string(L.t.ijDDwz)
    }, {
      tab: y.AW.CATALOG,
      label: L.intl.string(L.t.Ah5sJo),
      hasSubmenu: true
    }, ...N ? [{
      tab: y.AW.ORBS,
      label: L.intl.string(L.t.EBYkzk)
    }] : []], [N]),
    z = t === y.AW.ORBS ? j.ZY5.SHOP_ORBS_TAB : j.ZY5.COLLECTIBLES_SHOP,
    V = l.useCallback(() => {
      (0, h.Y)({
        pageType: z,
        sectionType: j.jXE.ORBS_BALANCE_MENU,
        ctaObject: j.qAy.CTA_TO_QUEST_HOME
      }), (0, p.navigateToQuestHome)({
        fromContent: i.j.ORBS_BALANCE_MENU
      })
    }, [z]),
    G = l.useCallback(() => {
      (null == B ? true : B.id) != null && (0, m.openUserProfileModal)({
        userId: B.id,
        tabSection: I.oh.WISHLIST,
        showGuildProfile: false
      })
    }, [null == B ? true : B.id]),
    K = l.useCallback(e => {
      n(e), e === y.AW.ORBS && W && F(T.L.USER_DISMISS)
    }, [n, W, F]);
  return (0, r.jsx)(u.f6W, {
    theme: a,
    children: e => (0, r.jsx)("div", {
      ref: P,
      children: (0, r.jsxs)(b.Z, {
        disableDoubleClick: true,
        className: s()(e, A.headerBar),
        innerClassname: N ? A.headerBarInner : true,
        children: [(0, r.jsx)(u.P3F, {
          className: A.shopHomeLink,
          onClick: () => n(y.AW.HOME),
          "aria-label": L.intl.string(L.t.pWG4ze) + " home",
          children: (0, r.jsx)(u.EOn, {
            size: "md",
            color: u.TVs.colors.TEXT_DEFAULT
          })
        }), (0, r.jsx)(_.Z, {
          tabs: U,
          selectedTab: t,
          onTabSelect: K,
          showOrbRentalNewBadge: W
        }), (0, r.jsxs)("div", {
          className: A.alignedRightContent,
          children: [(0, r.jsx)(O.Z, {
            handleTransition: n,
            selectedTab: t,
            isNarrow: w,
            hasText: "" !== R
          }), (0, r.jsx)(u.P3F, {
            className: A.wishlistButton,
            onClick: G,
            "aria-label": L.intl.string(L.t["7lZ31J"]),
            children: (0, r.jsx)(u.h_8, {
              size: "xs",
              color: "currentColor"
            })
          }), N && (0, r.jsx)(E.V9, {
            analyticsPage: z,
            cardAlignment: E.V9.CardAlignment.END,
            ctaText: L.intl.string(L.t.VC4Mq0),
            ctaOnClick: V,
            className: A.balanceWidgetMenu
          })]
        })]
      })
    })
  })
}