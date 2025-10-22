/** Chunk was on 29679 **/
/** chunk id: 566036, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk510231 = require("./510231.js"),
  Chunk434404 = require("./434404.js"),
  Chunk383124 = require("./383124.jsx"),
  Chunk795691 = require("./795691.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk605348 = require("./605348.js");
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
    children: t.map(e => (0, r.jsx)(d.Z, {
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
  } = e, o = n.id, d = null != (t = null == n ? true : n.gameApplicationIds) ? t : b, m = i.useCallback(e => {
    c.Z.updateGuildProfile(o, {
      gameApplicationIds: e
    })
  }, [o]), p = i.useCallback(e => {
    let t = d.filter(t => t !== e);
    c.Z.updateGuildProfile(o, {
      gameApplicationIds: t
    })
  }, [o, d]), x = i.useRef(d), j = i.useMemo(() => (a().isEqual(new Set(d), new Set(x.current)) || (x.current = [...d]), x.current), [d]);
  return (0, r.jsxs)(s.C3N, {
    label: g.intl.string(g.t.BR68vK),
    description: g.intl.string(g.t.MobxiB),
    children: [(0, r.jsx)(f, {
      gameApplicationIds: d,
      handleChange: m,
      disabled: !l
    }), (0, r.jsx)(h, {
      gameApplicationIds: j,
      onRemoveGame: p,
      disabled: !l
    }), (0, r.jsx)(u.Z, {
      guildId: o,
      selectedGameApplicationIds: d,
      onUpdateGames: m,
      disabled: !l
    })]
  })
}