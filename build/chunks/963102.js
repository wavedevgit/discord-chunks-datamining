/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  I: () => j
}), n(653041);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  o = n.n(a),
  s = n(442837),
  i = n(481060),
  d = n(37234),
  c = n(425493),
  u = n(410030),
  g = n(984370),
  h = n(341907),
  f = n(822857),
  m = n(775451),
  p = n(594174),
  b = n(471731),
  C = n(335131),
  _ = n(215023),
  v = n(388032),
  x = n(417756);

function k(e) {
  let {
    tab: t,
    displayText: n,
    selected: l,
    handleTransition: a
  } = e;
  return (0, r.jsx)(g.Z.Title, {
    onClick: () => a(t),
    wrapperClassName: x.tabWrapper,
    className: o()(x.tab, {
      [x.selected]: l
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
    handleTransition: S
  } = e, y = (0, u.ZP)(), O = (0, s.e7)([p.default], () => p.default.getCurrentUser()), E = (null == O ? void 0 : O.isStaff()) || (null == O ? void 0 : O.isStaffPersonal()) || !1, {
    enabled: I
  } = (0, f.W)({
    location: "collectibles_shop_header_bar"
  }), B = [{
    tab: _.AW.HOME,
    displayText: v.NW.string(v.t.ijDDw8)
  }, {
    tab: _.AW.CATALOG,
    displayText: v.NW.string(v.t.xFcotb)
  }];
  I && B.push({
    tab: _.AW.ORBS,
    displayText: v.NW.string(v.t["KUYR+P"])
  });
  let T = n ? C.DR : a,
    L = l.useCallback(() => {
      t && (T(), (0, d.Ou)()), (0, h.navigateToQuestHome)()
    }, [T, t]);
  return (0, r.jsx)(i.f6W, {
    theme: y,
    children: e => (0, r.jsxs)(g.Z, {
      className: o()(e, x.headerBar, {
        [x.fullscreenHeaderBar]: t
      }),
      innerClassname: I ? x.headerBarInner : void 0,
      toolbar: t || !E ? null : (0, r.jsx)(l.Fragment, {}),
      children: [(0, r.jsx)(b.Z, {
        className: x.discordLogo
      }), (0, r.jsx)(g.Z.Title, {
        children: v.NW.string(v.t.pWG4zc)
      }), (0, r.jsx)("div", {
        className: x.tabs,
        children: B.map(e => {
          let {
            tab: t,
            displayText: n
          } = e;
          return (0, r.jsx)(k, {
            tab: t,
            displayText: n,
            selected: j === t,
            handleTransition: S
          }, t)
        })
      }), (I || t) && (0, r.jsxs)("div", {
        className: x.alignedRightContent,
        children: [I && (0, r.jsx)(m.V9, {
          cardAlignment: m.V9.CardAlignment.END,
          ctaText: v.NW.string(v.t.VC4Mq6),
          ctaOnClick: L,
          className: x.balanceWidgetMenu
        }), t && (0, r.jsx)(c.Z, {
          closeAction: T,
          keybind: "ESC"
        })]
      })]
    })
  })
}