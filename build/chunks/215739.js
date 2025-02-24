/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => h
}), n(47120);
var r = n(846519),
  i = n(147913),
  o = n(246133),
  a = n(734934),
  s = n(695346),
  l = n(885110),
  c = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = new r.V7,
  f = new r.V7,
  p = new r.V7;
class _ extends i.Z {
  constructor(...e) {
    super(...e), u(this, "actions", {
      USER_SETTINGS_PROTO_UPDATE: () => this.handleUpdateProto(),
      POST_CONNECTION_OPEN: () => this.handleUpdateProto()
    }), u(this, "handleUpdateProto", () => {
      let e = s.Ok.getSetting();
      if (null == e) p.stop();
      else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
        let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
        t > 0 ? p.start(t, () => {
          s.Ok.updateSetting(void 0)
        }, !0) : (s.Ok.updateSetting(void 0), p.stop())
      } else null != p && p.stop();
      let t = s.Cr.getSetting();
      if (null != t && "0" !== t && l.Z.getStatus() !== c.Skl.ONLINE) {
        let e = new Date(Number(t)).getTime() - new Date().getTime();
        e > 0 ? d.start(e, () => {
          (0, o.Z)(c.Skl.ONLINE, l.Z.getStatus(), {
            location: {
              object: c.qAy.CUSTOM_STATUS_MANAGER
            }
          }, void 0)
        }, !0) : ((0, o.Z)(c.Skl.ONLINE, l.Z.getStatus(), {
          location: {
            object: c.qAy.CUSTOM_STATUS_MANAGER
          }
        }, void 0), d.stop())
      } else null != d && d.stop();
      let n = s.fv.getSetting();
      if (null != n && "0" !== n) {
        let e = new Date(Number(n)).getTime() - new Date().getTime();
        e > 0 ? f.start(e, () => {
          (0, a.oW)(!1)
        }, !0) : ((0, a.oW)(!1), f.stop())
      } else null != f && f.stop()
    })
  }
}
let h = new _