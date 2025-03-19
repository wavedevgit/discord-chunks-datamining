/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => A
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(456268),
  o = n(526429),
  c = n(203377);
let A = e => {
  let {
    guild: t,
    guildMetadata: n,
    disabled: A
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
        if (r.length >= c.Pg) return;
        e.filter(e => !r.includes(e)).forEach(e => (0, l.Kq)(t.id, e))
      }
    },
    isDisabled: A,
    multi: !0
  })
}