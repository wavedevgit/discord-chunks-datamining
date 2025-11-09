/** Chunk was on 50642 **/
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
  Chunk39952 = require("./39952.js"),
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
  Chunk935730 = require("./935730.js");

function V(e) {
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

function F(e, t) {
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
let G = Chunk647438.memo(function(e) {
  var t, l;
  let {
    className: G,
    channel: z,
    draftType: W,
    editorTextContent: q,
    setValue: K,
    canOnlyUseTextCommands: Y
  } = e, X = (0, v.bp)(), J = r.useRef(null), Q = r.useRef(null), $ = (0, o.e7)([Z.Z], () => Z.Z.getActivities()), ee = (0, o.e7)([m.Z], () => m.Z.getSettings().clipsEnabled), et = (0, o.e7)([m.Z], () => m.Z.getLastClipsSession()), en = (0, o.Wu)([m.Z], () => m.Z.getNewClipIds()), ei = (0, o.e7)([E.ZP], () => null == E.ZP.getCurrentSidebarChannelId(z.id)), {
    showClipsHeaderEntrypoint: er
  } = f.NV.useExperiment({
    location: "ChannelAttachButton"
  }, {
    autoTrackExposure: false
  }), {
    onShareClick: el
  } = (0, b.Z)(z.id), ea = (0, o.e7)([C.qc], () => C.qc.hasHotspot(C.v6.CLIPS_CHANNEL_ATTACH_REMINDER)), eo = (0, c.s9z)(e => (0, c.DEQ)(e, k.Qr)), es = (0, o.e7)([S.Z], () => S.Z.hasLayers()), ec = (0, o.e7)([m.Z], () => m.Z.hasClips()), [eu, ed] = r.useState(null), ep = (0, f.Go)() && (ee || ec), eh = z.isPrivate(), ef = (0, o.e7)([I.Z], () => eh || I.Z.can(D.Plq.ATTACH_FILES, z) && I.Z.can(D.Plq.SEND_MESSAGES, z)), em = (0, d.Z)(et);
  (null == em ? true : em.newClipIds.length) !== (null == et ? true : et.newClipIds.length) && (null != (t = null == et ? true : et.newClipIds.length) ? t : 0) > 0 && null == eu && ea && ei && !eo && !er && !es && ed("recentClips");
  let eg = (0, o.e7)([P.Z], () => P.Z.hasCurrentUserSentMessageSinceAppStart());

  function eb() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("61342"), n.e("9260")]).then(n.bind(n, 542055));
      return t => (0, i.jsx)(e, F(V({}, t), {
        channelId: z.id,
        onClipClick: e => el({
          clips: [e]
        })
      }))
    }, {
      modalKey: k.Qr
    }), ed(null)
  }
  r.useEffect(() => {
    let e = () => {
      var e;
      return null == (e = J.current) ? true : e.activateUploadDialogue()
    };
    return T.S.subscribe(D.CkL.UPLOAD_FILE, e), () => {
      T.S.unsubscribe(D.CkL.UPLOAD_FILE, e)
    }
  });
  let ey = (0, O.NE)(z),
    eC = (0, O.Xu)(z),
    ev = !j.dN.useSetting() && !(0, N.isAndroidWeb)() && null != window.ResizeObserver,
    e_ = (0, _.UI)(null != z ? z : true),
    ex = (0, p.qB)(),
    eO = (0, x.Us)({
      location: "ChannelAttachButton"
    }),
    ej = (0, h.o)(),
    eE = null != (l = null == en ? true : en.length) ? l : 0,
    eS = (0, L.Z)({
      canAttachFiles: ef,
      canStartThreads: ey || eC,
      useSlate: ev,
      hasClips: ep,
      canUseApplicationCommands: !Y,
      channel: z,
      activities: $,
      newClipsCount: eE,
      canPostPolls: e_,
      canLaunchActivities: ex,
      appContext: X,
      canSendScheduledMessages: eO,
      canSummarizeThreads: ej
    });
  if (0 === eS.length) return null;
  let eP = (0, i.jsx)(c.svS, {
      size: "refresh_sm",
      color: "currentColor",
      colorClass: H.attachButtonPlus
    }),
    eI = (0, i.jsx)(c.yRy, {
      targetElementRef: Q,
      shouldShow: null != eu,
      animation: c.yRy.Animation.NONE,
      align: "recentClips" === eu ? "center" : "left",
      position: "top",
      positionKey: null != eu ? eu : "null",
      onRequestOpen: () => {
        eg && (0, y.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
          dismissAction: U.L.TAKE_ACTION
        }), ed("attachMenu")
      },
      onRequestClose: () => {
        (0, c.$sL)() || (eg && (0, y.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
          dismissAction: U.L.TAKE_ACTION
        }), ed(null))
      },
      renderPopout: e => {
        switch (eu) {
          case "recentClips":
            return (0, i.jsx)(g.Z, F(V({}, e), {
              onOpenClips: eb,
              lastClipsSession: et
            }));
          case "attachMenu":
            return (0, i.jsx)(R.Z, F(V({}, e), {
              onClose: () => ed(null),
              options: eS,
              channel: z,
              onFileUpload: () => {
                var e;
                return null == (e = J.current) ? true : e.activateUploadDialogue()
              },
              draftType: W,
              editorTextContent: q,
              setValue: K,
              openClips: eb
            }));
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, i.jsx)(M.Z, F(V({
        ref: Q,
        className: a()(H.attachButton, G),
        childClassName: H.attachButtonInner,
        isActive: false,
        "aria-label": B.intl.string(B.t.d56gCa),
        onDoubleClick: ef ? () => {
          var e;
          return null == (e = J.current) ? true : e.activateUploadDialogue()
        } : true,
        "aria-haspopup": "menu"
      }, e), {
        children: eP
      }))
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: H.uploadInput,
      children: (0, i.jsx)(u.Z, {
        ref: J,
        onChange: e => {
          var t, n, i;
          t = e.currentTarget.files, null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code ? (0, A.G)(z, []) : (0, A.d)(t, z, W, {
            requireConfirm: true,
            showLargeMessageDialog: i,
            origin: "file_picker"
          }), T.S.dispatchToLastSubscribed(D.CkL.TEXTAREA_FOCUS), e.currentTarget.value = ""
        },
        multiple: z.rateLimitPerUser <= 0,
        tabIndex: false,
        "aria-hidden": true
      })
    }), (0, i.jsx)("div", {
      className: H.attachWrapper,
      children: (0, i.jsx)(w.Z, {
        channel: z,
        isOmniMenuOpen: "attachMenu" === eu,
        openOmniMenu: () => ed("attachMenu"),
        enabled: ex,
        animationContainerClassName: H.buttonAnimation,
        glowClassName: H.buttonAnimationGlow,
        trinketsClassName: H.buttonAnimationTrinkets,
        children: eI
      })
    })]
  })
})