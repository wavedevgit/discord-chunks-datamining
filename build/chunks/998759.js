/** Chunk was on 61344 **/
/** chunk id: 998759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => a
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./65821.js");
var Chunk64700 = require("./64700.js"),
  Chunk827762 = require("./827762.js"),
  Chunk149597 = require("./149597.js");

function a(e) {
  let {
    fingerprintBase64: t,
    chunkSize: n,
    desiredLength: a
  } = e, s = l.useMemo(() => {
    if (null == t || "" === t) return null;
    let e = r.toByteArray(t),
      l = (0, i.DB)(e, a, n);
    if (null == l) return null;
    let s = RegExp(".{1,".concat(n, "}"), "g"),
      o = l.match(s);
    return null == o ? null : Array.from(o)
  }, [n, t, a]);
  if (null != t && "" !== t && null == s) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
  return s
}