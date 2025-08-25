/** Chunk was on web.js **/
/** chunk id: 672188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => s,
  a: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk237617 = require("./237617.js"),
  Chunk266338 = require("./266338.js");
let a = {};

function s(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    s = (0, r.useRef)(null),
    l = (0, i.Z)(null != t ? t : a),
    c = (0, r.useRef)(null),
    u = (0, r.useRef)(e);
  return (0, r.useEffect)(() => {
    u.current = e
  }, [e]), (0, r.useEffect)(() => {
    if (!n) return;
    null == c.current && (c.current = (0, o.c)(l.current));
    let e = s.current,
      t = c.current;
    if (null != e && null != t) return (0, o.YP)(t, e, u.current), () => {
      (0, o.UC)(t, e)
    }
  }, [n, l]), s
}

function l() {
  let [e, t] = (0, Chunk647438.useState)(false);
  return {
    ref: s((0, Chunk647438.useCallback)(e => {
      t(e.isIntersecting)
    }, [])),
    inViewport: module
  }
}