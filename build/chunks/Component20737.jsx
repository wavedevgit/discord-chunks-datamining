/** Chunk was on 97887 **/
/** chunk id: 20737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => z
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817363 = require("./817363.jsx"),
  Chunk475743 = require("./475743.js"),
  Chunk811024 = require("./811024.js"),
  Chunk147087 = require("./147087.js"),
  Chunk33659 = require("./33659.js"),
  Chunk734066 = require("./734066.js"),
  Chunk274372 = require("./274372.js"),
  Chunk572164 = require("./572164.js"),
  Chunk157207 = require("./157207.jsx"),
  Chunk794905 = require("./794905.js"),
  Chunk826673 = require("./826673.js"),
  Chunk450510 = require("./450510.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk969632 = require("./969632.js"),
  Chunk566908 = require("./566908.js"),
  Chunk406704 = require("./406704.js"),
  Chunk253932 = require("./253932.js"),
  Chunk761640 = require("./761640.js"),
  Chunk186111 = require("./186111.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk461213 = require("./461213.js"),
  Chunk203982 = require("./203982.js"),
  Chunk723702 = require("./723702.js"),
  Chunk518960 = require("./518960.js"),
  Chunk782093 = require("./782093.jsx"),
  Chunk545428 = require("./545428.jsx"),
  Chunk38198 = require("./38198.jsx"),
  Chunk447155 = require("./447155.js"),
  Chunk652215 = require("./652215.js"),
  Chunk696016 = require("./696016.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk275825 = require("./275825.js");

function K(e) {
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

function W(e, t) {
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
let z = Chunk64700.memo(function(e) {
  var t, i;
  let {
    className: z,
    channel: Y,
    draftType: q,
    editorTextContent: X,
    setValue: J,
    canOnlyUseTextCommands: Q,
    chatInputType: Z
  } = e, $ = (0, j.Us)(), ee = l.useRef(null), et = l.useRef(null), en = (0, a.bG)([P.A], () => P.A.getActivities()), er = (0, b.Et)(), el = (0, a.bG)([m.A], () => m.A.getLastClipsSession()), ei = (0, a.yK)([m.A], () => m.A.getNewClipIds()), es = (0, a.bG)([S.Ay], () => null == S.Ay.getCurrentSidebarChannelId(Y.id)), {
    showClipsHeaderEntrypoint: ea
  } = g.L_.useExperiment({
    location: "ChannelAttachButton"
  }, {
    autoTrackExposure: false
  }), {
    onShareClick: eo
  } = (0, y.A)(Y.id), ec = (0, a.bG)([O.HP], () => O.HP.hasHotspot(O._2.CLIPS_CHANNEL_ATTACH_REMINDER)), eu = (0, c.red)(e => (0, c.fDT)(e, B.nm)), ed = (0, a.bG)([I.A], () => I.A.hasLayers()), ep = (0, a.bG)([m.A], () => m.A.hasClips()), [eh, ef] = l.useState(null), eg = (0, g.sw)() && (er || ep), em = Y.isPrivate(), eb = (0, a.bG)([T.A], () => em || T.A.can(U.xBc.ATTACH_FILES, Y) && T.A.can(U.xBc.SEND_MESSAGES, Y)), eA = (0, d.A)(el);
  (null == eA ? true : eA.newClipIds.length) !== (null == el ? true : el.newClipIds.length) && (null != (t = null == el ? true : el.newClipIds.length) ? t : 0) > 0 && null == eh && ec && es && !eu && !ea && !ed && ef("recentClips");
  let ey = (0, a.bG)([N.A], () => N.A.hasCurrentUserSentMessageSinceAppStart());

  function e_() {
    (0, c.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("4918"), n.e("98184")]).then(n.bind(n, 543428));
      return t => (0, r.jsx)(e, W(K({}, t), {
        channelId: Y.id,
        onClipClick: e => eo({
          clips: [e]
        })
      }))
    }, {
      modalKey: B.nm
    }), ef(null)
  }
  l.useEffect(() => {
    let e = e => {
      let {
        channelId: t
      } = e;
      if (t === Y.id) {
        var n;
        null == (n = ee.current) || n.activateUploadDialogue()
      }
    };
    return w._.subscribe(U.jej.UPLOAD_FILE, e), () => {
      w._.unsubscribe(U.jej.UPLOAD_FILE, e)
    }
  });
  let eO = (0, E.n)(Y),
    ej = (0, E.Tb)(Y),
    ev = !C.D_.useSetting() && !(0, R.isAndroidWeb)() && null != window.ResizeObserver,
    ex = (0, f.H)({
      channel: Y,
      chatInputType: Z
    }),
    eE = (0, v.I7)(null != Y ? Y : true),
    eC = (0, p.t8)(),
    eS = (0, x.Sc)({
      location: "ChannelAttachButton"
    }),
    eI = (0, h.b)(),
    eN = null != (i = null == ei ? true : ei.length) ? i : 0,
    eT = (0, G.A)({
      canAttachFiles: eb,
      canStartThreads: eO || ej,
      useSlate: ev,
      hasClips: eg,
      canUseApplicationCommands: !Q,
      channel: Y,
      activities: en,
      newClipsCount: eN,
      canPostPolls: eE,
      canLaunchActivities: eC,
      appContext: $,
      canSendScheduledMessages: eS,
      canSummarizeThreads: eI,
      showAppLauncher: ex
    });
  if (0 === eT.length) return null;
  let eP = (0, r.jsx)(c.pa$, {
      size: "refresh_sm",
      color: "currentColor",
      colorClass: H.dW
    }),
    ew = (0, r.jsx)(c.YNO, {
      targetElementRef: et,
      shouldShow: null != eh,
      animation: c.YNO.Animation.NONE,
      align: "recentClips" === eh ? "center" : "left",
      position: "top",
      positionKey: null != eh ? eh : "null",
      onRequestOpen: () => {
        ey && (0, _.Dr)(o.M.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
          dismissAction: V.i.TAKE_ACTION
        }), ef("attachMenu")
      },
      onRequestClose: () => {
        (0, c.ueM)() || (ey && (0, _.Dr)(o.M.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
          dismissAction: V.i.TAKE_ACTION
        }), ef(null))
      },
      renderPopout: e => {
        switch (eh) {
          case "recentClips":
            return (0, r.jsx)(A.A, W(K({}, e), {
              onOpenClips: e_,
              lastClipsSession: el
            }));
          case "attachMenu":
            return (0, r.jsx)(k.A, W(K({}, e), {
              onClose: () => ef(null),
              options: eT,
              channel: Y,
              onFileUpload: () => {
                var e;
                return null == (e = ee.current) ? true : e.activateUploadDialogue()
              },
              draftType: q,
              editorTextContent: X,
              setValue: J,
              openClips: e_,
              chatInputType: Z
            }));
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, r.jsx)(L.A, W(K({
        ref: et,
        className: s()(H.g$, z),
        childClassName: H.wh,
        isActive: false,
        "aria-label": F.intl.string(F.t.d56gCa),
        onDoubleClick: eb ? () => {
          var e;
          return null == (e = ee.current) ? true : e.activateUploadDialogue()
        } : true,
        "aria-haspopup": "menu"
      }, e), {
        children: eP
      }))
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: H.EJ,
      children: (0, r.jsx)(u.A, {
        ref: ee,
        onChange: e => {
          var t, n;
          t = e.currentTarget.files, null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code ? (0, D.V)(Y, []) : (0, D.R)(t, Y, q, {
            requireConfirm: true,
            origin: "file_picker"
          }), w._.dispatchToLastSubscribed(U.jej.TEXTAREA_FOCUS), e.currentTarget.value = ""
        },
        multiple: Y.rateLimitPerUser <= 0,
        tabIndex: false,
        "aria-hidden": true
      })
    }), (0, r.jsx)("div", {
      className: H.Jd,
      children: (0, r.jsx)(M.A, {
        channel: Y,
        isOmniMenuOpen: "attachMenu" === eh,
        openOmniMenu: () => ef("attachMenu"),
        enabled: eC,
        animationContainerClassName: H.Vk,
        glowClassName: H.im,
        trinketsClassName: H.xK,
        children: ew
      })
    })]
  })
})