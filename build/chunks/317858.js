/** Chunk was on 1272 **/
/** chunk id: 317858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk166516 = require("./166516.js"),
  l = require.n(Chunk166516),
  Chunk525654 = require("./525654.js"),
  s = require.n(Chunk525654),
  Chunk442837 = require("./442837.js"),
  Chunk91896 = require("./91896.js"),
  Chunk849862 = require("./849862.js"),
  Chunk888369 = require("./888369.js"),
  Chunk292959 = require("./292959.js"),
  Chunk699516 = require("./699516.js"),
  Chunk340895 = require("./340895.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk252618 = require("./252618.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let O = new Set(["Blink", "Gecko", "WebKit"]),
  y = Chunk981631.dG4;
if (Chunk358085.isPlatformEmbedded) y = e => m.ZP.setBadge(e);
else if (O.has(s().layout)) {
  let e = new(l())({
    animation: "none"
  });
  y = t => {
    try {
      (0, _.PR)(t), e.badge(false === t ? "•" : t)
    } catch (e) {}
  }
}

function v() {
  let e = (0, Chunk442837.e7)([Chunk340895.Z], () => Chunk340895.Z.hasIncomingCalls()),
    t = (0, Chunk442837.e7)([Chunk888369.default, Chunk699516.Z, Chunk292959.Z, Chunk91896.Z], () => {
      let e = Chunk888369.default.getTotalMentionCount(),
        t = (0, Chunk849862.m$)([Chunk699516.Z, Chunk91896.Z]),
        n = Chunk888369.default.hasAnyUnread(),
        r = Chunk292959.Z.getDisableUnreadBadge(),
        i = module + exports;
      return 0 === Chunk166516 && require && !Chunk647438 && (i = false), Chunk166516
    });
  Chunk647438.useEffect(() => {
    if (!module) return;
    let t = Chunk998502.ZP.bounceDock("critical"),
      n = (0, Chunk252618.EM)({
        messages: [Chunk388032.intl.string(Chunk388032.t["fk1/bX"])],
        count: 50
      });
    return () => {
      null == exports || exports(), require()
    }
  }, [module]), Chunk647438.useEffect(() => {
    y(exports)
  }, [exports]), Chunk647438.useEffect(() => () => y(0), [])
}