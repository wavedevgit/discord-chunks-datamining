/** Chunk was on 27278 **/
n.d(t, {
  Z: () => E
}), n(47120);
var o = n(200651),
  r = n(192379),
  a = n(120356),
  i = n.n(a),
  l = n(442837),
  c = n(481060),
  s = n(13245),
  _ = n(753972),
  u = n(812206),
  d = n(726721),
  p = n(610394),
  b = n(522474),
  f = n(788983),
  m = n(695346),
  v = n(390322),
  h = n(961048),
  C = n(871499),
  x = n(786915),
  g = n(107169),
  y = n(592125),
  I = n(271383),
  w = n(594174),
  N = n(358085),
  j = n(51144),
  k = n(998502),
  P = n(145597),
  Z = n(214629),
  T = n(317381),
  S = n(884338),
  O = n(473179),
  A = n(981631),
  B = n(388032),
  W = n(984736);
let z = S.u.SIZE_24;

function E(e) {
  let {
    applicationId: t,
    channelId: n
  } = e, a = (0, l.e7)([u.Z], () => u.Z.getApplication(t)), E = (0, l.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities().get(t)), R = (0, l.e7)([y.Z], () => y.Z.getChannel(n)), U = m.Sb.useSetting(), L = (0, l.Wu)([I.ZP], () => {
    var e;
    return null == R || null == E ? [] : Array.from(null !== (e = E.userIds) && void 0 !== e ? e : []).map(e => I.ZP.getMember(R.guild_id, e))
  }, [E, R]), D = r.useMemo(() => {
    let e = new Map;
    return L.forEach(t => {
      null != t && void 0 !== t && e.set(t.userId, t)
    }), e
  }, [L]), G = r.useCallback((e, t) => {
    var n;
    if (null == e) return null;
    let r = D.get(e.id),
      a = null !== (n = null == r ? void 0 : r.nick) && void 0 !== n ? n : j.ZP.getName(e);
    return (0, o.jsx)(c.DY3, {
      text: a,
      position: "bottom",
      children: (0, o.jsx)("img", {
        src: e.getAvatarURL(null == t ? void 0 : t.guild_id, z),
        alt: a,
        className: W.avatar
      }, e.id)
    }, e.id)
  }, [D]), Y = null == E ? void 0 : E.userIds, F = (0, l.Wu)([w.default], () => Array.from(null != Y ? Y : []).map(e => w.default.getUser(e)).filter(e => null != e), [Y]), K = d.Z.useExperiment({
    location: "activity_popout_overflow_menu"
  }, {
    autoTrackExposure: !0
  }).enabled, H = r.useCallback(() => {
    let e = (0, P.QF)();
    s.Z.setInputLocked(!p.ZP.isInputLocked(e), e)
  }, []), J = (0, Z.PR)(), {
    canStayOnTop: M,
    popoutWindowAlwaysOnTop: V,
    handleStayOnTop: q
  } = function() {
    let {
      popoutWindowAlwaysOnTop: e
    } = (0, l.cj)([b.Z], () => ({
      popoutWindow: b.Z.getWindow(A.KJ3.ACTIVITY_POPOUT),
      popoutWindowAlwaysOnTop: b.Z.getIsAlwaysOnTop(A.KJ3.ACTIVITY_POPOUT)
    })), t = r.useCallback(e => {
      f.hY(A.KJ3.ACTIVITY_POPOUT, e)
    }, []);
    return {
      canStayOnTop: N.isPlatformEmbedded && k.ZP.supportsFeature(A.eRX.POPOUT_WINDOWS),
      popoutWindowAlwaysOnTop: e,
      handleStayOnTop: t
    }
  }();
  if (null == a || null == E) return null;
  let Q = (0, o.jsx)(_.Z, {
    application: a,
    size: 24,
    className: W.appIcon
  });
  return U && (Q = (0, o.jsx)(c.DY3, {
    text: E.compositeInstanceId,
    position: "bottom",
    children: Q
  })), (0, o.jsx)(c.f6W, {
    theme: A.BRd.DARK,
    children: e => (0, o.jsxs)("div", {
      className: i()(W.container, e),
      children: [(0, o.jsxs)("div", {
        className: i()(W.headerSection, W.headerSectionLeft),
        children: [Q, (0, o.jsx)(c.Text, {
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
          users: F,
          size: z,
          max: 6,
          className: W.userAvatars,
          renderUser: e => G(e, R)
        })]
      }), (0, o.jsx)("div", {
        className: i()(W.headerSection, W.headerSectionRight),
        children: (0, o.jsxs)("div", {
          className: W.actionButtonsContainer,
          children: [(0, o.jsx)(x.Z, {
            appContext: A.IlC.POPOUT,
            applicationId: t,
            channel: R,
            shouldPrioritizeGroupPlusIcon: !0,
            embeddedActivity: E
          }), J ? (0, o.jsx)(C.Z, {
            onClick: H,
            iconComponent: c.epB,
            label: B.NW.string(B.t.mseZsL)
          }) : null, M ? (0, o.jsx)(g.Z, {
            popoutWindowAlwaysOnTop: V,
            onToggleStayOnTop: q
          }) : null, K && (0, o.jsx)(c.yRy, {
            position: "bottom",
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, o.jsx)(v.Z, {
                children: (0, o.jsx)(O.Z, {
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