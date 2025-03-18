/** Chunk was on 35755 **/
n.d(t, {
  Z: () => S
}), n(789020);
var i = n(200651),
  l = n(120356),
  r = n.n(l),
  o = n(442837),
  a = n(481060),
  s = n(367907),
  c = n(895924),
  u = n(970321),
  d = n(311819),
  p = n(299206),
  m = n(726721),
  f = n(726521),
  h = n(973616),
  v = n(914010),
  y = n(594174),
  b = n(626135),
  N = n(572004),
  g = n(630388),
  x = n(135431),
  j = n(541099),
  E = n(783097),
  P = n(570949),
  C = n(314734),
  O = n(981631),
  A = n(388032),
  I = n(75840);

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}

function S(e) {
  var t;
  let {
    application: l,
    context: S,
    className: T,
    sectionName: L
  } = e, Z = (0, o.e7)([j.Z], () => j.Z.entrypoint()), R = (0, E.L1)(l), w = (0, x.Eb)(R), k = (0, u.R)(l.id), M = (0, o.e7)([v.Z], () => {
    var e;
    return null !== (e = v.Z.getGuildId()) && void 0 !== e ? e : void 0
  }, []), D = {
    location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
    application_id: l.id,
    section_name: L,
    source: j.Z.lastShownEntrypoint()
  }, W = y.default.getCurrentUser(), U = m.Z.useExperiment({
    location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU
  }, {
    autoTrackExposure: !0
  }).enabled, H = (0, p.Z)({
    id: l.id,
    label: A.NW.string(A.t["+NP/b2"])
  }), V = (0, P.P)({
    application: l
  }), B = (0, g.yE)(null !== (t = l.flags) && void 0 !== t ? t : 0, O.udG.EMBEDDED), F = "channel" === S.type ? S.channel : void 0;
  return (0, i.jsxs)("div", {
    className: I.container,
    children: [(0, i.jsx)(a.P3F, {
      onClick: () => {
        let e = B ? (0, d.H)({
          applicationId: l.id,
          referrerId: null == W ? void 0 : W.id
        }) : (0, d.J)(_({
          id: l.id
        }, R));
        (0, N.JG)(e), b.default.track(O.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
          application_id: l.id,
          source: Z
        }), (0, a.showToast)((0, a.createToast)(A.NW.string(A.t["L/PwZW"]), a.ToastType.SUCCESS))
      },
      className: r()(I.clickable, T),
      "aria-label": A.NW.string(A.t.WqhZsr),
      children: (0, i.jsx)(a.xPt, {
        size: "sm",
        color: a.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, i.jsx)(a.yRy, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsxs)(a.v2r, {
          className: C.NN,
          navId: "app-details-more-menu",
          onClose: t,
          "aria-label": A.NW.string(A.t.AXIHpa),
          onSelect: void 0,
          children: [(0, i.jsxs)(a.kSQ, {
            children: [k && (0, i.jsx)(a.sNh, {
              id: "open-storefront",
              label: A.NW.string(A.t.kRvlKC),
              action: () => {
                (0, a.ZDy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("66711"), n.e("77803"), n.e("22244")]).then(n.bind(n, 7225));
                  return t => (0, i.jsx)(e, {
                    transitionState: t.transitionState,
                    onClose: t.onClose,
                    appId: l.id,
                    guildId: M
                  })
                })
              }
            }), w ? (0, i.jsx)(a.sNh, {
              id: "add-app",
              label: A.NW.string(A.t.NgXl3N),
              action: () => {
                var e, t;
                null == R.customInstallUrl && (0, s.yw)(O.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, D), (0, x.LO)((e = _({}, R), t = t = {
                  oauth2Callback: e => {
                    let {
                      location: t
                    } = e;
                    null != t && (0, s.yw)(O.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, D)
                  },
                  source: "app_launcher_app_details"
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, i)
                  }
                  return n
                })(Object(t)).forEach(function(n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e))
              }
            }) : null, U && l instanceof h.ZP ? (0, i.jsx)(a.sNh, {
              id: "report-app",
              color: "danger",
              label: A.NW.string(A.t.jhJze3),
              action: () => {
                var e;
                (0, f.uu)({
                  application: l,
                  entrypoint: "app_launcher",
                  contextualGuildId: null !== (e = null == F ? void 0 : F.getGuildId()) && void 0 !== e ? e : void 0,
                  contextualChannelId: null == F ? void 0 : F.id
                })
              }
            }) : null, V]
          }), (0, i.jsx)(a.kSQ, {
            children: H
          })]
        })
      },
      align: "right",
      position: "bottom",
      children: e => (0, i.jsx)(a.P3F, {
        onClick: e.onClick,
        className: r()(I.clickable, T),
        "aria-label": A.NW.string(A.t.UKOtz8),
        children: (0, i.jsx)(a.xhG, {
          size: "sm",
          color: a.TVs.colors.INTERACTIVE_ACTIVE
        })
      })
    })]
  })
}