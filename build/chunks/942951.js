/** Chunk was on 36371 **/
"use strict";
n.d(t, {
  l: () => b
});
var r = n(200651),
  o = n(192379),
  i = n(481060),
  l = n(100527),
  u = n(906732),
  a = n(184301),
  s = n(347475),
  c = n(592125),
  d = n(91047);

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    user: t,
    channelId: n,
    guildId: b,
    messageId: v,
    stopPropagation: O = !1,
    ariaLabel: g
  } = e, {
    analyticsLocations: y
  } = (0, u.ZP)(l.Z.USERNAME), m = o.useCallback(e => {
    let r = c.Z.getChannel(n);
    null != r && null != t && (0, d.Pv)(e, t, r)
  }, [t, n]);
  return o.useCallback(e => (o, l) => {
    let c = t => (0, r.jsx)(i.rz2, p(f({}, null != t ? t : {}), {
        onContextMenu: m,
        name: o,
        color: null == e ? void 0 : e.colorString,
        roleName: null == e ? void 0 : e.colorRoleName,
        "aria-label": g
      })),
      d = e => t => {
        O && t.stopPropagation(), e(t)
      };
    return (0, r.jsx)(u.Gt, {
      value: y,
      children: null != t ? (0, r.jsx)(i.yRy, {
        position: "right",
        preload: () => (0, a.Z)(t.id, t.getAvatarURL(b, 80), {
          guildId: b,
          channelId: n
        }),
        renderPopout: o => (0, r.jsx)(s.Z, p(f({}, o), {
          userId: t.id,
          guildId: b,
          channelId: n,
          messageId: v,
          roleId: null == e ? void 0 : e.colorRoleId
        })),
        children: e => {
          var {
            onClick: t
          } = e, n = function(e, t) {
            if (null == e) return {};
            var n, r, o = function(e, t) {
              if (null == e) return {};
              var n, r, o = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
          }(e, ["onClick"]);
          return c(f({
            onClick: d(t)
          }, n))
        }
      }) : c(void 0)
    }, l)
  }, [y, t, n, b, v, m, O, g])
}