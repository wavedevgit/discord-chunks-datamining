/** Chunk was on 78528 **/
/** chunk id: 20737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => W
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

function H(e) {
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

function K(e, t) {
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
let W = Chunk64700.memo(function(e) {
  var t, i;
  let {
    className: W,
    channel: z,
    draftType: Y,
    editorTextContent: q,
    setValue: X,
    canOnlyUseTextCommands: J
  } = e, Q = (0, O.Us)(), Z = l.useRef(null), $ = l.useRef(null), ee = (0, a.bG)([T.A], () => T.A.getActivities()), et = (0, m.Et)(), en = (0, a.bG)([g.A], () => g.A.getLastClipsSession()), er = (0, a.yK)([g.A], () => g.A.getNewClipIds()), el = (0, a.bG)([C.Ay], () => null == C.Ay.getCurrentSidebarChannelId(z.id)), {
    showClipsHeaderEntrypoint: ei
  } = f.L_.useExperiment({
    location: "ChannelAttachButton"
  }, {
    autoTrackExposure: false
  }), {
    onShareClick: es
  } = (0, A.A)(z.id), ea = (0, a.bG)([_.HP], () => _.HP.hasHotspot(_._2.CLIPS_CHANNEL_ATTACH_REMINDER)), eo = (0, c.red)(e => (0, c.fDT)(e, G.nm)), ec = (0, a.bG)([S.A], () => S.A.hasLayers()), eu = (0, a.bG)([g.A], () => g.A.hasClips()), [ed, ep] = l.useState(null), eh = (0, f.sw)() && (et || eu), ef = z.isPrivate(), eg = (0, a.bG)([N.A], () => ef || N.A.can(U.xBc.ATTACH_FILES, z) && N.A.can(U.xBc.SEND_MESSAGES, z)), em = (0, d.A)(en);
  (null == em ? true : em.newClipIds.length) !== (null == en ? true : en.newClipIds.length) && (null != (t = null == en ? true : en.newClipIds.length) ? t : 0) > 0 && null == ed && ea && el && !eo && !ei && !ec && ep("recentClips");
  let eb = (0, a.bG)([I.A], () => I.A.hasCurrentUserSentMessageSinceAppStart());

  function eA() {
    (0, c.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("4918"), n.e("98184")]).then(n.bind(n, 543428));
      return t => (0, r.jsx)(e, K(H({}, t), {
        channelId: z.id,
        onClipClick: e => es({
          clips: [e]
        })
      }))
    }, {
      modalKey: G.nm
    }), ep(null)
  }
  l.useEffect(() => {
    let e = e => {
      let {
        channelId: t
      } = e;
      if (t === z.id) {
        var n;
        null == (n = Z.current) || n.activateUploadDialogue()
      }
    };
    return P._.subscribe(U.jej.UPLOAD_FILE, e), () => {
      P._.unsubscribe(U.jej.UPLOAD_FILE, e)
    }
  });
  let ey = (0, x.n)(z),
    e_ = (0, x.Tb)(z),
    eO = !E.D_.useSetting() && !(0, w.isAndroidWeb)() && null != window.ResizeObserver,
    ej = (0, j.I7)(null != z ? z : true),
    ev = (0, p.t8)(),
    ex = (0, v.Sc)({
      location: "ChannelAttachButton"
    }),
    eE = (0, h.b)(),
    eC = null != (i = null == er ? true : er.length) ? i : 0,
    eS = (0, k.A)({
      canAttachFiles: eg,
      canStartThreads: ey || e_,
      useSlate: eO,
      hasClips: eh,
      canUseApplicationCommands: !J,
      channel: z,
      activities: ee,
      newClipsCount: eC,
      canPostPolls: ej,
      canLaunchActivities: ev,
      appContext: Q,
      canSendScheduledMessages: ex,
      canSummarizeThreads: eE
    });
  if (0 === eS.length) return null;
  let eI = (0, r.jsx)(c.pa$, {
      size: "refresh_sm",
      color: "currentColor",
      colorClass: F.dW
    }),
    eN = (0, r.jsx)(c.YNO, {
      targetElementRef: $,
      shouldShow: null != ed,
      animation: c.YNO.Animation.NONE,
      align: "recentClips" === ed ? "center" : "left",
      position: "top",
      positionKey: null != ed ? ed : "null",
      onRequestOpen: () => {
        eb && (0, y.Dr)(o.M.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
          dismissAction: B.i.TAKE_ACTION
        }), ep("attachMenu")
      },
      onRequestClose: () => {
        (0, c.ueM)() || (eb && (0, y.Dr)(o.M.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
          dismissAction: B.i.TAKE_ACTION
        }), ep(null))
      },
      renderPopout: e => {
        switch (ed) {
          case "recentClips":
            return (0, r.jsx)(b.A, K(H({}, e), {
              onOpenClips: eA,
              lastClipsSession: en
            }));
          case "attachMenu":
            return (0, r.jsx)(L.A, K(H({}, e), {
              onClose: () => ep(null),
              options: eS,
              channel: z,
              onFileUpload: () => {
                var e;
                return null == (e = Z.current) ? true : e.activateUploadDialogue()
              },
              draftType: Y,
              editorTextContent: q,
              setValue: X,
              openClips: eA
            }));
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, r.jsx)(M.A, K(H({
        ref: $,
        className: s()(F.g$, W),
        childClassName: F.wh,
        isActive: false,
        "aria-label": V.intl.string(V.t.d56gCa),
        onDoubleClick: eg ? () => {
          var e;
          return null == (e = Z.current) ? true : e.activateUploadDialogue()
        } : true,
        "aria-haspopup": "menu"
      }, e), {
        children: eI
      }))
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: F.EJ,
      children: (0, r.jsx)(u.A, {
        ref: Z,
        onChange: e => {
          var t, n;
          t = e.currentTarget.files, null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code ? (0, R.V)(z, []) : (0, R.R)(t, z, Y, {
            requireConfirm: true,
            origin: "file_picker"
          }), P._.dispatchToLastSubscribed(U.jej.TEXTAREA_FOCUS), e.currentTarget.value = ""
        },
        multiple: z.rateLimitPerUser <= 0,
        tabIndex: false,
        "aria-hidden": true
      })
    }), (0, r.jsx)("div", {
      className: F.Jd,
      children: (0, r.jsx)(D.A, {
        channel: z,
        isOmniMenuOpen: "attachMenu" === ed,
        openOmniMenu: () => ep("attachMenu"),
        enabled: ev,
        animationContainerClassName: F.Vk,
        glowClassName: F.im,
        trinketsClassName: F.xK,
        children: eN
      })
    })]
  })
})