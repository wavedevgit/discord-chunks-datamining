/** Chunk was on web.js **/
/** chunk id: 25015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk627050 = require("./627050.js"),
  Chunk626135 = require("./626135.js"),
  Chunk750030 = require("./750030.js"),
  Chunk937889 = require("./937889.js"),
  Chunk761910 = require("./761910.jsx"),
  Chunk488968 = require("./488968.js"),
  Chunk479398 = require("./479398.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk653198 = require("./653198.js");
let h = Chunk473749.lazy(() => Promise.all([n.e("30385"), n.e("85831")]).then(n.bind(n, 120314)));

function m(e, t) {
  let {
    hideSimpleEmbedContent: m,
    formatInline: g = false,
    noStyleAndInteraction: E = false,
    isInteracting: b = false,
    allowHeading: y = false,
    allowList: O = false,
    allowLinks: v = false,
    allowDevLinks: S = false,
    previewLinkTarget: I = false,
    viewingChannelId: T
  } = t, C = a.d.useExperiment({
    location: "useMessageRenderedContent"
  }).enabled, A = (0, d.o)({
    location: "useMessageRenderedContent"
  }), [N, P] = i.useState(false), w = i.useCallback(e => {
    e && P(true)
  }, []);
  return i.useEffect(() => {
    P(false)
  }, [e.content]), i.useMemo(() => {
    if (null != e.customRenderedContent) return e.customRenderedContent;
    if (e.isUnsupported) return {
      content: p.intl.string(p.t.sWi5EU),
      hasSpoilerEmbeds: false,
      hasBailedAst: false
    };
    if (e.isCommandType() && 0 === e.content.length || e.hasFlag(f.iLy.LOADING)) return (0, c.Z)(e);
    if (e.type === f.uaV.CHANGELOG) {
      let {
        renderChangelogMessageMarkup: t
      } = n(55406);
      return t(e, _, {
        track: (e, t) => {
          o.default.track(e, t)
        }
      })
    }
    return A.enabled ? {
      content: (0, r.jsx)(i.Suspense, {
        children: (0, r.jsx)(u.v.Provider, {
          value: {
            messageId: e.id,
            channelId: e.channel_id,
            viewingChannelId: T,
            guildId: (0, s.k)(e),
            setHasSpoilerEmbeds: w
          },
          children: (0, r.jsx)(h, {
            content: e.content
          })
        })
      }),
      hasSpoilerEmbeds: N,
      hasBailedAst: false
    } : (0, l.ZP)(e, {
      hideSimpleEmbedContent: m,
      formatInline: g,
      noStyleAndInteraction: E,
      isInteracting: b,
      allowHeading: y,
      allowList: O,
      allowLinks: v,
      allowDevLinks: S,
      previewLinkTarget: I,
      viewingChannelId: T,
      allowGameMentions: C
    })
  }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, m, g, E, b, y, O, v, I, S, T, A.enabled, C, N])
}