/** Chunk was on 6043 **/
/** chunk id: 672188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => s,
  a: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk872175 = require("./872175.js"),
  Chunk963307 = require("./963307.js");
let l = {};

function s(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    s = (0, a.useRef)(null),
    o = (0, r.Z)(null != t ? t : l),
    c = (0, a.useRef)(null),
    d = (0, a.useRef)(e);
  return (0, a.useEffect)(() => {
    d.current = e
  }, [e]), (0, a.useEffect)(() => {
    if (!n) return;
    null == c.current && (c.current = (0, i.c)(o.current));
    let e = s.current,
      t = c.current;
    if (null != e && null != t) return (0, i.YP)(t, e, d.current), () => {
      (0, i.UC)(t, e)
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