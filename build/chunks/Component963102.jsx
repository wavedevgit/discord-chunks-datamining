/** Chunk was on 45620 **/
/** chunk id: 963102, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => R
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function B(e) {
  let {
    tab: t,
    displayText: n,
    selected: l,
    handleTransition: a
  } = e;
  return (0, r.jsx)(C.Z.Title, {
    onClick: () => a(t),
    wrapperClassName: N.tabWrapper,
    className: s()(N.tab, {
      [N.selected]: l
    }),
    children: n
  })
}

function A(e) {
  let {
    tab: t,
    selected: n,
    displayText: a,
    handleTransition: i
  } = e, [o, u] = l.useState(false), d = l.useRef(null), [g, _] = l.useState(0), h = l.useRef(false), m = e => {
    clearTimeout(g), _(setTimeout(() => {
      u(e)
    }, 100)), e && (h.current = f.Z.keyboardModeEnabled)
  }, b = e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), m(true))
  };
  return (0, r.jsx)("div", {
    className: N.tabWithMenuContainer,
    onMouseEnter: () => m(true),
    onMouseLeave: () => m(false),
    children: (0, r.jsx)(c.yRy, {
      targetElementRef: d,
      shouldShow: o,
      position: "bottom",
      align: "left",
      onRequestOpen: () => m(true),
      onRequestClose: () => {
        var e;
        h.current && !f.Z.keyboardModeEnabled && (0, p.Qj)(), m(false), null == (e = d.current) || e.focus()
      },
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(y.Z, {
          handleTransition: i,
          onClose: t
        })
      },
      children: (e, l) => {
        var o, u;
        let {
          isShown: g
        } = l;
        return (0, r.jsx)(C.Z.Title, (o = function(e) {
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
          onClick: () => i(t),
          onKeyDown: b,
          wrapperClassName: N.tabWrapper,
          className: s()(N.tab, {
            [N.selected]: n
          }),
          children: (0, r.jsxs)("span", {
            className: N.tabWithChevron,
            children: [a, g ? (0, r.jsx)(c.u04, {
              size: "sm",
              color: "currentColor"
            }) : (0, r.jsx)(c.CJ0, {
              size: "sm",
              color: "currentColor"
            })]
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(u)).forEach(function(e) {
          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(u, e))
        }), o))
      }
    })
  })
}

function R(e) {
  let {
    isFullScreen: t,
    isLayer: n,
    onClose: a,
    selectedTab: p,
    handleTransition: f
  } = e, y = (0, g.ZP)(), R = (0, o.e7)([v.default], () => v.default.getCurrentUser()), Z = (null == R ? true : R.isStaff()) || (null == R ? true : R.isStaffPersonal()) || false, {
    enabled: w
  } = (0, E.WX)({
    location: "collectibles_shop_header_bar"
  }), F = (0, h.Y)({
    location: "CollectiblesShopHeaderBar"
  }), H = [{
    tab: j.AW.HOME,
    displayText: P.intl.string(P.t.ijDDw8)
  }, {
    tab: j.AW.CATALOG,
    displayText: P.intl.string(P.t.Ah5sJi)
  }];
  w && H.push({
    tab: j.AW.ORBS,
    displayText: P.intl.string(P.t.EBYkzs)
  });
  let M = n ? O.DR : a,
    D = p === j.AW.ORBS ? k.ZY5.SHOP_ORBS_TAB : k.ZY5.COLLECTIBLES_SHOP,
    W = l.useCallback(() => {
      t && (M(), (0, u.Ou)()), (0, b.Y)({
        pageType: D,
        sectionType: k.jXE.ORBS_BALANCE_MENU,
        ctaObject: k.qAy.CTA_TO_QUEST_HOME
      }), (0, _.navigateToQuestHome)({
        fromContent: i.j.ORBS_BALANCE_MENU
      })
    }, [M, t, D]),
    U = (0, T.eN)("collectibles_shop_header_bar"),
    V = l.useCallback(() => {
      (null == R ? true : R.id) != null && (0, m.openUserProfileModal)({
        userId: R.id,
        section: I.oh.WISHLIST,
        showGuildProfile: false
      })
    }, [null == R ? true : R.id]);
  return (0, r.jsx)(c.f6W, {
    theme: y,
    children: e => (0, r.jsxs)(C.Z, {
      disableDoubleClick: true,
      className: s()(e, N.headerBar, {
        [N.fullscreenHeaderBar]: t
      }),
      innerClassname: w ? N.headerBarInner : true,
      toolbar: t || !Z ? null : (0, r.jsx)(l.Fragment, {}),
      children: [(0, r.jsxs)(c.P3F, {
        className: N.shopHomeLink,
        onClick: () => f(j.AW.HOME),
        "aria-label": P.intl.string(P.t.pWG4zc) + " home",
        children: [(0, r.jsx)(x.Z, {
          className: N.discordLogo
        }), (0, r.jsx)(C.Z.Title, {
          children: P.intl.string(P.t.pWG4zc)
        })]
      }), (0, r.jsx)("div", {
        className: N.tabs,
        children: H.map(e => {
          let {
            tab: t,
            displayText: n
          } = e;
          return t === j.AW.CATALOG ? (0, r.jsx)(A, {
            tab: t,
            selected: (0, j.RE)(p) || p === t,
            displayText: n,
            handleTransition: f
          }, t) : (0, r.jsx)(B, {
            tab: t,
            displayText: n,
            selected: p === t,
            handleTransition: f
          }, t)
        })
      }), (w || t || U || F) && (0, r.jsxs)("div", {
        className: N.alignedRightContent,
        children: [U && (0, r.jsx)(L.Z, {
          handleTransition: f,
          selectedTab: p
        }), F && (0, r.jsx)(c.P3F, {
          className: N.wishlistButton,
          onClick: V,
          "aria-label": P.intl.string(P.t["7lZ31N"]),
          children: (0, r.jsx)(c.h_8, {
            size: "xs",
            color: "currentColor"
          })
        }), w && (0, r.jsx)(S.V9, {
          anchorPillType: t ? "SHOP_FULLSCREEN" : "SHOP",
          analyticsPage: D,
          cardAlignment: S.V9.CardAlignment.END,
          ctaText: P.intl.string(P.t.VC4Mq6),
          ctaOnClick: W,
          className: N.balanceWidgetMenu
        }), t && (0, r.jsx)(d.Z, {
          closeAction: M,
          keybind: "ESC"
        })]
      })]
    })
  })
}