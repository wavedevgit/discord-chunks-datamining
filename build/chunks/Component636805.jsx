/** Chunk was on 21738 **/
/** chunk id: 636805, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk826673 = require("./826673.js"),
  Chunk367727 = require("./367727.js"),
  Chunk498642 = require("./498642.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk853742 = require("./853742.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js");
class g extends Chunk272355.A {
  _initialize() {
    a.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect)
  }
  _terminate() {
    a.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect)
  }
  handleChannelSelect(e) {
    var t;
    let a, s, g, m, b, {
      guildId: _
    } = e;
    if (null == _ || (s = !!(null == (a = d.A.getGuild(_)) ? true : a.features.has(h.GuildFeatures.COMMUNITY)), g = p.A.can(h.xBc.MANAGE_CHANNELS, a), m = (0, o.k8)(i.M.FORUM_CHANNEL_UPSELL_MODAL), b = null != (t = u.A.getMemberCount(_)) ? t : 0, !s || !g || m || !(b >= 200))) return;
    (0, f.zd)(), (0, c.Vh)(i.M.FORUM_CHANNEL_UPSELL_MODAL);
    let E = function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : A.i.DISMISS;
      (0, o.Dr)(i.M.FORUM_CHANNEL_UPSELL_MODAL, {
        dismissAction: e
      })
    };
    (0, l.mMO)(async () => {
      let {
        default: e
      } = await n.e("7937").then(n.bind(n, 420472));
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
          onClose: e => {
            E(e), t.onClose()
          },
          guildId: _,
          shouldUpsellCreation: true
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
    }, {
      onCloseCallback: () => (0, o.Dr)(i.M.FORUM_CHANNEL_UPSELL_MODAL, {
        dismissAction: A.i.DISMISS
      }),
      onCloseRequest: h.FXj
    })
  }
}
let m = new g