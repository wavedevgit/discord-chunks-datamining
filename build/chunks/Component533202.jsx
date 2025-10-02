/** Chunk was on 79764 **/
/** chunk id: 533202, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk458879 = require("./458879.js"),
  Chunk996453 = require("./996453.jsx"),
  Chunk411198 = require("./411198.js"),
  Chunk99325 = require("./99325.js"),
  Chunk454432 = require("./454432.js"),
  Chunk492749 = require("./492749.jsx"),
  Chunk66626 = require("./66626.jsx"),
  Chunk892322 = require("./892322.jsx"),
  Chunk15608 = require("./15608.jsx"),
  Chunk75666 = require("./75666.js");

function j(e) {
  let {
    directoryChannelId: t,
    transitionState: n,
    initialSlide: j = f.VX.CHOOSE_GUILD,
    onClose: h,
    directoryGuildName: b,
    directoryGuildId: _,
    currentCategoryId: L
  } = e, [I, v] = l.useState(j), [y, Z] = l.useState(null), [O, S] = l.useState(null), [T, N] = l.useState(null), [E, M] = l.useState(null), [G, H] = l.useState(null), [U, D] = l.useState(""), [w, k] = l.useState(null != L ? L : f.AR.UNCATEGORIZED), [P, R] = l.useState(false), {
    availableGuilds: A,
    addedGuilds: V,
    loading: B
  } = (0, m.Z)(_, t);
  l.useEffect(() => {
    v(j)
  }, [v, j]);
  let X = async () => {
    let e = G;
    if (!P) {
      if (null == T || null == O) return;
      let t = await o.Z.createGuildFromTemplate(T, E, O);
      H(e = (0, d.R)(t))
    }
    null != e && (await u.bF(t, e.id, U, w), v(f.VX.CONFIRMATION))
  }, F = {
    impression_group: s.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW
  };
  return (0, i.jsx)("div", {
    children: (0, i.jsx)(r.IX, {
      transitionState: n,
      onClose: h,
      children: (0, i.jsxs)(a.MyZ, {
        activeSlide: I,
        onSlideReady: e => Z(e),
        children: [(0, i.jsx)(a.Mi4, {
          id: f.VX.CHOOSE_GUILD,
          impressionName: s.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
          impressionProperties: F,
          children: (0, i.jsx)(x.Z, {
            directoryChannelId: t,
            directoryGuildName: b,
            onGuildChosen: e => {
              R(true), v(f.VX.CUSTOMIZE_EXISTING_GUILD), H(e)
            },
            handleChooseCreate: () => {
              R(false), v(f.VX.GUILD_TEMPLATES)
            },
            availableGuilds: A,
            addedGuilds: V,
            loading: B
          })
        }), (0, i.jsx)(a.Mi4, {
          id: f.VX.GUILD_TEMPLATES,
          impressionName: s.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
          impressionProperties: F,
          children: (0, i.jsx)(p.Z, {
            directoryGuildName: b,
            onChooseTemplate: e => {
              R(false), v(f.VX.CUSTOMIZE_NEW_GUILD), S(e)
            },
            onBack: () => v(f.VX.CHOOSE_GUILD)
          })
        }), (0, i.jsx)(a.Mi4, {
          id: f.VX.CUSTOMIZE_NEW_GUILD,
          impressionName: s.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
          impressionProperties: F,
          children: (0, i.jsx)(c.Z, {
            guildTemplate: O,
            onHubGuildInfoSet: (e, t) => {
              N(e), M(t), v(f.VX.CUSTOMIZE_EXISTING_GUILD)
            },
            onBack: () => v(f.VX.GUILD_TEMPLATES),
            isSlideReady: y === f.VX.CUSTOMIZE_NEW_GUILD
          })
        }), (0, i.jsx)(a.Mi4, {
          id: f.VX.CUSTOMIZE_EXISTING_GUILD,
          impressionName: s.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
          impressionProperties: F,
          children: (0, i.jsx)(C.Z, {
            directoryChannelId: t,
            description: U,
            onDescriptionChange: D,
            categoryId: w,
            onCategoryIdChange: k,
            onSubmit: X,
            onBack: () => v(P ? f.VX.CHOOSE_GUILD : f.VX.CUSTOMIZE_NEW_GUILD)
          })
        }), (0, i.jsx)(a.Mi4, {
          id: f.VX.CONFIRMATION,
          impressionName: s.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
          impressionProperties: F,
          children: (0, i.jsx)(g.Z, {
            directoryGuildName: b,
            guildToAdd: G,
            isExistingGuildFlow: P,
            onClose: h
          })
        })]
      })
    })
  })
}