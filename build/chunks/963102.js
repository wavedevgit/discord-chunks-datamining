/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  I: () => _
}), r(653041);
var n = r(200651),
  i = r(192379),
  l = r(120356),
  o = r.n(l),
  a = r(442837),
  s = r(481060),
  c = r(425493),
  d = r(410030),
  u = r(984370),
  p = r(341907),
  f = r(822857),
  h = r(775451),
  b = r(594174),
  C = r(471731),
  m = r(335131),
  g = r(215023),
  v = r(388032),
  x = r(470602);

function j(e) {
  let {
    tab: t,
    displayText: r,
    selected: i,
    handleTransition: l
  } = e;
  return (0, n.jsx)(u.Z.Title, {
    onClick: () => l(t),
    wrapperClassName: x.tabWrapper,
    className: o()(x.tab, {
      [x.selected]: i
    }),
    children: r
  })
}

function _(e) {
  let {
    isFullScreen: t,
    isLayer: r,
    onClose: l,
    selectedTab: _,
    handleTransition: y
  } = e, O = (0, d.ZP)(), k = (0, a.e7)([b.default], () => b.default.getCurrentUser()), P = (null == k ? void 0 : k.isStaff()) || (null == k ? void 0 : k.isStaffPersonal()) || !1, {
    enabled: S
  } = (0, f.W)({
    location: "collectibles_shop_header_bar"
  }), w = [{
    tab: g.AW.HOME,
    displayText: v.NW.string(v.t.ijDDw8)
  }, {
    tab: g.AW.CATALOG,
    displayText: v.NW.string(v.t.xFcotb)
  }];
  return S && w.push({
    tab: g.AW.ORBS,
    displayText: v.NW.string(v.t.q6uIys)
  }), (0, n.jsx)(s.f6W, {
    theme: O,
    children: e => (0, n.jsxs)(u.Z, {
      className: o()(e, x.headerBar, {
        [x.fullscreenHeaderBar]: t
      }),
      innerClassname: S ? x.headerBarInner : void 0,
      toolbar: t || !P ? null : (0, n.jsx)(i.Fragment, {}),
      children: [(0, n.jsx)(C.Z, {
        className: x.discordLogo
      }), (0, n.jsx)(u.Z.Title, {
        children: v.NW.string(v.t.pWG4zc)
      }), (0, n.jsx)("div", {
        className: x.tabs,
        children: w.map(e => {
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
        children: [S && (0, n.jsx)(h.V9, {
          cardAlignment: h.V9.CardAlignment.END,
          className: x.balanceWidgetMenu,
          ctaText: v.NW.string(v.t["H57f4+"]),
          ctaOnClick: () => (0, p.navigateToQuestHome)()
        }), t && (0, n.jsx)(c.Z, {
          closeAction: r ? m.DR : l,
          keybind: "ESC"
        })]
      })]
    })
  })
}