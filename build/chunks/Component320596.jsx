/** Chunk was on 24753 **/
/** chunk id: 320596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ie: () => f,
  mv: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk584511 = require("./584511.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk51144 = require("./51144.js"),
  Chunk88751 = require("./88751.js"),
  Chunk930180 = require("./930180.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk165393 = require("./165393.js");
let b = e => {
    let {
      channelId: t
    } = e;
    return (0, r.jsx)(h, {
      channelId: t
    })
  },
  h = e => {
    let {
      channelId: t
    } = e, n = (0, x._d)(t), l = (0, x.K3)(t);
    if (0 === n && 0 === l) return null;
    let c = e => {
      (0, s.vq)(e, e => {
        var n, l;
        return (0, r.jsx)(j, (n = function(e) {
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
        }({}, e), l = l = {
          channelId: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      }, {
        position: "left",
        align: "bottom"
      })
    };
    return n > 0 && l > 0 ? (0, r.jsxs)("div", {
      className: m.blockedNotice,
      children: [(0, r.jsx)(a.t6m, {
        size: "lg",
        color: i.Z.unsafe_rawColors.RED_400.css
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: g.intl.string(g.t["P/KFX1"])
      }), (0, r.jsx)(a.P3F, {
        className: m.blockedButton,
        onClick: c,
        children: g.intl.string(g.t.rUEjBQ)
      })]
    }) : l > 0 ? (0, r.jsxs)("div", {
      className: m.blockedNotice,
      children: [(0, r.jsx)(a.kZF, {
        size: "lg"
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: g.intl.format(g.t.Ri3o39, {
          number: l
        })
      }), (0, r.jsx)(a.P3F, {
        className: m.blockedButton,
        onClick: c,
        children: g.intl.string(g.t.rUEjBQ)
      })]
    }) : (0, r.jsxs)("div", {
      className: m.blockedNotice,
      children: [(0, r.jsx)(a.t6m, {
        size: "lg",
        color: i.Z.unsafe_rawColors.RED_400.css
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: g.intl.format(g.t["6Tcdt7"], {
          number: n
        })
      }), (0, r.jsx)(a.P3F, {
        className: m.blockedButton,
        onClick: c,
        children: g.intl.string(g.t.rUEjBQ)
      })]
    })
  },
  f = e => {
    let {
      user: t,
      showStatus: n,
      speaker: i,
      channelId: s
    } = e, x = (0, l.e7)([d.ZP], () => d.ZP.isModerator(t.id, s)), b = (0, l.e7)([o.Z], () => o.Z.isBlocked(t.id)), h = null;
    return n && (h = i ? g.intl.string(g.t.LqMmGx) : x ? g.intl.string(g.t.GMZqSk) : g.intl.string(g.t.suRAp6)), (0, r.jsxs)("div", {
      className: m.user,
      children: [(0, r.jsx)(c.Z, {
        src: t.getAvatarURL(null, 32),
        size: a.EFr.SIZE_32,
        muted: false,
        deafen: false,
        speaking: false,
        ringing: false,
        renderIcon: i ? () => (0, r.jsx)(a.S6n, {
          size: "md",
          color: "currentColor",
          className: m.icon
        }) : null
      }, t.id), (0, r.jsxs)("div", {
        className: m.userInfo,
        children: [(0, r.jsxs)("div", {
          className: m.username,
          children: [(0, r.jsx)(a.Text, {
            variant: n ? "text-md/normal" : "text-sm/normal",
            children: u.ZP.getName(t)
          }), (0, r.jsx)(a.Text, {
            variant: n ? "text-md/normal" : "text-sm/normal",
            color: "text-secondary",
            children: "#".concat(t.discriminator)
          })]
        }), (0, r.jsxs)("div", {
          className: m.username,
          children: [(0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: b ? "text-danger" : "text-default",
            children: b ? g.intl.string(g.t["4bDptL"]) : g.intl.string(g.t.tFY5ZW)
          }), (0, r.jsxs)(a.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: ["| ", h]
          })]
        })]
      })]
    })
  },
  j = e => {
    let {
      channelId: t
    } = e, n = (0, x.z)(t), l = (0, x.bA)(t);
    return (0, r.jsx)(a.Ttm, {
      className: m.container,
      children: [...n, ...l].map(e => {
        let {
          user: n
        } = e;
        return (0, r.jsx)(f, {
          user: n,
          channelId: t
        }, n.id)
      })
    })
  }