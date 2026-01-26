/** Chunk was on 67564 **/
/** chunk id: 226694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P,
  s: () => N
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk686956 = require("./686956.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk101555 = require("./101555.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk714991 = require("./714991.jsx"),
  Chunk776231 = require("./776231.js"),
  Chunk345942 = require("./345942.js"),
  Chunk71393 = require("./71393.js"),
  Chunk486020 = require("./486020.js"),
  Chunk860689 = require("./860689.js"),
  Chunk352123 = require("./352123.js"),
  Chunk682557 = require("./682557.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk856528 = require("./856528.js"),
  Chunk166382 = require("./166382.js");

function S(e) {
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
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = Chunk64700.memo(function(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsxs)(c.DUT, {
    onClick: t,
    className: E.Eo,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: C
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/semibold",
      color: "text-strong",
      className: E.Kk,
      children: x.intl.string(x.t.H9jxS1)
    })]
  })
});

function T(e) {
  let {
    entry: t
  } = e, [i, a] = l.useState(false), u = l.useRef(null), {
    canEdit: d
  } = (0, O.A)(t);
  return (0, r.jsx)("div", {
    className: s()(E.fc, {
      [E.QX]: i
    }),
    children: (0, r.jsxs)(h.Ay, {
      children: [d ? (0, r.jsx)(o.m, {
        text: x.intl.string(x.t.XnuOvN),
        children: (0, r.jsx)(h.$n, {
          onClick: () => {
            (0, c.mMO)(async () => {
              let {
                default: e
              } = await n.e("88869").then(n.bind(n, 201700));
              return n => (0, r.jsx)(e, I(S({}, n), {
                entry: t
              }))
            })
          },
          "aria-label": x.intl.string(x.t.XnuOvN),
          children: (0, r.jsx)(c.R2l, {
            size: "xs",
            color: "currentColor",
            className: E.IQ
          })
        })
      }) : null, (0, r.jsx)(j.A, {
        targetElementRef: u,
        onRequestOpen: () => a(true),
        onRequestClose: () => a(false),
        entry: t,
        hideEditButton: true,
        children: e => {
          let {
            onClick: t
          } = e, n = function(e, t) {
            if (null == e) return {};
            var n, r, l, i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
              for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
              return i
            }
            if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                  i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
              }(e, t), Object.getOwnPropertySymbols)
              for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
          }(e, ["onClick"]);
          return (0, r.jsx)(o.m, {
            text: x.intl.string(x.t["UKOtz+"]),
            children: (0, r.jsx)(h.$n, I(S({}, n), {
              onClick: e => {
                t(e)
              },
              ref: u,
              "aria-label": x.intl.string(x.t["UKOtz+"]),
              children: (0, r.jsx)(c.jNK, {
                size: "md",
                color: "currentColor",
                className: E.IQ
              })
            }))
          })
        }
      })]
    })
  })
}
let P = Chunk64700.memo(function(e) {
  var t;
  let {
    entry: i
  } = e, [s, o] = l.useState(false), h = null != (0, a.bG)([A.A], () => A.A.getGuild(i.guildId)), O = async () => {
    o(true);
    try {
      h ? (0, b.u)(i.guildId) : await d.A.joinGuild(i.guildId, {
        source: v.Q4z.DIRECTORY_ENTRY
      })
    } finally {
      o(false)
    }
  }, j = y.Ay.getGuildSplashURL({
    id: i.guildId,
    splash: i.splash,
    size: 300 * (0, m.mZ)()
  }), C = null != (t = y.Ay.getGuildIconURL({
    id: i.guildId,
    icon: i.icon,
    size: 40
  })) ? t : true, N = x.intl.string(x.t.VJlc0S);
  return h && (N = x.intl.string(x.t.cqWE2Z)), (0, r.jsxs)("div", {
    className: E.Nr,
    onContextMenu: e => {
      (0, u.L3)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 283354));
        return t => (0, r.jsx)(e, I(S({}, t), {
          entry: i
        }))
      })
    },
    children: [(0, r.jsxs)("div", {
      className: E.MY,
      children: [(0, r.jsx)("div", {
        className: E.Yi,
        children: null != j && (0, r.jsx)("img", {
          src: j,
          alt: "",
          className: E.j0
        })
      }), (0, r.jsx)("div", {
        className: E.$f,
        children: (0, r.jsx)(p.Ay, {
          mask: p.Ay.Masks.SQUIRCLE,
          width: 48,
          height: 48,
          children: (0, r.jsx)("div", {
            className: E.SA,
            children: (0, r.jsx)(f.A, {
              className: E.rZ,
              iconSrc: C,
              guild: (0, _.xi)(i),
              size: f.A.Sizes.MEDIUM,
              active: true
            })
          })
        })
      })]
    }), (0, r.jsxs)("div", {
      className: E.OA,
      children: [(0, r.jsxs)("div", {
        className: E.DD,
        children: [(0, r.jsx)(g.A, {
          className: E.n2,
          guild: i
        }), (0, r.jsx)(c.Text, {
          className: E.J5,
          variant: "heading-md/semibold",
          color: "text-strong",
          children: i.name
        })]
      }), (0, r.jsx)(c.Text, {
        className: E.h_,
        variant: "text-sm/normal",
        color: "text-default",
        children: i.description
      }), (0, r.jsxs)("div", {
        className: E.Fj,
        children: [null != i.approximatePresenceCount && (0, r.jsxs)("div", {
          className: E.Kl,
          children: [(0, r.jsx)("div", {
            className: E.JX
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: x.intl.format(x.t["LC+S+m"], {
              membersOnline: i.approximatePresenceCount
            })
          })]
        }), null != i.approximateMemberCount && (0, r.jsxs)("div", {
          className: E.Kl,
          children: [(0, r.jsx)("div", {
            className: E.Li
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: x.intl.format(x.t.zRl6XR, {
              count: i.approximateMemberCount
            })
          })]
        })]
      }), (0, r.jsx)("div", {
        className: E.PD,
        children: (0, r.jsx)(c.Button, {
          loading: s,
          variant: h ? "secondary" : "active",
          onClick: O,
          text: N,
          fullWidth: true
        })
      })]
    }), (0, r.jsx)(T, {
      entry: i
    })]
  })
})