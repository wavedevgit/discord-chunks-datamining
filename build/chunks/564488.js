/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => u
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(236413),
  a = n(866894),
  l = n(65912),
  o = n(572456),
  c = n(59192),
  A = n(11265),
  d = n(495892);
let u = i.memo(function(e) {
  let {
    rule: t,
    persistEdit: n = !1,
    initWithEdit: u = !1
  } = e, {
    hasChanges: g,
    editingRule: f,
    createNewEditingRule: m,
    setEditingRule: p
  } = (0, l.V)(), {
    isLoading: h
  } = (0, l.w)(), [C] = i.useState(() => !(0, s.Vb)(t)), b = (null == f ? void 0 : f.id) === t.id || n, v = (0, a.U)(null == t ? void 0 : t.id), x = b && null != f ? f : t, N = i.useMemo(() => (0, o.af)(t.name), [null == t ? void 0 : t.name]), j = i.useCallback(() => {
    m(t.guildId, t.triggerType)
  }, [t.guildId, t.triggerType, m]), E = i.useCallback(e => {
    !h && p(e, !0)
  }, [h, p]);
  i.useEffect(() => {
    u && p(t, !0)
  }, [u, t, p]);
  let I = i.useCallback(() => {
    b ? g || p(null) : g ? N(() => {
      p(t)
    }) : p(t)
  }, [b, g, N, t, p]);
  return (0, r.jsx)(A.Z, {
    renderHeader: (0, r.jsx)(d.Z, {
      rule: x,
      forceSetup: C && !b && !v,
      triggerType: t.triggerType,
      isEditMode: b,
      isDefaultRule: v,
      onChangeRule: E,
      onSetupRule: j
    }),
    isStuck: b && g,
    isExpanded: b,
    onExpand: I,
    children: b && (0, r.jsx)(c.Z, {
      rule: x,
      isLoading: h,
      onChangeRule: E
    })
  })
})