/** Chunk was on web.js **/
/** chunk id: 312138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Op: () => p,
  R7: () => u,
  sk: () => d
}), require("./627968.js");
var Chunk64700 = require("./64700.js"),
  Chunk52724 = require("./52724.js"),
  Chunk621466 = require("./621466.js"),
  Chunk650583 = require("./650583.js");
let s = "data-jump-section",
  l = "global",
  c = Chunk64700.createContext(l);

function u() {
  let e = r.useContext(c);
  return r.useMemo(() => ({
    [s]: e
  }), [e])
}

function d(e) {
  let t = u();
  return e.children(t)
}
async function f(e) {
  var t, n, r, c;
  if (e.key !== o.mi) return;
  let u = (0, a.BF)(e);
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
  let _ = (0, i.C)({
    getFocusableElements: () => Array.from(u.querySelectorAll("[".concat(s, '="').concat(null != d ? d : l, '"]'))),
    getActiveElement: () => u.activeElement
  });
  if ((null == (t = (0, a.BF)(e)) ? true : t.activeElement) == null || null == f) {
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