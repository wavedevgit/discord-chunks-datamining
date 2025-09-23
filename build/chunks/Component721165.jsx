/** Chunk was on 86513 **/
/** chunk id: 721165, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk131388 = require("./131388.js"),
  Chunk171246 = require("./171246.js"),
  Chunk689011 = require("./689011.jsx"),
  Chunk931905 = require("./931905.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk586585 = require("./586585.jsx"),
  Chunk614277 = require("./614277.jsx"),
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
  } = (0, d.JL)(), y = (0, a.Z)(b.i), O = (0, l.e7)([u.Z], () => u.Z.getGuild(null == g ? true : g.guild_id)), C = i.useCallback(() => t(m.h8.REVIEW), [t]);
  if (null == x) return null;
  let S = (0, o.KW)(x.flags);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.C3, {
      children: y ? (0, r.jsx)(c.h, {
        confirmCta: h.intl.string(h.t.PBHFSk),
        onConfirm: C,
        onCancel: n,
        title: h.intl.format(h.t["6n6oXF"], {
          tier: x.name
        }),
        subtitle: S ? h.intl.string(h.t.lzAoKC) : h.intl.formatToPlainString(h.t["GqaY/v"], {
          guildName: null == O ? true : O.name
        }),
        showOpenDiscord: false
      }) : (0, r.jsx)(s.Oc, {
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
    }), !y && (0, r.jsx)(f.O3, {
      children: (0, r.jsx)(p.Z, {
        onBack: n,
        backText: h.intl.string(h.t.TQBY1N),
        onPrimary: C,
        primaryCTA: p.g.CONTINUE,
        primaryText: h.intl.string(h.t["gZhF+/"])
      })
    })]
  })
}