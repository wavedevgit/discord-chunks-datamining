/** Chunk was on 68535 **/
/** chunk id: 602320, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk995532 = require("./995532.js"),
  Chunk388032 = require("./388032.jsx");
let a = e => {
  var t;
  let {
    guildId: a,
    welcomeChannel: b,
    onEdit: d,
    onChannelReorder: u,
    setShowConfirmModal: p,
    index: j,
    onSelect: O
  } = e, g = (0, i.e7)([c.Z], () => c.Z.get(a)), h = (null != (t = null == g ? true : g.welcome_channels) ? t : []).length - 1, y = e => {
    u(b, e, true)
  };
  return <l.v2r navId={"welcome-settings-context"} aria-label={s.intl.string(s.t.ogxXGh)} onClose={o.Zy} onSelect={O}>{<l.kSQ>{<l.sNh id={"move-up"} label={s.intl.string(s.t["4UBqwM"])} disabled={j <= 0} action={() => y(j - 1)} />}{<l.sNh id={"move-down"} label={s.intl.string(s.t.b73Gwc)} disabled={j > h} action={() => y(j + 1)} />}</l.kSQ>}{<l.kSQ>{<l.sNh id={"edit"} label={s.intl.string(s.t.u5DUrK)} action={() => (0, l.ZDy)(async () => {
          let {
            default: e
          } = await n.e("39143").then(n.bind(n, 737868));
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
              welcomeChannel: b,
              guildId: a,
              onSave: d
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
        })} />}{<l.sNh id={"delete"} label={s.intl.string(s.t.JYBc3N)} action={() => p(true)} color={"danger"} />}</l.kSQ>}</l.v2r>
}