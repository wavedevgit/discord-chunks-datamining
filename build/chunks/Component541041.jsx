/** Chunk was on 21738 **/
/** chunk id: 541041, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk64983 = require("./64983.jsx"),
  Chunk509536 = require("./509536.jsx"),
  Chunk498642 = require("./498642.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk98100 = require("./98100.js");
class f extends Chunk64700.PureComponent {
  render() {
    let {
      guild: e,
      memberCount: t,
      markAsDismissed: n
    } = this.props;
    return (0, r.jsx)(a.A, {
      guild: e,
      onDismissed: () => n(u.i.UNKNOWN),
      onClick: this.handleButtonClick,
      message: null == t || t < 30 ? d.intl.string(d.t.hlitVQ) : d.intl.string(d.t.XHtaDD),
      cta: d.intl.string(d.t["vqb+H1"]),
      trackingSource: c.kZU.GUILD_SUBSCRIPTION_NOTICE,
      type: c.n5X.GUILD_BOOSTING,
      image: p,
      imageMarginX: 26
    })
  }
  constructor(...e) {
    super(...e),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "handleButtonClick", () => {
        let {
          guild: e
        } = this.props;
        (0, s.K)({
          guildId: e.id,
          location: {
            section: c.JJy.CHANNEL_NOTICE,
            object: c.ZSU.SERVER_STATUS_CTA
          }
        })
      })
  }
}
let h = Chunk311907.Ay.connectStores([Chunk498642.A], e => {
  let {
    guild: t
  } = e;
  return {
    memberCount: o.A.getMemberCount(t.id)
  }
})(f)