/** Chunk was on 93338 **/
/** chunk id: 217314, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  Chunk97009 = require("./97009.js");

function h(e) {
  let t = e.channel.getRecipientId(),
    n = e.channel.isSystemDM(),
    h = (0, i.e7)([u.default], () => u.default.getUser(t)),
    m = (0, i.e7)([s.Z], () => s.Z.getStatus(t)),
    g = (0, i.e7)([s.Z], () => s.Z.isMobileOnline(t)),
    _ = (0, i.e7)([c.Z], () => c.Z.getNickname(t)),
    y = d.ZP.useUserTag(h),
    j = (0, a.j)({
      displayNameStyles: null == h ? true : h.displayNameStyles
    }),
    v = (0, l.m$)({
      channelId: e.channel.id
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.nn4, {
      children: p.intl.string(p.t.EJRzg4)
    }), null != h && !n && (0, r.jsx)("div", {
      children: (0, r.jsx)(o.qEK, {
        status: m,
        isMobile: g,
        className: f.avatar,
        size: o.EFr.SIZE_20,
        "aria-label": d.ZP.getName(h),
        src: h.getAvatarURL(true, 20)
      })
    }), (0, r.jsx)(b.Z.Title, {
      level: e.level,
      onClick: e.handleClick,
      onContextMenu: e.handleContextMenu,
      className: null != e.handleClick ? f.cursorPointer : null,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.DY3, {
          text: y,
          position: "bottom",
          className: j,
          children: null != _ ? _ : d.ZP.getName(h)
        }), v && (0, r.jsx)(o.ua7, {
          text: p.intl.string(p.t.QyZ4TU),
          children: e => {
            var t, n;
            return (0, r.jsx)(o.tQf, (t = function(e) {
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
              "aria-label": p.intl.string(p.t.VHXh8f),
              color: o.TVs.colors.INTERACTIVE_NORMAL,
              className: f.secureFramesIcon
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