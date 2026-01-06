/** Chunk was on 46746 **/
/** chunk id: 183326, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./35282.js"), require("./539854.js"), require("./388685.js"), require("./387201.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk715689 = require("./715689.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk151141 = require("./151141.js");

function P(e) {
  let {
    result: t,
    onSelectChannel: r
  } = e, i = (0, o.e7)([j.Z], () => j.Z.getGuild(t.record.guild_id)), s = (0, o.Wu)([w.ZP, y.default], () => w.ZP.getVoiceStatesForChannel(t.record).map(e => y.default.getUser(e.user.id)).filter(O.lm));
  return (0, n.jsxs)(a.P3F, {
    className: E.channelResult,
    onClick: () => r(t.record.id),
    children: [(0, n.jsxs)("div", {
      className: E.channelResultInfo,
      children: [(0, n.jsx)("img", {
        alt: "",
        src: null != i ? (0, x.EB)(i, 32) : true,
        className: E.guildIcon
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsxs)(a.Text, {
          className: E.channelName,
          variant: "text-md/medium",
          color: "interactive-text-default",
          children: [(0, n.jsx)(a.gj8, {
            size: "xs",
            color: "currentColor"
          }), " ", t.record.name]
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: null == i ? true : i.name
        })]
      })]
    }), (0, n.jsx)(c.Z, {
      users: s,
      maxUsers: 3,
      hideOverflowCount: true
    })]
  })
}

function N(e) {
  let {
    onSelectChannel: t,
    className: r
  } = e, {
    search: s,
    query: c,
    results: x
  } = (0, h.Z)({
    searchOptions: {
      frecencyBoosters: true
    }
  }), y = (0, o.Wu)([b.Z, v.ZP, m.Z, j.Z, _.Z], () => {
    let e = [],
      t = b.Z.getGuildId();
    if (null == t) return e;
    for (let r of v.ZP.getVocalChannelIds(t)) {
      let t = m.Z.getChannel(r);
      null != t && (0, C.JL)(t, j.Z, _.Z) && e.push(t)
    }
    return e
  }), w = (0, o.Wu)([f.Z, m.Z, g.Z, j.Z, _.Z], () => {
    let e = [],
      t = new Set;
    for (let r of f.Z.getChannelHistory()) {
      let n = m.Z.getChannel(r);
      (null == n ? true : n.type) === S.d4z.GUILD_VOICE && (0, C.JL)(n, j.Z, _.Z) && (t.add(n.id), e.push(n))
    }
    for (let r of g.Z.getFrequentlyWithoutFetchingLatest()) r instanceof p.Sf && r.type === S.d4z.GUILD_VOICE && !t.has(r.id) && (0, C.JL)(r, j.Z, _.Z) && (t.add(r.id), e.push(r));
    return e
  }), N = i.useMemo(() => {
    let e = new Set(w.map(e => e.id)),
      t = new Set(y.map(e => e.id));
    return [...y.toSorted((t, r) => e.has(t.id) && !e.has(r.id) ? false : e.has(r.id) && !e.has(t.id) ? 1 : 0).map(e => (0, u.Z)(e.id)).filter(O.lm), ...w.filter(e => !t.has(e.id)).map(e => (0, u.Z)(e.id)).filter(O.lm)]
  }, [w, y]), R = "" !== c ? x : N;
  return (0, n.jsxs)("div", {
    className: l()(E.root, r),
    children: [(0, n.jsx)("div", {
      className: E.searchBar,
      children: (0, n.jsx)(a.E1j, {
        placeholder: Z.intl.string(Z.t["3jvv+6"]),
        query: c,
        onChange: e => s({
          query: e,
          resultTypes: [d.h8.VOICE_CHANNEL]
        }),
        onClear: () => s({
          query: "",
          resultTypes: [d.h8.VOICE_CHANNEL]
        }),
        autoFocus: true
      })
    }), R.length > 0 ? (0, n.jsx)(a.aVo, {
      renderListHeader: function() {
        return (0, n.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: Z.intl.string(I.default.FZ9Fl7)
        })
      },
      sections: [R.length],
      sectionHeight: 0,
      rowHeight: 48,
      renderRow: function(e) {
        let {
          rowIndex: r
        } = e, i = R[r];
        return (0, n.jsx)(P, {
          result: i,
          onSelectChannel: t
        }, i.record.id)
      }
    }) : (0, n.jsx)(T, {})]
  })
}

function T() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk151141.emptyState,
    children: [(0, Chunk54381.jsx)(Chunk481060._Ve, {
      className: Chunk151141.emptyIcon,
      size: "md",
      color: Chunk481060.TVs.colors.ICON_MUTED
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      className: Chunk151141.emptyHeader,
      variant: "text-lg/medium",
      color: "text-strong",
      children: Chunk388032.intl.string(Chunk715689.default.sWGfr9)
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: Chunk388032.intl.string(Chunk715689.default["nBRtt/"])
    })]
  })
}