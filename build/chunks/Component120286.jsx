/** Chunk was on 59275 **/
/** chunk id: 120286, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  k: () => p
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
let g = {
    pink: "pinkCountdown"
  },
  p = Chunk64700.memo(function(e) {
    let {
      message: t,
      onClick: n,
      countdownEndDate: s,
      variant: p
    } = e, m = l.useMemo(() => {
      if (null == s) return null;
      let e = s instanceof Date ? s : new Date(s);
      return isNaN(e.getTime()) ? null : e
    }, [s]), f = (0, o.A)(null != m ? m : 0, 1e3, true, null == m);
    if (null != m && Object.values(f).every(e => 0 === e)) return null;
    let b = null != p ? d[p] : true,
      h = null != p ? d[g[p]] : true;
    return (0, r.jsx)(i.DUT, {
      className: a()(d.nagBar, b),
      onClick: n,
      "aria-label": u.intl.string(u.t.zMqLH9),
      children: (0, r.jsxs)("div", {
        className: d.content,
        children: [(0, r.jsx)(i.Text, {
          variant: "text-md/medium",
          color: "always-white",
          className: d.message,
          children: t
        }), null != m && (0, r.jsx)(c.e, {
          endDate: m,
          size: "md",
          className: h,
          showSeconds: true
        })]
      })
    })
  })