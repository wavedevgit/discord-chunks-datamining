/** Chunk was on 45620 **/
/** chunk id: 963102, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => N
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
  Chunk388032 = require("./388032.jsx"),
  Chunk421200 = require("./421200.js");

function I(e) {
  let {
    tab: t,
    displayText: n,
    selected: l,
    handleTransition: a
  } = e;
  return (0, r.jsx)(m.Z.Title, {
    onClick: () => a(t),
    wrapperClassName: k.tabWrapper,
    className: s()(k.tab, {
      [k.selected]: l
    }),
    children: n
  })
}

function B(e) {
  let {
    tab: t,
    selected: n,
    displayText: a,
    handleTransition: o
  } = e, [i, u] = l.useState(false), d = l.useRef(null), [g, h] = l.useState(0), _ = l.useRef(false), C = e => {
    clearTimeout(g), h(setTimeout(() => {
      u(e)
    }, 100)), e && (_.current = f.Z.keyboardModeEnabled)
  }, b = e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), C(true))
  };
  return (0, r.jsx)("div", {
    className: k.tabWithMenuContainer,
    onMouseEnter: () => C(true),
    onMouseLeave: () => C(false),
    children: (0, r.jsx)(c.yRy, {
      targetElementRef: d,
      shouldShow: i,
      position: "bottom",
      align: "left",
      onRequestOpen: () => C(true),
      onRequestClose: () => {
        var e;
        _.current && !f.Z.keyboardModeEnabled && (0, p.Qj)(), C(false), null == (e = d.current) || e.focus()
      },
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(v.Z, {
          handleTransition: o,
          onClose: t
        })
      },
      children: (e, l) => {
        var i, u;
        let {
          isShown: g
        } = l;
        return (0, r.jsx)(m.Z.Title, (i = function(e) {
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
          onClick: () => o(t),
          onKeyDown: b,
          wrapperClassName: k.tabWrapper,
          className: s()(k.tab, {
            [k.selected]: n
          }),
          children: (0, r.jsxs)("span", {
            className: k.tabWithChevron,
            children: [a, g ? (0, r.jsx)(c.u04, {
              size: "sm",
              color: "currentColor"
            }) : (0, r.jsx)(c.CJ0, {
              size: "sm",
              color: "currentColor"
            })]
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(u)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(u, e))
        }), i))
      }
    })
  })
}

function N(e) {
  let {
    isFullScreen: t,
    isLayer: n,
    onClose: a,
    selectedTab: p,
    handleTransition: f
  } = e, v = (0, g.ZP)(), N = (0, i.e7)([E.default], () => E.default.getCurrentUser()), P = (null == N ? true : N.isStaff()) || (null == N ? true : N.isStaffPersonal()) || false, {
    enabled: A
  } = (0, C.WX)({
    location: "collectibles_shop_header_bar"
  }), R = [{
    tab: T.AW.HOME,
    displayText: j.intl.string(j.t.ijDDw8)
  }, {
    tab: T.AW.CATALOG,
    displayText: j.intl.string(j.t.Ah5sJi)
  }];
  A && R.push({
    tab: T.AW.ORBS,
    displayText: j.intl.string(j.t.EBYkzs)
  });
  let Z = n ? O.DR : a,
    w = p === T.AW.ORBS ? L.ZY5.SHOP_ORBS_TAB : L.ZY5.COLLECTIBLES_SHOP,
    M = l.useCallback(() => {
      t && (Z(), (0, u.Ou)()), (0, _.Y)({
        pageType: w,
        sectionType: L.jXE.ORBS_BALANCE_MENU,
        ctaObject: L.qAy.CTA_TO_QUEST_HOME
      }), (0, h.navigateToQuestHome)({
        fromContent: o.j.ORBS_BALANCE_MENU
      })
    }, [Z, t, w]),
    F = (0, x.eN)("collectibles_shop_header_bar");
  return (0, r.jsx)(c.f6W, {
    theme: v,
    children: e => (0, r.jsxs)(m.Z, {
      disableDoubleClick: true,
      className: s()(e, k.headerBar, {
        [k.fullscreenHeaderBar]: t
      }),
      innerClassname: A ? k.headerBarInner : true,
      toolbar: t || !P ? null : (0, r.jsx)(l.Fragment, {}),
      children: [(0, r.jsxs)(c.P3F, {
        className: k.shopHomeLink,
        onClick: () => f(T.AW.HOME),
        "aria-label": j.intl.string(j.t.pWG4zc) + " home",
        children: [(0, r.jsx)(S.Z, {
          className: k.discordLogo
        }), (0, r.jsx)(m.Z.Title, {
          children: j.intl.string(j.t.pWG4zc)
        })]
      }), (0, r.jsx)("div", {
        className: k.tabs,
        children: R.map(e => {
          let {
            tab: t,
            displayText: n
          } = e;
          return t === T.AW.CATALOG ? (0, r.jsx)(B, {
            tab: t,
            selected: (0, T.RE)(p) || p === t,
            displayText: n,
            handleTransition: f
          }, t) : (0, r.jsx)(I, {
            tab: t,
            displayText: n,
            selected: p === t,
            handleTransition: f
          }, t)
        })
      }), (A || t || F) && (0, r.jsxs)("div", {
        className: k.alignedRightContent,
        children: [F && (0, r.jsx)(y.Z, {
          handleTransition: f,
          selectedTab: p
        }), A && (0, r.jsx)(b.V9, {
          anchorPillType: t ? "SHOP_FULLSCREEN" : "SHOP",
          analyticsPage: w,
          cardAlignment: b.V9.CardAlignment.END,
          ctaText: j.intl.string(j.t.VC4Mq6),
          ctaOnClick: M,
          className: k.balanceWidgetMenu
        }), t && (0, r.jsx)(d.Z, {
          closeAction: Z,
          keybind: "ESC"
        })]
      })]
    })
  })
}