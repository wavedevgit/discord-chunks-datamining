/** Chunk was on 84071 **/
/** chunk id: 466679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => i
}), require("./388685.js");
var Chunk647438 = require("./647438.js");
let i = e => {
  let [t, n] = (0, r.useState)(false);
  return (0, r.useEffect)(() => {
    let {
      current: t
    } = e;
    if (null == t) return;
    let r = () => n(true),
      i = e => {
        t.contains(e.relatedTarget) || n(false)
      };
    return t.addEventListener("focusin", r), t.addEventListener("focusout", i), t.blur(), () => {
      t.removeEventListener("focusin", r), t.removeEventListener("focusout", i)
    }
  }, [e]), t
}