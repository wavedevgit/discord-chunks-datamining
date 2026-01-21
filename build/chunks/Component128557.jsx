/** Chunk was on 82124 **/
/** chunk id: 128557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R,
  i: () => w
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211266 = require("./211266.js"),
  Chunk699682 = require("./699682.js"),
  Chunk367907 = require("./367907.js"),
  Chunk644914 = require("./644914.js"),
  Chunk434404 = require("./434404.js"),
  Chunk330010 = require("./330010.js"),
  Chunk978946 = require("./978946.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk709054 = require("./709054.js"),
  Chunk967128 = require("./967128.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231873 = require("./231873.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk91023 = require("./91023.js");

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e) {
  let {
    className: t,
    iconUrl: n,
    icon: l,
    header: o,
    completed: s,
    onClick: c
  } = e, [d, f] = i.useState(false), h = (0, p.Z)(s);
  return i.useEffect(() => {
    null != h && s !== h && (f(true), setTimeout(() => f(false), 1e3))
  }, [s, h]), (0, r.jsxs)(u.P3F, {
    className: a()(t, N.card, {
      [N.completed]: s
    }),
    onClick: c,
    children: [null != l ? l : (0, r.jsx)("img", {
      className: N.icon,
      src: n,
      alt: ""
    }), (0, r.jsx)(u.Text, {
      color: "text-strong",
      className: a()(N.cardTextContainer, N.cardHeader),
      variant: "text-sm/normal",
      children: o
    }), s ? (0, r.jsx)(u.dz2, {
      size: "md",
      color: "currentColor",
      className: a()(N.checkmark, {
        [N.animate]: d
      })
    }) : (0, r.jsx)(j.Z, {
      className: N.arrow,
      direction: j.Z.Directions.RIGHT
    })]
  })
}

function R(e) {
  let {
    channel: t
  } = e, l = (0, s.e7)([v.Z], () => null != t ? v.Z.getGuild(t.getGuildId()) : null, [t]), p = null != l && S.default.extractTimestamp(l.id) < Date.now() - I._8R, j = (0, s.e7)([y.default], () => (null == l ? true : l.ownerId) === y.default.getId(), [l]), {
    canInvite: R,
    canManageGuild: D,
    canMessage: M
  } = (0, h.TE)(t, l), k = (0, s.e7)([O.default], () => {
    var e, t;
    return (null == (e = O.default.getCurrentUser()) ? true : e.desktop) === true || (null == (t = O.default.getCurrentUser()) ? true : t.mobile) === true
  }), {
    guildPopulated: L,
    guildMessaged: U,
    guildPersonalized: G
  } = (0, h.h_)(l), {
    handleInvite: B,
    handleMessage: F,
    handlePersonalize: H,
    handleDownload: V,
    handleAddApplication: z
  } = function(e) {
    let t = i.useCallback(() => {
        f.ZP.trackWithMetadata(I.rMx.SERVER_SETUP_CTA_CLICKED, {
          setup_type: P.Ft.CHANNEL_WELCOME,
          action: P.j7.INVITE
        }), null != e && (0, u.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("7654"), n.e("49049"), n.e("97016")]).then(n.bind(n, 560114));
          return n => (0, r.jsx)(t, A(T({}, n), {
            guild: e,
            source: I.t4x.CHANNEL_WELCOME,
            analyticsLocation: {
              section: I.jXE.CHANNEL_WELCOME_CTA
            }
          }))
        })
      }, [e]),
      l = i.useCallback(() => {
        f.ZP.trackWithMetadata(I.rMx.SERVER_SETUP_CTA_CLICKED, {
          setup_type: P.Ft.CHANNEL_WELCOME,
          action: P.j7.SEND_MESSAGE
        }), x.S.dispatch(I.CkL.TEXTAREA_FOCUS, {
          highlight: true,
          channelId: I.lds
        })
      }, []),
      a = i.useCallback(() => {
        f.ZP.trackWithMetadata(I.rMx.SERVER_SETUP_CTA_CLICKED, {
          setup_type: P.Ft.CHANNEL_WELCOME,
          action: P.j7.PERSONALIZE_SERVER
        }), null != e && g.Z.open(e.id, (0, b.r)(), {
          section: I.jXE.CHANNEL_WELCOME_CTA
        })
      }, [e]);
    return {
      handleInvite: t,
      handleMessage: l,
      handlePersonalize: a,
      handleDownload: i.useCallback(() => {
        f.ZP.trackWithMetadata(I.rMx.SERVER_SETUP_CTA_CLICKED, {
          setup_type: P.Ft.CHANNEL_WELCOME,
          action: P.j7.DOWNLOAD
        }), (0, u.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("32996"), n.e("74023")]).then(n.bind(n, 431583));
          return t => (0, r.jsx)(e, T({
            source: I.jXE.CHANNEL_WELCOME_CTA
          }, t))
        })
      }, []),
      handleAddApplication: i.useCallback(() => {
        null != e && (f.ZP.trackWithMetadata(I.rMx.SERVER_SETUP_CTA_CLICKED, {
          setup_type: P.Ft.CHANNEL_WELCOME,
          action: P.j7.ADD_APP
        }), (0, u.ZDy)(async () => {
          let {
            default: t
          } = await n.e("77046").then(n.bind(n, 272509));
          return n => {
            var i;
            return (0, r.jsx)(t, A(T({
              guildId: null != (i = e.id) ? i : ""
            }, n), {
              analyticsType: c.z.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
            }))
          }
        }))
      }, [e])
    }
  }(l), W = !(k || L || U || G), {
    titleAnimatedStyle: K,
    opacities: Y
  } = function(e) {
    let t = (0, d.Z)(() => new o.Z.Value(0)),
      n = (0, d.Z)(() => new o.Z.Value(0)),
      r = (0, d.Z)(() => [new o.Z.Value(0), new o.Z.Value(0), new o.Z.Value(0), new o.Z.Value(0)]);
    return i.useEffect(() => {
      o.Z.stagger(300, [o.Z.parallel([o.Z.timing(n, {
        toValue: 1,
        duration: 450
      }), o.Z.timing(t, {
        toValue: 1,
        duration: 450
      })]), o.Z.stagger(100, [o.Z.timing(r[0], {
        toValue: 1,
        duration: 300
      }), o.Z.timing(r[1], {
        toValue: 1,
        duration: 300
      }), o.Z.timing(r[2], {
        toValue: 1,
        duration: 300
      }), o.Z.timing(r[3], {
        toValue: 1,
        duration: 300
      })])]).start()
    }, [n, t, r]), {
      titleAnimatedStyle: e ? {
        transform: [{
          translateY: t.interpolate({
            inputRange: [0, 1],
            outputRange: ["-20px", "0px"]
          })
        }],
        opacity: n
      } : {},
      opacities: r
    }
  }(W), [q, X] = i.useState([]), Q = q.length > 0;
  if (i.useEffect(() => {
      (async () => {
        try {
          var e;
          let t = await (0, m.i)(null != (e = null == l ? true : l.id) ? e : I.lds);
          X(t.map(e => e.id))
        } catch (e) {}
      })()
    }, [null == l ? true : l.id]), null == l) return null;
  let J = [];
  p || (R && J.push((0, r.jsx)(o.Z.div, {
    className: N.cardWrapper,
    style: W ? {
      opacity: Y[J.length]
    } : {},
    children: (0, r.jsx)(w, {
      iconUrl: u.YvY,
      header: Z.intl.string(Z.t.q9n0Ta),
      completed: L,
      onClick: B
    })
  }, "invite")), D && J.push((0, r.jsx)(o.Z.div, {
    className: N.cardWrapper,
    style: W ? {
      opacity: Y[J.length]
    } : {},
    children: (0, r.jsx)(w, {
      iconUrl: u.$_T,
      header: Z.intl.string(Z.t.c5kxPh),
      completed: G,
      onClick: H
    })
  }, "customize")), M && J.push((0, r.jsx)(o.Z.div, {
    className: N.cardWrapper,
    style: W ? {
      opacity: Y[J.length]
    } : {},
    children: (0, r.jsx)(w, {
      iconUrl: u.qMX,
      header: Z.intl.string(Z.t["SoP7+l"]),
      completed: U,
      onClick: F
    })
  }, "message")), (0, E.isWeb)() && J.push((0, r.jsx)(o.Z.div, {
    className: N.cardWrapper,
    style: W ? {
      opacity: Y[J.length]
    } : {},
    children: (0, r.jsx)(w, {
      iconUrl: u.yIb,
      header: Z.intl.string(Z.t.pGVNI9),
      completed: k,
      onClick: V
    })
  }, "download")), J.push((0, r.jsx)(o.Z.div, {
    className: N.cardWrapper,
    style: W ? {
      opacity: Y[J.length]
    } : {},
    children: (0, r.jsx)(w, {
      iconUrl: u.Tg$,
      header: Z.intl.string(Z.t.IhHDEO),
      completed: Q,
      onClick: z
    })
  }, "addapp")));
  let $ = j ? Z.intl.string(Z.t["1ach9C"]) : Z.intl.string(Z.t["ezm+/j"]);
  p && ($ = Z.intl.string(Z.t["gwyU/J"]));
  let ee = "".concat(C.Z.getArticleURL(I.BhN.GUILD_GETTING_STARTED), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm");
  return (0, r.jsx)(_.ZP, {
    channelId: t.id,
    children: (0, r.jsx)("div", {
      className: N.container,
      children: (0, r.jsxs)("div", {
        className: N.inner,
        children: [(0, r.jsxs)(o.Z.div, {
          style: K,
          children: [(0, r.jsx)(u.Heading, {
            className: N.titleName,
            variant: "heading-xxl/medium",
            children: Z.intl.format(Z.t.rkHVKf, {
              guildName: l.name
            })
          }), (0, r.jsxs)(u.Text, {
            color: "text-default",
            className: a()({
              [N.subtitle]: true,
              [N.noChildren]: 0 === J.length
            }),
            variant: "text-sm/normal",
            children: [$, " ", J.length > 0 ? Z.intl.format(Z.t.UOtD32, {
              guideURL: ee
            }) : null]
          })]
        }), J]
      })
    })
  })
}