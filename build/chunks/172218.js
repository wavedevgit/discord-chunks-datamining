/** Chunk was on web.js **/
/** chunk id: 172218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => s,
  K: () => u
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk66455 = require("./66455.js"),
  Chunk206692 = require("./206692.js");
let o = {};

function s(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    s = (0, r.useRef)(null),
    l = (0, i.A)(null != t ? t : o),
    c = (0, r.useRef)(null);
  return (0, r.useLayoutEffect)(() => {
    if (!n) return;
    null == c.current && (c.current = (0, a.e)(l.current));
    let t = s.current,
      r = c.current;
    null != t && null != r && (0, a.wB)(r, t, e)
  }, [n, e, l]), (0, r.useEffect)(() => {
    if (!n) return;
    let e = s.current,
      t = c.current;
    if (null != e && null != t) return () => {
      (0, a.$v)(t, e)
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
    a = (0, i.A)(t => {
      e(t.isIntersecting)
    }),
    o = (0, r.useMemo)(() => c(t), [t]);
  return s(a.current, o, n)
}