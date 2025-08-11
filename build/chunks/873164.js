/** Chunk was on 67544 **/
/** chunk id: 873164, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk120421 = require("./120421.js"),
  Chunk477839 = require("./477839.js"),
  Chunk981631 = require("./981631.js"),
  Chunk603571 = require("./603571.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class p extends Chunk317770.Z {
  _initialize() {
    this.loaded = true, this.startingTime = Date.now(), Chunk120421.Z.addChangeListener(this._onStoreChange)
  }
  _terminate() {
    this.loaded = false, Chunk120421.Z.removeChangeListener(this._onStoreChange), Chunk570140.Z.dispatch({
      type: "LOCAL_ACTIVITY_UPDATE",
      socketId: "clicker-game",
      activity: true
    })
  }
  constructor(...e) {
    super(...e), f(this, "startingTime", 0), f(this, "loaded", false), f(this, "_onStoreChange", s().debounce(() => {
      if (!this.loaded) return;
      let e = {
        application_id: c.bO,
        type: l.IIU.PLAYING,
        name: d.intl.string(u.default["7qZdOz"]),
        details: d.intl.formatToPlainString(u.default["A3tW/f"], {
          total: Math.round(i.Z.lifetimePoints)
        }),
        state: function(e) {
          if (null == e) return d.intl.string(u.default.HXxY0N);
          if ("purchase-item" === e.type) return d.intl.formatToPlainString(u.default.QfiQys, {
            name: (0, c.w2)()[e.id].name
          });
          if ("purchase-item-upgrade" === e.type) {
            let t = (0, c.r7)()[e.id],
              n = i.Z.getNumPurchasesForItemUpgrade(t.itemId, e.id),
              r = "string" == typeof t.name ? t.name : d.intl.formatToPlainString(t.name, {
                numPurchasing: n
              });
            return d.intl.formatToPlainString(u.default.GJwbPj, {
              name: r
            })
          }
          return "unlock-achievement" === e.type ? d.intl.formatToPlainString(u.default.hUterq, {
            name: (0, c.EC)()[e.id].name
          }) : d.intl.string(u.default.HXxY0N)
        }(i.Z.getLastAction()),
        timestamps: {
          start: this.startingTime
        }
      };
      o.Z.dispatch({
        type: "LOCAL_ACTIVITY_UPDATE",
        socketId: "clicker-game",
        activity: e
      })
    }, 5e3, {
      maxWait: 5e3
    }))
  }
}
let m = new p