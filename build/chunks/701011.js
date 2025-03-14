/** Chunk was on 27278 **/
t.d(n, {
  Z: () => P
}), t(47120);
var o = t(200651),
  r = t(192379),
  a = t(442837),
  i = t(704215),
  c = t(481060),
  l = t(110924),
  s = t(40851),
  u = t(812206),
  _ = t(243778),
  d = t(554370),
  p = t(788983),
  f = t(546247),
  b = t(214629),
  m = t(317381),
  h = t(16609),
  v = t(781780),
  g = t(325749),
  C = t(981631),
  x = t(921944),
  y = t(98666);

function I(e) {
  let {
    children: n
  } = e, {
    showsNewUserExperience: a,
    openNewUserExperienceModal: l
  } = function() {
    let e = [i.z.ACTIVITY_POPOUT_NUX_MODAL],
      [n, a] = (0, _.US)(e);
    return {
      showsNewUserExperience: n === i.z.ACTIVITY_POPOUT_NUX_MODAL,
      openNewUserExperienceModal: r.useCallback(() => {
        (0, c.ZDy)(async () => {
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
          contextKey: c.u1M,
          onCloseRequest: () => {},
          backdropStyle: c.fCB.SUBTLE
        })
      }, [a])
    }
  }();
  r.useEffect(() => {
    a && l()
  }, [l, a]);
  let {
    renderWindow: u
  } = r.useContext(s.ZP);
  return a ? (0, o.jsx)("div", {
    className: y.nuxBackground,
    children: (0, o.jsx)(f.Z, {
      eventTargetRef: {
        current: u.document.body
      }
    })
  }) : n
}

function P() {
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
  }), i = r.useRef(null), s = (0, l.Z)(e);
  r.useEffect(() => {
    null != e ? clearTimeout(i.current) : null != s && null == e && (i.current = window.setTimeout(() => {
      (0, p.xv)(C.KJ3.ACTIVITY_POPOUT)
    }, 5e3))
  }, [e, s]);
  let _ = (0, a.e7)([u.Z], () => {
      let n = null == e ? void 0 : e.applicationId;
      return null == n ? void 0 : u.Z.getApplication(n)
    }),
    f = (0, b.PR)();
  return (0, o.jsx)("div", {
    className: y.container,
    children: null == e || null == _ ? (0, o.jsx)(c.$jN, {
      className: y.iframe
    }) : (0, o.jsx)("div", {
      className: y.loadedContentContainer,
      children: (0, o.jsxs)("div", {
        className: y.iframeAndHeaderContainer,
        children: [(0, o.jsx)("div", {
          className: y.headerContainer,
          children: (0, o.jsx)(g.Z, {
            applicationId: _.id,
            channelId: n
          })
        }), (0, o.jsx)("div", {
          className: y.iframeContainer,
          children: (0, o.jsx)(I, {
            children: (0, o.jsx)(v.Z, {
              channelId: n,
              guildId: t,
              embeddedActivity: e,
              application: _
            })
          })
        }), f ? (0, o.jsx)(d.Z, {
          isEmbeddedActivity: !0
        }) : null]
      })
    })
  })
}