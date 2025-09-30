/** Chunk was on 18831 **/
/** chunk id: 621145, original params: e,t,n (module,exports,require) **/
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

function L(e) {
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

function k(e, t) {
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
let I = e => {
  let {
    message: t
  } = e, {
    attachments: n
  } = t;
  if (0 === n.length) return null;
  let a = 1 === n.length;

  function o(e, t) {
    return (0, d.dn)(e.originalItem, t)
  }
  return (0, i.jsx)("div", {
    className: N.classificationEvidenceMessageAttachment,
    children: (0, i.jsx)(b.Z, {
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
            srcIsAnimated: (0, E.yE)(null != (n = e.flags) ? n : 0, T.J0y.IS_ANIMATED)
          },
          message: t,
          mediaLayoutType: S.hV.MOSAIC,
          autoPlayGif: false,
          canRemoveItem: false,
          isSingleMosaicItem: a,
          onRemoveItem: l.noop,
          renderVideoComponent: t => ((e, t, n) => {
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
            return (0, i.jsx)("div", {
              style: {
                width: n ? a : "100%",
                height: n ? o : "100%"
              },
              children: (0, i.jsx)(s.ZP, {
                className: e.className,
                forceExternal: false,
                src: t.url,
                width: n ? a : "100%",
                height: n ? o : "100%",
                responsive: true,
                volume: e.volume,
                autoPlay: false,
                autoMute: false,
                type: s.ZP.Types.VIDEO,
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
          renderImageComponent: e => (0, i.jsx)(g.dS, k(L({}, e), {
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
    flaggedContent: n
  } = e, l = (0, o.e7)([j.default], () => j.default.getCurrentUser()), [s, d] = a.useState({}), [m, g] = a.useState(true), y = (0, o.e7)([A.Z], () => A.Z.getUsername()), b = n[0], E = ((e, t, n, i) => {
    let a = e.attachments.map(e => {
      var n, i, a, l;
      let o = k(L({}, e), {
        filename: (0, C.eS)(e),
        size: 0,
        proxy_url: e.url
      });
      return (0, c.CO)(e.filename) || (0, c.NU)(e.filename) ? k(L({}, o), {
        width: null != (a = null == (n = t[e.id]) ? true : n.width) ? a : w.Sv,
        height: null != (l = null == (i = t[e.id]) ? true : i.height) ? l : w.EY
      }) : o
    });
    return (0, u.e5)(k(L({}, (0, p.ZP)({
      author: null != n ? n : {
        id: "",
        avatar: true,
        discriminator: "0000",
        username: i
      },
      nonce: e.id,
      content: e.content,
      type: T.uaV.DEFAULT,
      channelId: T.lds
    })), {
      timestamp: new Date(P.default.extractTimestamp(e.id)).toISOString(),
      attachments: a,
      state: T.yb.SENT
    }))
  })(b, s, l, y), O = (0, f.ZP)(E), S = (0, v.Z)(E, {
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
      return (0, c.CO)(t) || (0, c.NU)(t)
    }).map(e => new Promise((t, n) => {
      if ((0, c.CO)(e.filename)) {
        let i = new Image;
        i.src = e.url, i.onload = () => {
          t(i)
        }, i.onerror = () => {
          n()
        }
      } else if ((0, c.NU)(e.filename)) {
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
    }).then(t => d(n => k(L({}, n), {
      [e.id]: t
    }))))).finally(() => g(false))
  }, [b.attachments]), "" === E.content && 0 === E.attachments.length) ? null : (0, i.jsx)("div", {
    className: N.classificationEvidenceCard,
    children: m ? (0, i.jsx)(r.$jN, {}) : (0, i.jsx)(h.Z, {
      compact: false,
      childrenHeader: (0, _.Z)({
        author: k(L({}, l), {
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
      childrenAccessories: (0, i.jsx)(I, {
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