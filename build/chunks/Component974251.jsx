/** Chunk was on 47840 **/
/** chunk id: 974251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => V
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

function H(e) {
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
let V = Chunk647438.memo(function(e) {
  var t, l;
  let {
    className: V,
    channel: G,
    draftType: z,
    editorTextContent: W,
    setValue: q,
    canOnlyUseTextCommands: K
  } = e, Y = (0, y.bp)(), X = r.useRef(null), J = r.useRef(null), Q = (0, o.e7)([I.Z], () => I.Z.getActivities()), $ = (0, o.e7)([m.Z], () => m.Z.getSettings().clipsEnabled), ee = (0, o.e7)([m.Z], () => m.Z.getLastClipsSession()), et = (0, o.Wu)([m.Z], () => m.Z.getNewClipIds()), en = (0, o.e7)([j.ZP], () => null == j.ZP.getCurrentSidebarChannelId(G.id)), {
    showClipsHeaderEntrypoint: ei
  } = f.NV.useExperiment({
    location: "ChannelAttachButton"
  }, {
    autoTrackExposure: false
  }), er = (0, o.e7)([C.qc], () => C.qc.hasHotspot(C.v6.CLIPS_CHANNEL_ATTACH_REMINDER)), el = (0, c.s9z)(e => (0, c.DEQ)(e, D.Qr)), ea = (0, o.e7)([E.Z], () => E.Z.hasLayers()), eo = (0, o.e7)([m.Z], () => m.Z.hasClips()), [es, ec] = r.useState(null), eu = (0, f.Go)() && ($ || eo), ed = G.isPrivate(), ep = (0, o.e7)([P.Z], () => ed || P.Z.can(L.Plq.ATTACH_FILES, G) && P.Z.can(L.Plq.SEND_MESSAGES, G)), eh = (0, d.Z)(ee);
  (null == eh ? true : eh.newClipIds.length) !== (null == ee ? true : ee.newClipIds.length) && (null != (t = null == ee ? true : ee.newClipIds.length) ? t : 0) > 0 && null == es && er && en && !el && !ei && !ea && ec("recentClips");
  let ef = (0, o.e7)([S.Z], () => S.Z.hasCurrentUserSentMessageSinceAppStart());

  function em() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("57478").then(n.bind(n, 542055));
      return t => (0, i.jsx)(e, F(H({}, t), {
        channelId: G.id
      }))
    }, {
      modalKey: D.Qr
    }), ec(null)
  }
  r.useEffect(() => {
    let e = () => {
      var e;
      return null == (e = X.current) ? true : e.activateUploadDialogue()
    };
    return Z.S.subscribe(L.CkL.UPLOAD_FILE, e), () => {
      Z.S.unsubscribe(L.CkL.UPLOAD_FILE, e)
    }
  });
  let eg = (0, x.NE)(G),
    eb = (0, x.Xu)(G),
    eC = !O.dN.useSetting() && !(0, T.isAndroidWeb)() && null != window.ResizeObserver,
    ey = (0, _.UI)(null != G ? G : true),
    e_ = (0, p.qB)(),
    ev = (0, v.Us)({
      location: "ChannelAttachButton"
    }),
    ex = h.C.useExperiment({
      location: "ChannelAttachButton"
    }).enableAIFeatures,
    eO = null != (l = null == et ? true : et.length) ? l : 0,
    ej = (0, R.Z)({
      canAttachFiles: ep,
      canStartThreads: eg || eb,
      useSlate: eC,
      hasClips: eu,
      canUseApplicationCommands: !K,
      channel: G,
      activities: Q,
      newClipsCount: eO,
      canPostPolls: ey,
      canLaunchActivities: e_,
      appContext: Y,
      canSendScheduledMessages: ev,
      canSummarizeThreads: ex
    });
  if (0 === ej.length) return null;
  let eE = (0, i.jsx)(c.svS, {
      size: "refresh_sm",
      color: "currentColor",
      colorClass: B.attachButtonPlus
    }),
    eS = (0, i.jsx)(c.yRy, {
      targetElementRef: J,
      shouldShow: null != es,
      animation: c.yRy.Animation.NONE,
      align: "recentClips" === es ? "center" : "left",
      position: "top",
      positionKey: null != es ? es : "null",
      onRequestOpen: () => {
        ef && (0, b.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
          dismissAction: k.L.TAKE_ACTION
        }), ec("attachMenu")
      },
      onRequestClose: () => {
        (0, c.$sL)() || (ef && (0, b.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
          dismissAction: k.L.TAKE_ACTION
        }), ec(null))
      },
      renderPopout: e => {
        switch (es) {
          case "recentClips":
            return (0, i.jsx)(g.Z, F(H({}, e), {
              onOpenClips: em,
              lastClipsSession: ee
            }));
          case "attachMenu":
            return (0, i.jsx)(M.Z, F(H({}, e), {
              onClose: () => ec(null),
              options: ej,
              channel: G,
              onFileUpload: () => {
                var e;
                return null == (e = X.current) ? true : e.activateUploadDialogue()
              },
              draftType: z,
              editorTextContent: W,
              setValue: q,
              openClips: em
            }));
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, i.jsx)(w.Z, F(H({
        ref: J,
        className: a()(B.attachButton, V),
        childClassName: B.attachButtonInner,
        isActive: false,
        "aria-label": U.intl.string(U.t.d56gCa),
        onDoubleClick: ep ? () => {
          var e;
          return null == (e = X.current) ? true : e.activateUploadDialogue()
        } : true,
        "aria-haspopup": "menu"
      }, e), {
        children: eE
      }))
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: B.uploadInput,
      children: (0, i.jsx)(u.Z, {
        ref: X,
        onChange: e => {
          var t, n, i;
          t = e.currentTarget.files, null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code ? (0, N.G)(G, []) : (0, N.d)(t, G, z, {
            requireConfirm: true,
            showLargeMessageDialog: i,
            origin: "file_picker"
          }), Z.S.dispatchToLastSubscribed(L.CkL.TEXTAREA_FOCUS), e.currentTarget.value = ""
        },
        multiple: G.rateLimitPerUser <= 0,
        tabIndex: false,
        "aria-hidden": true
      })
    }), (0, i.jsx)("div", {
      className: B.attachWrapper,
      children: (0, i.jsx)(A.Z, {
        channel: G,
        isOmniMenuOpen: "attachMenu" === es,
        openOmniMenu: () => ec("attachMenu"),
        enabled: e_,
        animationContainerClassName: B.buttonAnimation,
        glowClassName: B.buttonAnimationGlow,
        trinketsClassName: B.buttonAnimationTrinkets,
        children: eS
      })
    })]
  })
})