/** Chunk was on 62880 **/
t.d(n, {
  Z: () => V
}), t(388685);
var s = t(200651);
t(192379);
var a = t(120356),
  i = t.n(a),
  l = t(876215),
  r = t(442837),
  c = t(481060),
  o = t(40851),
  d = t(906732),
  x = t(499254),
  m = t(827498),
  u = t(397698),
  j = t(541716),
  p = t(379357),
  h = t(26033),
  v = t(358696),
  b = t(740605),
  E = t(370370),
  y = t(91140),
  _ = t(551228),
  I = t(555672),
  Z = t(335326),
  P = t(297781),
  N = t(797342),
  g = t(810568),
  T = t(168524),
  O = t(592125),
  f = t(944486),
  C = t(960870),
  S = t(139793),
  R = t(502762),
  A = t(652853),
  k = t(336383),
  L = t(373826),
  Y = t(228168),
  G = t(981631),
  M = t(616922),
  z = t(227832);

function w(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      s = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), s.forEach(function(n) {
      var s;
      s = t[n], n in e ? Object.defineProperty(e, n, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = s
    })
  }
  return e
}

function U(e) {
  let {
    user: n,
    entry: t,
    header: a,
    className: r,
    onClose: o
  } = e, {
    themeType: x
  } = (0, A.z)(), m = {
    [z.fullSize]: x === Y.lY.MODAL
  }, {
    largeImage: u
  } = (0, p.rv)({
    entry: t,
    showCoverImage: !1
  }), {
    appName: j
  } = (0, N.n)(t), h = (0, T.Z)({
    location: "UserProfileRecentActivityCard",
    applicationId: t.extra.application_id,
    source: g.m1.UserProfile,
    sourceUserId: n.id,
    trackEntryPointImpression: !0
  }), {
    analyticsLocations: b
  } = (0, d.ZP)(), E = (0, C.Z)({
    display: "recent",
    user: n,
    entry: t,
    analyticsLocations: b
  }), _ = (0, S.Z)({
    userId: n.id,
    onAction: E
  }), Z = () => t.content_type === l.s.TOP_GAME ? I.Hs.map((e, n) => (0, s.jsx)(e, {
    entry: t
  }, "entry-".concat(n))) : y.W.map((e, n) => (0, s.jsx)(e, {
    entry: t
  }, "entry-".concat(n)));
  return null == h ? (0, s.jsxs)(R.Z.Overlay, {
    className: i()(z.card, r),
    ref: _,
    children: [a, (0, s.jsx)("div", {
      className: z.body,
      children: (0, s.jsxs)("div", {
        className: i()(z.content, m),
        children: [(0, s.jsx)(v.E, {
          image: u,
          size: v.J.SIZE_60
        }), (0, s.jsxs)("div", {
          className: z.details,
          children: [(0, s.jsx)("div", {
            children: (0, s.jsx)(L.Z, {
              variant: "heading-sm/semibold",
              text: j
            })
          }), (0, s.jsx)(P.Gk, {
            location: P.Gt.USER_PROFILE,
            className: z.badges,
            children: Z()
          })]
        })]
      })
    })]
  }) : (0, s.jsxs)(k.Z, {
    ref: _,
    className: r,
    subsection: Y.Tb.RECENT_ACTIVITY,
    onAction: E,
    onClose: o,
    children: [a, (0, s.jsx)("div", {
      className: z.body,
      children: (0, s.jsxs)("div", {
        className: i()(z.content, m),
        children: [(0, s.jsx)(v.E, {
          image: u,
          size: v.J.SIZE_60,
          className: z.clickableImage,
          onClick: e => {
            e.stopPropagation(), E({
              action: "PRESS_IMAGE"
            }), h(e), x !== Y.lY.MODAL && (null == o || o())
          }
        }), (0, s.jsxs)("div", {
          className: z.details,
          children: [(0, s.jsx)(c.P3F, {
            className: z.clickableText,
            onClick: e => {
              e.stopPropagation(), E({
                action: "PRESS_TEXT"
              }), h(e), x !== Y.lY.MODAL && (null == o || o())
            },
            children: (0, s.jsx)(L.Z, {
              variant: "heading-sm/semibold",
              text: j
            })
          }), (0, s.jsx)(P.Gk, {
            location: P.Gt.USER_PROFILE,
            className: z.badges,
            children: Z()
          })]
        })]
      })
    })]
  })
}

