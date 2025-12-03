/** Chunk was on 384 **/
/** chunk id: 566036, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk510231 = require("./510231.js"),
  Chunk434404 = require("./434404.js"),
  Chunk383124 = require("./383124.jsx"),
  Chunk795691 = require("./795691.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk448369 = require("./448369.js");
let p = () => null;

function f(e) {
  let {
    gameApplicationIds: t,
    handleChange: n,
    disabled: i
  } = e, {
    options: l,
    matchSorterOptions: a
  } = (0, o.h)();
  return (0, r.jsx)(s.VcW, {
    multi: true,
    hidePills: true,
    wrapperClassName: m.selectWrapper,
    options: l,
    value: t,
    placeholder: g.intl.string(g.t.JTLolO),
    onChange: n,
    isDisabled: 20 === t.length || i,
    matchSorterOptions: a,
    clearQueryOnSelect: true,
    customPillContainerClassName: m.pills,
    renderCustomPill: p
  })
}

function h(e) {
  let {
    gameApplicationIds: t,
    onRemoveGame: n,
    disabled: i
  } = e;
  return 0 === t.length ? null : (0, r.jsx)("div", {
    className: m.selectedGames,
    children: t.map(e => (0, r.jsx)(u.Z, {
      applicationId: e,
      selected: true,
      onClick: n,
      disabled: i
    }, e))
  })
}
let b = [];

function x(e) {
  var t;
  let {
    profile: n,
    canManageGuild: l
  } = e, o = n.id, u = null != (t = null == n ? true : n.gameApplicationIds) ? t : b, m = i.useCallback(e => {
    c.Z.updateGuildProfile(o, {
      gameApplicationIds: e
    })
  }, [o]), p = i.useCallback(e => {
    let t = u.filter(t => t !== e);
    c.Z.updateGuildProfile(o, {
      gameApplicationIds: t
    })
  }, [o, u]), x = i.useRef(u), j = i.useMemo(() => (a().isEqual(new Set(u), new Set(x.current)) || (x.current = [...u]), x.current), [u]);
  return (0, r.jsxs)(s.C3N, {
    label: g.intl.string(g.t.BR68vK),
    description: g.intl.string(g.t.MobxiB),
    children: [(0, r.jsx)(f, {
      gameApplicationIds: u,
      handleChange: m,
      disabled: !l
    }), (0, r.jsx)(h, {
      gameApplicationIds: j,
      onRemoveGame: p,
      disabled: !l
    }), (0, r.jsx)(d.Z, {
      guildId: o,
      selectedGameApplicationIds: u,
      onUpdateGames: m,
      disabled: !l
    })]
  })
}