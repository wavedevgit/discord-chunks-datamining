/** Chunk was on 27278 **/
t.d(n, {
  Z: () => O
}), t(47120);
var o = t(200651),
  r = t(192379),
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
      openNewUserExperienceModal: r.useCallback(() => {
        (0, l.ZDy)(async () => {
          let {
            default: e
          } = await t.e("49077").then(t.bind(t, 97761));
          return n => {
            var t, r;
            return (0, o.jsx)(e, (t = function(e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                  o = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), o.forEach(function(n) {
                  var o;
                  o = t[n], n in e ? Object.defineProperty(e, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  }) : e[n] = o
                })
              }
              return e
            }({}, n), r = r = {
              onClickButton: () => {
                a(x.L.USER_DISMISS), n.onClose()
              }
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
              var t = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t.push.apply(t, o)
              }
              return t
            })(Object(r)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
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
  r.useEffect(() => {
    a && c()
  }, [c, a]);
  let {
    renderWindow: u
  } = r.useContext(s.ZP);
  return a ? (0, o.jsx)("div", {
    className: y.nuxBackground,
    children: (0, o.jsx)(b.Z, {
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
  }), i = r.useRef(null), s = (0, c.Z)(e);
  r.useEffect(() => {
    null != e ? clearTimeout(i.current) : null != s && null == e && (i.current = window.setTimeout(() => {
      (0, p.xv)(g.KJ3.ACTIVITY_POPOUT)
    }, 5e3))
  }, [e, s]);
  let d = (0, a.e7)([u.Z], () => {
      let n = null == e ? void 0 : e.applicationId;
      return null == n ? void 0 : u.Z.getApplication(n)
    }),
    b = (0, f.PR)();
  return (0, o.jsx)("div", {
    className: y.container,
    children: null == e || null == d ? (0, o.jsx)(l.$jN, {
      className: y.iframe
    }) : (0, o.jsx)("div", {
      className: y.loadedContentContainer,
      children: (0, o.jsxs)("div", {
        className: y.iframeAndHeaderContainer,
        children: [(0, o.jsx)("div", {
          className: y.headerContainer,
          children: (0, o.jsx)(C.Z, {
            applicationId: d.id,
            channelId: n
          })
        }), (0, o.jsx)("div", {
          className: y.iframeContainer,
          children: (0, o.jsx)(I, {
            children: (0, o.jsx)(v.Z, {
              channelId: n,
              guildId: t,
              embeddedActivity: e,
              application: d
            })
          })
        }), b ? (0, o.jsx)(_.Z, {
          isEmbeddedActivity: !0
        }) : null]
      })
    })
  })
}