/** Chunk was on 28965 **/
"use strict";
n.d(t, {
  l: () => b
}), n(388685);
var r = n(200651),
  l = n(192379),
  o = n(481060),
  i = n(100527),
  u = n(906732),
  a = n(181918),
  s = n(823415),
  c = n(670188),
  d = n(592125),
  f = n(91047);

function p(e) {
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

function b(e) {
  let {
    user: t,
    channelId: n,
    guildId: b,
    messageId: v,
    stopPropagation: h = !1,
    ariaLabel: g
  } = e, {
    analyticsLocations: O
  } = (0, u.ZP)(i.Z.USERNAME), m = (0, a.$V)(b, "useUsernameHook"), [y, j] = l.useState(!1), w = (0, s.ic)({
    location: "useUsernameHook"
  }), P = l.useCallback(e => {
    let r = d.Z.getChannel(n);
    null != r && null != t && (0, f.Pv)(e, t, r)
  }, [t, n]);
  return l.useCallback(e => (l, i) => {
    let a = null == e ? void 0 : e.colorStrings,
      s = m && null != a && null != a.primaryColor && null != a.secondaryColor,
      d = t => {
        var n, i;
        return (0, r.jsx)(o.rz2, (n = p({}, null != t ? t : {}), i = i = {
          onContextMenu: P,
          name: l,
          color: null == e ? void 0 : e.colorString,
          roleName: null == e ? void 0 : e.colorRoleName,
          roleColors: s ? a : null,
          "aria-label": g
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      },
      f = e => {
        h && (null == e || e.stopPropagation()), j(!y)
      };
    return (0, r.jsx)(u.Gt, {
      value: O,
      children: null != t ? (0, r.jsx)(c.Z, {
        user: t,
        guildId: b,
        channelId: n,
        messageId: v,
        shouldShowOnHover: w,
        roleId: null == e ? void 0 : e.colorRoleId,
        clickTrap: y,
        shouldShow: y,
        onRequestClose: () => j(!1),
        children: e => {
          var {
            onClick: t
          } = e;
          return d(p({
            onClick: f
          }, function(e, t) {
            if (null == e) return {};
            var n, r, l = function(e, t) {
              if (null == e) return {};
              var n, r, l = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
              return l
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
            }
            return l
          }(e, ["onClick"])))
        }
      }) : d(void 0)
    }, i)
  }, [O, t, n, b, v, P, h, g, m, w, y])
}