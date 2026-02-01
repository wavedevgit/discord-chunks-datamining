/** Chunk was on 88474 **/
/** chunk id: 727353, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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

function _(e) {
  let {
    stream: t,
    activeStream: n,
    streamActivity: l,
    streamApplication: _,
    user: h,
    currentUserId: A,
    canWatch: v,
    unavailableReason: O,
    onWatchStream: S,
    onAction: j,
    showHeader: x = false,
    hideTip: I = false,
    className: E,
    wrapperClassName: C,
    skipContainer: P = false
  } = e, N = (0, a.bG)([u.A], () => {
    if (null != _) {
      if (null != _.id) return u.A.getApplication(_.id);
      else if (null != _.name) return u.A.getApplicationByName(_.name)
    }
    return null
  }, [_]), T = null != l && null != l.name ? y.intl.formatToPlainString(y.t["4CQq9Q"], {
    name: l.name
  }) : y.intl.string(y.t["Jpkr/q"]), w = (0, r.jsxs)(r.Fragment, {
    children: [x && (0, r.jsxs)("div", {
      className: b.WG,
      children: [null != N && (0, r.jsx)(p.A, {
        game: N,
        className: b.lK
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/bold",
        children: T
      })]
    }), null != S ? (0, r.jsxs)(s.DUT, {
      onClick: S,
      className: b.i1,
      children: [(0, r.jsx)(m.A, {
        className: b.oz,
        stream: t
      }), v ? (0, r.jsx)("div", {
        className: b.xD,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: b.ON,
          children: (0, f.A)(t, n, A, O)
        })
      }) : null]
    }) : (0, r.jsxs)("div", {
      className: b.i1,
      children: [(0, r.jsx)(m.A, {
        className: b.oz,
        stream: t
      }), v ? (0, r.jsx)("div", {
        className: b.xD,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: b.ON,
          children: (0, f.A)(t, n, A, O)
        })
      }) : null]
    }), (0, r.jsxs)("div", {
      className: b.rf,
      children: [null != l ? (0, r.jsx)(o.A, {
        hideHeader: true,
        type: o.M.STREAM_PREVIEW,
        activity: l,
        user: h,
        guildId: t.guildId,
        channelId: t.channelId,
        analyticsParams: {
          location: {
            page: g.liQ.GO_LIVE_MODAL,
            section: g.JJy.STREAM_VIEWER_POPOUT
          }
        },
        onAction: j
      }) : (0, r.jsx)(c.A, {
        type: o.M.STREAM_PREVIEW,
        applicationStream: t,
        user: h,
        guildId: t.guildId,
        channelId: t.channelId,
        className: b.lx,
        onAction: j
      }), !I && (0, r.jsx)(d.A, {
        type: d.A.Types.INLINE,
        className: b.PP,
        children: __OVERLAY__ ? y.intl.string(y.t.YRdw70) : y.intl.string(y.t.CCTgbF)
      })]
    })]
  });
  return P ? (0, r.jsx)("div", {
    className: i()(b.yt, b.Tb, C),
    children: w
  }) : (0, r.jsx)("div", {
    className: i()(b.yt, C),
    children: (0, r.jsx)("div", {
      className: i()(b.Rh, E),
      children: w
    })
  })
}