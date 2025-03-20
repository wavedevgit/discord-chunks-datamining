/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  E: () => d
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(456268),
  o = n(526429),
  A = n(128449),
  c = n(388032);

function d(e) {
  let {
    guildId: t,
    guildMetadata: n,
    isDisabled: d,
    clearable: u = !0
  } = e, g = (0, s.Wu)([o.Z], () => o.Z.getPrimaryCategories()), f = i.useCallback(e => {
    (0, l.TA)(t, null != e ? e : A.o3)
  }, [t]), m = i.useMemo(() => g.map(e => {
    let {
      categoryId: t,
      name: n
    } = e;
    return {
      value: t,
      label: n
    }
  }), [g]);
  return 0 === g.length ? (0, r.jsx)(a.$jN, {}) : (0, r.jsx)(a.VcW, {
    value: n.primaryCategoryId === A.o3 ? null : n.primaryCategoryId,
    placeholder: c.NW.string(c.t.XqMe3N),
    options: m,
    onChange: f,
    isDisabled: d,
    clearable: u
  }, m.length)
}