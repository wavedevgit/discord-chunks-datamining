/** Chunk was on web.js **/
/** chunk id: 296898, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => a
}), require("./457529.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk140735 = require("./140735.jsx");

function a(e) {
  let {
    name: t,
    form: n,
    disabled: a,
    autoComplete: s,
    selectionMode: o,
    selectedItems: l,
    onSelectionChange: c,
    listItems: u
  } = e;
  if (null == t && (null == s || "off" === s)) return null;

  function d(e) {
    let t = Array.from(e.target.selectedOptions).map(e => e.dataset.id);
    c(u.filter(e => t.includes(e.id)))
  }
  return (0, r.jsx)(i.A, {
    children: (0, r.jsx)("select", {
      "aria-hidden": true,
      tabIndex: false,
      disabled: a,
      name: t,
      form: n,
      multiple: "multiple" === o,
      autoComplete: s,
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