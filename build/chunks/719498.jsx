/** Chunk was on 30019 **/
/** chunk id: 719498, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk925329 = require("./925329.js"),
  Chunk296023 = require("./296023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk821084 = require("./821084.js");
let p = e => {
  let {
    channel: t,
    application: p,
    onClose: m,
    transitionState: u
  } = e, x = (0, o.w)(t), b = a.useCallback(() => (m(), (0, i.ZDy)(async () => {
    let {
      default: e
    } = await r.e("31907").then(r.bind(r, 366854));
    return r => {
      var a, i;
      return <e{...a = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, r), i = i = {
        channelId: t.id,
        application: p
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e))
      }), a} />
    }
  })), [p, t.id, m]), j = (0, c.ZP)(t, true);
  return <i.Y0X transitionState={u} aria-label={l.intl.string(l.t.OJknho)} parentComponent={"IntegrationsEditLinkedLobbyModal"}>{<i.xBx separator={false}><i.X6q variant={"heading-lg/semibold"}>{l.intl.string(l.t.OJknho)}</i.X6q></i.xBx>}{<i.hzk className={d.content}>{<s.Z game={p} size={s.Z.Sizes.XLARGE} />}{<div className={d.metadata}>{<div className={d.metadataHeader}>{<i.Text variant={"text-md/semibold"} color={"header-primary"}>{p.name}</i.Text>}{<i.Text variant={"text-sm/normal"} color={"text-muted"}>{l.intl.format(l.t["0NJZAQ"], {
              channelName: j
            })}</i.Text>}</div>}{null != x && <n.Fragment>{<div className={d.divider} />}{<i.Text variant={"text-xs/normal"} color={"text-muted"}>{x}</i.Text>}</n.Fragment>}</div>}</i.hzk>}{<i.mzw>{<i.zxk variant={"critical-primary"} text={l.intl.string(l.t.LLWaxc)} onClick={b} />}{<div data-button-hoisted-classname-wrapper={true} className={d.cancelButton}><i.zxk variant={"secondary"} text={l.intl.string(l.t["ETE/oK"])} onClick={m} /></div>}</i.mzw>}</i.Y0X>
}