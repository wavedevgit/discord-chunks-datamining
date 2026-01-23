/** Chunk was on 47841 **/
/** chunk id: 727904, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk627794 = require("./627794.js"),
  Chunk789821 = require("./789821.js");

function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    n = arguments.length > 2 ? arguments[2] : true,
    [a, o] = r.useState((0, s.Mv)(t)),
    {
      errorMessage: c,
      handleValidateKeywords: d
    } = function(e) {
      let [t, n] = r.useState(null);
      return {
        errorMessage: t,
        handleValidateKeywords: r.useMemo(() => (0, i.debounce)(t => {
          try {
            (0, l.wk)(t, e), n(null)
          } catch (e) {
            n(e.message)
          }
        }, 300, {
          leading: true,
          trailing: true
        }), [e])
      }
    }(n),
    u = r.useCallback(e => 0 !== e.length && (0, s.ir)(e) ? (0, s.Mv)((0, s.c_)(e)) : e, []);
  return {
    value: a,
    errorMessage: c,
    onChange: r.useCallback(t => {
      let n = t.currentTarget.value;
      "insertFromPaste" === t.nativeEvent.inputType && (n = u(n));
      let r = (0, s.c_)(n);
      o(n), e(r), d(r)
    }, [d, u, e])
  }
}