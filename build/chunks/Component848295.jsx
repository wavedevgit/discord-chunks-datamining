/** Chunk was on 21738 **/
/** chunk id: 848295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => w
}), require("./896048.js"), require("./65821.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk877624 = require("./877624.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk139286 = require("./139286.js"),
  Chunk871751 = require("./871751.jsx"),
  Chunk259407 = require("./259407.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk367727 = require("./367727.js"),
  Chunk652176 = require("./652176.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk728458 = require("./728458.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk530811 = require("./530811.js");

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

function T(e, t) {
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
let j = [],
  x = e => {
    let {
      tagText: t,
      className: n
    } = e;
    return (0, r.jsx)(p.LpS, {
      className: a()(C.Tc, n),
      text: t
    })
  },
  P = e => {
    let {
      header: t,
      subHeader: n,
      imageSrc: i,
      tagText: l,
      wideStyle: s
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(C.Vr, {
        [C.tF]: s
      }),
      children: [null != l ? (0, r.jsx)(x, {
        tagText: l,
        className: C.bX
      }) : null, (0, r.jsx)("img", {
        alt: "",
        className: a()(C._n, {
          [C.tF]: s
        }),
        src: i
      }), (0, r.jsxs)("div", {
        className: C.Zz,
        children: [(0, r.jsx)(p.Heading, {
          variant: "heading-md/bold",
          className: C.Hf,
          children: t
        }), (0, r.jsx)(p.Text, {
          variant: "text-md/normal",
          color: "text-subtle",
          children: n
        })]
      })]
    })
  };

function w(e) {
  let {
    componentId: t,
    promotionId: n,
    className: l,
    renderModalProps: x,
    heroArt: w,
    heroArtClassName: L,
    modalTopExtra: R,
    header: D,
    headerClassName: M,
    subHeader: k,
    subHeaderExtra: U,
    featureCards: G,
    changeLogId: V,
    button: B,
    body: H
  } = e, {
    onClose: F,
    transitionState: Y
  } = x, K = (0, A.GV)(), W = G.length % 2 == 0, q = (0, c.bG)([h.A], () => h.A.useReducedMotion), [z, Q] = i.useState(Date.now()), [X, Z] = i.useState(0), [J, $] = i.useState(0), [ee, et] = i.useState(false), [en, er] = i.useState(true), ei = i.useRef(z), el = i.useRef(X), ea = i.useRef(J), es = i.useRef(ee), eo = i.useRef(en), [ec, eu] = i.useState(j), ed = i.useRef(false);

  function ep() {
    let e = Date.now(),
      t = e - ei.current,
      n = el.current,
      r = ea.current;
    return es.current && (Z(n += t), eo.current || $(r += t)), Q(e), [n, r]
  }
  return (0, g.A)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
    properties: {
      component_id: t,
      component_type: o.C.ANNOUNCEMENT_MODAL
    }
  }), i.useEffect(() => {
    let e = async () => {
      try {
        var e;
        if ("video" !== w.type || null == w.subtitles) return;
        let t = null == (e = w.subtitles) ? true : e.map(async e => {
          let t = await fetch(e.src);
          if (!t.ok) throw Error("Failed to fetch the subtitle file ".concat(e.src));
          let n = await t.text(),
            r = new Blob([n], {
              type: "text/vtt"
            }),
            i = URL.createObjectURL(r);
          return T(N({}, e), {
            src: i
          })
        });
        eu(await Promise.all(t))
      } catch (e) {
        y.A.captureException(e), eu(j)
      }
    };
    true !== ed.current && e(), ed.current = true
  }, [w, ec]), i.useEffect(() => () => {
    null != ec && ec.forEach(e => {
      URL.revokeObjectURL(e.src)
    })
  }, [ec]), i.useEffect(() => {
    ei.current = z, el.current = X, ea.current = J, es.current = ee, eo.current = en
  }, [z, X, J, ee, en]), i.useEffect(() => () => {
    if ("video" === w.type || "embed" === w.type) {
      let [e, t] = ep();
      O.default.track(I.HAw.CHANGE_LOG_VIDEO_PLAYED, {
        change_log_id: V,
        seconds_played: Math.round(e / 1e3)
      }), O.default.track(I.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
        change_log_id: V,
        seconds_unmuted: Math.round(t / 1e3)
      })
    }
  }, [V, w.type]), i.useEffect(() => {
    (0, b.Vh)(u.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL);
    let e = Date.now();
    return O.default.track(I.HAw.CHANGE_LOG_OPENED, {
      change_log_id: V
    }), () => {
      O.default.track(I.HAw.CHANGE_LOG_CLOSED, {
        change_log_id: V,
        seconds_open: Math.round((Date.now() - e) / 1e3)
      }), (0, b.qr)(u.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, {
        dismissAction: v.i.DISMISS
      })
    }
  }, [V, n]), (0, r.jsx)(p.EOs, {
    "data-migration-pending": true,
    className: a()(C.zr, C.kv, l),
    transitionState: Y,
    "aria-labelledby": K,
    parentComponent: "PremiumAnnouncementModalVariant1",
    children: (0, r.jsxs)(p.hLv, {
      color: "nitro-pink",
      children: [(0, r.jsx)("div", {
        className: C.cG,
        children: (0, r.jsx)(d.JnF, {
          "data-migration-pending": true,
          onClick: async () => await F()
        })
      }), null == R ? true : R(), (0, r.jsxs)(p.$mQ, {
        "data-migration-pending": true,
        className: C.Qs,
        children: ["video" === w.type ? (0, r.jsx)(_.A, {
          className: a()(C.Ki, L),
          autoPlay: !q,
          loop: true,
          muted: true,
          controls: true,
          controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
          src: w.src,
          poster: w.poster,
          onPlay: e => {
            O.default.track(I.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
              change_log_id: V
            }), Q(Date.now()), et(true), er(e.currentTarget.muted)
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
        }) : "embed" === w.type ? (0, r.jsx)(f.rr, {
          className: a()(C.Ki, L),
          allowFullScreen: false,
          href: w.href,
          thumbnail: w.thumbnail,
          video: w.embed,
          provider: m.mt.YOUTUBE,
          maxWidth: w.embed.width,
          maxHeight: w.embed.height,
          renderVideoComponent: E.$o,
          renderImageComponent: E.LL,
          renderLinkComponent: E.bU,
          onPlay: () => {
            O.default.track(I.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
              change_log_id: V
            })
          }
        }) : "image" === w.type ? (0, r.jsx)("img", {
          alt: "",
          className: a()(C.Ki, L),
          src: w.src
        }) : null, (0, r.jsx)(p.Heading, {
          variant: "display-md",
          className: a()(C.TK, M),
          children: D
        }), (0, r.jsxs)(p.Text, {
          variant: "text-md/normal",
          color: "text-subtle",
          className: C.uI,
          children: [k, null == U ? true : U()]
        }), null != H && "" !== H && (0, r.jsx)(p.Heading, {
          variant: "heading-lg/semibold",
          className: C.G3,
          children: H
        }), G.length > 0 && (0, r.jsx)("div", {
          className: a()(C.IS, {
            [C.tF]: W
          }),
          children: G.map((e, t) => (0, r.jsx)(P, T(N({}, e), {
            wideStyle: W
          }), "".concat(e.header, "_").concat(t)))
        }), (0, r.jsx)("div", {
          className: C.UD,
          children: B()
        })]
      })]
    })
  })
}