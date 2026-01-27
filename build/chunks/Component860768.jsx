/** Chunk was on 21738 **/
/** chunk id: 860768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk309010 = require("./309010.js"),
  Chunk64983 = require("./64983.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk988726 = require("./988726.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class g extends Chunk64700.PureComponent {
  render() {
    let e = "".concat(d.intl.string(d.t.VWqWZQ), "\n").concat(d.intl.string(d.t["0Lgb/K"]));
    return (0, r.jsx)(o.A, {
      guild: this.props.guild,
      onDismissed: this.handleClose,
      onClick: this.handleInvite,
      message: e,
      cta: d.intl.string(d.t.Sd8Ixw),
      trackingSource: c.kZU.INVITE_NOTICE,
      type: c.n5X.INVITE,
      image: p,
      imageMarginX: 46
    })
  }
  constructor(...e) {
    super(...e), h(this, "handleInvite", () => {
      let {
        guild: e
      } = this.props;
      (0, l.mMO)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("43600"), n.e("42821")]).then(n.bind(n, 234355));
        return n => {
          var i, l;
          return (0, r.jsx)(t, (i = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                h(e, t, n[t])
              })
            }
            return e
          }({}, n), l = l = {
            guild: e,
            source: c.PE1.INVITE_NOTICE
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
    }), h(this, "handleClose", () => {
      let e = s.A.getChannelId(),
        t = d.intl.formatToPlainString(d.t.DEn7nu, {
          invitePeople: d.intl.string(d.t.Sd8Ixw)
        });
      this.props.markAsDismissed(u.i.UNKNOWN), null != e && a.A.sendBotMessage(e, t)
    })
  }
}
let f = g