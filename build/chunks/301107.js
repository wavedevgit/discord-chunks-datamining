/** Chunk was on 94904 **/
/** chunk id: 301107, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  W: () => i
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./415506.js");
var Chunk473749 = require("./473749.js"),
  Chunk250683 = require("./250683.js"),
  Chunk974167 = require("./974167.js");

function i(e) {
  let {
    fingerprintBase64: t,
    chunkSize: r,
    desiredLength: i
  } = e, l = n.useMemo(() => {
    if (null == t || "" === t) return null;
    let e = o.toByteArray(t),
      n = (0, c.Dq)(e, i, r);
    if (null == n) return null;
    let l = RegExp(".{1,".concat(r, "}"), "g"),
      s = n.match(l);
    return null == s ? null : Array.from(s)
  }, [r, t, i]);
  if (null != t && "" !== t && null == l) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
  return l
}