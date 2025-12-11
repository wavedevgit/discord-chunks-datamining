/** Chunk was on web.js **/
/** chunk id: 856768, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g,
  q: () => E
}), require("./290780.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  Chunk823379 = require("./823379.js"),
  Chunk778825 = require("./778825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk733070 = require("./733070.js");

function g(e) {
  let {
    guildId: t,
    className: n,
    globalOption: i,
    hideDivider: a = false,
    onChange: s,
    renderOptionSuffix: l
  } = e;
  return (0, r.jsx)(u.Z, {
    className: o()(h.section, n),
    title: m.intl.string(m.t.ref7Ki),
    hideDivider: a,
    forcedDivider: true,
    children: (0, r.jsx)(E, {
      guildId: t,
      onChange: s,
      renderOptionSuffix: l,
      globalOption: i
    })
  })
}

function E(e) {
  let {
    guildId: t,
    globalOption: n,
    onChange: a,
    renderOptionSuffix: o
  } = e, u = (0, s.e7)([_.Z], () => _.Z.showNotice()), g = (0, s.e7)([f.ZP], () => f.ZP.getFlattenedGuildIds()), E = (0, s.e7)([d.Z], () => d.Z.getGuilds()), b = i.useMemo(() => {
    let e = g.map(e => {
      let t = E[e];
      return null == t ? null : {
        label: t.name,
        value: t.id
      }
    }).filter(p.lm);
    return null != n && e.unshift(n), e
  }, [g, E, n]), y = i.useCallback(e => {
    let t = (null == e ? true : e.label) === (null == n ? true : n.label) && (null == e ? true : e.value) === (null == n ? true : n.value);
    return null == e || "" === e.value || t ? null : (0, r.jsx)(c.Z, {
      className: h.guildSelectOptionIcon,
      guild: E[e.value],
      size: c.Z.Sizes.SMOL,
      active: true
    })
  }, [E, n]), O = e => {
    if ("" === e || e === (null == n ? true : n.value)) return void a(null);
    let t = E[e];
    null != t && a(t)
  };
  return (0, r.jsx)(l.d, {
    isDisabled: u,
    onChange: O,
    value: t,
    options: b,
    renderOptionPrefix: y,
    renderOptionSuffix: o,
    placeholder: m.intl.string(m.t["kMgj+e"])
  })
}