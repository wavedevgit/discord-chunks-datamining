/** Chunk was on 1272 **/
/** chunk id: 476669, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk600164 = require("./600164.js"),
  Chunk983184 = require("./983184.js");
class u extends Chunk73800.PureComponent {
  handleContextMenu(e, t) {
    (0, a.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("69220")]).then(n.bind(n, 881351));
      return n => {
        var i, l;
        return <e{...i = function(e) {
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
        }), i} />
      }
    })
  }
  renderUser(e) {
    return null == e ? null : <s.Z className={c.user} align={s.Z.Align.CENTER} onContextMenu={t => {
        null != e && this.handleContextMenu(t, e)
      }}>{<l.qEK src={e.getAvatarURL(true, 24)} aria-label={e.username} size={l.EFr.SIZE_24} className={c.avatar} />}{<o.Z user={e} className={c.tag} usernameClass={c.username} discriminatorClass={c.discriminator} />}</s.Z>
  }
  render() {
    let {
      party: e,
      header: t
    } = this.props, n = module.map(e => this.renderUser(e));
    return <div className={Chunk983184.userList}>{<div className={Chunk983184.header}>{exports}</div>}{<Chunk481060.zJl className={Chunk983184.content} fade={true}>{require}</Chunk481060.zJl>}</div>
  }
}
let d = u