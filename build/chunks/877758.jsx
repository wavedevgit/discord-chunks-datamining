/** Chunk was on 70911 **/
/** chunk id: 877758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk785997 = require("./785997.js"),
  Chunk594777 = require("./594777.js");

function l(e) {
  let {
    step: t
  } = e, n = t === s.F.AGE_GATE, o = t === s.F.CHOOSE_TEMPLATE || t === s.F.CREATION_INTENT, l = t === s.F.CUSTOMIZE_GUILD, c = t === s.F.CHANNEL_PROMPT || t === s.F.JOIN_GUILD, u = l || c, d = o || u;
  return <div className={i.sidebar}>{<div className={a()(i.step1, {
        [i.show]: n
      })} />}{<div className={a()(i.step24Clouds, {
        [i.show]: d
      })} />}{<div className={a()(i.step34Flag, {
        [i.show]: u
      })} />}{<div className={a()(i.step24Base, {
        [i.show]: d
      })} />}{<div className={a()(i.step24Ground, {
        [i.show]: d
      })} />}{<div className={a()(i.step2Base, {
        [i.show]: o
      })} />}{<div className={a()(i.step2Character, {
        [i.show]: o
      })} />}{<div className={a()(i.step34Base, {
        [i.show]: u
      })} />}{<div className={a()(i.step3Character, {
        [i.show]: l
      })} />}{<div className={a()(i.step4Character, {
        [i.show]: c
      })} />}{<div className={a()(i.step24Foreground, {
        [i.show]: d
      })} />}</div>
}