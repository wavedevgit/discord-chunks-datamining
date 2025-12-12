/** Chunk was on web.js **/
/** chunk id: 497448, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RG: () => c,
  kc: () => d
});
var Chunk172395 = require("./172395.js"),
  Chunk114206 = require("./114206.js"),
  Chunk607413 = require("./607413.js"),
  Chunk741433 = require("./741433.js"),
  Chunk158821 = require("./158821.js"),
  Chunk473749 = require("./473749.js");
let c = Chunk473749.createContext(null);

function u(e) {
  let t = (0, l.useContext)(c) || {};
  (0, a.l)(t, e);
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
    keyboardProps: a
  } = (0, o.v)(e), c = (0, s.d)(n, a), d = u(t), f = e.isDisabled ? {} : d, p = (0, l.useRef)(e.autoFocus);
  (0, l.useEffect)(() => {
    p.current && t.current && (0, r.e)(t.current), p.current = false
  }, [t]);
  let _ = e.excludeFromTabOrder ? false : 0;
  return e.isDisabled && (_ = true), {
    focusableProps: (0, s.d)({
      ...c,
      tabIndex: _
    }, f)
  }
}