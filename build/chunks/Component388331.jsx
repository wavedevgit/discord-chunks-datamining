/** Chunk was on 21738 **/
/** chunk id: 388331, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk179771 = require("./179771.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk401843 = require("./401843.js"),
  Chunk793574 = require("./793574.js"),
  Chunk15285 = require("./15285.js"),
  Chunk905552 = require("./905552.js"),
  Chunk442353 = require("./442353.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk430452 = require("./430452.js"),
  Chunk157257 = require("./157257.js"),
  Chunk723702 = require("./723702.js"),
  Chunk629471 = require("./629471.js"),
  Chunk693806 = require("./693806.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
let E = {
  [Chunk652215.e$_.TOGGLE_VIDEO]: {
    scope: {
      [Chunk613057.sm.ALL]: [Chunk179771.F.RPC, Chunk179771.F.RPC_VIDEO_WRITE]
    },
    handler() {
      let e = h.A.isVideoEnabled();
      null != (0, A.A)() && (e ? a.A.setVideoEnabled(false) : (0, d.A)(() => a.A.setVideoEnabled(true), b.BRT.APP))
    }
  },
  [Chunk652215.e$_.TOGGLE_SCREENSHARE]: {
    scope: {
      [Chunk613057.sm.ALL]: [Chunk179771.F.RPC, Chunk179771.F.RPC_SCREENSHARE_WRITE]
    },
    validation: e => (0, f.A)(e).optional().keys({
      pid: e.number().optional().min(0)
    }),
    handler(e) {
      let {
        args: {
          pid: t
        }
      } = e, i = p.A.getCurrentUserActiveStream(), a = p.A.getStreamerActiveStreamMetadata(), d = (0, u.A)(c.Ay, g.A), h = (0, A.A)();
      null != h && (null != t && null != a && a.pid !== t && (0, m.isWindows)() ? (0, s.XI)(h.guild_id, h.id, {
        pid: t
      }) : null != i ? (0, s.nO)(false) : null != t && (0, m.isWindows)() ? (0, s.XI)(h.guild_id, h.id, {
        pid: t
      }) : null != d ? (0, s.XI)(h.guild_id, h.id, {
        pid: d.pid
      }) : (0, l.mMO)(async () => {
        let {
          default: e
        } = await n.e("96811").then(n.bind(n, 648230));
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
            analyticsLocations: [o.A.RPC]
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