/** Chunk was on 40184 **/
/** chunk id: 128557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M,
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

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
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
  } = e, [d, f] = r.useState(false), h = (0, p.Z)(s);
  return r.useEffect(() => {
    null != h && s !== h && (f(true), setTimeout(() => f(false), 1e3))
  }, [s, h]), (0, i.jsxs)(u.P3F, {
    className: a()(t, T.card, {
      [T.completed]: s
    }),
    onClick: c,
    children: [null != l ? l : (0, i.jsx)("img", {
      className: T.icon,
      src: n,
      alt: ""
    }), (0, i.jsx)(u.Text, {
      color: "header-primary",
      className: a()(T.cardTextContainer, T.cardHeader),
      variant: "text-sm/normal",
      children: o
    }), s ? (0, i.jsx)(u.dz2, {
      size: "md",
      color: "currentColor",
      className: a()(T.checkmark, {
        [T.animate]: d
      })
    }) : (0, i.jsx)(O.Z, {
      className: T.arrow,
      direction: O.Z.Directions.RIGHT
    })]
  })
}

function M(e) {
  let {
    channel: t
  } = e, l = (0, s.e7)([y.Z], () => null != t ? y.Z.getGuild(t.getGuildId()) : null, [t]), p = null != l && S.default.extractTimestamp(l.id) < Date.now() - P._8R, O = (0, s.e7)([C.default], () => (null == l ? true : l.ownerId) === C.default.getId(), [l]), {
    canInvite: M,
    canManageGuild: R,
    canMessage: L
  } = (0, h.TE)(t, l), D = (0, s.e7)([v.default], () => {
    var e, t;
    return (null == (e = v.default.getCurrentUser()) ? true : e.desktop) === true || (null == (t = v.default.getCurrentUser()) ? true : t.mobile) === true
  }), {
    guildPopulated: k,
    guildMessaged: U,
    guildPersonalized: V
  } = (0, h.h_)(l), {
    handleInvite: F,
    handleMessage: B,
    handlePersonalize: H,
    handleDownload: G,
    handleAddApplication: z
  } = function(e) {
    let t = r.useCallback(() => {
        f.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
          setup_type: I.Ft.CHANNEL_WELCOME,
          action: I.j7.INVITE
        }), null != e && (0, u.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("49049"), n.e("7654"), n.e("97016")]).then(n.bind(n, 560114));
          return n => (0, i.jsx)(t, A(N({}, n), {
            guild: e,
            source: P.t4x.CHANNEL_WELCOME,
            analyticsLocation: {
              section: P.jXE.CHANNEL_WELCOME_CTA
            }
          }))
        })
      }, [e]),
      l = r.useCallback(() => {
        f.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
          setup_type: I.Ft.CHANNEL_WELCOME,
          action: I.j7.SEND_MESSAGE
        }), x.S.dispatch(P.CkL.TEXTAREA_FOCUS, {
          highlight: true,
          channelId: P.lds
        })
      }, []),
      a = r.useCallback(() => {
        f.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
          setup_type: I.Ft.CHANNEL_WELCOME,
          action: I.j7.PERSONALIZE_SERVER
        }), null != e && m.Z.open(e.id, (0, b.r)(), {
          section: P.jXE.CHANNEL_WELCOME_CTA
        })
      }, [e]);
    return {
      handleInvite: t,
      handleMessage: l,
      handlePersonalize: a,
      handleDownload: r.useCallback(() => {
        f.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
          setup_type: I.Ft.CHANNEL_WELCOME,
          action: I.j7.DOWNLOAD
        }), (0, u.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("32996"), n.e("74023")]).then(n.bind(n, 431583));
          return t => (0, i.jsx)(e, N({
            source: P.jXE.CHANNEL_WELCOME_CTA
          }, t))
        })
      }, []),
      handleAddApplication: r.useCallback(() => {
        null != e && (f.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
          setup_type: I.Ft.CHANNEL_WELCOME,
          action: I.j7.ADD_APP
        }), (0, u.ZDy)(async () => {
          let {
            default: t
          } = await n.e("77046").then(n.bind(n, 272509));
          return n => {
            var r;
            return (0, i.jsx)(t, A(N({
              guildId: null != (r = e.id) ? r : ""
            }, n), {
              analyticsType: c.z.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
            }))
          }
        }))
      }, [e])
    }
  }(l), W = !(D || k || U || V), {
    titleAnimatedStyle: q,
    opacities: K
  } = function(e) {
    let t = (0, d.Z)(() => new o.Z.Value(0)),
      n = (0, d.Z)(() => new o.Z.Value(0)),
      i = (0, d.Z)(() => [new o.Z.Value(0), new o.Z.Value(0), new o.Z.Value(0), new o.Z.Value(0)]);
    return r.useEffect(() => {
      o.Z.stagger(300, [o.Z.parallel([o.Z.timing(n, {
        toValue: 1,
        duration: 450
      }), o.Z.timing(t, {
        toValue: 1,
        duration: 450
      })]), o.Z.stagger(100, [o.Z.timing(i[0], {
        toValue: 1,
        duration: 300
      }), o.Z.timing(i[1], {
        toValue: 1,
        duration: 300
      }), o.Z.timing(i[2], {
        toValue: 1,
        duration: 300
      }), o.Z.timing(i[3], {
        toValue: 1,
        duration: 300
      })])]).start()
    }, [n, t, i]), {
      titleAnimatedStyle: e ? {
        transform: [{
          translateY: t.interpolate({
            inputRange: [0, 1],
            outputRange: ["-20px", "0px"]
          })
        }],
        opacity: n
      } : {},
      opacities: i
    }
  }(W), [Y, X] = r.useState([]), J = Y.length > 0;
  if (r.useEffect(() => {
      (async () => {
        try {
          var e;
          let t = await (0, g.i)(null != (e = null == l ? true : l.id) ? e : P.lds);
          X(t.map(e => e.id))
        } catch (e) {}
      })()
    }, [null == l ? true : l.id]), null == l) return null;
  let Q = [];
  p || (M && Q.push((0, i.jsx)(o.Z.div, {
    className: T.cardWrapper,
    style: W ? {
      opacity: K[Q.length]
    } : {},
    children: (0, i.jsx)(w, {
      iconUrl: u.YvY,
      header: Z.intl.string(Z.t.q9n0Ta),
      completed: k,
      onClick: F
    })
  }, "invite")), R && Q.push((0, i.jsx)(o.Z.div, {
    className: T.cardWrapper,
    style: W ? {
      opacity: K[Q.length]
    } : {},
    children: (0, i.jsx)(w, {
      iconUrl: u.$_T,
      header: Z.intl.string(Z.t.c5kxPh),
      completed: V,
      onClick: H
    })
  }, "customize")), L && Q.push((0, i.jsx)(o.Z.div, {
    className: T.cardWrapper,
    style: W ? {
      opacity: K[Q.length]
    } : {},
    children: (0, i.jsx)(w, {
      iconUrl: u.qMX,
      header: Z.intl.string(Z.t["SoP7+l"]),
      completed: U,
      onClick: B
    })
  }, "message")), (0, j.isWeb)() && Q.push((0, i.jsx)(o.Z.div, {
    className: T.cardWrapper,
    style: W ? {
      opacity: K[Q.length]
    } : {},
    children: (0, i.jsx)(w, {
      iconUrl: u.yIb,
      header: Z.intl.string(Z.t.pGVNI9),
      completed: D,
      onClick: G
    })
  }, "download")), Q.push((0, i.jsx)(o.Z.div, {
    className: T.cardWrapper,
    style: W ? {
      opacity: K[Q.length]
    } : {},
    children: (0, i.jsx)(w, {
      iconUrl: u.Tg$,
      header: Z.intl.string(Z.t.IhHDEO),
      completed: J,
      onClick: z
    })
  }, "addapp")));
  let $ = O ? Z.intl.string(Z.t["1ach9C"]) : Z.intl.string(Z.t["ezm+/j"]);
  p && ($ = Z.intl.string(Z.t["gwyU/J"]));
  let ee = "".concat(E.Z.getArticleURL(P.BhN.GUILD_GETTING_STARTED), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm");
  return (0, i.jsx)(_.ZP, {
    channelId: t.id,
    children: (0, i.jsx)("div", {
      className: T.container,
      children: (0, i.jsxs)("div", {
        className: T.inner,
        children: [(0, i.jsxs)(o.Z.div, {
          style: q,
          children: [(0, i.jsx)(u.Heading, {
            className: T.titleName,
            variant: "heading-xxl/medium",
            children: Z.intl.format(Z.t.rkHVKf, {
              guildName: l.name
            })
          }), (0, i.jsxs)(u.Text, {
            color: "text-default",
            className: a()({
              [T.subtitle]: true,
              [T.noChildren]: 0 === Q.length
            }),
            variant: "text-sm/normal",
            children: [$, " ", Q.length > 0 ? Z.intl.format(Z.t.UOtD32, {
              guideURL: ee
            }) : null]
          })]
        }), Q]
      })
    })
  })
}