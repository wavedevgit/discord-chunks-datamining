/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => C
});
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(481060),
  s = n(580587),
  l = n(499254),
  c = n(827498),
  u = n(311819),
  d = n(541716),
  f = n(433355),
  _ = n(592125),
  p = n(944486),
  h = n(626135),
  m = n(572004),
  g = n(591759),
  E = n(135431),
  v = n(621853),
  b = n(429974),
  y = n(475413),
  O = n(981631),
  I = n(388032);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function C(e) {
  var {
    user: t,
    closePopout: n
  } = e, S = N(e, ["user", "closePopout"]);
  let A = (0, o.e7)([v.Z], () => {
      var e;
      return null === (e = v.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
    }),
    C = (0, o.e7)([p.Z], () => p.Z.getChannelId()),
    R = (0, o.e7)([_.Z], () => _.Z.getChannel(C)),
    P = (0, o.e7)([_.Z], () => {
      var e;
      return null === (e = _.Z.getChannel(C)) || void 0 === e ? void 0 : e.guild_id
    }),
    w = i.useMemo(() => null != R ? {
      channel: R,
      type: "channel"
    } : {
      type: "contextless"
    }, [R]),
    D = (0, s.Z)({
      context: w
    }),
    L = t.id,
    x = i.useCallback(() => {
      if (null != A) {
        if (D) {
          let e = p.Z.getCurrentlySelectedChannelId(),
            t = _.Z.getChannel(e),
            r = null != f.ZP.getSidebarState(e) || (null == t ? void 0 : t.isGuildVocal()) ? d.Ie.SIDEBAR : d.Ie.NORMAL;
          l.__(c._b.TEXT, r, {
            applicationId: A.id
          }), (0, a.Mr3)((0, b.z)(L, P)), null == n || n(), h.default.track(O.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, {
            application_id: A.id
          })
        } else(0, E.LO)(T({
          applicationId: A.id
        }, A))
      }
    }, [D, A, L, P, n]),
    M = D ? I.NW.string(I.t["Cia+Aw"]) : I.NW.string(I.t.NgXl3N);
  if (null == A || !(0, E.Eb)(A)) return null;
  let {
    customInstallUrl: k
  } = A, j = null == k || g.Z.isDiscordUrl(k) ? a.qJs : a.Gr1, U = D ? void 0 : j;
  return m.wS ? (0, r.jsx)(a.yRy, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(a.v2r, {
        navId: "user-bot-profile-add-app",
        onClose: t,
        "aria-label": I.NW.string(I.t.dbkxVl),
        onSelect: void 0,
        children: (0, r.jsx)(a.kSQ, {
          children: (0, r.jsx)(a.sNh, {
            id: "copy",
            label: I.NW.string(I.t.XWDiho),
            action: () => (0, m.JG)((0, u.J)(A))
          })
        })
      })
    },
    children: e => {
      var {
        onClick: t
      } = e, n = N(e, ["onClick"]);
      return (0, r.jsx)(y.tG, T({
        action: "PRESS_ADD_APP",
        text: M,
        icon: U,
        onContextMenu: t,
        onClick: x
      }, n, S))
    }
  }) : (0, r.jsx)(y.tG, T({
    action: "PRESS_ADD_APP",
    text: M,
    icon: U,
    onClick: x
  }, S))
}