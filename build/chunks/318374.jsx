/** Chunk was on web.js **/
/** chunk id: 318374, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk751688 = require("./751688.js"),
  Chunk5192 = require("./5192.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.js"),
  Chunk223390 = require("./223390.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk481060.EFr.SIZE_24;
  switch (module) {
    case Chunk481060.EFr.SIZE_16:
      return Chunk223390.size16;
    case Chunk481060.EFr.SIZE_20:
      return Chunk223390.size20;
    case Chunk481060.EFr.SIZE_24:
    default:
      return Chunk223390.size24
  }
}

function O() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk481060.EFr.SIZE_24;
  switch (module) {
    case Chunk481060.EFr.SIZE_16:
    case Chunk481060.EFr.SIZE_20:
      return "text-xxs/semibold";
    case Chunk481060.EFr.SIZE_24:
    default:
      return "text-xs/medium"
  }
}

function v(e) {
  let {
    users: t,
    maxUsers: o,
    guildId: s,
    channelId: m,
    className: E,
    size: v = c.EFr.SIZE_24,
    overflowCountVariant: I,
    overflowCountColor: T = "interactive-normal",
    overflowCountClassName: S,
    hideOverflowCount: A = false,
    disableUsernameTooltip: N = false,
    disableUserPopout: C = false,
    onClickOverflow: R,
    onFocusOverflow: P,
    onUserClick: w,
    onUserPopoutRequestClose: D,
    "aria-label": L,
    "aria-labelledby": x,
    "aria-hidden": M
  } = e, [k, j] = i.useState(false), U = y(v), G = i.useRef(null), B = t.length - o, Z = B + 1, F = B > 0 && !A && !M, V = () => <c.VqE className={h.popoutWrapper} aria-label={L} aria-labelledby={x}><c.Ttm className={h.scroller}>{t.map(e => (0, r.jsx)(d.Z, {
        user: e,
        guildId: s,
        channelId: m,
        nick: f.ZP.getNickname(s, m, e),
        disablePopout: "function" == typeof C ? C(e.id) : C,
        onClick: w,
        onPopoutRequestClose: () => {
          j(false), null == D || D()
        },
        onContextMenu: t => (0, u.jW)(t, async () => {
          let {
            default: t
          } = await Promise.all([n.e("79695"), n.e("69220")]).then(n.bind(n, 881351));
          return n => (0, r.jsx)(t, b(g({}, n), {
            user: e,
            guildId: s,
            channelId: m
          }))
        }, {
          onClose: () => j(false)
        })
      }, e.id))}</c.Ttm></c.VqE>, H = () => {
    let e = F ? o - 1 : Math.min(t.length, o),
      n = e - 1,
      i = l()(t).take(e).map((e, t) => {
        let i = f.ZP.getNickname(s, m, e),
          o = null != i ? i : _.ZP.getName(e),
          l = t === n && !F,
          u = a()(h.avatar, U, l && h.isLast),
          d = <c.qEK src={e.getAvatarURL(s, 24)} size={v} aria-hidden={true} />;
        return <li className={u}>{N ? (0, r.jsx)("span", {
            role: "img",
            "aria-label": o,
            children: d
          }) : (0, r.jsx)(c.ua7, {
            text: o,
            "aria-label": false,
            children: e => (0, r.jsx)("span", b(g({}, e), {
              role: "img",
              "aria-label": o,
              children: d
            }))
          })}</li>
      }).value();
    return <ul className={h.avatars}>{i}</ul>
  }, Y = () => {
    if (!F) return null;
    let e = null != I ? I : O(v);
    return <c.yRy targetElementRef={G} renderPopout={V} shouldShow={k} position={"bottom"} onRequestClose={() => j(false)}>{t => (0, r.jsx)(c.P3F, b(g({}, t), {
        innerRef: G,
        className: a()(h.overflow, U, S),
        onFocus: P,
        onClick: e => {
          null == R || R(e), j(true)
        },
        "aria-label": p.intl.formatToPlainString(p.t.R8Z8Qk, {
          count: Z
        }),
        children: (0, r.jsx)(c.Text, {
          variant: e,
          color: T,
          children: Z > 99 ? ">99" : "+".concat(Z)
        })
      }))}</c.yRy>
  };
  return t.length <= 0 ? null : <div role={"group"} aria-label={L} aria-labelledby={x} className={a()(E, h.avatars)} aria-hidden={M}>{H()}{Y()}</div>
}