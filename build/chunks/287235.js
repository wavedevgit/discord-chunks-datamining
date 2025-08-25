/** Chunk was on web.js **/
/** chunk id: 287235, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JD: () => _,
  Wd: () => d,
  mF: () => u
}), require("./951288.js");
var Chunk647438 = require("./647438.js"),
  Chunk372817 = require("./372817.js"),
  Chunk5967 = require("./5967.js"),
  Chunk420212 = require("./420212.js");
let s = "data-jump-section",
  l = "global",
  c = Chunk647438.createContext(l);

function u() {
  let e = Chunk647438.useContext(c);
  return Chunk647438.useMemo(() => ({
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
  if ((null == (t = (0, o.uB)(e)) ? true : t.activeElement) == null || null == f) {
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