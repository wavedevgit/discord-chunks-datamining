/** Chunk was on 27278 **/
n.d(t, {
  Z: () => I
}), n(47120);
var o = n(200651),
  r = n(192379),
  a = n(442837),
  i = n(704215),
  l = n(481060),
  c = n(110924),
  u = n(812206),
  s = n(243778),
  _ = n(554370),
  d = n(788983),
  p = n(546247),
  b = n(214629),
  f = n(317381),
  m = n(16609),
  v = n(781780),
  h = n(325749),
  g = n(981631),
  C = n(921944),
  x = n(832969);

function y(e) {
  let {
    children: t
  } = e, {
    showsNewUserExperience: a,
    openNewUserExperienceModal: c
  } = function() {
    let e = [i.z.ACTIVITY_POPOUT_NUX_MODAL],
      [t, a] = (0, s.US)(e),
      c = t === i.z.ACTIVITY_POPOUT_NUX_MODAL,
      u = r.useCallback(() => {
        a(C.L.USER_DISMISS)
      }, [a]);
    return {
      showsNewUserExperience: c,
      openNewUserExperienceModal: r.useCallback(() => {
        (0, l.ZDy)(async () => {
          let {
            default: e
          } = await n.e("49077").then(n.bind(n, 97761));
          return t => {
            var n, r;
            return (0, o.jsx)(e, (n = function(e) {
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
            }({}, t), r = r = {
              onClickButton: () => {
                u(), t.onClose()
              }
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                n.push.apply(n, o)
              }
              return n
            })(Object(r)).forEach(function(e) {
              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
            }), n))
          }
        }, {
          contextKey: l.u1M,
          onCloseCallback: () => {
            u()
          },
          backdropStyle: l.fCB.SUBTLE
        })
      }, [u])
    }
  }();
  return (r.useEffect(() => {
    a && c()
  }, [c, a]), a) ? (0, o.jsx)("div", {
    className: x.nuxBackground,
    children: (0, o.jsx)(p.Z, {})
  }) : t
}

function I() {
  let {
    embeddedActivity: e,
    channelId: t,
    guildId: n
  } = (0, a.cj)([f.ZP], () => {
    let e = f.ZP.getCurrentEmbeddedActivity(),
      t = (0, m.pY)(null == e ? void 0 : e.location),
      n = (0, m.jS)(null == e ? void 0 : e.location);
    return {
      embeddedActivity: e,
      channelId: t,
      guildId: n
    }
  }), i = r.useRef(null), s = (0, c.Z)(e);
  r.useEffect(() => {
    null != e ? clearTimeout(i.current) : null != s && null == e && (i.current = window.setTimeout(() => {
      (0, d.xv)(g.KJ3.ACTIVITY_POPOUT)
    }, 5e3))
  }, [e, s]);
  let p = (0, a.e7)([u.Z], () => {
      let t = null == e ? void 0 : e.applicationId;
      return null == t ? void 0 : u.Z.getApplication(t)
    }),
    C = (0, b.PR)();
  return (0, o.jsx)("div", {
    className: x.container,
    children: null == e || null == p ? (0, o.jsx)(l.$jN, {
      className: x.iframe
    }) : (0, o.jsx)("div", {
      className: x.loadedContentContainer,
      children: (0, o.jsxs)("div", {
        className: x.iframeAndHeaderContainer,
        children: [(0, o.jsx)("div", {
          className: x.headerContainer,
          children: (0, o.jsx)(h.Z, {
            applicationId: p.id,
            channelId: t
          })
        }), (0, o.jsx)("div", {
          className: x.iframeContainer,
          children: (0, o.jsx)(y, {
            children: (0, o.jsx)(v.Z, {
              channelId: t,
              guildId: n,
              embeddedActivity: e,
              application: p
            })
          })
        }), C ? (0, o.jsx)(_.Z, {
          isEmbeddedActivity: !0
        }) : null]
      })
    })
  })
}