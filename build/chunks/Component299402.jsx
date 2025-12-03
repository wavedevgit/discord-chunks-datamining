/** Chunk was on 24209 **/
/** chunk id: 299402, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk626135 = require("./626135.js"),
  Chunk215292 = require("./215292.jsx"),
  Chunk382086 = require("./382086.jsx"),
  Chunk996453 = require("./996453.jsx"),
  Chunk446706 = require("./446706.jsx"),
  Chunk867581 = require("./867581.jsx"),
  Chunk675999 = require("./675999.js"),
  Chunk981631 = require("./981631.js"),
  Chunk719889 = require("./719889.js");

function O(e) {
  let {
    transitionState: t,
    initialSlide: n = I._m.GUILD_TEMPLATES,
    onSuccess: i,
    onClose: O,
    onSlideChange: S,
    hasJoinButton: b
  } = e, [E, g] = o.useState(n), C = (0, c.Z)(E), [h, x] = o.useState(null), [w, L] = o.useState(null), [v, y] = o.useState(null), [D, j] = o.useState(false);
  o.useEffect(() => {
    g(n)
  }, [g, n]), o.useEffect(() => {
    E !== C && S(E)
  }, [S, E, C]);
  let A = o.useCallback(e => {
      g(I._m.CREATION_INTENT), L(e), u.default.track(N.rMx.GUILD_TEMPLATE_SELECTED, {
        template_name: e.id,
        template_code: e.code
      })
    }, []),
    U = o.useCallback(e => {
      j(e === I.lr.COMMUNITY), g(I._m.CUSTOMIZE_GUILD)
    }, []),
    G = o.useCallback(() => g(I._m.JOIN_GUILD), [g]),
    P = o.useCallback(() => {
      if (E === I._m.CUSTOMIZE_GUILD) return void g(I._m.CREATION_INTENT);
      g(I._m.GUILD_TEMPLATES), L(null)
    }, [E]),
    M = o.useCallback(e => {
      y(e), i(e)
    }, [i, y]),
    k = o.useCallback(() => {
      l()(null != v, "handleSuccess called before onGuildCreated"), i(v)
    }, [i, v]),
    R = {
      impression_group: a.ImpressionGroups.GUILD_ADD_FLOW
    },
    Z = (0, s.dQu)(s.TVs.modules.modal.WIDTH_SMALL);
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(s.Y0X, {
      "data-migration-pending": true,
      transitionState: t,
      disableTrack: true,
      parentComponent: "CreateGuildModal",
      children: (0, r.jsx)("div", {
        className: T.container,
        children: (0, r.jsxs)(s.MyZ, {
          activeSlide: E,
          width: Z,
          onSlideReady: e => x(e),
          children: [(0, r.jsx)(s.Mi4, {
            id: I._m.GUILD_TEMPLATES,
            impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: R,
            children: (0, r.jsx)(m.Z, {
              isNewUser: false,
              onJoin: b ? G : true,
              onChooseTemplate: A,
              onClose: O
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.CREATION_INTENT,
            impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: R,
            children: (0, r.jsx)(d.Z, {
              onClose: O,
              onBack: P,
              onCreationIntentChosen: U
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.CUSTOMIZE_GUILD,
            impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: R,
            children: (0, r.jsx)(p.Z, {
              guildTemplate: w,
              onGuildCreated: M,
              onClose: O,
              onBack: P,
              isSlideReady: h === I._m.CUSTOMIZE_GUILD,
              isCommunity: D
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.CHANNEL_PROMPT,
            impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: R,
            children: (0, r.jsx)(_.Z, {
              createdGuildId: v,
              onClose: O,
              onChannelPromptCompleted: k,
              isSlideReady: h === I._m.CHANNEL_PROMPT
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.JOIN_GUILD,
            impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: R,
            children: (0, r.jsx)(f.Z, {
              onBack: P,
              onClose: O,
              isSlideReady: h === I._m.JOIN_GUILD
            })
          })]
        })
      })
    })
  })
}