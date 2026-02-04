/** Chunk was on 88474 **/
/** chunk id: 727353, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => _,
  Z: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk302959 = require("./302959.jsx"),
  Chunk592182 = require("./592182.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk402216 = require("./402216.jsx"),
  Chunk12351 = require("./12351.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk877315 = require("./877315.js"),
  Chunk607407 = require("./607407.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk573073 = require("./573073.js");

function A(e) {
  let {
    stream: t,
    activeStream: n,
    streamActivity: i,
    streamApplication: d,
    user: A,
    currentUserId: _,
    canWatch: v,
    unavailableReason: O,
    onWatchStream: S,
    onAction: j,
    showHeader: I = false,
    hideTip: x = false,
    className: E
  } = e, P = (0, a.bG)([u.A], () => {
    if (null != d) {
      if (null != d.id) return u.A.getApplication(d.id);
      else if (null != d.name) return u.A.getApplicationByName(d.name)
    }
    return null
  }, [d]), C = null != i && null != i.name ? b.intl.formatToPlainString(b.t["4CQq9Q"], {
    name: i.name
  }) : b.intl.string(b.t["Jpkr/q"]), T = (0, r.jsxs)(r.Fragment, {
    children: [I && (0, r.jsxs)("div", {
      className: h.WG,
      children: [null != P && (0, r.jsx)(p.A, {
        game: P,
        className: h.lK
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/bold",
        color: "currentColor",
        children: C
      })]
    }), null != S ? (0, r.jsxs)(o.DUT, {
      onClick: S,
      className: h.i1,
      children: [(0, r.jsx)(g.A, {
        className: h.oz,
        stream: t
      }), v ? (0, r.jsx)("div", {
        className: h.xD,
        children: (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: h.ON,
          children: (0, m.A)(t, n, _, O)
        })
      }) : null]
    }) : (0, r.jsxs)("div", {
      className: h.i1,
      children: [(0, r.jsx)(g.A, {
        className: h.oz,
        stream: t
      }), v ? (0, r.jsx)("div", {
        className: h.xD,
        children: (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: h.ON,
          children: (0, m.A)(t, n, _, O)
        })
      }) : null]
    }), (0, r.jsxs)("div", {
      className: h.rf,
      children: [null != i ? (0, r.jsx)(s.A, {
        hideHeader: true,
        type: s.M.STREAM_PREVIEW,
        activity: i,
        user: A,
        guildId: t.guildId,
        channelId: t.channelId,
        analyticsParams: {
          location: {
            page: y.liQ.GO_LIVE_MODAL,
            section: y.JJy.STREAM_VIEWER_POPOUT
          }
        },
        onAction: j
      }) : (0, r.jsx)(c.A, {
        type: s.M.STREAM_PREVIEW,
        applicationStream: t,
        user: A,
        guildId: t.guildId,
        channelId: t.channelId,
        className: h.lx,
        onAction: j
      }), !x && (0, r.jsx)(f.A, {
        type: f.A.Types.INLINE,
        className: h.PP,
        children: __OVERLAY__ ? b.intl.string(b.t.YRdw70) : b.intl.string(b.t.CCTgbF)
      })]
    })]
  });
  return (0, r.jsx)("div", {
    className: h.yt,
    children: (0, r.jsx)("div", {
      className: l()(h.Rh, E),
      children: T
    })
  })
}

function _(e) {
  let {
    stream: t,
    streamActivity: n,
    activeStream: i,
    user: a,
    currentUserId: u,
    canWatch: f,
    unavailableReason: p,
    onWatchStream: A,
    onAction: _,
    showHeader: v = false,
    wrapperClassName: O
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(h.yt, O),
    children: [v && (0, r.jsxs)("div", {
      className: h.mg,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: b.intl.string(b.t["HV97U/"])
      }), (0, r.jsx)(d.Ay, {
        size: d.ed.SMALL
      })]
    }), null != A ? (0, r.jsxs)(o.DUT, {
      onClick: A,
      className: h.i1,
      children: [(0, r.jsx)(g.A, {
        className: h.oz,
        stream: t
      }), f ? (0, r.jsx)("div", {
        className: h.xD,
        children: (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: h.ON,
          children: (0, m.A)(t, i, u, p)
        })
      }) : null]
    }) : (0, r.jsxs)("div", {
      className: h.i1,
      children: [(0, r.jsx)(g.A, {
        className: h.oz,
        stream: t
      }), f ? (0, r.jsx)("div", {
        className: h.xD,
        children: (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: h.ON,
          children: (0, m.A)(t, i, u, p)
        })
      }) : null]
    }), (0, r.jsx)("div", {
      className: h.rf,
      children: null != n ? (0, r.jsx)(s.A, {
        hideHeader: true,
        type: s.M.STREAM_PREVIEW,
        activity: n,
        user: a,
        guildId: t.guildId,
        channelId: t.channelId,
        enableUserHoverActivities: true,
        analyticsParams: {
          location: {
            page: y.liQ.GO_LIVE_MODAL,
            section: y.JJy.STREAM_VIEWER_POPOUT
          }
        },
        onAction: _
      }) : (0, r.jsx)(c.A, {
        type: s.M.STREAM_PREVIEW,
        applicationStream: t,
        user: a,
        guildId: t.guildId,
        channelId: t.channelId,
        className: h.lx,
        onAction: _
      })
    })]
  })
}