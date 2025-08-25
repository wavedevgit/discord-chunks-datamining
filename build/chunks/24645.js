/** Chunk was on web.js **/
/** chunk id: 24645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => s
});
var Chunk955817 = require("./955817.js"),
  Chunk647438 = require("./647438.js");
let o = 0,
  a = new Map;

function s(e) {
  let [t, n] = (0, i.useState)();
  return (0, r.b)(() => {
    if (!e) return;
    let t = a.get(e);
    if (t) n(t.element.id);
    else {
      let r = `react-aria-description-${o++}`;
      n(r);
      let i = document.createElement("div");
      i.id = r, i.style.display = "none", i.textContent = e, document.body.appendChild(i), t = {
        refCount: 0,
        element: i
      }, a.set(e, t)
    }
    return t.refCount++, () => {
      t && 0 == --t.refCount && (t.element.remove(), a.delete(e))
    }
  }, [e]), {
    "aria-describedby": e ? t : true
  }
}