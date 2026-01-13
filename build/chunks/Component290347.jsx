/** Chunk was on 1272 **/
/** chunk id: 290347, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js"), require("./415506.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk79766 = require("./79766.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk213609 = require("./213609.js"),
  Chunk446411 = require("./446411.jsx"),
  Chunk468846 = require("./468846.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk605236 = require("./605236.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk641635 = require("./641635.js");

function N(e) {
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

function j(e, t) {
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
let P = [],
  x = e => {
    let {
      tagText: t,
      className: n
    } = e;
    return (0, r.jsx)(p.IGR, {
      className: a()(T.tag, n),
      text: t
    })
  },
  Z = e => {
    let {
      header: t,
      subHeader: n,
      imageSrc: i,
      tagText: l,
      wideStyle: o
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(T.featureCard, {
        [T.wideStyle]: o
      }),
      children: [null != l ? (0, r.jsx)(x, {
        tagText: l,
        className: T.featureCardTag
      }) : null, (0, r.jsx)("img", {
        alt: "",
        className: a()(T.featureCardImg, {
          [T.wideStyle]: o
        }),
        src: i
      }), (0, r.jsxs)("div", {
        className: T.featureCardTextGroup,
        children: [(0, r.jsx)(p.Heading, {
          variant: "heading-md/bold",
          className: T.featureCardTextHeader,
          children: t
        }), (0, r.jsx)(p.Text, {
          variant: "text-md/normal",
          color: "text-subtle",
          children: n
        })]
      })]
    })
  };

function A(e) {
  let {
    componentId: t,
    promotionId: n,
    className: l,
    renderModalProps: x,
    heroArt: A,
    heroArtClassName: w,
    modalTopExtra: L,
    header: R,
    headerClassName: D,
    subHeader: M,
    subHeaderExtra: k,
    featureCards: U,
    changeLogId: G,
    button: H,
    body: B
  } = e, {
    onClose: V,
    transitionState: F
  } = x, z = (0, b.Dt)(), Y = U.length % 2 == 0, W = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), [K, q] = i.useState(Date.now()), [Q, J] = i.useState(0), [X, $] = i.useState(0), [ee, et] = i.useState(false), [en, er] = i.useState(true), ei = i.useRef(K), el = i.useRef(Q), ea = i.useRef(X), eo = i.useRef(ee), es = i.useRef(en), [ec, eu] = i.useState(P), ed = i.useRef(false);

  function ep() {
    let e = Date.now(),
      t = e - ei.current,
      n = el.current,
      r = ea.current;
    return eo.current && (J(n += t), es.current || $(r += t)), q(e), [n, r]
  }
  return (0, g.Z)({
    type: o.ImpressionTypes.MODAL,
    name: o.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
    properties: {
      component_id: t,
      component_type: s.I.ANNOUNCEMENT_MODAL
    }
  }), i.useEffect(() => {
    let e = async () => {
      try {
        var e;
        if ("video" !== A.type || null == A.subtitles) return;
        let t = null == (e = A.subtitles) ? true : e.map(async e => {
          let t = await fetch(e.src);
          if (!t.ok) throw Error("Failed to fetch the subtitle file ".concat(e.src));
          let n = await t.text(),
            r = new Blob([n], {
              type: "text/vtt"
            }),
            i = URL.createObjectURL(r);
          return j(N({}, e), {
            src: i
          })
        });
        eu(await Promise.all(t))
      } catch (e) {
        I.Z.captureException(e), eu(P)
      }
    };
    true !== ed.current && e(), ed.current = true
  }, [A, ec]), i.useEffect(() => () => {
    null != ec && ec.forEach(e => {
      URL.revokeObjectURL(e.src)
    })
  }, [ec]), i.useEffect(() => {
    ei.current = K, el.current = Q, ea.current = X, eo.current = ee, es.current = en
  }, [K, Q, X, ee, en]), i.useEffect(() => () => {
    if ("video" === A.type || "embed" === A.type) {
      let [e, t] = ep();
      v.default.track(y.rMx.CHANGE_LOG_VIDEO_PLAYED, {
        change_log_id: G,
        seconds_played: Math.round(e / 1e3)
      }), v.default.track(y.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
        change_log_id: G,
        seconds_unmuted: Math.round(t / 1e3)
      })
    }
  }, [G, A.type]), i.useEffect(() => {
    (0, E.kk)(u.z.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL);
    let e = Date.now();
    return v.default.track(y.rMx.CHANGE_LOG_OPENED, {
      change_log_id: G
    }), () => {
      v.default.track(y.rMx.CHANGE_LOG_CLOSED, {
        change_log_id: G,
        seconds_open: Math.round((Date.now() - e) / 1e3)
      }), (0, E.JO)(u.z.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, {
        dismissAction: C.L.DISMISS
      })
    }
  }, [G, n]), (0, r.jsx)(p.Y0X, {
    "data-migration-pending": true,
    className: a()(T.root, T.largeBorderRadius, l),
    transitionState: F,
    "aria-labelledby": z,
    parentComponent: "PremiumAnnouncementModalVariant1",
    children: (0, r.jsxs)(p.$1m, {
      color: "nitro-pink",
      children: [(0, r.jsx)("div", {
        className: T.closeButtonContainer,
        children: (0, r.jsx)(d.PZ7, {
          "data-migration-pending": true,
          onClick: async () => await V()
        })
      }), null == L ? true : L(), (0, r.jsxs)(p.hzk, {
        "data-migration-pending": true,
        className: T.content,
        children: ["video" === A.type ? (0, r.jsx)(_.Z, {
          className: a()(T.video, w),
          autoPlay: !W,
          loop: true,
          muted: true,
          controls: true,
          controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
          src: A.src,
          poster: A.poster,
          onPlay: e => {
            v.default.track(y.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
              change_log_id: G
            }), q(Date.now()), et(true), er(e.currentTarget.muted)
          },
          onEnded: e => {
            ep(), er(e.currentTarget.muted), et(false)
          },
          onVolumeChange: e => {
            ep(), er(e.currentTarget.muted)
          },
          onPause: e => {
            ep(), er(e.currentTarget.muted), et(false)
          },
          disablePictureInPicture: true,
          children: null == ec ? true : ec.map(e => {
            let t = (0, S.getLanguages)().find(t => t.code === e.locale);
            return null == t ? null : (0, r.jsx)("track", {
              label: t.englishName,
              kind: "captions",
              srcLang: t.code,
              src: e.src,
              default: e.isDefault
            }, e.locale)
          })
        }) : "embed" === A.type ? (0, r.jsx)(h.BC, {
          className: a()(T.video, w),
          allowFullScreen: false,
          href: A.href,
          thumbnail: A.thumbnail,
          video: A.embed,
          provider: m.pn.YOUTUBE,
          maxWidth: A.embed.width,
          maxHeight: A.embed.height,
          renderVideoComponent: O.lV,
          renderImageComponent: O.Yi,
          renderLinkComponent: O.iT,
          onPlay: () => {
            v.default.track(y.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
              change_log_id: G
            })
          }
        }) : "image" === A.type ? (0, r.jsx)("img", {
          alt: "",
          className: a()(T.video, w),
          src: A.src
        }) : null, (0, r.jsx)(p.Heading, {
          variant: "display-md",
          className: a()(T.headerText, D),
          children: R
        }), (0, r.jsxs)(p.Text, {
          variant: "text-md/normal",
          color: "text-subtle",
          className: T.subHeader,
          children: [M, null == k ? true : k()]
        }), null != B && "" !== B && (0, r.jsx)(p.Heading, {
          variant: "heading-lg/semibold",
          className: T.bodyText,
          children: B
        }), U.length > 0 && (0, r.jsx)("div", {
          className: a()(T.featureCardGroup, {
            [T.wideStyle]: Y
          }),
          children: U.map((e, t) => (0, r.jsx)(Z, j(N({}, e), {
            wideStyle: Y
          }), "".concat(e.header, "_").concat(t)))
        }), (0, r.jsx)("div", {
          className: T.buttonContainer,
          children: H()
        })]
      })]
    })
  })
}