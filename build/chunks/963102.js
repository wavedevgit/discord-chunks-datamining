/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  I: () => _
}), r(653041);
var n = r(200651),
  l = r(192379),
  i = r(120356),
  o = r.n(i),
  s = r(442837),
  a = r(481060),
  c = r(425493),
  u = r(410030),
  d = r(984370),
  p = r(341907),
  f = r(822857),
  b = r(775451),
  h = r(594174),
  m = r(471731),
  C = r(335131),
  g = r(215023),
  v = r(388032),
  x = r(417756);

function j(e) {
  let {
    tab: t,
    displayText: r,
    selected: l,
    handleTransition: i
  } = e;
  return (0, n.jsx)(d.Z.Title, {
    onClick: () => i(t),
    wrapperClassName: x.tabWrapper,
    className: o()(x.tab, {
      [x.selected]: l
    }),
    children: r
  })
}

function _(e) {
  let {
    isFullScreen: t,
    isLayer: r,
    onClose: i,
    selectedTab: _,
    handleTransition: y
  } = e, O = (0, u.ZP)(), k = (0, s.e7)([h.default], () => h.default.getCurrentUser()), P = (null == k ? void 0 : k.isStaff()) || (null == k ? void 0 : k.isStaffPersonal()) || !1, {
    enabled: S
  } = (0, f.W)({
    location: "collectibles_shop_header_bar"
  }), E = [{
    tab: g.AW.HOME,
    displayText: v.NW.string(v.t.ijDDw8)
  }, {
    tab: g.AW.CATALOG,
    displayText: v.NW.string(v.t.xFcotb)
  }];
  return S && E.push({
    tab: g.AW.ORBS,
    displayText: v.NW.string(v.t.q6uIys)
  }), (0, n.jsx)(a.f6W, {
    theme: O,
    children: e => (0, n.jsxs)(d.Z, {
      className: o()(e, x.headerBar, {
        [x.fullscreenHeaderBar]: t
      }),
      innerClassname: S ? x.headerBarInner : void 0,
      toolbar: t || !P ? null : (0, n.jsx)(l.Fragment, {}),
      children: [(0, n.jsx)(m.Z, {
        className: x.discordLogo
      }), (0, n.jsx)(d.Z.Title, {
        children: v.NW.string(v.t.pWG4zc)
      }), (0, n.jsx)("div", {
        className: x.tabs,
        children: E.map(e => {
          let {
            tab: t,
            displayText: r
          } = e;
          return (0, n.jsx)(j, {
            tab: t,
            displayText: r,
            selected: _ === t,
            handleTransition: y
          }, t)
        })
      }), (S || t) && (0, n.jsxs)("div", {
        className: x.alignedRightContent,
        children: [S && (0, n.jsx)(b.V9, {
          cardAlignment: b.V9.CardAlignment.END,
          className: x.balanceWidgetMenu,
          ctaText: v.NW.string(v.t["H57f4+"]),
          ctaOnClick: () => (0, p.navigateToQuestHome)()
        }), t && (0, n.jsx)(c.Z, {
          closeAction: r ? C.DR : i,
          keybind: "ESC"
        })]
      })]
    })
  })
}