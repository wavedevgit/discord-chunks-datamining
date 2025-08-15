/** Chunk was on 7590 **/
/** chunk id: 537383, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk794433 = require("./794433.jsx");
let a = Chunk73800.forwardRef(function(e, t) {
  let {
    query: n,
    onQueryChange: l,
    onRemoveTag: a,
    onSelect: s,
    onSelectionChange: o,
    selectedSection: c,
    selectedRow: d,
    tags: u,
    sections: m,
    placeholder: x = "",
    focusAfterReady: h,
    isReady: b,
    "aria-labelledby": y,
    "aria-controls": f
  } = e;
  return (0, r.jsx)(i.Z, {
    autoFocus: true,
    maxHeight: 100,
    onQueryChange: l,
    onRemoveTag: a,
    selectedSection: c,
    selectedRow: d,
    onSelect: s,
    onSelectionChange: o,
    placeholder: 0 === u.length ? x : "",
    query: n,
    ref: t,
    size: i.Z.Sizes.MEDIUM,
    tags: u,
    sections: m,
    focusAfterReady: h,
    isReady: b,
    inputProps: {
      "aria-labelledby": y,
      "aria-controls": f,
      "aria-expanded": true,
      "aria-activedescendant": "user-row-".concat(d)
    }
  })
})