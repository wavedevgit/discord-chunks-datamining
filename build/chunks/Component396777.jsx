/** Chunk was on 52081 **/
/** chunk id: 396777, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
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

function I(e) {
  let {
    transitionState: t,
    initialSlide: n = m.oS.GUILD_TEMPLATES,
    onSuccess: a,
    onClose: I,
    onSlideChange: O,
    hasJoinButton: T
  } = e, [E, g] = l.useState(n), A = (0, s.A)(E), [C, D] = l.useState(null), [y, w] = l.useState(null), [j, v] = l.useState(null), [L, h] = l.useState(false);
  l.useEffect(() => {
    g(n)
  }, [g, n]), l.useEffect(() => {
    E !== A && O(E)
  }, [O, E, A]);
  let x = l.useCallback(e => {
      g(m.oS.CREATION_INTENT), w(e), u.default.track(S.HAw.GUILD_TEMPLATE_SELECTED, {
        template_name: e.id,
        template_code: e.code
      })
    }, []),
    U = l.useCallback(e => {
      h(e === m.IR.COMMUNITY), g(m.oS.CUSTOMIZE_GUILD)
    }, []),
    G = l.useCallback(() => g(m.oS.JOIN_GUILD), [g]),
    P = l.useCallback(() => {
      E === m.oS.CUSTOMIZE_GUILD ? g(m.oS.CREATION_INTENT) : (g(m.oS.GUILD_TEMPLATES), w(null))
    }, [E]),
    k = l.useCallback(e => {
      v(e), a(e)
    }, [a, v]),
    R = l.useCallback(() => {
      o()(null != j, "handleSuccess called before onGuildCreated"), a(j)
    }, [a, j]),
    M = {
      impression_group: i.ImpressionGroups.GUILD_ADD_FLOW
    },
    q = (0, c.rdh)(c.LU0.modules.modal.WIDTH_SMALL);
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(c.EOs, {
      "data-migration-pending": true,
      transitionState: t,
      disableTrack: true,
      parentComponent: "CreateGuildModal",
      children: (0, r.jsx)("div", {
        className: N.k,
        children: (0, r.jsxs)(c.tN_, {
          activeSlide: E,
          width: q,
          onSlideReady: e => D(e),
          children: [(0, r.jsx)(c.q7S, {
            id: m.oS.GUILD_TEMPLATES,
            impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: M,
            children: (0, r.jsx)(b.A, {
              isNewUser: false,
              onJoin: T ? G : true,
              onChooseTemplate: x,
              onClose: I
            })
          }), (0, r.jsx)(c.q7S, {
            id: m.oS.CREATION_INTENT,
            impressionName: i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: M,
            children: (0, r.jsx)(p.A, {
              onClose: I,
              onBack: P,
              onCreationIntentChosen: U
            })
          }), (0, r.jsx)(c.q7S, {
            id: m.oS.CUSTOMIZE_GUILD,
            impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: M,
            children: (0, r.jsx)(f.A, {
              guildTemplate: y,
              onGuildCreated: k,
              onClose: I,
              onBack: P,
              isSlideReady: C === m.oS.CUSTOMIZE_GUILD,
              isCommunity: L
            })
          }), (0, r.jsx)(c.q7S, {
            id: m.oS.CHANNEL_PROMPT,
            impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: M,
            children: (0, r.jsx)(d.A, {
              createdGuildId: j,
              onClose: I,
              onChannelPromptCompleted: R,
              isSlideReady: C === m.oS.CHANNEL_PROMPT
            })
          }), (0, r.jsx)(c.q7S, {
            id: m.oS.JOIN_GUILD,
            impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: M,
            children: (0, r.jsx)(_.A, {
              onBack: P,
              onClose: I,
              isSlideReady: C === m.oS.JOIN_GUILD
            })
          })]
        })
      })
    })
  })
}