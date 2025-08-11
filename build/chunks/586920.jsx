/** Chunk was on 75708 **/
/** chunk id: 586920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk667202 = require("./667202.js"),
  Chunk607070 = require("./607070.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk10508 = require("./10508.jsx"),
  Chunk594135 = require("./594135.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk735912 = require("./735912.js"),
  Chunk997892 = require("./997892.js"),
  Chunk234286 = require("./234286.js");
let f = () => {
  let {
    transitionState: e,
    onClose: t,
    premiumType: n,
    confettiCanvas: f,
    churnUserDiscountOffer: b,
    discountedPrice: x
  } = (0, Chunk594135.a)(), _ = (0, Chunk73800.useRef)(null), [j, E] = (0, Chunk73800.useState)(false), C = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  if ((0, Chunk73800.useEffect)(() => {
      null !== _.current && null !== x && E(true)
    }, [_, x]), null === b) return null;
  let O = require === Chunk474936.p9.TIER_2,
    v = [{
      text: Chunk388032.intl.string(Chunk388032.t["/r8g/v"]),
      onClick: () => exports(),
      variant: "primary",
      fullWidth: true
    }];
  return <div ref={_}>{<Chunk667202.I graphic={{
        type: "image",
        src: O ? Chunk234286 : Chunk997892
      }} gradientColor={O ? "nitro-pink" : "nitro-green"} transitionState={module} title={Chunk388032.intl.string(Chunk388032.t.PZSyRk)} actions={v} onClose={async () => exports()}><div className={Chunk735912.offerDetailContainer}><Chunk10508.o offerState={Chunk10508.w.APPLIED} userDiscountOffer={b} /></div></Chunk667202.I>}{!C && j && <Chunk530618.Z confettiTarget={_.current} confettiCanvas={f} confettiVelocityMultiplier={.75} />}</div>
}