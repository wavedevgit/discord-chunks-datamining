/** Chunk was on 79764 **/
/** chunk id: 533202, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    directoryGuildName: _,
    directoryGuildId: b,
    currentCategoryId: L
  } = e, [v, I] = l.useState(j), [y, O] = l.useState(null), [Z, S] = l.useState(null), [N, T] = l.useState(null), [E, M] = l.useState(null), [H, G] = l.useState(null), [U, D] = l.useState(""), [w, P] = l.useState(null != L ? L : f.AR.UNCATEGORIZED), [k, R] = l.useState(false), {
    availableGuilds: A,
    addedGuilds: B,
    loading: V
  } = (0, m.Z)(b, t);
  l.useEffect(() => {
    I(j)
  }, [I, j]);
  let F = async () => {
    let e = H;
    if (!k) {
      if (null == N || null == Z) return;
      let t = await o.Z.createGuildFromTemplate(N, E, Z);
      G(e = (0, d.R)(t))
    }
    null != e && (await u.bF(t, e.id, U, w), I(f.VX.CONFIRMATION))
  }, X = {
    impression_group: r.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW
  };
  return (0, i.jsx)("div", {
    children: (0, i.jsx)(s.IX, {
      transitionState: n,
      onClose: h,
      children: (0, i.jsxs)(a.MyZ, {
        activeSlide: v,
        onSlideReady: e => O(e),
        children: [(0, i.jsx)(a.Mi4, {
          id: f.VX.CHOOSE_GUILD,
          impressionName: r.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
          impressionProperties: X,
          children: (0, i.jsx)(x.Z, {
            directoryChannelId: t,
            directoryGuildName: _,
            onGuildChosen: e => {
              R(true), I(f.VX.CUSTOMIZE_EXISTING_GUILD), G(e)
            },
            handleChooseCreate: () => {
              R(false), I(f.VX.GUILD_TEMPLATES)
            },
            availableGuilds: A,
            addedGuilds: B,
            loading: V
          })
        }), (0, i.jsx)(a.Mi4, {
          id: f.VX.GUILD_TEMPLATES,
          impressionName: r.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
          impressionProperties: X,
          children: (0, i.jsx)(p.Z, {
            directoryGuildName: _,
            onChooseTemplate: e => {
              R(false), I(f.VX.CUSTOMIZE_NEW_GUILD), S(e)
            },
            onBack: () => I(f.VX.CHOOSE_GUILD)
          })
        }), (0, i.jsx)(a.Mi4, {
          id: f.VX.CUSTOMIZE_NEW_GUILD,
          impressionName: r.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
          impressionProperties: X,
          children: (0, i.jsx)(c.Z, {
            guildTemplate: Z,
            onHubGuildInfoSet: (e, t) => {
              T(e), M(t), I(f.VX.CUSTOMIZE_EXISTING_GUILD)
            },
            onBack: () => I(f.VX.GUILD_TEMPLATES),
            isSlideReady: y === f.VX.CUSTOMIZE_NEW_GUILD
          })
        }), (0, i.jsx)(a.Mi4, {
          id: f.VX.CUSTOMIZE_EXISTING_GUILD,
          impressionName: r.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
          impressionProperties: X,
          children: (0, i.jsx)(g.Z, {
            directoryChannelId: t,
            description: U,
            onDescriptionChange: D,
            categoryId: w,
            onCategoryIdChange: P,
            onSubmit: F,
            onBack: () => I(k ? f.VX.CHOOSE_GUILD : f.VX.CUSTOMIZE_NEW_GUILD)
          })
        }), (0, i.jsx)(a.Mi4, {
          id: f.VX.CONFIRMATION,
          impressionName: r.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
          impressionProperties: X,
          children: (0, i.jsx)(C.Z, {
            directoryGuildName: _,
            guildToAdd: H,
            isExistingGuildFlow: k,
            onClose: h
          })
        })]
      })
    })
  })
}