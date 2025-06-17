/** Chunk was on 40498 **/
t.d(n, {
  Z: () => j
});
var r = t(255367),
  l = t(73800),
  i = t(512722),
  o = t.n(i),
  s = t(442837),
  c = t(481060),
  a = t(10718),
  u = t(667204),
  d = t(826298),
  p = t(276022),
  f = t(978983),
  g = t(430824),
  m = t(594174),
  h = t(981631),
  b = t(689079),
  _ = t(388032),
  y = t(547607);
let j = e => {
  let n, {
      commandType: t,
      commandTargetId: i,
      channel: j,
      guildId: O,
      onHeightUpdate: x,
      context: S
    } = e,
    T = (0, s.e7)([g.Z], () => g.Z.getGuild(null != O ? O : j.guild_id)),
    w = (0, s.e7)([m.default], () => m.default.getUser(i)),
    P = (0, p.Z)({
      user: w,
      guildId: null == T ? void 0 : T.id,
      context: S
    }),
    E = l.useMemo(() => ({
      channel: j,
      type: "channel"
    }), [j]),
    {
      commands: I,
      sectionDescriptors: M,
      loading: v
    } = a.wi({
      context: E,
      filters: {
        commandTypes: [t]
      },
      options: {
        limit: b.lr
      },
      allowFetch: !0
    }),
    {
      sections: C
    } = l.useMemo(() => {
      let e = {};
      return M.forEach(n => {
        e[n.id] = n
      }), {
        sections: e
      }
    }, [M]),
    Z = l.useRef(v);
  l.useEffect(() => {
    v !== Z.current && (Z.current = v, null == x || x())
  }, [v, x]);
  let R = l.useCallback(e => {
    o()(null != j, "menu item should not show if channel is null");
    let n = C[e.applicationId],
      t = null != n ? (0, d.ky)(n) : void 0;
    return (0, r.jsx)(c.sNh, {
      id: e.id,
      label: e.displayName,
      iconLeft: () => null != t ? (0, r.jsx)(t, {
        channel: j,
        section: n,
        width: 18,
        height: 18,
        selectable: !1
      }) : null,
      action: () => {
        (0, u.Z)({
          command: e,
          optionValues: {},
          context: {
            channel: j,
            guild: T
          },
          commandTargetId: i
        })
      }
    }, e.id)
  }, [j, T, i, C]);
  if (v ? n = (0, r.jsx)(c.sNh, {
      id: "menu-commands-placeholder",
      render: () => (0, r.jsx)(f.Z, {}),
      disabled: !0
    }, "menu-commands-placeholder") : (n = 0 === I.length ? (0, r.jsx)(c.sNh, {
      id: "menu-commands-empty",
      label: _.intl.string(_.t.YSNlV1),
      disabled: !0
    }, "menu-commands-empty") : I.map(R), null != P && P.length > 0 && (n = (0, r.jsxs)(r.Fragment, {
      children: [n, (0, r.jsx)(c.Clw, {}, "separator"), P]
    }))), !h.TPd.TEXTUAL.has(j.type))
    if (null == P) return null;
    else n = P;
  return (0, r.jsx)(c.sNh, {
    id: "apps",
    label: _.intl.string(_.t.PHjkRE),
    listClassName: y.list,
    children: n
  })
}