/** Chunk was on 65354 **/
/** chunk id: 588275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk239091 = require("./239091.js"),
  Chunk246364 = require("./246364.js"),
  Chunk937111 = require("./937111.js"),
  Chunk914010 = require("./914010.js"),
  Chunk451478 = require("./451478.js"),
  Chunk325257 = require("./325257.jsx"),
  Chunk674552 = require("./674552.jsx"),
  Chunk981631 = require("./981631.js");

function f(e, t) {
  (0, l.jW)(e, async () => {
    let {
      default: e
    } = await n.e("6368").then(n.bind(n, 987999));
    return n => {
      var i, l;
      return (0, r.jsx)(e, (i = function(e) {
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
        guild: t
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

function h(e) {
  let {
    guildNode: t
  } = e, n = t.id, l = (0, i.e7)([a.Z], () => a.Z.getRequest(n)), h = (0, i.e7)([a.Z], () => a.Z.getJoinRequestGuild(n), [n]), g = (0, i.e7)([c.Z], () => c.Z.isFocused()), m = (0, i.e7)([s.Z], () => s.Z.getGuildId());
  return null == h ? null : (0, r.jsx)(u.Z, {
    guildNode: t,
    guild: h,
    animatable: g,
    draggable: false,
    selected: n === m,
    preloadOnClick: false,
    contextMenu: f,
    lowerBadge: (null == l ? true : l.applicationStatus) === o.wB.REJECTED ? (0, d.jt)({
      guildJoinRequestStatus: l.applicationStatus
    }) : true,
    route: p.Z5c.GUILD_MEMBER_VERIFICATION(n)
  })
}