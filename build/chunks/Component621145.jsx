/** Chunk was on 18831 **/
/** chunk id: 621145, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./997841.js"), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
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
  Chunk630388 = require("./630388.js"),
  Chunk956664 = require("./956664.js"),
  Chunk709054 = require("./709054.js"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk20316 = require("./20316.js");

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = i[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      i.push.apply(i, n)
    }
    return i
  })(Object(t)).forEach(function(i) {
    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
  }), e
}
let I = e => {
  let {
    message: t
  } = e, {
    attachments: i
  } = t;
  if (0 === i.length) return null;
  let a = 1 === i.length;

  function o(e, t) {
    return (0, d.dn)(e.originalItem, t)
  }
  return (0, n.jsx)("div", {
    className: k.classificationEvidenceMessageAttachment,
    children: (0, n.jsx)(x.Z, {
      items: i.map(e => {
        var i;
        return {
          item: {
            uniqueId: e.id,
            originalItem: e,
            type: (0, f.aw)(e, true),
            downloadUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            spoiler: e.spoiler,
            contentType: e.content_type,
            srcIsAnimated: (0, E.yE)(null != (i = e.flags) ? i : 0, T.J0y.IS_ANIMATED)
          },
          message: t,
          mediaLayoutType: S.hV.MOSAIC,
          autoPlayGif: false,
          canRemoveItem: false,
          isSingleMosaicItem: a,
          onRemoveItem: l.noop,
          renderVideoComponent: t => ((e, t, i) => {
            let a = w.Sv,
              o = w.EY;
            if (null != t.width && null != t.height) {
              let e = (0, O.Dc)({
                width: t.width,
                height: t.height,
                maxWidth: w.Sv,
                maxHeight: w.EY
              });
              a = (0, l.clamp)(Math.round(t.width * e), 0, w.Sv), o = (0, l.clamp)(Math.round(t.height * e), 0, w.EY)
            }
            return (0, n.jsx)("div", {
              style: {
                width: i ? a : "100%",
                height: i ? o : "100%"
              },
              children: (0, n.jsx)(r.ZP, {
                className: e.className,
                forceExternal: false,
                src: t.url,
                width: i ? a : "100%",
                height: i ? o : "100%",
                responsive: true,
                volume: e.volume,
                autoPlay: false,
                autoMute: false,
                type: r.ZP.Types.VIDEO,
                mediaLayoutType: e.mediaLayoutType,
                fileName: t.filename,
                fileSize: null == t.size ? true : t.size.toString(),
                playable: true,
                renderLinkComponent: y.iT,
                onClick: e.onClick,
                onPlay: e.onPlay,
                onEnded: e.onEnded,
                onVolumeChange: e.onVolumeChange,
                onMute: e.onMute,
                downloadable: false
              })
            })
          })(t, e, a),
          renderImageComponent: e => (0, n.jsx)(g.dS, L(N({}, e), {
            hiddenSpoilers: true,
            shouldHideMediaOptions: true,
            shouldLink: false
          })),
          renderAudioComponent: g.q7,
          renderPlaintextFilePreview: g.d4,
          renderGenericFileComponent: g.ZK,
          renderMosaicItemFooter: g.L9,
          getObscureReason: o,
          gifFavoriteButton: () => null
        }
      })
    })
  })
};

function U(e) {
  var t;
  let {
    flaggedContent: i
  } = e, l = (0, o.e7)([j.default], () => j.default.getCurrentUser()), [r, d] = a.useState({}), [f, g] = a.useState(true), y = (0, o.e7)([C.Z], () => C.Z.getUsername()), x = i[0], E = ((e, t, i, n) => {
    let a = e.attachments.map(e => {
      var i, n, a, l;
      let o = L(N({}, e), {
        filename: (0, P.eS)(e),
        size: 0,
        proxy_url: e.url
      });
      return (0, c.CO)(e.filename) || (0, c.NU)(e.filename) ? L(N({}, o), {
        width: null != (a = null == (i = t[e.id]) ? true : i.width) ? a : w.Sv,
        height: null != (l = null == (n = t[e.id]) ? true : n.height) ? l : w.EY
      }) : o
    });
    return (0, u.e5)(L(N({}, (0, m.ZP)({
      author: null != i ? i : {
        id: "",
        avatar: true,
        discriminator: "0000",
        username: n
      },
      nonce: e.id,
      content: e.content,
      type: T.uaV.DEFAULT,
      channelId: T.lds
    })), {
      timestamp: new Date(A.default.extractTimestamp(e.id)).toISOString(),
      attachments: a,
      state: T.yb.SENT
    }))
  })(x, r, l, y), O = (0, p.ZP)(E), S = (0, b.Z)(E, {
    hideSimpleEmbedContent: false,
    allowList: false,
    allowHeading: false,
    allowLinks: false,
    previewLinkTarget: false
  });
  return (a.useEffect(() => {
    Promise.all(x.attachments.filter(e => {
      let {
        filename: t
      } = e;
      return (0, c.CO)(t) || (0, c.NU)(t)
    }).map(e => new Promise((t, i) => {
      if ((0, c.CO)(e.filename)) {
        let n = new Image;
        n.src = e.url, n.onload = () => {
          t(n)
        }, n.onerror = () => {
          i()
        }
      } else if ((0, c.NU)(e.filename)) {
        let n = document.createElement("video");
        n.src = e.url, n.onloadedmetadata = () => {
          t({
            width: n.videoWidth,
            height: n.videoHeight
          })
        }, n.onerror = () => {
          i()
        }
      } else t({
        width: 0,
        height: 0
      })
    }).then(t => d(i => L(N({}, i), {
      [e.id]: t
    }))))).finally(() => g(false))
  }, [x.attachments]), "" === E.content && 0 === E.attachments.length) ? null : (0, n.jsx)("div", {
    className: k.classificationEvidenceCard,
    children: f ? (0, n.jsx)(s.$jN, {}) : (0, n.jsx)(h.Z, {
      compact: false,
      childrenHeader: (0, _.Z)({
        author: L(N({}, l), {
          colorString: "",
          colorStrings: null,
          nick: null != (t = null == l ? true : l.username) ? t : y
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
      childrenAccessories: (0, n.jsx)(I, {
        message: E
      }),
      childrenMessageContent: (0, v.Z)({
        message: E
      }, S.content),
      hasThread: false,
      hasReply: false,
      author: O
    })
  })
}