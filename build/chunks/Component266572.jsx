/** Chunk was on 1272 **/
/** chunk id: 266572, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk544891 = require("./544891.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk496929 = require("./496929.js"),
  Chunk115130 = require("./115130.js"),
  Chunk812206 = require("./812206.js"),
  Chunk594174 = require("./594174.js"),
  Chunk580130 = require("./580130.js"),
  Chunk695103 = require("./695103.js"),
  Chunk70956 = require("./70956.js"),
  Chunk998502 = require("./998502.js"),
  Chunk996106 = require("./996106.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");

function b(e) {
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

function E(e, t) {
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
let O = 10 * Chunk70956.Z.Millis.SECOND,
  y = {
    [Chunk981631.Etm.VALIDATE_APPLICATION]: {
      scope: Chunk186901.lH,
      handler(e) {
        let {
          socket: t
        } = e, i = t.application.id;
        try {
          if (null == i) throw new g.Z({
            errorCode: _.lTL.INVALID_COMMAND
          }, "No application.");
          let e = c.Z.getApplication(i);
          if (null == e) throw new g.Z({
            errorCode: _.lTL.INVALID_ENTITLEMENT
          }, "SKU does not exist.");
          let t = e.primarySkuId;
          if (null == t) throw new g.Z({
            errorCode: _.lTL.INVALID_ENTITLEMENT
          }, "SKU does not exist.");
          return Promise.race([(function(e, t) {
            let n = d.Z.isEntitledToSku(u.default.getCurrentUser(), e, t);
            return null != n ? Promise.resolve(n) : (0, s.yD)(t).then(() => true === d.Z.isEntitledToSku(u.default.getCurrentUser(), e, t))
          })(t, e.id).then(e => {
            if (!e) throw new g.Z({
              errorCode: _.lTL.INVALID_ENTITLEMENT
            }, "User does not have entitlement.")
          }), (0, l.GR)(O).then(() => {
            throw new g.Z({
              errorCode: _.lTL.INVALID_ENTITLEMENT
            }, "Timed out fetching entitlement.")
          })])
        } catch (e) {
          throw e.code === _.lTL.INVALID_ENTITLEMENT && (h.ZP.focus(null, true), (0, a.ZDy)(async () => {
            let {
              default: e
            } = await n.e("48748").then(n.bind(n, 52004));
            return t => (0, r.jsx)(e, E(b({}, t), {
              applicationId: i
            }))
          })), e
        }
      }
    },
    [Chunk981631.Etm.GET_ENTITLEMENT_TICKET]: {
      scope: Chunk186901.lH,
      handler(e) {
        let {
          socket: t
        } = e, l = t.application.id;
        if (null == l) throw new g.Z({
          errorCode: _.lTL.INVALID_COMMAND
        }, "No application.");
        return i.tn.post({
          url: _.ANM.ENTITLEMENT_TICKET(l),
          body: {
            test_mode: p.Z.inTestModeForApplication(l) || o.Z.inDevModeForApplication(l)
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
          throw h.ZP.focus(null, true), (0, a.ZDy)(async () => {
            let {
              default: e
            } = await n.e("48748").then(n.bind(n, 52004));
            return t => (0, r.jsx)(e, E(b({}, t), {
              applicationId: l
            }))
          }), e
        })
      }
    }
  }