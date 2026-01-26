/** Chunk was on web.js **/
/** chunk id: 727353, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk302959 = require("./302959.jsx"),
  Chunk592182 = require("./592182.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk12351 = require("./12351.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk877315 = require("./877315.js"),
  Chunk607407 = require("./607407.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk573073 = require("./573073.js");

function E(e) {
  let {
    stream: t,
    activeStream: n,
    streamActivity: i,
    streamApplication: E,
    user: y,
    currentUserId: b,
    canWatch: O,
    unavailableReason: v,
    onWatchStream: A,
    onAction: I,
    showHeader: S = false,
    hideTip: T = false,
    className: C,
    wrapperClassName: N,
    skipContainer: w = false
  } = e, R = (0, s.bG)([u.A], () => {
    if (null != E) {
      if (null != E.id) return u.A.getApplication(E.id);
      else if (null != E.name) return u.A.getApplicationByName(E.name)
    }
    return null
  }, [E]), P = null != i && null != i.name ? m.intl.formatToPlainString(m.t["4CQq9Q"], {
    name: i.name
  }) : m.intl.string(m.t["Jpkr/q"]), D = (0, r.jsxs)(r.Fragment, {
    children: [S && (0, r.jsxs)("div", {
      className: g.WG,
      children: [null != R && (0, r.jsx)(f.A, {
        game: R,
        className: g.lK
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/bold",
        children: P
      })]
    }), null != A ? (0, r.jsxs)(o.DUT, {
      onClick: A,
      className: g.i1,
      children: [(0, r.jsx)(_.A, {
        className: g.oz,
        stream: t
      }), O ? (0, r.jsx)("div", {
        className: g.xD,
        children: (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: g.ON,
          children: (0, p.A)(t, n, b, v)
        })
      }) : null]
    }) : (0, r.jsxs)("div", {
      className: g.i1,
      children: [(0, r.jsx)(_.A, {
        className: g.oz,
        stream: t
      }), O ? (0, r.jsx)("div", {
        className: g.xD,
        children: (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: g.ON,
          children: (0, p.A)(t, n, b, v)
        })
      }) : null]
    }), (0, r.jsxs)("div", {
      className: g.rf,
      children: [null != i ? (0, r.jsx)(l.A, {
        hideHeader: true,
        type: l.M.STREAM_PREVIEW,
        activity: i,
        user: y,
        guildId: t.guildId,
        channelId: t.channelId,
        analyticsParams: {
          location: {
            page: h.liQ.GO_LIVE_MODAL,
            section: h.JJy.STREAM_VIEWER_POPOUT
          }
        },
        onAction: I
      }) : (0, r.jsx)(c.A, {
        type: l.M.STREAM_PREVIEW,
        applicationStream: t,
        user: y,
        guildId: t.guildId,
        channelId: t.channelId,
        className: g.lx,
        onAction: I
      }), !T && (0, r.jsx)(d.A, {
        type: d.A.Types.INLINE,
        className: g.PP,
        children: __OVERLAY__ ? m.intl.string(m.t.YRdw70) : m.intl.string(m.t.CCTgbF)
      })]
    })]
  });
  return w ? (0, r.jsx)("div", {
    className: a()(g.yt, g.Tb, N),
    children: D
  }) : (0, r.jsx)("div", {
    className: a()(g.yt, N),
    children: (0, r.jsx)("div", {
      className: a()(g.Rh, C),
      children: D
    })
  })
}