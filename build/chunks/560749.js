/** Chunk was on 79477 **/
n.d(t, {
  Z: () => T
}), n(47120), n(301563), n(653041), n(308318), n(230036);
var r = n(200651),
  l = n(192379),
  s = n(442837),
  i = n(481060),
  a = n(835473),
  o = n(212819),
  c = n(938078),
  u = n(318374),
  d = n(925329),
  m = n(823385),
  p = n(601565),
  h = n(131704),
  g = n(592125),
  x = n(580005),
  v = n(984933),
  f = n(430824),
  j = n(496675),
  S = n(914010),
  N = n(594174),
  Z = n(938475),
  O = n(823379),
  b = n(102172),
  y = n(615161),
  P = n(981631),
  C = n(388032),
  E = n(358476);

function I(e) {
  let {
    result: t,
    onSelectChannel: n
  } = e, l = (0, s.e7)([f.Z], () => f.Z.getGuild(t.record.guild_id)), a = (0, s.Wu)([Z.ZP, N.default], () => Z.ZP.getVoiceStatesForChannel(t.record).map(e => N.default.getUser(e.user.id)).filter(O.lm));
  return (0, r.jsxs)(i.P3F, {
    className: E.channelResult,
    onClick: () => n(t.record.id),
    children: [(0, r.jsxs)("div", {
      className: E.channelResultInfo,
      children: [(0, r.jsx)("img", {
        alt: "",
        src: null == l ? void 0 : l.getIconURL(32),
        className: E.guildIcon
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)(i.Text, {
          className: E.channelName,
          variant: "text-md/medium",
          color: "interactive-normal",
          children: [(0, r.jsx)(i.gj8, {
            size: "xs",
            color: "currentColor"
          }), " ", t.record.name]
        }), (0, r.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: null == l ? void 0 : l.name
        })]
      })]
    }), (0, r.jsx)(u.Z, {
      users: a,
      maxUsers: 4
    })]
  })
}

function T(e) {
  var t, n;
  let {
    onSelectChannel: u
  } = e, [N, Z] = (0, y.E_)(), T = (0, a.q)(null === (t = N.sourceApplication) || void 0 === t ? void 0 : t.id), {
    search: w,
    query: _,
    results: R
  } = (0, p.Z)({
    searchOptions: {
      frecencyBoosters: !0
    }
  }), W = (0, s.Wu)([S.Z, v.ZP, g.Z, f.Z, j.Z], () => {
    let e = [],
      t = S.Z.getGuildId();
    if (null == t) return e;
    for (let n of v.ZP.getVocalChannelIds(t)) {
      let t = g.Z.getChannel(n);
      null != t && (0, b.JL)(t, f.Z, j.Z) && e.push(t)
    }
    return e
  }), A = (0, s.Wu)([m.Z, g.Z, x.Z, f.Z, j.Z], () => {
    let e = [],
      t = new Set;
    for (let n of m.Z.getChannelHistory()) {
      let r = g.Z.getChannel(n);
      (null == r ? void 0 : r.type) === P.d4z.GUILD_VOICE && (0, b.JL)(r, f.Z, j.Z) && (t.add(r.id), e.push(r))
    }
    for (let n of x.Z.getFrequentlyWithoutFetchingLatest()) n instanceof h.Sf && n.type === P.d4z.GUILD_VOICE && !t.has(n.id) && (0, b.JL)(n, f.Z, j.Z) && (t.add(n.id), e.push(n));
    return e
  }), k = l.useMemo(() => {
    let e = new Set(A.map(e => e.id)),
      t = new Set(W.map(e => e.id));
    return [...W.toSorted((t, n) => e.has(t.id) && !e.has(n.id) ? -1 : e.has(n.id) && !e.has(t.id) ? 1 : 0).map(e => (0, c.Z)(e.id)).filter(O.lm), ...A.filter(e => !t.has(e.id)).map(e => (0, c.Z)(e.id)).filter(O.lm)]
  }, [A, W]), L = "" !== _ ? R : k;
  return (0, r.jsxs)("div", {
    className: E.root,
    children: [(0, r.jsxs)("div", {
      className: E.header,
      children: [(0, r.jsx)(d.Z, {
        className: E.sourceIcon,
        game: T
      }), (0, r.jsxs)("div", {
        className: E.headingGroup,
        children: [(0, r.jsx)(i.X6q, {
          variant: "text-lg/semibold",
          color: "header-primary",
          children: C.NW.string(C.t.WEYae3)
        }), (0, r.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: null === (n = N.sourceApplication) || void 0 === n ? void 0 : n.name
        })]
      })]
    }), (0, r.jsx)(i.E1j, {
      className: E.searchBar,
      placeholder: C.NW.string(C.t["3jvv+/"]),
      query: _,
      size: i.E1j.Sizes.MEDIUM,
      onChange: e => w({
        query: e,
        resultTypes: [o.h8.VOICE_CHANNEL]
      }),
      onClear: () => w({
        query: "",
        resultTypes: [o.h8.VOICE_CHANNEL]
      }),
      autoFocus: !0
    }), (0, r.jsx)(i.aVo, {
      renderListHeader: function() {
        return (0, r.jsx)(i.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: "Recent Channels"
        })
      },
      sections: [L.length],
      sectionHeight: 0,
      rowHeight: 48,
      renderRow: function(e) {
        let {
          rowIndex: t
        } = e, n = L[t];
        return (0, r.jsx)(I, {
          result: n,
          onSelectChannel: u
        }, n.record.id)
      }
    })]
  })
}