/** Chunk was on 22988 **/
/** chunk id: 55889, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk941524 = require("./941524.js"),
  Chunk563115 = require("./563115.js"),
  Chunk388032 = require("./388032.js"),
  Chunk85761 = require("./85761.js");

function d(e) {
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

function u(e, t) {
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
let m = Chunk73800.memo(function(e) {
  let {
    rule: t,
    onlyRoles: n = false,
    onChangeRule: i
  } = e, m = <a.Z guildId={t.guildId} selectedChannelIds={t.exemptChannels} selectedRoleIds={t.exemptRoles} onChange={(e, n) => i(u(d({}, t), {
      exemptChannels: e,
      exemptRoles: n
    }))} disableEveryoneRole={true} includeRoleRestrictedPrivateChannels={true} />;
  return n && (m = <s.Z guildId={t.guildId} selectedRoleIds={t.exemptRoles} onChange={e => i(u(d({}, t), {
      exemptRoles: e
    }))} placeholder={o.intl.string(o.t.aFO1Iy)} disableEveryoneRole={true} />), <l.xJW>{m}{<l.Text color={"header-secondary"} variant={"text-xs/normal"} className={c.exemptionHint}>{o.intl.string(o.t.GKlYaW)}</l.Text>}</l.xJW>
})