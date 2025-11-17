/** Chunk was on web.js **/
/** chunk id: 178503, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JD: () => _,
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
  if (e.key !== o.LT) return;
  let u = (0, a.uB)(e);
  if (null == u) return;
  let d = null,
    f = null,
    _ = e.target;
  for (; null != _;) {
    if (_.hasAttribute(s)) {
      d = _.getAttribute(s), f = _;
      break
    }
    _ = _.parentElement
  }
  let p = (0, i.E)({
    getFocusableElements: () => Array.from(u.querySelectorAll("[".concat(s, '="').concat(null != d ? d : l, '"]'))),
    getActiveElement: () => u.activeElement
  });
  if ((null == (t = (0, a.uB)(e)) ? true : t.activeElement) == null || null == f) {
    null == (n = p.getFirstFocusableElement()) || n.focus();
    return
  }
  e.getModifierState("Shift") ? null == (r = await p.getPreviousFocusableElement({
    wrap: true,
    from: f
  })) || r.focus() : null == (c = await p.getNextFocusableElement({
    wrap: true,
    from: f
  })) || c.focus()
}

function _(e) {
  r.useEffect(() => {
    if (e) return window.addEventListener("keydown", f), () => {
      window.removeEventListener("keydown", f)
    }
  }, [e])
}