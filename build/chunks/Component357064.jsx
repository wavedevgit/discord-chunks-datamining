/** Chunk was on 97492 **/
/** chunk id: 357064, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk442433 = require("./442433.js"),
  Chunk513461 = require("./513461.js"),
  Chunk212455 = require("./212455.js"),
  Chunk967198 = require("./967198.js"),
  Chunk531685 = require("./531685.js"),
  Chunk330465 = require("./330465.jsx"),
  Chunk65611 = require("./65611.jsx"),
  Chunk652215 = require("./652215.js");

function p(e, t) {
  (0, i.L3)(e, async () => {
    let {
      default: e
    } = await n.e("49056").then(n.bind(n, 97187));
    return n => {
      var l, i;
      return (0, r.jsx)(e, (l = function(e) {
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
      }({}, n), i = i = {
        guild: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
      }), l))
    }
  })
}

function h(e) {
  let {
    guildNode: t
  } = e, n = t.id, i = (0, l.bG)([s.A], () => s.A.getRequest(n)), h = (0, l.bG)([s.A], () => s.A.getJoinRequestGuild(n), [n]), b = (0, l.bG)([c.A], () => c.A.isFocused()), g = (0, l.bG)([o.A], () => o.A.getGuildId());
  return null == h ? null : (0, r.jsx)(u.A, {
    guildNode: t,
    guild: h,
    animatable: b,
    draggable: false,
    selected: n === g,
    preloadOnClick: false,
    contextMenu: p,
    lowerBadge: (null == i ? true : i.applicationStatus) === a.B5.REJECTED ? (0, d.eW)({
      guildJoinRequestStatus: i.applicationStatus
    }) : true,
    route: f.BVt.GUILD_MEMBER_VERIFICATION(n)
  })
}