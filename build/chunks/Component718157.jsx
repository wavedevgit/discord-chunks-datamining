/** Chunk was on 88479 **/
/** chunk id: 718157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456268 = require("./456268.js"),
  Chunk526429 = require("./526429.js"),
  Chunk128449 = require("./128449.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    guildId: t,
    guildMetadata: n,
    isDisabled: u,
    clearable: m = true
  } = e, g = (0, l.Wu)([o.Z], () => o.Z.getPrimaryCategories()), p = i.useCallback(e => {
    (0, s.TA)(t, null != e ? e : c.o3)
  }, [t]), h = i.useMemo(() => g.map(e => {
    let {
      categoryId: t,
      name: n
    } = e;
    return {
      value: t,
      label: n
    }
  }), [g]);
  return 0 === g.length ? (0, r.jsx)(a.$jN, {}) : (0, r.jsx)(a.VcW, {
    value: n.primaryCategoryId === c.o3 ? null : n.primaryCategoryId,
    placeholder: d.intl.string(d.t.XqMe3N),
    options: h,
    onChange: p,
    isDisabled: u,
    clearable: m
  }, h.length)
}