/** Chunk was on 44799 **/
/** chunk id: 366751, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk243821 = require("./243821.js");

function u(e) {
  let {
    notificationConfig: t,
    markAsDismissed: n
  } = e;
  return <div className={c.container}>{<s.olH className={c.close} innerClassName={c.innerClose} onClick={() => {
        n(a.L.USER_DISMISS)
      }} />}{<o.Mgn color={l.Z.colors.TEXT_FEEDBACK_WARNING} className={c.icon} />}{<i.xv variant={"text-md/semibold"} color={"text-feedback-warning"}>{t.title}</i.xv>}{<i.xv variant={"text-sm/medium"}>{t.description}</i.xv>}</div>
}