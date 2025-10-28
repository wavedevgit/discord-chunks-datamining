/** Chunk was on 45620 **/
/** chunk id: 963102, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => A
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk636977 = require("./636977.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk567400 = require("./567400.js"),
  Chunk892001 = require("./892001.js"),
  Chunk507808 = require("./507808.js"),
  Chunk825102 = require("./825102.js"),
  Chunk775451 = require("./775451.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk471731 = require("./471731.jsx"),
  Chunk870289 = require("./870289.js"),
  Chunk304742 = require("./304742.jsx"),
  Chunk554067 = require("./554067.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk421200 = require("./421200.js");

function L(e) {
  let {
    tab: t,
    displayText: n,
    selected: l,
    handleTransition: i
  } = e;
  return (0, r.jsx)(p.Z.Title, {
    onClick: () => i(t),
    wrapperClassName: I.tabWrapper,
    className: o()(I.tab, {
      [I.selected]: l
    }),
    children: n
  })
}

function B(e) {
  let {
    tab: t,
    selected: n,
    displayText: i,
    handleTransition: s
  } = e, [a, u] = l.useState(false), f = l.useRef(null), [C, h] = l.useState(0), _ = l.useRef(false), m = e => {
    clearTimeout(C), h(setTimeout(() => {
      u(e)
    }, 100)), e && (_.current = g.Z.keyboardModeEnabled)
  }, b = e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), m(true))
  };
  return (0, r.jsx)("div", {
    className: I.tabWithMenuContainer,
    onMouseEnter: () => m(true),
    onMouseLeave: () => m(false),
    children: (0, r.jsx)(c.yRy, {
      targetElementRef: f,
      shouldShow: a,
      position: "bottom",
      align: "left",
      onRequestOpen: () => m(true),
      onRequestClose: () => {
        var e;
        _.current && !g.Z.keyboardModeEnabled && (0, d.Qj)(), m(false), null == (e = f.current) || e.focus()
      },
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(O.Z, {
          handleTransition: s,
          onClose: t
        })
      },
      children: (e, l) => {
        var a, u;
        let {
          isShown: d
        } = l;
        return (0, r.jsx)(p.Z.Title, (a = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, e), u = u = {
          ref: f,
          onClick: () => s(t),
          onKeyDown: b,
          wrapperClassName: I.tabWrapper,
          className: o()(I.tab, {
            [I.selected]: n
          }),
          children: (0, r.jsxs)("span", {
            className: I.tabWithChevron,
            children: [i, d ? (0, r.jsx)(c.u04, {
              size: "sm",
              color: "currentColor"
            }) : (0, r.jsx)(c.CJ0, {
              size: "sm",
              color: "currentColor"
            })]
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(u)).forEach(function(e) {
          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(u, e))
        }), a))
      }
    })
  })
}

function A(e) {
  let {
    selectedTab: t,
    handleTransition: n
  } = e, i = (0, u.ZP)(), d = (0, a.e7)([v.default], () => v.default.getCurrentUser()), {
    enabled: g
  } = (0, m.WX)({
    location: "collectibles_shop_header_bar"
  }), O = (0, C.Y)({
    location: "CollectiblesShopHeaderBar"
  }), A = [{
    tab: y.AW.HOME,
    displayText: T.intl.string(T.t.ijDDwz)
  }, {
    tab: y.AW.CATALOG,
    displayText: T.intl.string(T.t.Ah5sJo)
  }];
  g && A.push({
    tab: y.AW.ORBS,
    displayText: T.intl.string(T.t.EBYkzk)
  });
  let P = t === y.AW.ORBS ? j.ZY5.SHOP_ORBS_TAB : j.ZY5.COLLECTIBLES_SHOP,
    N = l.useCallback(() => {
      (0, _.Y)({
        pageType: P,
        sectionType: j.jXE.ORBS_BALANCE_MENU,
        ctaObject: j.qAy.CTA_TO_QUEST_HOME
      }), (0, f.navigateToQuestHome)({
        fromContent: s.j.ORBS_BALANCE_MENU
      })
    }, [P]),
    R = (0, x.eN)("collectibles_shop_header_bar"),
    Z = l.useCallback(() => {
      (null == d ? true : d.id) != null && (0, h.openUserProfileModal)({
        userId: d.id,
        section: k.oh.WISHLIST,
        showGuildProfile: false
      })
    }, [null == d ? true : d.id]);
  return (0, r.jsx)(c.f6W, {
    theme: i,
    children: e => (0, r.jsxs)(p.Z, {
      disableDoubleClick: true,
      className: o()(e, I.headerBar),
      innerClassname: g ? I.headerBarInner : true,
      children: [(0, r.jsxs)(c.P3F, {
        className: I.shopHomeLink,
        onClick: () => n(y.AW.HOME),
        "aria-label": T.intl.string(T.t.pWG4ze) + " home",
        children: [(0, r.jsx)(E.Z, {
          className: I.discordLogo
        }), (0, r.jsx)(p.Z.Title, {
          children: T.intl.string(T.t.pWG4ze)
        })]
      }), (0, r.jsx)("div", {
        className: I.tabs,
        children: A.map(e => {
          let {
            tab: l,
            displayText: i
          } = e;
          return l === y.AW.CATALOG ? (0, r.jsx)(B, {
            tab: l,
            selected: (0, y.RE)(t) || t === l,
            displayText: i,
            handleTransition: n
          }, l) : (0, r.jsx)(L, {
            tab: l,
            displayText: i,
            selected: t === l,
            handleTransition: n
          }, l)
        })
      }), (g || R || O) && (0, r.jsxs)("div", {
        className: I.alignedRightContent,
        children: [R && (0, r.jsx)(S.Z, {
          handleTransition: n,
          selectedTab: t
        }), O && (0, r.jsx)(c.P3F, {
          className: I.wishlistButton,
          onClick: Z,
          "aria-label": T.intl.string(T.t["7lZ31J"]),
          children: (0, r.jsx)(c.h_8, {
            size: "xs",
            color: "currentColor"
          })
        }), g && (0, r.jsx)(b.V9, {
          analyticsPage: P,
          cardAlignment: b.V9.CardAlignment.END,
          ctaText: T.intl.string(T.t.VC4Mq0),
          ctaOnClick: N,
          className: I.balanceWidgetMenu
        })]
      })]
    })
  })
}