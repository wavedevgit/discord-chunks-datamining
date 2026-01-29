/** Chunk was on 1113 **/
/** chunk id: 20737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => Y
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

function F(e) {
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
let Y = Chunk64700.memo(function(e) {
  var t, i;
  let {
    className: Y,
    channel: W,
    draftType: z,
    editorTextContent: q,
    setValue: X,
    canOnlyUseTextCommands: J
  } = e, Q = (0, _.Us)(), Z = l.useRef(null), $ = l.useRef(null), ee = (0, a.bG)([T.A], () => T.A.getActivities()), et = (0, m.Et)(), en = (0, a.bG)([f.A], () => f.A.getLastClipsSession()), er = (0, a.yK)([f.A], () => f.A.getNewClipIds()), el = (0, a.bG)([C.Ay], () => null == C.Ay.getCurrentSidebarChannelId(W.id)), {
    showClipsHeaderEntrypoint: ei
  } = g.L_.useExperiment({
    location: "ChannelAttachButton"
  }, {
    autoTrackExposure: false
  }), {
    onShareClick: es
  } = (0, A.A)(W.id), ea = (0, a.bG)([O.HP], () => O.HP.hasHotspot(O._2.CLIPS_CHANNEL_ATTACH_REMINDER)), eo = (0, c.red)(e => (0, c.fDT)(e, U.nm)), ec = (0, a.bG)([S.A], () => S.A.hasLayers()), eu = (0, a.bG)([f.A], () => f.A.hasClips()), [ed, eh] = l.useState(null), ep = (0, g.sw)() && (et || eu), eg = W.isPrivate(), ef = (0, a.bG)([N.A], () => eg || N.A.can(G.xBc.ATTACH_FILES, W) && N.A.can(G.xBc.SEND_MESSAGES, W)), em = (0, d.A)(en);
  (null == em ? true : em.newClipIds.length) !== (null == en ? true : en.newClipIds.length) && (null != (t = null == en ? true : en.newClipIds.length) ? t : 0) > 0 && null == ed && ea && el && !eo && !ei && !ec && eh("recentClips");
  let eb = (0, a.bG)([I.A], () => I.A.hasCurrentUserSentMessageSinceAppStart());

  function eA() {
    (0, c.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("4918"), n.e("98184")]).then(n.bind(n, 543428));
      return t => (0, r.jsx)(e, K(F({}, t), {
        channelId: W.id,
        onClipClick: e => es({
          clips: [e]
        })
      }))
    }, {
      modalKey: U.nm
    }), eh(null)
  }
  l.useEffect(() => {
    let e = e => {
      let {
        channelId: t
      } = e;
      if (t === W.id) {
        var n;
        null == (n = Z.current) || n.activateUploadDialogue()
      }
    };
    return P._.subscribe(G.jej.UPLOAD_FILE, e), () => {
      P._.unsubscribe(G.jej.UPLOAD_FILE, e)
    }
  });
  let ey = (0, v.n)(W),
    eO = (0, v.Tb)(W),
    e_ = !E.D_.useSetting() && !(0, w.isAndroidWeb)() && null != window.ResizeObserver,
    ex = (0, x.I7)(null != W ? W : true),
    ej = (0, h.t8)(),
    ev = (0, j.Sc)({
      location: "ChannelAttachButton"
    }),
    eE = (0, p.b)(),
    eC = null != (i = null == er ? true : er.length) ? i : 0,
    eS = (0, k.A)({
      canAttachFiles: ef,
      canStartThreads: ey || eO,
      useSlate: e_,
      hasClips: ep,
      canUseApplicationCommands: !J,
      channel: W,
      activities: ee,
      newClipsCount: eC,
      canPostPolls: ex,
      canLaunchActivities: ej,
      appContext: Q,
      canSendScheduledMessages: ev,
      canSummarizeThreads: eE
    });
  if (0 === eS.length) return null;
  let eI = (0, r.jsx)(c.pa$, {
      size: "refresh_sm",
      color: "currentColor",
      colorClass: H.dW
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
          dismissAction: V.i.TAKE_ACTION
        }), eh("attachMenu")
      },
      onRequestClose: () => {
        (0, c.ueM)() || (eb && (0, y.Dr)(o.M.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
          dismissAction: V.i.TAKE_ACTION
        }), eh(null))
      },
      renderPopout: e => {
        switch (ed) {
          case "recentClips":
            return (0, r.jsx)(b.A, K(F({}, e), {
              onOpenClips: eA,
              lastClipsSession: en
            }));
          case "attachMenu":
            return (0, r.jsx)(M.A, K(F({}, e), {
              onClose: () => eh(null),
              options: eS,
              channel: W,
              onFileUpload: () => {
                var e;
                return null == (e = Z.current) ? true : e.activateUploadDialogue()
              },
              draftType: z,
              editorTextContent: q,
              setValue: X,
              openClips: eA
            }));
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, r.jsx)(L.A, K(F({
        ref: $,
        className: s()(H.g$, Y),
        childClassName: H.wh,
        isActive: false,
        "aria-label": B.intl.string(B.t.d56gCa),
        onDoubleClick: ef ? () => {
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
      className: H.EJ,
      children: (0, r.jsx)(u.A, {
        ref: Z,
        onChange: e => {
          var t, n;
          t = e.currentTarget.files, null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code ? (0, R.V)(W, []) : (0, R.R)(t, W, z, {
            requireConfirm: true,
            origin: "file_picker"
          }), P._.dispatchToLastSubscribed(G.jej.TEXTAREA_FOCUS), e.currentTarget.value = ""
        },
        multiple: W.rateLimitPerUser <= 0,
        tabIndex: false,
        "aria-hidden": true
      })
    }), (0, r.jsx)("div", {
      className: H.Jd,
      children: (0, r.jsx)(D.A, {
        channel: W,
        isOmniMenuOpen: "attachMenu" === ed,
        openOmniMenu: () => eh("attachMenu"),
        enabled: ej,
        animationContainerClassName: H.Vk,
        glowClassName: H.im,
        trinketsClassName: H.xK,
        children: eN
      })
    })]
  })
})