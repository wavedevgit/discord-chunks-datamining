/** Chunk was on 97887 **/
/** chunk id: 782093, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk831741 = require("./831741.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk320501 = require("./320501.js"),
  Chunk49999 = require("./49999.js");

function p(e) {
  let {
    children: t,
    enabled: n,
    animationContainerClassName: p,
    glowClassName: h,
    trinketsClassName: f
  } = e, g = (0, i.bG)([u.A], () => u.A.hasCurrentUserSentMessageSinceAppStart()), m = l.useMemo(() => {
    let e = [];
    return g && n && e.push(s.M.ACTIVITIES_CHAT_BUTTON_NUX_V2), e
  }, [g, n]), b = () => {
    setTimeout(() => (0, o.Dr)(s.M.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
      dismissAction: d.i.AUTO_DISMISS
    }), 1e4)
  };
  return (0, r.jsx)(c.Ay, {
    contentTypes: m,
    children: e => {
      let {
        visibleContent: n
      } = e;
      return n === s.M.ACTIVITIES_CHAT_BUTTON_NUX_V2 ? (0, r.jsx)(a.R, {
        animationContainerClassName: p,
        glowClassName: h,
        trinketsClassName: f,
        onMount: b,
        children: t
      }) : t
    }
  })
}