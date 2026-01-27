/** Chunk was on 21425 **/
/** chunk id: 727353, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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

function b(e) {
  let {
    stream: t,
    activeStream: n,
    streamActivity: i,
    streamApplication: b,
    user: A,
    currentUserId: h,
    canWatch: v,
    unavailableReason: O,
    onWatchStream: j,
    onAction: S,
    showHeader: I = false,
    hideTip: x = false,
    className: E,
    wrapperClassName: P,
    skipContainer: T = false
  } = e, N = (0, a.bG)([u.A], () => {
    if (null != b) {
      if (null != b.id) return u.A.getApplication(b.id);
      else if (null != b.name) return u.A.getApplicationByName(b.name)
    }
    return null
  }, [b]), w = null != i && null != i.name ? y.intl.formatToPlainString(y.t["4CQq9Q"], {
    name: i.name
  }) : y.intl.string(y.t["Jpkr/q"]), C = (0, r.jsxs)(r.Fragment, {
    children: [I && (0, r.jsxs)("div", {
      className: _.WG,
      children: [null != N && (0, r.jsx)(p.A, {
        game: N,
        className: _.lK
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/bold",
        children: w
      })]
    }), null != j ? (0, r.jsxs)(s.DUT, {
      onClick: j,
      className: _.i1,
      children: [(0, r.jsx)(m.A, {
        className: _.oz,
        stream: t
      }), v ? (0, r.jsx)("div", {
        className: _.xD,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: _.ON,
          children: (0, f.A)(t, n, h, O)
        })
      }) : null]
    }) : (0, r.jsxs)("div", {
      className: _.i1,
      children: [(0, r.jsx)(m.A, {
        className: _.oz,
        stream: t
      }), v ? (0, r.jsx)("div", {
        className: _.xD,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "none",
          className: _.ON,
          children: (0, f.A)(t, n, h, O)
        })
      }) : null]
    }), (0, r.jsxs)("div", {
      className: _.rf,
      children: [null != i ? (0, r.jsx)(o.A, {
        hideHeader: true,
        type: o.M.STREAM_PREVIEW,
        activity: i,
        user: A,
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
        user: A,
        guildId: t.guildId,
        channelId: t.channelId,
        className: _.lx,
        onAction: S
      }), !x && (0, r.jsx)(d.A, {
        type: d.A.Types.INLINE,
        className: _.PP,
        children: __OVERLAY__ ? y.intl.string(y.t.YRdw70) : y.intl.string(y.t.CCTgbF)
      })]
    })]
  });
  return T ? (0, r.jsx)("div", {
    className: l()(_.yt, _.Tb, P),
    children: C
  }) : (0, r.jsx)("div", {
    className: l()(_.yt, P),
    children: (0, r.jsx)("div", {
      className: l()(_.Rh, E),
      children: C
    })
  })
}