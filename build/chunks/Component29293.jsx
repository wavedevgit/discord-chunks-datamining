/** Chunk was on 91042 **/
/** chunk id: 29293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk994500 = require("./994500.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let {
    user: t,
    onAction: s,
    appContext: d
  } = e, u = t.id, [c, A] = (0, r.yK)([a.A], () => {
    var e;
    return [a.A.isFriend(u), null != (e = a.A.getNickname(u)) ? e : null]
  }, [u]);
  if (!c) return null;
  let b = null == A ? o.intl.string(o.t.BGYkaH) : o.intl.string(o.t["8pOYUE"]);
  return (0, l.jsx)(i.Drp, {
    id: null == A ? "add-friend-nickname" : "edit-friend-nickname",
    label: b,
    action: () => {
      null == s || s(), (0, i.mMO)(async () => {
        let {
          default: e
        } = await n.e("59139").then(n.bind(n, 609422));
        return n => (0, l.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({
          user: t,
          nickname: A
        }, n))
      }, {
        contextKey: null != d ? (0, i.TId)(d) : true
      })
    }
  })
}