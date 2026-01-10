/** Chunk was on 81985 **/
/** chunk id: 906817, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EM: () => m,
  WW: () => b,
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

function m(e, t, n, r) {
  let i = "compact" === r ? 8 : p.$k;
  if (e === u.wZ) return i;
  if (e === u.wd) return t.features.has(f.GuildFeatures.HUB) ? 0 : i;
  if (e === n.voiceChannelsSectionNumber) {
    var l;
    let t = n.getCategoryFromSection(e);
    if (null == t || t.isEmpty()) return 0;
    if (t.isCollapsed) return p.Pw + 9;
    let r = null == (l = n.getChannelFromSectionRow(e, 0)) ? true : l.channel;
    return null == r || r.record.type === f.d4z.GUILD_CATEGORY ? 9 : 25
  }
  return "compact" === r ? 32 : p.Pw
}

function b(e, t) {
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
    guildChannels: m,
    guildChannelsVersion: b,
    selectedChannelId: y,
    disableManageChannels: v
  } = e, {
    isFavoritesPerk: O
  } = (0, a.z)("ChannelListSection"), j = i.useCallback(() => {
    let e = m.getCategoryFromSection(m.recentsSectionNumber);
    if (null == e) return;
    let t = null,
      r = e.getShownChannelAndThreadIds();
    null != y && r.includes(y) && (t = (0, o.KY)(m)), (0, o.Uo)(n.id, r, t)
  }, [n.id, y, m, b]), {
    density: x
  } = (0, l.TCT)(), C = "compact" === x ? 8 : p.$k;
  switch (t) {
    case u.wZ:
      return (0, r.jsx)("div", {
        style: {
          height: C
        }
      });
    case u.wd:
      if (n.features.has(f.GuildFeatures.HUB)) return null;
      return (0, r.jsx)("div", {
        style: {
          height: C
        }
      });
    case u.p2:
      return (0, r.jsx)(d.P, {
        name: O ? h.intl.string(h.t.mlPMCy) : h.intl.string(h.t.k8fFjp)
      });
    case m.recentsSectionNumber:
      return (0, r.jsx)(d.P, {
        name: h.intl.string(h.t.gKcrqM),
        onDismiss: j
      });
    case m.voiceChannelsSectionNumber: {
      var E;
      let e = m.getCategoryFromSection(m.voiceChannelsSectionNumber);
      if (null == e || e.isEmpty()) return null;
      let n = null == (E = m.getChannelFromSectionRow(t, 0)) ? true : E.channel;
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
      let e = m.getNamedCategoryFromSection(t);
      if (null == e) return null;
      return (0, r.jsx)(d.ZP, {
        channel: e.record,
        position: e.position,
        disableManageChannels: v,
        children: (0, r.jsx)(s.Z, {
          inlineSpecs: p.MF,
          arrowAlignment: c.cy.TOP,
          tutorialId: "organize-by-topic",
          position: "right"
        })
      })
    }
    default: {
      let e = m.getNamedCategoryFromSection(t);
      if (null == e) return null;
      return (0, r.jsx)(d.ZP, {
        channel: e.record,
        position: e.position,
        disableManageChannels: v
      })
    }
  }
})