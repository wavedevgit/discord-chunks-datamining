/** Chunk was on web.js **/
/** chunk id: 178503, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JD: () => p,
  Wd: () => d,
  mF: () => u
}), require("./54381.js");
var Chunk473749 = require("./473749.js"),
  Chunk372817 = require("./372817.js"),
  Chunk374470 = require("./374470.js"),
  Chunk295907 = require("./295907.js");
let s = "data-jump-section",
  l = "global",
  c = Chunk473749.createContext(l);

function u() {
  let e = Chunk473749.useContext(c);
  return Chunk473749.useMemo(() => ({
    [s]: module
  }), [module])
}

function d(e) {
  let t = u();
  return e.children(t)
}
async function f(e) {
  var t, n, r, c;
  if (e.key !== a.LT) return;
  let u = (0, o.uB)(e);
  if (null == u) return;
  let d = null,
    f = null,
    p = e.target;
  for (; null != p;) {
    if (p.hasAttribute(s)) {
      d = p.getAttribute(s), f = p;
      break
    }
    p = p.parentElement
  }
  let _ = (0, i.E)({
    getFocusableElements: () => Array.from(u.querySelectorAll("[".concat(s, '="').concat(null != d ? d : l, '"]'))),
    getActiveElement: () => u.activeElement
  });
  if ((null == (t = (0, o.uB)(e)) ? true : t.activeElement) == null || null == f) {
    null == (n = _.getFirstFocusableElement()) || n.focus();
    return
  }
  e.getModifierState("Shift") ? null == (r = await _.getPreviousFocusableElement({
    wrap: true,
    from: f
  })) || r.focus() : null == (c = await _.getNextFocusableElement({
    wrap: true,
    from: f
  })) || c.focus()
}

function p(e) {
  r.useEffect(() => {
    if (e) return window.addEventListener("keydown", f), () => {
      window.removeEventListener("keydown", f)
    }
  }, [e])
}