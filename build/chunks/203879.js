/** Chunk was on 65599 **/
/** chunk id: 203879, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => s,
  p: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk66455 = require("./66455.js"),
  Chunk206692 = require("./206692.js");
let i = {};

function s(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    s = (0, a.useRef)(null),
    o = (0, l.A)(null != t ? t : i),
    c = (0, a.useRef)(null),
    d = (0, a.useRef)(e);
  return (0, a.useEffect)(() => {
    d.current = e
  }, [e]), (0, a.useEffect)(() => {
    if (!n) return;
    null == c.current && (c.current = (0, r.e)(o.current));
    let e = s.current,
      t = c.current;
    if (null != e && null != t) return (0, r.wB)(t, e, d.current), () => {
      (0, r.$v)(t, e)
    }
  }, [n, o]), s
}

function o() {
  let [e, t] = (0, a.useState)(false);
  return {
    ref: s((0, a.useCallback)(e => {
      t(e.isIntersecting)
    }, [])),
    inViewport: e
  }
}