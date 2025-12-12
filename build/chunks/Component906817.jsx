/** Chunk was on 64722 **/
/** chunk id: 906817, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EM: () => m,
  WW: () => b,
  ZP: () => _
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
  Chunk776677 = require("./776677.js");

function m(e, t, n, r) {
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
let _ = Chunk473749.memo(function(e) {
  let {
    sectionIndex: t,
    guild: n,
    guildChannels: m,
    guildChannelsVersion: b,
    selectedChannelId: _,
    disableManageChannels: y
  } = e, {
    isFavoritesPerk: O
  } = (0, o.z)("ChannelListSection"), v = i.useCallback(() => {
    let e = m.getCategoryFromSection(m.recentsSectionNumber);
    if (null == e) return;
    let t = null,
      r = e.getShownChannelAndThreadIds();
    null != _ && r.includes(_) && (t = (0, a.KY)(m)), (0, a.Uo)(n.id, r, t)
  }, [n.id, _, m, b]), {
    density: j
  } = (0, l.TCT)(), C = "compact" === j ? 8 : f.$k;
  switch (t) {
    case u.wZ:
      return (0, r.jsx)("div", {
        style: {
          height: C
        }
      });
    case u.wd:
      if (n.features.has(h.GuildFeatures.HUB)) return null;
      return (0, r.jsx)("div", {
        style: {
          height: C
        }
      });
    case u.p2:
      return (0, r.jsx)(d.P, {
        name: O ? p.intl.string(p.t.mlPMCy) : p.intl.string(p.t.k8fFjp)
      });
    case m.recentsSectionNumber:
      return (0, r.jsx)(d.P, {
        name: p.intl.string(p.t.gKcrqM),
        onDismiss: v
      });
    case m.voiceChannelsSectionNumber: {
      var x;
      let e = m.getCategoryFromSection(m.voiceChannelsSectionNumber);
      if (null == e || e.isEmpty()) return null;
      let n = null == (x = m.getChannelFromSectionRow(t, 0)) ? true : x.channel;
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
        disableManageChannels: y,
        children: (0, r.jsx)(s.Z, {
          inlineSpecs: f.MF,
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
        disableManageChannels: y
      })
    }
  }
})