/** Chunk was on web.js **/
/** chunk id: 946020, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Wc: () => f,
  gY: () => u
});
var Chunk805447 = require("./805447.js"),
  Chunk628024 = require("./628024.js"),
  Chunk754279 = require("./754279.js"),
  Chunk434067 = require("./434067.js"),
  Chunk533715 = require("./533715.js"),
  Chunk803082 = require("./803082.js"),
  Chunk64700 = require("./64700.js");
let u = Chunk64700.createContext(null);

function d(e) {
  let t = (0, c.useContext)(u) || {};
  (0, s.w)(t, e);
  let {
    ref: n,
    ...r
  } = t;
  return r
}

function f(e, t) {
  let {
    focusProps: n
  } = (0, i.i)(e), {
    keyboardProps: s
  } = (0, a.d)(e), o = (0, l.v)(n, s), u = d(t), f = e.isDisabled ? {} : u, p = (0, c.useRef)(e.autoFocus);
  (0, c.useEffect)(() => {
    p.current && t.current && (0, r.l)(t.current), p.current = false
  }, [t]);
  let _ = e.excludeFromTabOrder ? false : 0;
  return e.isDisabled && (_ = true), {
    focusableProps: (0, l.v)({
      ...o,
      tabIndex: _
    }, f)
  }
}
Chunk64700.forwardRef(function(e, t) {
  let {
    children: n,
    ...r
  } = e, i = (0, o.U)(t), a = {
    ...r,
    ref: i
  };
  return c.createElement(u.Provider, {
    value: a
  }, n)
})