/** Chunk was on 27278 **/
n.d(t, {
  Z: () => L
}), n(47120);
var r = n(200651),
  o = n(192379),
  a = n(120356),
  i = n.n(a),
  l = n(442837),
  c = n(481060),
  u = n(13245),
  s = n(753972),
  d = n(812206),
  _ = n(726721),
  p = n(610394),
  b = n(522474),
  f = n(788983),
  m = n(695346),
  v = n(390322),
  h = n(961048),
  g = n(871499),
  C = n(268353),
  x = n(786915),
  y = n(107169),
  I = n(592125),
  O = n(271383),
  j = n(594174),
  P = n(358085),
  w = n(51144),
  k = n(998502),
  N = n(228488),
  S = n(145597),
  Z = n(214629),
  T = n(317381),
  B = n(884338),
  A = n(473179),
  E = n(932174),
  W = n(981631),
  z = n(388032),
  U = n(231784);
let D = B.u.SIZE_24;

function L(e) {
  let {
    applicationId: t,
    channelId: n
  } = e, a = (0, l.e7)([d.Z], () => d.Z.getApplication(t)), L = (0, l.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities().get(t)), R = (0, l.e7)([I.Z], () => I.Z.getChannel(n)), M = m.Sb.useSetting(), G = (0, l.Wu)([O.ZP], () => {
    var e;
    return null == R || null == L ? [] : Array.from(null !== (e = L.userIds) && void 0 !== e ? e : []).map(e => O.ZP.getMember(R.guild_id, e))
  }, [L, R]), Y = o.useMemo(() => {
    let e = new Map;
    return G.forEach(t => {
      null != t && void 0 !== t && e.set(t.userId, t)
    }), e
  }, [G]), K = o.useCallback((e, t) => {
    var n;
    if (null == e) return null;
    let o = Y.get(e.id),
      a = null !== (n = null == o ? void 0 : o.nick) && void 0 !== n ? n : w.ZP.getName(e);
    return (0, r.jsx)(c.DY3, {
      text: a,
      position: "bottom",
      children: (0, r.jsx)("img", {
        src: e.getAvatarURL(null == t ? void 0 : t.guild_id, D),
        alt: a,
        className: U.avatar
      }, e.id)
    }, e.id)
  }, [Y]), V = null == L ? void 0 : L.userIds, F = (0, l.Wu)([j.default], () => Array.from(null != V ? V : []).map(e => j.default.getUser(e)).filter(e => null != e), [V]), H = _.Z.useExperiment({
    location: "activity_popout_overflow_menu"
  }, {
    autoTrackExposure: !0
  }).enabled, J = o.useCallback(() => {
    let e = (0, S.getPID)();
    u.Z.setInputLocked(!p.ZP.isInputLocked(e), e)
  }, []), X = (0, Z.PR)(), {
    canStayOnTop: q,
    popoutWindowAlwaysOnTop: $,
    handleStayOnTop: Q
  } = function() {
    let e = (0, l.e7)([b.Z], () => b.Z.getIsAlwaysOnTop(W.KJ3.ACTIVITY_POPOUT)),
      t = o.useCallback(e => {
        f.hY(W.KJ3.ACTIVITY_POPOUT, e)
      }, []);
    return {
      canStayOnTop: P.isPlatformEmbedded && k.ZP.supportsFeature(W.eRX.POPOUT_WINDOWS),
      popoutWindowAlwaysOnTop: e,
      handleStayOnTop: t
    }
  }(), {
    rootNode: ee,
    popoutWindow: et,
    toggleFullScreen: en
  } = function() {
    let {
      popoutWindow: e,
      currentDocument: t,
      rootNode: n
    } = (0, E.Z)(), [r, a] = o.useState(!1), i = o.useCallback(() => {
      null != n && r && (a(!1), (0, N.Pr)(n, t))
    }, [n, t, r]), l = o.useCallback(() => {
      null != n && (r ? i() : (a(!0), (0, N.Dj)(n)))
    }, [n, r, i]), c = o.useCallback(() => {
      null != n && !(0, N.rB)(n, t) && r && l()
    }, [n, t, r, l]);
    return o.useEffect(() => (null == t || t.addEventListener(N.NO, c), () => {
      null == t || t.removeEventListener(N.NO, c)
    }), [t, c]), {
      rootNode: n,
      popoutWindow: e,
      toggleFullScreen: l
    }
  }();
  if (null == a || null == L) return null;
  let er = (0, r.jsx)(s.Z, {
    application: a,
    size: 24,
    className: U.appIcon
  });
  return M && (er = (0, r.jsx)(c.DY3, {
    text: L.compositeInstanceId,
    position: "bottom",
    children: er
  })), (0, r.jsx)(c.f6W, {
    theme: W.BRd.DARK,
    children: e => (0, r.jsxs)("div", {
      className: i()(U.container, e),
      children: [(0, r.jsxs)("div", {
        className: i()(U.headerSection, U.headerSectionLeft),
        children: [er, (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          children: a.name
        }), (0, r.jsx)("div", {
          className: U.dotSpacer,
          children: (0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: "."
          })
        }), (0, r.jsx)(B.Z, {
          renderIcon: !1,
          users: F,
          size: D,
          max: 6,
          className: U.userAvatars,
          renderUser: e => K(e, R)
        })]
      }), (0, r.jsx)("div", {
        className: i()(U.headerSection, U.headerSectionRight),
        children: (0, r.jsxs)("div", {
          className: U.actionButtonsContainer,
          children: [(0, r.jsx)(x.Z, {
            appContext: W.IlC.POPOUT,
            applicationId: t,
            channel: R,
            shouldPrioritizeGroupPlusIcon: !0,
            embeddedActivity: L
          }), X ? (0, r.jsx)(g.Z, {
            onClick: J,
            iconComponent: c.epB,
            label: z.NW.string(z.t.mseZsL)
          }) : null, q ? (0, r.jsx)(y.Z, {
            popoutWindowAlwaysOnTop: $,
            onToggleStayOnTop: Q
          }) : null, (0, r.jsx)(C.Z, {
            node: ee,
            guestWindow: et,
            onClick: en
          }), H && (0, r.jsx)(c.yRy, {
            position: "bottom",
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, r.jsx)(v.Z, {
                children: (0, r.jsx)(A.Z, {
                  application: a,
                  channelId: n,
                  onClose: t
                })
              })
            },
            children: (e, t) => {
              var n, r;
              let {
                isShown: a
              } = t;
              return (0, o.createElement)(h.Z, (n = function(e) {
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
              }({}, e), r = r = {
                key: "more-options",
                isActive: a
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(r)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
              }), n))
            }
          }, "more-options-popout")]
        })
      })]
    })
  })
}