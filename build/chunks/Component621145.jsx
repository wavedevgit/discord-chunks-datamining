/** Chunk was on 18831 **/
/** chunk id: 621145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./997841.js"), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk640108 = require("./640108.jsx"),
  Chunk406432 = require("./406432.js"),
  Chunk169525 = require("./169525.js"),
  Chunk786761 = require("./786761.js"),
  Chunk499376 = require("./499376.js"),
  Chunk3148 = require("./3148.js"),
  Chunk739566 = require("./739566.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk219797 = require("./219797.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk884182 = require("./884182.jsx"),
  Chunk25015 = require("./25015.jsx"),
  Chunk963550 = require("./963550.jsx"),
  Chunk845080 = require("./845080.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk956664 = require("./956664.js"),
  Chunk709054 = require("./709054.js"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk887902 = require("./887902.js");

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

function I(e, t) {
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
let k = e => {
  let {
    message: t
  } = e, {
    attachments: n
  } = t;
  if (0 === n.length) return null;
  let a = 1 === n.length;

  function s(e, t) {
    return (0, u.dn)(e.originalItem, t)
  }
  return (0, i.jsx)("div", {
    className: L.classificationEvidenceMessageAttachment,
    children: (0, i.jsx)(E.Z, {
      items: n.map(e => {
        var n;
        return {
          item: {
            uniqueId: e.id,
            originalItem: e,
            type: (0, m.aw)(e, true),
            downloadUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            spoiler: e.spoiler,
            contentType: e.content_type,
            srcIsAnimated: (0, l.yE)(null != (n = e.flags) ? n : 0, w.J0y.IS_ANIMATED)
          },
          message: t,
          mediaLayoutType: S.hV.MOSAIC,
          autoPlayGif: false,
          canRemoveItem: false,
          isSingleMosaicItem: a,
          onRemoveItem: o.noop,
          renderVideoComponent: t => ((e, t, n) => {
            let a = T.Sv,
              l = T.EY;
            if (null != t.width && null != t.height) {
              let e = (0, O.Dc)({
                width: t.width,
                height: t.height,
                maxWidth: T.Sv,
                maxHeight: T.EY
              });
              a = (0, o.clamp)(Math.round(t.width * e), 0, T.Sv), l = (0, o.clamp)(Math.round(t.height * e), 0, T.EY)
            }
            return (0, i.jsx)("div", {
              style: {
                width: n ? a : "100%",
                height: n ? l : "100%"
              },
              children: (0, i.jsx)(r.ZP, {
                className: e.className,
                forceExternal: false,
                src: t.url,
                width: n ? a : "100%",
                height: n ? l : "100%",
                responsive: true,
                volume: e.volume,
                autoPlay: false,
                autoMute: false,
                type: r.ZP.Types.VIDEO,
                mediaLayoutType: e.mediaLayoutType,
                fileName: t.filename,
                fileSize: null == t.size ? true : t.size.toString(),
                playable: true,
                renderLinkComponent: b.iT,
                onClick: e.onClick,
                onPlay: e.onPlay,
                onEnded: e.onEnded,
                onVolumeChange: e.onVolumeChange,
                onMute: e.onMute,
                downloadable: false
              })
            })
          })(t, e, a),
          renderImageComponent: e => (0, i.jsx)(y.dS, I(N({}, e), {
            hiddenSpoilers: true,
            shouldHideMediaOptions: true,
            shouldLink: false
          })),
          renderAudioComponent: y.q7,
          renderPlaintextFilePreview: y.d4,
          renderGenericFileComponent: y.ZK,
          renderMosaicItemFooter: y.L9,
          getObscureReason: s,
          gifFavoriteButton: () => null
        }
      })
    })
  })
};

function U(e) {
  var t;
  let {
    flaggedContent: n
  } = e, o = (0, s.e7)([j.default], () => j.default.getCurrentUser()), [l, r] = a.useState({}), [u, m] = a.useState(true), y = (0, s.e7)([P.Z], () => P.Z.getUsername()), b = n[0], E = ((e, t, n, i) => {
    let a = e.attachments.map(e => {
      var n, i, a, o;
      let l = I(N({}, e), {
        filename: (0, C.eS)(e),
        size: 0,
        proxy_url: e.url
      });
      return (0, d.CO)(e.filename) || (0, d.NU)(e.filename) ? I(N({}, l), {
        width: null != (a = null == (n = t[e.id]) ? true : n.width) ? a : T.Sv,
        height: null != (o = null == (i = t[e.id]) ? true : i.height) ? o : T.EY
      }) : l
    });
    return (0, p.e5)(I(N({}, (0, f.ZP)({
      author: null != n ? n : {
        id: "",
        avatar: true,
        discriminator: "0000",
        username: i
      },
      nonce: e.id,
      content: e.content,
      type: w.uaV.DEFAULT,
      channelId: w.lds
    })), {
      timestamp: new Date(A.default.extractTimestamp(e.id)).toISOString(),
      attachments: a,
      state: w.yb.SENT
    }))
  })(b, l, o, y), O = (0, h.ZP)(E), S = (0, v.Z)(E, {
    hideSimpleEmbedContent: false,
    allowList: false,
    allowHeading: false,
    allowLinks: false,
    previewLinkTarget: false
  });
  return (a.useEffect(() => {
    Promise.all(b.attachments.filter(e => {
      let {
        filename: t
      } = e;
      return (0, d.CO)(t) || (0, d.NU)(t)
    }).map(e => new Promise((t, n) => {
      if ((0, d.CO)(e.filename)) {
        let i = new Image;
        i.src = e.url, i.onload = () => {
          t(i)
        }, i.onerror = () => {
          n()
        }
      } else if ((0, d.NU)(e.filename)) {
        let i = document.createElement("video");
        i.src = e.url, i.onloadedmetadata = () => {
          t({
            width: i.videoWidth,
            height: i.videoHeight
          })
        }, i.onerror = () => {
          n()
        }
      } else t({
        width: 0,
        height: 0
      })
    }).then(t => r(n => I(N({}, n), {
      [e.id]: t
    }))))).finally(() => m(false))
  }, [b.attachments]), "" === E.content && 0 === E.attachments.length) ? null : (0, i.jsx)("div", {
    className: L.classificationEvidenceCard,
    children: u ? (0, i.jsx)(c.$jN, {}) : (0, i.jsx)(g.Z, {
      compact: false,
      childrenHeader: (0, _.Z)({
        author: I(N({}, o), {
          colorString: "",
          colorStrings: null,
          nick: null != (t = null == o ? true : o.username) ? t : y
        }),
        message: E,
        channel: true,
        guildId: true,
        compact: false,
        animateAvatar: false,
        isGroupStart: true,
        roleIcon: true,
        hideTimestamp: false
      }),
      childrenAccessories: (0, i.jsx)(k, {
        message: E
      }),
      childrenMessageContent: (0, x.Z)({
        message: E
      }, S.content),
      hasThread: false,
      hasReply: false,
      author: O
    })
  })
}