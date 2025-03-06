/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  I: () => j
}), n(653041);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  i = n(481060),
  c = n(425493),
  d = n(410030),
  u = n(984370),
  m = n(341907),
  g = n(822857),
  f = n(775451),
  h = n(594174),
  p = n(471731),
  b = n(335131),
  C = n(215023),
  _ = n(388032),
  v = n(417756);

function x(e) {
  let {
    tab: t,
    displayText: n,
    selected: l,
    handleTransition: a
  } = e;
  return (0, r.jsx)(u.Z.Title, {
    onClick: () => a(t),
    wrapperClassName: v.tabWrapper,
    className: s()(v.tab, {
      [v.selected]: l
    }),
    children: n
  })
}

function j(e) {
  let {
    isFullScreen: t,
    isLayer: n,
    onClose: a,
    selectedTab: j,
    handleTransition: k
  } = e, y = (0, d.ZP)(), S = (0, o.e7)([h.default], () => h.default.getCurrentUser()), O = (null == S ? void 0 : S.isStaff()) || (null == S ? void 0 : S.isStaffPersonal()) || !1, {
    enabled: E
  } = (0, g.W)({
    location: "collectibles_shop_header_bar"
  }), B = [{
    tab: C.AW.HOME,
    displayText: _.NW.string(_.t.ijDDw8)
  }, {
    tab: C.AW.CATALOG,
    displayText: _.NW.string(_.t.xFcotb)
  }];
  return E && B.push({
    tab: C.AW.ORBS,
    displayText: _.NW.string(_.t.q6uIys)
  }), (0, r.jsx)(i.f6W, {
    theme: y,
    children: e => (0, r.jsxs)(u.Z, {
      className: s()(e, v.headerBar, {
        [v.fullscreenHeaderBar]: t
      }),
      innerClassname: E ? v.headerBarInner : void 0,
      toolbar: t || !O ? null : (0, r.jsx)(l.Fragment, {}),
      children: [(0, r.jsx)(p.Z, {
        className: v.discordLogo
      }), (0, r.jsx)(u.Z.Title, {
        children: _.NW.string(_.t.pWG4zc)
      }), (0, r.jsx)("div", {
        className: v.tabs,
        children: B.map(e => {
          let {
            tab: t,
            displayText: n
          } = e;
          return (0, r.jsx)(x, {
            tab: t,
            displayText: n,
            selected: j === t,
            handleTransition: k
          }, t)
        })
      }), (E || t) && (0, r.jsxs)("div", {
        className: v.alignedRightContent,
        children: [E && (0, r.jsx)(f.V9, {
          cardAlignment: f.V9.CardAlignment.END,
          className: v.balanceWidgetMenu,
          ctaText: _.NW.string(_.t["H57f4+"]),
          ctaOnClick: () => (0, m.navigateToQuestHome)()
        }), t && (0, r.jsx)(c.Z, {
          closeAction: n ? b.DR : a,
          keybind: "ESC"
        })]
      })]
    })
  })
}