/** Chunk was on 46875 **/
/** chunk id: 302487, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => T,
  h: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk108531 = require("./108531.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817363 = require("./817363.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk355622 = require("./355622.js"),
  Chunk349688 = require("./349688.jsx"),
  Chunk914905 = require("./914905.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk522602 = require("./522602.js"),
  Chunk203982 = require("./203982.js"),
  Chunk518960 = require("./518960.js"),
  Chunk853742 = require("./853742.js"),
  Chunk652215 = require("./652215.js"),
  Chunk149707 = require("./149707.js");
let C = {
    scale: .95,
    opacity: 0
  },
  O = {
    scale: 1,
    opacity: 1
  },
  N = {
    scale: 1,
    opacity: 1
  },
  S = {
    tension: 2400,
    friction: 52
  };

function T(e) {
  let {
    channelId: t,
    onClick: n,
    onClose: a,
    onMouseEnter: s
  } = e, u = r.useRef(null), m = (0, c.bG)([g.A], () => g.A.getChannel(t), [t]);
  return i()(null != m, "Forum Channel is null"), (0, l.jsxs)(o.DUT, {
    className: A.EJ,
    onMouseEnter: s,
    onClick: () => {
      (0, v.ri)({
        isMobile: false
      }), null == n || n()
    },
    onKeyPress: e => {
      if ("Enter" === e.key) {
        var t;
        null == (t = u.current) || t.activateUploadDialogue(), (0, v.ri)({
          isMobile: false
        })
      }
    },
    children: [(0, l.jsx)(d.A, {
      className: A.Fg,
      ref: u,
      onChange: e => {
        null == a || a(), (0, j.R)(e.currentTarget.files, m, x.C.FirstThreadMessage, {
          requireConfirm: true,
          origin: "file_picker"
        }), p._.dispatch(y.jej.TEXTAREA_FOCUS), e.currentTarget.value = null
      },
      multiple: m.rateLimitPerUser <= 0,
      tabIndex: false,
      "aria-hidden": true
    }), (0, l.jsx)(o.XGR, {
      size: "custom",
      color: "currentColor",
      width: 28,
      height: 28,
      className: A.T3
    })]
  })
}

function _(e) {
  let {
    channelId: t,
    closePopout: n
  } = e, [a, i] = r.useState(false), {
    reducedMotion: d
  } = r.useContext(o.CZY), g = (0, o.zhh)({
    from: d.enabled ? O : C,
    to: N,
    config: S
  }, "animate-always"), x = (0, c.bG)([u.A], () => u.A.keyboardModeEnabled), p = (0, c.bG)([b.A], () => b.A.getUploads(t, m.oU.CREATE_FORUM_POST.drafts.type));
  return (0, l.jsx)(s.animated.div, {
    className: A.jC,
    onMouseLeave: () => {
      a || n()
    },
    style: g,
    children: (0, l.jsxs)(o.IpV, {
      orientation: "horizontal",
      className: A.SW,
      paddingFix: false,
      fade: true,
      children: [(0, l.jsx)(T, {
        channelId: t,
        onClick: () => {
          i(true)
        },
        onClose: () => {
          i(false), n()
        }
      }), (0, l.jsx)("div", {
        className: A.p8,
        children: p.map(e => (0, l.jsx)(f.A, {
          channelId: t,
          draftType: m.oU.CREATE_FORUM_POST.drafts.type,
          upload: e,
          keyboardModeEnabled: x,
          hideFileName: true,
          size: h.L.SMALL
        }, e.id))
      })]
    })
  })
}

function E(e) {
  let {
    channelId: t
  } = e, [n, a] = r.useState(false), i = (0, c.bG)([b.A], () => b.A.getUploads(t, m.oU.CREATE_FORUM_POST.drafts.type)), s = i.length, o = s > 0;
  r.useEffect(() => {
    n && !o && a(false)
  }, [n, o]);
  let d = () => {
    o && a(true)
  };
  return (0, l.jsxs)("div", {
    className: A.kL,
    children: [o ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(f.J, {
        upload: i[0],
        size: h.L.SMALL,
        onMouseEnter: d
      }), !n && (0, l.jsx)("div", {
        className: A.qS,
        children: s
      })]
    }) : (0, l.jsx)(T, {
      onMouseEnter: d,
      channelId: t
    }), n && (0, l.jsx)(_, {
      channelId: t,
      closePopout: () => {
        a(false)
      }
    })]
  })
}