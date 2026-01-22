/** Chunk was on web.js **/
/** chunk id: 583650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk900283 = require("./900283.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");
let l = Chunk64700.forwardRef(function(e, t) {
  let {
    query: n,
    onChange: l,
    disabled: c = false,
    placeholder: u = o.intl.string(o.t["5h0QOP"]),
    "aria-label": d,
    onInteraction: f
  } = e, p = i.useRef(null);
  i.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null == (e = p.current) ? true : e.focus()
    },
    blur: () => {
      var e;
      return null == (e = p.current) ? true : e.blur()
    },
    activate: () => false
  }), []);
  let _ = e => {
      l(e), null == f || f(a.Q.SEARCH)
    },
    h = () => {
      l(""), null == f || f(a.Q.SEARCH)
    };
  return (0, r.jsx)(s.IWV, {
    size: "sm",
    disabled: c,
    onChange: _,
    onClear: h,
    query: n,
    placeholder: u,
    autoFocus: false,
    "aria-label": d,
    ref: p
  })
})