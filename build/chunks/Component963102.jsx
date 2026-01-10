/** Chunk was on 45620 **/
/** chunk id: 963102, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => N
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
  Chunk567400 = require("./567400.js"),
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

function N(e) {
  let {
    selectedTab: t,
    handleTransition: n
  } = e, a = (0, f.ZP)(), N = (0, o.e7)([S.default], () => S.default.getCurrentUser()), {
    enabled: R
  } = (0, E.W)({
    location: "collectibles_shop_header_bar"
  }), P = (0, m.Y)({
    location: "CollectiblesShopHeaderBar"
  }), {
    searchQuery: w
  } = (0, O.S)(), Z = l.useRef(null), [D, M] = l.useState(false);
  (0, d.s)(Z, l.useCallback(e => {
    M(e.contentRect.width < T.J)
  }, []));
  let H = (0, x.Pc)("CollectiblesShopHeaderBar"),
    F = H ? [c.z.ORB_RENTAL_NEW_BADGE] : [],
    [W, U] = (0, g.US)(F),
    z = H && W === c.z.ORB_RENTAL_NEW_BADGE;
  l.useEffect(() => () => {
    z && U(I.L.USER_DISMISS)
  }, [z, U]);
  let V = l.useMemo(() => [{
      tab: j.AW.HOME,
      label: A.intl.string(A.t.ijDDwz)
    }, {
      tab: j.AW.CATALOG,
      label: A.intl.string(A.t.Ah5sJo),
      hasSubmenu: true
    }, ...R ? [{
      tab: j.AW.ORBS,
      label: A.intl.string(A.t.EBYkzk)
    }] : []], [R]),
    G = t === j.AW.ORBS ? k.ZY5.SHOP_ORBS_TAB : k.ZY5.COLLECTIBLES_SHOP,
    K = l.useCallback(() => {
      (0, C.Y)({
        pageType: G,
        sectionType: k.jXE.ORBS_BALANCE_MENU,
        ctaObject: k.qAy.CTA_TO_QUEST_HOME
      }), (0, p.navigateToQuestHome)({
        fromContent: i.j.ORBS_BALANCE_MENU
      })
    }, [G]),
    Y = l.useCallback(() => {
      (null == N ? true : N.id) != null && (0, h.openUserProfileModal)({
        userId: N.id,
        tabSection: L.oh.WISHLIST,
        showGuildProfile: false
      })
    }, [null == N ? true : N.id]),
    q = l.useCallback(e => {
      n(e), e === j.AW.ORBS && z && U(I.L.USER_DISMISS)
    }, [n, z, U]);
  return (0, r.jsx)(u.f6W, {
    theme: a,
    children: e => (0, r.jsx)("div", {
      ref: Z,
      children: (0, r.jsxs)(b.Z, {
        disableDoubleClick: true,
        className: s()(e, B.headerBar),
        innerClassname: R ? B.headerBarInner : true,
        children: [(0, r.jsx)(u.P3F, {
          className: B.shopHomeLink,
          onClick: () => n(j.AW.HOME),
          "aria-label": A.intl.string(A.t.pWG4ze) + " home",
          children: (0, r.jsx)(u.EOn, {
            size: "md",
            color: u.TVs.colors.TEXT_DEFAULT
          })
        }), (0, r.jsx)(y.Z, {
          tabs: V,
          selectedTab: t,
          onTabSelect: q,
          showOrbRentalNewBadge: z
        }), (0, r.jsxs)("div", {
          className: B.alignedRightContent,
          children: [(0, r.jsx)(_.Z, {
            handleTransition: n,
            selectedTab: t,
            isNarrow: D,
            hasText: "" !== w
          }), P && (0, r.jsx)(u.P3F, {
            className: B.wishlistButton,
            onClick: Y,
            "aria-label": A.intl.string(A.t["7lZ31J"]),
            children: (0, r.jsx)(u.h_8, {
              size: "xs",
              color: "currentColor"
            })
          }), R && (0, r.jsx)(v.V9, {
            analyticsPage: G,
            cardAlignment: v.V9.CardAlignment.END,
            ctaText: A.intl.string(A.t.VC4Mq0),
            ctaOnClick: K,
            className: B.balanceWidgetMenu
          })]
        })]
      })
    })
  })
}