/** Chunk was on 21738 **/
/** chunk id: 652234, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk442433 = require("./442433.js"),
  Chunk504337 = require("./504337.js"),
  Chunk655116 = require("./655116.js"),
  Chunk629016 = require("./629016.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk901133 = require("./901133.jsx"),
  Chunk507133 = require("./507133.jsx"),
  Chunk985018 = require("./985018.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class b extends Chunk64700.PureComponent {
  hasParty(e) {
    return e.length > 1
  }
  handleStopListening() {
    (0, c.A)()
  }
  render() {
    let {
      currentUser: e,
      host: t,
      party: n
    } = this.props;
    return this.hasParty(n) && null != e ? (0, r.jsx)(g.A, {
      currentUser: e,
      host: t,
      party: n,
      renderOverflowPopout: this.renderOverflowPopout,
      onStopListening: this.handleStopListening,
      onUserContextMenu: this.handleUserContextMenu
    }) : null
  }
  constructor(...e) {
    super(...e), _(this, "handleUserContextMenu", (e, t) => {
      (0, o.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22252")]).then(n.bind(n, 668569));
        return n => {
          var i, l;
          return (0, r.jsx)(e, (i = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                _(e, t, n[t])
              })
            }
            return e
          }({}, n), l = l = {
            user: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    }), _(this, "renderOverflowPopout", () => {
      let {
        party: e
      } = this.props;
      return (0, r.jsx)(m.A, {
        party: e,
        header: A.intl.formatToPlainString(A.t.I9et1z, {
          count: e.length
        })
      })
    })
  }
}
let E = Chunk311907.Ay.connectStores([Chunk655116.A, Chunk287809.default, Chunk994500.A, Chunk629016.A], () => {
  let e, t, n = u.A.getSyncingWith(),
    r = u.A.getActivity(),
    i = h.default.getCurrentUser(),
    l = [];
  if (null != n ? (e = h.default.getUser(n.userId), t = n.partyId) : null != r && null != r.party && null != r.party.id && (e = i, t = r.party.id), null != t) {
    var s;
    l = a()(Array.from(null != (s = d.A.getParty(t)) ? s : [])).map(e => h.default.getUser(e)).filter(f.Vq).orderBy([t => null == e || e.id === t.id, e => p.A.isFriend(e.id)], ["desc", "desc"]).value()
  }
  return {
    currentUser: i,
    host: e,
    party: l
  }
})(b)