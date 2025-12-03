/** Chunk was on 384 **/
/** chunk id: 718157, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => d
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456268 = require("./456268.js"),
  Chunk526429 = require("./526429.js"),
  Chunk128449 = require("./128449.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    label: t,
    description: n,
    guildId: d,
    guildMetadata: g,
    isDisabled: m,
    clearable: p = true
  } = e, f = (0, l.Wu)([o.Z], () => o.Z.getPrimaryCategories()), h = i.useCallback(e => {
    (0, s.TA)(d, null != e ? e : c.o3)
  }, [d]), b = i.useMemo(() => f.map(e => {
    let {
      categoryId: t,
      name: n
    } = e;
    return {
      value: t,
      label: n
    }
  }), [f]);
  return 0 === f.length ? (0, r.jsx)(a.$jN, {}) : (0, r.jsx)(a.VcW, {
    value: g.primaryCategoryId === c.o3 ? null : g.primaryCategoryId,
    label: t,
    description: n,
    placeholder: u.intl.string(u.t.XqMe3N),
    options: b,
    onChange: h,
    isDisabled: m,
    clearable: p
  }, b.length)
}