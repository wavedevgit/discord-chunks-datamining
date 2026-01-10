/** Chunk was on 81985 **/
/** chunk id: 219226, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk904245 = require("./904245.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk386725 = require("./386725.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk957730 = require("./957730.js"),
  Chunk25015 = require("./25015.jsx"),
  Chunk518950 = require("./518950.js"),
  Chunk618158 = require("./618158.jsx"),
  Chunk375954 = require("./375954.js"),
  Chunk585483 = require("./585483.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk743852 = require("./743852.js");
let _ = e => {
    let {
      channel: t,
      message: n,
      out: i = false,
      noAnimate: l = false
    } = e, s = (0, b.Z)(n, {
      hideSimpleEmbedContent: true,
      formatInline: false,
      noStyleAndInteraction: false,
      isInteracting: false,
      allowDevLinks: false,
      allowLinks: false,
      allowGameMentions: false,
      previewLinkTarget: false
    }), c = n.author, u = x.ZP.getName(c), d = (0, f.Z)({
      userId: c.id,
      guildId: t.guild_id
    }), {
      avatarSrc: p,
      avatarDecorationSrc: m
    } = (0, y.Z)({
      userId: c.id,
      guildId: t.guild_id,
      size: 48
    });
    return (0, r.jsxs)("div", {
      className: a()(S.message, {
        [S.out]: i,
        [S.noAnimate]: l
      }),
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(o.qEK, {
          src: p,
          avatarDecoration: m,
          size: o.EFr.SIZE_24,
          "aria-label": "User Avatar",
          isTyping: false
        })
      }), (0, r.jsx)(g.Z, {
        userName: u,
        displayNameStyles: d,
        effectDisplayType: h.F.STATIC,
        loop: true
      }), (0, r.jsxs)("div", {
        className: S.column,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          className: S.content,
          children: s.content
        }), n.attachments.length > 0 && (0, r.jsx)("div", {
          className: a()(S.row, S.gap),
          children: n.attachments.filter(e => {
            var t;
            return !e.spoiler && (null == (t = e.content_type) ? true : t.startsWith("image"))
          }).map(e => (0, r.jsx)("img", {
            src: e.url,
            width: 128,
            className: S.attachment,
            alt: E.intl.string(E.t.X4IxWL)
          }, e.id))
        })]
      })]
    })
  },
  I = e => {
    let {
      channel: t,
      idle: n,
      showChat: l
    } = e, f = i.useRef(new Set), [h, g] = i.useState([]), [b, y] = i.useState(0), x = i.useRef(null), E = i.useRef(false), [I, P] = i.useState(true), [Z, N] = i.useState(""), [T, A] = i.useState((0, d.JM)(Z));
    i.useEffect(() => {
      let e = f.current;
      return () => {
        e.size > 0 && [...e].forEach(e => clearTimeout(e))
      }
    }, []), i.useEffect(() => {
      let e = () => P(true),
        t = () => P(false);
      return j.S.subscribe(C.CkL.TEXTAREA_FOCUS, e), j.S.subscribe(C.CkL.TEXTAREA_BLUR, t), () => {
        j.S.unsubscribe(C.CkL.TEXTAREA_FOCUS, e), j.S.unsubscribe(C.CkL.TEXTAREA_BLUR, t)
      }
    }, []), i.useEffect(() => {
      let e = x.current;
      null != e && e.scrollTo({
        top: e.scrollHeight,
        behavior: "smooth"
      })
    }, [x]), i.useEffect(() => {
      let e = Date.now();
      g(O.Z.getMessages(t.id)._array.filter(t => t.timestamp.getTime() > e - 12e5).slice(false))
    }, [t]);
    let w = i.useCallback(e => {
        g(t => {
          if (!t.some(t => t.id === e.id)) {
            let n = [...t, e];
            return n.length > 50 && n.shift(), n
          }
          return t
        })
      }, []),
      R = i.useMemo(() => {
        let e = h[h.length - 1];
        if (null == e) returntrue;
        if (b + 100 > Date.now()) returnfalse;
        let t = Date.now() > e.timestamp.getTime() + 5e3;
        if (!t) {
          let e = setTimeout(() => {
            y(Date.now()), f.current.delete(e)
          }, 5500);
          f.current.add(e)
        }
        return t
      }, [h, b]);
    return i.useEffect(() => {
      let e = e => {
        let {
          channelId: n,
          message: r
        } = e, i = O.Z.getMessage(r.channel_id, r.id);
        if (n === t.id && (null == i ? true : i.state) === "SENT") {
          w(i);
          let e = setTimeout(() => {
            f.current.delete(e);
            let t = x.current;
            null != t && t.scrollTo({
              top: t.scrollHeight,
              behavior: "smooth"
            })
          }, 10);
          f.current.add(e)
        }
      };
      return s.Z.subscribe("MESSAGE_CREATE", e), () => s.Z.unsubscribe("MESSAGE_CREATE", e)
    }, []), (0, r.jsxs)("div", {
      className: a()(S.chatFlow, {
        [S.hidden]: !l
      }),
      onMouseEnter: () => E.current = true,
      onMouseLeave: () => E.current = false,
      onWheel: e => {
        e.preventDefault(), e.stopPropagation()
      },
      onScroll: e => {
        e.preventDefault(), e.stopPropagation()
      },
      children: [(0, r.jsx)(v.Z, {
        children: (0, r.jsx)("div", {
          className: a()(S.chat, {
            [S.idle]: n
          }),
          children: (0, r.jsx)(o.Ttm, {
            className: a()(S.history, {
              [S.idle]: R && n
            }),
            ref: x,
            children: h.map(e => (0, r.jsx)(_, {
              channel: t,
              message: e,
              noAnimate: true
            }, e.id))
          })
        })
      }), (0, r.jsx)(p.ZP, {
        className: a()(S.outerInput, {
          [S.idle]: n && 0 === Z.length
        }),
        innerClassName: S.input,
        type: u.Ie.HAVEN,
        channel: t,
        textValue: Z,
        richValue: T,
        placeholder: "Send message",
        onFocus: () => P(true),
        onBlur: () => P(false),
        focused: I,
        disabled: !l,
        showValueWhenDisabled: true,
        onChange: (e, t, n) => {
          t !== Z && (N(t), A(n))
        },
        onSubmit: async e => {
          let {
            value: n
          } = e, r = n.trim();
          if (0 === r.length) return {
            shouldClear: false,
            shouldRefocus: false
          };
          let i = m.ZP.parse(t, r);
          try {
            return await c.Z.sendMessage(t.id, i, true, {
              location: "Haven"
            }), N(""), A((0, d.JM)("")), {
              shouldClear: true,
              shouldRefocus: false
            }
          } catch (e) {
            return {
              shouldClear: false,
              shouldRefocus: false
            }
          }
        }
      })]
    })
  }