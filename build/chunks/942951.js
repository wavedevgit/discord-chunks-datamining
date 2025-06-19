/** Chunk was on 66467 **/
"use strict";
r.d(t, {
  l: () => p
});
var n = r(255367),
  l = r(73800),
  o = r(481060),
  i = r(100527),
  u = r(906732),
  a = r(402235),
  s = r(670188),
  c = r(592125),
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

function p(e) {
  let {
    user: t,
    channelId: r,
    guildId: p,
    messageId: b,
    stopPropagation: v = !1,
    ariaLabel: g
  } = e, h = l.useRef(null), {
    analyticsLocations: m
  } = (0, u.ZP)(i.Z.USERNAME), O = (0, a.Z)(p, "useUsernameHook"), y = l.useCallback(e => {
    let n = c.Z.getChannel(r);
    null != n && null != t && (0, d.Pv)(e, t, n)
  }, [t, r]);
  return l.useCallback(e => (l, i) => {
    let a = null == e ? void 0 : e.colorStrings,
      c = O && null != a && null != a.primaryColor && null != a.secondaryColor,
      d = t => {
        var r, i;
        return (0, n.jsx)(o.rz2, (r = f({}, null != t ? t : {}), i = i = {
          ref: h,
          onContextMenu: y,
          name: (0, o.qgQ)(l),
          color: null == e ? void 0 : e.colorString,
          roleName: null == e ? void 0 : e.colorRoleName,
          roleColors: c ? a : null,
          "aria-label": g
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
        }), r))
      },
      w = e => t => {
        v && null != t && t.stopPropagation(), e(t)
      };
    return (0, n.jsx)(u.Gt, {
      value: m,
      children: null != t ? (0, n.jsx)(s.Z, {
        targetElementRef: h,
        user: t,
        guildId: p,
        channelId: r,
        messageId: b,
        roleId: null == e ? void 0 : e.colorRoleId,
        clickTrap: !0,
        children: e => {
          var {
            onClick: t
          } = e, r = function(e, t) {
            if (null == e) return {};
            var r, n, l = function(e, t) {
              if (null == e) return {};
              var r, n, l = {},
                o = Object.keys(e);
              for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
              return l
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
            }
            return l
          }(e, ["onClick"]);
          return d(f({
            onClick: w(t)
          }, r))
        }
      }) : d(void 0)
    }, i)
  }, [m, t, r, p, b, y, v, g, O])
}