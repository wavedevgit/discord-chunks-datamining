/** Chunk was on 36084 **/
n.d(t, {
  Z: () => v
});
var r = n(255367),
  i = n(73800),
  l = n(512722),
  o = n.n(l),
  u = n(442837),
  a = n(481060),
  c = n(10718),
  s = n(667204),
  d = n(826298),
  f = n(276022),
  p = n(978983),
  g = n(430824),
  O = n(594174),
  m = n(981631),
  b = n(689079),
  y = n(388032),
  h = n(547607);
let v = e => {
  let t, {
      commandType: n,
      commandTargetId: l,
      channel: v,
      guildId: P,
      onHeightUpdate: j,
      context: E
    } = e,
    Z = (0, u.e7)([g.Z], () => g.Z.getGuild(null != P ? P : v.guild_id)),
    S = (0, u.e7)([O.default], () => O.default.getUser(l)),
    A = (0, f.Z)({
      user: S,
      guildId: null == Z ? void 0 : Z.id,
      context: E
    }),
    I = i.useMemo(() => ({
      channel: v,
      type: "channel"
    }), [v]),
    {
      commands: T,
      sectionDescriptors: R,
      loading: N
    } = c.wi({
      context: I,
      filters: {
        commandTypes: [n]
      },
      options: {
        limit: b.lr
      },
      allowFetch: !0
    }),
    {
      sections: x
    } = i.useMemo(() => {
      let e = {};
      return R.forEach(t => {
        e[t.id] = t
      }), {
        sections: e
      }
    }, [R]),
    _ = i.useRef(N);
  i.useEffect(() => {
    N !== _.current && (_.current = N, null == j || j())
  }, [N, j]);
  let w = i.useCallback(e => {
    o()(null != v, "menu item should not show if channel is null");
    let t = x[e.applicationId],
      n = null != t ? (0, d.ky)(t) : void 0;
    return (0, r.jsx)(a.sNh, {
      id: e.id,
      label: e.displayName,
      iconLeft: () => null != n ? (0, r.jsx)(n, {
        channel: v,
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
            channel: v,
            guild: Z
          },
          commandTargetId: l
        })
      }
    }, e.id)
  }, [v, Z, l, x]);
  if (N ? t = (0, r.jsx)(a.sNh, {
      id: "menu-commands-placeholder",
      render: () => (0, r.jsx)(p.Z, {}),
      disabled: !0
    }, "menu-commands-placeholder") : (t = 0 === T.length ? (0, r.jsx)(a.sNh, {
      id: "menu-commands-empty",
      label: y.intl.string(y.t.YSNlV1),
      disabled: !0
    }, "menu-commands-empty") : T.map(w), null != A && A.length > 0 && (t = (0, r.jsxs)(r.Fragment, {
      children: [t, (0, r.jsx)(a.Clw, {}, "separator"), A]
    }))), !m.TPd.TEXTUAL.has(v.type))
    if (null == A) return null;
    else t = A;
  return (0, r.jsx)(a.sNh, {
    id: "apps",
    label: y.intl.string(y.t.PHjkRE),
    listClassName: h.list,
    children: t
  })
}