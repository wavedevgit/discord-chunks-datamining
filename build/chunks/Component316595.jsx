/** Chunk was on 13873 **/
/** chunk id: 316595, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk890977 = require("./890977.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk375954 = require("./375954.js"),
  Chunk921944 = require("./921944.js");

function p(e) {
  let {
    children: t,
    enabled: n,
    animationContainerClassName: p,
    glowClassName: f,
    trinketsClassName: h
  } = e, m = (0, l.e7)([u.Z], () => u.Z.hasCurrentUserSentMessageSinceAppStart()), g = i.useMemo(() => {
    let e = [];
    return m && n && e.push(a.z.ACTIVITIES_CHAT_BUTTON_NUX_V2), e
  }, [m, n]), b = () => {
    setTimeout(() => (0, s.Q3)(a.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
      dismissAction: d.L.AUTO_DISMISS
    }), 1e4)
  };
  return (0, r.jsx)(c.ZP, {
    contentTypes: g,
    children: e => {
      let {
        visibleContent: n
      } = e;
      return n === a.z.ACTIVITIES_CHAT_BUTTON_NUX_V2 ? (0, r.jsx)(o.b, {
        animationContainerClassName: p,
        glowClassName: f,
        trinketsClassName: h,
        onMount: b,
        children: t
      }) : t
    }
  })
}