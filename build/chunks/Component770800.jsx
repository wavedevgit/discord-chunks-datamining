/** Chunk was on 80960 **/
/** chunk id: 770800, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./784620.js"), require("./973216.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk19780 = require("./19780.js"),
  Chunk226961 = require("./226961.js"),
  Chunk914010 = require("./914010.js"),
  Chunk959457 = require("./959457.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk476221 = require("./476221.js"),
  Chunk481250 = require("./481250.jsx"),
  Chunk206314 = require("./206314.jsx"),
  Chunk513547 = require("./513547.jsx"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk442122 = require("./442122.js"),
  Chunk20493 = require("./20493.js");
class R extends Chunk73800.PureComponent {
  render() {
    var e, t;
    let {
      transport: r,
      mediaSessionId: a,
      hidePersonalInformation: i,
      hostname: o
    } = this.props;
    if (null == require) return (0, Chunk255367.jsx)(Chunk481060.$jN, {
      type: Chunk481060.$jN.Type.SPINNING_CIRCLE
    });
    let d = (e = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, require), t = t = {
        hostname: Chunk442837
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(exports)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
      }), module),
      u = l().map(Chunk19780, (e, t) => {
        if ("receiverReports" !== t && (!i || "localAddress" !== t)) return (0, n.jsx)(b.ck, {
          label: t,
          value: e
        }, t)
      }),
      p = l().map(Chunk19780.receiverReports, e => {
        let t = Array.isArray(e.bitrate) ? null == (n = e.bitrate.at(false)) ? true : n.value : e.bitrate,
          r = f.default.getUser(e.id);
        var n, a = y.ZP.getNickname(m.Z.getGuildId(), true, r);
        return null == a && (a = null != r ? r.username : e.id), {
          displayName: a,
          bitrate: t / 1e3,
          lost: 100 * e.fractionLost / 256
        }
      }),
      h = l().sortBy(Chunk959457, e => e.displayName),
      g = l().map(Chunk246946, e => (function(e, t, r) {
        let a = (0, n.jsxs)(c.Z, {
            id: "bitrate-".concat(e),
            justify: c.Z.Justify.BETWEEN,
            children: [(0, n.jsx)("span", {
              children: "Bitrate:"
            }), (0, n.jsxs)("span", {
              children: [t.toFixed(2), " Kbps"]
            })]
          }),
          i = (0, n.jsxs)(c.Z, {
            id: "lost-".concat(e),
            justify: c.Z.Justify.BETWEEN,
            children: [(0, n.jsx)("span", {
              children: "Packet Loss:"
            }), (0, n.jsxs)("span", {
              children: [r.toFixed(0), "%"]
            })]
          });
        return (0, n.jsx)(D.Z, {
          label: e,
          valueRendered: [a, i],
          children: e
        }, e)
      })(e.displayName, e.bitrate, e.lost));
    return (0, Chunk255367.jsxs)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H2,
      title: Chunk388032.intl.string(Chunk388032.t.wU9INz) + (null != Chunk73800 ? " - " + Chunk73800 : ""),
      className: Chunk442122.allowSelection,
      children: [(0, Chunk481250.a)(Chunk226961), 0 === Chunk476221.length ? null : (0, Chunk255367.jsx)(Chunk481060.$i$, {
        className: Chunk20493.marginBottom20
      }), (0, Chunk481250.a)(Chunk476221)]
    })
  }
}
let Z = Chunk442837.ZP.connectStores([Chunk226961.ZP, Chunk19780.Z, Chunk246946.Z, Chunk959457.Z], e => {
  var t;
  let {
    context: r,
    index: n
  } = e, a = u.ZP.getAllStats(r)[n], i = r === C.Yn.STREAM ? Object.values(p.Z.getRTCConnections()).find(e => e.getMediaEngineConnectionId() === a.mediaEngineConnectionId) : null, l = null != (t = null == i ? true : i.hostname) ? t : "";
  return {
    hidePersonalInformation: h.Z.hidePersonalInformation,
    transport: null != a ? a.transport : null,
    mediaSessionId: d.Z.getMediaSessionId(),
    hostname: g.Z.getShortHostname(l)
  }
})(R)