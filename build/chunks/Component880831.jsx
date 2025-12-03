/** Chunk was on 34740 **/
/** chunk id: 880831, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T,
  z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk205120 = require("./205120.js"),
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
  Chunk89019 = require("./89019.js");
let I = 10 * Chunk70956.Z.Millis.SECOND;

function Z(e) {
  var t;
  let {
    message: n
  } = e, {
    isBlocked: l,
    isIgnored: o
  } = (0, c.cj)([_.Z], () => ({
    isBlocked: _.Z.isBlockedForMessage(n),
    isIgnored: _.Z.isIgnoredForMessage(n)
  }), [n]), s = (0, g.Uj)(n), d = r.useContext(f.Z), [v, x] = r.useState(false), E = r.useCallback(e => {
    "A" !== e.target.nodeName && (p.Z.updateChatOpen(n.channel_id, true), h.Z.jumpToMessage({
      channelId: n.channel_id,
      messageId: n.id,
      flash: true
    }))
  }, [n.channel_id, n.id]), j = null != n.content && "" !== n.content ? (0, m.ZP)(n, {
    isInteracting: v
  }).content : null, {
    contentPlaceholder: I,
    renderedContent: Z,
    trailingIcon: T,
    leadingIcon: N
  } = (0, b.f)(n, j, l, o, P.messageContent, {
    trailingIconClass: P.messageContentTrailingIcon,
    leadingIconClass: P.messageContentLeadingIcon,
    iconSize: S.WW
  }), A = (0, y.cv)(n), w = A.length > 0 ? A.map(e => (0, i.jsx)(C.Z, {
    className: P.sticker,
    size: 128,
    sticker: e,
    isInteracting: v
  }, e.id)) : null;
  return (0, i.jsxs)(u.P3F, {
    className: P.toast,
    onMouseEnter: () => {
      x(true)
    },
    onMouseLeave: () => {
      x(false)
    },
    onClick: E,
    children: [(0, i.jsxs)("div", {
      className: a()(P.messageContentWrapper, {
        [P.mentioned]: n.mentioned
      }),
      children: [null != w ? null : N, null != (t = null != Z ? Z : w) ? t : (0, i.jsx)("span", {
        children: I
      }), null != w ? null : T]
    }), (0, i.jsx)("img", {
      alt: "",
      src: (null == s ? true : s.guildMemberAvatar) != null && null != d ? (0, O.JM)({
        guildId: d,
        userId: n.author.id,
        avatar: s.guildMemberAvatar
      }) : n.author.getAvatarURL(d, 32),
      className: P.avatar
    })]
  })
}

function T(e) {
  let {
    channelId: t,
    className: n
  } = e, [l, p] = r.useState(false), {
    toastsHidden: h,
    toastMessages: f
  } = function(e) {
    var t;
    let {
      channelId: n,
      isFrozen: i,
      count: l,
      lingerMs: a
    } = e, [o, s] = r.useState([]), [u, p] = r.useState(false), h = r.useRef(null), f = r.useRef(true), m = r.useCallback(() => {
      s([]), p(true)
    }, []);
    r.useEffect(() => {
      function e(e) {
        let {
          channelId: t,
          message: i,
          optimistic: r
        } = e;
        t !== n || i.type === j.uaV.STAGE_START || i.type === j.uaV.STAGE_END || i.type === j.uaV.STAGE_TOPIC || i.type === j.uaV.STAGE_SPEAKER || i.type === j.uaV.STAGE_RAISE_HAND || r || (clearTimeout(f.current), f.current = setTimeout(m, a), s(e => [...e, i.id]))
      }
      return d.Z.subscribe("MESSAGE_CREATE", e), () => {
        d.Z.unsubscribe("MESSAGE_CREATE", e)
      }
    }, [n, m, l, a]), r.useEffect(() => () => {
      clearTimeout(f.current)
    }, []), r.useEffect(() => {
      o.length > 3 && s(e => {
        let t = e.length - 3;
        return [...e.slice(t)]
      })
    }, [o]), i && null == h.current ? h.current = o : i || null == h.current || (h.current = null);
    let g = null != (t = h.current) ? t : o;
    return {
      toastsHidden: u,
      toastMessages: (0, c.Wu)([v.Z], () => g.map(e => v.Z.getMessage(n, e)), [n, g]).filter(E.lm)
    }
  }({
    channelId: t,
    isFrozen: l,
    count: 3,
    lingerMs: I
  }), m = r.useRef({}), [g, b] = r.useState({}), y = r.useCallback((e, t) => {
    null == t ? delete m.current[e] : m.current[e] = t
  }, []), C = r.useRef(g);
  r.useLayoutEffect(() => {
    C.current = g
  }), r.useLayoutEffect(() => {
    let e = {},
      t = 0;
    for (let i of f) {
      var n;
      let r = null != (n = m.current[i.id]) ? n : 0;
      e[i.id] = t, t += r + 8
    }(0, o.isEqual)(e, C.current) || b(e)
  }, [f]);
  let _ = f.map(e => ({
      message: e,
      height: m.current[e.id],
      y: g[e.id]
    })),
    O = (0, u.Yzy)(_, {
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
          translateY: h ? n : -(null != t ? t : 0) - 8,
          pointerEvents: "none"
        }
      }
    });
  return (0, i.jsx)(u.f6W, {
    theme: j.BRd.DARK,
    children: e => (0, i.jsx)("div", {
      className: a()(n, e),
      onMouseEnter: () => {
        p(true)
      },
      onMouseLeave: () => {
        p(false)
      },
      children: O((e, t) => (0, i.jsx)(s.animated.div, {
        ref: e => y(t.message.id, null != e ? e.offsetHeight : null),
        className: P.toastWrapper,
        style: e,
        children: (0, i.jsx)(Z, {
          message: t.message
        })
      }))
    })
  })
}