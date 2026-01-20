/** Chunk was on 9536 **/
/** chunk id: 566036, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
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
  Chunk39169 = require("./39169.js");

function m(e) {
  let {
    gameApplicationIds: t,
    handleChange: n,
    disabled: i
  } = e, {
    options: l,
    matchSorterOptions: a
  } = (0, o.h)();
  return (0, r.jsx)(s.VcW, {
    selectionMode: "multiple",
    hideTags: true,
    options: l,
    value: t,
    placeholder: g.intl.string(g.t.JTLolO),
    onSelectionChange: n,
    disabled: 20 === t.length || i,
    matchSorterOptions: a
  })
}

function b(e) {
  let {
    gameApplicationIds: t,
    onRemoveGame: n,
    disabled: i
  } = e;
  return 0 === t.length ? null : (0, r.jsx)("div", {
    className: f.selectedGames,
    children: t.map(e => (0, r.jsx)(d.Z, {
      applicationId: e,
      selected: true,
      onClick: n,
      disabled: i
    }, e))
  })
}
let p = [];

function h(e) {
  var t;
  let {
    profile: n,
    canManageGuild: l
  } = e, o = n.id, d = null != (t = null == n ? true : n.gameApplicationIds) ? t : p, f = i.useCallback(e => {
    c.Z.updateGuildProfile(o, {
      gameApplicationIds: e
    })
  }, [o]), h = i.useCallback(e => {
    let t = d.filter(t => t !== e);
    c.Z.updateGuildProfile(o, {
      gameApplicationIds: t
    })
  }, [o, d]), x = i.useRef(d), j = i.useMemo(() => (a().isEqual(new Set(d), new Set(x.current)) || (x.current = [...d]), x.current), [d]);
  return (0, r.jsxs)(s.C3N, {
    label: g.intl.string(g.t.BR68vK),
    description: g.intl.string(g.t.MobxiB),
    children: [(0, r.jsx)(m, {
      gameApplicationIds: d,
      handleChange: f,
      disabled: !l
    }), (0, r.jsx)(b, {
      gameApplicationIds: j,
      onRemoveGame: h,
      disabled: !l
    }), (0, r.jsx)(u.Z, {
      guildId: o,
      selectedGameApplicationIds: d,
      onUpdateGames: f,
      disabled: !l
    })]
  })
}