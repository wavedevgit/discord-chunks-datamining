/** Chunk was on 81985 **/
/** chunk id: 880831, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N,
  z: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk620389 = require("./620389.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk475179 = require("./475179.js"),
  Chunk904245 = require("./904245.js"),
  Chunk372900 = require("./372900.js"),
  Chunk937889 = require("./937889.js"),
  Chunk739566 = require("./739566.js"),
  Chunk267128 = require("./267128.jsx"),
  Chunk378233 = require("./378233.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk375954 = require("./375954.js"),
  Chunk699516 = require("./699516.js"),
  Chunk768581 = require("./768581.js"),
  Chunk70956 = require("./70956.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk445303 = require("./445303.js");
let P = 10 * Chunk70956.Z.Millis.SECOND;

function Z(e) {
  var t;
  let {
    message: n
  } = e, {
    isBlocked: l,
    isIgnored: o
  } = (0, c.cj)([j.Z], () => ({
    isBlocked: j.Z.isBlockedForMessage(n),
    isIgnored: j.Z.isIgnoredForMessage(n)
  }), [n]), s = (0, m.Uj)(n), d = i.useContext(h.Z), [O, C] = i.useState(false), E = i.useCallback(e => {
    "A" !== e.target.nodeName && (p.Z.updateChatOpen(n.channel_id, true), f.Z.jumpToMessage({
      channelId: n.channel_id,
      messageId: n.id,
      flash: true
    }))
  }, [n.channel_id, n.id]), S = null != n.content && "" !== n.content ? (0, g.ZP)(n, {
    isInteracting: O
  }).content : null, {
    contentPlaceholder: P,
    renderedContent: Z,
    trailingIcon: N,
    leadingIcon: T
  } = (0, b.f)(n, S, l, o, I.messageContent, {
    trailingIconClass: I.messageContentTrailingIcon,
    leadingIconClass: I.messageContentLeadingIcon,
    iconSize: _.WW
  }), A = (0, y.cv)(n), w = A.length > 0 ? A.map(e => (0, r.jsx)(v.Z, {
    className: I.sticker,
    size: 128,
    sticker: e,
    isInteracting: O
  }, e.id)) : null;
  return (0, r.jsxs)(u.P3F, {
    className: I.toast,
    onMouseEnter: () => {
      C(true)
    },
    onMouseLeave: () => {
      C(false)
    },
    onClick: E,
    children: [(0, r.jsxs)("div", {
      className: a()(I.messageContentWrapper, {
        [I.mentioned]: n.mentioned
      }),
      children: [null != w ? null : T, null != (t = null != Z ? Z : w) ? t : (0, r.jsx)("span", {
        children: P
      }), null != w ? null : N]
    }), (0, r.jsx)("img", {
      alt: "",
      src: (null == s ? true : s.guildMemberAvatar) != null && null != d ? (0, x.JM)({
        guildId: d,
        userId: n.author.id,
        avatar: s.guildMemberAvatar
      }) : n.author.getAvatarURL(d, 32),
      className: I.avatar
    })]
  })
}

function N(e) {
  let {
    channelId: t,
    className: n
  } = e, [l, p] = i.useState(false), {
    toastsHidden: f,
    toastMessages: h
  } = function(e) {
    var t;
    let {
      channelId: n,
      isFrozen: r,
      count: l,
      lingerMs: a
    } = e, [o, s] = i.useState([]), [u, p] = i.useState(false), f = i.useRef(null), h = i.useRef(true), g = i.useCallback(() => {
      s([]), p(true)
    }, []);
    i.useEffect(() => {
      function e(e) {
        let {
          channelId: t,
          message: r,
          optimistic: i
        } = e;
        t !== n || r.type === S.uaV.STAGE_START || r.type === S.uaV.STAGE_END || r.type === S.uaV.STAGE_TOPIC || r.type === S.uaV.STAGE_SPEAKER || r.type === S.uaV.STAGE_RAISE_HAND || i || (clearTimeout(h.current), h.current = setTimeout(g, a), s(e => [...e, r.id]))
      }
      return d.Z.subscribe("MESSAGE_CREATE", e), () => {
        d.Z.unsubscribe("MESSAGE_CREATE", e)
      }
    }, [n, g, l, a]), i.useEffect(() => () => {
      clearTimeout(h.current)
    }, []), i.useEffect(() => {
      o.length > 3 && s(e => {
        let t = e.length - 3;
        return [...e.slice(t)]
      })
    }, [o]), r && null == f.current ? f.current = o : r || null == f.current || (f.current = null);
    let m = null != (t = f.current) ? t : o;
    return {
      toastsHidden: u,
      toastMessages: (0, c.Wu)([O.Z], () => m.map(e => O.Z.getMessage(n, e)), [n, m]).filter(E.lm)
    }
  }({
    channelId: t,
    isFrozen: l,
    count: 3,
    lingerMs: P
  }), g = i.useRef({}), [m, b] = i.useState({}), y = i.useCallback((e, t) => {
    null == t ? delete g.current[e] : g.current[e] = t
  }, []), v = i.useRef(m);
  i.useLayoutEffect(() => {
    v.current = m
  }), i.useLayoutEffect(() => {
    let e = {},
      t = 0;
    for (let r of h) {
      var n;
      let i = null != (n = g.current[r.id]) ? n : 0;
      e[r.id] = t, t += i + 8
    }(0, o.isEqual)(e, v.current) || b(e)
  }, [h]);
  let j = h.map(e => ({
      message: e,
      height: g.current[e.id],
      y: m[e.id]
    })),
    x = (0, u.Yzy)(j, {
      keys: e => e.message.id,
      from: () => ({
        opacity: 0
      }),
      enter: e => {
        let {
          y: t
        } = e;
        return {
          opacity: 1,
          translateY: t
        }
      },
      update: e => {
        let {
          y: t
        } = e;
        return {
          translateY: t
        }
      },
      leave: e => {
        let {
          height: t,
          y: n
        } = e;
        return {
          opacity: 0,
          translateY: f ? n : -(null != t ? t : 0) - 8,
          pointerEvents: "none"
        }
      }
    });
  return (0, r.jsx)(u.f6W, {
    theme: S.BRd.DARK,
    children: e => (0, r.jsx)("div", {
      className: a()(n, e),
      onMouseEnter: () => {
        p(true)
      },
      onMouseLeave: () => {
        p(false)
      },
      children: x((e, t) => (0, r.jsx)(s.animated.div, {
        ref: e => y(t.message.id, null != e ? e.offsetHeight : null),
        className: I.toastWrapper,
        style: e,
        children: (0, r.jsx)(Z, {
          message: t.message
        })
      }))
    })
  })
}