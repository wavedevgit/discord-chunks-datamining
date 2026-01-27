/** Chunk was on web.js **/
/** chunk id: 807177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => s
});
var Chunk3388 = require("./3388.js"),
  Chunk64700 = require("./64700.js");
let a = 0,
  o = new Map;

function s(e) {
  let [t, n] = (0, i.useState)();
  return (0, r.N)(() => {
    if (!e) return;
    let t = o.get(e);
    if (t) n(t.element.id);
    else {
      let r = `react-aria-description-${a++}`;
      n(r);
      let i = document.createElement("div");
      i.id = r, i.style.display = "none", i.textContent = e, document.body.appendChild(i), t = {
        refCount: 0,
        element: i
      }, o.set(e, t)
    }
    return t.refCount++, () => {
      t && 0 == --t.refCount && (t.element.remove(), o.delete(e))
    }
  }, [e]), {
    "aria-describedby": e ? t : true
  }
}