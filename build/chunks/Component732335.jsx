/** Chunk was on 86915 **/
/** chunk id: 732335, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./290780.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk70956 = require("./70956.js"),
  Chunk129724 = require("./129724.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk881488 = require("./881488.js");

function u(e) {
  let {
    channel: t,
    onChange: n
  } = e, [u, h] = l.useState(null), g = t.rateLimitPerUser, m = l.useMemo(() => {
    let e = [...null != u ? u : o.BiE];
    return e.includes(g) || e.unshift(g), e.map(e => ({
      label: (0, a.A)(e, false),
      value: e
    }))
  }, [u, g]), p = l.useCallback(e => {
    n(e), h(null)
  }, [n]), f = l.useCallback(e => {
    if ("" === e) return void h(null);
    let t = [],
      n = parseInt(e, 10);
    if (Number.isNaN(n)) return void h(null);
    n <= o.GI0 && t.push(n);
    let i = n * s.Z.Seconds.MINUTE;
    i <= o.GI0 && t.push(i);
    let l = n * s.Z.Seconds.HOUR;
    l <= o.GI0 && t.push(l), h(t)
  }, []), x = l.useCallback(() => {
    h(null)
  }, []);
  return (0, i.jsx)(r.VcW, {
    className: d.marginBottom8,
    value: g,
    onChange: p,
    onSearchChange: f,
    options: m,
    onBlur: x,
    placeholder: c.intl.string(c.t.dBqQu7)
  })
}