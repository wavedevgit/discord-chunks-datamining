/** Chunk was on 9456 **/
/** chunk id: 76451, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P,
  _: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk203463 = require("./203463.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk541716 = require("./541716.js"),
  Chunk859235 = require("./859235.jsx"),
  Chunk898463 = require("./898463.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk117530 = require("./117530.js"),
  Chunk585483 = require("./585483.js"),
  Chunk127654 = require("./127654.js"),
  Chunk228392 = require("./228392.js"),
  Chunk981631 = require("./981631.js"),
  Chunk104010 = require("./104010.js");
let y = {
    scale: .95,
    opacity: 0
  },
  T = {
    scale: 1,
    opacity: 1
  },
  w = {
    scale: 1,
    opacity: 1
  },
  S = {
    tension: 2400,
    friction: 52
  };

function N(e) {
  let {
    channelId: t,
    onClick: n,
    onClose: a,
    onMouseEnter: s
  } = e, u = i.useRef(null), m = (0, o.e7)([f.Z], () => f.Z.getChannel(t), [t]);
  return l()(null != m, "Forum Channel is null"), (0, r.jsxs)(c.P3F, {
    className: C.uploadInput,
    onMouseEnter: s,
    onClick: () => {
      (0, v.N3)({
        isMobile: false
      }), null == n || n()
    },
    onKeyPress: e => {
      if ("Enter" === e.key) {
        var t;
        null == (t = u.current) || t.activateUploadDialogue(), (0, v.N3)({
          isMobile: false
        })
      }
    },
    children: [(0, r.jsx)(d.Z, {
      className: C.fileInput,
      ref: u,
      onChange: e => {
        null == a || a(), (0, j.d)(e.currentTarget.files, m, x.d.FirstThreadMessage, {
          requireConfirm: true,
          origin: "file_picker"
        }), b.S.dispatch(_.CkL.TEXTAREA_FOCUS), e.currentTarget.value = null
      },
      multiple: m.rateLimitPerUser <= 0,
      tabIndex: false,
      "aria-hidden": true
    }), (0, r.jsx)(c.FmF, {
      size: "custom",
      color: "currentColor",
      width: 28,
      height: 28,
      className: C.uploadIcon
    })]
  })
}

function O(e) {
  let {
    channelId: t,
    closePopout: n
  } = e, [a, l] = i.useState(false), {
    reducedMotion: d
  } = i.useContext(c.Sfi), f = (0, c.q_F)({
    from: d.enabled ? T : y,
    to: w,
    config: S
  }, "animate-always"), x = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled), b = (0, o.e7)([p.Z], () => p.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type));
  return (0, r.jsx)(s.animated.div, {
    className: C.popoutContainer,
    onMouseLeave: () => {
      a || n()
    },
    style: f,
    children: (0, r.jsxs)(c.zJl, {
      orientation: "horizontal",
      className: C.popout,
      paddingFix: false,
      fade: true,
      children: [(0, r.jsx)(N, {
        channelId: t,
        onClick: () => {
          l(true)
        },
        onClose: () => {
          l(false), n()
        }
      }), (0, r.jsx)("div", {
        className: C.uploads,
        children: b.map(e => (0, r.jsx)(g.Z, {
          channelId: t,
          draftType: m.Ie.CREATE_FORUM_POST.drafts.type,
          upload: e,
          keyboardModeEnabled: x,
          hideFileName: true,
          size: h.q.SMALL
        }, e.id))
      })]
    })
  })
}

function P(e) {
  let {
    channelId: t
  } = e, [n, a] = i.useState(false), l = (0, o.e7)([p.Z], () => p.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type)), s = l.length, c = s > 0;
  i.useEffect(() => {
    n && !c && a(false)
  }, [n, c]);
  let d = () => {
    c && a(true)
  };
  return (0, r.jsxs)("div", {
    className: C.container,
    children: [c ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.r, {
        upload: l[0],
        size: h.q.SMALL,
        onMouseEnter: d
      }), !n && (0, r.jsx)("div", {
        className: C.badge,
        children: s
      })]
    }) : (0, r.jsx)(N, {
      onMouseEnter: d,
      channelId: t
    }), n && (0, r.jsx)(O, {
      channelId: t,
      closePopout: () => {
        a(false)
      }
    })]
  })
}