/** Chunk was on web.js **/
/** chunk id: 397943, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => l
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk921349 = require("./921349.jsx"),
  Chunk563040 = require("./563040.js"),
  Chunk487055 = require("./487055.js");

function l(e) {
  let {
    value: t,
    onChange: n,
    hideValue: l,
    disabled: c = false
  } = e, u = i.useRef(null), d = i.useMemo(() => new a.tR, []), [f, _] = i.useState("");

  function p(e) {
    null != t && n((0, a.rK)(t, d.selectValue(e)))
  }

  function h(e) {
    if ("Enter" === e.key) {
      let e = (0, a.tj)(t, f);
      if (null != e) {
        var n;
        p(e), null == (n = u.current) || n.close()
      }
    }
  }
  return (0, r.jsx)(o.V, {
    ref: u,
    className: s.select,
    options: d.getOptions(f),
    value: l ? true : d.lookupByValue(t),
    onChange: p,
    isDisabled: c,
    onSearchChange: _,
    onKeyDown: h
  })
}