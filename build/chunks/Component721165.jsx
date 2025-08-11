/** Chunk was on 86513 **/
/** chunk id: 721165, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk131388 = require("./131388.js"),
  Chunk171246 = require("./171246.js"),
  Chunk689011 = require("./689011.jsx"),
  Chunk931905 = require("./931905.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk586585 = require("./586585.jsx"),
  Chunk27034 = require("./27034.jsx"),
  Chunk750143 = require("./750143.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    subscriptionMetadataRequest: g,
    selectedSku: x,
    selectedStoreListing: v,
    application: j
  } = (0, d.JL)(), y = (0, a.Z)(b.i), C = (0, l.e7)([u.Z], () => u.Z.getGuild(null == g ? true : g.guild_id)), O = r.useCallback(() => t(m.h8.REVIEW), [t]);
  if (null == x) return null;
  let S = (0, o.KW)(x.flags);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(p.C3, {
      children: y ? (0, i.jsx)(c.h, {
        confirmCta: h.intl.string(h.t.PBHFSk),
        onConfirm: O,
        onCancel: n,
        title: h.intl.format(h.t["6n6oXF"], {
          tier: x.name
        }),
        subtitle: S ? h.intl.string(h.t.lzAoKC) : h.intl.formatToPlainString(h.t["GqaY/v"], {
          guildName: null == C ? true : C.name
        }),
        showOpenDiscord: false
      }) : (0, i.jsx)(s.Oc, {
        icon: null == v ? true : v.thumbnail,
        storeListingBenefits: null == v ? true : v.benefits,
        application: null != j ? j : true,
        title: h.intl.format(h.t.haiCxc, {
          tier: x.name
        }),
        subtitle: S ? h.intl.string(h.t.RvtbPz) : h.intl.string(h.t.zY39Zm),
        description: S ? h.intl.formatToPlainString(h.t.QCe4ra, {
          applicationName: null == j ? true : j.name
        }) : h.intl.string(h.t.n1Pu8P)
      })
    }), !y && (0, i.jsx)(p.O3, {
      children: (0, i.jsx)(f.Z, {
        onBack: n,
        backText: h.intl.string(h.t.TQBY1N),
        onPrimary: O,
        primaryCTA: f.g.CONTINUE,
        primaryText: h.intl.string(h.t["gZhF+/"])
      })
    })]
  })
}