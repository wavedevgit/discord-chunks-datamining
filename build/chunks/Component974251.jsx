/** Chunk was on web.js **/
/** chunk id: 974251, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => W
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk110924 = require("./110924.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk595519 = require("./595519.js"),
  Chunk338390 = require("./338390.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk712114 = require("./712114.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk536442 = require("./536442.js"),
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

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
    })
  }
  return e
}

function V(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Y(e) {
  var t, o;
  let {
    className: Z,
    channel: V,
    draftType: Y,
    editorTextContent: W,
    setValue: K,
    canOnlyUseTextCommands: z
  } = e, q = (0, f.bp)(), X = i.useRef(null), Q = i.useRef(null), J = (0, s.e7)([C.Z], () => C.Z.getActivities()), $ = (0, s.e7)([m.Z], () => m.Z.getSettings().clipsEnabled), ee = (0, s.e7)([m.Z], () => m.Z.getLastClipsSession()), et = (0, s.Wu)([m.Z], () => m.Z.getNewClipIds()), en = (0, s.e7)([T.ZP], () => null == T.ZP.getCurrentSidebarChannelId(V.id)), {
    showClipsHeaderEntrypoint: er
  } = h.NV.useExperiment({
    location: "ChannelAttachButton"
  }, {
    autoTrackExposure: false
  }), ei = (0, s.e7)([b.qc], () => b.qc.hasHotspot(b.v6.CLIPS_CHANNEL_ATTACH_REMINDER)), eo = (0, c.s9z)(e => (0, c.DEQ)(e, j.Qr)), ea = (0, s.e7)([S.Z], () => S.Z.hasLayers()), es = (0, s.e7)([m.Z], () => m.Z.hasClips()), [el, ec] = i.useState(null), eu = (0, h.Go)() && ($ || es), ed = V.isPrivate(), ef = (0, s.e7)([N.Z], () => ed || N.Z.can(k.Plq.ATTACH_FILES, V) && N.Z.can(k.Plq.SEND_MESSAGES, V)), e_ = (0, d.Z)(ee);
  (null == e_ ? true : e_.newClipIds.length) !== (null == ee ? true : ee.newClipIds.length) && (null != (t = null == ee ? true : ee.newClipIds.length) ? t : 0) > 0 && null == el && ei && en && !eo && !er && !ea && ec("recentClips");
  let ep = (e, t, n) => {
      null != t && "ETOOLARGE" === t.code ? (0, w.G)(V, []) : (0, w.d)(e, V, Y, {
        requireConfirm: true,
        showLargeMessageDialog: n,
        origin: "file_picker"
      }), R.S.dispatchToLastSubscribed(k.CkL.TEXTAREA_FOCUS)
    },
    eh = e => {
      ep(e.currentTarget.files, e.currentTarget.err), e.currentTarget.value = ""
    },
    em = (0, s.e7)([A.Z], () => A.Z.hasCurrentUserSentMessageSinceAppStart());

  function eg() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("2668"), n.e("10286")]).then(n.bind(n, 542055));
      return t => (0, r.jsx)(e, H(F({}, t), {
        channelId: V.id
      }))
    }, {
      modalKey: j.Qr
    }), ec(null)
  }
  i.useEffect(() => {
    let e = () => {
      var e;
      return null == (e = X.current) ? true : e.activateUploadDialogue()
    };
    return R.S.subscribe(k.CkL.UPLOAD_FILE, e), () => {
      R.S.unsubscribe(k.CkL.UPLOAD_FILE, e)
    }
  });
  let eE = (0, v.NE)(V),
    eb = (0, v.Xu)(V),
    ey = eE || eb,
    eO = !I.dN.useSetting() && !(0, P.isAndroidWeb)() && null != window.ResizeObserver,
    ev = !z,
    eI = (0, y.UI)(null != V ? V : true),
    eT = (0, _.qB)(),
    eS = (0, O.Us)({
      location: "ChannelAttachButton"
    }),
    eA = null != (o = null == et ? true : et.length) ? o : 0,
    eN = (0, M.Z)({
      canAttachFiles: ef,
      canStartThreads: ey,
      useSlate: eO,
      hasClips: eu,
      canUseApplicationCommands: ev,
      channel: V,
      activities: J,
      newClipsCount: eA,
      canPostPolls: eI,
      canLaunchActivities: eT,
      appContext: q,
      canSendScheduledMessages: eS
    }),
    eC = (0, p.Z)("ChannelAttachButton");
  if (0 === eN.length) return null;
  let eR = "refresh_sm",
    eP = eC ? (0, r.jsx)(c.svS, {
      size: eR,
      color: "currentColor",
      colorClass: B.attachButtonPlus
    }) : (0, r.jsx)(c.oFk, {
      size: eR,
      color: "currentColor",
      colorClass: B.attachButtonPlus
    }),
    ew = (0, r.jsx)(c.yRy, {
      targetElementRef: Q,
      shouldShow: null != el,
      animation: c.yRy.Animation.NONE,
      align: "recentClips" === el ? "center" : "left",
      position: "top",
      positionKey: null != el ? el : "null",
      onRequestOpen: () => {
        em && (0, E.Q3)(l.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
          dismissAction: U.L.TAKE_ACTION
        }), ec("attachMenu")
      },
      onRequestClose: () => {
        (0, c.$sL)() || (em && (0, E.Q3)(l.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
          dismissAction: U.L.TAKE_ACTION
        }), ec(null))
      },
      renderPopout: e => {
        switch (el) {
          case "recentClips":
            return (0, r.jsx)(g.Z, H(F({}, e), {
              onOpenClips: eg,
              lastClipsSession: ee
            }));
          case "attachMenu":
            return (0, r.jsx)(x.Z, H(F({}, e), {
              onClose: () => ec(null),
              options: eN,
              channel: V,
              onFileUpload: () => {
                var e;
                return null == (e = X.current) ? true : e.activateUploadDialogue()
              },
              draftType: Y,
              editorTextContent: W,
              setValue: K,
              openClips: eg
            }));
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, r.jsx)(L.Z, H(F({
        ref: Q,
        className: a()(B.attachButton, Z),
        childClassName: B.attachButtonInner,
        isActive: false,
        "aria-label": G.intl.string(G.t.d56gCQ),
        onDoubleClick: ef ? () => {
          var e;
          return null == (e = X.current) ? true : e.activateUploadDialogue()
        } : true,
        "aria-haspopup": "menu"
      }, e), {
        children: eP
      }))
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: B.uploadInput,
      children: (0, r.jsx)(u.Z, {
        ref: X,
        onChange: eh,
        multiple: V.rateLimitPerUser <= 0,
        tabIndex: false,
        "aria-hidden": true
      })
    }), (0, r.jsx)("div", {
      className: B.attachWrapper,
      children: (0, r.jsx)(D.Z, {
        channel: V,
        isOmniMenuOpen: "attachMenu" === el,
        openOmniMenu: () => ec("attachMenu"),
        enabled: eT,
        animationContainerClassName: B.buttonAnimation,
        glowClassName: B.buttonAnimationGlow,
        trinketsClassName: B.buttonAnimationTrinkets,
        children: ew
      })
    })]
  })
}
let W = Chunk73800.memo(Y)