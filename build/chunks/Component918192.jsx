/** Chunk was on 86317 **/
/** chunk id: 918192, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Bw: () => x,
  ld: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk85448 = require("./85448.jsx"),
  Chunk994500 = require("./994500.js"),
  Chunk427262 = require("./427262.js"),
  Chunk312006 = require("./312006.js"),
  Chunk366098 = require("./366098.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk545058 = require("./545058.js");
let x = e => {
    let {
      channelId: t
    } = e;
    return (0, l.jsx)(m, {
      channelId: t
    })
  },
  m = e => {
    let {
      channelId: t
    } = e, n = (0, g.D3)(t), r = (0, g.Xk)(t);
    if (0 === n && 0 === r) return null;
    let c = e => {
      (0, s.jA)(e, e => {
        var n, r;
        return (0, l.jsx)(b, (n = function(e) {
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
      className: f.jC,
      children: [(0, l.jsx)(a.KTN, {
        size: "lg",
        color: i.A.unsafe_rawColors.RED_400.css
      }), (0, l.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: h.intl.string(h.t["P/KFXz"])
      }), (0, l.jsx)(a.DUT, {
        className: f.R5,
        onClick: c,
        children: h.intl.string(h.t.rUEjBe)
      })]
    }) : r > 0 ? (0, l.jsxs)("div", {
      className: f.jC,
      children: [(0, l.jsx)(a.G3N, {
        size: "lg"
      }), (0, l.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: h.intl.format(h.t.Ri3o33, {
          number: r
        })
      }), (0, l.jsx)(a.DUT, {
        className: f.R5,
        onClick: c,
        children: h.intl.string(h.t.rUEjBe)
      })]
    }) : (0, l.jsxs)("div", {
      className: f.jC,
      children: [(0, l.jsx)(a.KTN, {
        size: "lg",
        color: i.A.unsafe_rawColors.RED_400.css
      }), (0, l.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: h.intl.format(h.t["6Tcdt7"], {
          number: n
        })
      }), (0, l.jsx)(a.DUT, {
        className: f.R5,
        onClick: c,
        children: h.intl.string(h.t.rUEjBe)
      })]
    })
  },
  j = e => {
    let {
      user: t,
      showStatus: n,
      speaker: i,
      channelId: s
    } = e, g = (0, r.bG)([d.Ay], () => d.Ay.isModerator(t.id, s)), x = (0, r.bG)([o.A], () => o.A.isBlocked(t.id)), m = null;
    return n && (m = i ? h.intl.string(h.t.LqMmG2) : g ? h.intl.string(h.t.GMZqSi) : h.intl.string(h.t.suRApw)), (0, l.jsxs)("div", {
      className: f.kQ,
      children: [(0, l.jsx)(c.A, {
        src: t.getAvatarURL(null, 32),
        size: a._3J.SIZE_32,
        muted: false,
        deafen: false,
        speaking: false,
        ringing: false,
        renderIcon: i ? () => (0, l.jsx)(a.cNw, {
          size: "md",
          color: "currentColor",
          className: f.Kk
        }) : null
      }, t.id), (0, l.jsxs)("div", {
        className: f.eF,
        children: [(0, l.jsxs)("div", {
          className: f.Xh,
          children: [(0, l.jsx)(a.Text, {
            variant: n ? "text-md/normal" : "text-sm/normal",
            children: u.Ay.getName(t)
          }), (0, l.jsx)(a.Text, {
            variant: n ? "text-md/normal" : "text-sm/normal",
            color: "text-subtle",
            children: "#".concat(t.discriminator)
          })]
        }), (0, l.jsxs)("div", {
          className: f.Xh,
          children: [(0, l.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: x ? "text-feedback-critical" : "text-default",
            children: x ? h.intl.string(h.t["4bDptI"]) : h.intl.string(h.t.tFY5Zb)
          }), (0, l.jsxs)(a.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: ["| ", m]
          })]
        })]
      })]
    })
  },
  b = e => {
    let {
      channelId: t
    } = e, n = (0, g.mT)(t), r = (0, g.Iv)(t);
    return (0, l.jsx)(a.HOs, {
      className: f.kL,
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