function F(e) {
  let {
    user: n,
    entry: t,
    header: a,
    className: l,
    onClose: r
  } = e, {
    themeType: o
  } = (0, A.z)(), x = {
    [z.fullSize]: o === Y.lY.MODAL
  }, {
    largeImage: m
  } = (0, p.rv)({
    entry: t
  }), {
    url: u
  } = t.extra, {
    analyticsLocations: j
  } = (0, d.ZP)(), h = (0, C.Z)({
    display: "recent",
    user: n,
    entry: t,
    analyticsLocations: j
  }), E = (0, S.Z)({
    userId: n.id,
    onAction: h
  });
  return (0, s.jsxs)(k.Z, {
    ref: E,
    className: l,
    subsection: Y.Tb.RECENT_ACTIVITY,
    onAction: h,
    onClose: r,
    children: [a, (0, s.jsx)("div", {
      className: z.body,
      children: (0, s.jsxs)("div", {
        className: i()(z.content, x),
        children: [null == u || "" === u ? (0, s.jsx)(v.E, {
          aspectRatio: "crunchyroll",
          image: m,
          size: v.J.SIZE_60
        }) : (0, s.jsx)(v.E, {
          aspectRatio: "crunchyroll",
          image: m,
          size: v.J.SIZE_60,
          className: z.clickableImage,
          onClick: e => {
            e.stopPropagation(), h({
              action: "PRESS_IMAGE"
            }), (0, b.Y)(u)
          }
        }), (0, s.jsxs)("div", {
          className: z.details,
          children: [null == u || "" === u ? (0, s.jsxs)("div", {
            children: [(0, s.jsx)(L.Z, {
              variant: "heading-sm/semibold",
              text: t.extra.media_title
            }), (0, s.jsx)(L.Z, {
              variant: "text-xs/normal",
              text: t.extra.media_subtitle
            })]
          }) : (0, s.jsxs)(c.P3F, {
            className: z.clickableText,
            onClick: e => {
              e.stopPropagation(), h({
                action: "PRESS_TEXT"
              }), (0, b.Y)(u)
            },
            children: [(0, s.jsx)(L.Z, {
              variant: "heading-sm/semibold",
              text: t.extra.media_title
            }), (0, s.jsx)(L.Z, {
              variant: "text-xs/normal",
              text: t.extra.media_subtitle
            })]
          }), (0, s.jsx)(P.Gk, {
            location: P.Gt.USER_PROFILE,
            className: z.badges,
            children: Z.t.map((e, n) => (0, s.jsx)(e, {
              entry: t
            }, "entry-".concat(n)))
          })]
        })]
      })
    })]
  })
}

function D(e) {
  var n, t;
  let {
    user: a,
    entry: l,
    header: r,
    className: c,
    onClose: o
  } = e, {
    themeType: x
  } = (0, A.z)(), m = {
    [z.fullSize]: x === Y.lY.MODAL
  }, {
    largeImage: u
  } = (0, p.rv)({
    entry: l
  }), {
    analyticsLocations: j
  } = (0, d.ZP)(), h = (0, C.Z)({
    display: "recent",
    user: a,
    entry: l,
    analyticsLocations: j
  }), E = (0, S.Z)({
    userId: a.id,
    onAction: h
  }), y = null == (n = l.extra.entries[0]) ? void 0 : n.media;
  return null == y ? null : (0, s.jsxs)(k.Z, {
    ref: E,
    className: c,
    subsection: Y.Tb.RECENT_ACTIVITY,
    onAction: h,
    onClose: o,
    children: [r, (0, s.jsx)("div", {
      className: z.body,
      children: (0, s.jsxs)("div", {
        className: i()(z.content, m),
        children: [(0, s.jsx)(v.E, {
          image: u,
          size: v.J.SIZE_60,
          className: z.clickableImage,
          onClick: e => {
            e.stopPropagation(), h({
              action: "OPEN_SPOTIFY_ALBUM"
            }), (0, b.o)(M.Hw.ALBUM, y.external_parent_id)
          }
        }), (0, s.jsxs)("div", {
          className: z.details,
          children: [(0, s.jsxs)("div", {
            children: [(0, s.jsx)(L.Z, {
              variant: "heading-sm/semibold",
              text: y.title,
              onClick: () => {
                h({
                  action: "OPEN_SPOTIFY_TRACK"
                }), (0, b.o)(M.Hw.TRACK, y.external_id)
              }
            }), (0, s.jsx)(L.Z, {
              variant: "text-xs/normal",
              text: null == (t = y.artists[0]) ? void 0 : t.name,
              onClick: () => {
                var e;
                h({
                  action: "OPEN_SPOTIFY_ARTIST"
                }), (0, b.o)(M.Hw.ARTIST, null == (e = y.artists[0]) ? void 0 : e.external_id)
              }
            })]
          }), (0, s.jsx)(P.Gk, {
            location: P.Gt.USER_PROFILE,
            className: z.badges,
            children: _.te.map((e, n) => (0, s.jsx)(e, {
              entry: l
            }, "entry-".concat(n)))
          })]
        })]
      })
    })]
  })
}

