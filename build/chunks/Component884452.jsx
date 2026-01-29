/** Chunk was on 1113 **/
/** chunk id: 884452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => A,
  is: () => b,
  sc: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk616075 = require("./616075.js"),
  Chunk637248 = require("./637248.js"),
  Chunk728321 = require("./728321.jsx"),
  Chunk244083 = require("./244083.jsx"),
  Chunk32603 = require("./32603.js"),
  Chunk823142 = require("./823142.jsx"),
  Chunk83766 = require("./83766.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk495401 = require("./495401.js");

function m(e, t, n, r) {
  let l = "compact" === r ? 8 : 12;
  if (e === u.PU) return l;
  if (e === u.bK) return t.features.has(p.GuildFeatures.HUB) ? 0 : l;
  if (e === n.voiceChannelsSectionNumber) {
    var i;
    let t = n.getCategoryFromSection(e);
    if (null == t || t.isEmpty()) return 0;
    if (t.isCollapsed) return 49;
    let r = null == (i = n.getChannelFromSectionRow(e, 0)) ? true : i.channel;
    return null == r || r.record.type === p.rbe.GUILD_CATEGORY ? 9 : 25
  }
  return "compact" === r ? 32 : 40
}

function b(e, t) {
  switch (e) {
    case u.PU:
      return "hoisted-spacer";
    case u.bK:
      return "uncategorized-spacer";
    case u.HP:
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
let A = Chunk64700.memo(function(e) {
  let {
    sectionIndex: t,
    guild: n,
    guildChannels: m,
    guildChannelsVersion: b,
    selectedChannelId: A,
    disableManageChannels: y
  } = e, {
    isFavoritesPerk: O
  } = (0, s.l)("ChannelListSection"), _ = l.useCallback(() => {
    let e = m.getCategoryFromSection(m.recentsSectionNumber);
    if (null == e) return;
    let t = null,
      r = e.getShownChannelAndThreadIds();
    null != A && r.includes(A) && (t = (0, a.xb)(m)), (0, a.DD)(n.id, r, t)
  }, [n.id, A, m, b]), {
    density: x
  } = (0, i.wRf)(), j = "compact" === x ? 8 : 12;
  switch (t) {
    case u.PU:
      return (0, r.jsx)("div", {
        style: {
          height: j
        }
      });
    case u.bK:
      if (n.features.has(p.GuildFeatures.HUB)) return null;
      return (0, r.jsx)("div", {
        style: {
          height: j
        }
      });
    case u.HP:
      return (0, r.jsx)(d.P4, {
        name: O ? g.intl.string(g.t.mlPMCy) : g.intl.string(g.t.k8fFjp)
      });
    case m.recentsSectionNumber:
      return (0, r.jsx)(d.P4, {
        name: g.intl.string(g.t.gKcrqM),
        onDismiss: _
      });
    case m.voiceChannelsSectionNumber: {
      var v;
      let e = m.getCategoryFromSection(m.voiceChannelsSectionNumber);
      if (null == e || e.isEmpty()) return null;
      let n = null == (v = m.getChannelFromSectionRow(t, 0)) ? true : v.channel;
      return (0, r.jsxs)(l.Fragment, {
        children: [(0, r.jsx)("div", {
          className: f.ts
        }), (0, r.jsx)(d.kD, {
          category: e,
          channel: n
        })]
      })
    }
    case u.TF: {
      let e = m.getNamedCategoryFromSection(t);
      if (null == e) return null;
      return (0, r.jsx)(d.Ay, {
        channel: e.record,
        position: e.position,
        disableManageChannels: y,
        children: (0, r.jsx)(o.A, {
          inlineSpecs: h.qB,
          arrowAlignment: c.oN.TOP,
          tutorialId: "organize-by-topic",
          position: "right"
        })
      })
    }
    default: {
      let e = m.getNamedCategoryFromSection(t);
      if (null == e) return null;
      return (0, r.jsx)(d.Ay, {
        channel: e.record,
        position: e.position,
        disableManageChannels: y
      })
    }
  }
})