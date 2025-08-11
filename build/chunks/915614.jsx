/** Chunk was on 89298 **/
/** chunk id: 915614, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk809357 = require("./809357.js"),
  Chunk514835 = require("./514835.js");

function c(e) {
  let {
    onClick: t,
    keybind: n,
    className: r,
    IconComponent: c
  } = e, u = (0, a.o)();
  return <div className={o()(s.buttonContainer, r)}>{<l.P3F className={s.button} onClick={t} aria-hidden={true}><c size={"md"} color={"currentColor"} aria-hidden={true} /></l.P3F>}{null != n && u ? <l.Text className={s.keybind} aria-hidden={true} variant={"text-xxs/bold"} color={"interactive-normal"}>{n}</l.Text> : null}</div>
}