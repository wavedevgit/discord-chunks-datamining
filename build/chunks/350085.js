/** Chunk was on 1272 (d2669c1c27f74703.js) **/
n.d(t, {
  M: () => d
});
var r = n(392711),
  i = n.n(r),
  l = n(283595),
  o = n(808506),
  a = n(237997),
  s = n(996106),
  c = n(186901),
  u = n(981631);
let d = {
  [u.zMe.OVERLAY_UPDATE]: {
    scope: c.lH,
    handler(e) {
      let {
        args: {
          pid: t
        },
        socket: n
      } = e;
      if ("number" != typeof t || t < 10) throw new s.Z({
        errorCode: u.lTL.INVALID_EVENT
      }, "Invalid pid");
      return e => {
        let {
          prevState: r,
          dispatch: s
        } = e, c = o.ZP.enabled, u = !0, d = n.application.id;
        if (null != d) {
          let e = l.Z.getActiveLibraryApplication(d);
          null != e && (c = c && e.isOverlayEnabled()), u = a.Z.isLocked(t)
        }
        let p = {
          enabled: c,
          locked: u
        };
        return i().isEqual(p, r) || s(p), p
      }
    }
  }
}