/** Chunk was on 56184 **/
/** chunk id: 672188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => i,
  a: () => l
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk237617 = require("./237617.js"),
  Chunk266338 = require("./266338.js");
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
  let [e, t] = (0, Chunk73800.useState)(false);
  return {
    ref: i((0, Chunk73800.useCallback)(e => {
      t(e.isIntersecting)
    }, [])),
    inViewport: module
  }
}