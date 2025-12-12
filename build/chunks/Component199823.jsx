/** Chunk was on web.js **/
/** chunk id: 199823, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => o
}), require("./49124.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk635041 = require("./635041.jsx");

function o(e) {
  let {
    name: t,
    form: n,
    disabled: o,
    autoComplete: a,
    selectionMode: s,
    selectedItems: l,
    onSelectionChange: c,
    listItems: u
  } = e;
  if (null == t && (null == a || "off" === a)) return null;

  function d(e) {
    let t = Array.from(e.target.selectedOptions).map(e => e.dataset.id);
    c(u.filter(e => t.includes(e.id)))
  }
  return (0, r.jsx)(i.n, {
    children: (0, r.jsx)("select", {
      "aria-hidden": true,
      tabIndex: false,
      disabled: o,
      name: t,
      form: n,
      multiple: "multiple" === s,
      autoComplete: a,
      onChange: d,
      children: null == u ? true : u.map(e => {
        let t = "object" == typeof e.value ? JSON.stringify(e.value) : String(e.value);
        return (0, r.jsx)("option", {
          "data-id": e.id,
          value: t,
          selected: l.includes(e),
          children: e.label
        }, e.id)
      })
    })
  })
}