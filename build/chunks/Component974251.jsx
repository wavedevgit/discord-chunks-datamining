/** Chunk was on 57336 **/
/** chunk id: 974251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => z
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
  Chunk39952 = require("./39952.js"),
  Chunk533379 = require("./533379.js"),
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

function F(e) {
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

function G(e, t) {
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
let z = Chunk647438.memo(function(e) {
  var t, l;
  let {
    className: z,
    channel: W,
    draftType: q,
    editorTextContent: K,
    setValue: Y,
    canOnlyUseTextCommands: X,
    chatInputType: J
  } = e, Q = (0, _.bp)(), $ = r.useRef(null), ee = r.useRef(null), et = (0, o.e7)([T.Z], () => T.Z.getActivities()), en = (0, o.e7)([g.Z], () => g.Z.getSettings().clipsEnabled), ei = (0, o.e7)([g.Z], () => g.Z.getLastClipsSession()), er = (0, o.Wu)([g.Z], () => g.Z.getNewClipIds()), el = (0, o.e7)([S.ZP], () => null == S.ZP.getCurrentSidebarChannelId(W.id)), {
    showClipsHeaderEntrypoint: ea
  } = m.NV.useExperiment({
    location: "ChannelAttachButton"
  }, {
    autoTrackExposure: false
  }), {
    onShareClick: eo
  } = (0, y.Z)(W.id), es = (0, o.e7)([v.qc], () => v.qc.hasHotspot(v.v6.CLIPS_CHANNEL_ATTACH_REMINDER)), ec = (0, c.s9z)(e => (0, c.DEQ)(e, U.Qr)), eu = (0, o.e7)([P.Z], () => P.Z.hasLayers()), ed = (0, o.e7)([g.Z], () => g.Z.hasClips()), [ep, eh] = r.useState(null), ef = (0, m.Go)() && (en || ed), em = W.isPrivate(), eg = (0, o.e7)([Z.Z], () => em || Z.Z.can(k.Plq.ATTACH_FILES, W) && Z.Z.can(k.Plq.SEND_MESSAGES, W)), eb = (0, d.Z)(ei);
  (null == eb ? true : eb.newClipIds.length) !== (null == ei ? true : ei.newClipIds.length) && (null != (t = null == ei ? true : ei.newClipIds.length) ? t : 0) > 0 && null == ep && es && el && !ec && !ea && !eu && eh("recentClips");
  let ey = (0, o.e7)([I.Z], () => I.Z.hasCurrentUserSentMessageSinceAppStart());

  function eC() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("61342"), n.e("69311")]).then(n.bind(n, 542055));
      return t => (0, i.jsx)(e, G(F({}, t), {
        channelId: W.id,
        onClipClick: e => eo({
          clips: [e]
        })
      }))
    }, {
      modalKey: U.Qr
    }), eh(null)
  }
  r.useEffect(() => {
    let e = e => {
      let {
        channelId: t
      } = e;
      if (t === W.id) {
        var n;
        null == (n = $.current) || n.activateUploadDialogue()
      }
    };
    return N.S.subscribe(k.CkL.UPLOAD_FILE, e), () => {
      N.S.unsubscribe(k.CkL.UPLOAD_FILE, e)
    }
  });
  let ev = (0, O.NE)(W),
    e_ = (0, O.Xu)(W),
    ex = !E.dN.useSetting() && !(0, A.isAndroidWeb)() && null != window.ResizeObserver,
    ej = (0, f.R)({
      channel: W,
      chatInputType: J
    }),
    eO = (0, x.UI)(null != W ? W : true),
    eE = (0, p.qB)(),
    eS = (0, j.Us)({
      location: "ChannelAttachButton"
    }),
    eP = (0, h.o)(),
    eI = null != (l = null == er ? true : er.length) ? l : 0,
    eZ = (0, D.Z)({
      canAttachFiles: eg,
      canStartThreads: ev || e_,
      useSlate: ex,
      hasClips: ef,
      canUseApplicationCommands: !X,
      channel: W,
      activities: et,
      newClipsCount: eI,
      canPostPolls: eO,
      canLaunchActivities: eE,
      appContext: Q,
      canSendScheduledMessages: eS,
      canSummarizeThreads: eP,
      showAppLauncher: ej
    });
  if (0 === eZ.length) return null;
  let eT = (0, i.jsx)(c.svS, {
      size: "refresh_sm",
      color: "currentColor",
      colorClass: V.attachButtonPlus
    }),
    eN = (0, i.jsx)(c.yRy, {
      targetElementRef: ee,
      shouldShow: null != ep,
      animation: c.yRy.Animation.NONE,
      align: "recentClips" === ep ? "center" : "left",
      position: "top",
      positionKey: null != ep ? ep : "null",
      onRequestOpen: () => {
        ey && (0, C.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
          dismissAction: B.L.TAKE_ACTION
        }), eh("attachMenu")
      },
      onRequestClose: () => {
        (0, c.$sL)() || (ey && (0, C.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
          dismissAction: B.L.TAKE_ACTION
        }), eh(null))
      },
      renderPopout: e => {
        switch (ep) {
          case "recentClips":
            return (0, i.jsx)(b.Z, G(F({}, e), {
              onOpenClips: eC,
              lastClipsSession: ei
            }));
          case "attachMenu":
            return (0, i.jsx)(L.Z, G(F({}, e), {
              onClose: () => eh(null),
              options: eZ,
              channel: W,
              onFileUpload: () => {
                var e;
                return null == (e = $.current) ? true : e.activateUploadDialogue()
              },
              draftType: q,
              editorTextContent: K,
              setValue: Y,
              openClips: eC,
              chatInputType: J
            }));
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, i.jsx)(R.Z, G(F({
        ref: ee,
        className: a()(V.attachButton, z),
        childClassName: V.attachButtonInner,
        isActive: false,
        "aria-label": H.intl.string(H.t.d56gCa),
        onDoubleClick: eg ? () => {
          var e;
          return null == (e = $.current) ? true : e.activateUploadDialogue()
        } : true,
        "aria-haspopup": "menu"
      }, e), {
        children: eT
      }))
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: V.uploadInput,
      children: (0, i.jsx)(u.Z, {
        ref: $,
        onChange: e => {
          var t, n, i;
          t = e.currentTarget.files, null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code ? (0, w.G)(W, []) : (0, w.d)(t, W, q, {
            requireConfirm: true,
            showLargeMessageDialog: i,
            origin: "file_picker"
          }), N.S.dispatchToLastSubscribed(k.CkL.TEXTAREA_FOCUS), e.currentTarget.value = ""
        },
        multiple: W.rateLimitPerUser <= 0,
        tabIndex: false,
        "aria-hidden": true
      })
    }), (0, i.jsx)("div", {
      className: V.attachWrapper,
      children: (0, i.jsx)(M.Z, {
        channel: W,
        isOmniMenuOpen: "attachMenu" === ep,
        openOmniMenu: () => eh("attachMenu"),
        enabled: eE,
        animationContainerClassName: V.buttonAnimation,
        glowClassName: V.buttonAnimationGlow,
        trinketsClassName: V.buttonAnimationTrinkets,
        children: eN
      })
    })]
  })
})