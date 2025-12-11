/** Chunk was on 82477 **/
/** chunk id: 906817, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EM: () => b,
  WW: () => m,
  ZP: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk362658 = require("./362658.js"),
  Chunk216306 = require("./216306.js"),
  Chunk155409 = require("./155409.jsx"),
  Chunk350707 = require("./350707.jsx"),
  Chunk540126 = require("./540126.js"),
  Chunk301342 = require("./301342.jsx"),
  Chunk327530 = require("./327530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk135445 = require("./135445.js");

function b(e, t, n, r) {
  let i = "compact" === r ? 8 : f.$k;
  if (e === u.wZ) return i;
  if (e === u.wd) return t.features.has(h.GuildFeatures.HUB) ? 0 : i;
  if (e === n.voiceChannelsSectionNumber) {
    var l;
    let t = n.getCategoryFromSection(e);
    if (null == t || t.isEmpty()) return 0;
    if (t.isCollapsed) return f.Pw + 9;
    let r = null == (l = n.getChannelFromSectionRow(e, 0)) ? true : l.channel;
    return null == r || r.record.type === h.d4z.GUILD_CATEGORY ? 9 : 25
  }
  return "compact" === r ? 32 : f.Pw
}

function m(e, t) {
  switch (e) {
    case u.wZ:
      return "hoisted-spacer";
    case u.wd:
      return "uncategorized-spacer";
    case u.p2:
      return "favorites";
    case t.recentsSectionNumber:
      return "recents-header";
    case t.voiceChannelsSectionNumber:
      return "voice-channels-header";
    default: {
      let n = t.getNamedCategoryFromSection(e);
      if (null != n) return "category-".concat(n.id);
      return "section-".concat(e)
    }
  }
}
let y = Chunk473749.memo(function(e) {
  let {
    sectionIndex: t,
    guild: n,
    guildChannels: b,
    guildChannelsVersion: m,
    selectedChannelId: y,
    disableManageChannels: O
  } = e, {
    isFavoritesPerk: v
  } = (0, a.z)("ChannelListSection"), j = i.useCallback(() => {
    let e = b.getCategoryFromSection(b.recentsSectionNumber);
    if (null == e) return;
    let t = null,
      r = e.getShownChannelAndThreadIds();
    null != y && r.includes(y) && (t = (0, o.KY)(b)), (0, o.Uo)(n.id, r, t)
  }, [n.id, y, b, m]), {
    density: C
  } = (0, l.TCT)(), x = "compact" === C ? 8 : f.$k;
  switch (t) {
    case u.wZ:
      return (0, r.jsx)("div", {
        style: {
          height: x
        }
      });
    case u.wd:
      if (n.features.has(h.GuildFeatures.HUB)) return null;
      return (0, r.jsx)("div", {
        style: {
          height: x
        }
      });
    case u.p2:
      return (0, r.jsx)(d.P, {
        name: v ? p.intl.string(p.t.mlPMCy) : p.intl.string(p.t.k8fFjp)
      });
    case b.recentsSectionNumber:
      return (0, r.jsx)(d.P, {
        name: p.intl.string(p.t.gKcrqM),
        onDismiss: j
      });
    case b.voiceChannelsSectionNumber: {
      var E;
      let e = b.getCategoryFromSection(b.voiceChannelsSectionNumber);
      if (null == e || e.isEmpty()) return null;
      let n = null == (E = b.getChannelFromSectionRow(t, 0)) ? true : E.channel;
      return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)("div", {
          className: g.sectionDivider
        }), (0, r.jsx)(d.rj, {
          category: e,
          channel: n
        })]
      })
    }
    case u.wF: {
      let e = b.getNamedCategoryFromSection(t);
      if (null == e) return null;
      return (0, r.jsx)(d.ZP, {
        channel: e.record,
        position: e.position,
        disableManageChannels: O,
        children: (0, r.jsx)(s.Z, {
          inlineSpecs: f.MF,
          arrowAlignment: c.cy.TOP,
          tutorialId: "organize-by-topic",
          position: "right"
        })
      })
    }
    default: {
      let e = b.getNamedCategoryFromSection(t);
      if (null == e) return null;
      return (0, r.jsx)(d.ZP, {
        channel: e.record,
        position: e.position,
        disableManageChannels: O
      })
    }
  }
})