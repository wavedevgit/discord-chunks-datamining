/** Chunk was on 51235 **/
/** chunk id: 588275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk239091 = require("./239091.js"),
  Chunk246364 = require("./246364.js"),
  Chunk937111 = require("./937111.js"),
  Chunk914010 = require("./914010.js"),
  Chunk451478 = require("./451478.js"),
  Chunk325257 = require("./325257.jsx"),
  Chunk674552 = require("./674552.jsx"),
  Chunk981631 = require("./981631.js");

function h(e, t) {
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

function p(e) {
  let {
    guildNode: t
  } = e, n = t.id, l = (0, i.e7)([o.Z], () => o.Z.getRequest(n)), p = (0, i.e7)([o.Z], () => o.Z.getJoinRequestGuild(n), [n]), g = (0, i.e7)([c.Z], () => c.Z.isFocused()), b = (0, i.e7)([s.Z], () => s.Z.getGuildId());
  return null == p ? null : (0, r.jsx)(u.Z, {
    guildNode: t,
    guild: p,
    animatable: g,
    draggable: false,
    selected: n === b,
    preloadOnClick: false,
    contextMenu: h,
    lowerBadge: (null == l ? true : l.applicationStatus) === a.wB.REJECTED ? (0, d.jt)({
      guildJoinRequestStatus: l.applicationStatus
    }) : true,
    route: f.Z5c.GUILD_MEMBER_VERIFICATION(n)
  })
}