function J(e) {
  let {
    user: n,
    entry: t,
    header: a,
    className: l,
    onClose: c
  } = e, {
    themeType: h
  } = (0, A.z)(), b = {
    [z.fullSize]: h === Y.lY.MODAL
  }, {
    largeImage: y
  } = (0, p.rv)({
    entry: t,
    showCoverImage: !1
  }), {
    analyticsLocations: _,
    newestAnalyticsLocation: I
  } = (0, d.ZP)(), Z = (0, C.Z)({
    display: "recent",
    user: n,
    entry: t,
    analyticsLocations: _
  }), N = (0, S.Z)({
    userId: n.id,
    onAction: Z
  }), g = (0, o.bp)() === G.IlC.POPOUT, T = (0, r.e7)([O.Z, f.Z], () => O.Z.getChannel(f.Z.getChannelId())), R = () => {
    null == c || c(), (null == T ? void 0 : T.isVocal()) ? (0, u.Z)({
      context: {
        type: "channel",
        channel: T
      },
      analyticsLocation: I,
      openInPopout: g
    }) : (0, x.__)(m._b.TEXT, j.Ie.NORMAL, {
      applicationId: t.extra.application_id
    })
  };
  return (0, s.jsxs)(k.Z, {
    ref: N,
    className: l,
    subsection: Y.Tb.RECENT_ACTIVITY,
    onAction: Z,
    onClose: c,
    children: [a, (0, s.jsx)("div", {
      className: z.body,
      children: (0, s.jsxs)("div", {
        className: i()(z.content, b),
        children: [(0, s.jsx)(v.E, {
          image: y,
          size: v.J.SIZE_60,
          className: z.clickableImage,
          onClick: e => {
            e.stopPropagation(), Z({
              action: "PRESS_IMAGE"
            }), R()
          }
        }), (0, s.jsxs)("div", {
          className: z.details,
          children: [(0, s.jsx)("div", {
            children: (0, s.jsx)(L.Z, {
              variant: "heading-sm/semibold",
              text: t.extra.activity_name,
              onClick: () => {
                Z({
                  action: "PRESS_TEXT"
                }), R()
              }
            })
          }), (0, s.jsx)(P.Gk, {
            location: P.Gt.USER_PROFILE,
            className: z.badges,
            children: E.j.map((e, n) => (0, s.jsx)(e, {
              entry: t
            }, "entry-".concat(n)))
          })]
        })]
      })
    })]
  })
}

function V(e) {
  var {
    entry: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, s, a = function(e, n) {
      if (null == e) return {};
      var t, s, a = {},
        i = Object.keys(e);
      for (s = 0; s < i.length; s++) t = i[s], n.indexOf(t) >= 0 || (a[t] = e[t]);
      return a
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (s = 0; s < i.length; s++) t = i[s], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
    }
    return a
  }(e, ["entry"]);
  return (0, h.dX)(n) ? (0, s.jsx)(U, w({
    entry: n
  }, t)) : (0, h.y0)(n) ? (0, s.jsx)(F, w({
    entry: n
  }, t)) : (0, h.dU)(n) ? (0, s.jsx)(D, w({
    entry: n
  }, t)) : (0, h.Mq)(n) ? (0, s.jsx)(J, w({
    entry: n
  }, t)) : null
}