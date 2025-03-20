/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(456268),
  o = n(526429),
  A = n(203377);
let c = e => {
  let {
    guild: t,
    guildMetadata: n,
    disabled: c
  } = e, d = (0, s.Wu)([o.Z], () => o.Z.getAllCategories()), u = i.useMemo(() => d.map(e => {
    let {
      categoryId: t,
      name: n
    } = e;
    return {
      value: t,
      label: n
    }
  }), [d]);
  return 0 === u.length ? (0, r.jsx)(a.$jN, {}) : (0, r.jsx)(a.VcW, {
    value: n.secondaryCategoryIds,
    options: u,
    onChange: e => {
      let {
        secondaryCategoryIds: r
      } = n;
      if (e.length < r.length) r.filter(t => !e.includes(t)).forEach(e => (0, l.K0)(t.id, e));
      else {
        if (r.length >= A.Pg) return;
        e.filter(e => !r.includes(e)).forEach(e => (0, l.Kq)(t.id, e))
      }
    },
    isDisabled: c,
    multi: !0
  })
}