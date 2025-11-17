/** Chunk was on web.js **/
/** chunk id: 695407, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk670596 = require("./670596.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");
let l = Chunk473749.forwardRef(function(e, t) {
  let {
    query: n,
    onChange: l,
    disabled: c = false,
    placeholder: u = s.intl.string(s.t["5h0QOP"]),
    "aria-label": d,
    onInteraction: f
  } = e, _ = i.useRef(null);
  i.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null == (e = _.current) ? true : e.focus()
    },
    blur: () => {
      var e;
      return null == (e = _.current) ? true : e.blur()
    },
    activate: () => false
  }), []);
  let p = e => {
      l(e), null == f || f(a.U.SEARCH)
    },
    h = () => {
      l(""), null == f || f(a.U.SEARCH)
    };
  return (0, r.jsx)(o.E1j, {
    size: "sm",
    disabled: c,
    onChange: p,
    onClear: h,
    query: n,
    placeholder: u,
    autoFocus: false,
    "aria-label": d,
    ref: _
  })
})