/** Chunk was on 64935 **/
/** chunk id: 850131, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk23339 = require("./23339.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk763754 = require("./763754.js"),
  Chunk447215 = require("./447215.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk533567 = require("./533567.js"),
  Chunk306417 = require("./306417.jsx"),
  Chunk412136 = require("./412136.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk782635 = require("./782635.js");

function A() {
  return (0, r.jsx)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: o.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
    "aria-hidden": true,
    children: (0, r.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM5.70711 9.29289C5.31658 8.90237 4.68342 8.90237 4.29289 9.29289C3.90237 9.68342 3.90237 10.3166 4.29289 10.7071L5.08579 11.5L4.29289 12.2929C3.90237 12.6834 3.90237 13.3166 4.29289 13.7071C4.68342 14.0976 5.31658 14.0976 5.70711 13.7071L6.5 12.9142L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929L7.91421 11.5L8.70711 10.7071C9.09763 10.3166 9.09763 9.68342 8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289L6.5 10.0858L5.70711 9.29289ZM15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L17.5 10.0858L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L18.9142 11.5L19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071C19.3166 14.0976 18.6834 14.0976 18.2929 13.7071L17.5 12.9142L16.7071 13.7071C16.3166 14.0976 15.6834 14.0976 15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929L16.0858 11.5L15.2929 10.7071C14.9024 10.3166 14.9024 9.68342 15.2929 9.29289ZM9.08869 17.5563C8.78148 18.0152 8.16038 18.1382 7.70142 17.831C7.24247 17.5238 7.11947 16.9027 7.42669 16.4437C8.41166 14.9723 10.092 14 11.9999 14C13.9078 14 15.5881 14.9723 16.5731 16.4437C16.8803 16.9027 16.7573 17.5238 16.2984 17.831C15.8394 18.1382 15.2183 18.0152 14.9111 17.5563C14.2815 16.6158 13.2124 16 11.9999 16C10.7874 16 9.71825 16.6158 9.08869 17.5563Z",
      fill: "currentColor"
    })
  })
}

function v(e) {
  let t, {
    hasNoVotes: n,
    victorEmoji: i
  } = e;
  if (n) t = (0, r.jsx)(A, {});
  else if (null != i) {
    let e = "" !== i.name ? i.name : i.displayName;
    t = (0, r.jsx)(d.A, {
      emojiId: i.id,
      emojiName: e,
      animated: i.animated
    })
  }
  return null != t ? (0, r.jsx)("div", {
    className: y.ZS,
    children: t
  }) : null
}

function O(e) {
  let t, {
      type: n
    } = e,
    i = function(e, t) {
      if (null == e) return {};
      var n, r, i, l = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }
      if (l = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.getOwnPropertyNames(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
          return i
        }(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }(e, ["type"]),
    l = "text-muted";
  switch (n) {
    case "NO_VOTES":
      t = (0, r.jsx)(c.Text, {
        variant: "text-sm/semibold",
        color: "text-default",
        scaleFontToUserSetting: true,
        children: b.intl.string(b.t["a+lSZ/"])
      });
      break;
    case "VICTOR":
      let {
        victorAnswerText: a, victorVotePercentage: s
      } = i;
      t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: y.sj,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "text-default",
            className: y.Dq,
            scaleFontToUserSetting: true,
            children: a
          }), (0, r.jsx)(_.Vx, {
            size: 16,
            className: y.To,
            isVictor: true,
            isExpired: true
          })]
        }), (0, r.jsxs)(c.Text, {
          variant: "text-xs/medium",
          color: l,
          scaleFontToUserSetting: true,
          children: [b.intl.string(b.t.ufIDIx), " • ", s, "%"]
        })]
      });
      break;
    case "TIE":
      let {
        tiedVotePercentage: o
      } = i;
      t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          scaleFontToUserSetting: true,
          children: b.intl.string(b.t.kPN9si)
        }), (0, r.jsxs)(c.Text, {
          variant: "text-xs/medium",
          color: l,
          scaleFontToUserSetting: true,
          children: [o, "%"]
        })]
      })
  }
  return (0, r.jsx)("div", {
    className: y.h_,
    children: t
  })
}

function x(e) {
  let {
    className: t,
    data: n,
    onClickPollLink: l
  } = e, s = i.useMemo(() => (function(e) {
    if (0 === e.totalVotes) return {
      type: "NO_VOTES"
    };
    let t = null != e.victorAnswerId,
      n = e.totalVotes > 0 ? Math.round(e.victorAnswerVotes / e.totalVotes * 100) : 0;
    return t ? {
      type: "VICTOR",
      victorAnswerText: e.victorAnswerText,
      victorVotePercentage: n
    } : {
      type: "TIE",
      tiedVotePercentage: n
    }
  })(n), [n]), o = null != n.victorEmoji || "NO_VOTES" === s.type;
  return (0, r.jsxs)("div", {
    className: a()(y.kL, {
      [y.FS]: o
    }, t),
    children: [(0, r.jsx)(v, {
      hasNoVotes: "NO_VOTES" === s.type,
      victorEmoji: n.victorEmoji
    }), (0, r.jsx)(O, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, s)), null != l && (0, r.jsx)(c.Button, {
      size: "sm",
      onClick: l,
      variant: "secondary",
      text: b.intl.string(b.t.Jw7Vbf)
    })]
  })
}

function E(e) {
  var t;
  let {
    message: n,
    channel: l,
    compact: a,
    disableInteraction: o = false
  } = e, d = n.embeds[0], _ = i.useMemo(() => (0, g.A)(d), [d]), A = (0, s.EJ)(null != (t = null == _ ? true : _.questionText) ? t : "", h.TU), v = (0, p.Ay)(n), O = (0, m.P)({
    user: n.author,
    channelId: l.id,
    guildId: l.guild_id,
    messageId: n.id
  }), E = n.messageReference, j = i.useCallback(() => {
    null != E && u.A.jumpToMessage({
      channelId: E.channel_id,
      messageId: E.message_id,
      flash: true,
      returnMessageId: n.id
    })
  }, [n.id, E]);
  return null == _ ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.A, {
      iconNode: (0, r.jsx)(c.YRe, {
        size: "xs"
      }),
      timestamp: n.timestamp,
      compact: a,
      children: b.intl.format(b.t.VJcK41, {
        username: v.nick,
        usernameHook: O(v),
        title: A,
        titleOnClick: j
      })
    }), (0, r.jsx)(x, {
      className: y.E6,
      data: _,
      onClickPollLink: o ? true : j
    })]
  })
}