/** Chunk was on 82758 **/
/** chunk id: 320596, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ie: () => g,
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
  Chunk362303 = require("./362303.js");
let b = e => {
    let {
      channelId: t
    } = e;
    return (0, n.jsx)(h, {
      channelId: t
    })
  },
  h = e => {
    let {
      channelId: t
    } = e, r = (0, x._d)(t), l = (0, x.K3)(t);
    if (0 === r && 0 === l) return null;
    let c = e => {
      (0, a.vq)(e, e => {
        var r, l;
        return (0, n.jsx)(p, (r = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, e), l = l = {
          channelId: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r))
      }, {
        position: "left",
        align: "bottom"
      })
    };
    return r > 0 && l > 0 ? (0, n.jsxs)("div", {
      className: m.blockedNotice,
      children: [(0, n.jsx)(i.t6m, {
        size: "lg",
        color: s.Z.unsafe_rawColors.RED_400.css
      }), (0, n.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: j.intl.string(j.t["P/KFX1"])
      }), (0, n.jsx)(i.P3F, {
        className: m.blockedButton,
        onClick: c,
        children: j.intl.string(j.t.rUEjBQ)
      })]
    }) : l > 0 ? (0, n.jsxs)("div", {
      className: m.blockedNotice,
      children: [(0, n.jsx)(i.kZF, {
        size: "lg"
      }), (0, n.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: j.intl.format(j.t.Ri3o39, {
          number: l
        })
      }), (0, n.jsx)(i.P3F, {
        className: m.blockedButton,
        onClick: c,
        children: j.intl.string(j.t.rUEjBQ)
      })]
    }) : (0, n.jsxs)("div", {
      className: m.blockedNotice,
      children: [(0, n.jsx)(i.t6m, {
        size: "lg",
        color: s.Z.unsafe_rawColors.RED_400.css
      }), (0, n.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: j.intl.format(j.t["6Tcdt7"], {
          number: r
        })
      }), (0, n.jsx)(i.P3F, {
        className: m.blockedButton,
        onClick: c,
        children: j.intl.string(j.t.rUEjBQ)
      })]
    })
  },
  g = e => {
    let {
      user: t,
      showStatus: r,
      speaker: s,
      channelId: a
    } = e, x = (0, l.e7)([u.ZP], () => u.ZP.isModerator(t.id, a)), b = (0, l.e7)([o.Z], () => o.Z.isBlocked(t.id)), h = null;
    return r && (h = s ? j.intl.string(j.t.LqMmGx) : x ? j.intl.string(j.t.GMZqSk) : j.intl.string(j.t.suRAp6)), (0, n.jsxs)("div", {
      className: m.user,
      children: [(0, n.jsx)(c.Z, {
        src: t.getAvatarURL(null, 32),
        size: i.EFr.SIZE_32,
        muted: false,
        deafen: false,
        speaking: false,
        ringing: false,
        renderIcon: s ? () => (0, n.jsx)(i.S6n, {
          size: "md",
          color: "currentColor",
          className: m.icon
        }) : null
      }, t.id), (0, n.jsxs)("div", {
        className: m.userInfo,
        children: [(0, n.jsxs)("div", {
          className: m.username,
          children: [(0, n.jsx)(i.Text, {
            variant: r ? "text-md/normal" : "text-sm/normal",
            children: d.ZP.getName(t)
          }), (0, n.jsx)(i.Text, {
            variant: r ? "text-md/normal" : "text-sm/normal",
            color: "text-secondary",
            children: "#".concat(t.discriminator)
          })]
        }), (0, n.jsxs)("div", {
          className: m.username,
          children: [(0, n.jsx)(i.Text, {
            variant: "text-xs/normal",
            color: b ? "text-danger" : "text-default",
            children: b ? j.intl.string(j.t["4bDptL"]) : j.intl.string(j.t.tFY5ZW)
          }), (0, n.jsxs)(i.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: ["| ", h]
          })]
        })]
      })]
    })
  },
  p = e => {
    let {
      channelId: t
    } = e, r = (0, x.z)(t), l = (0, x.bA)(t);
    return (0, n.jsx)(i.Ttm, {
      className: m.container,
      children: [...r, ...l].map(e => {
        let {
          user: r
        } = e;
        return (0, n.jsx)(g, {
          user: r,
          channelId: t
        }, r.id)
      })
    })
  }