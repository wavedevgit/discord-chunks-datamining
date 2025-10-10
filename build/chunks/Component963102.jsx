/** Chunk was on 45620 **/
/** chunk id: 963102, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => R
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk636977 = require("./636977.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk425493 = require("./425493.jsx"),
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
  Chunk335131 = require("./335131.js"),
  Chunk870289 = require("./870289.js"),
  Chunk304742 = require("./304742.jsx"),
  Chunk554067 = require("./554067.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk421200 = require("./421200.js");

function A(e) {
  let {
    tab: t,
    displayText: n,
    selected: l,
    handleTransition: i
  } = e;
  return (0, r.jsx)(C.Z.Title, {
    onClick: () => i(t),
    wrapperClassName: N.tabWrapper,
    className: o()(N.tab, {
      [N.selected]: l
    }),
    children: n
  })
}

function P(e) {
  let {
    tab: t,
    selected: n,
    displayText: i,
    handleTransition: s
  } = e, [a, u] = l.useState(false), d = l.useRef(null), [g, h] = l.useState(0), _ = l.useRef(false), m = e => {
    clearTimeout(g), h(setTimeout(() => {
      u(e)
    }, 100)), e && (_.current = p.Z.keyboardModeEnabled)
  }, b = e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), m(true))
  };
  return (0, r.jsx)("div", {
    className: N.tabWithMenuContainer,
    onMouseEnter: () => m(true),
    onMouseLeave: () => m(false),
    children: (0, r.jsx)(c.yRy, {
      targetElementRef: d,
      shouldShow: a,
      position: "bottom",
      align: "left",
      onRequestOpen: () => m(true),
      onRequestClose: () => {
        var e;
        _.current && !p.Z.keyboardModeEnabled && (0, f.Qj)(), m(false), null == (e = d.current) || e.focus()
      },
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(T.Z, {
          handleTransition: s,
          onClose: t
        })
      },
      children: (e, l) => {
        var a, u;
        let {
          isShown: g
        } = l;
        return (0, r.jsx)(C.Z.Title, (a = function(e) {
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
          ref: d,
          onClick: () => s(t),
          onKeyDown: b,
          wrapperClassName: N.tabWrapper,
          className: o()(N.tab, {
            [N.selected]: n
          }),
          children: (0, r.jsxs)("span", {
            className: N.tabWithChevron,
            children: [i, g ? (0, r.jsx)(c.u04, {
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

function R(e) {
  let {
    isFullScreen: t,
    isLayer: n,
    onClose: i,
    selectedTab: f,
    handleTransition: p
  } = e, T = (0, g.ZP)(), R = (0, a.e7)([v.default], () => v.default.getCurrentUser()), Z = (null == R ? true : R.isStaff()) || (null == R ? true : R.isStaffPersonal()) || false, {
    enabled: w
  } = (0, E.WX)({
    location: "collectibles_shop_header_bar"
  }), H = (0, _.Y)({
    location: "CollectiblesShopHeaderBar"
  }), F = [{
    tab: L.AW.HOME,
    displayText: B.intl.string(B.t.ijDDw8)
  }, {
    tab: L.AW.CATALOG,
    displayText: B.intl.string(B.t.Ah5sJi)
  }];
  w && F.push({
    tab: L.AW.ORBS,
    displayText: B.intl.string(B.t.EBYkzs)
  });
  let D = n ? x.DR : i,
    M = f === L.AW.ORBS ? k.ZY5.SHOP_ORBS_TAB : k.ZY5.COLLECTIBLES_SHOP,
    W = l.useCallback(() => {
      t && (D(), (0, u.Ou)()), (0, b.Y)({
        pageType: M,
        sectionType: k.jXE.ORBS_BALANCE_MENU,
        ctaObject: k.qAy.CTA_TO_QUEST_HOME
      }), (0, h.navigateToQuestHome)({
        fromContent: s.j.ORBS_BALANCE_MENU
      })
    }, [D, t, M]),
    U = (0, y.eN)("collectibles_shop_header_bar"),
    V = l.useCallback(() => {
      (null == R ? true : R.id) != null && (0, m.openUserProfileModal)({
        userId: R.id,
        section: I.oh.WISHLIST,
        showGuildProfile: false
      })
    }, [null == R ? true : R.id]);
  return (0, r.jsx)(c.f6W, {
    theme: T,
    children: e => (0, r.jsxs)(C.Z, {
      disableDoubleClick: true,
      className: o()(e, N.headerBar, {
        [N.fullscreenHeaderBar]: t
      }),
      innerClassname: w ? N.headerBarInner : true,
      toolbar: t || !Z ? null : (0, r.jsx)(l.Fragment, {}),
      children: [(0, r.jsxs)(c.P3F, {
        className: N.shopHomeLink,
        onClick: () => p(L.AW.HOME),
        "aria-label": B.intl.string(B.t.pWG4zc) + " home",
        children: [(0, r.jsx)(O.Z, {
          className: N.discordLogo
        }), (0, r.jsx)(C.Z.Title, {
          children: B.intl.string(B.t.pWG4zc)
        })]
      }), (0, r.jsx)("div", {
        className: N.tabs,
        children: F.map(e => {
          let {
            tab: t,
            displayText: n
          } = e;
          return t === L.AW.CATALOG ? (0, r.jsx)(P, {
            tab: t,
            selected: (0, L.RE)(f) || f === t,
            displayText: n,
            handleTransition: p
          }, t) : (0, r.jsx)(A, {
            tab: t,
            displayText: n,
            selected: f === t,
            handleTransition: p
          }, t)
        })
      }), (w || t || U || H) && (0, r.jsxs)("div", {
        className: N.alignedRightContent,
        children: [U && (0, r.jsx)(j.Z, {
          handleTransition: p,
          selectedTab: f
        }), H && (0, r.jsx)(c.P3F, {
          className: N.wishlistButton,
          onClick: V,
          "aria-label": B.intl.string(B.t["7lZ31N"]),
          children: (0, r.jsx)(c.h_8, {
            size: "xs",
            color: "currentColor"
          })
        }), w && (0, r.jsx)(S.V9, {
          anchorPillType: t ? "SHOP_FULLSCREEN" : "SHOP",
          analyticsPage: M,
          cardAlignment: S.V9.CardAlignment.END,
          ctaText: B.intl.string(B.t.VC4Mq6),
          ctaOnClick: W,
          className: N.balanceWidgetMenu
        }), t && (0, r.jsx)(d.Z, {
          closeAction: D,
          keybind: "ESC"
        })]
      })]
    })
  })
}