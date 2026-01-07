/** Chunk was on 1272 **/
/** chunk id: 197941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk243814 = require("./243814.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk872810 = require("./872810.js"),
  Chunk100527 = require("./100527.js"),
  Chunk594190 = require("./594190.js"),
  Chunk989941 = require("./989941.js"),
  Chunk173507 = require("./173507.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk131951 = require("./131951.js"),
  Chunk449224 = require("./449224.js"),
  Chunk358085 = require("./358085.js"),
  Chunk452426 = require("./452426.js"),
  Chunk736045 = require("./736045.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let O = {
  [Chunk981631.Etm.TOGGLE_VIDEO]: {
    scope: {
      [Chunk186901.Gp.ALL]: [Chunk243814.x.RPC, Chunk243814.x.RPC_VIDEO_WRITE]
    },
    handler() {
      let e = f.Z.isVideoEnabled();
      null != (0, b.Z)() && (e ? a.Z.setVideoEnabled(false) : (0, d.Z)(() => a.Z.setVideoEnabled(true), E.IlC.APP))
    }
  },
  [Chunk981631.Etm.TOGGLE_SCREENSHARE]: {
    scope: {
      [Chunk186901.Gp.ALL]: [Chunk243814.x.RPC, Chunk243814.x.RPC_SCREENSHARE_WRITE]
    },
    validation: e => (0, h.Z)(e).optional().keys({
      pid: e.number().optional().min(0)
    }),
    handler(e) {
      let {
        args: {
          pid: t
        }
      } = e, i = p.Z.getCurrentUserActiveStream(), a = p.Z.getStreamerActiveStreamMetadata(), d = (0, u.Z)(c.ZP, g.Z), f = (0, b.Z)();
      null != f && (null != t && null != a && a.pid !== t && (0, m.isWindows)() ? (0, o.WH)(f.guild_id, f.id, {
        pid: t
      }) : null != i ? (0, o.L6)(false) : null != t && (0, m.isWindows)() ? (0, o.WH)(f.guild_id, f.id, {
        pid: t
      }) : null != d ? (0, o.WH)(f.guild_id, f.id, {
        pid: d.pid
      }) : (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("46746").then(n.bind(n, 60594));
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
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, t), i = i = {
            analyticsLocations: [s.Z.RPC]
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