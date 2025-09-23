/** Chunk was on 33358 **/
/** chunk id: 217314, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk7284 = require("./7284.js"),
  Chunk210975 = require("./210975.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk161655 = require("./161655.js");

function g(e) {
  let t = e.channel.getRecipientId(),
    n = e.channel.isSystemDM(),
    g = (0, i.e7)([u.default], () => u.default.getUser(t)),
    m = (0, i.e7)([s.Z], () => s.Z.getStatus(t)),
    b = (0, i.e7)([s.Z], () => s.Z.isMobileOnline(t)),
    O = (0, i.e7)([c.Z], () => c.Z.getNickname(t)),
    y = d.ZP.useUserTag(g),
    _ = (0, o.j)({
      displayNameStyles: null == g ? true : g.displayNameStyles
    }),
    v = (0, a.m$)({
      channelId: e.channel.id
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.nn4, {
      children: f.intl.string(f.t.EJRzg4)
    }), null != g && !n && (0, r.jsx)("div", {
      children: (0, r.jsx)(l.qEK, {
        status: m,
        isMobile: b,
        className: h.avatar,
        size: l.EFr.SIZE_20,
        "aria-label": d.ZP.getName(g),
        src: g.getAvatarURL(true, 20)
      })
    }), (0, r.jsx)(p.Z.Title, {
      level: e.level,
      onClick: e.handleClick,
      onContextMenu: e.handleContextMenu,
      className: null != e.handleClick ? h.cursorPointer : null,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.DY3, {
          text: y,
          position: "bottom",
          className: _,
          children: null != O ? O : d.ZP.getName(g)
        }), v && (0, r.jsx)(l.ua7, {
          text: f.intl.string(f.t.QyZ4TU),
          children: e => {
            var t, n;
            return (0, r.jsx)(l.tQf, (t = function(e) {
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
              size: "xs",
              "aria-label": f.intl.string(f.t.VHXh8f),
              color: l.TVs.colors.INTERACTIVE_NORMAL,
              className: h.secureFramesIcon
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
      })
    })]
  })
}