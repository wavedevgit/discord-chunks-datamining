/** Chunk was on 86915 **/
/** chunk id: 732335, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./290780.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk70956 = require("./70956.js"),
  Chunk129724 = require("./129724.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function u(e) {
  let {
    label: t,
    helperText: n,
    hideLabel: u,
    channel: h,
    onChange: g
  } = e, [p, m] = l.useState(null), f = h.rateLimitPerUser, b = l.useMemo(() => {
    let e = [...null != p ? p : o.BiE];
    return e.includes(f) || e.unshift(f), e.map(e => ({
      label: (0, a.A)(e, false),
      value: e
    }))
  }, [p, f]), x = l.useCallback(e => {
    g(e), m(null)
  }, [g]), j = l.useCallback(e => {
    if ("" === e) return void m(null);
    let t = [],
      n = parseInt(e, 10);
    if (Number.isNaN(n)) return void m(null);
    n <= o.GI0 && t.push(n);
    let i = n * s.Z.Seconds.MINUTE;
    i <= o.GI0 && t.push(i);
    let l = n * s.Z.Seconds.HOUR;
    l <= o.GI0 && t.push(l), m(t)
  }, []), v = l.useCallback(() => {
    m(null)
  }, []);
  return (0, i.jsx)(r.VcW, {
    label: t,
    hideLabel: u,
    helperText: n,
    className: d.marginBottom8,
    value: f,
    onChange: x,
    onSearchChange: j,
    options: b,
    onBlur: v,
    placeholder: c.intl.string(c.t.dBqQu4)
  })
}