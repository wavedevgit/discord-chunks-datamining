/** Chunk was on web.js **/
/** chunk id: 316595, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk890977 = require("./890977.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk375954 = require("./375954.js"),
  Chunk921944 = require("./921944.js");

function f(e) {
  let {
    children: t,
    enabled: n,
    animationContainerClassName: f,
    glowClassName: _,
    trinketsClassName: p
  } = e, h = (0, o.e7)([u.Z], () => u.Z.hasCurrentUserSentMessageSinceAppStart()), m = i.useMemo(() => {
    let e = [];
    return h && n && e.push(a.z.ACTIVITIES_CHAT_BUTTON_NUX_V2), e
  }, [h, n]), g = () => {
    setTimeout(() => (0, l.Q3)(a.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
      dismissAction: d.L.AUTO_DISMISS
    }), 1e4)
  };
  return (0, r.jsx)(c.ZP, {
    contentTypes: m,
    children: e => {
      let {
        visibleContent: n
      } = e;
      return n === a.z.ACTIVITIES_CHAT_BUTTON_NUX_V2 ? (0, r.jsx)(s.b, {
        animationContainerClassName: f,
        glowClassName: _,
        trinketsClassName: p,
        onMount: g,
        children: t
      }) : t
    }
  })
}