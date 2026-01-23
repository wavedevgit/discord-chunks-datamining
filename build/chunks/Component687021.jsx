/** Chunk was on web.js **/
/** chunk id: 687021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g,
  v: () => E
}), require("./667532.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function g(e) {
  let {
    guildId: t,
    className: n,
    globalOption: i,
    hideDivider: a = false,
    onChange: o,
    renderOptionSuffix: l
  } = e;
  return (0, r.jsx)(u.A, {
    className: s()(m.u, n),
    title: h.intl.string(h.t.ref7Ki),
    hideDivider: a,
    forcedDivider: true,
    children: (0, r.jsx)(E, {
      guildId: t,
      onChange: o,
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
    renderOptionSuffix: s
  } = e, u = (0, o.bG)([_.A], () => _.A.showNotice()), g = (0, o.bG)([f.Ay], () => f.Ay.getFlattenedGuildIds()), E = (0, o.bG)([d.A], () => d.A.getGuilds()), y = i.useMemo(() => {
    let e = g.map(e => {
      let t = E[e];
      return null == t ? null : {
        label: t.name,
        value: t.id
      }
    }).filter(p.Vq);
    return null != n && e.unshift(n), e
  }, [g, E, n]), b = i.useCallback(e => {
    let t = (null == e ? true : e.label) === (null == n ? true : n.label) && (null == e ? true : e.value) === (null == n ? true : n.value);
    return null == e || "" === e.value || t ? null : (0, r.jsx)(c.A, {
      className: m.c,
      guild: E[e.value],
      size: c.A.Sizes.SMOL,
      active: true
    })
  }, [E, n]), O = e => {
    if ("" === e || e === (null == n ? true : n.value)) return void a(null);
    let t = E[e];
    null != t && a(t)
  };
  return (0, r.jsx)(l.p, {
    isDisabled: u,
    onChange: O,
    value: t,
    options: y,
    renderOptionPrefix: b,
    renderOptionSuffix: s,
    placeholder: h.intl.string(h.t["kMgj+e"]),
    "data-migration-pending": true
  })
}