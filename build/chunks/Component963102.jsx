/** Chunk was on 45620 **/
/** chunk id: 963102, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => B
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk304742 = require("./304742.jsx"),
  Chunk554067 = require("./554067.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk379398 = require("./379398.js");

function I(e) {
  let {
    tab: t,
    displayText: n,
    selected: l,
    handleTransition: a
  } = e;
  return (0, r.jsx)(g.Z.Title, {
    onClick: () => a(t),
    wrapperClassName: T.tabWrapper,
    className: o()(T.tab, {
      [T.selected]: l
    }),
    children: n
  })
}

function L(e) {
  let {
    tab: t,
    selected: n,
    displayText: a,
    handleTransition: i
  } = e, [s, u] = l.useState(false), p = l.useRef(null), [b, m] = l.useState(0), C = l.useRef(false), h = e => {
    clearTimeout(b), m(setTimeout(() => {
      u(e)
    }, 100)), e && (C.current = f.Z.keyboardModeEnabled)
  }, v = e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), h(true))
  };
  return (0, r.jsx)("div", {
    className: T.tabWithMenuContainer,
    onMouseEnter: () => h(true),
    onMouseLeave: () => h(false),
    children: (0, r.jsx)(c.yRy, {
      targetElementRef: p,
      shouldShow: s,
      position: "bottom",
      align: "left",
      onRequestOpen: () => h(true),
      onRequestClose: () => {
        var e;
        C.current && !f.Z.keyboardModeEnabled && (0, d.Qj)(), h(false), null == (e = p.current) || e.focus()
      },
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(_.Z, {
          handleTransition: i,
          onClose: t
        })
      },
      children: (e, l) => {
        var s, u;
        let {
          isShown: d
        } = l;
        return (0, r.jsx)(g.Z.Title, (s = function(e) {
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
          ref: p,
          onClick: () => i(t),
          onKeyDown: v,
          wrapperClassName: T.tabWrapper,
          className: o()(T.tab, {
            [T.selected]: n
          }),
          children: (0, r.jsxs)("span", {
            className: T.tabWithChevron,
            children: [a, d ? (0, r.jsx)(c.u04, {
              size: "sm",
              color: "currentColor"
            }) : (0, r.jsx)(c.CJ0, {
              size: "sm",
              color: "currentColor"
            })]
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(u)).forEach(function(e) {
          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(u, e))
        }), s))
      }
    })
  })
}

function B(e) {
  let {
    selectedTab: t,
    handleTransition: n
  } = e, a = (0, u.ZP)(), d = (0, s.e7)([E.default], () => E.default.getCurrentUser()), {
    enabled: f
  } = (0, h.W)({
    location: "collectibles_shop_header_bar"
  }), _ = (0, b.Y)({
    location: "CollectiblesShopHeaderBar"
  }), B = [{
    tab: x.AW.HOME,
    displayText: k.intl.string(k.t.ijDDwz)
  }, {
    tab: x.AW.CATALOG,
    displayText: k.intl.string(k.t.Ah5sJo)
  }];
  f && B.push({
    tab: x.AW.ORBS,
    displayText: k.intl.string(k.t.EBYkzk)
  });
  let A = t === x.AW.ORBS ? y.ZY5.SHOP_ORBS_TAB : y.ZY5.COLLECTIBLES_SHOP,
    N = l.useCallback(() => {
      (0, C.Y)({
        pageType: A,
        sectionType: y.jXE.ORBS_BALANCE_MENU,
        ctaObject: y.qAy.CTA_TO_QUEST_HOME
      }), (0, p.navigateToQuestHome)({
        fromContent: i.j.ORBS_BALANCE_MENU
      })
    }, [A]),
    P = l.useCallback(() => {
      (null == d ? true : d.id) != null && (0, m.openUserProfileModal)({
        userId: d.id,
        section: j.oh.WISHLIST,
        showGuildProfile: false
      })
    }, [null == d ? true : d.id]);
  return (0, r.jsx)(c.f6W, {
    theme: a,
    children: e => (0, r.jsxs)(g.Z, {
      disableDoubleClick: true,
      className: o()(e, T.headerBar),
      innerClassname: f ? T.headerBarInner : true,
      children: [(0, r.jsxs)(c.P3F, {
        className: T.shopHomeLink,
        onClick: () => n(x.AW.HOME),
        "aria-label": k.intl.string(k.t.pWG4ze) + " home",
        children: [(0, r.jsx)(S.Z, {
          className: T.discordLogo
        }), (0, r.jsx)(g.Z.Title, {
          children: k.intl.string(k.t.pWG4ze)
        })]
      }), (0, r.jsx)("div", {
        className: T.tabs,
        children: B.map(e => {
          let {
            tab: l,
            displayText: a
          } = e;
          return l === x.AW.CATALOG ? (0, r.jsx)(L, {
            tab: l,
            selected: (0, x.RE)(t) || t === l,
            displayText: a,
            handleTransition: n
          }, l) : (0, r.jsx)(I, {
            tab: l,
            displayText: a,
            selected: t === l,
            handleTransition: n
          }, l)
        })
      }), (0, r.jsxs)("div", {
        className: T.alignedRightContent,
        children: [(0, r.jsx)(O.Z, {
          handleTransition: n,
          selectedTab: t
        }), _ && (0, r.jsx)(c.P3F, {
          className: T.wishlistButton,
          onClick: P,
          "aria-label": k.intl.string(k.t["7lZ31J"]),
          children: (0, r.jsx)(c.h_8, {
            size: "xs",
            color: "currentColor"
          })
        }), f && (0, r.jsx)(v.V9, {
          analyticsPage: A,
          cardAlignment: v.V9.CardAlignment.END,
          ctaText: k.intl.string(k.t.VC4Mq0),
          ctaOnClick: N,
          className: T.balanceWidgetMenu
        })]
      })]
    })
  })
}