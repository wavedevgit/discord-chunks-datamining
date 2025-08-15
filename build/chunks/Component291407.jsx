/** Chunk was on 86357 **/
/** chunk id: 291407, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk375954 = require("./375954.js"),
  Chunk890977 = require("./890977.jsx"),
  Chunk921944 = require("./921944.js");

function p(e) {
  let {
    children: t,
    animationContainerClassName: n,
    glowClassName: p,
    trinketsClassName: h
  } = e, f = (0, l.e7)([c.Z], () => c.Z.hasCurrentUserSentMessageSinceAppStart()), m = i.useMemo(() => {
    let e = [];
    return f && e.push(a.z.DESKTOP_APP_LAUNCHER_ONBOARDING), e
  }, [f]), g = () => {
    setTimeout(() => (0, o.Q3)(a.z.DESKTOP_APP_LAUNCHER_ONBOARDING, {
      dismissAction: d.L.AUTO_DISMISS
    }), 1e4)
  };
  return (0, r.jsx)(s.ZP, {
    contentTypes: m,
    children: e => {
      let {
        visibleContent: i
      } = e;
      return i === a.z.DESKTOP_APP_LAUNCHER_ONBOARDING ? (0, r.jsx)(u.b, {
        animationContainerClassName: n,
        glowClassName: p,
        trinketsClassName: h,
        onMount: g,
        children: t
      }) : t
    }
  })
}