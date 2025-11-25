/** Chunk was on 27278 **/
/** chunk id: 701011, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
  Chunk427509 = require("./427509.js");

function v() {
  let {
    embeddedActivity: e,
    channelId: n,
    guildId: t
  } = (0, Chunk442837.cj)([Chunk317381.ZP], () => {
    let e = Chunk317381.ZP.getCurrentEmbeddedActivity(),
      n = (0, Chunk16609.p)(null == module ? true : module.location),
      t = (0, Chunk16609.j)(null == module ? true : module.location);
    return {
      embeddedActivity: module,
      channelId: exports,
      guildId: require
    }
  }), v = Chunk473749.useRef(null), g = (0, Chunk110924.Z)(module);
  Chunk473749.useEffect(() => {
    null != module ? clearTimeout(v.current) : null != g && null == module && (v.current = window.setTimeout(() => {
      (0, Chunk788983.close)(Chunk981631.KJ3.ACTIVITY_POPOUT)
    }, 5e3))
  }, [module, g]);
  let C = (0, Chunk442837.e7)([Chunk812206.Z], () => {
      let n = null == module ? true : module.applicationId;
      return null == exports ? true : Chunk812206.Z.getApplication(exports)
    }),
    x = (0, Chunk426419.P)();
  return (0, Chunk54381.jsx)("div", {
    className: Chunk427509.container,
    children: null == module || null == C ? (0, Chunk54381.jsx)(Chunk481060.$jN, {
      className: Chunk427509.iframe
    }) : (0, Chunk54381.jsx)("div", {
      className: Chunk427509.loadedContentContainer,
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk427509.iframeAndHeaderContainer,
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk427509.headerContainer,
          children: (0, Chunk54381.jsx)(Chunk325749.Z, {
            applicationId: C.id,
            channelId: exports
          })
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk427509.iframeContainer,
          children: (0, Chunk54381.jsx)(Chunk781780.Z, {
            channelId: exports,
            guildId: require,
            embeddedActivity: module,
            application: C
          })
        }), x ? (0, Chunk54381.jsx)(Chunk554370.Z, {
          isEmbeddedActivity: true
        }) : null]
      })
    })
  })
}