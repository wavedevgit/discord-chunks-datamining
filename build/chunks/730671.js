/** Chunk was on 32923 **/
/** chunk id: 730671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk236413 = require("./236413.js"),
  Chunk422303 = require("./422303.js");

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    n = arguments.length > 2 ? arguments[2] : true,
    [s, o] = r.useState((0, a.se)(t)),
    {
      errorMessage: c,
      handleValidateKeywords: d
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
    u = r.useCallback(e => 0 !== e.length && (0, a.kU)(e) ? (0, a.se)((0, a.Ac)(e)) : e, []);
  return {
    value: s,
    errorMessage: c,
    onChange: r.useCallback(t => {
      let n = t.currentTarget.value;
      "insertFromPaste" === t.nativeEvent.inputType && (n = u(n));
      let r = (0, a.Ac)(n);
      o(n), e(r), d(r)
    }, [d, u, e])
  }
}