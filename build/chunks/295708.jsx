/** Chunk was on 22988 **/
/** chunk id: 295708, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk273504 = require("./273504.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk957270 = require("./957270.js"),
  Chunk282338 = require("./282338.js");

function m(e) {
  let {
    rule: t,
    onChangeRule: n
  } = e, [m, g] = i.useState(t.name);
  return <a.xJW>{<a.Text className={u.triggerHeader} variant={"text-sm/semibold"}>{c.intl.string(c.t.WVAHxM)}</a.Text>}{<l.Is className={d.ruleNameInput} onChange={e => {
        var r, i;
        g(e), n((r = function(e) {
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
          name: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
        }), r))
      }} onClick={e => e.stopPropagation()} onKeyPress={e => {
        e.which === o.yXg.SPACE && e.stopPropagation()
      }} placeholder={c.intl.string(c.t["5AO43N"])} maxLength={s.OU} value={m} />}</a.xJW>
}