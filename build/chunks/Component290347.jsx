/** Chunk was on 1272 **/
/** chunk id: 290347, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./415506.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  Chunk972615 = require("./972615.js");

function I(e) {
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

function C(e, t) {
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
let S = [],
  N = e => {
    let {
      tagText: t,
      className: n
    } = e;
    return (0, r.jsx)(s.IGR, {
      className: a()(v.tag, n),
      text: t
    })
  },
  T = e => {
    let {
      header: t,
      subHeader: n,
      imageSrc: i,
      tagText: l,
      wideStyle: o
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(v.featureCard, {
        [v.wideStyle]: o
      }),
      children: [null != l ? (0, r.jsx)(N, {
        tagText: l,
        className: v.featureCardTag
      }) : null, (0, r.jsx)("img", {
        alt: "",
        className: a()(v.featureCardImg, {
          [v.wideStyle]: o
        }),
        src: i
      }), (0, r.jsxs)("div", {
        className: v.featureCardTextGroup,
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-md/extrabold",
          className: v.featureCardTextHeader,
          children: t
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
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
    modalTopExtra: j,
    header: x,
    headerClassName: A,
    subHeader: Z,
    subHeaderExtra: w,
    featureCards: L,
    changeLogId: R,
    button: D,
    body: k
  } = e, {
    onClose: M,
    transitionState: U
  } = n, G = (0, p.Dt)(), B = L.length % 2 == 0, V = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), [H, F] = i.useState(Date.now()), [z, W] = i.useState(0), [Y, K] = i.useState(0), [q, X] = i.useState(false), [Q, J] = i.useState(true), $ = i.useRef(H), ee = i.useRef(z), et = i.useRef(Y), en = i.useRef(q), er = i.useRef(Q), [ei, el] = i.useState(S), ea = i.useRef(false);

  function eo() {
    let e = Date.now(),
      t = e - $.current,
      n = ee.current,
      r = et.current;
    return en.current && (W(n += t), er.current || K(r += t)), F(e), [n, r]
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
          return C(I({}, e), {
            src: i
          })
        });
        el(await Promise.all(t))
      } catch (e) {
        _.Z.captureException(e), el(S)
      }
    };
    true !== ea.current && e(), ea.current = true
  }, [l, ei]), i.useEffect(() => () => {
    null != ei && ei.forEach(e => {
      URL.revokeObjectURL(e.src)
    })
  }, [ei]), i.useEffect(() => {
    $.current = H, ee.current = z, et.current = Y, en.current = q, er.current = Q
  }, [H, z, Y, q, Q]), i.useEffect(() => () => {
    if ("video" === l.type || "embed" === l.type) {
      let [e, t] = eo();
      b.default.track(O.rMx.CHANGE_LOG_VIDEO_PLAYED, {
        change_log_id: R,
        seconds_played: Math.round(e / 1e3)
      }), b.default.track(O.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
        change_log_id: R,
        seconds_unmuted: Math.round(t / 1e3)
      })
    }
  }, [R, l.type]), i.useEffect(() => {
    null != P && (0, g.kk)(P);
    let e = Date.now();
    return b.default.track(O.rMx.CHANGE_LOG_OPENED, {
      change_log_id: R
    }), () => {
      b.default.track(O.rMx.CHANGE_LOG_CLOSED, {
        change_log_id: R,
        seconds_open: Math.round((Date.now() - e) / 1e3)
      }), null != P && (0, h.Q3)(P, {
        dismissAction: E.L.DISMISS
      })
    }
  }, [P, R]), (0, r.jsxs)(s.Y0X, {
    "data-migration-pending": true,
    className: a()(v.root, t),
    transitionState: U,
    "aria-labelledby": G,
    parentComponent: "PremiumAnnouncementModalVariant1",
    children: [(0, r.jsx)(s.olH, {
      "data-migration-pending": true,
      className: v.closeButton,
      onClick: M
    }), null == j ? true : j(), (0, r.jsxs)(s.hzk, {
      "data-migration-pending": true,
      className: v.content,
      children: [(0, r.jsx)(s.X6q, {
        variant: "display-md",
        className: a()(v.headerText, A),
        children: x
      }), "video" === l.type ? (0, r.jsx)(f.Z, {
        className: a()(v.video, N),
        autoPlay: !V,
        loop: true,
        muted: true,
        controls: true,
        controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
        src: l.src,
        poster: l.poster,
        onPlay: e => {
          b.default.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: R
          }), F(Date.now()), X(true), J(e.currentTarget.muted)
        },
        onEnded: e => {
          eo(), J(e.currentTarget.muted), X(false)
        },
        onVolumeChange: e => {
          eo(), J(e.currentTarget.muted)
        },
        onPause: e => {
          eo(), J(e.currentTarget.muted), X(false)
        },
        disablePictureInPicture: true,
        children: null == ei ? true : ei.map(e => {
          let t = (0, y.getLanguages)().find(t => t.code === e.locale);
          return null == t ? null : (0, r.jsx)("track", {
            label: t.englishName,
            kind: "captions",
            srcLang: t.code,
            src: e.src,
            default: e.isDefault
          }, e.locale)
        })
      }) : "embed" === l.type ? (0, r.jsx)(u.BC, {
        className: a()(v.video, N),
        allowFullScreen: false,
        href: l.href,
        thumbnail: l.thumbnail,
        video: l.embed,
        provider: d.pn.YOUTUBE,
        maxWidth: l.embed.width,
        maxHeight: l.embed.height,
        renderVideoComponent: m.lV,
        renderImageComponent: m.Yi,
        renderLinkComponent: m.iT,
        onPlay: () => {
          b.default.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: R
          })
        }
      }) : "image" === l.type ? (0, r.jsx)("img", {
        alt: "",
        className: a()(v.video, N),
        src: l.src
      }) : null, (0, r.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: v.subHeader,
        children: [Z, null == w ? true : w()]
      }), null != k && (0, r.jsx)(s.X6q, {
        variant: "heading-md/medium",
        className: v.bodyText,
        children: k
      }), L.length > 0 && (0, r.jsx)("div", {
        className: a()(v.featureCardGroup, {
          [v.wideStyle]: B
        }),
        children: L.map((e, t) => (0, r.jsx)(T, C(I({}, e), {
          wideStyle: B
        }), "".concat(e.header, "_").concat(t)))
      }), D()]
    })]
  })
}