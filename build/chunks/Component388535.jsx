/** Chunk was on 10117 **/
/** chunk id: 388535, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  A: () => F
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk681154 = require("./681154.js"),
  Chunk696292 = require("./696292.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk939341 = require("./939341.js"),
  Chunk20805 = require("./20805.js"),
  Chunk623671 = require("./623671.jsx"),
  Chunk261020 = require("./261020.js"),
  Chunk468581 = require("./468581.jsx"),
  Chunk322789 = require("./322789.jsx"),
  Chunk363670 = require("./363670.jsx"),
  Chunk977001 = require("./977001.jsx"),
  Chunk514243 = require("./514243.jsx"),
  Chunk506326 = require("./506326.jsx"),
  Chunk299846 = require("./299846.js"),
  Chunk915089 = require("./915089.js"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk753845 = require("./753845.jsx"),
  Chunk92240 = require("./92240.js"),
  Chunk257367 = require("./257367.js"),
  Chunk946356 = require("./946356.jsx"),
  Chunk939496 = require("./939496.jsx"),
  Chunk624951 = require("./624951.jsx"),
  Chunk584904 = require("./584904.jsx"),
  Chunk531648 = require("./531648.jsx"),
  Chunk695311 = require("./695311.js"),
  Chunk518477 = require("./518477.js"),
  Chunk272984 = require("./272984.js"),
  Chunk996988 = require("./996988.js"),
  Chunk380297 = require("./380297.js");

function U(e) {
  for (var a = 1; a < arguments.length; a++) {
    var n = null != arguments[a] ? arguments[a] : {},
      t = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), t.forEach(function(a) {
      var t;
      t = n[a], a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[a] = t
    })
  }
  return e
}

function V(e) {
  let {
    user: a,
    entry: n,
    header: s,
    className: x,
    onClose: p
  } = e, j = (0, E.GV)(), {
    themeType: y
  } = (0, C.E)(), {
    largeImage: h
  } = (0, d.nO)({
    entry: n,
    showCoverImage: false
  }), {
    appName: g,
    activity: k
  } = (0, f.u)(n), U = (0, v.A)({
    location: "UserProfileRecentActivityCard",
    applicationId: n.extra.application_id,
    source: I.Ob.UserProfile,
    sourceUserId: a.id,
    trackEntryPointImpression: true
  }), {
    analyticsLocations: V
  } = (0, o.Ay)(), z = (0, N.A)({
    display: "recent",
    user: a,
    entry: n,
    analyticsLocations: V
  }), G = (0, O.A)({
    userId: a.id,
    onAction: z
  });
  return null == U ? (0, t.jsx)("article", {
    "aria-labelledby": j,
    children: (0, t.jsxs)(T.A.Overlay, {
      className: i()(L.Nr, x),
      ref: G,
      children: [s, (0, t.jsx)("div", {
        className: L.rf,
        children: (0, t.jsxs)("div", {
          className: L.Qs,
          children: [(0, t.jsx)(m.d, {
            image: h,
            size: m.w.SIZE_60,
            className: L.Sl
          }), (0, t.jsx)("div", {
            className: L.zH,
            children: (0, t.jsx)("div", {
              children: (0, t.jsx)(P.Q, {
                variant: "heading-sm/semibold",
                text: g,
                id: j
              })
            })
          })]
        })
      })]
    })
  }) : (0, t.jsxs)(R.A, {
    ref: G,
    className: x,
    profileModalScrollTarget: M.bk.RECENT_ACTIVITY,
    onAction: z,
    onClose: p,
    "aria-labelledby": j,
    children: [s, (0, t.jsx)(b.A, {
      applicationId: n.extra.application_id,
      questContent: r.u.USER_PROFILE_ACTIVITY,
      children: e => (0, t.jsx)("div", {
        className: L.rf,
        ref: e,
        children: (0, t.jsxs)("div", {
          className: L.Qs,
          children: [(0, t.jsx)(m.d, {
            image: h,
            size: m.w.SIZE_60,
            className: L.mM,
            onClick: e => {
              e.stopPropagation(), z({
                action: "PRESS_IMAGE"
              }), U(e), y !== w.d.MODAL && y !== w.d.MODAL_V2 && (null == p || p())
            }
          }), (0, t.jsxs)("div", {
            className: L.zH,
            children: [(0, t.jsx)(c.DUT, {
              className: L.sd,
              onClick: e => {
                e.stopPropagation(), z({
                  action: "PRESS_TEXT"
                }), U(e), y !== w.d.MODAL && y !== w.d.MODAL_V2 && (null == p || p())
              },
              children: (0, t.jsx)(P.Q, {
                variant: "heading-sm/semibold",
                text: g,
                id: j
              })
            }), (0, t.jsx)(_.mG, {
              location: _.N5.USER_PROFILE,
              className: L.jp,
              children: n.content_type === l.I.TOP_GAME ? A.ac.map((e, a) => (0, t.jsx)(e, {
                entry: n
              }, "entry-".concat(a))) : u.n.map((e, a) => (0, t.jsx)(e, {
                entry: n
              }, "entry-".concat(a)))
            })]
          })]
        })
      })
    }), (0, t.jsx)(S.A, {
      applicationId: n.extra.application_id,
      onAction: z,
      onClose: p,
      activity: k
    })]
  })
}

function z(e) {
  let {
    user: a,
    entry: n,
    header: s,
    className: i,
    onClose: l
  } = e, r = (0, E.GV)(), {
    largeImage: x
  } = (0, d.nO)({
    entry: n
  }), {
    url: j
  } = n.extra, {
    analyticsLocations: u
  } = (0, o.Ay)(), y = (0, N.A)({
    display: "recent",
    user: a,
    entry: n,
    analyticsLocations: u
  }), A = (0, O.A)({
    userId: a.id,
    onAction: y
  });
  return (0, t.jsxs)(R.A, {
    ref: A,
    className: i,
    profileModalScrollTarget: M.bk.RECENT_ACTIVITY,
    onAction: y,
    onClose: l,
    "aria-labelledby": r,
    children: [s, (0, t.jsx)("div", {
      className: L.rf,
      children: (0, t.jsxs)("div", {
        className: L.Qs,
        children: [null == j || "" === j ? (0, t.jsx)(m.d, {
          aspectRatio: "crunchyroll",
          image: x,
          size: m.w.SIZE_60,
          className: L.Sl
        }) : (0, t.jsx)(m.d, {
          aspectRatio: "crunchyroll",
          image: x,
          size: m.w.SIZE_60,
          className: L.mM,
          onClick: e => {
            e.stopPropagation(), y({
              action: "PRESS_IMAGE"
            }), (0, p.C)(j)
          }
        }), (0, t.jsxs)("div", {
          className: L.zH,
          children: [null == j || "" === j ? (0, t.jsxs)("div", {
            children: [(0, t.jsx)(P.Q, {
              variant: "heading-sm/semibold",
              text: n.extra.media_title,
              id: r
            }), (0, t.jsx)(P.A, {
              variant: "text-xs/normal",
              text: n.extra.media_subtitle
            })]
          }) : (0, t.jsxs)(c.DUT, {
            className: L.sd,
            onClick: e => {
              e.stopPropagation(), y({
                action: "PRESS_TEXT"
              }), (0, p.C)(j)
            },
            children: [(0, t.jsx)(P.Q, {
              variant: "heading-sm/semibold",
              text: n.extra.media_title,
              id: r
            }), (0, t.jsx)(P.A, {
              variant: "text-xs/normal",
              text: n.extra.media_subtitle
            })]
          }), (0, t.jsx)(_.mG, {
            location: _.N5.USER_PROFILE,
            className: L.jp,
            children: h.R.map((e, a) => (0, t.jsx)(e, {
              entry: n
            }, "entry-".concat(a)))
          })]
        })]
      })
    })]
  })
}

function G(e) {
  var a, n;
  let {
    user: s,
    entry: i,
    header: l,
    className: r,
    onClose: c
  } = e, x = (0, E.GV)(), {
    largeImage: j
  } = (0, d.nO)({
    entry: i
  }), {
    analyticsLocations: u
  } = (0, o.Ay)(), A = (0, N.A)({
    display: "recent",
    user: s,
    entry: i,
    analyticsLocations: u
  }), h = (0, O.A)({
    userId: s.id,
    onAction: A
  }), f = null == (a = i.extra.entries[0]) ? true : a.media;
  return null == f ? null : (0, t.jsxs)(R.A, {
    ref: h,
    className: r,
    profileModalScrollTarget: M.bk.RECENT_ACTIVITY,
    onAction: A,
    onClose: c,
    "aria-labelledby": x,
    children: [l, (0, t.jsx)("div", {
      className: L.rf,
      children: (0, t.jsxs)("div", {
        className: L.Qs,
        children: [(0, t.jsx)(m.d, {
          image: j,
          size: m.w.SIZE_60,
          className: L.mM,
          onClick: e => {
            e.stopPropagation(), A({
              action: "OPEN_SPOTIFY_ALBUM"
            }), (0, p.n)(k.M0.ALBUM, f.external_parent_id)
          }
        }), (0, t.jsxs)("div", {
          className: L.zH,
          children: [(0, t.jsxs)("div", {
            children: [(0, t.jsx)(P.Q, {
              variant: "heading-sm/semibold",
              text: f.title,
              onClick: () => {
                A({
                  action: "OPEN_SPOTIFY_TRACK"
                }), (0, p.n)(k.M0.TRACK, f.external_id)
              },
              id: x
            }), (0, t.jsx)(P.A, {
              variant: "text-xs/normal",
              text: null == (n = f.artists[0]) ? true : n.name,
              onClick: () => {
                var e;
                A({
                  action: "OPEN_SPOTIFY_ARTIST"
                }), (0, p.n)(k.M0.ARTIST, null == (e = f.artists[0]) ? true : e.external_id)
              }
            })]
          }), (0, t.jsx)(_.mG, {
            location: _.N5.USER_PROFILE,
            className: L.jp,
            children: y.hh.map((e, a) => (0, t.jsx)(e, {
              entry: i
            }, "entry-".concat(a)))
          })]
        })]
      })
    })]
  })
}

function Q(e) {
  let {
    user: a,
    entry: n,
    header: s,
    className: i,
    onClose: l
  } = e, c = (0, E.GV)(), {
    largeImage: x
  } = (0, d.nO)({
    entry: n,
    showCoverImage: false
  }), {
    analyticsLocations: p
  } = (0, o.Ay)(), u = (0, N.A)({
    display: "recent",
    user: a,
    entry: n,
    analyticsLocations: p
  }), y = (0, O.A)({
    userId: a.id,
    onAction: u
  }), A = (0, g.A)({
    applicationId: n.extra.application_id,
    onClose: l
  });
  return (0, t.jsxs)(R.A, {
    ref: y,
    className: i,
    profileModalScrollTarget: M.bk.RECENT_ACTIVITY,
    onAction: u,
    onClose: l,
    "aria-labelledby": c,
    children: [s, (0, t.jsx)(b.A, {
      applicationId: n.extra.application_id,
      questContent: r.u.USER_PROFILE_ACTIVITY,
      children: e => (0, t.jsx)("div", {
        className: L.rf,
        ref: e,
        children: (0, t.jsxs)("div", {
          className: L.Qs,
          children: [(0, t.jsx)(m.d, {
            image: x,
            size: m.w.SIZE_60,
            className: L.mM,
            onClick: e => {
              e.stopPropagation(), u({
                action: "PRESS_IMAGE"
              }), A()
            }
          }), (0, t.jsxs)("div", {
            className: L.zH,
            children: [(0, t.jsx)("div", {
              children: (0, t.jsx)(P.Q, {
                variant: "heading-sm/semibold",
                text: n.extra.activity_name,
                onClick: () => {
                  u({
                    action: "PRESS_TEXT"
                  }), A()
                },
                id: c
              })
            }), (0, t.jsx)(_.mG, {
              location: _.N5.USER_PROFILE,
              className: L.jp,
              children: j.$.map((e, a) => (0, t.jsx)(e, {
                entry: n
              }, "entry-".concat(a)))
            })]
          })]
        })
      })
    })]
  })
}

function F(e) {
  let {
    entry: a
  } = e, n = function(e, a) {
    if (null == e) return {};
    var n, t, s, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (s = 0, n = Reflect.ownKeys(e); s < n.length; s++) t = n[s], !(a.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
      return i
    }
    if (i = function(e, a) {
        if (null == e) return {};
        var n, t, s = {},
          i = Object.getOwnPropertyNames(e);
        for (t = 0; t < i.length; t++) n = i[t], !(a.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
        return s
      }(e, a), Object.getOwnPropertySymbols)
      for (s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++) t = n[s], !(a.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
    return i
  }(e, ["entry"]);
  return (0, x.zD)(a) ? (0, t.jsx)(V, U({
    entry: a
  }, n)) : (0, x.Lf)(a) ? (0, t.jsx)(z, U({
    entry: a
  }, n)) : (0, x.Tq)(a) ? (0, t.jsx)(G, U({
    entry: a
  }, n)) : (0, x.yl)(a) ? (0, t.jsx)(Q, U({
    entry: a
  }, n)) : null
}