/** Chunk was on 72149 **/
n.d(t, {
  Z: () => y
});
var r = n(200651),
  i = n(192379),
  l = n(512722),
  a = n.n(l),
  o = n(442837),
  u = n(481060),
  d = n(10718),
  s = n(667204),
  c = n(826298),
  f = n(276022),
  p = n(978983),
  v = n(430824),
  h = n(594174),
  E = n(981631),
  m = n(689079),
  O = n(388032),
  g = n(193025);
let y = e => {
  let t, {
      commandType: n,
      commandTargetId: l,
      channel: y,
      guildId: b,
      onHeightUpdate: N,
      context: A
    } = e,
    C = (0, o.e7)([v.Z], () => v.Z.getGuild(null != b ? b : y.guild_id)),
    _ = (0, o.e7)([h.default], () => h.default.getUser(l)),
    T = (0, f.Z)({
      user: _,
      guildId: null == C ? void 0 : C.id,
      context: A
    }),
    Z = i.useMemo(() => ({
      channel: y,
      type: "channel"
    }), [y]),
    {
      commands: I,
      sectionDescriptors: P,
      loading: R
    } = d.wi({
      context: Z,
      filters: {
        commandTypes: [n]
      },
      options: {
        limit: m.lr
      },
      allowFetch: !0
    }),
    {
      sections: S
    } = i.useMemo(() => {
      let e = {};
      return P.forEach(t => {
        e[t.id] = t
      }), {
        sections: e
      }
    }, [P]),
    j = i.useRef(R);
  i.useEffect(() => {
    R !== j.current && (j.current = R, null == N || N())
  }, [R, N]);
  let w = i.useCallback(e => {
    a()(null != y, "menu item should not show if channel is null");
    let t = S[e.applicationId],
      n = null != t ? (0, c.ky)(t) : void 0;
    return (0, r.jsx)(u.sNh, {
      id: e.id,
      label: e.displayName,
      iconLeft: () => null != n ? (0, r.jsx)(n, {
        channel: y,
        section: t,
        width: 18,
        height: 18,
        selectable: !1
      }) : null,
      action: () => {
        (0, s.Z)({
          command: e,
          optionValues: {},
          context: {
            channel: y,
            guild: C
          },
          commandTargetId: l
        })
      }
    }, e.id)
  }, [y, C, l, S]);
  if (R ? t = (0, r.jsx)(u.sNh, {
      id: "menu-commands-placeholder",
      render: () => (0, r.jsx)(p.Z, {}),
      disabled: !0
    }, "menu-commands-placeholder") : (t = 0 === I.length ? (0, r.jsx)(u.sNh, {
      id: "menu-commands-empty",
      label: O.NW.string(O.t.YSNlV1),
      disabled: !0
    }, "menu-commands-empty") : I.map(w), null != T && T.length > 0 && (t = (0, r.jsxs)(r.Fragment, {
      children: [t, (0, r.jsx)(u.Clw, {}, "separator"), T]
    }))), !E.TPd.TEXTUAL.has(y.type)) {
    if (null == T) return null;
    t = T
  }
  return (0, r.jsx)(u.sNh, {
    id: "apps",
    label: O.NW.string(O.t.PHjkRE),
    listClassName: g.list,
    children: t
  })
}