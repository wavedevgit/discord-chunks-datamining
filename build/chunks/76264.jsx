/** Chunk was on 54844 **/
/** chunk id: 76264, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.js"),
  Chunk88309 = require("./88309.js"),
  Chunk935786 = require("./935786.js");
let d = e => {
    let {
      child: t,
      onClick: n
    } = e, [l] = t;
    return <a.P3F className={i()(c.childButton, o.listElement)} onClick={() => n(t)}>{<a.Text className={c.childText} variant={"text-md/semibold"}>{l}</a.Text>}{<s.Z className={c.childIcon} direction={s.Z.Directions.RIGHT} />}</a.P3F>
  },
  u = e => {
    let {
      node: {
        children: t
      },
      onSelectChild: n
    } = e;
    if (null == t || 0 === t.length) return null;
    let l = t.map(e => {
      let [t, l] = e;
      return <d child={e} onClick={n} />
    });
    return <div className={o.listElementWrapper}>{l}</div>
  }