/** Chunk was on web.js **/
/** chunk id: 24645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => s
});
var Chunk955817 = require("./955817.js"),
  Chunk647438 = require("./647438.js");
let a = 0,
  o = new Map;

function s(e) {
  let [t, n] = (0, i.useState)();
  return (0, r.b)(() => {
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