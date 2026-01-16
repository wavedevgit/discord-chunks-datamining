/** Chunk was on 1272 **/
/** chunk id: 317858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk166516 = require("./166516.js"),
  l = require.n(Chunk166516),
  Chunk525654 = require("./525654.js"),
  o = require.n(Chunk525654),
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
  I = Chunk981631.dG4;
if (Chunk358085.isPlatformEmbedded) I = e => m.ZP.setBadge(e);
else if (O.has(o().layout)) {
  let e = new(l())({
    animation: "none"
  });
  I = t => {
    try {
      (0, b.PR)(t), e.badge(false === t ? "•" : t)
    } catch (e) {}
  }
}

function v() {
  let e = (0, s.e7)([g.Z], () => g.Z.hasIncomingCalls()),
    t = (0, s.e7)([d.default, f.Z, p.Z, c.Z], () => {
      let e = d.default.getTotalMentionCount(),
        t = (0, u.m$)([f.Z, c.Z]),
        n = d.default.hasAnyUnread(),
        r = p.Z.getDisableUnreadBadge(),
        i = e + t;
      return 0 === i && n && !r && (i = false), i
    });
  r.useEffect(() => {
    if (!e) return;
    let t = m.ZP.bounceDock("critical"),
      n = (0, b.EM)({
        messages: [_.intl.string(_.t["fk1/bX"])],
        count: 50
      });
    return () => {
      null == t || t(), n()
    }
  }, [e]), r.useEffect(() => {
    I(t)
  }, [t]), r.useEffect(() => () => I(0), [])
}