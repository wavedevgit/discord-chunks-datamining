/** Chunk was on 1113 **/
/** chunk id: 825244, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D,
  E: () => R
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk444927 = require("./444927.js"),
  Chunk919796 = require("./919796.js"),
  Chunk58149 = require("./58149.js"),
  Chunk668446 = require("./668446.js"),
  Chunk997509 = require("./997509.js"),
  Chunk794967 = require("./794967.js"),
  Chunk595818 = require("./595818.js"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk975571 = require("./975571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk661191 = require("./661191.js"),
  Chunk314307 = require("./314307.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk936649 = require("./936649.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk286062 = require("./286062.js");

function P(e) {
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

function w(e, t) {
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

function R(e) {
  let {
    className: t,
    iconUrl: n,
    icon: i,
    header: a,
    completed: o,
    onClick: c
  } = e, [d, p] = l.useState(false), g = (0, h.A)(o);
  return l.useEffect(() => {
    null != g && o !== g && (p(true), setTimeout(() => p(false), 1e3))
  }, [o, g]), (0, r.jsxs)(u.DUT, {
    className: s()(t, T.Nr, {
      [T.so]: o
    }),
    onClick: c,
    children: [null != i ? i : (0, r.jsx)("img", {
      className: T.Kk,
      src: n,
      alt: ""
    }), (0, r.jsx)(u.Text, {
      color: "text-strong",
      className: s()(T.t$, T.MY),
      variant: "text-sm/normal",
      children: a
    }), o ? (0, r.jsx)(u.A9s, {
      size: "md",
      color: "currentColor",
      className: s()(T.AI, {
        [T.i0]: d
      })
    }) : (0, r.jsx)(_.A, {
      className: T.UE,
      direction: _.A.Directions.RIGHT
    })]
  })
}

function D(e) {
  let t, i, h, _, D, L, {
      channel: M
    } = e,
    G = (0, o.bG)([y.A], () => null != M ? y.A.getGuild(M.getGuildId()) : null, [M]),
    k = null != G && E.default.extractTimestamp(G.id) < Date.now() - S.NOr,
    U = (0, o.bG)([A.default], () => (null == G ? true : G.ownerId) === A.default.getId(), [G]),
    {
      canInvite: V,
      canManageGuild: B,
      canMessage: H
    } = (0, g.Sk)(M, G),
    F = (0, o.bG)([O.default], () => {
      var e, t;
      return (null == (e = O.default.getCurrentUser()) ? true : e.desktop) === true || (null == (t = O.default.getCurrentUser()) ? true : t.mobile) === true
    }),
    {
      guildPopulated: K,
      guildMessaged: Y,
      guildPersonalized: W
    } = (0, g.lF)(G),
    {
      handleInvite: z,
      handleMessage: q,
      handlePersonalize: X,
      handleDownload: J,
      handleAddApplication: Q
    } = (t = l.useCallback(() => {
      p.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
        setup_type: I.XT.CHANNEL_WELCOME,
        action: I.AG.INVITE
      }), null != G && (0, u.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(n.bind(n, 234355));
        return t => (0, r.jsx)(e, w(P({}, t), {
          guild: G,
          source: S.PE1.CHANNEL_WELCOME,
          analyticsLocation: {
            section: S.JJy.CHANNEL_WELCOME_CTA
          }
        }))
      })
    }, [G]), i = l.useCallback(() => {
      p.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
        setup_type: I.XT.CHANNEL_WELCOME,
        action: I.AG.SEND_MESSAGE
      }), j._.dispatch(S.jej.TEXTAREA_FOCUS, {
        highlight: true,
        channelId: S.dJq
      })
    }, []), h = l.useCallback(() => {
      p.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
        setup_type: I.XT.CHANNEL_WELCOME,
        action: I.AG.PERSONALIZE_SERVER
      }), null != G && f.A.open(G.id, (0, b.x)(), {
        section: S.JJy.CHANNEL_WELCOME_CTA
      })
    }, [G]), {
      handleInvite: t,
      handleMessage: i,
      handlePersonalize: h,
      handleDownload: l.useCallback(() => {
        p.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
          setup_type: I.XT.CHANNEL_WELCOME,
          action: I.AG.DOWNLOAD
        }), (0, u.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
          return t => (0, r.jsx)(e, P({
            source: S.JJy.CHANNEL_WELCOME_CTA
          }, t))
        })
      }, []),
      handleAddApplication: l.useCallback(() => {
        null != G && (p.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
          setup_type: I.XT.CHANNEL_WELCOME,
          action: I.AG.ADD_APP
        }), (0, u.mMO)(async () => {
          let {
            default: e
          } = await n.e("66003").then(n.bind(n, 258942));
          return t => {
            var n;
            return (0, r.jsx)(e, w(P({
              guildId: null != (n = G.id) ? n : ""
            }, t), {
              analyticsType: c.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
            }))
          }
        }))
      }, [G])
    }),
    Z = !(F || K || Y || W),
    {
      titleAnimatedStyle: $,
      opacities: ee
    } = (_ = (0, d.A)(() => new a.A.Value(0)), D = (0, d.A)(() => new a.A.Value(0)), L = (0, d.A)(() => [new a.A.Value(0), new a.A.Value(0), new a.A.Value(0), new a.A.Value(0)]), l.useEffect(() => {
      a.A.stagger(300, [a.A.parallel([a.A.timing(D, {
        toValue: 1,
        duration: 450
      }), a.A.timing(_, {
        toValue: 1,
        duration: 450
      })]), a.A.stagger(100, [a.A.timing(L[0], {
        toValue: 1,
        duration: 300
      }), a.A.timing(L[1], {
        toValue: 1,
        duration: 300
      }), a.A.timing(L[2], {
        toValue: 1,
        duration: 300
      }), a.A.timing(L[3], {
        toValue: 1,
        duration: 300
      })])]).start()
    }, [D, _, L]), {
      titleAnimatedStyle: Z ? {
        transform: [{
          translateY: _.interpolate({
            inputRange: [0, 1],
            outputRange: ["-20px", "0px"]
          })
        }],
        opacity: D
      } : {},
      opacities: L
    }),
    [et, en] = l.useState([]),
    er = et.length > 0;
  if (l.useEffect(() => {
      (async () => {
        try {
          var e;
          let t = await (0, m.c)(null != (e = null == G ? true : G.id) ? e : S.dJq);
          en(t.map(e => e.id))
        } catch (e) {}
      })()
    }, [null == G ? true : G.id]), null == G) return null;
  let el = [];
  k || (V && el.push((0, r.jsx)(a.A.div, {
    className: T.cW,
    style: Z ? {
      opacity: ee[el.length]
    } : {},
    children: (0, r.jsx)(R, {
      iconUrl: u.zNk,
      header: N.intl.string(N.t.q9n0Ta),
      completed: K,
      onClick: z
    })
  }, "invite")), B && el.push((0, r.jsx)(a.A.div, {
    className: T.cW,
    style: Z ? {
      opacity: ee[el.length]
    } : {},
    children: (0, r.jsx)(R, {
      iconUrl: u.nIm,
      header: N.intl.string(N.t.c5kxPh),
      completed: W,
      onClick: X
    })
  }, "customize")), H && el.push((0, r.jsx)(a.A.div, {
    className: T.cW,
    style: Z ? {
      opacity: ee[el.length]
    } : {},
    children: (0, r.jsx)(R, {
      iconUrl: u.Tj_,
      header: N.intl.string(N.t["SoP7+l"]),
      completed: Y,
      onClick: q
    })
  }, "message")), (0, v.isWeb)() && el.push((0, r.jsx)(a.A.div, {
    className: T.cW,
    style: Z ? {
      opacity: ee[el.length]
    } : {},
    children: (0, r.jsx)(R, {
      iconUrl: u.Gl0,
      header: N.intl.string(N.t.pGVNI9),
      completed: F,
      onClick: J
    })
  }, "download")), el.push((0, r.jsx)(a.A.div, {
    className: T.cW,
    style: Z ? {
      opacity: ee[el.length]
    } : {},
    children: (0, r.jsx)(R, {
      iconUrl: u.UJP,
      header: N.intl.string(N.t.IhHDEO),
      completed: er,
      onClick: Q
    })
  }, "addapp")));
  let ei = U ? N.intl.string(N.t["1ach9C"]) : N.intl.string(N.t["ezm+/j"]);
  k && (ei = N.intl.string(N.t["gwyU/J"]));
  let es = "".concat(x.A.getArticleURL(S.MVz.GUILD_GETTING_STARTED), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm");
  return (0, r.jsx)(C.Ay, {
    channelId: M.id,
    children: (0, r.jsx)("div", {
      className: T.kL,
      children: (0, r.jsxs)("div", {
        className: T.vW,
        children: [(0, r.jsxs)(a.A.div, {
          style: $,
          children: [(0, r.jsx)(u.Heading, {
            className: T.ud,
            variant: "heading-xxl/medium",
            children: N.intl.format(N.t.rkHVKf, {
              guildName: G.name
            })
          }), (0, r.jsxs)(u.Text, {
            color: "text-default",
            className: s()({
              [T.VA]: true,
              [T.lg]: 0 === el.length
            }),
            variant: "text-sm/normal",
            children: [ei, " ", el.length > 0 ? N.intl.format(N.t.UOtD32, {
              guideURL: es
            }) : null]
          })]
        }), el]
      })
    })
  })
}