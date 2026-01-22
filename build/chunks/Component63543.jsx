/** Chunk was on 72271 **/
/** chunk id: 63543, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk39255 = require("./39255.jsx");
let s = Chunk64700.forwardRef(function(e, t) {
  let {
    query: n,
    onQueryChange: l,
    onRemoveTag: s,
    onSelect: i,
    onSelectionChange: a,
    selectedSection: c,
    selectedRow: u,
    tags: d,
    sections: x,
    placeholder: h = "",
    focusAfterReady: f,
    isReady: m,
    "aria-labelledby": b,
    "aria-controls": w
  } = e;
  return (0, r.jsx)(o.A, {
    autoFocus: true,
    maxHeight: 100,
    onQueryChange: l,
    onRemoveTag: s,
    selectedSection: c,
    selectedRow: u,
    onSelect: i,
    onSelectionChange: a,
    placeholder: 0 === d.length ? h : "",
    query: n,
    ref: t,
    size: o.A.Sizes.MEDIUM,
    tags: d,
    sections: x,
    focusAfterReady: f,
    isReady: m,
    inputProps: {
      "aria-labelledby": b,
      "aria-controls": w,
      "aria-expanded": true,
      "aria-activedescendant": "user-row-".concat(u)
    }
  })
})