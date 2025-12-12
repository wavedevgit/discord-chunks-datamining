/** Chunk was on 92241 **/
/** chunk id: 299402, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk832345 = require("./832345.js");

function T(e) {
  let {
    transitionState: t,
    initialSlide: n = b._m.GUILD_TEMPLATES,
    onSuccess: a,
    onClose: T,
    onSlideChange: O,
    hasJoinButton: S
  } = e, [E, g] = o.useState(n), C = (0, s.Z)(E), [h, x] = o.useState(null), [w, L] = o.useState(null), [v, y] = o.useState(null), [D, j] = o.useState(false);
  o.useEffect(() => {
    g(n)
  }, [g, n]), o.useEffect(() => {
    E !== C && O(E)
  }, [O, E, C]);
  let A = o.useCallback(e => {
      g(b._m.CREATION_INTENT), L(e), u.default.track(I.rMx.GUILD_TEMPLATE_SELECTED, {
        template_name: e.id,
        template_code: e.code
      })
    }, []),
    U = o.useCallback(e => {
      j(e === b.lr.COMMUNITY), g(b._m.CUSTOMIZE_GUILD)
    }, []),
    G = o.useCallback(() => g(b._m.JOIN_GUILD), [g]),
    P = o.useCallback(() => {
      if (E === b._m.CUSTOMIZE_GUILD) return void g(b._m.CREATION_INTENT);
      g(b._m.GUILD_TEMPLATES), L(null)
    }, [E]),
    M = o.useCallback(e => {
      y(e), a(e)
    }, [a, y]),
    k = o.useCallback(() => {
      i()(null != v, "handleSuccess called before onGuildCreated"), a(v)
    }, [a, v]),
    R = {
      impression_group: l.ImpressionGroups.GUILD_ADD_FLOW
    },
    Z = (0, c.dQu)(c.TVs.modules.modal.WIDTH_SMALL);
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(c.Y0X, {
      "data-migration-pending": true,
      transitionState: t,
      disableTrack: true,
      parentComponent: "CreateGuildModal",
      children: (0, r.jsx)("div", {
        className: N.container,
        children: (0, r.jsxs)(c.MyZ, {
          activeSlide: E,
          width: Z,
          onSlideReady: e => x(e),
          children: [(0, r.jsx)(c.Mi4, {
            id: b._m.GUILD_TEMPLATES,
            impressionName: l.ImpressionNames.GUILD_ADD_LANDING,
            impressionProperties: R,
            children: (0, r.jsx)(m.Z, {
              isNewUser: false,
              onJoin: S ? G : true,
              onChooseTemplate: A,
              onClose: T
            })
          }), (0, r.jsx)(c.Mi4, {
            id: b._m.CREATION_INTENT,
            impressionName: l.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
            impressionProperties: R,
            children: (0, r.jsx)(f.Z, {
              onClose: T,
              onBack: P,
              onCreationIntentChosen: U
            })
          }), (0, r.jsx)(c.Mi4, {
            id: b._m.CUSTOMIZE_GUILD,
            impressionName: l.ImpressionNames.GUILD_ADD_CUSTOMIZE,
            impressionProperties: R,
            children: (0, r.jsx)(p.Z, {
              guildTemplate: w,
              onGuildCreated: M,
              onClose: T,
              onBack: P,
              isSlideReady: h === b._m.CUSTOMIZE_GUILD,
              isCommunity: D
            })
          }), (0, r.jsx)(c.Mi4, {
            id: b._m.CHANNEL_PROMPT,
            impressionName: l.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
            impressionProperties: R,
            children: (0, r.jsx)(d.Z, {
              createdGuildId: v,
              onClose: T,
              onChannelPromptCompleted: k,
              isSlideReady: h === b._m.CHANNEL_PROMPT
            })
          }), (0, r.jsx)(c.Mi4, {
            id: b._m.JOIN_GUILD,
            impressionName: l.ImpressionNames.GUILD_ADD_JOIN,
            impressionProperties: R,
            children: (0, r.jsx)(_.Z, {
              onBack: P,
              onClose: T,
              isSlideReady: h === b._m.JOIN_GUILD
            })
          })]
        })
      })
    })
  })
}