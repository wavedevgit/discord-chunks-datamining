/** Chunk was on 18831 **/
/** chunk id: 621145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./997841.js"), require("./388685.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk640108 = require("./640108.js"),
  Chunk406432 = require("./406432.js"),
  Chunk169525 = require("./169525.js"),
  Chunk786761 = require("./786761.js"),
  Chunk499376 = require("./499376.js"),
  Chunk3148 = require("./3148.js"),
  Chunk739566 = require("./739566.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk219797 = require("./219797.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk884182 = require("./884182.js"),
  Chunk25015 = require("./25015.jsx"),
  Chunk963550 = require("./963550.js"),
  Chunk845080 = require("./845080.js"),
  Chunk594174 = require("./594174.js"),
  Chunk630388 = require("./630388.js"),
  Chunk956664 = require("./956664.js"),
  Chunk709054 = require("./709054.js"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk966378 = require("./966378.js");

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
let L = (e, t, n, i) => {
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
  },
  U = e => {
    let {
      message: t
    } = e, {
      attachments: n
    } = t;
    if (0 === n.length) return null;
    let a = (e, t, n) => {
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
        return <div style={{
            width: n ? a : "100%",
            height: n ? r : "100%"
          }}><s.ZP className={e.className} forceExternal={false} src={t.url} width={n ? a : "100%"} height={n ? r : "100%"} responsive={true} volume={e.volume} autoPlay={false} autoMute={false} type={s.ZP.Types.VIDEO} mediaLayoutType={e.mediaLayoutType} fileName={t.filename} fileSize={null == t.size ? true : t.size.toString()} playable={true} renderLinkComponent={y.iT} onClick={e.onClick} onPlay={e.onPlay} onEnded={e.onEnded} onVolumeChange={e.onVolumeChange} onMute={e.onMute} downloadable={false} /></div>
      },
      r = 1 === n.length;

    function o(e, t) {
      return (0, d.dn)(e.originalItem, t)
    }
    return <div className={N.classificationEvidenceMessageAttachment}><x.Z items={n.map(e => {
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
            isSingleMosaicItem: r,
            onRemoveItem: l.noop,
            renderVideoComponent: t => a(t, e, r),
            renderImageComponent: e => (0, i.jsx)(g.dS, I(k({}, e), {
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
        })} /></div>
  };

function D(e) {
  var t;
  let {
    flaggedContent: n
  } = e, l = (0, r.e7)([O.default], () => O.default.getCurrentUser()), [s, d] = a.useState({}), [u, p] = a.useState(true), m = (0, r.e7)([w.Z], () => w.Z.getUsername()), g = n[0], y = L(g, s, l, m), x = (0, f.ZP)(y), E = (0, j.Z)(y, {
    hideSimpleEmbedContent: false,
    allowList: false,
    allowHeading: false,
    allowLinks: false,
    previewLinkTarget: false
  });
  return (a.useEffect(() => {
    Promise.all(g.attachments.filter(e => {
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
    }))))).finally(() => p(false))
  }, [g.attachments]), "" === y.content && 0 === y.attachments.length) ? null : <div className={N.classificationEvidenceCard}>{u ? (0, i.jsx)(o.$jN, {}) : (0, i.jsx)(h.Z, {
      compact: false,
      childrenHeader: (0, b.Z)({
        author: I(k({}, l), {
          colorString: "",
          colorStrings: null,
          nick: null != (t = null == l ? true : l.username) ? t : m
        }),
        message: y,
        channel: true,
        guildId: true,
        compact: false,
        animateAvatar: false,
        isGroupStart: true,
        roleIcon: true,
        hideTimestamp: false
      }),
      childrenAccessories: (0, i.jsx)(U, {
        message: y
      }),
      childrenMessageContent: (0, v.Z)({
        message: y
      }, E.content),
      hasThread: false,
      hasReply: false,
      author: x
    })}</div>
}