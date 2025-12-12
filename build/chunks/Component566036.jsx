/** Chunk was on 384 **/
/** chunk id: 566036, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk510231 = require("./510231.js"),
  Chunk434404 = require("./434404.js"),
  Chunk383124 = require("./383124.jsx"),
  Chunk795691 = require("./795691.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk448369 = require("./448369.js");
let f = () => null;

function h(e) {
  let {
    gameApplicationIds: t,
    handleChange: n,
    disabled: i
  } = e, {
    options: l,
    matchSorterOptions: s
  } = (0, c.h)();
  return (0, r.jsx)(a.d, {
    multi: true,
    hidePills: true,
    wrapperClassName: p.selectWrapper,
    options: l,
    value: t,
    placeholder: m.intl.string(m.t.JTLolO),
    onChange: n,
    isDisabled: 20 === t.length || i,
    matchSorterOptions: s,
    clearQueryOnSelect: true,
    customPillContainerClassName: p.pills,
    renderCustomPill: f
  })
}

function x(e) {
  let {
    gameApplicationIds: t,
    onRemoveGame: n,
    disabled: i
  } = e;
  return 0 === t.length ? null : (0, r.jsx)("div", {
    className: p.selectedGames,
    children: t.map(e => (0, r.jsx)(d.Z, {
      applicationId: e,
      selected: true,
      onClick: n,
      disabled: i
    }, e))
  })
}
let b = [];

function j(e) {
  var t;
  let {
    profile: n,
    canManageGuild: l
  } = e, a = n.id, c = null != (t = null == n ? true : n.gameApplicationIds) ? t : b, d = i.useCallback(e => {
    u.Z.updateGuildProfile(a, {
      gameApplicationIds: e
    })
  }, [a]), p = i.useCallback(e => {
    let t = c.filter(t => t !== e);
    u.Z.updateGuildProfile(a, {
      gameApplicationIds: t
    })
  }, [a, c]), f = i.useRef(c), j = i.useMemo(() => (s().isEqual(new Set(c), new Set(f.current)) || (f.current = [...c]), f.current), [c]);
  return (0, r.jsxs)(o.C3N, {
    label: m.intl.string(m.t.BR68vK),
    description: m.intl.string(m.t.MobxiB),
    children: [(0, r.jsx)(h, {
      gameApplicationIds: c,
      handleChange: d,
      disabled: !l
    }), (0, r.jsx)(x, {
      gameApplicationIds: j,
      onRemoveGame: p,
      disabled: !l
    }), (0, r.jsx)(g.Z, {
      guildId: a,
      selectedGameApplicationIds: c,
      onUpdateGames: d,
      disabled: !l
    })]
  })
}