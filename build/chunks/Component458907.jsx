/** Chunk was on 47841 **/
/** chunk id: 458907, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  T: () => u
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk460760 = require("./460760.js"),
  Chunk997590 = require("./997590.js"),
  Chunk324580 = require("./324580.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    label: t,
    description: n,
    guildId: u,
    guildMetadata: f,
    isDisabled: g,
    clearable: b = true
  } = e, m = (0, l.yK)([c.A], () => c.A.getPrimaryCategories()), p = i.useCallback(e => {
    (0, a.GX)(u, null != e ? e : o.ig)
  }, [u]), x = i.useMemo(() => m.map(e => {
    let {
      categoryId: t,
      name: n
    } = e;
    return {
      id: t.toString(),
      value: t,
      label: n
    }
  }), [m]);
  return 0 === m.length ? (0, r.jsx)(s.y$y, {}) : (0, r.jsx)(s.ZiE, {
    selectionMode: "single",
    value: f.primaryCategoryId === o.ig ? null : f.primaryCategoryId,
    label: t,
    description: n,
    placeholder: d.intl.string(d.t.XqMe3N),
    options: x,
    onSelectionChange: p,
    disabled: g,
    clearable: b
  }, x.length)
}