/** Chunk was on 72047 **/
/** chunk id: 299402, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
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
  Chunk58146 = require("./58146.js");

function E(e) {
  let {
    transitionState: t,
    initialSlide: n = I._m.GUILD_TEMPLATES,
    onSuccess: l,
    onClose: E,
    onSlideChange: O,
    hasJoinButton: b
  } = e, [S, C] = o.useState(n), g = (0, c.Z)(S), [x, h] = o.useState(null), [L, w] = o.useState(null), [v, D] = o.useState(null), [y, A] = o.useState(false);
  o.useEffect(() => {
    C(n)
  }, [C, n]), o.useEffect(() => {
    S !== g && O(S)
  }, [O, S, g]);
  let j = o.useCallback(e => {
      C(I._m.CREATION_INTENT), w(e), u.default.track(N.rMx.GUILD_TEMPLATE_SELECTED, {
        template_name: e.id,
        template_code: e.code
      })
    }, []),
    U = o.useCallback(e => {
      A(e === I.lr.COMMUNITY), C(I._m.CUSTOMIZE_GUILD)
    }, []),
    G = o.useCallback(() => C(I._m.JOIN_GUILD), [C]),
    M = o.useCallback(() => {
      if (S === I._m.CUSTOMIZE_GUILD) return void C(I._m.CREATION_INTENT);
      C(I._m.GUILD_TEMPLATES), w(null)
    }, [S]),
    P = o.useCallback(e => {
      D(e), l(e)
    }, [l, D]),
    k = o.useCallback(() => {
      i()(null != v, "handleSuccess called before onGuildCreated"), l(v)
    }, [l, v]),
    R = {
      impression_group: a.ImpressionGroups.GUILD_ADD_FLOW
    },
    Z = (0, s.dQu)(s.TVs.modules.modal.WIDTH_SMALL);
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(s.Y0X, {
      transitionState: t,
      disableTrack: true,
      parentComponent: "CreateGuildModal",
      children: (0, r.jsx)("div", {
        className: T.container,
        children: (0, r.jsxs)(s.MyZ, {
          activeSlide: S,
          width: Z,
          onSlideReady: e => h(e),
          children: [(0, r.jsx)(s.Mi4, {
            id: I._m.GUILD_TEMPLATES,
            impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: R,
            children: (0, r.jsx)(p.Z, {
              isNewUser: false,
              onJoin: b ? G : true,
              onChooseTemplate: j,
              onClose: E
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.CREATION_INTENT,
            impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: R,
            children: (0, r.jsx)(d.Z, {
              onClose: E,
              onBack: M,
              onCreationIntentChosen: U
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.CUSTOMIZE_GUILD,
            impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: R,
            children: (0, r.jsx)(m.Z, {
              guildTemplate: L,
              onGuildCreated: P,
              onClose: E,
              onBack: M,
              isSlideReady: x === I._m.CUSTOMIZE_GUILD,
              isCommunity: y
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.CHANNEL_PROMPT,
            impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: R,
            children: (0, r.jsx)(_.Z, {
              createdGuildId: v,
              onClose: E,
              onChannelPromptCompleted: k,
              isSlideReady: x === I._m.CHANNEL_PROMPT
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.JOIN_GUILD,
            impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: R,
            children: (0, r.jsx)(f.Z, {
              onBack: M,
              onClose: E,
              isSlideReady: x === I._m.JOIN_GUILD
            })
          })]
        })
      })
    })
  })
}