/** Chunk was on 99484 **/
/** chunk id: 584034, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => L
}), require("./938796.js"), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk922667 = require("./922667.jsx"),
  Chunk77350 = require("./77350.js"),
  Chunk294520 = require("./294520.js"),
  Chunk141468 = require("./141468.js"),
  Chunk448381 = require("./448381.js"),
  Chunk963852 = require("./963852.js"),
  Chunk763754 = require("./763754.js"),
  Chunk491182 = require("./491182.jsx"),
  Chunk266620 = require("./266620.jsx"),
  Chunk652176 = require("./652176.jsx"),
  Chunk394839 = require("./394839.jsx"),
  Chunk538355 = require("./538355.jsx"),
  Chunk715628 = require("./715628.jsx"),
  Chunk752636 = require("./752636.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk515718 = require("./515718.js"),
  Chunk661191 = require("./661191.js"),
  Chunk207913 = require("./207913.js"),
  Chunk393033 = require("./393033.js"),
  Chunk239093 = require("./239093.js"),
  Chunk652215 = require("./652215.js"),
  Chunk838541 = require("./838541.js"),
  Chunk26896 = require("./26896.js");

function M(e) {
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
let D = e => {
  let {
    message: t
  } = e, {
    attachments: n
  } = t;
  if (0 === n.length) return null;
  let a = 1 === n.length;

  function l(e, t) {
    return (0, u.iW)(e.originalItem, t)
  }
  return (0, r.jsx)("div", {
    className: k.Y,
    children: (0, r.jsx)(v.A, {
      items: n.map(e => {
        var n;
        return {
          item: {
            uniqueId: e.id,
            originalItem: e,
            type: (0, h.NI)(e, true),
            downloadUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            spoiler: e.spoiler,
            contentType: e.content_type,
            srcIsAnimated: (0, o.Lt)(null != (n = e.flags) ? n : 0, I.sbO.IS_ANIMATED)
          },
          message: t,
          mediaLayoutType: C.dG.MOSAIC,
          autoPlayGif: false,
          canRemoveItem: false,
          isSingleMosaicItem: a,
          onRemoveItem: i.noop,
          renderVideoComponent: t => ((e, t, n) => {
            let a = S.V5,
              o = S.M8;
            if (null != t.width && null != t.height) {
              let e = (0, A.U8)({
                width: t.width,
                height: t.height,
                maxWidth: S.V5,
                maxHeight: S.M8
              });
              a = (0, i.clamp)(Math.round(t.width * e), 0, S.V5), o = (0, i.clamp)(Math.round(t.height * e), 0, S.M8)
            }
            return (0, r.jsx)("div", {
              style: {
                width: n ? a : "100%",
                height: n ? o : "100%"
              },
              children: (0, r.jsx)(d.Ay, {
                className: e.className,
                forceExternal: false,
                src: t.url,
                width: n ? a : "100%",
                height: n ? o : "100%",
                responsive: true,
                volume: e.volume,
                autoPlay: false,
                autoMute: false,
                type: d.Ay.Types.VIDEO,
                mediaLayoutType: e.mediaLayoutType,
                fileName: t.filename,
                fileSize: null == t.size ? true : t.size.toString(),
                playable: true,
                renderLinkComponent: y.bU,
                onClick: e.onClick,
                onPlay: e.onPlay,
                onEnded: e.onEnded,
                onVolumeChange: e.onVolumeChange,
                onMute: e.onMute,
                downloadable: false
              })
            })
          })(t, e, a),
          renderImageComponent: e => (0, r.jsx)(g.Cr, T(M({}, e), {
            hiddenSpoilers: true,
            shouldHideMediaOptions: true,
            shouldLink: false
          })),
          renderAudioComponent: g.Nj,
          renderPlaintextFilePreview: g.R6,
          renderGenericFileComponent: g.UB,
          renderMosaicItemFooter: g.YE,
          getObscureReason: l,
          gifFavoriteButton: () => null
        }
      })
    })
  })
};

function L(e) {
  var t;
  let n, {
      flaggedContent: i
    } = e,
    o = (0, l.bG)([j.default], () => j.default.getCurrentUser()),
    [d, u] = a.useState({}),
    [h, g] = a.useState(true),
    y = (0, l.bG)([P.A], () => P.A.getUsername()),
    v = i[0],
    A = (n = v.attachments.map(e => {
      var t, n, r, a;
      let i = T(M({}, e), {
        filename: (0, E.tF)(e),
        size: 0,
        proxy_url: e.url
      });
      return (0, s.u)(e.filename) || (0, s.AE)(e.filename) ? T(M({}, i), {
        width: null != (t = null == (r = d[e.id]) ? true : r.width) ? t : S.V5,
        height: null != (n = null == (a = d[e.id]) ? true : a.height) ? n : S.M8
      }) : i
    }), (0, f.rh)(T(M({}, (0, m.Ay)({
      author: null != o ? o : {
        id: "",
        avatar: true,
        discriminator: "0000",
        username: y
      },
      nonce: v.id,
      content: v.content,
      type: I.lAJ.DEFAULT,
      channelId: I.dJq
    })), {
      timestamp: new Date(x.default.extractTimestamp(v.id)).toISOString(),
      attachments: n,
      state: I.cmJ.SENT
    }))),
    C = (0, p.Ay)(A),
    L = (0, O.A)(A, {
      hideSimpleEmbedContent: false,
      allowList: false,
      allowHeading: false,
      allowLinks: false,
      previewLinkTarget: false
    });
  return (a.useEffect(() => {
    Promise.all(v.attachments.filter(e => {
      let {
        filename: t
      } = e;
      return (0, s.u)(t) || (0, s.AE)(t)
    }).map(e => new Promise((t, n) => {
      if ((0, s.u)(e.filename)) {
        let r = new Image;
        r.src = e.url, r.onload = () => {
          t(r)
        }, r.onerror = () => {
          n()
        }
      } else if ((0, s.AE)(e.filename)) {
        let r = document.createElement("video");
        r.src = e.url, r.onloadedmetadata = () => {
          t({
            width: r.videoWidth,
            height: r.videoHeight
          })
        }, r.onerror = () => {
          n()
        }
      } else t({
        width: 0,
        height: 0
      })
    }).then(t => u(n => T(M({}, n), {
      [e.id]: t
    }))))).finally(() => g(false))
  }, [v.attachments]), "" === A.content && 0 === A.attachments.length) ? null : (0, r.jsx)("div", {
    className: k.O,
    children: h ? (0, r.jsx)(c.y$y, {}) : (0, r.jsx)(b.A, {
      compact: false,
      childrenHeader: (0, _.A)({
        author: T(M({}, o), {
          colorString: "",
          colorStrings: null,
          nick: null != (t = null == o ? true : o.username) ? t : y
        }),
        message: A,
        channel: true,
        guildId: true,
        compact: false,
        animateAvatar: false,
        isGroupStart: true,
        roleIcon: true,
        hideTimestamp: false
      }),
      childrenAccessories: (0, r.jsx)(D, {
        message: A
      }),
      childrenMessageContent: (0, w.A)({
        message: A
      }, L.content),
      hasThread: false,
      hasReply: false,
      author: C
    })
  })
}