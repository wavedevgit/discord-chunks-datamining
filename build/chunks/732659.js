/** Chunk was on web.js **/
/** chunk id: 732659, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./415506.js");
var Chunk473749 = require("./473749.js"),
  Chunk685578 = require("./685578.js"),
  Chunk393903 = require("./393903.js"),
  Chunk960048 = require("./960048.js"),
  Chunk887490 = require("./887490.js");
let l = {
  enabled: true,
  fireOnMount: true,
  fireOnDepsChange: true
};

function c(e) {
  try {
    return s.bN.toDOMNode(e, e)
  } catch (t) {
    let e = Error("Unable to find Slate EditorDOMNode: ".concat(t.message));
    return e.stack = t.stack, a.Z.captureException(e), null
  }
}

function u(e, t, n) {
  let a = r.useRef(null),
    s = r.useRef(null),
    u = r.useRef(null);
  r.useLayoutEffect(() => {
    s.current = c(e), null == s.current && null == u.current && (u.current = setTimeout(() => {
      s.current = c(e)
    }, 100))
  }, [e]), r.useEffect(() => {
    let e = u.current;
    return () => {
      null != e && clearTimeout(e)
    }
  }, []);
  let d = r.useCallback(() => {
    let e = s.current;
    if (null == e) return;
    let r = e.offsetHeight;
    a.current !== r && (null != t.current && (t.current.style.height = "".concat(r, "px")), a.current = r, null == n || n(r))
  }, [t, n]);
  (0, o.s)(s, d, [d, e, n], l), r.useLayoutEffect(() => {
    let t = i.F3.findDocumentOrShadowRoot(e).defaultView;
    if ((null == t ? true : t.ResizeObserver) == null) return;
    let r = c(e);
    null != r && (a.current = r.offsetHeight, null == n || n(a.current))
  }, [t, e, n])
}