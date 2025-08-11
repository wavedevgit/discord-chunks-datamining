/** Chunk was on 18417 **/
/** chunk id: 941848, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk458044 = require("./458044.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk895080 = require("./895080.js");

function c(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), a.forEach(function(e) {
      var a;
      a = n[e], e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = a
    })
  }
  return t
}

function g(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(t);
      n.push.apply(n, a)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}

function d(t) {
  let {
    user: e,
    tagId: n,
    title: r,
    messageCount: s,
    reactionCount: c,
    activeAgo: g,
    tags: d,
    attachment: m
  } = t, {
    name: u,
    avatarSrc: p
  } = e;
  return <div className={l.post}>{<div>{<div className={l.inline}>{<i.Text color={"header-primary"} variant={"text-xs/medium"} className={l.inline}>{<img src={p} alt={o.intl.string(o.t.lqaIxM)} width={16} height={16} />}{u}</i.Text>}{null != n && <a.Fragment>{<span className={l.bullet}>{"•"}</span>}{<i.Text color={"header-primary"} variant={"text-xxs/medium"} className={l.inlineTag}>{d[n]}</i.Text>}</a.Fragment>}</div>}{<i.X6q color={"header-primary"} variant={"heading-md/semibold"} className={l.title}>{r}</i.X6q>}{<div className={l.inline}>{<i.Text color={"header-secondary"} variant={"text-xs/medium"} className={l.alignCenter}>{<i.kBi size={"xs"} color={"currentColor"} className={l.icon} />}{s}</i.Text>}{c > 0 && <a.Fragment>{<span className={l.bullet}>{"•"}</span>}{<i.Text color={"header-secondary"} variant={"text-xs/medium"} className={l.alignCenter}>{<span role={"img"} aria-label={o.intl.string(o.t.gHp0Cw)} className={l.icon}>{"❤️"}</span>}{c}</i.Text>}</a.Fragment>}{<span className={l.bullet}>{"•"}</span>}{<i.Text color={"header-secondary"} variant={"text-xs/medium"}>{g}</i.Text>}</div>}</div>}{null != m && <img src={m} alt={o.intl.formatToPlainString(o.t.MJHFt7, {
        name: r
      })} className={l.attachment} />}</div>
}

function m(t) {
  let {
    author: e,
    content: n
  } = t, {
    name: r,
    isOP: s,
    avatarSrc: c
  } = e;
  return <div className={l.message}>{<img src={c} alt={o.intl.string(o.t.lqaIxM)} width={40} height={40} />}{<div>{<div className={l.inline}>{<i.Text color={"header-primary"} variant={"text-sm/semibold"}>{r}</i.Text>}{s && <span className={l.opTag}>{o.intl.string(o.t.fyE8sL)}</span>}</div>}{<i.Text color={"text-default"} variant={"text-sm/normal"}>{n}</i.Text>}</div>}</div>
}

function u(t) {
  let {
    title: e,
    messages: n,
    maxHeight: r
  } = t;
  return <div className={l.previewContainer} style={{
      maxHeight: r
    }} aria-hidden={true}><div className={l.preview}>{<i.kBi size={"md"} color={"currentColor"} className={l.forumPostIcon} />}{<i.X6q color={"header-primary"} variant={"heading-lg/semibold"} className={l.header}>{e}</i.X6q>}{<div className={l.messageContainer}>{n.map((t, e) => (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(m, c({}, t), e), 0 === e && (0, a.jsxs)("div", {
            children: [(0, a.jsx)("hr", {
              className: l.topSeparator
            }), (0, a.jsxs)("div", {
              className: l.actionBar,
              children: [(0, a.jsxs)(i.Text, {
                color: "text-brand",
                variant: "text-xs/medium",
                className: l.fakeReactions,
                children: [(0, a.jsx)("span", {
                  role: "img",
                  "aria-label": o.intl.string(o.t.gHp0Cw),
                  className: l.icon,
                  children: "❤️"
                }), "17"]
              }), (0, a.jsxs)(i.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                className: l.following,
                children: [(0, a.jsx)(i.Dkj, {
                  size: "xs",
                  color: "currentColor"
                }), o.intl.string(o.t["3aOv+v"])]
              })]
            }), (0, a.jsx)("hr", {
              className: l.bottomSeparator
            })]
          })]
        }))}</div>}{<div className={l.chatInput}><i.Text color={"text-muted"} variant={"text-sm/normal"}>{o.intl.string(o.t.YzpScX)}</i.Text></div>}</div></div>
}

function p(t) {
  let {
    id: e
  } = t, [n, o] = r.useState(0), m = r.useRef(null), {
    tags: p,
    posts: x,
    postPreview: h,
    ariaLabel: f
  } = (0, s.Z)(e);
  return r.useEffect(() => {
    o(0)
  }, [e]), r.useEffect(() => {
    var t;
    0 === n && (null == m || null == (t = m.current) ? true : t.clientHeight) != null && o(m.current.clientHeight - 40)
  }, [n]), <div className={l.container} role={"image"} aria-label={f}>{<div ref={m} className={l.browser} aria-hidden={true}>{<div className={l.tags}>{p.map((t, e) => (0, a.jsx)(i.Text, {
          color: "header-primary",
          variant: "text-xs/medium",
          className: l.tag,
          children: t
        }, e))}</div>}{<div className={l.posts}>{x.map((t, e) => (0, a.jsx)(d, g(c({}, t), {
          tags: p
        }), e))}</div>}</div>}{<u{...g(c({}, h), {
      maxHeight: n
    })} />}</div>
}