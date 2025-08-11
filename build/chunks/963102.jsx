/** Chunk was on 45620 **/
/** chunk id: 963102, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => N
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk636977 = require("./636977.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk425493 = require("./425493.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk984370 = require("./984370.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk507808 = require("./507808.js"),
  Chunk822857 = require("./822857.js"),
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
  Chunk774457 = require("./774457.js");

function k(e) {
  let {
    tab: t,
    displayText: n,
    selected: l,
    handleTransition: a
  } = e;
  return <b.Z.Title onClick={() => a(t)} wrapperClassName={L.tabWrapper} className={i()(L.tab, {
      [L.selected]: l
    })}>{n}</b.Z.Title>
}

function I(e) {
  let {
    tab: t,
    selected: n,
    displayText: a,
    handleTransition: o
  } = e, [s, u] = l.useState(false), d = l.useRef(null), [p, h] = l.useState(0), m = l.useRef(false), _ = e => {
    clearTimeout(p), h(setTimeout(() => {
      u(e)
    }, 100)), e && (m.current = f.Z.keyboardModeEnabled)
  }, v = e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), _(true))
  };
  return <div className={L.tabWithMenuContainer} onMouseEnter={() => _(true)} onMouseLeave={() => _(false)}><c.yRy targetElementRef={d} shouldShow={s} position={"bottom"} align={"left"} onRequestOpen={() => _(true)} onRequestClose={() => {
        var e;
        m.current && !f.Z.keyboardModeEnabled && (0, g.Qj)(), _(false), null == (e = d.current) || e.focus()
      }} renderPopout={e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(y.Z, {
          handleTransition: o,
          onClose: t
        })
      }}>{(e, l) => {
        var s, u;
        let {
          isShown: p
        } = l;
        return (0, r.jsx)(b.Z.Title, (s = function(e) {
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
          onKeyDown: v,
          wrapperClassName: L.tabWrapper,
          className: i()(L.tab, {
            [L.selected]: n
          }),
          children: (0, r.jsxs)("span", {
            className: L.tabWithChevron,
            children: [a, p ? (0, r.jsx)(c.u04, {
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
      }}</c.yRy></div>
}

function N(e) {
  let {
    isFullScreen: t,
    isLayer: n,
    onClose: a,
    selectedTab: g,
    handleTransition: f
  } = e, y = (0, p.ZP)(), N = (0, s.e7)([O.default], () => O.default.getCurrentUser()), w = (null == N ? true : N.isStaff()) || (null == N ? true : N.isStaffPersonal()) || false, {
    enabled: A
  } = (0, _.WX)({
    location: "collectibles_shop_header_bar"
  }), B = [{
    tab: j.AW.HOME,
    displayText: P.intl.string(P.t.ijDDw8)
  }, {
    tab: j.AW.CATALOG,
    displayText: P.intl.string(P.t.Ah5sJi)
  }];
  A && B.push({
    tab: j.AW.ORBS,
    displayText: P.intl.string(P.t.EBYkzs)
  });
  let R = n ? E.DR : a,
    Z = g === j.AW.ORBS ? T.ZY5.SHOP_ORBS_TAB : T.ZY5.COLLECTIBLES_SHOP,
    D = l.useCallback(() => {
      t && (R(), (0, u.Ou)()), (0, m.Y)({
        pageType: Z,
        sectionType: T.jXE.ORBS_BALANCE_MENU,
        ctaObject: T.qAy.CTA_TO_QUEST_HOME
      }), (0, h.navigateToQuestHome)({
        fromContent: o.j.ORBS_BALANCE_MENU
      })
    }, [R, t, Z]),
    F = (0, S.eN)("collectibles_shop_header_bar");
  return <c.f6W theme={y}>{e => (0, r.jsxs)(b.Z, {
      disableDoubleClick: true,
      className: i()(e, L.headerBar, {
        [L.fullscreenHeaderBar]: t
      }),
      innerClassname: A ? L.headerBarInner : true,
      toolbar: t || !w ? null : (0, r.jsx)(l.Fragment, {}),
      children: [(0, r.jsxs)(c.P3F, {
        className: L.shopHomeLink,
        onClick: () => f(j.AW.HOME),
        "aria-label": P.intl.string(P.t.pWG4zc) + " home",
        children: [(0, r.jsx)(C.Z, {
          className: L.discordLogo
        }), (0, r.jsx)(b.Z.Title, {
          children: P.intl.string(P.t.pWG4zc)
        })]
      }), (0, r.jsx)("div", {
        className: L.tabs,
        children: B.map(e => {
          let {
            tab: t,
            displayText: n
          } = e;
          return t === j.AW.CATALOG ? (0, r.jsx)(I, {
            tab: t,
            selected: (0, j.RE)(g) || g === t,
            displayText: n,
            handleTransition: f
          }, t) : (0, r.jsx)(k, {
            tab: t,
            displayText: n,
            selected: g === t,
            handleTransition: f
          }, t)
        })
      }), (A || t || F) && (0, r.jsxs)("div", {
        className: L.alignedRightContent,
        children: [F && (0, r.jsx)(x.Z, {
          handleTransition: f,
          selectedTab: g
        }), A && (0, r.jsx)(v.V9, {
          anchorPillType: t ? "SHOP_FULLSCREEN" : "SHOP",
          analyticsPage: Z,
          cardAlignment: v.V9.CardAlignment.END,
          ctaText: P.intl.string(P.t.VC4Mq6),
          ctaOnClick: D,
          className: L.balanceWidgetMenu
        }), t && (0, r.jsx)(d.Z, {
          closeAction: R,
          keybind: "ESC"
        })]
      })]
    })}</c.f6W>
}