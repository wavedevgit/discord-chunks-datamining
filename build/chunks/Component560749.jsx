/** Chunk was on 33840 **/
/** chunk id: 560749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./35282.js"), require("./539854.js"), require("./388685.js"), require("./387201.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk36563 = require("./36563.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk212819 = require("./212819.js"),
  Chunk938078 = require("./938078.js"),
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
  Chunk266734 = require("./266734.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk761268 = require("./761268.js");

function E(e) {
  let {
    result: t,
    onSelectChannel: n
  } = e, i = (0, o.e7)([v.Z], () => v.Z.getGuild(t.record.guild_id)), l = (0, o.Wu)([y.ZP, b.default], () => y.ZP.getVoiceStatesForChannel(t.record).map(e => b.default.getUser(e.user.id)).filter(C.lm));
  return (0, r.jsxs)(c.P3F, {
    className: I.channelResult,
    onClick: () => n(t.record.id),
    children: [(0, r.jsxs)("div", {
      className: I.channelResultInfo,
      children: [(0, r.jsx)("img", {
        alt: "",
        src: null != i ? (0, m.EB)(i, 32) : true,
        className: I.guildIcon
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)(c.Text, {
          className: I.channelName,
          variant: "text-md/medium",
          color: "interactive-normal",
          children: [(0, r.jsx)(c.gj8, {
            size: "xs",
            color: "currentColor"
          }), " ", t.record.name]
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: null == i ? true : i.name
        })]
      })]
    }), (0, r.jsx)(a.Z, {
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
    query: a,
    results: m
  } = (0, p.Z)({
    searchOptions: {
      frecencyBoosters: true
    }
  }), b = (0, o.Wu)([S.Z, x.ZP, _.Z, v.Z, j.Z], () => {
    let e = [],
      t = S.Z.getGuildId();
    if (null == t) return e;
    for (let n of x.ZP.getVocalChannelIds(t)) {
      let t = _.Z.getChannel(n);
      null != t && (0, O.JL)(t, v.Z, j.Z) && e.push(t)
    }
    return e
  }), y = (0, o.Wu)([f.Z, _.Z, g.Z, v.Z, j.Z], () => {
    let e = [],
      t = new Set;
    for (let n of f.Z.getChannelHistory()) {
      let r = _.Z.getChannel(n);
      (null == r ? true : r.type) === w.d4z.GUILD_VOICE && (0, O.JL)(r, v.Z, j.Z) && (t.add(r.id), e.push(r))
    }
    for (let n of g.Z.getFrequentlyWithoutFetchingLatest()) n instanceof h.Sf && n.type === w.d4z.GUILD_VOICE && !t.has(n.id) && (0, O.JL)(n, v.Z, j.Z) && (t.add(n.id), e.push(n));
    return e
  }), T = i.useMemo(() => {
    let e = new Set(y.map(e => e.id)),
      t = new Set(b.map(e => e.id));
    return [...b.toSorted((t, n) => e.has(t.id) && !e.has(n.id) ? false : e.has(n.id) && !e.has(t.id) ? 1 : 0).map(e => (0, u.Z)(e.id)).filter(C.lm), ...y.filter(e => !t.has(e.id)).map(e => (0, u.Z)(e.id)).filter(C.lm)]
  }, [y, b]), A = "" !== a ? m : T;
  return (0, r.jsxs)("div", {
    className: s()(I.root, n),
    children: [(0, r.jsx)("div", {
      className: I.searchBar,
      children: (0, r.jsx)(c.E1j, {
        placeholder: Z.intl.string(Z.t["3jvv+6"]),
        query: a,
        onChange: e => l({
          query: e,
          resultTypes: [d.h8.VOICE_CHANNEL]
        }),
        onClear: () => l({
          query: "",
          resultTypes: [d.h8.VOICE_CHANNEL]
        }),
        autoFocus: true
      })
    }), A.length > 0 ? (0, r.jsx)(c.aVo, {
      renderListHeader: function() {
        return (0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: Z.intl.string(P.default.FZ9Fl7)
        })
      },
      sections: [A.length],
      sectionHeight: 0,
      rowHeight: 48,
      renderRow: function(e) {
        let {
          rowIndex: n
        } = e, i = A[n];
        return (0, r.jsx)(E, {
          result: i,
          onSelectChannel: t
        }, i.record.id)
      }
    }) : (0, r.jsx)(N, {})]
  })
}

function N() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk761268.emptyState,
    children: [(0, Chunk54381.jsx)(Chunk481060._Ve, {
      className: Chunk761268.emptyIcon,
      size: "md",
      color: Chunk481060.TVs.colors.ICON_MUTED
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      className: Chunk761268.emptyHeader,
      variant: "text-lg/medium",
      color: "header-primary",
      children: Chunk388032.intl.string(Chunk266734.default.sWGfr9)
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      children: Chunk388032.intl.string(Chunk266734.default["nBRtt/"])
    })]
  })
}