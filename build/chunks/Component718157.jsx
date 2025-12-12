/** Chunk was on 384 **/
/** chunk id: 718157, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => g
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk456268 = require("./456268.js"),
  Chunk526429 = require("./526429.js"),
  Chunk128449 = require("./128449.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    label: t,
    description: n,
    guildId: g,
    guildMetadata: m,
    isDisabled: p,
    clearable: f = true
  } = e, h = (0, l.Wu)([c.Z], () => c.Z.getPrimaryCategories()), x = i.useCallback(e => {
    (0, o.TA)(g, null != e ? e : u.o3)
  }, [g]), b = i.useMemo(() => h.map(e => {
    let {
      categoryId: t,
      name: n
    } = e;
    return {
      value: t,
      label: n
    }
  }), [h]);
  return 0 === h.length ? (0, r.jsx)(a.$jN, {}) : (0, r.jsx)(s.d, {
    value: m.primaryCategoryId === u.o3 ? null : m.primaryCategoryId,
    label: t,
    description: n,
    placeholder: d.intl.string(d.t.XqMe3N),
    options: b,
    onChange: x,
    isDisabled: p,
    clearable: f
  }, b.length)
}