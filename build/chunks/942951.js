/** Chunk was on 36371 **/
"use strict";
r.d(t, {
  l: () => b
});
var n = r(200651),
  o = r(192379),
  i = r(481060),
  l = r(100527),
  u = r(906732),
  a = r(184301),
  c = r(347475),
  s = r(592125),
  d = r(91047);

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function b(e) {
  let {
    user: t,
    channelId: r,
    guildId: b,
    messageId: v,
    stopPropagation: O = !1,
    ariaLabel: g
  } = e, {
    analyticsLocations: y
  } = (0, u.ZP)(l.Z.USERNAME), m = o.useCallback(e => {
    let n = s.Z.getChannel(r);
    null != n && null != t && (0, d.Pv)(e, t, n)
  }, [t, r]);
  return o.useCallback(e => (o, l) => {
    let s = t => (0, n.jsx)(i.rz2, p(f({}, null != t ? t : {}), {
        onContextMenu: m,
        name: o,
        color: null == e ? void 0 : e.colorString,
        roleName: null == e ? void 0 : e.colorRoleName,
        "aria-label": g
      })),
      d = e => t => {
        O && t.stopPropagation(), e(t)
      };
    return (0, n.jsx)(u.Gt, {
      value: y,
      children: null != t ? (0, n.jsx)(i.yRy, {
        position: "right",
        preload: () => (0, a.Z)(t.id, t.getAvatarURL(b, 80), {
          guildId: b,
          channelId: r
        }),
        renderPopout: o => (0, n.jsx)(c.Z, p(f({}, o), {
          userId: t.id,
          guildId: b,
          channelId: r,
          messageId: v,
          roleId: null == e ? void 0 : e.colorRoleId
        })),
        children: e => {
          var {
            onClick: t
          } = e, r = function(e, t) {
            if (null == e) return {};
            var r, n, o = function(e, t) {
              if (null == e) return {};
              var r, n, o = {},
                i = Object.keys(e);
              for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
              return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
          }(e, ["onClick"]);
          return s(f({
            onClick: d(t)
          }, r))
        }
      }) : s(void 0)
    }, l)
  }, [y, t, r, b, v, m, O, g])
}