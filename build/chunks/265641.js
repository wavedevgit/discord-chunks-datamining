/** Chunk was on 22173 (61d976ec9ebaf5d5.js) **/
n.d(t, {
  Z: () => o
}), n(47120);
var i = n(192379);
let o = e => {
  let [t, n] = i.useState(!1);
  return {
    isFocused: t,
    handleFocus: i.useCallback(t => {
      e(t), n(!0)
    }, [e, n]),
    handleBlur: () => {
      n(!1)
    }
  }
}