/** Chunk was on web.js **/
/** chunk id: 600711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  kc: () => d
});
var Chunk361637 = require("./361637.js"),
  Chunk827081 = require("./827081.js"),
  Chunk880780 = require("./880780.js"),
  Chunk533608 = require("./533608.js"),
  Chunk933492 = require("./933492.js"),
  Chunk647438 = require("./647438.js");
let c = Chunk647438.createContext(null);

function u(e) {
  let t = (0, l.useContext)(c) || {};
  (0, o.l)(t, e);
  let {
    ref: n,
    ...r
  } = t;
  return r
}

function d(e, t) {
  let {
    focusProps: n
  } = (0, i.K)(e), {
    keyboardProps: o
  } = (0, a.v)(e), c = (0, s.d)(n, o), d = u(t), f = e.isDisabled ? {} : d, _ = (0, l.useRef)(e.autoFocus);
  (0, l.useEffect)(() => {
    _.current && t.current && (0, r.e)(t.current), _.current = false
  }, [t]);
  let p = e.excludeFromTabOrder ? false : 0;
  return e.isDisabled && (p = true), {
    focusableProps: (0, s.d)({
      ...c,
      tabIndex: p
    }, f)
  }
}