/** Chunk was on 33285 **/
/** chunk id: 537383, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk794433 = require("./794433.jsx");
let i = Chunk473749.forwardRef(function(e, t) {
  let {
    query: n,
    onQueryChange: l,
    onRemoveTag: i,
    onSelect: s,
    onSelectionChange: a,
    selectedSection: c,
    selectedRow: u,
    tags: d,
    sections: m,
    placeholder: x = "",
    focusAfterReady: h,
    isReady: b,
    "aria-labelledby": w,
    "aria-controls": f
  } = e;
  return (0, r.jsx)(o.Z, {
    autoFocus: true,
    maxHeight: 100,
    onQueryChange: l,
    onRemoveTag: i,
    selectedSection: c,
    selectedRow: u,
    onSelect: s,
    onSelectionChange: a,
    placeholder: 0 === d.length ? x : "",
    query: n,
    ref: t,
    size: o.Z.Sizes.MEDIUM,
    tags: d,
    sections: m,
    focusAfterReady: h,
    isReady: b,
    inputProps: {
      "aria-labelledby": w,
      "aria-controls": f,
      "aria-expanded": true,
      "aria-activedescendant": "user-row-".concat(u)
    }
  })
})