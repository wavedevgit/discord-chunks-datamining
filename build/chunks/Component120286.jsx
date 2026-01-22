/** Chunk was on 59275 **/
/** chunk id: 120286, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  k: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk496431 = require("./496431.js"),
  Chunk854818 = require("./854818.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk587496 = require("./587496.js");
let f = {
    pink: "pinkCountdown"
  },
  b = Chunk64700.memo(function(e) {
    let {
      message: t,
      onClick: l,
      countdownEndDate: s,
      variant: b
    } = e, g = r.useMemo(() => {
      if (null == s) return null;
      let e = s instanceof Date ? s : new Date(s);
      return isNaN(e.getTime()) ? null : e
    }, [s]), m = (0, o.A)(null != g ? g : 0, 1e3, true, null == g);
    if (null != g && Object.values(m).every(e => 0 === e)) return null;
    let p = null != b ? d[b] : true,
      h = null != b ? d[f[b]] : true;
    return (0, n.jsx)(i.DUT, {
      className: a()(d.nagBar, p),
      onClick: l,
      "aria-label": u.intl.string(u.t.zMqLH9),
      children: (0, n.jsxs)("div", {
        className: d.content,
        children: [(0, n.jsx)(i.Text, {
          variant: "text-md/medium",
          color: "always-white",
          className: d.message,
          children: t
        }), null != g && (0, n.jsx)(c.e, {
          endDate: g,
          size: "md",
          className: h
        })]
      })
    })
  })