/** Chunk was on 1272 **/
/** chunk id: 149788, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk322665 = require("./322665.js"),
  Chunk17845 = require("./17845.jsx"),
  Chunk374939 = require("./374939.js"),
  Chunk283293 = require("./283293.js"),
  Chunk469988 = require("./469988.js"),
  Chunk526383 = require("./526383.js"),
  Chunk294330 = require("./294330.js"),
  Chunk388032 = require("./388032.js"),
  Chunk849781 = require("./849781.js"),
  Chunk795576 = require("./795576.js");
let b = function(e) {
  let {
    onScroll: t
  } = e, n = (0, p.Z)(), b = i.useMemo(() => n.map(e => {
    var t, n;
    return t = function(e) {
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
    }({}, e), n = n = {
      presenceCount: true,
      memberCount: true,
      premiumSubscriptionCount: true,
      emojis: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t
  }), [n]);
  return <u.Z onScroll={t}>{<s.Z title={h.intl.string(h.t.X5xPlZ)} description={h.intl.string(h.t["F/IQCA"])}><o.Z /></s.Z>}{<c.Z>{n.length > 0 ? <r.Fragment>{<l.X6q className={g.sectionTitle} variant={"heading-lg/semibold"} color={"header-primary"}>{h.intl.string(h.t["2DfZIS"])}</l.X6q>}{<div className={g.content}>{b.map(e => <f.VD guild={e} onClick={() => a.Z.transitionToGuildSync(e.id)} />)}{<d.Z hasHub={true} />}</div>}</r.Fragment> : <div className={g.content}><d.Z hasHub={false} /></div>}{<div className={m.divider} />}{<div className={m.disclaimer}>{<l.Text className={m.text} variant={"text-sm/medium"} color={"header-secondary"}>{h.intl.string(h.t.O1k9XV)}{" "}</l.Text>}{<l.Text className={m.text} variant={"text-sm/medium"} color={"header-secondary"}>{h.intl.string(h.t.FV5dvr)}</l.Text>}</div>}</c.Z>}</u.Z>
}