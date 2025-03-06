/** Chunk was on 27278 **/
t.d(n, {
  Z: () => O
}), t(47120);
var r = t(200651),
  o = t(192379),
  a = t(442837),
  i = t(704215),
  l = t(481060),
  c = t(110924),
  s = t(40851),
  u = t(812206),
  d = t(243778),
  _ = t(554370),
  p = t(788983),
  b = t(546247),
  f = t(214629),
  m = t(317381),
  h = t(16609),
  v = t(781780),
  C = t(325749),
  g = t(981631),
  x = t(921944),
  y = t(832969);

function I(e) {
  let {
    children: n
  } = e, {
    showsNewUserExperience: a,
    openNewUserExperienceModal: c
  } = function() {
    let e = [i.z.ACTIVITY_POPOUT_NUX_MODAL],
      [n, a] = (0, d.US)(e);
    return {
      showsNewUserExperience: n === i.z.ACTIVITY_POPOUT_NUX_MODAL,
      openNewUserExperienceModal: o.useCallback(() => {
        (0, l.ZDy)(async () => {
          let {
            default: e
          } = await t.e("49077").then(t.bind(t, 97761));
          return n => {
            var t, o;
            return (0, r.jsx)(e, (t = function(e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                  r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), r.forEach(function(n) {
                  var r;
                  r = t[n], n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  }) : e[n] = r
                })
              }
              return e
            }({}, n), o = o = {
              onClickButton: () => {
                a(x.L.USER_DISMISS), n.onClose()
              }
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : (function(e, n) {
              var t = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t.push.apply(t, r)
              }
              return t
            })(Object(o)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
            }), t))
          }
        }, {
          contextKey: l.u1M,
          onCloseRequest: () => {},
          backdropStyle: l.fCB.SUBTLE
        })
      }, [a])
    }
  }();
  o.useEffect(() => {
    a && c()
  }, [c, a]);
  let {
    renderWindow: u
  } = o.useContext(s.ZP);
  return a ? (0, r.jsx)("div", {
    className: y.nuxBackground,
    children: (0, r.jsx)(b.Z, {
      eventTargetRef: {
        current: u.document.body
      }
    })
  }) : n
}

function O() {
  let {
    embeddedActivity: e,
    channelId: n,
    guildId: t
  } = (0, a.cj)([m.ZP], () => {
    let e = m.ZP.getCurrentEmbeddedActivity(),
      n = (0, h.pY)(null == e ? void 0 : e.location),
      t = (0, h.jS)(null == e ? void 0 : e.location);
    return {
      embeddedActivity: e,
      channelId: n,
      guildId: t
    }
  }), i = o.useRef(null), s = (0, c.Z)(e);
  o.useEffect(() => {
    null != e ? clearTimeout(i.current) : null != s && null == e && (i.current = window.setTimeout(() => {
      (0, p.xv)(g.KJ3.ACTIVITY_POPOUT)
    }, 5e3))
  }, [e, s]);
  let d = (0, a.e7)([u.Z], () => {
      let n = null == e ? void 0 : e.applicationId;
      return null == n ? void 0 : u.Z.getApplication(n)
    }),
    b = (0, f.PR)();
  return (0, r.jsx)("div", {
    className: y.container,
    children: null == e || null == d ? (0, r.jsx)(l.$jN, {
      className: y.iframe
    }) : (0, r.jsx)("div", {
      className: y.loadedContentContainer,
      children: (0, r.jsxs)("div", {
        className: y.iframeAndHeaderContainer,
        children: [(0, r.jsx)("div", {
          className: y.headerContainer,
          children: (0, r.jsx)(C.Z, {
            applicationId: d.id,
            channelId: n
          })
        }), (0, r.jsx)("div", {
          className: y.iframeContainer,
          children: (0, r.jsx)(I, {
            children: (0, r.jsx)(v.Z, {
              channelId: n,
              guildId: t,
              embeddedActivity: e,
              application: d
            })
          })
        }), b ? (0, r.jsx)(_.Z, {
          isEmbeddedActivity: !0
        }) : null]
      })
    })
  })
}