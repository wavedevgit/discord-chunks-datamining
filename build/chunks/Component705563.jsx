/** Chunk was on 21616 **/
/** chunk id: 705563, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk709054 = require("./709054.js"),
  Chunk826581 = require("./826581.js"),
  Chunk246364 = require("./246364.js"),
  Chunk360328 = require("./360328.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk482722 = require("./482722.js");

function y(e) {
  let {
    channelId: t,
    showProfile: n = false,
    showTrailingDivider: y = false
  } = e, C = d.default.cast(t), {
    joinRequest: _,
    isModmin: v,
    guildId: x,
    maxMembers: O
  } = (0, i.cj)([p.Z, c.Z, u.Z], () => {
    let e = p.Z.getRequest(C),
      t = c.Z.getGuild(null == e ? true : e.guildId);
    return {
      joinRequest: e,
      isModmin: null != t && u.Z.can(m.Plq.KICK_MEMBERS, t),
      guildId: null == t ? true : t.id,
      maxMembers: null == t ? true : t.maxMembers
    }
  }), j = (0, i.e7)([s.Z], () => null != x ? s.Z.getMemberCount(x) : 0), E = null != O && (null != j ? j : 0) >= O, {
    approveRequest: S,
    rejectRequest: P,
    submitting: I
  } = (0, f.s)(null == _ ? true : _.guildId, null == _ ? true : _.userId, null == _ ? true : _.joinRequestId);
  return null != _ && _.applicationStatus === h.wB.SUBMITTED && v ? (0, r.jsxs)("div", {
    className: b.buttons,
    children: [(0, r.jsx)(l.ua7, {
      text: g.intl.string(g.t.cdPGbG),
      shouldShow: E,
      children: e => {
        var t, n;
        return (0, r.jsx)(l.zxk, (t = function(e) {
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
        }({
          variant: "active",
          size: "sm",
          text: g.intl.string(g.t.BzjDQE)
        }, e), n = n = {
          loading: I,
          onClick: S,
          disabled: E
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
    }), (0, r.jsx)(l.zxk, {
      variant: "critical-primary",
      size: "sm",
      text: g.intl.string(g.t.hDtbs7),
      onClick: P,
      disabled: I || _.applicationStatus !== h.wB.SUBMITTED
    }), n && (0, r.jsx)(l.zxk, {
      onClick: () => {
        (0, o.openUserProfileModal)({
          userId: _.userId,
          guildId: _.guildId
        })
      },
      variant: "secondary",
      size: "sm",
      text: g.intl.string(g.t.iXAna2)
    }), y && (0, r.jsx)(a.ZP.Divider, {})]
  }) : null
}