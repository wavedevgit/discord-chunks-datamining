/** Chunk was on 95257 **/
/** chunk id: 856768, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  Z: () => g,
  q: () => j
}), require("./290780.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  d = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  Chunk823379 = require("./823379.js"),
  Chunk778825 = require("./778825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk216601 = require("./216601.js");

function g(e) {
  let {
    guildId: n,
    className: l,
    globalOption: i,
    hideDivider: a = false,
    onChange: o,
    renderOptionSuffix: r
  } = e;
  return (0, t.jsx)(s.Z, {
    className: d()(x.section, l),
    title: m.intl.string(m.t.ref7Ki),
    hideDivider: a,
    forcedDivider: true,
    children: (0, t.jsx)(j, {
      guildId: n,
      onChange: o,
      renderOptionSuffix: r,
      globalOption: i
    })
  })
}

function j(e) {
  let {
    guildId: n,
    globalOption: l,
    onChange: a,
    renderOptionSuffix: d
  } = e, s = (0, o.e7)([f.Z], () => f.Z.showNotice()), g = (0, o.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()), j = (0, o.e7)([u.Z], () => u.Z.getGuilds()), p = i.useMemo(() => {
    let e = g.map(e => {
      let n = j[e];
      return null == n ? null : {
        label: n.name,
        value: n.id
      }
    }).filter(v.lm);
    return null != l && e.unshift(l), e
  }, [g, j, l]), C = i.useCallback(e => {
    let n = (null == e ? true : e.label) === (null == l ? true : l.label) && (null == e ? true : e.value) === (null == l ? true : l.value);
    return null == e || "" === e.value || n ? null : (0, t.jsx)(c.Z, {
      className: x.guildSelectOptionIcon,
      guild: j[e.value],
      size: c.Z.Sizes.SMOL,
      active: true
    })
  }, [j, l]);
  return (0, t.jsx)(r.VcW, {
    isDisabled: s,
    onChange: e => {
      if ("" === e || e === (null == l ? true : l.value)) return void a(null);
      let n = j[e];
      null != n && a(n)
    },
    value: n,
    options: p,
    renderOptionPrefix: C,
    renderOptionSuffix: d,
    placeholder: m.intl.string(m.t["kMgj+f"])
  })
}