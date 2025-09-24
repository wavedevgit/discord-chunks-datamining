/** Chunk was on 79764 **/
/** chunk id: 533202, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
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
  Chunk75666 = require("./75666.js"),
  Chunk248494 = require("./248494.js");

function f(e) {
  let {
    directoryChannelId: t,
    transitionState: n,
    initialSlide: f = h.VX.CHOOSE_GUILD,
    onClose: j,
    directoryGuildName: _,
    directoryGuildId: b,
    currentCategoryId: L
  } = e, [v, I] = s.useState(f), [N, y] = s.useState(null), [Z, O] = s.useState(null), [T, E] = s.useState(null), [S, M] = s.useState(null), [H, G] = s.useState(null), [k, D] = s.useState(""), [w, U] = s.useState(null != L ? L : h.AR.UNCATEGORIZED), [B, R] = s.useState(false), {
    availableGuilds: A,
    addedGuilds: P,
    loading: V
  } = (0, u.Z)(b, t);
  s.useEffect(() => {
    I(f)
  }, [I, f]);
  let X = async () => {
    let e = H;
    if (!B) {
      if (null == T || null == Z) return;
      let t = await a.Z.createGuildFromTemplate(T, S, Z);
      G(e = (0, c.R)(t))
    }
    null != e && (await d.bF(t, e.id, k, w), I(h.VX.CONFIRMATION))
  }, F = {
    impression_group: l.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW
  };
  return (0, i.jsx)("div", {
    children: (0, i.jsx)(r.Y0X, {
      transitionState: n,
      disableTrack: true,
      parentComponent: "CreateOrAddGuildModal",
      children: (0, i.jsx)("div", {
        className: g.container,
        children: (0, i.jsxs)(r.MyZ, {
          activeSlide: v,
          width: 440,
          onSlideReady: e => y(e),
          children: [(0, i.jsx)(r.Mi4, {
            id: h.VX.CHOOSE_GUILD,
            impressionName: l.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
            impressionProperties: F,
            children: (0, i.jsx)(m.Z, {
              directoryChannelId: t,
              directoryGuildName: _,
              onGuildChosen: e => {
                R(true), I(h.VX.CUSTOMIZE_EXISTING_GUILD), G(e)
              },
              handleChooseCreate: () => {
                R(false), I(h.VX.GUILD_TEMPLATES)
              },
              onClose: j,
              availableGuilds: A,
              addedGuilds: P,
              loading: V
            })
          }), (0, i.jsx)(r.Mi4, {
            id: h.VX.GUILD_TEMPLATES,
            impressionName: l.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
            impressionProperties: F,
            children: (0, i.jsx)(p.Z, {
              directoryGuildName: _,
              onChooseTemplate: e => {
                R(false), I(h.VX.CUSTOMIZE_NEW_GUILD), O(e)
              },
              onClose: j,
              onBack: () => I(h.VX.CHOOSE_GUILD)
            })
          }), (0, i.jsx)(r.Mi4, {
            id: h.VX.CUSTOMIZE_NEW_GUILD,
            impressionName: l.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
            impressionProperties: F,
            children: (0, i.jsx)(o.Z, {
              guildTemplate: Z,
              onHubGuildInfoSet: (e, t) => {
                E(e), M(t), I(h.VX.CUSTOMIZE_EXISTING_GUILD)
              },
              onClose: j,
              onBack: () => I(h.VX.GUILD_TEMPLATES),
              isSlideReady: N === h.VX.CUSTOMIZE_NEW_GUILD
            })
          }), (0, i.jsx)(r.Mi4, {
            id: h.VX.CUSTOMIZE_EXISTING_GUILD,
            impressionName: l.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
            impressionProperties: F,
            children: (0, i.jsx)(x.Z, {
              directoryChannelId: t,
              description: k,
              onDescriptionChange: D,
              categoryId: w,
              onCategoryIdChange: U,
              onSubmit: X,
              onBack: () => I(B ? h.VX.CHOOSE_GUILD : h.VX.CUSTOMIZE_NEW_GUILD),
              onClose: j
            })
          }), (0, i.jsx)(r.Mi4, {
            id: h.VX.CONFIRMATION,
            impressionName: l.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
            impressionProperties: F,
            children: (0, i.jsx)(C.Z, {
              directoryGuildName: _,
              guildToAdd: H,
              isExistingGuildFlow: B,
              onClose: j
            })
          })]
        })
      })
    })
  })
}