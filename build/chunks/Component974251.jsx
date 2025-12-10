/** Chunk was on 7891 **/
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
  Chunk90274 = require("./90274.js");

function G(e) {
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

function z(e, t) {
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
let W = Chunk473749.memo(function(e) {
  var t, l;
  let {
    className: W,
    channel: q,
    draftType: K,
    editorTextContent: Y,
    setValue: X,
    canOnlyUseTextCommands: J,
    chatInputType: Q
  } = e, $ = (0, O.bp)(), ee = r.useRef(null), et = r.useRef(null), en = (0, o.e7)([N.Z], () => N.Z.getActivities()), ei = (0, b.z8)(), er = (0, o.e7)([g.Z], () => g.Z.getLastClipsSession()), el = (0, o.Wu)([g.Z], () => g.Z.getNewClipIds()), ea = (0, o.e7)([P.ZP], () => null == P.ZP.getCurrentSidebarChannelId(q.id)), {
    showClipsHeaderEntrypoint: eo
  } = m.NV.useExperiment({
    location: "ChannelAttachButton"
  }, {
    autoTrackExposure: false
  }), {
    onShareClick: es
  } = (0, y.Z)(q.id), ec = (0, o.e7)([_.qc], () => _.qc.hasHotspot(_.v6.CLIPS_CHANNEL_ATTACH_REMINDER)), eu = (0, c.s9z)(e => (0, c.DEQ)(e, V.Qr)), ed = (0, o.e7)([I.Z], () => I.Z.hasLayers()), ep = (0, o.e7)([g.Z], () => g.Z.hasClips()), [eh, ef] = r.useState(null), em = (0, m.w9)() && (ei || ep), eg = q.isPrivate(), eb = (0, o.e7)([T.Z], () => eg || T.Z.can(U.Plq.ATTACH_FILES, q) && T.Z.can(U.Plq.SEND_MESSAGES, q)), eC = (0, d.Z)(er);
  (null == eC ? true : eC.newClipIds.length) !== (null == er ? true : er.newClipIds.length) && (null != (t = null == er ? true : er.newClipIds.length) ? t : 0) > 0 && null == eh && ec && ea && !eu && !eo && !ed && ef("recentClips");
  let ey = (0, o.e7)([Z.Z], () => Z.Z.hasCurrentUserSentMessageSinceAppStart());

  function ev() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("61342"), n.e("69311")]).then(n.bind(n, 542055));
      return t => (0, i.jsx)(e, z(G({}, t), {
        channelId: q.id,
        onClipClick: e => es({
          clips: [e]
        })
      }))
    }, {
      modalKey: V.Qr
    }), ef(null)
  }
  r.useEffect(() => {
    let e = e => {
      let {
        channelId: t
      } = e;
      if (t === q.id) {
        var n;
        null == (n = ee.current) || n.activateUploadDialogue()
      }
    };
    return A.S.subscribe(U.CkL.UPLOAD_FILE, e), () => {
      A.S.unsubscribe(U.CkL.UPLOAD_FILE, e)
    }
  });
  let e_ = (0, j.NE)(q),
    eO = (0, j.Xu)(q),
    ex = !S.dN.useSetting() && !(0, w.isAndroidWeb)() && null != window.ResizeObserver,
    eE = (0, f.R)({
      channel: q,
      chatInputType: Q
    }),
    ej = (0, x.UI)(null != q ? q : true),
    eS = (0, p.qB)(),
    eP = (0, E.Us)({
      location: "ChannelAttachButton"
    }),
    eI = (0, h.o)(),
    eZ = null != (l = null == el ? true : el.length) ? l : 0,
    eT = (0, k.Z)({
      canAttachFiles: eb,
      canStartThreads: e_ || eO,
      useSlate: ex,
      hasClips: em,
      canUseApplicationCommands: !J,
      channel: q,
      activities: en,
      newClipsCount: eZ,
      canPostPolls: ej,
      canLaunchActivities: eS,
      appContext: $,
      canSendScheduledMessages: eP,
      canSummarizeThreads: eI,
      showAppLauncher: eE
    });
  if (0 === eT.length) return null;
  let eN = (0, i.jsx)(c.svS, {
      size: "refresh_sm",
      color: "currentColor",
      colorClass: H.attachButtonPlus
    }),
    eA = (0, i.jsx)(c.yRy, {
      targetElementRef: et,
      shouldShow: null != eh,
      animation: c.yRy.Animation.NONE,
      align: "recentClips" === eh ? "center" : "left",
      position: "top",
      positionKey: null != eh ? eh : "null",
      onRequestOpen: () => {
        ey && (0, v.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
          dismissAction: F.L.TAKE_ACTION
        }), ef("attachMenu")
      },
      onRequestClose: () => {
        (0, c.$sL)() || (ey && (0, v.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
          dismissAction: F.L.TAKE_ACTION
        }), ef(null))
      },
      renderPopout: e => {
        switch (eh) {
          case "recentClips":
            return (0, i.jsx)(C.Z, z(G({}, e), {
              onOpenClips: ev,
              lastClipsSession: er
            }));
          case "attachMenu":
            return (0, i.jsx)(D.Z, z(G({}, e), {
              onClose: () => ef(null),
              options: eT,
              channel: q,
              onFileUpload: () => {
                var e;
                return null == (e = ee.current) ? true : e.activateUploadDialogue()
              },
              draftType: K,
              editorTextContent: Y,
              setValue: X,
              openClips: ev,
              chatInputType: Q
            }));
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, i.jsx)(L.Z, z(G({
        ref: et,
        className: a()(H.attachButton, W),
        childClassName: H.attachButtonInner,
        isActive: false,
        "aria-label": B.intl.string(B.t.d56gCa),
        onDoubleClick: eb ? () => {
          var e;
          return null == (e = ee.current) ? true : e.activateUploadDialogue()
        } : true,
        "aria-haspopup": "menu"
      }, e), {
        children: eN
      }))
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: H.uploadInput,
      children: (0, i.jsx)(u.Z, {
        ref: ee,
        onChange: e => {
          var t, n, i;
          t = e.currentTarget.files, null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code ? (0, M.G)(q, []) : (0, M.d)(t, q, K, {
            requireConfirm: true,
            showLargeMessageDialog: i,
            origin: "file_picker"
          }), A.S.dispatchToLastSubscribed(U.CkL.TEXTAREA_FOCUS), e.currentTarget.value = ""
        },
        multiple: q.rateLimitPerUser <= 0,
        tabIndex: false,
        "aria-hidden": true
      })
    }), (0, i.jsx)("div", {
      className: H.attachWrapper,
      children: (0, i.jsx)(R.Z, {
        channel: q,
        isOmniMenuOpen: "attachMenu" === eh,
        openOmniMenu: () => ef("attachMenu"),
        enabled: eS,
        animationContainerClassName: H.buttonAnimation,
        glowClassName: H.buttonAnimationGlow,
        trinketsClassName: H.buttonAnimationTrinkets,
        children: eA
      })
    })]
  })
})