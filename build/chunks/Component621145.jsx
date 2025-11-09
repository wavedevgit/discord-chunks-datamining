/** Chunk was on 25038 **/
/** chunk id: 621145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
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
  Chunk934064 = require("./934064.js");

function A(e) {
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

function M(e, t) {
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
  let o = 1 === n.length;

  function a(e, t) {
    return (0, d.dn)(e.originalItem, t)
  }
  return (0, i.jsx)("div", {
    className: Z.classificationEvidenceMessageAttachment,
    children: (0, i.jsx)(v.Z, {
      items: n.map(e => {
        var n;
        return {
          item: {
            uniqueId: e.id,
            originalItem: e,
            type: (0, h.aw)(e, true),
            downloadUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            spoiler: e.spoiler,
            contentType: e.content_type,
            srcIsAnimated: (0, w.yE)(null != (n = e.flags) ? n : 0, I.J0y.IS_ANIMATED)
          },
          message: t,
          mediaLayoutType: T.hV.MOSAIC,
          autoPlayGif: false,
          canRemoveItem: false,
          isSingleMosaicItem: o,
          onRemoveItem: r.noop,
          renderVideoComponent: t => ((e, t, n) => {
            let o = S.Sv,
              a = S.EY;
            if (null != t.width && null != t.height) {
              let e = (0, x.Dc)({
                width: t.width,
                height: t.height,
                maxWidth: S.Sv,
                maxHeight: S.EY
              });
              o = (0, r.clamp)(Math.round(t.width * e), 0, S.Sv), a = (0, r.clamp)(Math.round(t.height * e), 0, S.EY)
            }
            return (0, i.jsx)("div", {
              style: {
                width: n ? o : "100%",
                height: n ? a : "100%"
              },
              children: (0, i.jsx)(c.ZP, {
                className: e.className,
                forceExternal: false,
                src: t.url,
                width: n ? o : "100%",
                height: n ? a : "100%",
                responsive: true,
                volume: e.volume,
                autoPlay: false,
                autoMute: false,
                type: c.ZP.Types.VIDEO,
                mediaLayoutType: e.mediaLayoutType,
                fileName: t.filename,
                fileSize: null == t.size ? true : t.size.toString(),
                playable: true,
                renderLinkComponent: _.iT,
                onClick: e.onClick,
                onPlay: e.onPlay,
                onEnded: e.onEnded,
                onVolumeChange: e.onVolumeChange,
                onMute: e.onMute,
                downloadable: false
              })
            })
          })(t, e, o),
          renderImageComponent: e => (0, i.jsx)(g.dS, M(A({}, e), {
            hiddenSpoilers: true,
            shouldHideMediaOptions: true,
            shouldLink: false
          })),
          renderAudioComponent: g.q7,
          renderPlaintextFilePreview: g.d4,
          renderGenericFileComponent: g.ZK,
          renderMosaicItemFooter: g.L9,
          getObscureReason: a,
          gifFavoriteButton: () => null
        }
      })
    })
  })
};

function L(e) {
  var t;
  let {
    flaggedContent: n
  } = e, r = (0, a.e7)([O.default], () => O.default.getCurrentUser()), [c, d] = o.useState({}), [h, g] = o.useState(true), _ = (0, a.e7)([E.Z], () => E.Z.getUsername()), v = n[0], w = ((e, t, n, i) => {
    let o = e.attachments.map(e => {
      var n, i, o, r;
      let a = M(A({}, e), {
        filename: (0, P.eS)(e),
        size: 0,
        proxy_url: e.url
      });
      return (0, s.CO)(e.filename) || (0, s.NU)(e.filename) ? M(A({}, a), {
        width: null != (o = null == (n = t[e.id]) ? true : n.width) ? o : S.Sv,
        height: null != (r = null == (i = t[e.id]) ? true : i.height) ? r : S.EY
      }) : a
    });
    return (0, u.e5)(M(A({}, (0, f.ZP)({
      author: null != n ? n : {
        id: "",
        avatar: true,
        discriminator: "0000",
        username: i
      },
      nonce: e.id,
      content: e.content,
      type: I.uaV.DEFAULT,
      channelId: I.lds
    })), {
      timestamp: new Date(j.default.extractTimestamp(e.id)).toISOString(),
      attachments: o,
      state: I.yb.SENT
    }))
  })(v, c, r, _), x = (0, m.ZP)(w), T = (0, y.Z)(w, {
    hideSimpleEmbedContent: false,
    allowList: false,
    allowHeading: false,
    allowLinks: false,
    previewLinkTarget: false
  });
  return (o.useEffect(() => {
    Promise.all(v.attachments.filter(e => {
      let {
        filename: t
      } = e;
      return (0, s.CO)(t) || (0, s.NU)(t)
    }).map(e => new Promise((t, n) => {
      if ((0, s.CO)(e.filename)) {
        let i = new Image;
        i.src = e.url, i.onload = () => {
          t(i)
        }, i.onerror = () => {
          n()
        }
      } else if ((0, s.NU)(e.filename)) {
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
    }).then(t => d(n => M(A({}, n), {
      [e.id]: t
    }))))).finally(() => g(false))
  }, [v.attachments]), "" === w.content && 0 === w.attachments.length) ? null : (0, i.jsx)("div", {
    className: Z.classificationEvidenceCard,
    children: h ? (0, i.jsx)(l.$jN, {}) : (0, i.jsx)(p.Z, {
      compact: false,
      childrenHeader: (0, C.Z)({
        author: M(A({}, r), {
          colorString: "",
          colorStrings: null,
          nick: null != (t = null == r ? true : r.username) ? t : _
        }),
        message: w,
        channel: true,
        guildId: true,
        compact: false,
        animateAvatar: false,
        isGroupStart: true,
        roleIcon: true,
        hideTimestamp: false
      }),
      childrenAccessories: (0, i.jsx)(k, {
        message: w
      }),
      childrenMessageContent: (0, b.Z)({
        message: w
      }, T.content),
      hasThread: false,
      hasReply: false,
      author: x
    })
  })
}