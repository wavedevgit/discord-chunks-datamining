/** Chunk was on web.js **/
/** chunk id: 538355, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk352505 = require("./352505.js"),
  Chunk954571 = require("./954571.js"),
  Chunk903369 = require("./903369.js"),
  Chunk465364 = require("./465364.js"),
  Chunk380512 = require("./380512.jsx"),
  Chunk78377 = require("./78377.js"),
  Chunk536048 = require("./536048.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk903957 = require("./903957.js");
let h = Chunk64700.lazy(() => Promise.all([n.e("55896"), n.e("72756")]).then(n.bind(n, 532255)));

function m(e, t) {
  let {
    hideSimpleEmbedContent: m,
    formatInline: g = false,
    noStyleAndInteraction: E = false,
    isInteracting: b = false,
    allowHeading: y = false,
    allowList: O = false,
    allowLinks: A = false,
    allowDevLinks: v = false,
    previewLinkTarget: S = false,
    viewingChannelId: I
  } = t, T = a.m.useExperiment({
    location: "useMessageRenderedContent"
  }).enabled, C = (0, d.I)({
    location: "useMessageRenderedContent"
  }), [N, R] = i.useState(false), w = i.useCallback(e => {
    e && R(true)
  }, []);
  return i.useEffect(() => {
    R(false)
  }, [e.content]), i.useMemo(() => {
    if (null != e.customRenderedContent) return e.customRenderedContent;
    if (e.isUnsupported) return {
      content: p.intl.string(p.t.sWi5EU),
      hasSpoilerEmbeds: false,
      hasBailedAst: false
    };
    if (e.isCommandType() && 0 === e.content.length || e.hasFlag(f.pr7.LOADING)) return (0, c.A)(e);
    if (e.type === f.lAJ.CHANGELOG) {
      let {
        renderChangelogMessageMarkup: t
      } = n(550997);
      return t(e, _, {
        track: (e, t) => {
          s.default.track(e, t)
        }
      })
    }
    return C.enabled ? {
      content: (0, r.jsx)(i.Suspense, {
        children: (0, r.jsx)(u.O.Provider, {
          value: {
            messageId: e.id,
            channelId: e.channel_id,
            viewingChannelId: I,
            guildId: (0, o.U)(e),
            setHasSpoilerEmbeds: w
          },
          children: (0, r.jsx)(h, {
            content: e.content
          })
        })
      }),
      hasSpoilerEmbeds: N,
      hasBailedAst: false
    } : (0, l.Ay)(e, {
      hideSimpleEmbedContent: m,
      formatInline: g,
      noStyleAndInteraction: E,
      isInteracting: b,
      allowHeading: y,
      allowList: O,
      allowLinks: A,
      allowDevLinks: v,
      previewLinkTarget: S,
      viewingChannelId: I,
      allowGameMentions: T
    })
  }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, m, g, E, b, y, O, A, S, v, I, C.enabled, T, N])
}