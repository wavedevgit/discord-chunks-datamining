/** Chunk was on 79764 **/
/** chunk id: 533202, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
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

function g(e) {
  let {
    directoryChannelId: t,
    transitionState: n,
    initialSlide: g = p.VX.CHOOSE_GUILD,
    onClose: j,
    directoryGuildName: _,
    directoryGuildId: b,
    currentCategoryId: L
  } = e, [N, I] = s.useState(g), [y, v] = s.useState(null), [Z, S] = s.useState(null), [E, T] = s.useState(null), [O, B] = s.useState(null), [M, k] = s.useState(null), [H, D] = s.useState(""), [G, w] = s.useState(null != L ? L : p.AR.UNCATEGORIZED), [U, R] = s.useState(false), {
    availableGuilds: A,
    addedGuilds: P,
    loading: V
  } = (0, u.Z)(b, t);
  s.useEffect(() => {
    I(g)
  }, [I, g]);
  let z = async () => {
    let e = M;
    if (!U) {
      if (null == E || null == Z) return;
      let t = await a.Z.createGuildFromTemplate(E, O, Z);
      k(e = (0, c.R)(t))
    }
    null != e && (await d.bF(t, e.id, H, G), I(p.VX.CONFIRMATION))
  }, X = {
    impression_group: l.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW
  };
  return (0, i.jsx)("div", {
    children: (0, i.jsx)(r.Y0X, {
      transitionState: n,
      disableTrack: true,
      parentComponent: "CreateOrAddGuildModal",
      children: (0, i.jsx)("div", {
        className: f.container,
        children: (0, i.jsxs)(r.MyZ, {
          activeSlide: N,
          width: 440,
          onSlideReady: e => v(e),
          children: [(0, i.jsx)(r.Mi4, {
            id: p.VX.CHOOSE_GUILD,
            impressionName: l.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
            impressionProperties: X,
            children: (0, i.jsx)(m.Z, {
              directoryChannelId: t,
              directoryGuildName: _,
              onGuildChosen: e => {
                R(true), I(p.VX.CUSTOMIZE_EXISTING_GUILD), k(e)
              },
              handleChooseCreate: () => {
                R(false), I(p.VX.GUILD_TEMPLATES)
              },
              onClose: j,
              availableGuilds: A,
              addedGuilds: P,
              loading: V
            })
          }), (0, i.jsx)(r.Mi4, {
            id: p.VX.GUILD_TEMPLATES,
            impressionName: l.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
            impressionProperties: X,
            children: (0, i.jsx)(h.Z, {
              directoryGuildName: _,
              onChooseTemplate: e => {
                R(false), I(p.VX.CUSTOMIZE_NEW_GUILD), S(e)
              },
              onClose: j,
              onBack: () => I(p.VX.CHOOSE_GUILD)
            })
          }), (0, i.jsx)(r.Mi4, {
            id: p.VX.CUSTOMIZE_NEW_GUILD,
            impressionName: l.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
            impressionProperties: X,
            children: (0, i.jsx)(o.Z, {
              guildTemplate: Z,
              onHubGuildInfoSet: (e, t) => {
                T(e), B(t), I(p.VX.CUSTOMIZE_EXISTING_GUILD)
              },
              onClose: j,
              onBack: () => I(p.VX.GUILD_TEMPLATES),
              isSlideReady: y === p.VX.CUSTOMIZE_NEW_GUILD
            })
          }), (0, i.jsx)(r.Mi4, {
            id: p.VX.CUSTOMIZE_EXISTING_GUILD,
            impressionName: l.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
            impressionProperties: X,
            children: (0, i.jsx)(x.Z, {
              directoryChannelId: t,
              description: H,
              onDescriptionChange: D,
              categoryId: G,
              onCategoryIdChange: w,
              onSubmit: z,
              onBack: () => I(U ? p.VX.CHOOSE_GUILD : p.VX.CUSTOMIZE_NEW_GUILD),
              onClose: j
            })
          }), (0, i.jsx)(r.Mi4, {
            id: p.VX.CONFIRMATION,
            impressionName: l.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
            impressionProperties: X,
            children: (0, i.jsx)(C.Z, {
              directoryGuildName: _,
              guildToAdd: M,
              isExistingGuildFlow: U,
              onClose: j
            })
          })]
        })
      })
    })
  })
}