/** Chunk was on 5863 **/
/** chunk id: 74888, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk11352 = require("./11352.js"),
  Chunk610617 = require("./610617.jsx"),
  Chunk413684 = require("./413684.jsx"),
  Chunk298812 = require("./298812.jsx"),
  Chunk200115 = require("./200115.jsx"),
  Chunk406205 = require("./406205.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk721802 = require("./721802.js");

function v(e) {
  return (0, i.jsx)("div", {
    className: p.sectionHeader,
    children: (0, i.jsx)(a.X6q, {
      variant: "text-xs/bold",
      className: p.sectionHeaderTitle,
      color: "text-muted",
      children: e.title
    })
  })
}

function j(e) {
  return (0, i.jsxs)("div", {
    children: [null != e.title && (0, i.jsx)(v, {
      title: e.title
    }), (0, i.jsx)("div", {
      className: r()(p.sectionContent, {
        [p.sectionContentPadding]: true !== e.noPadding
      }),
      children: e.children
    })]
  })
}

function S(e) {
  let {
    onClose: t
  } = e;
  return (0, i.jsxs)(a.xBx, {
    className: p.header,
    children: [(0, i.jsxs)("div", {
      className: p.headerLeft,
      children: [(0, i.jsx)(a.Dkj, {
        size: "md",
        color: "currentColor",
        className: p.headerBell
      }), (0, i.jsx)(a.X6q, {
        variant: "heading-lg/semibold",
        children: x.intl.string(x.t.h850Sk)
      })]
    }), (0, i.jsx)(a.olH, {
      onClick: t
    })]
  })
}

function N(e) {
  let t = s.useRef(null),
    n = d.Y.useExperiment({
      location: "notification_settings_modal_redesign"
    }, {
      autoTrackExposure: true
    }).enabled,
    l = s.useRef(null);
  return (0, o.Ng)(() => {
    let n = setTimeout(() => {
      e.scrollToChannels && null != t.current && null != l.current && t.current.scrollIntoViewNode({
        node: l.current,
        shouldScrollToStart: true,
        padding: 40
      })
    }, 1e3);
    return () => clearTimeout(n)
  }), (0, i.jsxs)(a.Y0X, {
    size: a.CgR.MEDIUM,
    transitionState: e.transitionState,
    "aria-label": x.intl.string(x.t.h850Sk),
    parentComponent: "NotificationSettingsModalRedesign",
    children: [(0, i.jsx)(S, {
      onClose: e.onClose
    }), (0, i.jsxs)(a.hzk, {
      className: p.content,
      scrollerRef: t,
      children: [(0, i.jsx)(j, {
        children: (0, i.jsx)(g.Z, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(j, {
        title: x.intl.string(x.t["R9Ej9/"]),
        noPadding: true,
        children: (0, i.jsx)(m.Z, {
          guildId: e.guildId
        })
      }), n && (0, i.jsx)(j, {
        children: (0, i.jsx)(c.Z, {
          onClose: e.onClose,
          guildId: e.guildId,
          isRedesign: true
        })
      }), (0, i.jsx)(j, {
        title: x.intl.string(x.t["31DySk"]),
        children: (0, i.jsx)(u.Z, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(v, {
        title: x.intl.string(x.t.JrySi4)
      }), (0, i.jsx)(h.Z, {
        guildId: e.guildId,
        requestScrollToBottom: () => {
          null != t && null != t.current && t.current.scrollToBottom({
            animate: true
          })
        },
        ref: l
      })]
    })]
  })
}