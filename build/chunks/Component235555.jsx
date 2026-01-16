/** Chunk was on 1272 **/
/** chunk id: 235555, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk239091 = require("./239091.js"),
  Chunk524331 = require("./524331.js"),
  Chunk768419 = require("./768419.js"),
  Chunk831506 = require("./831506.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk824138 = require("./824138.jsx"),
  Chunk658244 = require("./658244.jsx"),
  Chunk388032 = require("./388032.jsx");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class _ extends Chunk473749.PureComponent {
  hasParty(e) {
    return e.length > 1
  }
  handleStopListening() {
    (0, c.Z)()
  }
  render() {
    let {
      currentUser: e,
      host: t,
      party: n
    } = this.props;
    return this.hasParty(n) && null != e ? (0, r.jsx)(h.Z, {
      currentUser: e,
      host: t,
      party: n,
      renderOverflowPopout: this.renderOverflowPopout,
      onStopListening: this.handleStopListening,
      onUserContextMenu: this.handleUserContextMenu
    }) : null
  }
  constructor(...e) {
    super(...e), E(this, "handleUserContextMenu", (e, t) => {
      (0, s.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("69220"), n.e("18030")]).then(n.bind(n, 881351));
        return n => (0, r.jsx)(e, function(e, t) {
          return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }), e
        }(function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              E(e, t, n[t])
            })
          }
          return e
        }({}, n), {
          user: t
        }))
      })
    }), E(this, "renderOverflowPopout", () => {
      let {
        party: e
      } = this.props;
      return (0, r.jsx)(m.Z, {
        party: e,
        header: b.intl.formatToPlainString(b.t.I9et1z, {
          count: e.length
        })
      })
    })
  }
}
let O = Chunk442837.ZP.connectStores([Chunk768419.Z, Chunk594174.default, Chunk699516.Z, Chunk831506.Z], () => {
  let e, t, n = u.Z.getSyncingWith(),
    r = u.Z.getActivity(),
    i = f.default.getCurrentUser(),
    l = [];
  if (null != n ? (e = f.default.getUser(n.userId), t = n.partyId) : null != r && null != r.party && null != r.party.id && (e = i, t = r.party.id), null != t) {
    var o;
    l = a()(Array.from(null != (o = d.Z.getParty(t)) ? o : [])).map(e => f.default.getUser(e)).filter(g.lm).orderBy([t => null == e || e.id === t.id, e => p.Z.isFriend(e.id)], ["desc", "desc"]).value()
  }
  return {
    currentUser: i,
    host: e,
    party: l
  }
})(_)