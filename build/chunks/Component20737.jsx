/** Chunk was on 61344 **/
/** chunk id: 20737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => G
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let G = Chunk64700.memo(function(e) {
  var t, i;
  let {
    className: G,
    channel: F,
    draftType: H,
    editorTextContent: B,
    setValue: V,
    canOnlyUseTextCommands: K
  } = e, W = (0, b.Us)(), z = r.useRef(null), q = r.useRef(null), Y = (0, s.bG)([S.A], () => S.A.getActivities()), J = (0, f.Et)(), Z = (0, s.bG)([p.A], () => p.A.getLastClipsSession()), X = (0, s.yK)([p.A], () => p.A.getNewClipIds()), Q = (0, s.bG)([O.Ay], () => null == O.Ay.getCurrentSidebarChannelId(F.id)), {
    showClipsHeaderEntrypoint: $
  } = h.L_.useExperiment({
    location: "ChannelAttachButton"
  }, {
    autoTrackExposure: false
  }), {
    onShareClick: ee
  } = (0, g.A)(F.id), et = (0, s.bG)([A.HP], () => A.HP.hasHotspot(A._2.CLIPS_CHANNEL_ATTACH_REMINDER)), en = (0, o.red)(e => (0, o.fDT)(e, D.nm)), el = (0, s.bG)([C.A], () => C.A.hasLayers()), er = (0, s.bG)([p.A], () => p.A.hasClips()), [ei, ea] = r.useState(null), es = (0, h.sw)() && (J || er), eo = F.isPrivate(), ec = (0, s.bG)([x.A], () => eo || x.A.can(R.xBc.ATTACH_FILES, F) && x.A.can(R.xBc.SEND_MESSAGES, F)), eu = (0, u.A)(Z);

  function ed() {
    (0, o.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("4918"), n.e("98184")]).then(n.bind(n, 543428));
      return t => (0, l.jsx)(e, U(k({}, t), {
        channelId: F.id,
        onClipClick: e => ee({
          clips: [e]
        })
      }))
    }, {
      modalKey: D.nm
    }), ea(null)
  }(null == eu ? true : eu.newClipIds.length) !== (null == Z ? true : Z.newClipIds.length) && (null != (t = null == Z ? true : Z.newClipIds.length) ? t : 0) > 0 && null == ei && et && Q && !en && !$ && !el && ea("recentClips"), r.useEffect(() => {
    let e = e => {
      let {
        channelId: t
      } = e;
      if (t === F.id) {
        var n;
        null == (n = z.current) || n.activateUploadDialogue()
      }
    };
    return j._.subscribe(R.jej.UPLOAD_FILE, e), () => {
      j._.unsubscribe(R.jej.UPLOAD_FILE, e)
    }
  });
  let eh = (0, v.n)(F),
    ep = (0, v.Tb)(F),
    ef = !E.D_.useSetting() && !(0, I.isAndroidWeb)() && null != window.ResizeObserver,
    em = (0, _.I7)(null != F ? F : true),
    eg = (0, y.Sc)({
      location: "ChannelAttachButton"
    }),
    eA = (0, d.b)(),
    eb = null != (i = null == X ? true : X.length) ? i : 0,
    e_ = (0, w.A)({
      canAttachFiles: ec,
      canStartThreads: eh || ep,
      useSlate: ef,
      hasClips: es,
      canUseApplicationCommands: !K,
      channel: F,
      activities: Y,
      newClipsCount: eb,
      canPostPolls: em,
      appContext: W,
      canSendScheduledMessages: eg,
      canSummarizeThreads: eA
    });
  if (0 === e_.length) return null;
  let ey = (0, l.jsx)(o.pa$, {
      size: "refresh_sm",
      color: "currentColor",
      colorClass: L.dW
    }),
    ev = (0, l.jsx)(o.YNO, {
      targetElementRef: q,
      shouldShow: null != ei,
      animation: o.YNO.Animation.NONE,
      align: "recentClips" === ei ? "center" : "left",
      position: "top",
      positionKey: null != ei ? ei : "null",
      onRequestOpen: () => {
        ea("attachMenu")
      },
      onRequestClose: () => {
        (0, o.ueM)() || ea(null)
      },
      renderPopout: e => {
        switch (ei) {
          case "recentClips":
            return (0, l.jsx)(m.A, U(k({}, e), {
              onOpenClips: ed,
              lastClipsSession: Z
            }));
          case "attachMenu":
            return (0, l.jsx)(P.A, U(k({}, e), {
              onClose: () => ea(null),
              options: e_,
              channel: F,
              onFileUpload: () => {
                var e;
                return null == (e = z.current) ? true : e.activateUploadDialogue()
              },
              draftType: H,
              editorTextContent: B,
              setValue: V,
              openClips: ed
            }));
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, l.jsx)(N.A, U(k({
        ref: q,
        className: a()(L.g$, G),
        childClassName: L.wh,
        isActive: false,
        "aria-label": M.intl.string(M.t.d56gCa),
        onDoubleClick: ec ? () => {
          var e;
          return null == (e = z.current) ? true : e.activateUploadDialogue()
        } : true,
        "aria-haspopup": "menu"
      }, e), {
        children: ey
      }))
    });
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: L.EJ,
      children: (0, l.jsx)(c.A, {
        ref: z,
        onChange: e => {
          var t, n;
          t = e.currentTarget.files, null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code ? (0, T.V)(F, []) : (0, T.R)(t, F, H, {
            requireConfirm: true,
            origin: "file_picker"
          }), j._.dispatchToLastSubscribed(R.jej.TEXTAREA_FOCUS), e.currentTarget.value = ""
        },
        multiple: F.rateLimitPerUser <= 0,
        tabIndex: false,
        "aria-hidden": true
      })
    }), (0, l.jsx)("div", {
      className: L.Jd,
      children: ev
    })]
  })
})