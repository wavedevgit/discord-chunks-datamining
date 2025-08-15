/** Chunk was on 24209 **/
/** chunk id: 299402, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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

function E(e) {
  let {
    transitionState: t,
    initialSlide: n = I._m.GUILD_TEMPLATES,
    onSuccess: l,
    onClose: E,
    onSlideChange: S,
    hasJoinButton: O
  } = e, [C, b] = i.useState(n), g = (0, c.Z)(C), [L, D] = i.useState(null), [h, A] = i.useState(null), [x, v] = i.useState(null), [w, U] = i.useState(false);
  i.useEffect(() => {
    b(n)
  }, [b, n]), i.useEffect(() => {
    C !== g && S(C)
  }, [S, C, g]);
  let y = i.useCallback(e => {
      b(I._m.CREATION_INTENT), A(e), u.default.track(N.rMx.GUILD_TEMPLATE_SELECTED, {
        template_name: e.id,
        template_code: e.code
      })
    }, []),
    G = i.useCallback(e => {
      U(e === I.lr.COMMUNITY), b(I._m.CUSTOMIZE_GUILD)
    }, []),
    j = i.useCallback(() => b(I._m.JOIN_GUILD), [b]),
    P = i.useCallback(() => {
      if (C === I._m.CUSTOMIZE_GUILD) return void b(I._m.CREATION_INTENT);
      b(I._m.GUILD_TEMPLATES), A(null)
    }, [C]),
    M = i.useCallback(e => {
      v(e), l(e)
    }, [l, v]),
    k = i.useCallback(() => {
      o()(null != x, "handleSuccess called before onGuildCreated"), l(x)
    }, [l, x]),
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
          activeSlide: C,
          width: Z,
          onSlideReady: e => D(e),
          children: [(0, r.jsx)(s.Mi4, {
            id: I._m.GUILD_TEMPLATES,
            impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: R,
            children: (0, r.jsx)(p.Z, {
              isNewUser: false,
              onJoin: O ? j : true,
              onChooseTemplate: y,
              onClose: E
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.CREATION_INTENT,
            impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: R,
            children: (0, r.jsx)(d.Z, {
              onClose: E,
              onBack: P,
              onCreationIntentChosen: G
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.CUSTOMIZE_GUILD,
            impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: R,
            children: (0, r.jsx)(m.Z, {
              guildTemplate: h,
              onGuildCreated: M,
              onClose: E,
              onBack: P,
              isSlideReady: L === I._m.CUSTOMIZE_GUILD,
              isCommunity: w
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.CHANNEL_PROMPT,
            impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: R,
            children: (0, r.jsx)(_.Z, {
              createdGuildId: x,
              onClose: E,
              onChannelPromptCompleted: k,
              isSlideReady: L === I._m.CHANNEL_PROMPT
            })
          }), (0, r.jsx)(s.Mi4, {
            id: I._m.JOIN_GUILD,
            impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: R,
            children: (0, r.jsx)(f.Z, {
              onBack: P,
              onClose: E,
              isSlideReady: L === I._m.JOIN_GUILD
            })
          })]
        })
      })
    })
  })
}