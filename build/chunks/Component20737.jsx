/** Chunk was on 1113 **/
/** chunk id: 20737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817363 = require("./817363.jsx"),
  Chunk475743 = require("./475743.js"),
  Chunk147087 = require("./147087.js"),
  Chunk734066 = require("./734066.js"),
  Chunk274372 = require("./274372.js"),
  Chunk572164 = require("./572164.js"),
  Chunk157207 = require("./157207.jsx"),
  Chunk794905 = require("./794905.js"),
  Chunk450510 = require("./450510.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk969632 = require("./969632.js"),
  Chunk566908 = require("./566908.js"),
  Chunk406704 = require("./406704.js"),
  Chunk253932 = require("./253932.js"),
  Chunk761640 = require("./761640.js"),
  Chunk186111 = require("./186111.js"),
  Chunk576705 = require("./576705.js"),
  Chunk461213 = require("./461213.js"),
  Chunk203982 = require("./203982.js"),
  Chunk723702 = require("./723702.js"),
  Chunk518960 = require("./518960.js"),
  Chunk545428 = require("./545428.jsx"),
  Chunk38198 = require("./38198.jsx"),
  Chunk447155 = require("./447155.js"),
  Chunk652215 = require("./652215.js"),
  Chunk696016 = require("./696016.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk275825 = require("./275825.js");

function G(e) {
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

function k(e, t) {
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
let U = Chunk64700.memo(function(e) {
  var t, i;
  let {
    className: U,
    channel: V,
    draftType: B,
    editorTextContent: H,
    setValue: F,
    canOnlyUseTextCommands: K
  } = e, Y = (0, A.Us)(), W = l.useRef(null), z = l.useRef(null), q = (0, a.bG)([C.A], () => C.A.getActivities()), X = (0, g.Et)(), J = (0, a.bG)([p.A], () => p.A.getLastClipsSession()), Q = (0, a.yK)([p.A], () => p.A.getNewClipIds()), Z = (0, a.bG)([x.Ay], () => null == x.Ay.getCurrentSidebarChannelId(V.id)), {
    showClipsHeaderEntrypoint: $
  } = h.L_.useExperiment({
    location: "ChannelAttachButton"
  }, {
    autoTrackExposure: false
  }), {
    onShareClick: ee
  } = (0, m.A)(V.id), et = (0, a.bG)([b.HP], () => b.HP.hasHotspot(b._2.CLIPS_CHANNEL_ATTACH_REMINDER)), en = (0, o.red)(e => (0, o.fDT)(e, D.nm)), er = (0, a.bG)([v.A], () => v.A.hasLayers()), el = (0, a.bG)([p.A], () => p.A.hasClips()), [ei, es] = l.useState(null), ea = (0, h.sw)() && (X || el), eo = V.isPrivate(), ec = (0, a.bG)([E.A], () => eo || E.A.can(R.xBc.ATTACH_FILES, V) && E.A.can(R.xBc.SEND_MESSAGES, V)), eu = (0, u.A)(J);

  function ed() {
    (0, o.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("4918"), n.e("98184")]).then(n.bind(n, 543428));
      return t => (0, r.jsx)(e, k(G({}, t), {
        channelId: V.id,
        onClipClick: e => ee({
          clips: [e]
        })
      }))
    }, {
      modalKey: D.nm
    }), es(null)
  }(null == eu ? true : eu.newClipIds.length) !== (null == J ? true : J.newClipIds.length) && (null != (t = null == J ? true : J.newClipIds.length) ? t : 0) > 0 && null == ei && et && Z && !en && !$ && !er && es("recentClips"), l.useEffect(() => {
    let e = e => {
      let {
        channelId: t
      } = e;
      if (t === V.id) {
        var n;
        null == (n = W.current) || n.activateUploadDialogue()
      }
    };
    return S._.subscribe(R.jej.UPLOAD_FILE, e), () => {
      S._.unsubscribe(R.jej.UPLOAD_FILE, e)
    }
  });
  let eh = (0, _.n)(V),
    ep = (0, _.Tb)(V),
    eg = !j.D_.useSetting() && !(0, I.isAndroidWeb)() && null != window.ResizeObserver,
    ef = (0, y.I7)(null != V ? V : true),
    em = (0, O.Sc)({
      location: "ChannelAttachButton"
    }),
    eb = (0, d.b)(),
    eA = null != (i = null == Q ? true : Q.length) ? i : 0,
    ey = (0, w.A)({
      canAttachFiles: ec,
      canStartThreads: eh || ep,
      useSlate: eg,
      hasClips: ea,
      canUseApplicationCommands: !K,
      channel: V,
      activities: q,
      newClipsCount: eA,
      canPostPolls: ef,
      appContext: Y,
      canSendScheduledMessages: em,
      canSummarizeThreads: eb
    });
  if (0 === ey.length) return null;
  let eO = (0, r.jsx)(o.pa$, {
      size: "refresh_sm",
      color: "currentColor",
      colorClass: M.dW
    }),
    e_ = (0, r.jsx)(o.YNO, {
      targetElementRef: z,
      shouldShow: null != ei,
      animation: o.YNO.Animation.NONE,
      align: "recentClips" === ei ? "center" : "left",
      position: "top",
      positionKey: null != ei ? ei : "null",
      onRequestOpen: () => {
        es("attachMenu")
      },
      onRequestClose: () => {
        (0, o.ueM)() || es(null)
      },
      renderPopout: e => {
        switch (ei) {
          case "recentClips":
            return (0, r.jsx)(f.A, k(G({}, e), {
              onOpenClips: ed,
              lastClipsSession: J
            }));
          case "attachMenu":
            return (0, r.jsx)(P.A, k(G({}, e), {
              onClose: () => es(null),
              options: ey,
              channel: V,
              onFileUpload: () => {
                var e;
                return null == (e = W.current) ? true : e.activateUploadDialogue()
              },
              draftType: B,
              editorTextContent: H,
              setValue: F,
              openClips: ed
            }));
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, r.jsx)(T.A, k(G({
        ref: z,
        className: s()(M.g$, U),
        childClassName: M.wh,
        isActive: false,
        "aria-label": L.intl.string(L.t.d56gCa),
        onDoubleClick: ec ? () => {
          var e;
          return null == (e = W.current) ? true : e.activateUploadDialogue()
        } : true,
        "aria-haspopup": "menu"
      }, e), {
        children: eO
      }))
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: M.EJ,
      children: (0, r.jsx)(c.A, {
        ref: W,
        onChange: e => {
          var t, n;
          t = e.currentTarget.files, null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code ? (0, N.V)(V, []) : (0, N.R)(t, V, B, {
            requireConfirm: true,
            origin: "file_picker"
          }), S._.dispatchToLastSubscribed(R.jej.TEXTAREA_FOCUS), e.currentTarget.value = ""
        },
        multiple: V.rateLimitPerUser <= 0,
        tabIndex: false,
        "aria-hidden": true
      })
    }), (0, r.jsx)("div", {
      className: M.Jd,
      children: e_
    })]
  })
})