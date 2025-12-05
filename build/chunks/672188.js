/** Chunk was on 83615 **/
/** chunk id: 672188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => i,
  a: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk872175 = require("./872175.js"),
  Chunk963307 = require("./963307.js");
let a = {};

function i(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    i = (0, r.useRef)(null),
    l = (0, s.Z)(null != t ? t : a),
    c = (0, r.useRef)(null),
    u = (0, r.useRef)(e);
  return (0, r.useEffect)(() => {
    u.current = e
  }, [e]), (0, r.useEffect)(() => {
    if (!n) return;
    null == c.current && (c.current = (0, o.c)(l.current));
    let e = i.current,
      t = c.current;
    if (null != e && null != t) return (0, o.YP)(t, e, u.current), () => {
      (0, o.UC)(t, e)
    }
  }, [n, l]), i
}

function l() {
  let [e, t] = (0, Chunk473749.useState)(false);
  return {
    ref: i((0, Chunk473749.useCallback)(e => {
      t(e.isIntersecting)
    }, [])),
    inViewport: module
  }
}