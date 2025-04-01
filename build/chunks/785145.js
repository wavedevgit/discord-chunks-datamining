/** Chunk was on 13323 **/
n.d(t, {
  Z: () => u
}), n(47120);
var r = n(192379),
  i = n(399606),
  s = n(230711),
  a = n(663389),
  o = n(981631),
  l = n(526761);
let c = new Set(Object.values(l.NB)),
  d = e => null != e && c.has(e),
  u = () => {
    let e = (0, i.e7)([a.Z], () => {
        let e = a.Z.getSubsection();
        return d(e) ? e : l.NB.USER_PROFILE
      }),
      t = r.useCallback(t => {
        e !== t && s.Z.setSection(o.oAB.PROFILE_CUSTOMIZATION, t)
      }, [e]);
    return {
      subsection: e,
      setSubsection: t
    }
  }