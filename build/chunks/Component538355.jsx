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
    isInteracting: y = false,
    allowHeading: b = false,
    allowList: O = false,
    allowLinks: v = false,
    allowDevLinks: A = false,
    previewLinkTarget: I = false,
    viewingChannelId: S
  } = t, T = a.m.useExperiment({
    location: "useMessageRenderedContent"
  }).enabled, C = (0, d.I)({
    location: "useMessageRenderedContent"
  }), [N, w] = i.useState(false), R = i.useCallback(e => {
    e && w(true)
  }, []);
  return i.useEffect(() => {
    w(false)
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
            viewingChannelId: S,
            guildId: (0, o.U)(e),
            setHasSpoilerEmbeds: R
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
      isInteracting: y,
      allowHeading: b,
      allowList: O,
      allowLinks: v,
      allowDevLinks: A,
      previewLinkTarget: I,
      viewingChannelId: S,
      allowGameMentions: T
    })
  }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, m, g, E, y, b, O, v, I, A, S, C.enabled, T, N])
}