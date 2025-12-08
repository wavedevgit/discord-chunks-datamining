/** Chunk was on 79764 **/
/** chunk id: 533202, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
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

function f(e) {
  let {
    directoryChannelId: t,
    transitionState: n,
    initialSlide: f = C.VX.CHOOSE_GUILD,
    onClose: j,
    directoryGuildName: p,
    directoryGuildId: b,
    currentCategoryId: h
  } = e, [L, _] = l.useState(f), [v, y] = l.useState(null), [Z, O] = l.useState(null), [I, S] = l.useState(null), [T, N] = l.useState(null), [E, H] = l.useState(""), [M, G] = l.useState(null != h ? h : C.AR.UNCATEGORIZED), [w, k] = l.useState(false), {
    availableGuilds: U,
    addedGuilds: P,
    loading: D
  } = (0, d.Z)(b, t);
  l.useEffect(() => {
    _(f)
  }, [_, f]);
  let B = async () => {
    let e = T;
    if (!w) {
      if (null == Z || null == v) return;
      let t = await r.Z.createGuildFromTemplate(Z, I, v);
      N(e = (0, o.R)(t))
    }
    null != e && (await c.bF(t, e.id, E, M), _(C.VX.CONFIRMATION))
  }, V = null;
  switch (L) {
    case C.VX.CHOOSE_GUILD:
      V = (0, i.jsx)(u.Z, {
        directoryChannelId: t,
        directoryGuildName: p,
        onGuildChosen: e => {
          k(true), _(C.VX.CUSTOMIZE_EXISTING_GUILD), N(e)
        },
        handleChooseCreate: () => {
          k(false), _(C.VX.GUILD_TEMPLATES)
        },
        availableGuilds: U,
        addedGuilds: P,
        loading: D
      });
      break;
    case C.VX.GUILD_TEMPLATES:
      V = (0, i.jsx)(g.Z, {
        directoryGuildName: p,
        onChooseTemplate: e => {
          k(false), _(C.VX.CUSTOMIZE_NEW_GUILD), y(e)
        },
        onBack: () => _(C.VX.CHOOSE_GUILD)
      });
      break;
    case C.VX.CUSTOMIZE_NEW_GUILD:
      V = (0, i.jsx)(s.Z, {
        isSlideReady: true,
        guildTemplate: v,
        onHubGuildInfoSet: (e, t) => {
          O(e), S(t), _(C.VX.CUSTOMIZE_EXISTING_GUILD)
        },
        onBack: () => _(C.VX.GUILD_TEMPLATES)
      });
      break;
    case C.VX.CUSTOMIZE_EXISTING_GUILD:
      V = (0, i.jsx)(m.Z, {
        directoryChannelId: t,
        description: E,
        onDescriptionChange: H,
        categoryId: M,
        onCategoryIdChange: G,
        onSubmit: B,
        onBack: () => _(w ? C.VX.CHOOSE_GUILD : C.VX.CUSTOMIZE_NEW_GUILD)
      });
      break;
    case C.VX.CONFIRMATION:
      V = (0, i.jsx)(x.Z, {
        directoryGuildName: p,
        guildToAdd: T,
        isExistingGuildFlow: w,
        onClose: j
      })
  }
  return (0, i.jsx)("div", {
    children: (0, i.jsx)(a.IX, {
      transitionState: n,
      onClose: j,
      children: V
    })
  })
}