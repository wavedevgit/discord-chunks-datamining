/** Chunk was on 62880 **/
/** chunk id: 382405, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk876215 = require("./876215.js"),
  Chunk636977 = require("./636977.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk379357 = require("./379357.js"),
  Chunk26033 = require("./26033.js"),
  Chunk358696 = require("./358696.jsx"),
  Chunk740605 = require("./740605.js"),
  Chunk370370 = require("./370370.jsx"),
  Chunk91140 = require("./91140.jsx"),
  Chunk551228 = require("./551228.jsx"),
  Chunk555672 = require("./555672.jsx"),
  Chunk335326 = require("./335326.jsx"),
  Chunk297781 = require("./297781.jsx"),
  Chunk797342 = require("./797342.js"),
  Chunk313201 = require("./313201.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk633181 = require("./633181.jsx"),
  Chunk960870 = require("./960870.js"),
  Chunk139793 = require("./139793.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk576759 = require("./576759.jsx"),
  Chunk336383 = require("./336383.jsx"),
  Chunk373826 = require("./373826.jsx"),
  Chunk614716 = require("./614716.js"),
  Chunk228168 = require("./228168.js"),
  Chunk616922 = require("./616922.js"),
  Chunk671955 = require("./671955.js"),
  Chunk251806 = require("./251806.js");

function G(e) {
  for (var a = 1; a < arguments.length; a++) {
    var t = null != arguments[a] ? arguments[a] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(a) {
      var i;
      i = t[a], a in e ? Object.defineProperty(e, a, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[a] = i
    })
  }
  return e
}

function L(e) {
  let {
    user: a,
    entry: t,
    header: n,
    className: x,
    onClose: j
  } = e, p = (0, _.Dt)(), {
    themeType: b
  } = (0, C.z)(), {
    largeImage: y
  } = (0, d.rv)({
    entry: t,
    showCoverImage: false
  }), {
    appName: R,
    activity: k
  } = (0, E.n)(t), G = (0, f.Z)({
    location: "UserProfileRecentActivityCard",
    applicationId: t.extra.application_id,
    source: I.m1.UserProfile,
    sourceUserId: a.id,
    trackEntryPointImpression: true
  }), {
    analyticsLocations: L
  } = (0, o.ZP)(), U = (0, g.Z)({
    display: "recent",
    user: a,
    entry: t,
    analyticsLocations: L
  }), F = (0, P.Z)({
    userId: a.id,
    onAction: U
  });
  return null == G ? (0, i.jsx)("article", {
    "aria-labelledby": p,
    children: (0, i.jsxs)(N.Z.Overlay, {
      className: s()(w.card, x),
      ref: F,
      children: [n, (0, i.jsx)("div", {
        className: w.body,
        children: (0, i.jsxs)("div", {
          className: w.content,
          children: [(0, i.jsx)(m.E, {
            image: y,
            size: m.J.SIZE_60,
            className: w.image
          }), (0, i.jsx)("div", {
            className: w.details,
            children: (0, i.jsx)("div", {
              children: (0, i.jsx)(O.f, {
                variant: "heading-sm/semibold",
                text: R,
                id: p
              })
            })
          })]
        })
      })]
    })
  }) : (0, i.jsxs)(Z.Z, {
    ref: F,
    className: x,
    profileModalScrollTarget: A.Tb.RECENT_ACTIVITY,
    onAction: U,
    onClose: j,
    "aria-labelledby": p,
    children: [n, (0, i.jsx)(T.Z, {
      applicationId: t.extra.application_id,
      questContent: r.j.USER_PROFILE_ACTIVITY,
      children: e => (0, i.jsx)("div", {
        className: w.body,
        ref: e,
        children: (0, i.jsxs)("div", {
          className: w.content,
          children: [(0, i.jsx)(m.E, {
            image: y,
            size: m.J.SIZE_60,
            className: w.clickableImage,
            onClick: e => {
              e.stopPropagation(), U({
                action: "PRESS_IMAGE"
              }), G(e), b !== M.l.MODAL && b !== M.l.MODAL_V2 && (null == j || j())
            }
          }), (0, i.jsxs)("div", {
            className: w.details,
            children: [(0, i.jsx)(c.P3F, {
              className: w.clickableText,
              onClick: e => {
                e.stopPropagation(), U({
                  action: "PRESS_TEXT"
                }), G(e), b !== M.l.MODAL && b !== M.l.MODAL_V2 && (null == j || j())
              },
              children: (0, i.jsx)(O.f, {
                variant: "heading-sm/semibold",
                text: R,
                id: p
              })
            }), (0, i.jsx)(h.Gk, {
              location: h.Gt.USER_PROFILE,
              className: w.badges,
              children: t.content_type === l.s.TOP_GAME ? v.Hs.map((e, a) => (0, i.jsx)(e, {
                entry: t
              }, "entry-".concat(a))) : u.W.map((e, a) => (0, i.jsx)(e, {
                entry: t
              }, "entry-".concat(a)))
            })]
          })]
        })
      })
    }), (0, i.jsx)(S.Z, {
      applicationId: t.extra.application_id,
      onAction: U,
      onClose: j,
      activity: k
    })]
  })
}

function U(e) {
  let {
    user: a,
    entry: t,
    header: n,
    className: s,
    onClose: l
  } = e, r = (0, _.Dt)(), {
    largeImage: x
  } = (0, d.rv)({
    entry: t
  }), {
    url: p
  } = t.extra, {
    analyticsLocations: u
  } = (0, o.ZP)(), b = (0, g.Z)({
    display: "recent",
    user: a,
    entry: t,
    analyticsLocations: u
  }), v = (0, P.Z)({
    userId: a.id,
    onAction: b
  });
  return (0, i.jsxs)(Z.Z, {
    ref: v,
    className: s,
    profileModalScrollTarget: A.Tb.RECENT_ACTIVITY,
    onAction: b,
    onClose: l,
    "aria-labelledby": r,
    children: [n, (0, i.jsx)("div", {
      className: w.body,
      children: (0, i.jsxs)("div", {
        className: w.content,
        children: [null == p || "" === p ? (0, i.jsx)(m.E, {
          aspectRatio: "crunchyroll",
          image: x,
          size: m.J.SIZE_60,
          className: w.image
        }) : (0, i.jsx)(m.E, {
          aspectRatio: "crunchyroll",
          image: x,
          size: m.J.SIZE_60,
          className: w.clickableImage,
          onClick: e => {
            e.stopPropagation(), b({
              action: "PRESS_IMAGE"
            }), (0, j.Y)(p)
          }
        }), (0, i.jsxs)("div", {
          className: w.details,
          children: [null == p || "" === p ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(O.f, {
              variant: "heading-sm/semibold",
              text: t.extra.media_title,
              id: r
            }), (0, i.jsx)(O.Z, {
              variant: "text-xs/normal",
              text: t.extra.media_subtitle
            })]
          }) : (0, i.jsxs)(c.P3F, {
            className: w.clickableText,
            onClick: e => {
              e.stopPropagation(), b({
                action: "PRESS_TEXT"
              }), (0, j.Y)(p)
            },
            children: [(0, i.jsx)(O.f, {
              variant: "heading-sm/semibold",
              text: t.extra.media_title,
              id: r
            }), (0, i.jsx)(O.Z, {
              variant: "text-xs/normal",
              text: t.extra.media_subtitle
            })]
          }), (0, i.jsx)(h.Gk, {
            location: h.Gt.USER_PROFILE,
            className: w.badges,
            children: y.t.map((e, a) => (0, i.jsx)(e, {
              entry: t
            }, "entry-".concat(a)))
          })]
        })]
      })
    })]
  })
}

function F(e) {
  var a, t;
  let {
    user: n,
    entry: s,
    header: l,
    className: r,
    onClose: c
  } = e, x = (0, _.Dt)(), {
    largeImage: p
  } = (0, d.rv)({
    entry: s
  }), {
    analyticsLocations: u
  } = (0, o.ZP)(), v = (0, g.Z)({
    display: "recent",
    user: n,
    entry: s,
    analyticsLocations: u
  }), y = (0, P.Z)({
    userId: n.id,
    onAction: v
  }), E = null == (a = s.extra.entries[0]) ? true : a.media;
  return null == E ? null : (0, i.jsxs)(Z.Z, {
    ref: y,
    className: r,
    profileModalScrollTarget: A.Tb.RECENT_ACTIVITY,
    onAction: v,
    onClose: c,
    "aria-labelledby": x,
    children: [l, (0, i.jsx)("div", {
      className: w.body,
      children: (0, i.jsxs)("div", {
        className: w.content,
        children: [(0, i.jsx)(m.E, {
          image: p,
          size: m.J.SIZE_60,
          className: w.clickableImage,
          onClick: e => {
            e.stopPropagation(), v({
              action: "OPEN_SPOTIFY_ALBUM"
            }), (0, j.o)(k.Hw.ALBUM, E.external_parent_id)
          }
        }), (0, i.jsxs)("div", {
          className: w.details,
          children: [(0, i.jsxs)("div", {
            children: [(0, i.jsx)(O.f, {
              variant: "heading-sm/semibold",
              text: E.title,
              onClick: () => {
                v({
                  action: "OPEN_SPOTIFY_TRACK"
                }), (0, j.o)(k.Hw.TRACK, E.external_id)
              },
              id: x
            }), (0, i.jsx)(O.Z, {
              variant: "text-xs/normal",
              text: null == (t = E.artists[0]) ? true : t.name,
              onClick: () => {
                var e;
                v({
                  action: "OPEN_SPOTIFY_ARTIST"
                }), (0, j.o)(k.Hw.ARTIST, null == (e = E.artists[0]) ? true : e.external_id)
              }
            })]
          }), (0, i.jsx)(h.Gk, {
            location: h.Gt.USER_PROFILE,
            className: w.badges,
            children: b.te.map((e, a) => (0, i.jsx)(e, {
              entry: s
            }, "entry-".concat(a)))
          })]
        })]
      })
    })]
  })
}

function Y(e) {
  let {
    user: a,
    entry: t,
    header: n,
    className: s,
    onClose: l
  } = e, c = (0, _.Dt)(), {
    largeImage: x
  } = (0, d.rv)({
    entry: t,
    showCoverImage: false
  }), {
    analyticsLocations: j
  } = (0, o.ZP)(), u = (0, g.Z)({
    display: "recent",
    user: a,
    entry: t,
    analyticsLocations: j
  }), b = (0, P.Z)({
    userId: a.id,
    onAction: u
  }), v = (0, R.Z)({
    applicationId: t.extra.application_id,
    onClose: l
  });
  return (0, i.jsxs)(Z.Z, {
    ref: b,
    className: s,
    profileModalScrollTarget: A.Tb.RECENT_ACTIVITY,
    onAction: u,
    onClose: l,
    "aria-labelledby": c,
    children: [n, (0, i.jsx)(T.Z, {
      applicationId: t.extra.application_id,
      questContent: r.j.USER_PROFILE_ACTIVITY,
      children: e => (0, i.jsx)("div", {
        className: w.body,
        ref: e,
        children: (0, i.jsxs)("div", {
          className: w.content,
          children: [(0, i.jsx)(m.E, {
            image: x,
            size: m.J.SIZE_60,
            className: w.clickableImage,
            onClick: e => {
              e.stopPropagation(), u({
                action: "PRESS_IMAGE"
              }), v()
            }
          }), (0, i.jsxs)("div", {
            className: w.details,
            children: [(0, i.jsx)("div", {
              children: (0, i.jsx)(O.f, {
                variant: "heading-sm/semibold",
                text: t.extra.activity_name,
                onClick: () => {
                  u({
                    action: "PRESS_TEXT"
                  }), v()
                },
                id: c
              })
            }), (0, i.jsx)(h.Gk, {
              location: h.Gt.USER_PROFILE,
              className: w.badges,
              children: p.j.map((e, a) => (0, i.jsx)(e, {
                entry: t
              }, "entry-".concat(a)))
            })]
          })]
        })
      })
    })]
  })
}

function D(e) {
  var {
    entry: a
  } = e, t = function(e, a) {
    if (null == e) return {};
    var t, i, n = function(e, a) {
      if (null == e) return {};
      var t, i, n = {},
        s = Object.keys(e);
      for (i = 0; i < s.length; i++) t = s[i], a.indexOf(t) >= 0 || (n[t] = e[t]);
      return n
    }(e, a);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (i = 0; i < s.length; i++) t = s[i], !(a.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
    }
    return n
  }(e, ["entry"]);
  return (0, x.dX)(a) ? (0, i.jsx)(L, G({
    entry: a
  }, t)) : (0, x.y0)(a) ? (0, i.jsx)(U, G({
    entry: a
  }, t)) : (0, x.dU)(a) ? (0, i.jsx)(F, G({
    entry: a
  }, t)) : (0, x.Mq)(a) ? (0, i.jsx)(Y, G({
    entry: a
  }, t)) : null
}