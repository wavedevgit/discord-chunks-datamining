/** Chunk was on 46746 **/
/** chunk id: 560749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./35282.js"), require("./539854.js"), require("./388685.js"), require("./387201.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk212819 = require("./212819.js"),
  Chunk938078 = require("./938078.js"),
  Chunk318374 = require("./318374.jsx"),
  Chunk823385 = require("./823385.js"),
  Chunk601565 = require("./601565.js"),
  Chunk131704 = require("./131704.js"),
  Chunk601964 = require("./601964.js"),
  Chunk592125 = require("./592125.js"),
  Chunk580005 = require("./580005.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk938475 = require("./938475.js"),
  Chunk823379 = require("./823379.js"),
  Chunk102172 = require("./102172.js"),
  Chunk981631 = require("./981631.js"),
  Chunk137349 = require("./137349.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk761268 = require("./761268.js");

function P(e) {
  let {
    result: t,
    onSelectChannel: n
  } = e, i = (0, o.e7)([v.Z], () => v.Z.getGuild(t.record.guild_id)), l = (0, o.Wu)([S.ZP, y.default], () => S.ZP.getVoiceStatesForChannel(t.record).map(e => y.default.getUser(e.user.id)).filter(C.lm));
  return (0, r.jsxs)(a.P3F, {
    className: N.channelResult,
    onClick: () => n(t.record.id),
    children: [(0, r.jsxs)("div", {
      className: N.channelResultInfo,
      children: [(0, r.jsx)("img", {
        alt: "",
        src: null != i ? (0, p.EB)(i, 32) : true,
        className: N.guildIcon
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)(a.Text, {
          className: N.channelName,
          variant: "text-md/medium",
          color: "interactive-normal",
          children: [(0, r.jsx)(a.gj8, {
            size: "xs",
            color: "currentColor"
          }), " ", t.record.name]
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: null == i ? true : i.name
        })]
      })]
    }), (0, r.jsx)(u.Z, {
      users: l,
      maxUsers: 3,
      hideOverflowCount: true
    })]
  })
}

function T(e) {
  let {
    onSelectChannel: t,
    className: n
  } = e, {
    search: l,
    query: u,
    results: p
  } = (0, m.Z)({
    searchOptions: {
      frecencyBoosters: true
    }
  }), y = (0, o.Wu)([b.Z, _.ZP, x.Z, v.Z, j.Z], () => {
    let e = [],
      t = b.Z.getGuildId();
    if (null == t) return e;
    for (let n of _.ZP.getVocalChannelIds(t)) {
      let t = x.Z.getChannel(n);
      null != t && (0, O.JL)(t, v.Z, j.Z) && e.push(t)
    }
    return e
  }), S = (0, o.Wu)([f.Z, x.Z, g.Z, v.Z, j.Z], () => {
    let e = [],
      t = new Set;
    for (let n of f.Z.getChannelHistory()) {
      let r = x.Z.getChannel(n);
      (null == r ? true : r.type) === w.d4z.GUILD_VOICE && (0, O.JL)(r, v.Z, j.Z) && (t.add(r.id), e.push(r))
    }
    for (let n of g.Z.getFrequentlyWithoutFetchingLatest()) n instanceof h.Sf && n.type === w.d4z.GUILD_VOICE && !t.has(n.id) && (0, O.JL)(n, v.Z, j.Z) && (t.add(n.id), e.push(n));
    return e
  }), T = i.useMemo(() => {
    let e = new Set(S.map(e => e.id)),
      t = new Set(y.map(e => e.id));
    return [...y.toSorted((t, n) => e.has(t.id) && !e.has(n.id) ? false : e.has(n.id) && !e.has(t.id) ? 1 : 0).map(e => (0, d.Z)(e.id)).filter(C.lm), ...S.filter(e => !t.has(e.id)).map(e => (0, d.Z)(e.id)).filter(C.lm)]
  }, [S, y]), R = "" !== u ? p : T;
  return (0, r.jsxs)("div", {
    className: s()(N.root, n),
    children: [(0, r.jsx)("div", {
      className: N.searchBar,
      children: (0, r.jsx)(a.E1j, {
        placeholder: I.intl.string(I.t["3jvv+/"]),
        query: u,
        onChange: e => l({
          query: e,
          resultTypes: [c.h8.VOICE_CHANNEL]
        }),
        onClear: () => l({
          query: "",
          resultTypes: [c.h8.VOICE_CHANNEL]
        }),
        autoFocus: true
      })
    }), R.length > 0 ? (0, r.jsx)(a.aVo, {
      renderListHeader: function() {
        return (0, r.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: I.intl.string(Z.default.FZ9Fl5)
        })
      },
      sections: [R.length],
      sectionHeight: 0,
      rowHeight: 48,
      renderRow: function(e) {
        let {
          rowIndex: n
        } = e, i = R[n];
        return (0, r.jsx)(P, {
          result: i,
          onSelectChannel: t
        }, i.record.id)
      }
    }) : (0, r.jsx)(E, {})]
  })
}

function E() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk761268.emptyState,
    children: [(0, Chunk951288.jsx)(Chunk481060._Ve, {
      className: Chunk761268.emptyIcon,
      size: "md",
      color: Chunk481060.TVs.colors.ICON_MUTED
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk761268.emptyHeader,
      variant: "text-lg/medium",
      color: "header-primary",
      children: Chunk388032.intl.string(Chunk137349.default.sWGfr6)
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      children: Chunk388032.intl.string(Chunk137349.default.nBRtt7)
    })]
  })
}