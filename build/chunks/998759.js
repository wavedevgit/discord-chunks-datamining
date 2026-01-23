/** Chunk was on 46115 **/
/** chunk id: 998759, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  z: () => l
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./65821.js");
var Chunk64700 = require("./64700.js"),
  Chunk827762 = require("./827762.js"),
  Chunk149597 = require("./149597.js");

function l(e) {
  let {
    fingerprintBase64: t,
    chunkSize: r,
    desiredLength: l
  } = e, s = n.useMemo(() => {
    if (null == t || "" === t) return null;
    let e = o.toByteArray(t),
      n = (0, c.DB)(e, l, r);
    if (null == n) return null;
    let s = RegExp(".{1,".concat(r, "}"), "g"),
      a = n.match(s);
    return null == a ? null : Array.from(a)
  }, [r, t, l]);
  if (null != t && "" !== t && null == s) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
  return s
}