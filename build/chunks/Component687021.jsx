/** Chunk was on 82220 **/
/** chunk id: 687021, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => p,
  v: () => x
}), require("./667532.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk444550 = require("./444550.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk128450 = require("./128450.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk711014 = require("./711014.js"),
  Chunk403362 = require("./403362.js"),
  Chunk833336 = require("./833336.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk306505 = require("./306505.js");

function p(e) {
  let {
    guildId: n,
    className: t,
    globalOption: i,
    hideDivider: l = false,
    onChange: d,
    renderOptionSuffix: c
  } = e;
  return (0, r.jsx)(o.A, {
    className: a()(g.u, t),
    title: m.intl.string(m.t.ref7Ki),
    hideDivider: l,
    forcedDivider: true,
    children: (0, r.jsx)(x, {
      guildId: n,
      onChange: d,
      renderOptionSuffix: c,
      globalOption: i
    })
  })
}

function x(e) {
  let {
    guildId: n,
    globalOption: t,
    onChange: l,
    renderOptionSuffix: a
  } = e, o = (0, d.bG)([v.A], () => v.A.showNotice()), p = (0, d.bG)([f.Ay], () => f.Ay.getFlattenedGuildIds()), x = (0, d.bG)([s.A], () => s.A.getGuilds()), A = i.useMemo(() => {
    let e = p.map(e => {
      let n = x[e];
      return null == n ? null : {
        label: n.name,
        value: n.id
      }
    }).filter(h.Vq);
    return null != t && e.unshift(t), e
  }, [p, x, t]), _ = i.useCallback(e => {
    let n = (null == e ? true : e.label) === (null == t ? true : t.label) && (null == e ? true : e.value) === (null == t ? true : t.value);
    return null == e || "" === e.value || n ? null : (0, r.jsx)(u.A, {
      className: g.c,
      guild: x[e.value],
      size: u.A.Sizes.SMOL,
      active: true
    })
  }, [x, t]);
  return (0, r.jsx)(c.p, {
    isDisabled: o,
    onChange: e => {
      if ("" === e || e === (null == t ? true : t.value)) return void l(null);
      let n = x[e];
      null != n && l(n)
    },
    value: n,
    options: A,
    renderOptionPrefix: _,
    renderOptionSuffix: a,
    placeholder: m.intl.string(m.t["kMgj+e"]),
    "data-migration-pending": true
  })
}