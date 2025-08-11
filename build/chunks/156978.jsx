/** Chunk was on 1272 **/
/** chunk id: 156978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk122611 = require("./122611.jsx"),
  Chunk302000 = require("./302000.js");

function o(e) {
  let {
    guild: t,
    setHasSubheader: n
  } = e, o = i.useRef(null);
  return i.useLayoutEffect(() => {
    let e = o.current;
    null != e && n(e.childNodes.length > 0)
  }), <div className={a.container} ref={o}><l.Z guild={t} /></div>
}