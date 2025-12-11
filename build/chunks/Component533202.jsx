/** Chunk was on 79764 **/
/** chunk id: 533202, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
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
  Chunk486527 = require("./486527.js");

function C(e) {
  let {
    directoryChannelId: t,
    transitionState: n,
    initialSlide: C = g.VX.CHOOSE_GUILD,
    onClose: j,
    directoryGuildName: p,
    directoryGuildId: b,
    currentCategoryId: h
  } = e, [L, v] = a.useState(C), [y, Z] = a.useState(null), [O, I] = a.useState(null), [S, T] = a.useState(null), [N, _] = a.useState(null), [E, H] = a.useState(""), [M, G] = a.useState(null != h ? h : g.AR.UNCATEGORIZED), [w, k] = a.useState(false), {
    availableGuilds: U,
    addedGuilds: P,
    loading: D
  } = (0, d.Z)(b, t);
  a.useEffect(() => {
    v(C)
  }, [v, C]);
  let B = async () => {
    let e = N;
    if (!w) {
      if (null == O || null == y) return;
      let t = await r.Z.createGuildFromTemplate(O, S, y);
      _(e = (0, o.R)(t))
    }
    null != e && (await c.bF(t, e.id, E, M), v(g.VX.CONFIRMATION))
  }, V = null;
  switch (L) {
    case g.VX.CHOOSE_GUILD:
      V = (0, i.jsx)(u.Z, {
        directoryChannelId: t,
        directoryGuildName: p,
        onGuildChosen: e => {
          k(true), v(g.VX.CUSTOMIZE_EXISTING_GUILD), _(e)
        },
        handleChooseCreate: () => {
          k(false), v(g.VX.GUILD_TEMPLATES)
        },
        availableGuilds: U,
        addedGuilds: P,
        loading: D
      });
      break;
    case g.VX.GUILD_TEMPLATES:
      V = (0, i.jsx)(x.Z, {
        directoryGuildName: p,
        onChooseTemplate: e => {
          k(false), v(g.VX.CUSTOMIZE_NEW_GUILD), Z(e)
        },
        onBack: () => v(g.VX.CHOOSE_GUILD)
      });
      break;
    case g.VX.CUSTOMIZE_NEW_GUILD:
      V = (0, i.jsx)(s.Z, {
        isSlideReady: true,
        guildTemplate: y,
        onHubGuildInfoSet: (e, t) => {
          I(e), T(t), v(g.VX.CUSTOMIZE_EXISTING_GUILD)
        },
        onBack: () => v(g.VX.GUILD_TEMPLATES)
      });
      break;
    case g.VX.CUSTOMIZE_EXISTING_GUILD:
      V = (0, i.jsx)(f.Z, {
        directoryChannelId: t,
        description: E,
        onDescriptionChange: H,
        categoryId: M,
        onCategoryIdChange: G,
        onSubmit: B,
        onBack: () => v(w ? g.VX.CHOOSE_GUILD : g.VX.CUSTOMIZE_NEW_GUILD)
      });
      break;
    case g.VX.CONFIRMATION:
      V = (0, i.jsx)(m.Z, {
        directoryGuildName: p,
        guildToAdd: N,
        isExistingGuildFlow: w,
        onClose: j
      })
  }
  return (0, i.jsx)("div", {
    children: (0, i.jsx)(l.IX, {
      transitionState: n,
      onClose: j,
      children: V
    })
  })
}