/** Chunk was on 86317 **/
/** chunk id: 918192, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Bw: () => m,
  ld: () => f
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
let m = e => {
    let {
      channelId: t
    } = e;
    return (0, l.jsx)(h, {
      channelId: t
    })
  },
  h = e => {
    let {
      channelId: t
    } = e, n = (0, x.D3)(t), r = (0, x.Xk)(t);
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
      className: j.jC,
      children: [(0, l.jsx)(a.KTN, {
        size: "lg",
        color: i.A.unsafe_rawColors.RED_400.css
      }), (0, l.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: g.intl.string(g.t["P/KFXz"])
      }), (0, l.jsx)(a.DUT, {
        className: j.R5,
        onClick: c,
        children: g.intl.string(g.t.rUEjBe)
      })]
    }) : r > 0 ? (0, l.jsxs)("div", {
      className: j.jC,
      children: [(0, l.jsx)(a.G3N, {
        size: "lg"
      }), (0, l.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: g.intl.format(g.t.Ri3o33, {
          number: r
        })
      }), (0, l.jsx)(a.DUT, {
        className: j.R5,
        onClick: c,
        children: g.intl.string(g.t.rUEjBe)
      })]
    }) : (0, l.jsxs)("div", {
      className: j.jC,
      children: [(0, l.jsx)(a.KTN, {
        size: "lg",
        color: i.A.unsafe_rawColors.RED_400.css
      }), (0, l.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: g.intl.format(g.t["6Tcdt7"], {
          number: n
        })
      }), (0, l.jsx)(a.DUT, {
        className: j.R5,
        onClick: c,
        children: g.intl.string(g.t.rUEjBe)
      })]
    })
  },
  f = e => {
    let {
      user: t,
      showStatus: n,
      speaker: i,
      channelId: s
    } = e, x = (0, r.bG)([d.Ay], () => d.Ay.isModerator(t.id, s)), m = (0, r.bG)([o.A], () => o.A.isBlocked(t.id)), h = null;
    return n && (h = i ? g.intl.string(g.t.LqMmG2) : x ? g.intl.string(g.t.GMZqSi) : g.intl.string(g.t.suRApw)), (0, l.jsxs)("div", {
      className: j.kQ,
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
          className: j.Kk
        }) : null
      }, t.id), (0, l.jsxs)("div", {
        className: j.eF,
        children: [(0, l.jsxs)("div", {
          className: j.Xh,
          children: [(0, l.jsx)(a.Text, {
            variant: n ? "text-md/normal" : "text-sm/normal",
            children: u.Ay.getName(t)
          }), (0, l.jsx)(a.Text, {
            variant: n ? "text-md/normal" : "text-sm/normal",
            color: "text-subtle",
            children: "#".concat(t.discriminator)
          })]
        }), (0, l.jsxs)("div", {
          className: j.Xh,
          children: [(0, l.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: m ? "text-feedback-critical" : "text-default",
            children: m ? g.intl.string(g.t["4bDptI"]) : g.intl.string(g.t.tFY5Zb)
          }), (0, l.jsxs)(a.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: ["| ", h]
          })]
        })]
      })]
    })
  },
  b = e => {
    let {
      channelId: t
    } = e, n = (0, x.mT)(t), r = (0, x.Iv)(t);
    return (0, l.jsx)(a.HOs, {
      className: j.kL,
      children: [...n, ...r].map(e => {
        let {
          user: n
        } = e;
        return (0, l.jsx)(f, {
          user: n,
          channelId: t
        }, n.id)
      })
    })
  }