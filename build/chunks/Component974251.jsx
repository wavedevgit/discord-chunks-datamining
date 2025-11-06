/** Chunk was on 88647 **/
/** chunk id: 974251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk110924 = require("./110924.js"),
  Chunk595519 = require("./595519.js"),
  Chunk466721 = require("./466721.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk712114 = require("./712114.jsx"),
  Chunk680056 = require("./680056.js"),
  Chunk266454 = require("./266454.js"),
  Chunk536442 = require("./536442.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk79390 = require("./79390.js"),
  Chunk216789 = require("./216789.js"),
  Chunk665906 = require("./665906.js"),
  Chunk695346 = require("./695346.js"),
  Chunk433355 = require("./433355.js"),
  Chunk819640 = require("./819640.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk885110 = require("./885110.js"),
  Chunk585483 = require("./585483.js"),
  Chunk358085 = require("./358085.js"),
  Chunk127654 = require("./127654.js"),
  Chunk316595 = require("./316595.jsx"),
  Chunk443603 = require("./443603.jsx"),
  Chunk193910 = require("./193910.jsx"),
  Chunk951211 = require("./951211.js"),
  Chunk981631 = require("./981631.js"),
  Chunk356659 = require("./356659.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk90274 = require("./90274.js");

function V(e) {
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

function H(e, t) {
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
let G = Chunk647438.memo(function(e) {
  var t, l;
  let {
    className: G,
    channel: W,
    draftType: z,
    editorTextContent: q,
    setValue: Y,
    canOnlyUseTextCommands: K
  } = e, X = (0, C.bp)(), J = i.useRef(null), Q = i.useRef(null), $ = (0, o.e7)([Z.Z], () => Z.Z.getActivities()), ee = (0, o.e7)([m.Z], () => m.Z.getSettings().clipsEnabled), et = (0, o.e7)([m.Z], () => m.Z.getLastClipsSession()), en = (0, o.Wu)([m.Z], () => m.Z.getNewClipIds()), er = (0, o.e7)([j.ZP], () => null == j.ZP.getCurrentSidebarChannelId(W.id)), {
    showClipsHeaderEntrypoint: ei
  } = h.NV.useExperiment({
    location: "ChannelAttachButton"
  }, {
    autoTrackExposure: false
  }), {
    onShareClick: el
  } = (0, b.Z)(W.id), ea = (0, o.e7)([y.qc], () => y.qc.hasHotspot(y.v6.CLIPS_CHANNEL_ATTACH_REMINDER)), eo = (0, c.s9z)(e => (0, c.DEQ)(e, L.Qr)), es = (0, o.e7)([S.Z], () => S.Z.hasLayers()), ec = (0, o.e7)([m.Z], () => m.Z.hasClips()), [eu, ed] = i.useState(null), ep = (0, h.Go)() && (ee || ec), ef = W.isPrivate(), eh = (0, o.e7)([I.Z], () => ef || I.Z.can(k.Plq.ATTACH_FILES, W) && I.Z.can(k.Plq.SEND_MESSAGES, W)), em = (0, d.Z)(et);
  (null == em ? true : em.newClipIds.length) !== (null == et ? true : et.newClipIds.length) && (null != (t = null == et ? true : et.newClipIds.length) ? t : 0) > 0 && null == eu && ea && er && !eo && !ei && !es && ed("recentClips");
  let eg = (0, o.e7)([P.Z], () => P.Z.hasCurrentUserSentMessageSinceAppStart());

  function eb() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("61342"), n.e("69311")]).then(n.bind(n, 542055));
      return t => (0, r.jsx)(e, H(V({}, t), {
        channelId: W.id,
        onClipClick: e => el({
          clips: [e]
        })
      }))
    }, {
      modalKey: L.Qr
    }), ed(null)
  }
  i.useEffect(() => {
    let e = () => {
      var e;
      return null == (e = J.current) ? true : e.activateUploadDialogue()
    };
    return T.S.subscribe(k.CkL.UPLOAD_FILE, e), () => {
      T.S.unsubscribe(k.CkL.UPLOAD_FILE, e)
    }
  });
  let e_ = (0, x.NE)(W),
    ey = (0, x.Xu)(W),
    eC = !E.dN.useSetting() && !(0, N.isAndroidWeb)() && null != window.ResizeObserver,
    ev = (0, v.UI)(null != W ? W : true),
    eO = (0, p.qB)(),
    ex = (0, O.Us)({
      location: "ChannelAttachButton"
    }),
    eE = f.C.useExperiment({
      location: "ChannelAttachButton"
    }).enableAIFeatures,
    ej = null != (l = null == en ? true : en.length) ? l : 0,
    eS = (0, D.Z)({
      canAttachFiles: eh,
      canStartThreads: e_ || ey,
      useSlate: eC,
      hasClips: ep,
      canUseApplicationCommands: !K,
      channel: W,
      activities: $,
      newClipsCount: ej,
      canPostPolls: ev,
      canLaunchActivities: eO,
      appContext: X,
      canSendScheduledMessages: ex,
      canSummarizeThreads: eE
    });
  if (0 === eS.length) return null;
  let eP = (0, r.jsx)(c.svS, {
      size: "refresh_sm",
      color: "currentColor",
      colorClass: F.attachButtonPlus
    }),
    eI = (0, r.jsx)(c.yRy, {
      targetElementRef: Q,
      shouldShow: null != eu,
      animation: c.yRy.Animation.NONE,
      align: "recentClips" === eu ? "center" : "left",
      position: "top",
      positionKey: null != eu ? eu : "null",
      onRequestOpen: () => {
        eg && (0, _.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
          dismissAction: U.L.TAKE_ACTION
        }), ed("attachMenu")
      },
      onRequestClose: () => {
        (0, c.$sL)() || (eg && (0, _.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
          dismissAction: U.L.TAKE_ACTION
        }), ed(null))
      },
      renderPopout: e => {
        switch (eu) {
          case "recentClips":
            return (0, r.jsx)(g.Z, H(V({}, e), {
              onOpenClips: eb,
              lastClipsSession: et
            }));
          case "attachMenu":
            return (0, r.jsx)(R.Z, H(V({}, e), {
              onClose: () => ed(null),
              options: eS,
              channel: W,
              onFileUpload: () => {
                var e;
                return null == (e = J.current) ? true : e.activateUploadDialogue()
              },
              draftType: z,
              editorTextContent: q,
              setValue: Y,
              openClips: eb
            }));
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, r.jsx)(M.Z, H(V({
        ref: Q,
        className: a()(F.attachButton, G),
        childClassName: F.attachButtonInner,
        isActive: false,
        "aria-label": B.intl.string(B.t.d56gCa),
        onDoubleClick: eh ? () => {
          var e;
          return null == (e = J.current) ? true : e.activateUploadDialogue()
        } : true,
        "aria-haspopup": "menu"
      }, e), {
        children: eP
      }))
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: F.uploadInput,
      children: (0, r.jsx)(u.Z, {
        ref: J,
        onChange: e => {
          var t, n, r;
          t = e.currentTarget.files, null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code ? (0, A.G)(W, []) : (0, A.d)(t, W, z, {
            requireConfirm: true,
            showLargeMessageDialog: r,
            origin: "file_picker"
          }), T.S.dispatchToLastSubscribed(k.CkL.TEXTAREA_FOCUS), e.currentTarget.value = ""
        },
        multiple: W.rateLimitPerUser <= 0,
        tabIndex: false,
        "aria-hidden": true
      })
    }), (0, r.jsx)("div", {
      className: F.attachWrapper,
      children: (0, r.jsx)(w.Z, {
        channel: W,
        isOmniMenuOpen: "attachMenu" === eu,
        openOmniMenu: () => ed("attachMenu"),
        enabled: eO,
        animationContainerClassName: F.buttonAnimation,
        glowClassName: F.buttonAnimationGlow,
        trinketsClassName: F.buttonAnimationTrinkets,
        children: eI
      })
    })]
  })
})