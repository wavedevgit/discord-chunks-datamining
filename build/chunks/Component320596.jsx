/** Chunk was on 24753 **/
/** chunk id: 320596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ie: () => j,
  mv: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    return (0, l.jsx)(f, {
      channelId: t
    })
  },
  f = e => {
    let {
      channelId: t
    } = e, n = (0, g._d)(t), r = (0, g.K3)(t);
    if (0 === n && 0 === r) return null;
    let c = e => {
      (0, s.vq)(e, e => {
        var n, r;
        return (0, l.jsx)(h, (n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({}, e), r = r = {
          channelId: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n))
      }, {
        position: "left",
        align: "bottom"
      })
    };
    return n > 0 && r > 0 ? (0, l.jsxs)("div", {
      className: x.blockedNotice,
      children: [(0, l.jsx)(a.t6m, {
        size: "lg",
        color: i.Z.unsafe_rawColors.RED_400.css
      }), (0, l.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: m.intl.string(m.t["P/KFXz"])
      }), (0, l.jsx)(a.P3F, {
        className: x.blockedButton,
        onClick: c,
        children: m.intl.string(m.t.rUEjBe)
      })]
    }) : r > 0 ? (0, l.jsxs)("div", {
      className: x.blockedNotice,
      children: [(0, l.jsx)(a.kZF, {
        size: "lg"
      }), (0, l.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: m.intl.format(m.t.Ri3o33, {
          number: r
        })
      }), (0, l.jsx)(a.P3F, {
        className: x.blockedButton,
        onClick: c,
        children: m.intl.string(m.t.rUEjBe)
      })]
    }) : (0, l.jsxs)("div", {
      className: x.blockedNotice,
      children: [(0, l.jsx)(a.t6m, {
        size: "lg",
        color: i.Z.unsafe_rawColors.RED_400.css
      }), (0, l.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: m.intl.format(m.t["6Tcdt7"], {
          number: n
        })
      }), (0, l.jsx)(a.P3F, {
        className: x.blockedButton,
        onClick: c,
        children: m.intl.string(m.t.rUEjBe)
      })]
    })
  },
  j = e => {
    let {
      user: t,
      showStatus: n,
      speaker: i,
      channelId: s
    } = e, g = (0, r.e7)([d.ZP], () => d.ZP.isModerator(t.id, s)), b = (0, r.e7)([o.Z], () => o.Z.isBlocked(t.id)), f = null;
    return n && (f = i ? m.intl.string(m.t.LqMmG2) : g ? m.intl.string(m.t.GMZqSi) : m.intl.string(m.t.suRApw)), (0, l.jsxs)("div", {
      className: x.user,
      children: [(0, l.jsx)(c.Z, {
        src: t.getAvatarURL(null, 32),
        size: a.EFr.SIZE_32,
        muted: false,
        deafen: false,
        speaking: false,
        ringing: false,
        renderIcon: i ? () => (0, l.jsx)(a.S6n, {
          size: "md",
          color: "currentColor",
          className: x.icon
        }) : null
      }, t.id), (0, l.jsxs)("div", {
        className: x.userInfo,
        children: [(0, l.jsxs)("div", {
          className: x.username,
          children: [(0, l.jsx)(a.Text, {
            variant: n ? "text-md/normal" : "text-sm/normal",
            children: u.ZP.getName(t)
          }), (0, l.jsx)(a.Text, {
            variant: n ? "text-md/normal" : "text-sm/normal",
            color: "text-subtle",
            children: "#".concat(t.discriminator)
          })]
        }), (0, l.jsxs)("div", {
          className: x.username,
          children: [(0, l.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: b ? "text-feedback-critical" : "text-default",
            children: b ? m.intl.string(m.t["4bDptI"]) : m.intl.string(m.t.tFY5Zb)
          }), (0, l.jsxs)(a.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: ["| ", f]
          })]
        })]
      })]
    })
  },
  h = e => {
    let {
      channelId: t
    } = e, n = (0, g.z)(t), r = (0, g.bA)(t);
    return (0, l.jsx)(a.Ttm, {
      className: x.container,
      children: [...n, ...r].map(e => {
        let {
          user: n
        } = e;
        return (0, l.jsx)(j, {
          user: n,
          channelId: t
        }, n.id)
      })
    })
  }