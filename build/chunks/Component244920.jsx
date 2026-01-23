/** Chunk was on 71138 **/
/** chunk id: 244920, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => F
}), require("./134528.js"), require("./947204.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk383501 = require("./383501.js"),
  Chunk412780 = require("./412780.js"),
  Chunk967198 = require("./967198.js"),
  Chunk162605 = require("./162605.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk917592 = require("./917592.js"),
  Chunk828904 = require("./828904.jsx"),
  Chunk522278 = require("./522278.jsx"),
  Chunk974175 = require("./974175.jsx"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk518959 = require("./518959.js"),
  Chunk473169 = require("./473169.js");
class R extends Chunk64700.PureComponent {
  render() {
    var e, t;
    let {
      transport: r,
      mediaSessionId: a,
      hidePersonalInformation: i,
      hostname: s
    } = this.props;
    if (null == r) return (0, n.jsx)(o.y$y, {
      type: o.y$y.Type.SPINNING_CIRCLE
    });
    let c = (e = function(e) {
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
      }({}, r), t = t = {
        hostname: s
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(t)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
      }), e),
      u = l().map(c, (e, t) => {
        if ("receiverReports" !== t && (!i || "localAddress" !== t)) return (0, n.jsx)(b.q7, {
          label: t,
          value: e
        }, t)
      }),
      p = l().map(c.receiverReports, e => {
        let t = Array.isArray(e.bitrate) ? null == (n = e.bitrate.at(false)) ? true : n.value : e.bitrate,
          r = h.default.getUser(e.id);
        var n, a = g.Ay.getNickname(m.A.getGuildId(), true, r);
        return null == a && (a = null != r ? r.username : e.id), {
          displayName: a,
          bitrate: t / 1e3,
          lost: 100 * e.fractionLost / 256
        }
      }),
      y = l().sortBy(p, e => e.displayName),
      A = l().map(y, e => {
        var t, r, a;
        let i, l;
        return t = e.displayName, r = e.bitrate, a = e.lost, i = (0, n.jsxs)(d.A, {
          id: "bitrate-".concat(t),
          justify: d.A.Justify.BETWEEN,
          children: [(0, n.jsx)("span", {
            children: "Bitrate:"
          }), (0, n.jsxs)("span", {
            children: [r.toFixed(2), " Kbps"]
          })]
        }), l = (0, n.jsxs)(d.A, {
          id: "lost-".concat(t),
          justify: d.A.Justify.BETWEEN,
          children: [(0, n.jsx)("span", {
            children: "Packet Loss:"
          }), (0, n.jsxs)("span", {
            children: [a.toFixed(0), "%"]
          })]
        }), (0, n.jsx)(v.A, {
          label: t,
          valueRendered: [i, l],
          children: t
        }, t)
      });
    return (0, n.jsxs)(o.BJc, {
      className: x._8,
      children: [(0, n.jsx)(o.Heading, {
        variant: "heading-md/medium",
        children: E.intl.string(E.t.wU9IN2) + (null != a ? " - " + a : "")
      }), (0, f.C6)(u), 0 === A.length ? null : (0, n.jsx)(o.cGx, {
        className: D.SX
      }), (0, f.C6)(A)]
    })
  }
}
let F = Chunk311907.Ay.connectStores([Chunk412780.Ay, Chunk383501.A, Chunk351906.A, Chunk162605.A], e => {
  var t;
  let {
    context: r,
    index: n
  } = e, a = u.Ay.getAllStats(r)[n], i = r === C.x.STREAM ? Object.values(p.A.getRTCConnections()).find(e => e.getMediaEngineConnectionId() === a.mediaEngineConnectionId) : null, l = null != (t = null == i ? true : i.hostname) ? t : "";
  return {
    hidePersonalInformation: y.A.hidePersonalInformation,
    transport: null != a ? a.transport : null,
    mediaSessionId: c.A.getMediaSessionId(),
    hostname: A.A.getShortHostname(l)
  }
})(R)