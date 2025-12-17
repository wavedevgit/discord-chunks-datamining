/** Chunk was on 6043 **/
/** chunk id: 672188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => s,
  a: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk872175 = require("./872175.js"),
  Chunk963307 = require("./963307.js");
let i = {};

function s(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    s = (0, a.useRef)(null),
    o = (0, r.Z)(null != t ? t : i),
    c = (0, a.useRef)(null),
    d = (0, a.useRef)(e);
  return (0, a.useEffect)(() => {
    d.current = e
  }, [e]), (0, a.useEffect)(() => {
    if (!n) return;
    null == c.current && (c.current = (0, l.c)(o.current));
    let e = s.current,
      t = c.current;
    if (null != e && null != t) return (0, l.YP)(t, e, d.current), () => {
      (0, l.UC)(t, e)
    }
  }, [n, o]), s
}

function o() {
  let [e, t] = (0, Chunk473749.useState)(false);
  return {
    ref: s((0, Chunk473749.useCallback)(e => {
      t(e.isIntersecting)
    }, [])),
    inViewport: module
  }
}