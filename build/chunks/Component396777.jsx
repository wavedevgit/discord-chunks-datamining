/** Chunk was on 52081 **/
/** chunk id: 396777, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
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

function b(e) {
  let {
    transitionState: t,
    initialSlide: n = S.oS.GUILD_TEMPLATES,
    onSuccess: l,
    onClose: b,
    onSlideChange: T,
    hasJoinButton: O
  } = e, [E, g] = o.useState(n), A = (0, c.A)(E), [C, w] = o.useState(null), [D, y] = o.useState(null), [j, h] = o.useState(null), [L, v] = o.useState(false);
  o.useEffect(() => {
    g(n)
  }, [g, n]), o.useEffect(() => {
    E !== A && T(E)
  }, [T, E, A]);
  let x = o.useCallback(e => {
      g(S.oS.CREATION_INTENT), y(e), u.default.track(N.HAw.GUILD_TEMPLATE_SELECTED, {
        template_name: e.id,
        template_code: e.code
      })
    }, []),
    U = o.useCallback(e => {
      v(e === S.IR.COMMUNITY), g(S.oS.CUSTOMIZE_GUILD)
    }, []),
    G = o.useCallback(() => g(S.oS.JOIN_GUILD), [g]),
    k = o.useCallback(() => {
      E === S.oS.CUSTOMIZE_GUILD ? g(S.oS.CREATION_INTENT) : (g(S.oS.GUILD_TEMPLATES), y(null))
    }, [E]),
    P = o.useCallback(e => {
      h(e), l(e)
    }, [l, h]),
    R = o.useCallback(() => {
      i()(null != j, "handleSuccess called before onGuildCreated"), l(j)
    }, [l, j]),
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
        className: I.k,
        children: (0, r.jsxs)(s.tN_, {
          activeSlide: E,
          width: B,
          onSlideReady: e => w(e),
          children: [(0, r.jsx)(s.q7S, {
            id: S.oS.GUILD_TEMPLATES,
            impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: M,
            children: (0, r.jsx)(f.A, {
              isNewUser: false,
              onJoin: O ? G : true,
              onChooseTemplate: x,
              onClose: b
            })
          }), (0, r.jsx)(s.q7S, {
            id: S.oS.CREATION_INTENT,
            impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: M,
            children: (0, r.jsx)(_.A, {
              onClose: b,
              onBack: k,
              onCreationIntentChosen: U
            })
          }), (0, r.jsx)(s.q7S, {
            id: S.oS.CUSTOMIZE_GUILD,
            impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: M,
            children: (0, r.jsx)(p.A, {
              guildTemplate: D,
              onGuildCreated: P,
              onClose: b,
              onBack: k,
              isSlideReady: C === S.oS.CUSTOMIZE_GUILD,
              isCommunity: L
            })
          }), (0, r.jsx)(s.q7S, {
            id: S.oS.CHANNEL_PROMPT,
            impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: M,
            children: (0, r.jsx)(d.A, {
              createdGuildId: j,
              onClose: b,
              onChannelPromptCompleted: R,
              isSlideReady: C === S.oS.CHANNEL_PROMPT
            })
          }), (0, r.jsx)(s.q7S, {
            id: S.oS.JOIN_GUILD,
            impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: M,
            children: (0, r.jsx)(m.A, {
              onBack: k,
              onClose: b,
              isSlideReady: C === S.oS.JOIN_GUILD
            })
          })]
        })
      })
    })
  })
}