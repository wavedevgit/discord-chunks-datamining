/** Chunk was on 45620 **/
/** chunk id: 963102, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => P
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  return (0, r.jsx)(g.Z.Title, {
    onClick: () => i(t),
    wrapperClassName: T.tabWrapper,
    className: s()(T.tab, {
      [T.selected]: l
    }),
    children: n
  })
}

function B(e) {
  let {
    tab: t,
    selected: n,
    displayText: i,
    handleTransition: a
  } = e, [o, u] = l.useState(false), f = l.useRef(null), [h, C] = l.useState(0), m = l.useRef(false), _ = e => {
    clearTimeout(h), C(setTimeout(() => {
      u(e)
    }, 100)), e && (m.current = p.Z.keyboardModeEnabled)
  }, b = e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), _(true))
  };
  return (0, r.jsx)("div", {
    className: T.tabWithMenuContainer,
    onMouseEnter: () => _(true),
    onMouseLeave: () => _(false),
    children: (0, r.jsx)(c.yRy, {
      targetElementRef: f,
      shouldShow: o,
      position: "bottom",
      align: "left",
      onRequestOpen: () => _(true),
      onRequestClose: () => {
        var e;
        m.current && !p.Z.keyboardModeEnabled && (0, d.Qj)(), _(false), null == (e = f.current) || e.focus()
      },
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(O.Z, {
          handleTransition: a,
          onClose: t
        })
      },
      children: (e, l) => {
        var o, u;
        let {
          isShown: d
        } = l;
        return (0, r.jsx)(g.Z.Title, (o = function(e) {
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
          onClick: () => a(t),
          onKeyDown: b,
          wrapperClassName: T.tabWrapper,
          className: s()(T.tab, {
            [T.selected]: n
          }),
          children: (0, r.jsxs)("span", {
            className: T.tabWithChevron,
            children: [i, d ? (0, r.jsx)(c.u04, {
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

function P(e) {
  let {
    selectedTab: t,
    handleTransition: n
  } = e, i = (0, u.ZP)(), d = (0, o.e7)([v.default], () => v.default.getCurrentUser()), {
    enabled: p
  } = (0, _.WX)({
    location: "collectibles_shop_header_bar"
  }), O = (0, h.Y)({
    location: "CollectiblesShopHeaderBar"
  }), P = [{
    tab: y.AW.HOME,
    displayText: I.intl.string(I.t.ijDDwz)
  }, {
    tab: y.AW.CATALOG,
    displayText: I.intl.string(I.t.Ah5sJo)
  }];
  p && P.push({
    tab: y.AW.ORBS,
    displayText: I.intl.string(I.t.EBYkzk)
  });
  let A = t === y.AW.ORBS ? j.ZY5.SHOP_ORBS_TAB : j.ZY5.COLLECTIBLES_SHOP,
    N = l.useCallback(() => {
      (0, m.Y)({
        pageType: A,
        sectionType: j.jXE.ORBS_BALANCE_MENU,
        ctaObject: j.qAy.CTA_TO_QUEST_HOME
      }), (0, f.navigateToQuestHome)({
        fromContent: a.j.ORBS_BALANCE_MENU
      })
    }, [A]),
    R = (0, x.eN)("collectibles_shop_header_bar"),
    Z = l.useCallback(() => {
      (null == d ? true : d.id) != null && (0, C.openUserProfileModal)({
        userId: d.id,
        section: k.oh.WISHLIST,
        showGuildProfile: false
      })
    }, [null == d ? true : d.id]);
  return (0, r.jsx)(c.f6W, {
    theme: i,
    children: e => (0, r.jsxs)(g.Z, {
      disableDoubleClick: true,
      className: s()(e, T.headerBar),
      innerClassname: p ? T.headerBarInner : true,
      children: [(0, r.jsxs)(c.P3F, {
        className: T.shopHomeLink,
        onClick: () => n(y.AW.HOME),
        "aria-label": I.intl.string(I.t.pWG4ze) + " home",
        children: [(0, r.jsx)(E.Z, {
          className: T.discordLogo
        }), (0, r.jsx)(g.Z.Title, {
          children: I.intl.string(I.t.pWG4ze)
        })]
      }), (0, r.jsx)("div", {
        className: T.tabs,
        children: P.map(e => {
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
      }), (p || R || O) && (0, r.jsxs)("div", {
        className: T.alignedRightContent,
        children: [R && (0, r.jsx)(S.Z, {
          handleTransition: n,
          selectedTab: t
        }), O && (0, r.jsx)(c.P3F, {
          className: T.wishlistButton,
          onClick: Z,
          "aria-label": I.intl.string(I.t["7lZ31J"]),
          children: (0, r.jsx)(c.h_8, {
            size: "xs",
            color: "currentColor"
          })
        }), p && (0, r.jsx)(b.V9, {
          analyticsPage: A,
          cardAlignment: b.V9.CardAlignment.END,
          ctaText: I.intl.string(I.t.VC4Mq0),
          ctaOnClick: N,
          className: T.balanceWidgetMenu
        })]
      })]
    })
  })
}