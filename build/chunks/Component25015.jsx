/** Chunk was on web.js **/
/** chunk id: 25015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk627050 = require("./627050.js"),
  Chunk905405 = require("./905405.js"),
  Chunk626135 = require("./626135.js"),
  Chunk750030 = require("./750030.js"),
  Chunk937889 = require("./937889.js"),
  Chunk761910 = require("./761910.jsx"),
  Chunk488968 = require("./488968.js"),
  Chunk479398 = require("./479398.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk491068 = require("./491068.js");
let h = Chunk473749.lazy(() => Promise.all([require.e("30385"), require.e("85831")]).then(require.bind(require, 120314)));

function g(e, t) {
  let {
    hideSimpleEmbedContent: g,
    formatInline: E = false,
    noStyleAndInteraction: b = false,
    isInteracting: y = false,
    allowHeading: O = false,
    allowList: v = false,
    allowLinks: S = false,
    allowDevLinks: I = false,
    previewLinkTarget: T = false,
    viewingChannelId: A
  } = t, C = (0, o.p)(), N = a.d.useExperiment({
    location: "useMessageRenderedContent"
  }).enabled, P = (0, f.o)({
    location: "useMessageRenderedContent"
  }), [R, w] = i.useState(false), D = i.useCallback(e => {
    e && w(true)
  }, []);
  return i.useEffect(() => {
    w(false)
  }, [e.content]), i.useMemo(() => {
    if (null != e.customRenderedContent) return e.customRenderedContent;
    if (e.isUnsupported) return {
      content: _.intl.string(_.t.sWi5EU),
      hasSpoilerEmbeds: false
    };
    if (e.isCommandType() && 0 === e.content.length || e.hasFlag(p.iLy.LOADING)) return (0, u.Z)(e);
    if (e.type === p.uaV.CHANGELOG) {
      let {
        renderChangelogMessageMarkup: t
      } = n(55406);
      return t(e, m, {
        track: (e, t) => {
          s.default.track(e, t)
        }
      })
    }
    return P.enabled ? {
      content: (0, r.jsx)(i.Suspense, {
        children: (0, r.jsx)(d.v.Provider, {
          value: {
            messageId: e.id,
            channelId: e.channel_id,
            viewingChannelId: A,
            guildId: (0, l.k)(e),
            setHasSpoilerEmbeds: D
          },
          children: (0, r.jsx)(h, {
            content: e.content
          })
        })
      }),
      hasSpoilerEmbeds: R
    } : (0, c.ZP)(e, {
      hideSimpleEmbedContent: g,
      formatInline: E,
      noStyleAndInteraction: b,
      isInteracting: y,
      allowHeading: O,
      allowList: v,
      allowLinks: S,
      allowDevLinks: I,
      previewLinkTarget: T,
      shouldFilterKeywords: C,
      viewingChannelId: A,
      allowGameMentions: N
    })
  }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, g, E, b, y, O, v, S, T, C, I, A, P.enabled, N, R])
}