/** Chunk was on 6500 **/
/** chunk id: 727353, original params: e,t,n (module,exports,require) **/
require.d(exports, {
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
    streamApplication: A,
    user: b,
    currentUserId: h,
    canWatch: v,
    unavailableReason: O,
    onWatchStream: j,
    onAction: S,
    showHeader: I = false,
    hideTip: x = false,
    className: E,
    wrapperClassName: P,
    skipContainer: N = false
  } = e, T = (0, a.bG)([u.A], () => {
    if (null != A) {
      if (null != A.id) return u.A.getApplication(A.id);
      else if (null != A.name) return u.A.getApplicationByName(A.name)
    }
    return null
  }, [A]), w = null != i && null != i.name ? _.intl.formatToPlainString(_.t["4CQq9Q"], {
    name: i.name
  }) : _.intl.string(_.t["Jpkr/q"]), C = (0, r.jsxs)(r.Fragment, {
    children: [I && (0, r.jsxs)("div", {
      className: y.WG,
      children: [null != T && (0, r.jsx)(p.A, {
        game: T,
        className: y.lK
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/bold",
        children: w
      })]
    }), null != j ? (0, r.jsxs)(s.DUT, {
      onClick: j,
      className: y.i1,
      children: [(0, r.jsx)(m.A, {
        className: y.oz,
        stream: t
      }), v ? (0, r.jsx)("div", {
        className: y.xD,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: y.ON,
          children: (0, f.A)(t, n, h, O)
        })
      }) : null]
    }) : (0, r.jsxs)("div", {
      className: y.i1,
      children: [(0, r.jsx)(m.A, {
        className: y.oz,
        stream: t
      }), v ? (0, r.jsx)("div", {
        className: y.xD,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: y.ON,
          children: (0, f.A)(t, n, h, O)
        })
      }) : null]
    }), (0, r.jsxs)("div", {
      className: y.rf,
      children: [null != i ? (0, r.jsx)(o.A, {
        hideHeader: true,
        type: o.M.STREAM_PREVIEW,
        activity: i,
        user: b,
        guildId: t.guildId,
        channelId: t.channelId,
        analyticsParams: {
          location: {
            page: g.liQ.GO_LIVE_MODAL,
            section: g.JJy.STREAM_VIEWER_POPOUT
          }
        },
        onAction: S
      }) : (0, r.jsx)(c.A, {
        type: o.M.STREAM_PREVIEW,
        applicationStream: t,
        user: b,
        guildId: t.guildId,
        channelId: t.channelId,
        className: y.lx,
        onAction: S
      }), !x && (0, r.jsx)(d.A, {
        type: d.A.Types.INLINE,
        className: y.PP,
        children: __OVERLAY__ ? _.intl.string(_.t.YRdw70) : _.intl.string(_.t.CCTgbF)
      })]
    })]
  });
  return N ? (0, r.jsx)("div", {
    className: l()(y.yt, y.Tb, P),
    children: C
  }) : (0, r.jsx)("div", {
    className: l()(y.yt, P),
    children: (0, r.jsx)("div", {
      className: l()(y.Rh, E),
      children: C
    })
  })
}