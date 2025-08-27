/** Chunk was on web.js **/
/** chunk id: 357161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RG: () => c,
  kc: () => d
});
var Chunk288804 = require("./288804.js"),
  Chunk565328 = require("./565328.js"),
  Chunk122169 = require("./122169.js"),
  Chunk172675 = require("./172675.js"),
  Chunk506523 = require("./506523.js"),
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