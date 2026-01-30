/** Chunk was on 89488 **/
/** chunk id: 176634, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js"),
  Chunk654108 = require("./654108.js");

function a(e) {
  let {
    onPasteFiles: t,
    onPasteBackgroundText: n
  } = e;
  r.useEffect(() => {
    let e = e => {
      var r, a;
      let l = null == (r = e.clipboardData) ? true : r.files;
      if (null != l && l.length > 0) null != t && (e.preventDefault(), e.stopPropagation(), t(l));
      else if (null != n && !(0, o.A)((0, i.BF)(e))) {
        let t = null == (a = e.clipboardData) ? true : a.getData("text");
        null != t && (e.preventDefault(), e.stopPropagation(), n(t))
      }
    };
    return document.addEventListener("paste", e, true), () => {
      document.removeEventListener("paste", e, true)
    }
  }, [t, n])
}