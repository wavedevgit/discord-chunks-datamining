/** Chunk was on 49131 **/
/** chunk id: 76451, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => I,
  _: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk620389 = require("./620389.js"),
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
  Chunk736897 = require("./736897.js");
let T = {
    scale: .95,
    opacity: 0
  },
  S = {
    scale: 1,
    opacity: 1
  },
  N = {
    scale: 1,
    opacity: 1
  },
  w = {
    tension: 2400,
    friction: 52
  };

function O(e) {
  let {
    channelId: t,
    onClick: n,
    onClose: i,
    onMouseEnter: s
  } = e, u = a.useRef(null), m = (0, o.e7)([g.Z], () => g.Z.getChannel(t), [t]);
  return l()(null != m, "Forum Channel is null"), (0, r.jsxs)(c.P3F, {
    className: y.uploadInput,
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
      className: y.fileInput,
      ref: u,
      onChange: e => {
        null == i || i(), (0, j.d)(e.currentTarget.files, m, x.d.FirstThreadMessage, {
          requireConfirm: true,
          origin: "file_picker"
        }), p.S.dispatch(C.CkL.TEXTAREA_FOCUS), e.currentTarget.value = null
      },
      multiple: m.rateLimitPerUser <= 0,
      tabIndex: false,
      "aria-hidden": true
    }), (0, r.jsx)(c.FmF, {
      size: "custom",
      color: "currentColor",
      width: 28,
      height: 28,
      className: y.uploadIcon
    })]
  })
}

function P(e) {
  let {
    channelId: t,
    closePopout: n
  } = e, [i, l] = a.useState(false), {
    reducedMotion: d
  } = a.useContext(c.Sfi), g = (0, c.q_F)({
    from: d.enabled ? S : T,
    to: N,
    config: w
  }, "animate-always"), x = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled), p = (0, o.e7)([b.Z], () => b.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type));
  return (0, r.jsx)(s.animated.div, {
    className: y.popoutContainer,
    onMouseLeave: () => {
      i || n()
    },
    style: g,
    children: (0, r.jsxs)(c.zJl, {
      orientation: "horizontal",
      className: y.popout,
      paddingFix: false,
      fade: true,
      children: [(0, r.jsx)(O, {
        channelId: t,
        onClick: () => {
          l(true)
        },
        onClose: () => {
          l(false), n()
        }
      }), (0, r.jsx)("div", {
        className: y.uploads,
        children: p.map(e => (0, r.jsx)(f.Z, {
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

function I(e) {
  let {
    channelId: t
  } = e, [n, i] = a.useState(false), l = (0, o.e7)([b.Z], () => b.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type)), s = l.length, c = s > 0;
  a.useEffect(() => {
    n && !c && i(false)
  }, [n, c]);
  let d = () => {
    c && i(true)
  };
  return (0, r.jsxs)("div", {
    className: y.container,
    children: [c ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.r, {
        upload: l[0],
        size: h.q.SMALL,
        onMouseEnter: d
      }), !n && (0, r.jsx)("div", {
        className: y.badge,
        children: s
      })]
    }) : (0, r.jsx)(O, {
      onMouseEnter: d,
      channelId: t
    }), n && (0, r.jsx)(P, {
      channelId: t,
      closePopout: () => {
        i(false)
      }
    })]
  })
}