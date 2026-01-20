/** Chunk was on 86915 **/
/** chunk id: 732335, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./290780.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk70956 = require("./70956.js"),
  Chunk129724 = require("./129724.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk478411 = require("./478411.js");

function u(e) {
  let {
    label: t,
    helperText: n,
    hideLabel: u,
    channel: h,
    onChange: g
  } = e, [m, f] = l.useState(null), p = h.rateLimitPerUser, b = l.useMemo(() => {
    let e = [...null != m ? m : o.BiE];
    return e.includes(p) || e.unshift(p), e.map(e => ({
      id: e.toString(),
      label: (0, s.A)(e, false),
      value: e
    }))
  }, [m, p]), x = l.useCallback(e => {
    g(e), f(null)
  }, [g]), j = l.useCallback(e => {
    if ("" === e) return void f(null);
    let t = [],
      n = parseInt(e, 10);
    if (Number.isNaN(n)) return void f(null);
    n <= o.GI0 && t.push(n);
    let i = n * a.Z.Seconds.MINUTE;
    i <= o.GI0 && t.push(i);
    let l = n * a.Z.Seconds.HOUR;
    l <= o.GI0 && t.push(l), f(t)
  }, []), v = l.useCallback(() => {
    f(null)
  }, []);
  return (0, i.jsx)("div", {
    className: d.marginBottom8,
    children: (0, i.jsx)(r.VcW, {
      selectionMode: "single",
      label: t,
      hideLabel: u,
      helperText: n,
      value: p,
      onSelectionChange: x,
      onQueryChange: e => j(e.target.value),
      options: b,
      onBlur: v,
      placeholder: c.intl.string(c.t.dBqQu4)
    })
  })
}