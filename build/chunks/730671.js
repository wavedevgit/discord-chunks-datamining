/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => l
}), n(47120);
var r = n(192379),
  i = n(392711),
  s = n(236413),
  a = n(422303);

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    n = arguments.length > 2 ? arguments[2] : void 0,
    [l, o] = r.useState((0, a.se)(t)),
    {
      errorMessage: A,
      handleValidateKeywords: c
    } = function(e) {
      let [t, n] = r.useState(null), a = r.useRef(null);
      return {
        errorMessage: t,
        handleValidateKeywords: r.useCallback(() => (0, i.debounce)(t => {
          clearTimeout(a.current), a.current = setTimeout(() => {
            try {
              (0, s.km)(t, e), n(null)
            } catch (e) {
              n(e.message)
            }
            clearTimeout(a.current)
          }, 500)
        }, 300, {
          leading: !0,
          trailing: !0
        }), [e])
      }
    }(n),
    d = r.useCallback(e => 0 !== e.length && (0, a.kU)(e) ? (0, a.se)((0, a.Ac)(e)) : e, []);
  return {
    value: l,
    errorMessage: A,
    onChange: r.useCallback(t => {
      let n = t.currentTarget.value;
      "insertFromPaste" === t.nativeEvent.inputType && (n = d(n));
      let r = (0, a.Ac)(n);
      o(n), e(r), c()(r)
    }, [c, d, e])
  }
}