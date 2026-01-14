/** Chunk was on 74590 **/
/** chunk id: 651081, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./388685.js"), require("./539854.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk700582 = require("./700582.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk410030 = require("./410030.js"),
  Chunk566006 = require("./566006.js"),
  Chunk222677 = require("./222677.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk5192 = require("./5192.js"),
  Chunk91047 = require("./91047.jsx"),
  Chunk79390 = require("./79390.js"),
  Chunk918088 = require("./918088.js"),
  Chunk22864 = require("./22864.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk620564 = require("./620564.js"),
  Chunk144452 = require("./144452.js");
let P = Chunk566006.O.VOTE;

function M() {
  let e = (0, h.ZP)();
  return (0, n.jsxs)(d.ubH, {
    theme: e,
    children: [(0, n.jsx)(d.oxh, {
      darkSrc: y,
      lightSrc: y,
      width: 106,
      height: 100,
      style: {
        marginBottom: 10
      }
    }), (0, n.jsx)(d.OZU, {
      note: I.intl.string(I.t.bwytdh),
      noteClassName: Z.emptyText,
      className: Z.emptyTitle,
      children: I.intl.string(I.t.vhQK3o)
    })]
  })
}

function k(e) {
  var t;
  let {
    emoji: l,
    emojiSize: a,
    imageClassNames: s,
    textClassNames: i
  } = e, r = null == l.id ? _.ZP.getURL(l.name) : g.ZP.getEmojiURL({
    id: l.id,
    animated: null != (t = l.animated) && t,
    size: a
  });
  return null != r && "" !== r ? (0, n.jsx)("img", {
    className: s,
    src: r,
    alt: l.name
  }) : (0, n.jsx)("span", {
    className: i,
    children: l.name
  })
}

function z(e) {
  let {
    poll: t,
    reactionVoteCounts: l,
    selectedAnswerId: a,
    onSelectAnswer: s
  } = e;
  return (0, n.jsx)(d.njP, {
    look: "custom",
    orientation: "vertical",
    "aria-label": I.intl.string(I.t["qbir+4"]),
    selectedItem: a,
    onItemSelect: s,
    children: t.answers.map(e => {
      var t;
      let s = String(e.answer_id),
        r = null != (t = l[s]) ? t : 0,
        {
          emoji: o,
          text: u
        } = e.poll_media,
        m = I.intl.formatToPlainString(I.t.wqBc7A, {
          numVotes: r,
          option: u
        }),
        f = a === s;
      return (0, n.jsxs)(d.njP.Item, {
        id: s,
        disableItemStyles: true,
        className: i()({
          [Z.voteDefault]: !f,
          [Z.voteSelected]: f
        }),
        "aria-label": m,
        selectedItem: a,
        children: [null != o ? (0, n.jsx)(k, {
          emoji: o,
          emojiSize: 16,
          imageClassNames: Z.emoji,
          textClassNames: i()(Z.emoji, Z.emojiText),
          "aria-hidden": true
        }) : null, (0, n.jsx)(d.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          lineClamp: 1,
          children: (0, n.jsx)(c.Z, {
            position: "left",
            "aria-hidden": true,
            children: u
          })
        }), (0, n.jsxs)(d.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          className: Z.voteCount,
          children: ["(", r.toLocaleString(), ")"]
        })]
      }, s)
    })
  })
}

function A(e) {
  let {
    user: t,
    channel: l
  } = e, a = (0, o.e7)([j.default], () => j.default.getUser(t.id), [t]), s = N.ZP.useName(l.guild_id, l.id, t);
  return (0, n.jsxs)("div", {
    className: Z.voterDefault,
    onContextMenu: e => (0, C.Pv)(e, t, l),
    children: [(0, n.jsx)("div", {
      className: Z.voterAvatarContainer,
      children: (0, n.jsx)(m.Z, {
        user: null != a ? a : t,
        size: d.EFr.SIZE_32,
        "aria-hidden": true,
        guildId: l.guild_id
      })
    }), (0, n.jsxs)("div", {
      className: Z.voterInfo,
      children: [(0, n.jsx)(d.Text, {
        variant: "text-md/normal",
        className: Z.name,
        "aria-label": s,
        children: (0, n.jsx)("span", {
          className: Z.ellipsized,
          children: s
        })
      }), (0, n.jsx)(u.Z, {
        user: t,
        className: Z.tagFaded,
        usernameClass: i()(Z.username, Z.ellipsized),
        discriminatorClass: Z.discriminator,
        forceUsername: true
      })]
    })]
  })
}

function E(e) {
  let {
    message: t,
    reaction: l,
    channel: s
  } = e, {
    reactors: i,
    hasMore: o
  } = (0, T.Z)({
    channelId: s.id,
    messageId: t.id,
    reaction: l
  }), c = a.useRef(null), u = a.useRef(null), [m, h] = a.useState(false), v = a.useCallback(async () => {
    let e = u.current;
    h(true);
    let n = await x.U0({
      channelId: s.id,
      messageId: t.id,
      emoji: l.emoji,
      limit: w.pTL,
      after: e,
      type: P
    });
    u.current = n[n.length - 1].id, h(false)
  }, [s.id, t.id, l.emoji]);
  (0, f.ZP)(() => {
    v()
  });
  let p = a.useCallback(() => {
      let {
        current: e
      } = c;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - 52 && o && !m && v()
    }, [c, o, m, v]),
    j = a.useCallback((e, t) => 1 === e ? 52 * (0 === t) : 52 * (0 === e && (0 === t && 0 === i.length || null != i[t])), [i]),
    g = a.useCallback(e => {
      let {
        section: t,
        row: l
      } = e, a = i[l];
      return 1 === t ? 0 === l ? (0, n.jsx)(d.$jN, {
        className: Z.spinner
      }, "hasMore") : null : 0 === i.length && m ? (0, n.jsx)(d.$jN, {
        className: Z.spinner
      }, "loadingMore") : null != a && (0, n.jsx)(A, {
        channel: s,
        user: a
      }, a.id)
    }, [s, m, i]),
    _ = a.useMemo(() => {
      let e = [];
      return 0 === i.length && m ? e.push(1) : (e.push(i.length), o && e.push(1)), e
    }, [o, m, i.length]);
  return (0, n.jsx)(r._2F, {
    className: Z.voters,
    fade: true,
    ref: c,
    sections: _,
    sectionHeight: 0,
    rowHeight: j,
    renderRow: g,
    onScroll: o ? p : true
  })
}

function R(e) {
  var t;
  let {
    message: l,
    initialAnswerId: s,
    onClose: i,
    transitionState: c
  } = e, u = (0, o.e7)([p.Z], () => p.Z.getChannel(l.getChannelId())), [m, f] = a.useState(s), h = a.useMemo(() => {
    if (null != l.reactions) return (0, S.ef)(l.reactions, m)
  }, [l.reactions, m]), v = a.useMemo(() => (0, b.cZ)(l.reactions), [l.reactions]), x = a.useMemo(() => (function(e) {
    let t = {};
    for (let a of e) {
      var l, n;
      let e = null != (n = null == (l = a.count_details) ? true : l.vote) ? n : 0,
        s = a.emoji.id;
      null != s && (t[s] = e)
    }
    return t
  })(l.reactions), [l.reactions]), j = x[m], g = a.useMemo(() => {
    var e;
    let t = {};
    return null == (e = l.poll) || e.answers.forEach(e => {
      var l;
      (null == e ? true : e.answer_id) != null && (null == (l = e.poll_media) ? true : l.text) != null && (t[e.answer_id] = e.poll_media.text)
    }), t
  }, [null == (t = l.poll) ? true : t.answers]), _ = I.intl.formatToPlainString(I.t.wqBc7A, {
    numVotes: j,
    option: g[m]
  });
  if (null == u) throw Error("PollVotesModal.render: Message does not have a channelId");
  if (null == l.poll) throw Error("PollVotesModal.render: Message does not have a poll");
  return (0, n.jsxs)(r.IX, {
    transitionState: c,
    onClose: i,
    size: "lg",
    children: [(0, n.jsx)(r.xBx, {
      title: l.poll.question.text,
      subtitle: I.intl.format(I.t.XRkuof, {
        count: v
      })
    }), (0, n.jsx)("div", {
      className: Z.spacer
    }), (0, n.jsxs)("div", {
      className: Z.body,
      children: [(0, n.jsx)(d.Ttm, {
        className: Z.scroller,
        fade: true,
        children: (0, n.jsx)(z, {
          poll: l.poll,
          selectedAnswerId: m,
          onSelectAnswer: f,
          reactionVoteCounts: x
        })
      }), (0, n.jsx)(d.njP.Panel, {
        id: m,
        "aria-label": _,
        className: Z.panel,
        children: null != h && j > 0 ? (0, n.jsx)(E, {
          message: l,
          reaction: h,
          channel: u
        }) : (0, n.jsx)(M, {})
      })]
    })]
  })
}