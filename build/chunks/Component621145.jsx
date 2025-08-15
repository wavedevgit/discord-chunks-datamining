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

function k(e) {
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
let L = e => {
  let {
    message: t
  } = e, {
    attachments: n
  } = t;
  if (0 === n.length) return null;
  let a = 1 === n.length;

  function r(e, t) {
    return (0, d.dn)(e.originalItem, t)
  }
  return (0, i.jsx)("div", {
    className: N.classificationEvidenceMessageAttachment,
    children: (0, i.jsx)(x.Z, {
      items: n.map(e => {
        var n;
        return {
          item: {
            uniqueId: e.id,
            originalItem: e,
            type: (0, p.aw)(e, true),
            downloadUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            spoiler: e.spoiler,
            contentType: e.content_type,
            srcIsAnimated: (0, E.yE)(null != (n = e.flags) ? n : 0, S.J0y.IS_ANIMATED)
          },
          message: t,
          mediaLayoutType: C.hV.MOSAIC,
          autoPlayGif: false,
          canRemoveItem: false,
          isSingleMosaicItem: a,
          onRemoveItem: l.noop,
          renderVideoComponent: t => ((e, t, n) => {
            let a = T.Sv,
              r = T.EY;
            if (null != t.width && null != t.height) {
              let e = (0, _.Dc)({
                width: t.width,
                height: t.height,
                maxWidth: T.Sv,
                maxHeight: T.EY
              });
              a = (0, l.clamp)(Math.round(t.width * e), 0, T.Sv), r = (0, l.clamp)(Math.round(t.height * e), 0, T.EY)
            }
            return (0, i.jsx)("div", {
              style: {
                width: n ? a : "100%",
                height: n ? r : "100%"
              },
              children: (0, i.jsx)(s.ZP, {
                className: e.className,
                forceExternal: false,
                src: t.url,
                width: n ? a : "100%",
                height: n ? r : "100%",
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
          renderImageComponent: e => (0, i.jsx)(g.dS, I(k({}, e), {
            hiddenSpoilers: true,
            shouldHideMediaOptions: true,
            shouldLink: false
          })),
          renderAudioComponent: g.q7,
          renderPlaintextFilePreview: g.d4,
          renderGenericFileComponent: g.ZK,
          renderMosaicItemFooter: g.L9,
          getObscureReason: r,
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
  } = e, l = (0, r.e7)([O.default], () => O.default.getCurrentUser()), [s, d] = a.useState({}), [p, g] = a.useState(true), y = (0, r.e7)([w.Z], () => w.Z.getUsername()), x = n[0], E = ((e, t, n, i) => {
    let a = e.attachments.map(e => {
      var n, i, a, l;
      let r = I(k({}, e), {
        filename: (0, P.eS)(e),
        size: 0,
        proxy_url: e.url
      });
      return (0, c.CO)(e.filename) || (0, c.NU)(e.filename) ? I(k({}, r), {
        width: null != (a = null == (n = t[e.id]) ? true : n.width) ? a : T.Sv,
        height: null != (l = null == (i = t[e.id]) ? true : i.height) ? l : T.EY
      }) : r
    });
    return (0, u.e5)(I(k({}, (0, m.ZP)({
      author: null != n ? n : {
        id: "",
        avatar: true,
        discriminator: "0000",
        username: i
      },
      nonce: e.id,
      content: e.content,
      type: S.uaV.DEFAULT,
      channelId: S.lds
    })), {
      timestamp: new Date(A.default.extractTimestamp(e.id)).toISOString(),
      attachments: a,
      state: S.yb.SENT
    }))
  })(x, s, l, y), _ = (0, f.ZP)(E), C = (0, j.Z)(E, {
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
    }).then(t => d(n => I(k({}, n), {
      [e.id]: t
    }))))).finally(() => g(false))
  }, [x.attachments]), "" === E.content && 0 === E.attachments.length) ? null : (0, i.jsx)("div", {
    className: N.classificationEvidenceCard,
    children: p ? (0, i.jsx)(o.$jN, {}) : (0, i.jsx)(h.Z, {
      compact: false,
      childrenHeader: (0, b.Z)({
        author: I(k({}, l), {
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
      childrenAccessories: (0, i.jsx)(L, {
        message: E
      }),
      childrenMessageContent: (0, v.Z)({
        message: E
      }, C.content),
      hasThread: false,
      hasReply: false,
      author: _
    })
  })
}