/** Chunk was on 84686 **/
/** chunk id: 320596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ie: () => h,
  mv: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk584511 = require("./584511.js"),
  Chunk699516 = require("./699516.js"),
  Chunk51144 = require("./51144.js"),
  Chunk88751 = require("./88751.js"),
  Chunk930180 = require("./930180.js"),
  Chunk388032 = require("./388032.js"),
  Chunk193132 = require("./193132.js");
let j = e => {
    let {
      channelId: t
    } = e;
    return <p channelId={t} />
  },
  p = e => {
    let {
      channelId: t
    } = e, n = (0, b._d)(t), o = (0, b.K3)(t);
    if (0 === n && 0 === o) return null;
    let i = e => {
      (0, a.vq)(e, e => {
        var n, o;
        return <g{...n = function(e) {
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
        }({}, e), o = o = {
          channelId: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
        }), n} />
      }, {
        position: "left",
        align: "bottom"
      })
    };
    return n > 0 && o > 0 ? <div className={x.blockedNotice}>{<c.t6m size={"lg"} color={s.Z.unsafe_rawColors.RED_400.css} />}{<c.Text variant={"text-xs/normal"} color={"header-secondary"}>{m.intl.string(m.t["P/KFX1"])}</c.Text>}{<c.P3F className={x.blockedButton} onClick={i}>{m.intl.string(m.t.rUEjBQ)}</c.P3F>}</div> : o > 0 ? <div className={x.blockedNotice}>{<c.kZF size={"lg"} />}{<c.Text variant={"text-xs/normal"} color={"header-secondary"}>{m.intl.format(m.t.Ri3o39, {
          number: o
        })}</c.Text>}{<c.P3F className={x.blockedButton} onClick={i}>{m.intl.string(m.t.rUEjBQ)}</c.P3F>}</div> : <div className={x.blockedNotice}>{<c.t6m size={"lg"} color={s.Z.unsafe_rawColors.RED_400.css} />}{<c.Text variant={"text-xs/normal"} color={"header-secondary"}>{m.intl.format(m.t["6Tcdt7"], {
          number: n
        })}</c.Text>}{<c.P3F className={x.blockedButton} onClick={i}>{m.intl.string(m.t.rUEjBQ)}</c.P3F>}</div>
  },
  h = e => {
    let {
      user: t,
      showStatus: n,
      speaker: s,
      channelId: a
    } = e, b = (0, o.e7)([u.ZP], () => u.ZP.isModerator(t.id, a)), j = (0, o.e7)([l.Z], () => l.Z.isBlocked(t.id)), p = null;
    return n && (p = s ? m.intl.string(m.t.LqMmGx) : b ? m.intl.string(m.t.GMZqSk) : m.intl.string(m.t.suRAp6)), <div className={x.user}>{<i.Z src={t.getAvatarURL(null, 32)} size={c.EFr.SIZE_32} muted={false} deafen={false} speaking={false} ringing={false} renderIcon={s ? () => (0, r.jsx)(c.S6n, {
          size: "md",
          color: "currentColor",
          className: x.icon
        }) : null} />}{<div className={x.userInfo}>{<div className={x.username}>{<c.Text variant={n ? "text-md/normal" : "text-sm/normal"}>{d.ZP.getName(t)}</c.Text>}{<c.Text variant={n ? "text-md/normal" : "text-sm/normal"} color={"text-secondary"}>{"#".concat(t.discriminator)}</c.Text>}</div>}{<div className={x.username}>{<c.Text variant={"text-xs/normal"} color={j ? "text-danger" : "text-default"}>{j ? m.intl.string(m.t["4bDptL"]) : m.intl.string(m.t.tFY5ZW)}</c.Text>}{<c.Text variant={"text-xs/normal"} color={"text-muted"}>{"| "}{p}</c.Text>}</div>}</div>}</div>
  },
  g = e => {
    let {
      channelId: t
    } = e, n = (0, b.z)(t), o = (0, b.bA)(t);
    return <c.Ttm className={x.container}>{[...n, ...o].map(e => {
        let {
          user: n
        } = e;
        return (0, r.jsx)(h, {
          user: n,
          channelId: t
        }, n.id)
      })}</c.Ttm>
  }