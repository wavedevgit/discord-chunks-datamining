/** Chunk was on 31978 **/
/** chunk id: 25015, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let b = Chunk73800.lazy(() => Promise.all([require.e("87597"), require.e("85831")]).then(require.bind(require, 120314)));

function h(e, t) {
  let {
    hideSimpleEmbedContent: h,
    formatInline: y = false,
    noStyleAndInteraction: O = false,
    isInteracting: v = false,
    allowHeading: j = false,
    allowList: P = false,
    allowLinks: x = false,
    allowDevLinks: w = false,
    previewLinkTarget: C = false,
    viewingChannelId: S
  } = t, E = (0, i.p)(), N = o.d.useExperiment({
    location: "useMessageRenderedContent"
  }).enabled, R = (0, p.o)({
    location: "useMessageRenderedContent"
  }), [T, Z] = l.useState(false), I = l.useCallback(e => {
    e && Z(true)
  }, []);
  return l.useEffect(() => {
    Z(false)
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
    return R.enabled ? {
      content: (0, r.jsx)(l.Suspense, {
        children: (0, r.jsx)(d.v.Provider, {
          value: {
            messageId: e.id,
            channelId: e.channel_id,
            viewingChannelId: S,
            guildId: (0, s.k)(e),
            setHasSpoilerEmbeds: I
          },
          children: (0, r.jsx)(b, {
            content: e.content
          })
        })
      }),
      hasSpoilerEmbeds: T
    } : (0, c.ZP)(e, {
      hideSimpleEmbedContent: h,
      formatInline: y,
      noStyleAndInteraction: O,
      isInteracting: v,
      allowHeading: j,
      allowList: P,
      allowLinks: x,
      allowDevLinks: w,
      previewLinkTarget: C,
      shouldFilterKeywords: E,
      viewingChannelId: S,
      allowGameMentions: N
    })
  }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, h, y, O, v, j, P, x, C, E, w, S, R.enabled, N, T])
}