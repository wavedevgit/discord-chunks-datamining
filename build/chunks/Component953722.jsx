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
    onClose: b,
    directoryGuildName: f,
    directoryGuildId: h,
    currentCategoryId: p
  } = e, [L, v] = i.useState(j), [y, O] = i.useState(null), [S, A] = i.useState(null), [N, _] = i.useState(null), [H, I] = i.useState(null), [T, E] = i.useState(""), [M, k] = i.useState(null != p ? p : C.mU.UNCATEGORIZED), [D, G] = i.useState(false), {
    availableGuilds: U,
    addedGuilds: w,
    loading: Z
  } = (0, o.A)(h, t);
  i.useEffect(() => {
    v(j)
  }, [v, j]);
  let P = async () => {
    let e = H;
    if (!D) {
      if (null == S || null == y) return;
      let t = await a.A.createGuildFromTemplate(S, N, y);
      I(e = (0, c.Y1)(t))
    }
    null != e && (await d.WD(t, e.id, T, M), v(C.m8.CONFIRMATION))
  }, R = null;
  switch (L) {
    case C.m8.CHOOSE_GUILD:
      R = (0, l.jsx)(u.A, {
        directoryChannelId: t,
        directoryGuildName: f,
        onGuildChosen: e => {
          G(true), v(C.m8.CUSTOMIZE_EXISTING_GUILD), I(e)
        },
        handleChooseCreate: () => {
          G(false), v(C.m8.GUILD_TEMPLATES)
        },
        availableGuilds: U,
        addedGuilds: w,
        loading: Z
      });
      break;
    case C.m8.GUILD_TEMPLATES:
      R = (0, l.jsx)(g.A, {
        directoryGuildName: f,
        onChooseTemplate: e => {
          G(false), v(C.m8.CUSTOMIZE_NEW_GUILD), O(e)
        },
        onBack: () => v(C.m8.CHOOSE_GUILD)
      });
      break;
    case C.m8.CUSTOMIZE_NEW_GUILD:
      R = (0, l.jsx)(r.A, {
        isSlideReady: true,
        guildTemplate: y,
        onHubGuildInfoSet: (e, t) => {
          A(e), _(t), v(C.m8.CUSTOMIZE_EXISTING_GUILD)
        },
        onBack: () => v(C.m8.GUILD_TEMPLATES)
      });
      break;
    case C.m8.CUSTOMIZE_EXISTING_GUILD:
      R = (0, l.jsx)(x.A, {
        directoryChannelId: t,
        description: T,
        onDescriptionChange: E,
        categoryId: M,
        onCategoryIdChange: k,
        onSubmit: P,
        onBack: () => v(D ? C.m8.CHOOSE_GUILD : C.m8.CUSTOMIZE_NEW_GUILD)
      });
      break;
    case C.m8.CONFIRMATION:
      R = (0, l.jsx)(m.A, {
        directoryGuildName: f,
        guildToAdd: H,
        isExistingGuildFlow: D,
        onClose: b
      })
  }
  return (0, l.jsx)("div", {
    children: (0, l.jsx)(s.dWK, {
      transitionState: n,
      onClose: b,
      children: R
    })
  })
}