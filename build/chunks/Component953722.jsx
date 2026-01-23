/** Chunk was on 6759 **/
/** chunk id: 953722, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk943457 = require("./943457.js"),
  Chunk424912 = require("./424912.jsx"),
  Chunk860689 = require("./860689.js"),
  Chunk208882 = require("./208882.js"),
  Chunk121004 = require("./121004.js"),
  Chunk880392 = require("./880392.jsx"),
  Chunk843580 = require("./843580.jsx"),
  Chunk851091 = require("./851091.jsx"),
  Chunk909806 = require("./909806.jsx"),
  Chunk946116 = require("./946116.js");

function j(e) {
  let {
    directoryChannelId: t,
    transitionState: n,
    initialSlide: j = C.m8.CHOOSE_GUILD,
    onClose: h,
    directoryGuildName: p,
    directoryGuildId: f,
    currentCategoryId: b
  } = e, [L, _] = i.useState(j), [v, y] = i.useState(null), [O, S] = i.useState(null), [A, I] = i.useState(null), [N, T] = i.useState(null), [H, E] = i.useState(""), [M, k] = i.useState(null != b ? b : C.mU.UNCATEGORIZED), [G, D] = i.useState(false), {
    availableGuilds: U,
    addedGuilds: w,
    loading: Z
  } = (0, d.A)(f, t);
  i.useEffect(() => {
    _(j)
  }, [_, j]);
  let P = async () => {
    let e = N;
    if (!G) {
      if (null == O || null == v) return;
      let t = await r.A.createGuildFromTemplate(O, A, v);
      T(e = (0, c.Y1)(t))
    }
    null != e && (await o.WD(t, e.id, H, M), _(C.m8.CONFIRMATION))
  }, R = null;
  switch (L) {
    case C.m8.CHOOSE_GUILD:
      R = (0, l.jsx)(u.A, {
        directoryChannelId: t,
        directoryGuildName: p,
        onGuildChosen: e => {
          D(true), _(C.m8.CUSTOMIZE_EXISTING_GUILD), T(e)
        },
        handleChooseCreate: () => {
          D(false), _(C.m8.GUILD_TEMPLATES)
        },
        availableGuilds: U,
        addedGuilds: w,
        loading: Z
      });
      break;
    case C.m8.GUILD_TEMPLATES:
      R = (0, l.jsx)(g.A, {
        directoryGuildName: p,
        onChooseTemplate: e => {
          D(false), _(C.m8.CUSTOMIZE_NEW_GUILD), y(e)
        },
        onBack: () => _(C.m8.CHOOSE_GUILD)
      });
      break;
    case C.m8.CUSTOMIZE_NEW_GUILD:
      R = (0, l.jsx)(a.A, {
        isSlideReady: true,
        guildTemplate: v,
        onHubGuildInfoSet: (e, t) => {
          S(e), I(t), _(C.m8.CUSTOMIZE_EXISTING_GUILD)
        },
        onBack: () => _(C.m8.GUILD_TEMPLATES)
      });
      break;
    case C.m8.CUSTOMIZE_EXISTING_GUILD:
      R = (0, l.jsx)(m.A, {
        directoryChannelId: t,
        description: H,
        onDescriptionChange: E,
        categoryId: M,
        onCategoryIdChange: k,
        onSubmit: P,
        onBack: () => _(G ? C.m8.CHOOSE_GUILD : C.m8.CUSTOMIZE_NEW_GUILD)
      });
      break;
    case C.m8.CONFIRMATION:
      R = (0, l.jsx)(x.A, {
        directoryGuildName: p,
        guildToAdd: N,
        isExistingGuildFlow: G,
        onClose: h
      })
  }
  return (0, l.jsx)("div", {
    children: (0, l.jsx)(s.dWK, {
      transitionState: n,
      onClose: h,
      children: R
    })
  })
}