/** Chunk was on 75708 **/
/** chunk id: 329242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk51144 = require("./51144.js"),
  Chunk261182 = require("./261182.js");
let c = e => {
  let {
    user: t,
    fill: n
  } = e, r = "\xa0(@".concat(l.ZP.getUserTag(t, {
    decoration: "never"
  }), ")");
  return <a.Text className={s()([{
      [o.fill]: n
    }])} variant={"text-md/medium"}>{<span className={o.username}>{l.ZP.getName(t)}</span>}{<span className={o.discriminator}>{r}</span>}</a.Text>
}