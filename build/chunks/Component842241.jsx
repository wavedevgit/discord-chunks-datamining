/** Chunk was on web.js **/
/** chunk id: 842241, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => V
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk342952 = require("./342952.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk401843 = require("./401843.js"),
  Chunk475743 = require("./475743.js"),
  Chunk672979 = require("./672979.js"),
  Chunk717306 = require("./717306.js"),
  Chunk323073 = require("./323073.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk402216 = require("./402216.jsx"),
  Chunk450149 = require("./450149.js"),
  Chunk279250 = require("./279250.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk607567 = require("./607567.js"),
  Chunk92240 = require("./92240.js"),
  Chunk257367 = require("./257367.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk584904 = require("./584904.jsx"),
  Chunk351638 = require("./351638.jsx"),
  Chunk316770 = require("./316770.jsx"),
  Chunk910607 = require("./910607.jsx"),
  Chunk70963 = require("./70963.jsx"),
  Chunk8738 = require("./8738.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk380297 = require("./380297.js"),
  Chunk402697 = require("./402697.js"),
  Chunk399162 = require("./399162.js"),
  Chunk181147 = require("./181147.js");

function V(e) {
  let {
    user: t,
    currentUser: n,
    stream: i,
    className: V,
    onClose: B
  } = e, {
    themeType: H,
    theme: Y
  } = (0, C.E)(), W = (0, o.bG)([O.A], () => O.A.getGuild(null == i ? true : i.guildId)), K = (0, o.bG)([b.A], () => b.A.getChannel(null == i ? true : i.channelId)), z = (0, o.yK)([I.Ay], () => null != K ? I.Ay.getVoiceStatesForChannel(K).map(e => {
    let {
      user: t
    } = e;
    return t
  }) : []), q = (0, o.bG)([A.A], () => A.A.findActivity(t.id, e => (0, f.A)(e) && !(0, p.A)(e))), {
    analyticsLocations: Z
  } = (0, m.Ay)(h.A.USER_PROFILE_LIVE_ACTIVITY_CARD), Q = (0, S.A)({
    display: "live",
    voiceChannelId: null == K ? true : K.id,
    user: t,
    stream: i,
    analyticsLocations: Z
  }), X = (0, T.A)({
    userId: t.id,
    onAction: Q
  }), {
    previewUrl: J,
    isLoading: $
  } = (0, E.A)(null == i ? true : i.guildId, null == i ? true : i.channelId, null == i ? true : i.ownerId), [ee, et] = (0, y.zP)(K), en = (0, _.a9)() && (0, _.UK)(null == K ? true : K.id), er = (0, o.bG)([v.A], () => null != K && !en && v.A.canBasicChannel(x.hVb.CONNECT, K)), ei = (0, d.A)($ ? null : J), ea = $ || null == J ? ei : J;
  if (null == W || null == K || false === i.discoverable) return null;
  let eo = () => {
      let e = e => {
        e.stopPropagation(), ee && (Q({
          action: "PRESS_IMAGE"
        }), c.default.selectVoiceChannel(i.channelId), (0, u.Nl)(i), null == B || B())
      };
      return null == ea && $ ? (0, r.jsx)("div", {
        className: U.VH,
        children: (0, r.jsx)(l.y$y, {})
      }) : null == ea || en ? (0, r.jsxs)(l.DUT, {
        className: a()(U.VH, U.Lw, ee ? U.vk : U.r9),
        onClick: e,
        "aria-label": (0, y.CQ)(et),
        "aria-disabled": !ee,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: Y === x.NJ8.LIGHT ? F : G
        }), H !== M.d.MODAL && H !== M.d.MODAL_V2 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.Text, {
            className: U.um,
            variant: "text-sm/medium",
            color: "always-white",
            children: (0, y.CT)(et)
          }), (0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            children: er ? j.intl.string(j.t.uQZTBV) : j.intl.string(j.t.pgUTZC)
          })]
        })]
      }) : (0, r.jsxs)(l.DUT, {
        className: a()(U.VH, U.Lw, ee ? U.vk : U.r9),
        onClick: e,
        "aria-label": (0, y.CQ)(et),
        "aria-disabled": !ee,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: ea,
          className: U.Sl
        }), H !== M.d.MODAL && H !== M.d.MODAL_V2 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.Text, {
            className: U.um,
            variant: "text-sm/medium",
            color: "always-white",
            children: (0, y.CT)(et)
          }), (0, r.jsx)(l.pVd, {
            size: "xs",
            color: "currentColor",
            className: U.wI
          })]
        })]
      })
    },
    es = () => H !== M.d.MODAL && H !== M.d.MODAL_V2 ? null : (0, r.jsxs)("div", {
      className: k.zH,
      children: [(0, r.jsx)(R.A, {
        channel: K,
        guild: W,
        onAction: Q,
        onClose: B
      }), (0, r.jsx)(s.A, {
        users: z,
        guildId: W.id,
        channelId: K.id,
        maxUsers: P.k,
        size: l._3J.SIZE_16,
        onClickOverflow: e => {
          null == e || e.stopPropagation(), null == Q || Q({
            action: "PRESS_VOICE_CHANNEL_AVATARS"
          })
        },
        onUserClick: e => e.stopPropagation(),
        disableUserPopout: e => e === t.id,
        overflowCountColor: "text-muted",
        "aria-label": j.intl.string(j.t["jNqDh/"])
      }), H === M.d.MODAL_V2 && ec()]
    }),
    el = () => H === M.d.MODAL || H === M.d.MODAL_V2 ? null : (0, r.jsx)(P.A, {
      user: t,
      guild: W,
      channel: K,
      onAction: Q,
      onClose: B
    }),
    ec = () => t.id === n.id ? null : (0, r.jsx)("div", {
      className: k.o1,
      children: (0, r.jsx)(D.A, {
        channel: K,
        onAction: Q,
        onClose: B
      })
    }),
    eu = null != q ? j.intl.formatToPlainString(j.t["4CQq9Q"], {
      name: q.name
    }) : j.intl.string(j.t["Jpkr/q"]);
  return (0, r.jsx)(m.f5, {
    value: Z,
    children: (0, r.jsxs)(N.A, {
      ref: X,
      className: V,
      onAction: Q,
      onClose: B,
      "aria-label": eu,
      children: [(0, r.jsx)(w.A, {
        text: eu,
        tags: (0, r.jsx)(g.Ay, {
          size: g.ed.SMALL
        }),
        contextMenu: (0, r.jsx)(L.A, {
          display: "live",
          user: t,
          onClose: B
        })
      }), (0, r.jsxs)("div", {
        className: k.rf,
        children: [(0, r.jsxs)("div", {
          className: k.Qs,
          children: [eo(), es(), H === M.d.MODAL && ec()]
        }), el()]
      }), H !== M.d.MODAL && H !== M.d.MODAL_V2 && ec()]
    })
  })
}