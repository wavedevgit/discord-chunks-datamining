/** Chunk was on 27278 **/
n.d(t, {
  Z: () => z
}), n(47120);
var o = n(200651),
  r = n(192379),
  a = n(120356),
  i = n.n(a),
  l = n(442837),
  c = n(481060),
  u = n(13245),
  s = n(753972),
  _ = n(812206),
  d = n(726721),
  p = n(610394),
  b = n(522474),
  f = n(788983),
  m = n(695346),
  v = n(390322),
  h = n(961048),
  g = n(871499),
  C = n(786915),
  x = n(107169),
  y = n(592125),
  I = n(271383),
  O = n(594174),
  j = n(358085),
  P = n(51144),
  w = n(998502),
  k = n(145597),
  N = n(214629),
  T = n(317381),
  S = n(884338),
  Z = n(473179),
  B = n(981631),
  A = n(388032),
  W = n(231784);
let E = S.u.SIZE_24;

function z(e) {
  let {
    applicationId: t,
    channelId: n
  } = e, a = (0, l.e7)([_.Z], () => _.Z.getApplication(t)), z = (0, l.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities().get(t)), U = (0, l.e7)([y.Z], () => y.Z.getChannel(n)), D = m.Sb.useSetting(), R = (0, l.Wu)([I.ZP], () => {
    var e;
    return null == U || null == z ? [] : Array.from(null !== (e = z.userIds) && void 0 !== e ? e : []).map(e => I.ZP.getMember(U.guild_id, e))
  }, [z, U]), L = r.useMemo(() => {
    let e = new Map;
    return R.forEach(t => {
      null != t && void 0 !== t && e.set(t.userId, t)
    }), e
  }, [R]), G = r.useCallback((e, t) => {
    var n;
    if (null == e) return null;
    let r = L.get(e.id),
      a = null !== (n = null == r ? void 0 : r.nick) && void 0 !== n ? n : P.ZP.getName(e);
    return (0, o.jsx)(c.DY3, {
      text: a,
      position: "bottom",
      children: (0, o.jsx)("img", {
        src: e.getAvatarURL(null == t ? void 0 : t.guild_id, E),
        alt: a,
        className: W.avatar
      }, e.id)
    }, e.id)
  }, [L]), Y = null == z ? void 0 : z.userIds, M = (0, l.Wu)([O.default], () => Array.from(null != Y ? Y : []).map(e => O.default.getUser(e)).filter(e => null != e), [Y]), K = d.Z.useExperiment({
    location: "activity_popout_overflow_menu"
  }, {
    autoTrackExposure: !0
  }).enabled, V = r.useCallback(() => {
    let e = (0, k.getPID)();
    u.Z.setInputLocked(!p.ZP.isInputLocked(e), e)
  }, []), F = (0, N.PR)(), {
    canStayOnTop: H,
    popoutWindowAlwaysOnTop: J,
    handleStayOnTop: X
  } = function() {
    let {
      popoutWindowAlwaysOnTop: e
    } = (0, l.cj)([b.Z], () => ({
      popoutWindow: b.Z.getWindow(B.KJ3.ACTIVITY_POPOUT),
      popoutWindowAlwaysOnTop: b.Z.getIsAlwaysOnTop(B.KJ3.ACTIVITY_POPOUT)
    })), t = r.useCallback(e => {
      f.hY(B.KJ3.ACTIVITY_POPOUT, e)
    }, []);
    return {
      canStayOnTop: j.isPlatformEmbedded && w.ZP.supportsFeature(B.eRX.POPOUT_WINDOWS),
      popoutWindowAlwaysOnTop: e,
      handleStayOnTop: t
    }
  }();
  if (null == a || null == z) return null;
  let q = (0, o.jsx)(s.Z, {
    application: a,
    size: 24,
    className: W.appIcon
  });
  return D && (q = (0, o.jsx)(c.DY3, {
    text: z.compositeInstanceId,
    position: "bottom",
    children: q
  })), (0, o.jsx)(c.f6W, {
    theme: B.BRd.DARK,
    children: e => (0, o.jsxs)("div", {
      className: i()(W.container, e),
      children: [(0, o.jsxs)("div", {
        className: i()(W.headerSection, W.headerSectionLeft),
        children: [q, (0, o.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          children: a.name
        }), (0, o.jsx)("div", {
          className: W.dotSpacer,
          children: (0, o.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: "."
          })
        }), (0, o.jsx)(S.Z, {
          renderIcon: !1,
          users: M,
          size: E,
          max: 6,
          className: W.userAvatars,
          renderUser: e => G(e, U)
        })]
      }), (0, o.jsx)("div", {
        className: i()(W.headerSection, W.headerSectionRight),
        children: (0, o.jsxs)("div", {
          className: W.actionButtonsContainer,
          children: [(0, o.jsx)(C.Z, {
            appContext: B.IlC.POPOUT,
            applicationId: t,
            channel: U,
            shouldPrioritizeGroupPlusIcon: !0,
            embeddedActivity: z
          }), F ? (0, o.jsx)(g.Z, {
            onClick: V,
            iconComponent: c.epB,
            label: A.NW.string(A.t.mseZsL)
          }) : null, H ? (0, o.jsx)(x.Z, {
            popoutWindowAlwaysOnTop: J,
            onToggleStayOnTop: X
          }) : null, K && (0, o.jsx)(c.yRy, {
            position: "bottom",
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, o.jsx)(v.Z, {
                children: (0, o.jsx)(Z.Z, {
                  application: a,
                  channelId: n,
                  onClose: t
                })
              })
            },
            children: (e, t) => {
              var n, o;
              let {
                isShown: a
              } = t;
              return (0, r.createElement)(h.Z, (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    o = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), o.forEach(function(t) {
                    var o;
                    o = n[t], t in e ? Object.defineProperty(e, t, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    }) : e[t] = o
                  })
                }
                return e
              }({}, e), o = o = {
                key: "more-options",
                isActive: a
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, o)
                }
                return n
              })(Object(o)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
              }), n))
            }
          }, "more-options-popout")]
        })
      })]
    })
  })
}