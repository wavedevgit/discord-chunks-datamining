/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  P: () => d
}), n(47120);
var r = n(192379),
  l = n(979554),
  a = n(442837),
  s = n(597688),
  o = n(365943),
  i = n(25251);
let d = () => {
  let e = (0, a.e7)([s.Z], () => s.Z.products);
  r.useEffect(() => {
    let t = [...e.values()].filter(e => e.type === l.Z.PROFILE_EFFECT).some(e => {
      let t = e.items[0].id;
      return null != t && null == i.Z.getProfileEffectById(t)
    });
    (0, o.z)(t)
  }, [e])
}