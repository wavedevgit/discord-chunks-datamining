/** Chunk was on 97492 **/
/** chunk id: 884452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => A,
  is: () => m,
  sc: () => g
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

function g(e, t, n, r) {
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

function m(e, t) {
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
    guildChannels: g,
    guildChannelsVersion: m,
    selectedChannelId: A,
    disableManageChannels: y
  } = e, {
    isFavoritesPerk: O
  } = (0, a.l)("ChannelListSection"), j = l.useCallback(() => {
    let e = g.getCategoryFromSection(g.recentsSectionNumber);
    if (null == e) return;
    let t = null,
      r = e.getShownChannelAndThreadIds();
    null != A && r.includes(A) && (t = (0, s.xb)(g)), (0, s.DD)(n.id, r, t)
  }, [n.id, A, g, m]), {
    density: v
  } = (0, i.wRf)(), x = "compact" === v ? 8 : 12;
  switch (t) {
    case u.PU:
      return (0, r.jsx)("div", {
        style: {
          height: x
        }
      });
    case u.bK:
      if (n.features.has(p.GuildFeatures.HUB)) return null;
      return (0, r.jsx)("div", {
        style: {
          height: x
        }
      });
    case u.HP:
      return (0, r.jsx)(d.P4, {
        name: O ? h.intl.string(h.t.mlPMCy) : h.intl.string(h.t.k8fFjp)
      });
    case g.recentsSectionNumber:
      return (0, r.jsx)(d.P4, {
        name: h.intl.string(h.t.gKcrqM),
        onDismiss: j
      });
    case g.voiceChannelsSectionNumber: {
      var E;
      let e = g.getCategoryFromSection(g.voiceChannelsSectionNumber);
      if (null == e || e.isEmpty()) return null;
      let n = null == (E = g.getChannelFromSectionRow(t, 0)) ? true : E.channel;
      return (0, r.jsxs)(l.Fragment, {
        children: [(0, r.jsx)("div", {
          className: b.ts
        }), (0, r.jsx)(d.kD, {
          category: e,
          channel: n
        })]
      })
    }
    case u.TF: {
      let e = g.getNamedCategoryFromSection(t);
      if (null == e) return null;
      return (0, r.jsx)(d.Ay, {
        channel: e.record,
        position: e.position,
        disableManageChannels: y,
        children: (0, r.jsx)(o.A, {
          inlineSpecs: f.qB,
          arrowAlignment: c.oN.TOP,
          tutorialId: "organize-by-topic",
          position: "right"
        })
      })
    }
    default: {
      let e = g.getNamedCategoryFromSection(t);
      if (null == e) return null;
      return (0, r.jsx)(d.Ay, {
        channel: e.record,
        position: e.position,
        disableManageChannels: y
      })
    }
  }
})