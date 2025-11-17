/** Chunk was on 68784 **/
/** chunk id: 542383, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk358085 = require("./358085.js");

function a(e) {
  let t = r.useRef(e);
  return r.useEffect(() => {
    t.current = e
  }, [e]), r.useCallback(e => {
    let n = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
      r = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
      {
        disabled: a = false,
        onSubmit: i
      } = t.current;
    "enter" === e.key.toLowerCase() && ("macos" === (0, l.getOS)() ? r : n) && !a && (e.preventDefault(), i())
  }, [])
}