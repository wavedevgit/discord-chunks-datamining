/** Chunk was on 82124 **/
/** chunk id: 400251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T,
  m: () => Z
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
  Chunk183594 = require("./183594.js"),
  Chunk883760 = require("./883760.js");

function I(e) {
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

function P(e, t) {
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
let Z = Chunk473749.memo(function(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsxs)(c.P3F, {
    onClick: t,
    className: S.addEntryCard,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: _
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/semibold",
      color: "text-strong",
      className: S.addServerText,
      children: E.intl.string(E.t.H9jxS1)
    })]
  })
});

function N(e) {
  let {
    entry: t
  } = e, [l, o] = i.useState(false), u = i.useRef(null), {
    canEdit: d
  } = (0, j.Z)(t);
  return (0, r.jsx)("div", {
    className: a()(S.actionButtonsContainer, {
      [S.forceButtonsShow]: l
    }),
    children: (0, r.jsxs)(f.ZP, {
      children: [d ? (0, r.jsx)(s.u, {
        text: E.intl.string(E.t.XnuOvN),
        children: (0, r.jsx)(f.zx, {
          onClick: () => {
            (0, c.ZDy)(async () => {
              let {
                default: e
              } = await n.e("34191").then(n.bind(n, 303647));
              return n => (0, r.jsx)(e, P(I({}, n), {
                entry: t
              }))
            })
          },
          "aria-label": E.intl.string(E.t.XnuOvN),
          children: (0, r.jsx)(c.vdY, {
            size: "xs",
            color: "currentColor",
            className: S.overflowIcon
          })
        })
      }) : null, (0, r.jsx)(x.Z, {
        targetElementRef: u,
        onRequestOpen: () => o(true),
        onRequestClose: () => o(false),
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
          return (0, r.jsx)(s.u, {
            text: E.intl.string(E.t["UKOtz+"]),
            children: (0, r.jsx)(f.zx, P(I({}, n), {
              onClick: e => {
                t(e)
              },
              ref: u,
              "aria-label": E.intl.string(E.t["UKOtz+"]),
              children: (0, r.jsx)(c.xhG, {
                size: "md",
                color: "currentColor",
                className: S.overflowIcon
              })
            }))
          })
        }
      })]
    })
  })
}
let T = Chunk473749.memo(function(e) {
  var t;
  let {
    entry: l
  } = e, [a, s] = i.useState(false), f = null != (0, o.e7)([y.Z], () => y.Z.getGuild(l.guildId)), j = async () => {
    s(true);
    try {
      f ? (0, b.X)(l.guildId) : await d.Z.joinGuild(l.guildId, {
        source: C.vtS.DIRECTORY_ENTRY
      })
    } finally {
      s(false)
    }
  }, x = v.ZP.getGuildSplashURL({
    id: l.guildId,
    splash: l.splash,
    size: 300 * (0, m.x_)()
  }), _ = null != (t = v.ZP.getGuildIconURL({
    id: l.guildId,
    icon: l.icon,
    size: 40
  })) ? t : true, Z = E.intl.string(E.t.VJlc0S);
  return f && (Z = E.intl.string(E.t.cqWE2Z)), (0, r.jsxs)("div", {
    className: S.card,
    onContextMenu: e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 643560));
        return t => (0, r.jsx)(e, P(I({}, t), {
          entry: l
        }))
      })
    },
    children: [(0, r.jsxs)("div", {
      className: S.cardHeader,
      children: [(0, r.jsx)("div", {
        className: S.splash,
        children: null != x && (0, r.jsx)("img", {
          src: x,
          alt: "",
          className: S.splashImage
        })
      }), (0, r.jsx)("div", {
        className: S.guildIcon,
        children: (0, r.jsx)(p.ZP, {
          mask: p.ZP.Masks.SQUIRCLE,
          width: 48,
          height: 48,
          children: (0, r.jsx)("div", {
            className: S.iconMask,
            children: (0, r.jsx)(h.Z, {
              className: S.icon,
              iconSrc: _,
              guild: (0, O.e)(l),
              size: h.Z.Sizes.MEDIUM,
              active: true
            })
          })
        })
      })]
    }), (0, r.jsxs)("div", {
      className: S.guildInfo,
      children: [(0, r.jsxs)("div", {
        className: S.title,
        children: [(0, r.jsx)(g.Z, {
          className: S.guildBadge,
          guild: l
        }), (0, r.jsx)(c.Text, {
          className: S.guildName,
          variant: "heading-md/semibold",
          color: "text-strong",
          children: l.name
        })]
      }), (0, r.jsx)(c.Text, {
        className: S.description,
        variant: "text-sm/normal",
        color: "text-default",
        children: l.description
      }), (0, r.jsxs)("div", {
        className: S.memberInfo,
        children: [null != l.approximatePresenceCount && (0, r.jsxs)("div", {
          className: S.memberCount,
          children: [(0, r.jsx)("div", {
            className: S.dotOnline
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: E.intl.format(E.t["LC+S+m"], {
              membersOnline: l.approximatePresenceCount
            })
          })]
        }), null != l.approximateMemberCount && (0, r.jsxs)("div", {
          className: S.memberCount,
          children: [(0, r.jsx)("div", {
            className: S.dotOffline
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: E.intl.format(E.t.zRl6XR, {
              count: l.approximateMemberCount
            })
          })]
        })]
      }), (0, r.jsx)("div", {
        className: S.joinButton,
        children: (0, r.jsx)(c.Button, {
          loading: a,
          variant: f ? "secondary" : "active",
          onClick: j,
          text: Z,
          fullWidth: true
        })
      })]
    }), (0, r.jsx)(N, {
      entry: l
    })]
  })
})