/** Chunk was on 50243 **/
/** chunk id: 924076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk241524 = require("./241524.js"),
  Chunk163437 = require("./163437.js"),
  Chunk490744 = require("./490744.jsx"),
  Chunk594508 = require("./594508.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk19311 = require("./19311.jsx"),
  Chunk482132 = require("./482132.jsx"),
  Chunk376747 = require("./376747.js"),
  Chunk985018 = require("./985018.jsx");

function x(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    subscriptionMetadataRequest: x,
    selectedSku: j,
    selectedStoreListing: h,
    application: v
  } = (0, d.P5)(), y = (0, a.A)(b.Y), P = (0, l.bG)([u.A], () => u.A.getGuild(null == x ? true : x.guild_id)), S = i.useCallback(() => t(p.pn.REVIEW), [t]);
  if (null == j) return null;
  let O = (0, s.bg)(j.flags);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.dZ, {
      children: y ? (0, r.jsx)(c.E, {
        confirmCta: g.intl.string(g.t.PBHFSq),
        onConfirm: S,
        onCancel: n,
        title: g.intl.format(g.t["6n6oXA"], {
          tier: j.name
        }),
        subtitle: O ? g.intl.string(g.t.lzAoKB) : g.intl.formatToPlainString(g.t["GqaY/j"], {
          guildName: null == P ? true : P.name
        }),
        showOpenDiscord: false
      }) : (0, r.jsx)(o.Uf, {
        icon: null == h ? true : h.thumbnail,
        storeListingBenefits: null == h ? true : h.benefits,
        application: null != v ? v : true,
        title: g.intl.format(g.t.haiCxc, {
          tier: j.name
        }),
        subtitle: O ? g.intl.string(g.t.RvtbP5) : g.intl.string(g.t.zY39Zu),
        description: O ? g.intl.formatToPlainString(g.t.QCe4rY, {
          applicationName: null == v ? true : v.name
        }) : g.intl.string(g.t.n1Pu8C)
      })
    }), !y && (0, r.jsx)(f.UX, {
      children: (0, r.jsx)(m.A, {
        onBack: n,
        backText: g.intl.string(g.t.TQBY1J),
        onPrimary: S,
        primaryCTA: m.t.CONTINUE,
        primaryText: g.intl.string(g.t["gZhF+3"])
      })
    })]
  })
}