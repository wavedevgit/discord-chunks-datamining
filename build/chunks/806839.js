/** Chunk was on web.js **/
/** chunk id: 806839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./65821.js");
var Chunk64700 = require("./64700.js"),
  Chunk253018 = require("./253018.js"),
  Chunk770178 = require("./770178.js"),
  Chunk728458 = require("./728458.js"),
  Chunk711371 = require("./711371.js");
let l = {
  enabled: true,
  fireOnMount: true,
  fireOnDepsChange: true
};

function c(e) {
  try {
    return s.VW.toDOMNode(e, e)
  } catch (t) {
    let e = Error("Unable to find Slate EditorDOMNode: ".concat(t.message));
    return e.stack = t.stack, o.A.captureException(e), null
  }
}

function u(e, t, n) {
  let o = r.useRef(null),
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
    o.current !== r && (null != t.current && (t.current.style.height = "".concat(r, "px")), o.current = r, null == n || n(r))
  }, [t, n]);
  (0, a.g)(s, d, [d, e, n], l), r.useLayoutEffect(() => {
    let t = i.rL.findDocumentOrShadowRoot(e).defaultView;
    if ((null == t ? true : t.ResizeObserver) == null) return;
    let r = c(e);
    null != r && (o.current = r.offsetHeight, null == n || n(o.current))
  }, [t, e, n])
}