/** Chunk was on 75149 **/
/** chunk id: 849867, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk967198 = require("./967198.js"),
  Chunk616075 = require("./616075.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let t = (0, i.bG)([a.A], () => a.A.getGuildId()),
    u = e.type === o.rbe.GUILD_CATEGORY,
    {
      isFavoritesPerk: d
    } = (0, c.l)("useCategoryAddChannelItem");
  return !__OVERLAY__ && t === o.YYv && d && u ? (0, r.jsx)(l.Drp, {
    id: "add-channel-to-category",
    icon: l.U1e,
    label: s.intl.string(s.t["6uDHk6"]),
    action: function() {
      (0, l.mMO)(async () => {
        let {
          default: t
        } = await n.e("82220").then(n.bind(n, 889186));
        return n => {
          var i, l;
          return (0, r.jsx)(t, (i = function(e) {
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
            parentId: e.id
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    }
  }) : null
}