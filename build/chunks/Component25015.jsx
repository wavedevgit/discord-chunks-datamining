/** Chunk was on web.js **/
/** chunk id: 25015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
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
  Chunk491068 = require("./491068.js");
let m = Chunk473749.lazy(() => Promise.all([require.e("30385"), require.e("85831")]).then(require.bind(require, 120314)));

function h(e, t) {
  let {
    hideSimpleEmbedContent: h,
    formatInline: g = false,
    noStyleAndInteraction: E = false,
    isInteracting: b = false,
    allowHeading: y = false,
    allowList: O = false,
    allowLinks: v = false,
    allowDevLinks: S = false,
    previewLinkTarget: I = false,
    viewingChannelId: T
  } = t, A = a.d.useExperiment({
    location: "useMessageRenderedContent"
  }).enabled, C = (0, d.o)({
    location: "useMessageRenderedContent"
  }), [N, P] = i.useState(false), R = i.useCallback(e => {
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
    return C.enabled ? {
      content: (0, r.jsx)(i.Suspense, {
        children: (0, r.jsx)(u.v.Provider, {
          value: {
            messageId: e.id,
            channelId: e.channel_id,
            viewingChannelId: T,
            guildId: (0, s.k)(e),
            setHasSpoilerEmbeds: R
          },
          children: (0, r.jsx)(m, {
            content: e.content
          })
        })
      }),
      hasSpoilerEmbeds: N,
      hasBailedAst: false
    } : (0, l.ZP)(e, {
      hideSimpleEmbedContent: h,
      formatInline: g,
      noStyleAndInteraction: E,
      isInteracting: b,
      allowHeading: y,
      allowList: O,
      allowLinks: v,
      allowDevLinks: S,
      previewLinkTarget: I,
      viewingChannelId: T,
      allowGameMentions: A
    })
  }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, h, g, E, b, y, O, v, I, S, T, C.enabled, A, N])
}