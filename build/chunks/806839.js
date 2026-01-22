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
    return o.VW.toDOMNode(e, e)
  } catch (t) {
    let e = Error("Unable to find Slate EditorDOMNode: ".concat(t.message));
    return e.stack = t.stack, s.A.captureException(e), null
  }
}

function u(e, t, n) {
  let s = r.useRef(null),
    o = r.useRef(null),
    u = r.useRef(null);
  r.useLayoutEffect(() => {
    o.current = c(e), null == o.current && null == u.current && (u.current = setTimeout(() => {
      o.current = c(e)
    }, 100))
  }, [e]), r.useEffect(() => {
    let e = u.current;
    return () => {
      null != e && clearTimeout(e)
    }
  }, []);
  let d = r.useCallback(() => {
    let e = o.current;
    if (null == e) return;
    let r = e.offsetHeight;
    s.current !== r && (null != t.current && (t.current.style.height = "".concat(r, "px")), s.current = r, null == n || n(r))
  }, [t, n]);
  (0, a.g)(o, d, [d, e, n], l), r.useLayoutEffect(() => {
    let t = i.rL.findDocumentOrShadowRoot(e).defaultView;
    if ((null == t ? true : t.ResizeObserver) == null) return;
    let r = c(e);
    null != r && (s.current = r.offsetHeight, null == n || n(s.current))
  }, [t, e, n])
}