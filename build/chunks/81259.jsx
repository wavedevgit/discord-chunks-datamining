/** Chunk was on 85342 **/
/** chunk id: 81259, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./314940.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk551556 = require("./551556.js"),
  Chunk927687 = require("./927687.js");
let d = () => <Chunk551556.Z width={13} height={13} backgroundColor={Chunk692547.Z.colors.TEXT_FEEDBACK_POSITIVE.css} />,
  m = () => <Chunk481060.k$p size={"custom"} width={13} height={13} color={Chunk692547.Z.colors.TEXT_DANGER.css} />,
  g = () => <Chunk481060.k$p size={"custom"} width={13} height={13} color={Chunk692547.Z.colors.TEXT_FEEDBACK_WARNING.css} />;

function f(e) {
  let t = (0, o.EQ)(e.type).with("info", () => <g />).with("error", () => <m />).with("success", () => <d />).otherwise(() => null);
  return <n.Fragment>{t}{<l.Text variant={"text-sm/medium"} className={a()(u.formMessage, {
        [u.formMessageNegative]: "error" === e.type,
        [u.formMessagePositive]: "success" === e.type
      })}>{e.children}</l.Text>}</n.Fragment>
}