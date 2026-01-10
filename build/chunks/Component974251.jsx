/** Chunk was on 81985 **/
/** chunk id: 974251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => W
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk341569 = require("./341569.js"),
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
  Chunk815308 = require("./815308.js");

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

function z(e, t) {
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
let W = Chunk473749.memo(function(e) {
  var t, l;
  let {
    className: W,
    channel: K,
    draftType: Y,
    editorTextContent: q,
    setValue: X,
    canOnlyUseTextCommands: Q,
    chatInputType: J
  } = e, $ = (0, x.bp)(), ee = i.useRef(null), et = i.useRef(null), en = (0, o.e7)([T.Z], () => T.Z.getActivities()), er = (0, b.z8)(), ei = (0, o.e7)([m.Z], () => m.Z.getLastClipsSession()), el = (0, o.Wu)([m.Z], () => m.Z.getNewClipIds()), ea = (0, o.e7)([I.ZP], () => null == I.ZP.getCurrentSidebarChannelId(K.id)), {
    showClipsHeaderEntrypoint: eo
  } = g.NV.useExperiment({
    location: "ChannelAttachButton"
  }, {
    autoTrackExposure: false
  }), {
    onShareClick: es
  } = (0, v.Z)(K.id), ec = (0, o.e7)([j.qc], () => j.qc.hasHotspot(j.v6.CLIPS_CHANNEL_ATTACH_REMINDER)), eu = (0, c.s9z)(e => (0, c.DEQ)(e, G.Qr)), ed = (0, o.e7)([P.Z], () => P.Z.hasLayers()), ep = (0, o.e7)([m.Z], () => m.Z.hasClips()), [ef, eh] = i.useState(null), eg = (0, g.w9)() && (er || ep), em = K.isPrivate(), eb = (0, o.e7)([N.Z], () => em || N.Z.can(U.Plq.ATTACH_FILES, K) && N.Z.can(U.Plq.SEND_MESSAGES, K)), ey = (0, d.Z)(ei);
  (null == ey ? true : ey.newClipIds.length) !== (null == ei ? true : ei.newClipIds.length) && (null != (t = null == ei ? true : ei.newClipIds.length) ? t : 0) > 0 && null == ef && ec && ea && !eu && !eo && !ed && eh("recentClips");
  let ev = (0, o.e7)([Z.Z], () => Z.Z.hasCurrentUserSentMessageSinceAppStart());

  function eO() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("61342"), n.e("3370")]).then(n.bind(n, 542055));
      return t => (0, r.jsx)(e, z(V({}, t), {
        channelId: K.id,
        onClipClick: e => es({
          clips: [e]
        })
      }))
    }, {
      modalKey: G.Qr
    }), eh(null)
  }
  i.useEffect(() => {
    let e = e => {
      let {
        channelId: t
      } = e;
      if (t === K.id) {
        var n;
        null == (n = ee.current) || n.activateUploadDialogue()
      }
    };
    return A.S.subscribe(U.CkL.UPLOAD_FILE, e), () => {
      A.S.unsubscribe(U.CkL.UPLOAD_FILE, e)
    }
  });
  let ej = (0, S.NE)(K),
    ex = (0, S.Xu)(K),
    eC = !_.dN.useSetting() && !(0, w.isAndroidWeb)() && null != window.ResizeObserver,
    eE = (0, h.R)({
      channel: K,
      chatInputType: J
    }),
    eS = (0, C.UI)(null != K ? K : true),
    e_ = (0, p.qB)(),
    eI = (0, E.Us)({
      location: "ChannelAttachButton"
    }),
    eP = (0, f.o)(),
    eZ = null != (l = null == el ? true : el.length) ? l : 0,
    eN = (0, L.Z)({
      canAttachFiles: eb,
      canStartThreads: ej || ex,
      useSlate: eC,
      hasClips: eg,
      canUseApplicationCommands: !Q,
      channel: K,
      activities: en,
      newClipsCount: eZ,
      canPostPolls: eS,
      canLaunchActivities: e_,
      appContext: $,
      canSendScheduledMessages: eI,
      canSummarizeThreads: eP,
      showAppLauncher: eE
    });
  if (0 === eN.length) return null;
  let eT = (0, r.jsx)(c.svS, {
      size: "refresh_sm",
      color: "currentColor",
      colorClass: H.attachButtonPlus
    }),
    eA = (0, r.jsx)(c.yRy, {
      targetElementRef: et,
      shouldShow: null != ef,
      animation: c.yRy.Animation.NONE,
      align: "recentClips" === ef ? "center" : "left",
      position: "top",
      positionKey: null != ef ? ef : "null",
      onRequestOpen: () => {
        ev && (0, O.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
          dismissAction: B.L.TAKE_ACTION
        }), eh("attachMenu")
      },
      onRequestClose: () => {
        (0, c.$sL)() || (ev && (0, O.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
          dismissAction: B.L.TAKE_ACTION
        }), eh(null))
      },
      renderPopout: e => {
        switch (ef) {
          case "recentClips":
            return (0, r.jsx)(y.Z, z(V({}, e), {
              onOpenClips: eO,
              lastClipsSession: ei
            }));
          case "attachMenu":
            return (0, r.jsx)(k.Z, z(V({}, e), {
              onClose: () => eh(null),
              options: eN,
              channel: K,
              onFileUpload: () => {
                var e;
                return null == (e = ee.current) ? true : e.activateUploadDialogue()
              },
              draftType: Y,
              editorTextContent: q,
              setValue: X,
              openClips: eO,
              chatInputType: J
            }));
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, r.jsx)(M.Z, z(V({
        ref: et,
        className: a()(H.attachButton, W),
        childClassName: H.attachButtonInner,
        isActive: false,
        "aria-label": F.intl.string(F.t.d56gCa),
        onDoubleClick: eb ? () => {
          var e;
          return null == (e = ee.current) ? true : e.activateUploadDialogue()
        } : true,
        "aria-haspopup": "menu"
      }, e), {
        children: eT
      }))
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: H.uploadInput,
      children: (0, r.jsx)(u.Z, {
        ref: ee,
        onChange: e => {
          var t, n;
          t = e.currentTarget.files, null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code ? (0, R.G)(K, []) : (0, R.d)(t, K, Y, {
            requireConfirm: true,
            origin: "file_picker"
          }), A.S.dispatchToLastSubscribed(U.CkL.TEXTAREA_FOCUS), e.currentTarget.value = ""
        },
        multiple: K.rateLimitPerUser <= 0,
        tabIndex: false,
        "aria-hidden": true
      })
    }), (0, r.jsx)("div", {
      className: H.attachWrapper,
      children: (0, r.jsx)(D.Z, {
        channel: K,
        isOmniMenuOpen: "attachMenu" === ef,
        openOmniMenu: () => eh("attachMenu"),
        enabled: e_,
        animationContainerClassName: H.buttonAnimation,
        glowClassName: H.buttonAnimationGlow,
        trinketsClassName: H.buttonAnimationTrinkets,
        children: eA
      })
    })]
  })
})