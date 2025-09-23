/** Chunk was on 27662 **/
/** chunk id: 299402, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk559409 = require("./559409.js");

function b(e) {
  let {
    transitionState: t,
    initialSlide: n = I._m.GUILD_TEMPLATES,
    onSuccess: l,
    onClose: b,
    onSlideChange: S,
    hasJoinButton: O
  } = e, [E, C] = o.useState(n), x = (0, c.Z)(E), [g, h] = o.useState(null), [w, L] = o.useState(null), [v, y] = o.useState(null), [D, j] = o.useState(false);
  o.useEffect(() => {
    C(n)
  }, [C, n]), o.useEffect(() => {
    E !== x && S(E)
  }, [S, E, x]);
  let A = o.useCallback(e => {
      C(I._m.CREATION_INTENT), L(e), u.default.track(N.rMx.GUILD_TEMPLATE_SELECTED, {
        template_name: e.id,
        template_code: e.code
      })
    }, []),
    U = o.useCallback(e => {
      j(e === I.lr.COMMUNITY), C(I._m.CUSTOMIZE_GUILD)
    }, []),
    G = o.useCallback(() => C(I._m.JOIN_GUILD), [C]),
    k = o.useCallback(() => {
      if (E === I._m.CUSTOMIZE_GUILD) return void C(I._m.CREATION_INTENT);
      C(I._m.GUILD_TEMPLATES), L(null)
    }, [E]),
    P = o.useCallback(e => {
      y(e), l(e)
    }, [l, y]),
    M = o.useCallback(() => {
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
          activeSlide: E,
          width: Z,
          onSlideReady: e => h(e),
          children: [(0, r.jsx)(s.Mi4, {
            id: I._m.GUILD_TEMPLATES,
            impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: R,
            children: (0, r.jsx)(m.Z, {
              isNewUser: false,
              onJoin: O ? G : true,
              onChooseTemplate: A,
              onClose: b
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.CREATION_INTENT,
            impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: R,
            children: (0, r.jsx)(d.Z, {
              onClose: b,
              onBack: k,
              onCreationIntentChosen: U
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.CUSTOMIZE_GUILD,
            impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: R,
            children: (0, r.jsx)(p.Z, {
              guildTemplate: w,
              onGuildCreated: P,
              onClose: b,
              onBack: k,
              isSlideReady: g === I._m.CUSTOMIZE_GUILD,
              isCommunity: D
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.CHANNEL_PROMPT,
            impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: R,
            children: (0, r.jsx)(_.Z, {
              createdGuildId: v,
              onClose: b,
              onChannelPromptCompleted: M,
              isSlideReady: g === I._m.CHANNEL_PROMPT
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.JOIN_GUILD,
            impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: R,
            children: (0, r.jsx)(f.Z, {
              onBack: k,
              onClose: b,
              isSlideReady: g === I._m.JOIN_GUILD
            })
          })]
        })
      })
    })
  })
}