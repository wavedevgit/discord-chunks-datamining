/** Chunk was on 1272 **/
/** chunk id: 750995, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk228392 = require("./228392.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js");
class m extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("CHANNEL_SELECT", this.handleChannelSelect)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect)
  }
  handleChannelSelect(e) {
    let {
      guildId: t
    } = e;
    if (null == t || !(e => {
        var t;
        let n = d.Z.getGuild(e),
          r = !!(null == n ? true : n.features.has(g.GuildFeatures.COMMUNITY)),
          l = p.Z.can(g.Plq.MANAGE_CHANNELS, n),
          a = (0, o.zu)(i.z.FORUM_CHANNEL_UPSELL_MODAL),
          s = null != (t = u.Z.getMemberCount(e)) ? t : 0;
        return r && l && !a && s >= 200
      })(t)) return;
    (0, f.qz)(), (0, c.kk)(i.z.FORUM_CHANNEL_UPSELL_MODAL);
    let a = function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : h.L.DISMISS;
      (0, o.Q3)(i.z.FORUM_CHANNEL_UPSELL_MODAL, {
        dismissAction: e
      })
    };
    (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("18417").then(n.bind(n, 740696));
      return n => {
        var i, l;
        return (0, r.jsx)(e, (i = function(e) {
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
        }({}, n), l = l = {
          onClose: e => {
            a(e), n.onClose()
          },
          guildId: t,
          shouldUpsellCreation: true
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
    }, {
      onCloseCallback: () => (0, o.Q3)(i.z.FORUM_CHANNEL_UPSELL_MODAL, {
        dismissAction: h.L.DISMISS
      }),
      onCloseRequest: g.VqG
    })
  }
}
let b = new m