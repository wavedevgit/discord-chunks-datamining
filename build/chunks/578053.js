/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  g: () => v,
  u: () => x
}), n(733860);
var r = n(200651),
  i = n(192379),
  s = n(106351),
  a = n(442837),
  l = n(481060),
  o = n(740504),
  A = n(933557),
  c = n(471445),
  d = n(592125),
  u = n(324067),
  g = n(699516),
  f = n(594174),
  m = n(434404),
  p = n(388032);
let h = "NO_CHANNEL";

function C(e) {
  return {
    value: e.id,
    label: (0, A.F6)(e, f.default, g.Z),
    channel: e,
    category: d.Z.getChannel(e.parent_id)
  }
}

function b(e) {
  let {
    option: t
  } = e, {
    label: n,
    channel: s,
    category: a
  } = t, o = i.useMemo(() => (0, c.KS)(s), [s]), d = (0, A.ZP)(s);
  return (0, r.jsx)(l.ZZ$, {
    title: n,
    icon: o,
    subtitle: null != a ? d : null
  })
}

function v(e) {
  let {
    canManageGuild: t,
    guildId: n,
    afkChannelId: l
  } = e, A = (0, a.e7)([u.Z], () => u.Z.getCategories(n)), c = i.useMemo(() => {
    let e = (0, o.Z)(A._categories, A).filter(e => {
      let {
        channel: t
      } = e;
      return t.type === s.d.GUILD_VOICE
    }).map(e => {
      let {
        channel: t
      } = e;
      return C(t)
    });
    return e.unshift({
      value: h,
      label: p.NW.string(p.t.wGiHkJ)
    }), e
  }, [A]), d = i.useCallback(e => {
    let t = e === h ? null : e;
    m.Z.updateGuild({
      afkChannelId: t
    })
  }, []);
  return (0, r.jsx)(N, {
    value: null != l ? l : h,
    options: c,
    canManageGuild: t,
    onChange: d
  })
}

function x(e) {
  let {
    canManageGuild: t,
    guildId: n,
    systemChannelId: l
  } = e, A = (0, a.e7)([u.Z], () => u.Z.getCategories(n)), c = i.useMemo(() => {
    let e = (0, o.Z)(A._categories, A).filter(e => {
      let {
        channel: t
      } = e;
      return t.type === s.d.GUILD_TEXT
    }).map(e => {
      let {
        channel: t
      } = e;
      return C(t)
    });
    return e.unshift({
      value: h,
      label: p.NW.string(p.t.ibUhoa)
    }), e
  }, [A]), d = i.useCallback(e => {
    let t = e === h ? null : e;
    m.Z.updateGuild({
      systemChannelId: t
    })
  }, []);
  return (0, r.jsx)(N, {
    value: null != l ? l : h,
    options: c,
    canManageGuild: t,
    onChange: d
  })
}

function N(e) {
  let {
    value: t,
    options: n,
    canManageGuild: s,
    onChange: a
  } = e, o = i.useCallback(e => {
    if (null != e) return (0, r.jsx)(b, {
      option: e
    })
  }, []), A = i.useCallback(e => o(e[0]), [o]);
  return (0, r.jsx)(l.q4e, {
    value: t,
    options: n,
    isDisabled: !s,
    onChange: a,
    renderOptionLabel: o,
    renderOptionValue: A
  })
}