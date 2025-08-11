/** Chunk was on web.js **/
/** chunk id: 537383, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk794433 = require("./794433.js");
let a = Chunk73800.forwardRef(function(e, t) {
  let {
    query: n,
    onQueryChange: i,
    onRemoveTag: a,
    onSelect: s,
    onSelectionChange: l,
    selectedSection: c,
    selectedRow: u,
    tags: d,
    sections: f,
    placeholder: _ = "",
    focusAfterReady: p,
    isReady: h,
    "aria-labelledby": m,
    "aria-controls": g
  } = e;
  return <o.Z autoFocus={true} maxHeight={100} onQueryChange={i} onRemoveTag={a} selectedSection={c} selectedRow={u} onSelect={s} onSelectionChange={l} placeholder={0 === d.length ? _ : ""} query={n} ref={t} size={o.Z.Sizes.MEDIUM} tags={d} sections={f} focusAfterReady={p} isReady={h} inputProps={{
      "aria-labelledby": m,
      "aria-controls": g,
      "aria-expanded": true,
      "aria-activedescendant": "user-row-".concat(u)
    }} />
})