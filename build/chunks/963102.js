/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  I: () => P
}), n(539854);
var r = n(255367),
  l = n(73800),
  i = n(120356),
  a = n.n(i),
  o = n(636977),
  s = n(442837),
  c = n(481060),
  u = n(37234),
  d = n(425493),
  b = n(410030),
  f = n(984370),
  p = n(341907),
  g = n(507808),
  h = n(822857),
  m = n(775451),
  _ = n(594174),
  C = n(471731),
  v = n(335131),
  O = n(215023),
  x = n(981631),
  j = n(388032),
  S = n(774457);

function y(e) {
  let {
    tab: t,
    displayText: n,
    selected: l,
    handleTransition: i
  } = e;
  return (0, r.jsx)(f.Z.Title, {
    onClick: () => i(t),
    wrapperClassName: S.tabWrapper,
    className: a()(S.tab, {
      [S.selected]: l
    }),
    children: n
  })
}

function P(e) {
  let {
    isFullScreen: t,
    isLayer: n,
    onClose: i,
    selectedTab: P,
    handleTransition: E
  } = e, k = (0, b.ZP)(), I = (0, s.e7)([_.default], () => _.default.getCurrentUser()), w = (null == I ? void 0 : I.isStaff()) || (null == I ? void 0 : I.isStaffPersonal()) || !1, {
    enabled: T
  } = (0, h.W)({
    location: "collectibles_shop_header_bar"
  }), B = [{
    tab: O.AW.HOME,
    displayText: j.intl.string(j.t.ijDDw8)
  }, {
    tab: O.AW.CATALOG,
    displayText: j.intl.string(j.t.xFcotb)
  }];
  T && B.push({
    tab: O.AW.ORBS,
    displayText: j.intl.string(j.t["KUYR+P"])
  });
  let L = n ? v.DR : i,
    N = P === O.AW.ORBS ? x.ZY5.SHOP_ORBS_TAB : x.ZY5.COLLECTIBLES_SHOP,
    R = l.useCallback(() => {
      t && (L(), (0, u.Ou)()), (0, g.Y)({
        pageType: N,
        sectionType: x.jXE.ORBS_BALANCE_MENU,
        ctaObject: x.qAy.CTA_TO_QUEST_HOME
      }), (0, p.navigateToQuestHome)({
        fromContent: o.j.ORBS_BALANCE_MENU
      })
    }, [L, t, N]);
  return (0, r.jsx)(c.f6W, {
    theme: k,
    children: e => (0, r.jsxs)(f.Z, {
      className: a()(e, S.headerBar, {
        [S.fullscreenHeaderBar]: t
      }),
      innerClassname: T ? S.headerBarInner : void 0,
      toolbar: t || !w ? null : (0, r.jsx)(l.Fragment, {}),
      children: [(0, r.jsx)(C.Z, {
        className: S.discordLogo
      }), (0, r.jsx)(f.Z.Title, {
        children: j.intl.string(j.t.pWG4zc)
      }), (0, r.jsx)("div", {
        className: S.tabs,
        children: B.map(e => {
          let {
            tab: t,
            displayText: n
          } = e;
          return (0, r.jsx)(y, {
            tab: t,
            displayText: n,
            selected: P === t,
            handleTransition: E
          }, t)
        })
      }), (T || t) && (0, r.jsxs)("div", {
        className: S.alignedRightContent,
        children: [T && (0, r.jsx)(m.V9, {
          anchorPillType: t ? "SHOP_FULLSCREEN" : "SHOP",
          analyticsPage: N,
          cardAlignment: m.V9.CardAlignment.END,
          ctaText: j.intl.string(j.t.VC4Mq6),
          ctaOnClick: R,
          className: S.balanceWidgetMenu
        }), t && (0, r.jsx)(d.Z, {
          closeAction: L,
          keybind: "ESC"
        })]
      })]
    })
  })
}