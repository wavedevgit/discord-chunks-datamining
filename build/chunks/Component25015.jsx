/** Chunk was on 31978 **/
/** chunk id: 25015, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let b = Chunk647438.lazy(() => Promise.all([require.e("51889"), require.e("85831")]).then(require.bind(require, 120314)));

function h(e, t) {
  let {
    hideSimpleEmbedContent: h,
    formatInline: O = false,
    noStyleAndInteraction: y = false,
    isInteracting: v = false,
    allowHeading: j = false,
    allowList: P = false,
    allowLinks: x = false,
    allowDevLinks: w = false,
    previewLinkTarget: C = false,
    viewingChannelId: N
  } = t, S = (0, i.p)(), E = o.d.useExperiment({
    location: "useMessageRenderedContent"
  }).enabled, Z = (0, p.o)({
    location: "useMessageRenderedContent"
  }), [R, T] = l.useState(false), I = l.useCallback(e => {
    e && T(true)
  }, []);
  return l.useEffect(() => {
    T(false)
  }, [e.content]), l.useMemo(() => {
    if (null != e.customRenderedContent) return e.customRenderedContent;
    if (e.isUnsupported) return {
      content: g.intl.string(g.t.sWi5ER),
      hasSpoilerEmbeds: false
    };
    if (e.isCommandType() && 0 === e.content.length || e.hasFlag(m.iLy.LOADING)) return (0, u.Z)(e);
    if (e.type === m.uaV.CHANGELOG) {
      let {
        renderChangelogMessageMarkup: t
      } = n(55406);
      return t(e, f, {
        track: (e, t) => {
          a.default.track(e, t)
        }
      })
    }
    return Z.enabled ? {
      content: (0, r.jsx)(l.Suspense, {
        children: (0, r.jsx)(d.v.Provider, {
          value: {
            messageId: e.id,
            channelId: e.channel_id,
            viewingChannelId: N,
            guildId: (0, s.k)(e),
            setHasSpoilerEmbeds: I
          },
          children: (0, r.jsx)(b, {
            content: e.content
          })
        })
      }),
      hasSpoilerEmbeds: R
    } : (0, c.ZP)(e, {
      hideSimpleEmbedContent: h,
      formatInline: O,
      noStyleAndInteraction: y,
      isInteracting: v,
      allowHeading: j,
      allowList: P,
      allowLinks: x,
      allowDevLinks: w,
      previewLinkTarget: C,
      shouldFilterKeywords: S,
      viewingChannelId: N,
      allowGameMentions: E
    })
  }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, h, O, y, v, j, P, x, C, S, w, N, Z.enabled, E, R])
}