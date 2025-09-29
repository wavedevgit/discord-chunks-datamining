/** Chunk was on 37384 **/
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
  Chunk935730 = require("./935730.js");

function B(e) {
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
let V = Chunk647438.memo(function(e) {
  var t, l;
  let {
    className: V,
    channel: F,
    draftType: G,
    editorTextContent: z,
    setValue: W,
    canOnlyUseTextCommands: q
  } = e, Y = (0, y.bp)(), K = i.useRef(null), X = i.useRef(null), J = (0, o.e7)([P.Z], () => P.Z.getActivities()), Q = (0, o.e7)([f.Z], () => f.Z.getSettings().clipsEnabled), $ = (0, o.e7)([f.Z], () => f.Z.getLastClipsSession()), ee = (0, o.Wu)([f.Z], () => f.Z.getNewClipIds()), et = (0, o.e7)([O.ZP], () => null == O.ZP.getCurrentSidebarChannelId(F.id)), {
    showClipsHeaderEntrypoint: en
  } = h.NV.useExperiment({
    location: "ChannelAttachButton"
  }, {
    autoTrackExposure: false
  }), er = (0, o.e7)([b.qc], () => b.qc.hasHotspot(b.v6.CLIPS_CHANNEL_ATTACH_REMINDER)), ei = (0, c.s9z)(e => (0, c.DEQ)(e, k.Qr)), el = (0, o.e7)([j.Z], () => j.Z.hasLayers()), ea = (0, o.e7)([f.Z], () => f.Z.hasClips()), [eo, es] = i.useState(null), ec = (0, h.Go)() && (Q || ea), eu = F.isPrivate(), ed = (0, o.e7)([S.Z], () => eu || S.Z.can(R.Plq.ATTACH_FILES, F) && S.Z.can(R.Plq.SEND_MESSAGES, F)), ep = (0, d.Z)($);
  (null == ep ? true : ep.newClipIds.length) !== (null == $ ? true : $.newClipIds.length) && (null != (t = null == $ ? true : $.newClipIds.length) ? t : 0) > 0 && null == eo && er && et && !ei && !en && !el && es("recentClips");
  let eh = (0, o.e7)([E.Z], () => E.Z.hasCurrentUserSentMessageSinceAppStart());

  function ef() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("57478").then(n.bind(n, 542055));
      return t => (0, r.jsx)(e, H(B({}, t), {
        channelId: F.id
      }))
    }, {
      modalKey: k.Qr
    }), es(null)
  }
  i.useEffect(() => {
    let e = () => {
      var e;
      return null == (e = K.current) ? true : e.activateUploadDialogue()
    };
    return I.S.subscribe(R.CkL.UPLOAD_FILE, e), () => {
      I.S.unsubscribe(R.CkL.UPLOAD_FILE, e)
    }
  });
  let em = (0, v.NE)(F),
    eg = (0, v.Xu)(F),
    eb = !x.dN.useSetting() && !(0, Z.isAndroidWeb)() && null != window.ResizeObserver,
    ey = (0, C.UI)(null != F ? F : true),
    eC = (0, p.qB)(),
    e_ = (0, _.Us)({
      location: "ChannelAttachButton"
    }),
    ev = null != (l = null == ee ? true : ee.length) ? l : 0,
    ex = (0, M.Z)({
      canAttachFiles: ed,
      canStartThreads: em || eg,
      useSlate: eb,
      hasClips: ec,
      canUseApplicationCommands: !q,
      channel: F,
      activities: J,
      newClipsCount: ev,
      canPostPolls: ey,
      canLaunchActivities: eC,
      appContext: Y,
      canSendScheduledMessages: e_
    });
  if (0 === ex.length) return null;
  let eO = (0, r.jsx)(c.svS, {
      size: "refresh_sm",
      color: "currentColor",
      colorClass: U.attachButtonPlus
    }),
    ej = (0, r.jsx)(c.yRy, {
      targetElementRef: X,
      shouldShow: null != eo,
      animation: c.yRy.Animation.NONE,
      align: "recentClips" === eo ? "center" : "left",
      position: "top",
      positionKey: null != eo ? eo : "null",
      onRequestOpen: () => {
        eh && (0, g.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
          dismissAction: L.L.TAKE_ACTION
        }), es("attachMenu")
      },
      onRequestClose: () => {
        (0, c.$sL)() || (eh && (0, g.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
          dismissAction: L.L.TAKE_ACTION
        }), es(null))
      },
      renderPopout: e => {
        switch (eo) {
          case "recentClips":
            return (0, r.jsx)(m.Z, H(B({}, e), {
              onOpenClips: ef,
              lastClipsSession: $
            }));
          case "attachMenu":
            return (0, r.jsx)(w.Z, H(B({}, e), {
              onClose: () => es(null),
              options: ex,
              channel: F,
              onFileUpload: () => {
                var e;
                return null == (e = K.current) ? true : e.activateUploadDialogue()
              },
              draftType: G,
              editorTextContent: z,
              setValue: W,
              openClips: ef
            }));
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, r.jsx)(A.Z, H(B({
        ref: X,
        className: a()(U.attachButton, V),
        childClassName: U.attachButtonInner,
        isActive: false,
        "aria-label": D.intl.string(D.t.d56gCQ),
        onDoubleClick: ed ? () => {
          var e;
          return null == (e = K.current) ? true : e.activateUploadDialogue()
        } : true,
        "aria-haspopup": "menu"
      }, e), {
        children: eO
      }))
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: U.uploadInput,
      children: (0, r.jsx)(u.Z, {
        ref: K,
        onChange: e => {
          var t, n, r;
          t = e.currentTarget.files, null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code ? (0, T.G)(F, []) : (0, T.d)(t, F, G, {
            requireConfirm: true,
            showLargeMessageDialog: r,
            origin: "file_picker"
          }), I.S.dispatchToLastSubscribed(R.CkL.TEXTAREA_FOCUS), e.currentTarget.value = ""
        },
        multiple: F.rateLimitPerUser <= 0,
        tabIndex: false,
        "aria-hidden": true
      })
    }), (0, r.jsx)("div", {
      className: U.attachWrapper,
      children: (0, r.jsx)(N.Z, {
        channel: F,
        isOmniMenuOpen: "attachMenu" === eo,
        openOmniMenu: () => es("attachMenu"),
        enabled: eC,
        animationContainerClassName: U.buttonAnimation,
        glowClassName: U.buttonAnimationGlow,
        trinketsClassName: U.buttonAnimationTrinkets,
        children: ej
      })
    })]
  })
})