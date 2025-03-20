/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => b
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(392711),
  a = n.n(s),
  l = n(481060),
  o = n(510231),
  A = n(434404),
  c = n(383124),
  d = n(795691),
  u = n(388032),
  g = n(636477),
  f = n(659116);
let m = () => null;

function p(e) {
  let {
    gameApplicationIds: t,
    handleChange: n,
    disabled: i
  } = e, {
    options: s,
    matchSorterOptions: a
  } = (0, o.h)();
  return (0, r.jsx)(l.VcW, {
    multi: !0,
    hidePills: !0,
    wrapperClassName: g.selectWrapper,
    options: s,
    value: t,
    placeholder: u.NW.string(u.t.acyezc),
    onChange: n,
    isDisabled: 20 === t.length || i,
    matchSorterOptions: a,
    clearQueryOnSelect: !0,
    customPillContainerClassName: g.pills,
    renderCustomPill: m
  })
}

function h(e) {
  let {
    gameApplicationIds: t,
    onRemoveGame: n,
    disabled: i
  } = e;
  return 0 === t.length ? null : (0, r.jsx)("div", {
    className: g.selectedGames,
    children: t.map(e => (0, r.jsx)(c.Z, {
      applicationId: e,
      selected: !0,
      onClick: n,
      disabled: i
    }, e))
  })
}
let C = [];

function b(e) {
  var t;
  let {
    profile: n,
    canManageGuild: s
  } = e, o = n.id, c = null !== (t = null == n ? void 0 : n.gameApplicationIds) && void 0 !== t ? t : C, m = i.useCallback(e => {
    A.Z.updateGuildProfile(o, {
      gameApplicationIds: e
    })
  }, [o]), b = i.useCallback(e => {
    let t = c.filter(t => t !== e);
    A.Z.updateGuildProfile(o, {
      gameApplicationIds: t
    })
  }, [o, c]), v = i.useRef(c), x = i.useMemo(() => (a().isEqual(new Set(c), new Set(v.current)) || (v.current = [...c]), v.current), [c]);
  return (0, r.jsxs)(l.hjN, {
    className: f.section,
    children: [(0, r.jsxs)("div", {
      className: f.sectionHeader,
      children: [(0, r.jsx)(l.vwX, {
        children: u.NW.string(u.t.BR68vL)
      }), (0, r.jsx)(l.R94, {
        type: l.geA.DESCRIPTION,
        children: u.NW.string(u.t.MobxiI)
      })]
    }), (0, r.jsxs)("div", {
      className: g.sectionBody,
      children: [(0, r.jsx)(p, {
        gameApplicationIds: c,
        handleChange: m,
        disabled: !s
      }), (0, r.jsx)(h, {
        gameApplicationIds: x,
        onRemoveGame: b,
        disabled: !s
      }), (0, r.jsx)(d.Z, {
        guildId: o,
        selectedGameApplicationIds: c,
        onUpdateGames: m,
        disabled: !s
      })]
    })]
  })
}