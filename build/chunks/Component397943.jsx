/** Chunk was on web.js **/
/** chunk id: 397943, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk921349 = require("./921349.jsx"),
  Chunk563040 = require("./563040.js");

function s(e) {
  let {
    value: t,
    onChange: n,
    hideValue: s,
    disabled: l = false
  } = e, c = i.useRef(null), u = i.useMemo(() => new o.tR, []), [d, f] = i.useState("");

  function _(e) {
    null != t && n((0, o.rK)(t, u.selectValue(e)))
  }

  function p(e) {
    if ("Enter" === e.key) {
      let e = (0, o.tj)(t, d);
      if (null != e) {
        var n;
        _(e), null == (n = c.current) || n.close()
      }
    }
  }
  return (0, r.jsx)(a.V, {
    ref: c,
    options: u.getOptions(d),
    value: s ? true : u.lookupByValue(t),
    onChange: _,
    isDisabled: l,
    onSearchChange: f,
    onKeyDown: p
  })
}