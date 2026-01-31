/** Chunk was on 78888 **/
/** chunk id: 532277, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js"), require("./667532.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk927813 = require("./927813.js"),
  Chunk879631 = require("./879631.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473169 = require("./473169.js");

function d(e) {
  let {
    label: t,
    helperText: n,
    hideLabel: d,
    channel: h,
    onChange: g
  } = e, [m, p] = i.useState(null), f = h.rateLimitPerUser, b = i.useMemo(() => {
    let e = [...null != m ? m : o.s_7];
    return e.includes(f) || e.unshift(f), e.map(e => ({
      id: e.toString(),
      label: (0, a.$)(e, false),
      value: e
    }))
  }, [m, f]), x = i.useCallback(e => {
    g(e), p(null)
  }, [g]), j = i.useCallback(e => {
    if ("" === e) return void p(null);
    let t = [],
      n = parseInt(e, 10);
    if (Number.isNaN(n)) return void p(null);
    n <= o.WA1 && t.push(n);
    let l = n * s.A.Seconds.MINUTE;
    l <= o.WA1 && t.push(l);
    let i = n * s.A.Seconds.HOUR;
    i <= o.WA1 && t.push(i), p(t)
  }, []), A = i.useCallback(() => {
    p(null)
  }, []);
  return (0, l.jsx)("div", {
    className: u.QB,
    children: (0, l.jsx)(r.ZiE, {
      selectionMode: "single",
      label: t,
      hideLabel: d,
      helperText: n,
      value: f,
      onSelectionChange: x,
      onQueryChange: e => j(e.target.value),
      options: b,
      onBlur: A,
      placeholder: c.intl.string(c.t.dBqQu4)
    })
  })
}