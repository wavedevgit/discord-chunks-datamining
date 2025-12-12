/** Chunk was on 1272 **/
/** chunk id: 617899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk944486 = require("./944486.js"),
  Chunk82950 = require("./82950.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk589148 = require("./589148.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class g extends Chunk473749.PureComponent {
  render() {
    let e = "".concat(Chunk388032.intl.string(Chunk388032.t.VWqWZQ), "\n").concat(Chunk388032.intl.string(Chunk388032.t["0Lgb/K"]));
    return (0, Chunk54381.jsx)(Chunk82950.Z, {
      guild: this.props.guild,
      onDismissed: this.handleClose,
      onClick: this.handleInvite,
      message: module,
      cta: Chunk388032.intl.string(Chunk388032.t.Sd8Ixw),
      trackingSource: Chunk981631.PsQ.INVITE_NOTICE,
      type: Chunk981631.vID.INVITE,
      image: Chunk589148,
      imageMarginX: 46
    })
  }
  constructor(...e) {
    super(...e), f(this, "handleInvite", () => {
      let {
        guild: e
      } = this.props;
      (0, l.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("7654"), n.e("45965")]).then(n.bind(n, 560114));
        return n => (0, r.jsx)(t, function(e, t) {
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
              f(e, t, n[t])
            })
          }
          return e
        }({}, n), {
          guild: e,
          source: c.t4x.INVITE_NOTICE
        }))
      })
    }), f(this, "handleClose", () => {
      let e = s.Z.getChannelId(),
        t = d.intl.formatToPlainString(d.t.DEn7nu, {
          invitePeople: d.intl.string(d.t.Sd8Ixw)
        });
      this.props.markAsDismissed(u.L.UNKNOWN), null != e && a.Z.sendBotMessage(e, t)
    })
  }
}
let h = g