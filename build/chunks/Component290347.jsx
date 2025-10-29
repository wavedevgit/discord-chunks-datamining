/** Chunk was on 1272 **/
/** chunk id: 290347, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./415506.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
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

function C(e) {
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

function S(e, t) {
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
  N = e => {
    let {
      tagText: t,
      className: n
    } = e;
    return (0, r.jsx)(c.IGR, {
      className: a()(y.tag, n),
      text: t
    })
  },
  j = e => {
    let {
      header: t,
      subHeader: n,
      imageSrc: i,
      tagText: l,
      wideStyle: s
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(y.featureCard, {
        [y.wideStyle]: s
      }),
      children: [null != l ? (0, r.jsx)(N, {
        tagText: l,
        className: y.featureCardTag
      }) : null, (0, r.jsx)("img", {
        alt: "",
        className: a()(y.featureCardImg, {
          [y.wideStyle]: s
        }),
        src: i
      }), (0, r.jsxs)("div", {
        className: y.featureCardTextGroup,
        children: [(0, r.jsx)(c.Heading, {
          variant: "heading-md/bold",
          className: y.featureCardTextHeader,
          children: t
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: n
        })]
      })]
    })
  };

function P(e) {
  let {
    className: t,
    renderModalProps: n,
    heroArt: l,
    heroArtClassName: N,
    modalDismissibleContent: P,
    modalTopExtra: x,
    header: A,
    headerClassName: Z,
    subHeader: w,
    subHeaderExtra: L,
    featureCards: R,
    changeLogId: D,
    button: M,
    body: k
  } = e, {
    onClose: U,
    transitionState: G
  } = n, B = (0, f.Dt)(), H = R.length % 2 == 0, V = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), [F, z] = i.useState(Date.now()), [Y, W] = i.useState(0), [q, K] = i.useState(0), [Q, J] = i.useState(false), [X, $] = i.useState(true), ee = i.useRef(F), et = i.useRef(Y), en = i.useRef(q), er = i.useRef(Q), ei = i.useRef(X), [el, ea] = i.useState(T), es = i.useRef(false);

  function eo() {
    let e = Date.now(),
      t = e - ee.current,
      n = et.current,
      r = en.current;
    return er.current && (W(n += t), ei.current || K(r += t)), z(e), [n, r]
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
          return S(C({}, e), {
            src: i
          })
        });
        ea(await Promise.all(t))
      } catch (e) {
        E.Z.captureException(e), ea(T)
      }
    };
    true !== es.current && e(), es.current = true
  }, [l, el]), i.useEffect(() => () => {
    null != el && el.forEach(e => {
      URL.revokeObjectURL(e.src)
    })
  }, [el]), i.useEffect(() => {
    ee.current = F, et.current = Y, en.current = q, er.current = Q, ei.current = X
  }, [F, Y, q, Q, X]), i.useEffect(() => () => {
    if ("video" === l.type || "embed" === l.type) {
      let [e, t] = eo();
      b.default.track(O.rMx.CHANGE_LOG_VIDEO_PLAYED, {
        change_log_id: D,
        seconds_played: Math.round(e / 1e3)
      }), b.default.track(O.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
        change_log_id: D,
        seconds_unmuted: Math.round(t / 1e3)
      })
    }
  }, [D, l.type]), i.useEffect(() => {
    null != P && (0, g.kk)(P);
    let e = Date.now();
    return b.default.track(O.rMx.CHANGE_LOG_OPENED, {
      change_log_id: D
    }), () => {
      b.default.track(O.rMx.CHANGE_LOG_CLOSED, {
        change_log_id: D,
        seconds_open: Math.round((Date.now() - e) / 1e3)
      }), null != P && (0, h.Q3)(P, {
        dismissAction: I.L.DISMISS
      })
    }
  }, [P, D]), (0, r.jsx)(c.Y0X, {
    "data-migration-pending": true,
    className: a()(y.root, y.largeBorderRadius, t),
    transitionState: G,
    "aria-labelledby": B,
    parentComponent: "PremiumAnnouncementModalVariant1",
    children: (0, r.jsxs)(c.$1m, {
      color: "nitro-pink",
      children: [(0, r.jsx)("div", {
        className: y.closeButtonContainer,
        children: (0, r.jsx)(o.PZ7, {
          "data-migration-pending": true,
          onClick: async () => await U()
        })
      }), null == x ? true : x(), (0, r.jsxs)(c.hzk, {
        "data-migration-pending": true,
        className: y.content,
        children: ["video" === l.type ? (0, r.jsx)(m.Z, {
          className: a()(y.video, N),
          autoPlay: !V,
          loop: true,
          muted: true,
          controls: true,
          controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
          src: l.src,
          poster: l.poster,
          onPlay: e => {
            b.default.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
              change_log_id: D
            }), z(Date.now()), J(true), $(e.currentTarget.muted)
          },
          onEnded: e => {
            eo(), $(e.currentTarget.muted), J(false)
          },
          onVolumeChange: e => {
            eo(), $(e.currentTarget.muted)
          },
          onPause: e => {
            eo(), $(e.currentTarget.muted), J(false)
          },
          disablePictureInPicture: true,
          children: null == el ? true : el.map(e => {
            let t = (0, v.getLanguages)().find(t => t.code === e.locale);
            return null == t ? null : (0, r.jsx)("track", {
              label: t.englishName,
              kind: "captions",
              srcLang: t.code,
              src: e.src,
              default: e.isDefault
            }, e.locale)
          })
        }) : "embed" === l.type ? (0, r.jsx)(d.BC, {
          className: a()(y.video, N),
          allowFullScreen: false,
          href: l.href,
          thumbnail: l.thumbnail,
          video: l.embed,
          provider: p.pn.YOUTUBE,
          maxWidth: l.embed.width,
          maxHeight: l.embed.height,
          renderVideoComponent: _.lV,
          renderImageComponent: _.Yi,
          renderLinkComponent: _.iT,
          onPlay: () => {
            b.default.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
              change_log_id: D
            })
          }
        }) : "image" === l.type ? (0, r.jsx)("img", {
          alt: "",
          className: a()(y.video, N),
          src: l.src
        }) : null, (0, r.jsx)(c.Heading, {
          variant: "display-md",
          className: a()(y.headerText, Z),
          children: A
        }), (0, r.jsxs)(c.Text, {
          variant: "text-md/normal",
          color: "text-secondary",
          className: y.subHeader,
          children: [w, null == L ? true : L()]
        }), null != k && "" !== k && (0, r.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          className: y.bodyText,
          children: k
        }), R.length > 0 && (0, r.jsx)("div", {
          className: a()(y.featureCardGroup, {
            [y.wideStyle]: H
          }),
          children: R.map((e, t) => (0, r.jsx)(j, S(C({}, e), {
            wideStyle: H
          }), "".concat(e.header, "_").concat(t)))
        }), (0, r.jsx)("div", {
          className: y.buttonContainer,
          children: M()
        })]
      })]
    })
  })
}