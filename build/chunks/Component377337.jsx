/** Chunk was on 47841 **/
/** chunk id: 377337, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk383329 = require("./383329.js"),
  Chunk997509 = require("./997509.js"),
  Chunk308072 = require("./308072.jsx"),
  Chunk298818 = require("./298818.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk258761 = require("./258761.js");

function p(e) {
  let {
    gameApplicationIds: t,
    handleChange: n,
    disabled: i
  } = e, {
    options: l,
    matchSorterOptions: s
  } = (0, o.R)();
  return (0, r.jsx)(a.ZiE, {
    selectionMode: "multiple",
    hideTags: true,
    options: l,
    value: t,
    placeholder: g.intl.string(g.t.JTLolO),
    onSelectionChange: n,
    disabled: 20 === t.length || i,
    matchSorterOptions: s
  })
}

function f(e) {
  let {
    gameApplicationIds: t,
    onRemoveGame: n,
    disabled: i
  } = e;
  return 0 === t.length ? null : (0, r.jsx)("div", {
    className: m.Rh,
    children: t.map(e => (0, r.jsx)(d.A, {
      applicationId: e,
      selected: true,
      onClick: n,
      disabled: i
    }, e))
  })
}
let b = [];

function h(e) {
  var t;
  let {
    profile: n,
    canManageGuild: l
  } = e, o = n.id, d = null != (t = null == n ? true : n.gameApplicationIds) ? t : b, m = i.useCallback(e => {
    c.A.updateGuildProfile(o, {
      gameApplicationIds: e
    })
  }, [o]), h = i.useCallback(e => {
    let t = d.filter(t => t !== e);
    c.A.updateGuildProfile(o, {
      gameApplicationIds: t
    })
  }, [o, d]), x = i.useRef(d), j = i.useMemo(() => (s().isEqual(new Set(d), new Set(x.current)) || (x.current = [...d]), x.current), [d]);
  return (0, r.jsxs)(a.nVY, {
    label: g.intl.string(g.t.BR68vK),
    description: g.intl.string(g.t.MobxiB),
    children: [(0, r.jsx)(p, {
      gameApplicationIds: d,
      handleChange: m,
      disabled: !l
    }), (0, r.jsx)(f, {
      gameApplicationIds: j,
      onRemoveGame: h,
      disabled: !l
    }), (0, r.jsx)(u.A, {
      guildId: o,
      selectedGameApplicationIds: d,
      onUpdateGames: m,
      disabled: !l
    })]
  })
}