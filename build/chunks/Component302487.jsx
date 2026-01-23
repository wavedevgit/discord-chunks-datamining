/** Chunk was on 46875 **/
/** chunk id: 302487, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => S,
  h: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
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
let A = {
    scale: .95,
    opacity: 0
  },
  C = {
    scale: 1,
    opacity: 1
  },
  T = {
    scale: 1,
    opacity: 1
  },
  O = {
    tension: 2400,
    friction: 52
  };

function S(e) {
  let {
    channelId: t,
    onClick: n,
    onClose: i,
    onMouseEnter: s
  } = e, u = r.useRef(null), m = (0, o.bG)([x.A], () => x.A.getChannel(t), [t]);
  return a()(null != m, "Forum Channel is null"), (0, l.jsxs)(c.DUT, {
    className: y.EJ,
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
      className: y.Fg,
      ref: u,
      onChange: e => {
        null == i || i(), (0, j.R)(e.currentTarget.files, m, f.C.FirstThreadMessage, {
          requireConfirm: true,
          origin: "file_picker"
        }), b._.dispatch(_.jej.TEXTAREA_FOCUS), e.currentTarget.value = null
      },
      multiple: m.rateLimitPerUser <= 0,
      tabIndex: false,
      "aria-hidden": true
    }), (0, l.jsx)(c.XGR, {
      size: "custom",
      color: "currentColor",
      width: 28,
      height: 28,
      className: y.T3
    })]
  })
}

function N(e) {
  let {
    channelId: t,
    closePopout: n
  } = e, [i, a] = r.useState(false), {
    reducedMotion: d
  } = r.useContext(c.CZY), x = (0, c.zhh)({
    from: d.enabled ? C : A,
    to: T,
    config: O
  }, "animate-always"), f = (0, o.bG)([u.A], () => u.A.keyboardModeEnabled), b = (0, o.bG)([p.A], () => p.A.getUploads(t, m.oU.CREATE_FORUM_POST.drafts.type));
  return (0, l.jsx)(s.animated.div, {
    className: y.jC,
    onMouseLeave: () => {
      i || n()
    },
    style: x,
    children: (0, l.jsxs)(c.IpV, {
      orientation: "horizontal",
      className: y.SW,
      paddingFix: false,
      fade: true,
      children: [(0, l.jsx)(S, {
        channelId: t,
        onClick: () => {
          a(true)
        },
        onClose: () => {
          a(false), n()
        }
      }), (0, l.jsx)("div", {
        className: y.p8,
        children: b.map(e => (0, l.jsx)(g.A, {
          channelId: t,
          draftType: m.oU.CREATE_FORUM_POST.drafts.type,
          upload: e,
          keyboardModeEnabled: f,
          hideFileName: true,
          size: h.L.SMALL
        }, e.id))
      })]
    })
  })
}

function w(e) {
  let {
    channelId: t
  } = e, [n, i] = r.useState(false), a = (0, o.bG)([p.A], () => p.A.getUploads(t, m.oU.CREATE_FORUM_POST.drafts.type)), s = a.length, c = s > 0;
  r.useEffect(() => {
    n && !c && i(false)
  }, [n, c]);
  let d = () => {
    c && i(true)
  };
  return (0, l.jsxs)("div", {
    className: y.kL,
    children: [c ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(g.J, {
        upload: a[0],
        size: h.L.SMALL,
        onMouseEnter: d
      }), !n && (0, l.jsx)("div", {
        className: y.qS,
        children: s
      })]
    }) : (0, l.jsx)(S, {
      onMouseEnter: d,
      channelId: t
    }), n && (0, l.jsx)(N, {
      channelId: t,
      closePopout: () => {
        i(false)
      }
    })]
  })
}