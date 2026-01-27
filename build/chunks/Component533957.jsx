/** Chunk was on 67596 **/
/** chunk id: 533957, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e, t) {
  let u = (0, c.bG)([o.A], () => o.A.can(l.xBc.MANAGE_CHANNELS, e), [e]);
  return __OVERLAY__ || !u ? null : (0, r.jsx)(i.Drp, {
    id: "clone-channel",
    label: a.intl.string(a.t.dEaPc4),
    action: () => (0, i.mMO)(async () => {
      let {
        default: c
      } = await Promise.all([n.e("72271"), n.e("64233"), n.e("29592")]).then(n.bind(n, 409200));
      return n => {
        var i, o;
        return (0, r.jsx)(c, (i = function(e) {
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
        }({}, n), o = o = {
          channelType: e.type,
          guildId: t.id,
          categoryId: e.parent_id,
          cloneChannelId: e.id
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
        }), i))
      }
    })
  })
}