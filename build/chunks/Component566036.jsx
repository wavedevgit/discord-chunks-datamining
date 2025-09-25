/** Chunk was on 27087 **/
/** chunk id: 566036, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk510231 = require("./510231.js"),
  Chunk434404 = require("./434404.js"),
  Chunk383124 = require("./383124.jsx"),
  Chunk795691 = require("./795691.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk605348 = require("./605348.js"),
  Chunk998918 = require("./998918.js");
let f = () => null;

function h(e) {
  let {
    gameApplicationIds: t,
    handleChange: n,
    disabled: i
  } = e, {
    options: l,
    matchSorterOptions: s
  } = (0, o.h)();
  return (0, r.jsx)(a.VcW, {
    multi: true,
    hidePills: true,
    wrapperClassName: g.selectWrapper,
    options: l,
    value: t,
    placeholder: m.intl.string(m.t.JTLolJ),
    onChange: n,
    isDisabled: 20 === t.length || i,
    matchSorterOptions: s,
    clearQueryOnSelect: true,
    customPillContainerClassName: g.pills,
    renderCustomPill: f
  })
}

function b(e) {
  let {
    gameApplicationIds: t,
    onRemoveGame: n,
    disabled: i
  } = e;
  return 0 === t.length ? null : (0, r.jsx)("div", {
    className: g.selectedGames,
    children: t.map(e => (0, r.jsx)(d.Z, {
      applicationId: e,
      selected: true,
      onClick: n,
      disabled: i
    }, e))
  })
}
let x = [];

function j(e) {
  var t;
  let {
    profile: n,
    canManageGuild: l
  } = e, o = n.id, d = null != (t = null == n ? true : n.gameApplicationIds) ? t : x, f = i.useCallback(e => {
    c.Z.updateGuildProfile(o, {
      gameApplicationIds: e
    })
  }, [o]), j = i.useCallback(e => {
    let t = d.filter(t => t !== e);
    c.Z.updateGuildProfile(o, {
      gameApplicationIds: t
    })
  }, [o, d]), v = i.useRef(d), _ = i.useMemo(() => (s().isEqual(new Set(d), new Set(v.current)) || (v.current = [...d]), v.current), [d]);
  return (0, r.jsxs)(a.hjN, {
    className: p.section,
    children: [(0, r.jsxs)("div", {
      className: p.sectionHeader,
      children: [(0, r.jsx)(a.vwX, {
        children: m.intl.string(m.t.BR68vL)
      }), (0, r.jsx)(a.R94, {
        type: a.geA.DESCRIPTION,
        children: m.intl.string(m.t.MobxiI)
      })]
    }), (0, r.jsxs)("div", {
      className: g.sectionBody,
      children: [(0, r.jsx)(h, {
        gameApplicationIds: d,
        handleChange: f,
        disabled: !l
      }), (0, r.jsx)(b, {
        gameApplicationIds: _,
        onRemoveGame: j,
        disabled: !l
      }), (0, r.jsx)(u.Z, {
        guildId: o,
        selectedGameApplicationIds: d,
        onUpdateGames: f,
        disabled: !l
      })]
    })]
  })
}