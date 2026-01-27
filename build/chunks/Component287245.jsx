/** Chunk was on 41727 **/
/** chunk id: 287245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk843472 = require("./843472.js"),
  Chunk355622 = require("./355622.js"),
  Chunk408018 = require("./408018.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk609425 = require("./609425.js"),
  Chunk922301 = require("./922301.js"),
  Chunk750112 = require("./750112.jsx"),
  Chunk451909 = require("./451909.js"),
  Chunk538355 = require("./538355.jsx"),
  Chunk854627 = require("./854627.js"),
  Chunk447404 = require("./447404.jsx"),
  Chunk320501 = require("./320501.js"),
  Chunk203982 = require("./203982.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk65309 = require("./65309.js");
let C = e => {
    let {
      channel: t,
      message: n,
      out: l = false,
      noAnimate: i = false
    } = e, o = (0, b.A)(n, {
      hideSimpleEmbedContent: true,
      formatInline: false,
      noStyleAndInteraction: false,
      isInteracting: false,
      allowDevLinks: false,
      allowLinks: false,
      allowGameMentions: false,
      previewLinkTarget: false
    }), c = n.author, u = j.Ay.getName(c), d = (0, h.A)({
      userId: c.id,
      guildId: t.guild_id
    }), {
      avatarSrc: p,
      avatarDecorationSrc: m
    } = (0, A.A)({
      userId: c.id,
      guildId: t.guild_id,
      size: 48
    });
    return (0, r.jsxs)("div", {
      className: s()(E.iU, {
        [E.FD]: l,
        [E.Tf]: i
      }),
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(a.euF, {
          src: p,
          avatarDecoration: m,
          size: a._3J.SIZE_24,
          "aria-label": "User Avatar",
          isTyping: false
        })
      }), (0, r.jsx)(g.A, {
        userName: u,
        displayNameStyles: d,
        effectDisplayType: f.G.STATIC,
        loop: true
      }), (0, r.jsxs)("div", {
        className: E.fi,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          className: E.Qs,
          children: o.content
        }), n.attachments.length > 0 && (0, r.jsx)("div", {
          className: s()(E.nM, E.rQ),
          children: n.attachments.filter(e => {
            var t;
            return !e.spoiler && (null == (t = e.content_type) ? true : t.startsWith("image"))
          }).map(e => (0, r.jsx)("img", {
            src: e.url,
            width: 128,
            className: E.oh,
            alt: x.intl.string(x.t.X4IxWL)
          }, e.id))
        })]
      })]
    })
  },
  S = e => {
    let {
      channel: t,
      idle: n,
      showChat: i
    } = e, h = l.useRef(new Set), [f, g] = l.useState([]), [b, A] = l.useState(0), j = l.useRef(null), x = l.useRef(false), [S, I] = l.useState(true), [N, T] = l.useState(""), [P, w] = l.useState((0, d.x7)(N));
    l.useEffect(() => {
      let e = h.current;
      return () => {
        e.size > 0 && [...e].forEach(e => clearTimeout(e))
      }
    }, []), l.useEffect(() => {
      let e = () => I(true),
        t = () => I(false);
      return O._.subscribe(v.jej.TEXTAREA_FOCUS, e), O._.subscribe(v.jej.TEXTAREA_BLUR, t), () => {
        O._.unsubscribe(v.jej.TEXTAREA_FOCUS, e), O._.unsubscribe(v.jej.TEXTAREA_BLUR, t)
      }
    }, []), l.useEffect(() => {
      let e = j.current;
      null != e && e.scrollTo({
        top: e.scrollHeight,
        behavior: "smooth"
      })
    }, [j]), l.useEffect(() => {
      let e = Date.now();
      g(_.A.getMessages(t.id)._array.filter(t => t.timestamp.getTime() > e - 12e5).slice(false))
    }, [t]);
    let R = l.useCallback(e => {
        g(t => {
          if (!t.some(t => t.id === e.id)) {
            let n = [...t, e];
            return n.length > 50 && n.shift(), n
          }
          return t
        })
      }, []),
      D = l.useMemo(() => {
        let e = f[f.length - 1];
        if (null == e) returntrue;
        if (b + 100 > Date.now()) returnfalse;
        let t = Date.now() > e.timestamp.getTime() + 5e3;
        if (!t) {
          let e = setTimeout(() => {
            A(Date.now()), h.current.delete(e)
          }, 5500);
          h.current.add(e)
        }
        return t
      }, [f, b]);
    return l.useEffect(() => {
      let e = e => {
        let {
          channelId: n,
          message: r
        } = e, l = _.A.getMessage(r.channel_id, r.id);
        if (n === t.id && (null == l ? true : l.state) === "SENT") {
          R(l);
          let e = setTimeout(() => {
            h.current.delete(e);
            let t = j.current;
            null != t && t.scrollTo({
              top: t.scrollHeight,
              behavior: "smooth"
            })
          }, 10);
          h.current.add(e)
        }
      };
      return o.h.subscribe("MESSAGE_CREATE", e), () => o.h.unsubscribe("MESSAGE_CREATE", e)
    }, []), (0, r.jsxs)("div", {
      className: s()(E.X2, {
        [E.R]: !i
      }),
      onMouseEnter: () => x.current = true,
      onMouseLeave: () => x.current = false,
      onWheel: e => {
        e.preventDefault(), e.stopPropagation()
      },
      onScroll: e => {
        e.preventDefault(), e.stopPropagation()
      },
      children: [(0, r.jsx)(y.A, {
        children: (0, r.jsx)("div", {
          className: s()(E.TE, {
            [E.N7]: n
          }),
          children: (0, r.jsx)(a.HOs, {
            className: s()(E.b6, {
              [E.N7]: D && n
            }),
            ref: j,
            children: f.map(e => (0, r.jsx)(C, {
              channel: t,
              message: e,
              noAnimate: true
            }, e.id))
          })
        })
      }), (0, r.jsx)(p.Ay, {
        className: s()(E.CQ, {
          [E.N7]: n && 0 === N.length
        }),
        innerClassName: E.hF,
        type: u.oU.HAVEN,
        channel: t,
        textValue: N,
        richValue: P,
        placeholder: "Send message",
        onFocus: () => I(true),
        onBlur: () => I(false),
        focused: S,
        disabled: !i,
        showValueWhenDisabled: true,
        onChange: (e, t, n) => {
          t !== N && (T(t), w(n))
        },
        onSubmit: async e => {
          let {
            value: n
          } = e, r = n.trim();
          if (0 === r.length) return {
            shouldClear: false,
            shouldRefocus: false
          };
          let l = m.Ay.parse(t, r);
          try {
            return await c.A.sendMessage(t.id, l, true, {
              location: "Haven"
            }), T(""), w((0, d.x7)("")), {
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