/** Chunk was on 1272 **/
/** chunk id: 702456, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk663701 = require("./663701.jsx"),
  Chunk752048 = require("./752048.js"),
  Chunk518950 = require("./518950.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk399521 = require("./399521.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk944658 = require("./944658.js");

function b(e) {
  var t, n;
  let {
    user: o,
    isLast: s,
    isFirst: d
  } = e, p = (0, i.e7)([u.Z], () => u.Z.getStatus(o.id)), {
    avatarSrc: f,
    eventHandlers: h
  } = (0, c.Z)({
    userId: o.id,
    size: l.EFr.SIZE_32,
    animateOnHover: true
  }), b = async () => {
    await a.Z.openPrivateChannel({
      recipientIds: [o.id],
      location: "frequent_friends_row"
    })
  }, _ = d ? l.YqE : s ? l.ANZ : true, O = d ? g.intl.string(g.t.aI4VOD) : s ? g.intl.string(g.t.kABl29) : true;
  return (0, r.jsx)(l.P3F, {
    className: m.frequentFriendAvatarButton,
    onClick: b,
    onMouseEnter: h.onMouseEnter,
    onMouseLeave: h.onMouseLeave,
    "aria-label": g.intl.formatToPlainString(g.t.M5FjCg, {
      username: o.username
    }),
    children: (0, r.jsx)(l.qEK, {
      src: f,
      "aria-label": null != (t = o.globalName) ? t : o.username,
      status: p,
      size: l.EFr.SIZE_32,
      CutoutIcon: _,
      cutoutIconName: d ? "FireIcon" : s ? "TimerIcon" : true,
      avatarTooltipText: O,
      statusTooltip: true,
      statusTooltipDelay: 50,
      avatarTooltipTitle: null != (n = o.globalName) ? n : o.username
    })
  })
}

function _() {
  let {
    enabled: e
  } = (0, Chunk399521.Q)("frequent_friends_row"), t = function() {
    let e = (0, Chunk442837.Wu)([Chunk752048.Z, Chunk594174.default, Chunk699516.Z], () => {
      let e = [...Chunk752048.Z.getUserAffinities()].sort((e, t) => s.Z.compare(e.otherUserId, t.otherUserId)).map(e => e.otherUserId),
        t = [];
      for (let n of module)
        if (exports.length < 5) {
          let e = Chunk594174.default.getUser(require);
          !(0, Chunk823379.lm)(module) || Chunk699516.Z.isIgnored(module.id) || Chunk699516.Z.isBlocked(module.id) || exports.push(module)
        } else break;
      return exports
    });
    return module.length < 5 ? null : module
  }();
  return module && null != exports ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk944658.frequentFriendsRow,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk944658.frequentFriendsHeader,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          className: Chunk944658.frequentFriendsTitle,
          children: Chunk388032.intl.string(Chunk388032.t.QEh90N)
        }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
          text: Chunk388032.intl.string(Chunk388032.t.tqCMcX),
          children: e => {
            var t, n;
            return (0, r.jsx)(l.d3s, (t = function(e) {
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
              className: m.frequentFriendsInfoIcon
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
          }
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.u2D, {
        className: Chunk944658.frequentFriendsAvatars,
        orientation: "horizontal",
        children: exports.map((e, n) => (0, r.jsx)(b, {
          user: e,
          isLast: n === t.length - 1,
          isFirst: 0 === n
        }, e.id))
      })]
    }), (0, Chunk951288.jsx)(Chunk663701.d, {})]
  }) : null
}