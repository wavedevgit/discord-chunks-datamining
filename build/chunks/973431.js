/** Chunk was on 52786 **/
/** chunk id: 973431, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk723702 = require("./723702.js");

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