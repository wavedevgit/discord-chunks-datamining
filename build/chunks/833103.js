/** Chunk was on 37979 **/
l.d(t, {
  HJ: () => g,
  Z2: () => x,
  Zc: () => p,
  ur: () => b
}), l(388685), l(539854), l(290780);
var n = l(255367),
  r = l(73800),
  a = l(481060),
  i = l(592125),
  u = l(594174),
  s = l(5192),
  o = l(738018),
  c = l(607802),
  h = l(532428),
  f = l(981631);

function d(e) {
  let {
    user: t,
    guildId: l,
    channelId: n
  } = e, r = s.ZP.getName(l, n, t);
  return {
    value: t.id,
    label: r,
    key: t.id
  }
}

function g(e, t) {
  let l = r.useMemo(() => (0, c.s5)(e), [e]),
    n = r.useMemo(() => (0, c.AH)(e), [e]),
    [a, i] = r.useState([]),
    [s, f] = r.useState(""),
    g = r.useMemo(() => {
      let r = o.Z.getFilterResults(e, t, s);
      if (0 === r.length) return [];
      let i = [],
        c = r.map(e => d({
          user: e.user,
          guildId: l,
          channelId: n
        })),
        h = new Set(c.map(e => null == e ? void 0 : e.value));
      return i.push(...c), a.length > 0 && a.forEach(e => {
        if (h.has(e)) return;
        let t = u.default.getUser(e);
        if (null == t) return;
        let r = d({
          user: t,
          guildId: l,
          channelId: n
        });
        i.unshift(r)
      }), i
    }, [e, t, s, a, l, n]),
    p = r.useCallback(() => {
      i([]), f("")
    }, []),
    C = r.useCallback(e => {
      if (0 === a.length) return null;
      let t = h.ZP[e];
      return a.map(e => {
        let l = u.default.getUser(e);
        return "".concat(t.key, " ").concat(null == l ? void 0 : l.username)
      }).join(" ")
    }, [a]);
  return {
    options: g,
    query: a,
    setQuery: i,
    setQueryString: f,
    handleClearFilter: p,
    getApplyQueryString: C
  }
}

function p(e) {
  return {
    filter: !1,
    closeOnSelect: !1,
    renderOptionPrefix: r.useCallback(t => {
      var l;
      if (null == t) return;
      let r = u.default.getUser(t.value);
      if (null == r) return;
      let i = null != (l = r.getAvatarURL(e, 80)) ? l : r.avatar;
      return (0, n.jsx)(a.qEK, {
        src: i,
        size: a.EFr.SIZE_16,
        "aria-hidden": !0
      })
    }, [e]),
    renderOptionSuffix: r.useCallback(e => {
      if (null == e) return;
      let t = u.default.getUser(e.value);
      if (null != t) return (0, n.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: t.username
      })
    }, [])
  }
}

function C(e) {
  let {
    channel: t
  } = e;
  return {
    value: t.id,
    label: (0, c.nl)(t),
    key: t.id
  }
}

function b(e) {
  let [t, l] = r.useState([]), [n, a] = r.useState(""), u = r.useMemo(() => {
    let l = o.Z.getFilterResults(e, f.dCx.FILTER_IN, n);
    if (0 === l.length) return [];
    let r = [],
      a = new Set;
    return l.forEach(e => {
      let t = e.channel,
        l = C({
          channel: t
        });
      a.add(t.id), r.push(l)
    }), t.length > 0 && t.forEach(e => {
      if (a.has(e)) return;
      let t = i.Z.getChannel(e);
      if (null == t) return;
      let l = C({
        channel: t
      });
      r.unshift(l)
    }), r
  }, [e, n, t]), s = r.useCallback(() => {
    l([]), a("")
  }, []), d = r.useCallback(e => {
    if (0 === t.length) return null;
    let l = h.ZP[e];
    return t.map(e => {
      let t = i.Z.getChannel(e);
      if (null == t) return;
      let n = (0, c.nl)(t);
      return "".concat(l.key, " ").concat(n)
    }).join(" ")
  }, [t]);
  return {
    options: u,
    query: t,
    setQuery: l,
    setQueryString: a,
    handleClearFilter: s,
    getApplyQueryString: d
  }
}

function x(e) {
  let [t, l] = r.useState([]), n = r.useMemo(() => {
    let t = o.Z.getFilterResults(e, f.dCx.FILTER_HAS, "");
    if (0 === t.length) return [];
    let l = [];
    return l.push(...t.map(e => {
      let {
        text: t
      } = e;
      return {
        value: t,
        label: t,
        key: t
      }
    })), l
  }, [e]), a = r.useCallback(() => {
    l([])
  }, []), i = r.useCallback(e => {
    if (0 === t.length) return null;
    let l = h.ZP[e];
    return t.map(e => "".concat(l.key, " ").concat(e)).join(" ")
  }, [t]);
  return {
    options: n,
    query: t,
    setQuery: l,
    handleClearFilter: a,
    getApplyQueryString: i
  }
}