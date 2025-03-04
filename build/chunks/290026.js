/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  P: () => c
}), r(47120);
var n = r(192379),
  l = r(979554),
  i = r(442837),
  o = r(597688),
  s = r(365943),
  a = r(25251);
let c = () => {
  let e = (0, i.e7)([o.Z], () => o.Z.products);
  n.useEffect(() => {
    let t = [...e.values()].filter(e => e.type === l.Z.PROFILE_EFFECT).some(e => {
      let t = e.items[0].id;
      return null != t && null == a.Z.getProfileEffectById(t)
    });
    (0, s.z)(t)
  }, [e])
}