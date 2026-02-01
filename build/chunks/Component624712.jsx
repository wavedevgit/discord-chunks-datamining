/** Chunk was on 21738 **/
/** chunk id: 624712, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk562465 = require("./562465.js"),
  Chunk451988 = require("./451988.js"),
  Chunk397927 = require("./397927.js"),
  Chunk339048 = require("./339048.js"),
  Chunk10716 = require("./10716.js"),
  Chunk587895 = require("./587895.js"),
  Chunk287809 = require("./287809.js"),
  Chunk469778 = require("./469778.js"),
  Chunk147964 = require("./147964.js"),
  Chunk927813 = require("./927813.js"),
  Chunk837921 = require("./837921.js"),
  Chunk636401 = require("./636401.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");

function _(e) {
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
}

function b(e, t) {
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
}
let E = 10 * Chunk927813.A.Millis.SECOND,
  O = {
    [Chunk652215.e$_.VALIDATE_APPLICATION]: {
      scope: Chunk613057.hj,
      handler(e) {
        let {
          socket: t
        } = e, i = t.application.id;
        try {
          var o;
          let e;
          if (null == i) throw new m.A({
            errorCode: A.Lw6.INVALID_COMMAND
          }, "No application.");
          let t = c.A.getApplication(i);
          if (null == t) throw new m.A({
            errorCode: A.Lw6.INVALID_ENTITLEMENT
          }, "SKU does not exist.");
          let n = t.primarySkuId;
          if (null == n) throw new m.A({
            errorCode: A.Lw6.INVALID_ENTITLEMENT
          }, "SKU does not exist.");
          return Promise.race([(o = t.id, e = d.A.isEntitledToSku(u.default.getCurrentUser(), n, o), null != e ? Promise.resolve(e) : (0, s.LM)(o).then(() => true === d.A.isEntitledToSku(u.default.getCurrentUser(), n, o))).then(e => {
            if (!e) throw new m.A({
              errorCode: A.Lw6.INVALID_ENTITLEMENT
            }, "User does not have entitlement.")
          }), (0, l.BK)(E).then(() => {
            throw new m.A({
              errorCode: A.Lw6.INVALID_ENTITLEMENT
            }, "Timed out fetching entitlement.")
          })])
        } catch (e) {
          throw e.code === A.Lw6.INVALID_ENTITLEMENT && (g.Ay.focus(null, true), (0, a.mMO)(async () => {
            let {
              default: e
            } = await n.e("26766").then(n.bind(n, 448701));
            return t => (0, r.jsx)(e, b(_({}, t), {
              applicationId: i
            }))
          })), e
        }
      }
    },
    [Chunk652215.e$_.GET_ENTITLEMENT_TICKET]: {
      scope: Chunk613057.hj,
      handler(e) {
        let {
          socket: t
        } = e, l = t.application.id;
        if (null == l) throw new m.A({
          errorCode: A.Lw6.INVALID_COMMAND
        }, "No application.");
        return i.Bo.post({
          url: A.Rsh.ENTITLEMENT_TICKET(l),
          body: {
            test_mode: p.A.inTestModeForApplication(l) || o.A.inDevModeForApplication(l)
          },
          retries: 3,
          oldFormErrors: true,
          rejectWithError: false
        }).then(e => {
          let {
            body: t
          } = e;
          return t
        }).catch(e => {
          throw g.Ay.focus(null, true), (0, a.mMO)(async () => {
            let {
              default: e
            } = await n.e("26766").then(n.bind(n, 448701));
            return t => (0, r.jsx)(e, b(_({}, t), {
              applicationId: l
            }))
          }), e
        })
      }
    }
  }