/** Chunk was on 72762 **/
/** chunk id: 404203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js");
let l = e => t => {
  null == t || t.stopPropagation(), e()
};

function s(e) {
  let {
    onClick: t,
    className: n,
    children: s
  } = e, o = i.useRef(null);
  return <div onClick={t} ref={o} className={n}>{s({
      areaRef: o,
      handleStopPropagation: l
    })}</div>
}