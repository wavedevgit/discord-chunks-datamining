/** Chunk was on 1272 **/
n.d(t, {
  Z: () => E
}), n(47120);
var r = n(200651);
n(192379);
var i = n(243814),
  l = n(481060),
  o = n(846027),
  a = n(872810),
  s = n(594190),
  c = n(989941),
  u = n(173507),
  d = n(199902),
  p = n(131951),
  h = n(449224),
  g = n(358085),
  f = n(452426),
  m = n(736045),
  b = n(186901),
  _ = n(981631);
let E = {
  [_.Etm.TOGGLE_VIDEO]: {
    scope: {
      [b.Gp.ALL]: [i.x.RPC, i.x.RPC_VIDEO_WRITE]
    },
    handler() {
      let e = p.Z.isVideoEnabled();
      null != (0, m.Z)() && (e ? o.Z.setVideoEnabled(!1) : (0, u.Z)(() => o.Z.setVideoEnabled(!0), _.IlC.APP))
    }
  },
  [_.Etm.TOGGLE_SCREENSHARE]: {
    scope: {
      [b.Gp.ALL]: [i.x.RPC, i.x.RPC_SCREENSHARE_WRITE]
    },
    validation: e => (0, f.Z)(e).optional().keys({
      pid: e.number().optional().min(0)
    }),
    handler(e) {
      let {
        args: {
          pid: t
        }
      } = e, i = d.Z.getCurrentUserActiveStream(), o = d.Z.getStreamerActiveStreamMetadata(), u = (0, c.Z)(s.ZP, h.Z), p = (0, m.Z)();
      null != p && (null != t && null != o && o.pid !== t && (0, g.isWindows)() ? (0, a.WH)(p.guild_id, p.id, {
        pid: t
      }) : null != i ? (0, a.L6)(!1) : null != t && (0, g.isWindows)() ? (0, a.WH)(p.guild_id, p.id, {
        pid: t
      }) : null != u ? (0, a.WH)(p.guild_id, p.id, {
        pid: u.pid
      }) : (0, l.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("93382"), n.e("79477"), n.e("69362")]).then(n.bind(n, 60594));
        return t => {
          var n, i;
          return (0, r.jsx)(e, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[t] = r
              })
            }
            return e
          }({}, t), i = i = {
            guildId: p.guild_id,
            analyticsLocation: _.Sbl.ACTIVITY_RPC
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n))
        }
      }))
    }
  }
}