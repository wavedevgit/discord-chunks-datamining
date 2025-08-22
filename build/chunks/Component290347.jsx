/** Chunk was on 1272 **/
/** chunk id: 290347, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./415506.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk146187 = require("./146187.jsx"),
  Chunk304789 = require("./304789.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk446411 = require("./446411.jsx"),
  Chunk468846 = require("./468846.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk188784 = require("./188784.js");

function S(e) {
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

function N(e, t) {
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
let T = [],
  P = e => {
    let {
      tagText: t,
      className: n
    } = e;
    return (0, r.jsx)(u.IGR, {
      className: a()(C.tag, n),
      text: t
    })
  },
  j = e => {
    let {
      header: t,
      subHeader: n,
      imageSrc: i,
      tagText: l,
      wideStyle: o
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(C.featureCard, {
        [C.wideStyle]: o
      }),
      children: [null != l ? (0, r.jsx)(P, {
        tagText: l,
        className: C.featureCardTag
      }) : null, (0, r.jsx)("img", {
        alt: "",
        className: a()(C.featureCardImg, {
          [C.wideStyle]: o
        }),
        src: i
      }), (0, r.jsxs)("div", {
        className: C.featureCardTextGroup,
        children: [(0, r.jsx)(u.X6q, {
          variant: "heading-md/bold",
          className: C.featureCardTextHeader,
          children: t
        }), (0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: n
        })]
      })]
    })
  };

function x(e) {
  let {
    className: t,
    renderModalProps: n,
    heroArt: l,
    heroArtClassName: P,
    modalDismissibleContent: x,
    modalTopExtra: A,
    header: Z,
    headerClassName: w,
    subHeader: L,
    subHeaderExtra: R,
    featureCards: D,
    changeLogId: k,
    button: M,
    body: U
  } = e, {
    onClose: G,
    transitionState: B
  } = n, V = (0, h.Dt)(), H = D.length % 2 == 0, F = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), [z, W] = i.useState(Date.now()), [Y, K] = i.useState(0), [q, Q] = i.useState(0), [X, J] = i.useState(false), [$, ee] = i.useState(true), et = i.useRef(z), en = i.useRef(Y), er = i.useRef(q), ei = i.useRef(X), el = i.useRef($), [ea, eo] = i.useState(T), es = i.useRef(false);

  function ec() {
    let e = Date.now(),
      t = e - et.current,
      n = en.current,
      r = er.current;
    return ei.current && (K(n += t), el.current || Q(r += t)), W(e), [n, r]
  }
  return i.useEffect(() => {
    let e = async () => {
      try {
        var e;
        if ("video" !== l.type || null == l.subtitles) return;
        let t = null == (e = l.subtitles) ? true : e.map(async e => {
          let t = await fetch(e.src);
          if (!t.ok) throw Error("Failed to fetch the subtitle file ".concat(e.src));
          let n = await t.text(),
            r = new Blob([n], {
              type: "text/vtt"
            }),
            i = URL.createObjectURL(r);
          return N(S({}, e), {
            src: i
          })
        });
        eo(await Promise.all(t))
      } catch (e) {
        E.Z.captureException(e), eo(T)
      }
    };
    true !== es.current && e(), es.current = true
  }, [l, ea]), i.useEffect(() => () => {
    null != ea && ea.forEach(e => {
      URL.revokeObjectURL(e.src)
    })
  }, [ea]), i.useEffect(() => {
    et.current = z, en.current = Y, er.current = q, ei.current = X, el.current = $
  }, [z, Y, q, X, $]), i.useEffect(() => () => {
    if ("video" === l.type || "embed" === l.type) {
      let [e, t] = ec();
      O.default.track(y.rMx.CHANGE_LOG_VIDEO_PLAYED, {
        change_log_id: k,
        seconds_played: Math.round(e / 1e3)
      }), O.default.track(y.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
        change_log_id: k,
        seconds_unmuted: Math.round(t / 1e3)
      })
    }
  }, [k, l.type]), i.useEffect(() => {
    null != x && (0, b.kk)(x);
    let e = Date.now();
    return O.default.track(y.rMx.CHANGE_LOG_OPENED, {
      change_log_id: k
    }), () => {
      O.default.track(y.rMx.CHANGE_LOG_CLOSED, {
        change_log_id: k,
        seconds_open: Math.round((Date.now() - e) / 1e3)
      }), null != x && (0, m.Q3)(x, {
        dismissAction: v.L.DISMISS
      })
    }
  }, [x, k]), (0, r.jsx)(u.Y0X, {
    "data-migration-pending": true,
    className: a()(C.root, C.largeBorderRadius, t),
    transitionState: B,
    "aria-labelledby": V,
    parentComponent: "PremiumAnnouncementModalVariant1",
    children: (0, r.jsxs)(c.$, {
      color: "nitro-pink",
      children: [(0, r.jsx)("div", {
        className: C.closeButtonContainer,
        children: (0, r.jsx)(s.P, {
          "data-migration-pending": true,
          onClick: async () => await G()
        })
      }), null == A ? true : A(), (0, r.jsxs)(u.hzk, {
        "data-migration-pending": true,
        className: C.content,
        children: [(0, r.jsx)(u.X6q, {
          variant: "display-md",
          className: a()(C.headerText, w),
          children: Z
        }), "video" === l.type ? (0, r.jsx)(g.Z, {
          className: a()(C.video, P),
          autoPlay: !F,
          loop: true,
          muted: true,
          controls: true,
          controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
          src: l.src,
          poster: l.poster,
          onPlay: e => {
            O.default.track(y.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
              change_log_id: k
            }), W(Date.now()), J(true), ee(e.currentTarget.muted)
          },
          onEnded: e => {
            ec(), ee(e.currentTarget.muted), J(false)
          },
          onVolumeChange: e => {
            ec(), ee(e.currentTarget.muted)
          },
          onPause: e => {
            ec(), ee(e.currentTarget.muted), J(false)
          },
          disablePictureInPicture: true,
          children: null == ea ? true : ea.map(e => {
            let t = (0, I.getLanguages)().find(t => t.code === e.locale);
            return null == t ? null : (0, r.jsx)("track", {
              label: t.englishName,
              kind: "captions",
              srcLang: t.code,
              src: e.src,
              default: e.isDefault
            }, e.locale)
          })
        }) : "embed" === l.type ? (0, r.jsx)(p.BC, {
          className: a()(C.video, P),
          allowFullScreen: false,
          href: l.href,
          thumbnail: l.thumbnail,
          video: l.embed,
          provider: f.pn.YOUTUBE,
          maxWidth: l.embed.width,
          maxHeight: l.embed.height,
          renderVideoComponent: _.lV,
          renderImageComponent: _.Yi,
          renderLinkComponent: _.iT,
          onPlay: () => {
            O.default.track(y.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
              change_log_id: k
            })
          }
        }) : "image" === l.type ? (0, r.jsx)("img", {
          alt: "",
          className: a()(C.video, P),
          src: l.src
        }) : null, (0, r.jsxs)(u.Text, {
          variant: "text-md/normal",
          color: "text-secondary",
          className: C.subHeader,
          children: [L, null == R ? true : R()]
        }), null != U && "" !== U && (0, r.jsx)(u.X6q, {
          variant: "heading-lg/semibold",
          className: C.bodyText,
          children: U
        }), D.length > 0 && (0, r.jsx)("div", {
          className: a()(C.featureCardGroup, {
            [C.wideStyle]: H
          }),
          children: D.map((e, t) => (0, r.jsx)(j, N(S({}, e), {
            wideStyle: H
          }), "".concat(e.header, "_").concat(t)))
        }), (0, r.jsx)("div", {
          className: C.buttonContainer,
          children: M()
        })]
      })]
    })
  })
}