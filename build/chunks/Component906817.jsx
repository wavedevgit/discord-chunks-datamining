/** Chunk was on 34779 **/
/** chunk id: 906817, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EM: () => m,
  WW: () => b,
  ZP: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk997638 = require("./997638.jsx"),
  Chunk362658 = require("./362658.js"),
  Chunk216306 = require("./216306.js"),
  Chunk155409 = require("./155409.jsx"),
  Chunk540126 = require("./540126.js"),
  Chunk301342 = require("./301342.jsx"),
  Chunk327530 = require("./327530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk789123 = require("./789123.js");

function m(e, t, n, r) {
  let i = "compact" === r ? 8 : h.$k;
  if (e === u.wZ) return i;
  if (e === u.wd) return t.features.has(p.oNc.HUB) ? 0 : i;
  if (e === n.voiceChannelsSectionNumber) {
    var l;
    let t = n.getCategoryFromSection(e);
    if (null == t || t.isEmpty()) return 0;
    if (t.isCollapsed) return h.Pw + 9;
    let r = null == (l = n.getChannelFromSectionRow(e, 0)) ? true : l.channel;
    return null == r || r.record.type === p.d4z.GUILD_CATEGORY ? 9 : 25
  }
  return "compact" === r ? 32 : h.Pw
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
let O = Chunk73800.memo(function(e) {
  let {
    sectionIndex: t,
    guild: n,
    guildChannels: m,
    guildChannelsVersion: b,
    selectedChannelId: O,
    disableManageChannels: _
  } = e, {
    isFavoritesPerk: y
  } = (0, s.z)("ChannelListSection"), C = i.useCallback(() => {
    let e = m.getCategoryFromSection(m.recentsSectionNumber);
    if (null == e) return;
    let t = null,
      r = e.getShownChannelAndThreadIds();
    null != O && r.includes(O) && (t = (0, a.KY)(m)), (0, a.Uo)(n.id, r, t)
  }, [n.id, O, m, b]), {
    density: v
  } = (0, l.TCT)(), j = "compact" === v ? 8 : h.$k;
  switch (t) {
    case u.wZ:
      return (0, r.jsx)("div", {
        style: {
          height: j
        }
      });
    case u.wd:
      if (n.features.has(p.oNc.HUB)) return null;
      return (0, r.jsx)("div", {
        style: {
          height: j
        }
      });
    case u.p2:
      return (0, r.jsx)(d.P, {
        name: y ? f.intl.string(f.t.mlPMCw) : f.intl.string(f.t.k8fFjo)
      });
    case m.recentsSectionNumber:
      return (0, r.jsx)(d.P, {
        name: f.intl.string(f.t.gKcrqK),
        onDismiss: C
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
        disableManageChannels: _,
        children: (0, r.jsx)(c.Z, {
          inlineSpecs: h.MF,
          arrowAlignment: o.cy.TOP,
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
        disableManageChannels: _
      })
    }
  }
})