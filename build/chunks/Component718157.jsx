/** Chunk was on 9536 **/
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
    isDisabled: f,
    clearable: b = true
  } = e, p = (0, l.Wu)([c.Z], () => c.Z.getPrimaryCategories()), h = i.useCallback(e => {
    (0, o.TA)(g, null != e ? e : d.o3)
  }, [g]), x = i.useMemo(() => p.map(e => {
    let {
      categoryId: t,
      name: n
    } = e;
    return {
      value: t,
      label: n
    }
  }), [p]);
  return 0 === p.length ? (0, r.jsx)(s.$jN, {}) : (0, r.jsx)(a.d, {
    value: m.primaryCategoryId === d.o3 ? null : m.primaryCategoryId,
    label: t,
    description: n,
    placeholder: u.intl.string(u.t.XqMe3N),
    options: x,
    onChange: h,
    isDisabled: f,
    clearable: b
  }, x.length)
}