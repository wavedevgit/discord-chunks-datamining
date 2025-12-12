/** Chunk was on 384 **/
/** chunk id: 730671, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk236413 = require("./236413.js"),
  Chunk422303 = require("./422303.js");

function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    n = arguments.length > 2 ? arguments[2] : true,
    [a, o] = r.useState((0, s.se)(t)),
    {
      errorMessage: c,
      handleValidateKeywords: u
    } = function(e) {
      let [t, n] = r.useState(null);
      return {
        errorMessage: t,
        handleValidateKeywords: r.useMemo(() => (0, i.debounce)(t => {
          try {
            (0, l.km)(t, e), n(null)
          } catch (e) {
            n(e.message)
          }
        }, 300, {
          leading: true,
          trailing: true
        }), [e])
      }
    }(n),
    d = r.useCallback(e => 0 !== e.length && (0, s.kU)(e) ? (0, s.se)((0, s.Ac)(e)) : e, []);
  return {
    value: a,
    errorMessage: c,
    onChange: r.useCallback(t => {
      let n = t.currentTarget.value;
      "insertFromPaste" === t.nativeEvent.inputType && (n = d(n));
      let r = (0, s.Ac)(n);
      o(n), e(r), u(r)
    }, [u, d, e])
  }
}