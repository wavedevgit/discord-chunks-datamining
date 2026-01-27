/** Chunk was on 52081 **/
/** chunk id: 396777, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk110259 = require("./110259.js"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk954571 = require("./954571.js"),
  Chunk362311 = require("./362311.jsx"),
  Chunk230801 = require("./230801.jsx"),
  Chunk424912 = require("./424912.jsx"),
  Chunk468820 = require("./468820.jsx"),
  Chunk803585 = require("./803585.jsx"),
  Chunk819638 = require("./819638.js"),
  Chunk652215 = require("./652215.js"),
  Chunk534093 = require("./534093.js");

function E(e) {
  let {
    transitionState: t,
    initialSlide: n = I.oS.GUILD_TEMPLATES,
    onSuccess: i,
    onClose: E,
    onSlideChange: T,
    hasJoinButton: A
  } = e, [g, O] = l.useState(n), D = (0, c.A)(g), [C, b] = l.useState(null), [L, w] = l.useState(null), [U, y] = l.useState(null), [G, h] = l.useState(false);
  l.useEffect(() => {
    O(n)
  }, [O, n]), l.useEffect(() => {
    g !== D && T(g)
  }, [T, g, D]);
  let j = l.useCallback(e => {
      O(I.oS.CREATION_INTENT), w(e), u.default.track(S.HAw.GUILD_TEMPLATE_SELECTED, {
        template_name: e.id,
        template_code: e.code
      })
    }, []),
    v = l.useCallback(e => {
      h(e === I.IR.COMMUNITY), O(I.oS.CUSTOMIZE_GUILD)
    }, []),
    x = l.useCallback(() => O(I.oS.JOIN_GUILD), [O]),
    R = l.useCallback(() => {
      g === I.oS.CUSTOMIZE_GUILD ? O(I.oS.CREATION_INTENT) : (O(I.oS.GUILD_TEMPLATES), w(null))
    }, [g]),
    P = l.useCallback(e => {
      y(e), i(e)
    }, [i, y]),
    k = l.useCallback(() => {
      o()(null != U, "handleSuccess called before onGuildCreated"), i(U)
    }, [i, U]),
    M = {
      impression_group: a.ImpressionGroups.GUILD_ADD_FLOW
    },
    B = (0, s.rdh)(s.LU0.modules.modal.WIDTH_SMALL);
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(s.EOs, {
      "data-migration-pending": true,
      transitionState: t,
      disableTrack: true,
      parentComponent: "CreateGuildModal",
      children: (0, r.jsx)("div", {
        className: N.k,
        children: (0, r.jsxs)(s.tN_, {
          activeSlide: g,
          width: B,
          onSlideReady: e => b(e),
          children: [(0, r.jsx)(s.q7S, {
            id: I.oS.GUILD_TEMPLATES,
            impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: M,
            children: (0, r.jsx)(f.A, {
              isNewUser: false,
              onJoin: A ? x : true,
              onChooseTemplate: j,
              onClose: E
            })
          }), (0, r.jsx)(s.q7S, {
            id: I.oS.CREATION_INTENT,
            impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: M,
            children: (0, r.jsx)(d.A, {
              onClose: E,
              onBack: R,
              onCreationIntentChosen: v
            })
          }), (0, r.jsx)(s.q7S, {
            id: I.oS.CUSTOMIZE_GUILD,
            impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: M,
            children: (0, r.jsx)(p.A, {
              guildTemplate: L,
              onGuildCreated: P,
              onClose: E,
              onBack: R,
              isSlideReady: C === I.oS.CUSTOMIZE_GUILD,
              isCommunity: G
            })
          }), (0, r.jsx)(s.q7S, {
            id: I.oS.CHANNEL_PROMPT,
            impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: M,
            children: (0, r.jsx)(_.A, {
              createdGuildId: U,
              onClose: E,
              onChannelPromptCompleted: k,
              isSlideReady: C === I.oS.CHANNEL_PROMPT
            })
          }), (0, r.jsx)(s.q7S, {
            id: I.oS.JOIN_GUILD,
            impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: M,
            children: (0, r.jsx)(m.A, {
              onBack: R,
              onClose: E,
              isSlideReady: C === I.oS.JOIN_GUILD
            })
          })]
        })
      })
    })
  })
}