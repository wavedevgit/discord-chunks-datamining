/** Chunk was on 27278 **/
/** chunk id: 701011, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk812206 = require("./812206.js"),
  Chunk554370 = require("./554370.jsx"),
  Chunk788983 = require("./788983.js"),
  Chunk317381 = require("./317381.js"),
  Chunk426419 = require("./426419.js"),
  Chunk16609 = require("./16609.js"),
  Chunk781780 = require("./781780.jsx"),
  Chunk325749 = require("./325749.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk350325 = require("./350325.js");

function g() {
  let {
    embeddedActivity: e,
    channelId: n,
    guildId: t
  } = (0, c.cj)([s.ZP], () => {
    let e = s.ZP.getCurrentEmbeddedActivity(),
      n = (0, f.p)(null == e ? true : e.location),
      t = (0, f.j)(null == e ? true : e.location);
    return {
      embeddedActivity: e,
      channelId: n,
      guildId: t
    }
  }), g = o.useRef(null), v = (0, i.Z)(e);
  o.useEffect(() => {
    null != e ? clearTimeout(g.current) : null != v && null == e && (g.current = window.setTimeout(() => {
      (0, u.close)(_.KJ3.ACTIVITY_POPOUT)
    }, 5e3))
  }, [e, v]);
  let C = (0, c.e7)([l.Z], () => {
      let n = null == e ? true : e.applicationId;
      return null == n ? true : l.Z.getApplication(n)
    }),
    x = (0, b.P)();
  return (0, a.jsx)("div", {
    className: h.container,
    children: null == e || null == C ? (0, a.jsx)(r.$jN, {
      className: h.iframe
    }) : (0, a.jsx)("div", {
      className: h.loadedContentContainer,
      children: (0, a.jsxs)("div", {
        className: h.iframeAndHeaderContainer,
        children: [(0, a.jsx)("div", {
          className: h.headerContainer,
          children: (0, a.jsx)(m.Z, {
            applicationId: C.id,
            channelId: n
          })
        }), (0, a.jsx)("div", {
          className: h.iframeContainer,
          children: (0, a.jsx)(p.Z, {
            channelId: n,
            guildId: t,
            embeddedActivity: e,
            application: C
          })
        }), x ? (0, a.jsx)(d.Z, {
          isEmbeddedActivity: true
        }) : null]
      })
    })
  })
}