/** Chunk was on 91053 **/
/** chunk id: 400251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N,
  m: () => P
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk749210 = require("./749210.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk951394 = require("./951394.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk134432 = require("./134432.js"),
  Chunk769654 = require("./769654.js"),
  Chunk430824 = require("./430824.js"),
  Chunk768581 = require("./768581.js"),
  Chunk411198 = require("./411198.js"),
  Chunk683818 = require("./683818.js"),
  Chunk16853 = require("./16853.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk777261 = require("./777261.js"),
  Chunk883760 = require("./883760.js");

function E(e) {
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

function Z(e, t) {
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
let P = Chunk473749.memo(function(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsxs)(c.P3F, {
    onClick: t,
    className: I.addEntryCard,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: S
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      className: I.addServerText,
      children: C.intl.string(C.t.H9jxS1)
    })]
  })
});

function T(e) {
  let {
    entry: t
  } = e, [l, s] = i.useState(false), d = i.useRef(null), {
    canEdit: u
  } = (0, x.Z)(t);
  return (0, r.jsx)("div", {
    className: a()(I.actionButtonsContainer, {
      [I.forceButtonsShow]: l
    }),
    children: (0, r.jsxs)(h.ZP, {
      children: [u ? (0, r.jsx)(o.u, {
        text: C.intl.string(C.t.XnuOvN),
        children: (0, r.jsx)(h.zx, {
          onClick: () => {
            (0, c.ZDy)(async () => {
              let {
                default: e
              } = await n.e("34191").then(n.bind(n, 303647));
              return n => (0, r.jsx)(e, Z(E({}, n), {
                entry: t
              }))
            })
          },
          "aria-label": C.intl.string(C.t.XnuOvN),
          children: (0, r.jsx)(c.vdY, {
            size: "xs",
            color: "currentColor",
            className: I.overflowIcon
          })
        })
      }) : null, (0, r.jsx)(j.Z, {
        targetElementRef: d,
        onRequestOpen: () => s(true),
        onRequestClose: () => s(false),
        entry: t,
        hideEditButton: true,
        children: e => {
          var {
            onClick: t
          } = e, n = function(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                l = Object.keys(e);
              for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
          }(e, ["onClick"]);
          return (0, r.jsx)(o.u, {
            text: C.intl.string(C.t["UKOtz+"]),
            children: (0, r.jsx)(h.zx, Z(E({}, n), {
              onClick: e => {
                t(e)
              },
              ref: d,
              "aria-label": C.intl.string(C.t["UKOtz+"]),
              children: (0, r.jsx)(c.xhG, {
                size: "md",
                color: "currentColor",
                className: I.overflowIcon
              })
            }))
          })
        }
      })]
    })
  })
}
let N = Chunk473749.memo(function(e) {
  var t;
  let {
    entry: l
  } = e, [a, o] = i.useState(false), h = null != (0, s.e7)([_.Z], () => _.Z.getGuild(l.guildId)), x = async () => {
    o(true);
    try {
      h ? (0, b.X)(l.guildId) : await u.Z.joinGuild(l.guildId, {
        source: v.vtS.DIRECTORY_ENTRY
      })
    } finally {
      o(false)
    }
  }, j = y.ZP.getGuildSplashURL({
    id: l.guildId,
    splash: l.splash,
    size: 300 * (0, m.x_)()
  }), S = null != (t = y.ZP.getGuildIconURL({
    id: l.guildId,
    icon: l.icon,
    size: 40
  })) ? t : true, P = C.intl.string(C.t.VJlc0S);
  return h && (P = C.intl.string(C.t.cqWE2Z)), (0, r.jsxs)("div", {
    className: I.card,
    onContextMenu: e => {
      (0, d.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 643560));
        return t => (0, r.jsx)(e, Z(E({}, t), {
          entry: l
        }))
      })
    },
    children: [(0, r.jsxs)("div", {
      className: I.cardHeader,
      children: [(0, r.jsx)("div", {
        className: I.splash,
        children: null != j && (0, r.jsx)("img", {
          src: j,
          alt: "",
          className: I.splashImage
        })
      }), (0, r.jsx)("div", {
        className: I.guildIcon,
        children: (0, r.jsx)(p.ZP, {
          mask: p.ZP.Masks.SQUIRCLE,
          width: 48,
          height: 48,
          children: (0, r.jsx)("div", {
            className: I.iconMask,
            children: (0, r.jsx)(f.Z, {
              className: I.icon,
              iconSrc: S,
              guild: (0, O.e)(l),
              size: f.Z.Sizes.MEDIUM,
              active: true
            })
          })
        })
      })]
    }), (0, r.jsxs)("div", {
      className: I.guildInfo,
      children: [(0, r.jsxs)("div", {
        className: I.title,
        children: [(0, r.jsx)(g.Z, {
          className: I.guildBadge,
          guild: l
        }), (0, r.jsx)(c.Text, {
          className: I.guildName,
          variant: "heading-md/semibold",
          color: "header-primary",
          children: l.name
        })]
      }), (0, r.jsx)(c.Text, {
        className: I.description,
        variant: "text-sm/normal",
        color: "text-default",
        children: l.description
      }), (0, r.jsxs)("div", {
        className: I.memberInfo,
        children: [null != l.approximatePresenceCount && (0, r.jsxs)("div", {
          className: I.memberCount,
          children: [(0, r.jsx)("div", {
            className: I.dotOnline
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: C.intl.format(C.t["LC+S+m"], {
              membersOnline: l.approximatePresenceCount
            })
          })]
        }), null != l.approximateMemberCount && (0, r.jsxs)("div", {
          className: I.memberCount,
          children: [(0, r.jsx)("div", {
            className: I.dotOffline
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: C.intl.format(C.t.zRl6XR, {
              count: l.approximateMemberCount
            })
          })]
        })]
      }), (0, r.jsx)("div", {
        className: I.joinButton,
        children: (0, r.jsx)(c.Button, {
          loading: a,
          variant: h ? "secondary" : "active",
          onClick: x,
          text: P,
          fullWidth: true
        })
      })]
    }), (0, r.jsx)(T, {
      entry: l
    })]
  })
})