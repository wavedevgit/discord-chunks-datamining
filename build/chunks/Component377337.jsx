/** Chunk was on 47841 **/
/** chunk id: 377337, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
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

function b(e) {
  let {
    gameApplicationIds: t,
    handleChange: n,
    disabled: i
  } = e, {
    options: l,
    matchSorterOptions: s
  } = (0, c.R)();
  return (0, r.jsx)(a.ZiE, {
    selectionMode: "multiple",
    hideTags: true,
    options: l,
    value: t,
    placeholder: f.intl.string(f.t.JTLolO),
    onSelectionChange: n,
    disabled: 20 === t.length || i,
    matchSorterOptions: s
  })
}

function m(e) {
  let {
    gameApplicationIds: t,
    onRemoveGame: n,
    disabled: i
  } = e;
  return 0 === t.length ? null : (0, r.jsx)("div", {
    className: g.Rh,
    children: t.map(e => (0, r.jsx)(d.A, {
      applicationId: e,
      selected: true,
      onClick: n,
      disabled: i
    }, e))
  })
}
let p = [];

function x(e) {
  var t;
  let {
    profile: n,
    canManageGuild: l
  } = e, c = n.id, d = null != (t = null == n ? true : n.gameApplicationIds) ? t : p, g = i.useCallback(e => {
    o.A.updateGuildProfile(c, {
      gameApplicationIds: e
    })
  }, [c]), x = i.useCallback(e => {
    let t = d.filter(t => t !== e);
    o.A.updateGuildProfile(c, {
      gameApplicationIds: t
    })
  }, [c, d]), h = i.useRef(d), j = i.useMemo(() => (s().isEqual(new Set(d), new Set(h.current)) || (h.current = [...d]), h.current), [d]);
  return (0, r.jsxs)(a.nVY, {
    label: f.intl.string(f.t.BR68vK),
    description: f.intl.string(f.t.MobxiB),
    children: [(0, r.jsx)(b, {
      gameApplicationIds: d,
      handleChange: g,
      disabled: !l
    }), (0, r.jsx)(m, {
      gameApplicationIds: j,
      onRemoveGame: x,
      disabled: !l
    }), (0, r.jsx)(u.A, {
      guildId: c,
      selectedGameApplicationIds: d,
      onUpdateGames: g,
      disabled: !l
    })]
  })
}