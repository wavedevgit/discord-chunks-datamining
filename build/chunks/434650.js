/** Chunk was on web.js **/
/** chunk id: 434650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => u,
  S: () => s
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk237617 = require("./237617.js"),
  Chunk266338 = require("./266338.js");
let o = {};

function s(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    s = (0, r.useRef)(null),
    l = (0, i.Z)(null != t ? t : o),
    c = (0, r.useRef)(null);
  return (0, r.useLayoutEffect)(() => {
    if (!n) return;
    null == c.current && (c.current = (0, a.c)(l.current));
    let t = s.current,
      r = c.current;
    null != t && null != r && (0, a.YP)(r, t, e)
  }, [n, e, l]), (0, r.useEffect)(() => {
    if (!n) return;
    let e = s.current,
      t = c.current;
    if (null != e && null != t) return () => {
      (0, a.UC)(t, e)
    }
  }, [n, t]), s
}
let l = new Map([
  [1, {
    threshold: 1
  }]
]);

function c(e) {
  let t = l.get(e);
  return null != t || (t = {
    threshold: e
  }, l.set(e, t)), t
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    a = (0, i.Z)(t => {
      e(t.isIntersecting)
    }),
    o = (0, r.useMemo)(() => c(t), [t]);
  return s(a.current, o, n)
}