/** Chunk was on 9536 **/
/** chunk id: 718157, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456268 = require("./456268.js"),
  Chunk526429 = require("./526429.js"),
  Chunk128449 = require("./128449.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    label: t,
    description: n,
    guildId: u,
    guildMetadata: g,
    isDisabled: f,
    clearable: m = true
  } = e, b = (0, l.Wu)([o.Z], () => o.Z.getPrimaryCategories()), p = i.useCallback(e => {
    (0, s.TA)(u, null != e ? e : c.o3)
  }, [u]), h = i.useMemo(() => b.map(e => {
    let {
      categoryId: t,
      name: n
    } = e;
    return {
      id: t.toString(),
      value: t,
      label: n
    }
  }), [b]);
  return 0 === b.length ? (0, r.jsx)(a.$jN, {}) : (0, r.jsx)(a.VcW, {
    selectionMode: "single",
    value: g.primaryCategoryId === c.o3 ? null : g.primaryCategoryId,
    label: t,
    description: n,
    placeholder: d.intl.string(d.t.XqMe3N),
    options: h,
    onSelectionChange: p,
    disabled: f,
    clearable: m
  }, h.length)
}