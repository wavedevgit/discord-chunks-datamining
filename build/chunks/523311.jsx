/** Chunk was on 88934 **/
/** chunk id: 523311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk833829 = require("./833829.js");

function o(e) {
  let {
    loading: t,
    children: n
  } = e;
  return <div className={s.container}>{t ? <div className={s.spinnerContainer}><l.$jN className={s.spinner} type={l.$jN.Type.SPINNING_CIRCLE} /></div> : null}{<div className={i()({
        [s.loading]: t
      })}>{n}</div>}</div>
}