/** Chunk was on 80960 **/
/** chunk id: 770800, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./784620.js"), require("./973216.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk101713 = require("./101713.js"),
  Chunk478411 = require("./478411.js");
class C extends Chunk473749.PureComponent {
  render() {
    var e, t;
    let {
      transport: n,
      mediaSessionId: a,
      hidePersonalInformation: i,
      hostname: o
    } = this.props;
    if (null == n) return (0, r.jsx)(s.$jN, {
      type: s.$jN.Type.SPINNING_CIRCLE
    });
    let d = (e = function(e) {
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
      }({}, n), t = t = {
        hostname: o
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), e),
      u = l().map(d, (e, t) => {
        if ("receiverReports" !== t && (!i || "localAddress" !== t)) return (0, r.jsx)(b.ck, {
          label: t,
          value: e
        }, t)
      }),
      p = l().map(d.receiverReports, e => {
        let t = Array.isArray(e.bitrate) ? null == (r = e.bitrate.at(false)) ? true : r.value : e.bitrate,
          n = f.default.getUser(e.id);
        var r, a = y.ZP.getNickname(m.Z.getGuildId(), true, n);
        return null == a && (a = null != n ? n.username : e.id), {
          displayName: a,
          bitrate: t / 1e3,
          lost: 100 * e.fractionLost / 256
        }
      }),
      h = l().sortBy(p, e => e.displayName),
      g = l().map(h, e => (function(e, t, n) {
        let a = (0, r.jsxs)(c.Z, {
            id: "bitrate-".concat(e),
            justify: c.Z.Justify.BETWEEN,
            children: [(0, r.jsx)("span", {
              children: "Bitrate:"
            }), (0, r.jsxs)("span", {
              children: [t.toFixed(2), " Kbps"]
            })]
          }),
          i = (0, r.jsxs)(c.Z, {
            id: "lost-".concat(e),
            justify: c.Z.Justify.BETWEEN,
            children: [(0, r.jsx)("span", {
              children: "Packet Loss:"
            }), (0, r.jsxs)("span", {
              children: [n.toFixed(0), "%"]
            })]
          });
        return (0, r.jsx)(E.Z, {
          label: e,
          valueRendered: [a, i],
          children: e
        }, e)
      })(e.displayName, e.bitrate, e.lost));
    return (0, r.jsxs)(s.Kqy, {
      className: j.allowSelection,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-md/medium",
        children: P.intl.string(P.t.wU9IN2) + (null != a ? " - " + a : "")
      }), (0, v.VE)(u), 0 === g.length ? null : (0, r.jsx)(s.izJ, {
        className: x.marginBottom20
      }), (0, v.VE)(g)]
    })
  }
}
let Z = Chunk442837.ZP.connectStores([Chunk226961.ZP, Chunk19780.Z, Chunk246946.Z, Chunk959457.Z], e => {
  var t;
  let {
    context: n,
    index: r
  } = e, a = u.ZP.getAllStats(n)[r], i = n === D.Yn.STREAM ? Object.values(p.Z.getRTCConnections()).find(e => e.getMediaEngineConnectionId() === a.mediaEngineConnectionId) : null, l = null != (t = null == i ? true : i.hostname) ? t : "";
  return {
    hidePersonalInformation: h.Z.hidePersonalInformation,
    transport: null != a ? a.transport : null,
    mediaSessionId: d.Z.getMediaSessionId(),
    hostname: g.Z.getShortHostname(l)
  }
})(C)