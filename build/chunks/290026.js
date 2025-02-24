/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  P: () => c
}), r(47120);
var n = r(192379),
  i = r(979554),
  l = r(442837),
  o = r(597688),
  a = r(365943),
  s = r(25251);
let c = () => {
  let e = (0, l.e7)([o.Z], () => o.Z.products);
  n.useEffect(() => {
    let t = [...e.values()].filter(e => e.type === i.Z.PROFILE_EFFECT).some(e => {
      let t = e.items[0].id;
      return null != t && null == s.Z.getProfileEffectById(t)
    });
    (0, a.z)(t)
  }, [e])
}