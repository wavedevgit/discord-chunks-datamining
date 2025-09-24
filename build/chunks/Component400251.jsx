/** Chunk was on 91053 **/
/** chunk id: 400251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R,
  m: () => P
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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

function T(e, t) {
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
}
let P = e => {
  let {
    onClick: t
  } = e;
  return (0, r.jsxs)(c.P3F, {
    onClick: t,
    className: I.addEntryCard,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: E
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      className: I.addServerText,
      children: C.intl.string(C.t.H9jxS0)
    })]
  })
};

function N(e) {
  let {
    entry: t
  } = e, [l, s] = i.useState(false), o = i.useRef(null), {
    canEdit: d
  } = (0, j.Z)(t);
  return (0, r.jsx)("div", {
    className: a()(I.actionButtonsContainer, {
      [I.forceButtonsShow]: l
    }),
    children: (0, r.jsxs)(h.ZP, {
      children: [d ? (0, r.jsx)(c.ua7, {
        text: C.intl.string(C.t.XnuOvL),
        hideOnClick: true,
        children: e => {
          var {
            onClick: i
          } = e, l = T(e, ["onClick"]);
          return (0, r.jsx)(h.zx, Z(S({}, l), {
            onClick: () => {
              null == i || i(), (0, c.ZDy)(async () => {
                let {
                  default: e
                } = await n.e("34191").then(n.bind(n, 303647));
                return n => (0, r.jsx)(e, Z(S({}, n), {
                  entry: t
                }))
              })
            },
            "aria-label": C.intl.string(C.t.XnuOvL),
            children: (0, r.jsx)(c.vdY, {
              size: "xs",
              color: "currentColor",
              className: I.overflowIcon
            })
          }))
        }
      }) : null, (0, r.jsx)(x.Z, {
        targetElementRef: o,
        onRequestOpen: () => s(true),
        onRequestClose: () => s(false),
        entry: t,
        hideEditButton: true,
        children: e => {
          var {
            onClick: t
          } = e, n = T(e, ["onClick"]);
          return (0, r.jsx)(c.ua7, {
            text: C.intl.string(C.t.UKOtz8),
            hideOnClick: true,
            children: e => {
              var {
                onClick: i
              } = e, l = T(e, ["onClick"]);
              return (0, r.jsx)(h.zx, Z(S({}, n, l), {
                ref: o,
                onClick: e => {
                  null == i || i(), t(e)
                },
                "aria-label": C.intl.string(C.t.UKOtz8),
                children: (0, r.jsx)(c.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: I.overflowIcon
                })
              }))
            }
          })
        }
      })]
    })
  })
}
let R = e => {
  var t;
  let {
    entry: l
  } = e, [a, h] = i.useState(false), j = null != (0, s.e7)([y.Z], () => y.Z.getGuild(l.guildId)), x = async () => {
    h(true);
    try {
      j ? (0, b.X)(l.guildId) : await u.Z.joinGuild(l.guildId, {
        source: v.vtS.DIRECTORY_ENTRY
      })
    } finally {
      h(false)
    }
  }, E = _.ZP.getGuildSplashURL({
    id: l.guildId,
    splash: l.splash,
    size: 300 * (0, m.x_)()
  }), T = null != (t = _.ZP.getGuildIconURL({
    id: l.guildId,
    icon: l.icon,
    size: 40
  })) ? t : true, P = C.intl.string(C.t.VJlc0d);
  return j && (P = C.intl.string(C.t.cqWE2d)), (0, r.jsxs)("div", {
    className: I.card,
    onContextMenu: e => {
      (0, d.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 643560));
        return t => (0, r.jsx)(e, Z(S({}, t), {
          entry: l
        }))
      })
    },
    children: [(0, r.jsxs)("div", {
      className: I.cardHeader,
      children: [(0, r.jsx)("div", {
        className: I.splash,
        children: null != E && (0, r.jsx)("img", {
          src: E,
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
              iconSrc: T,
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
          guild: l,
          tooltipColor: c.ua7.Colors.PRIMARY
        }), (0, r.jsx)(c.Text, {
          className: I.guildName,
          variant: "heading-md/semibold",
          color: "header-primary",
          children: l.name
        })]
      }), (0, r.jsx)(c.Text, {
        className: I.description,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: l.description
      }), (0, r.jsxs)("div", {
        className: I.memberInfo,
        children: [null != l.approximatePresenceCount && (0, r.jsxs)("div", {
          className: I.memberCount,
          children: [(0, r.jsx)("div", {
            className: I.dotOnline
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: C.intl.format(C.t["LC+S+v"], {
              membersOnline: l.approximatePresenceCount
            })
          })]
        }), null != l.approximateMemberCount && (0, r.jsxs)("div", {
          className: I.memberCount,
          children: [(0, r.jsx)("div", {
            className: I.dotOffline
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: C.intl.format(C.t.zRl6XV, {
              count: l.approximateMemberCount
            })
          })]
        })]
      }), (0, r.jsx)(o.zx, {
        submitting: a,
        className: I.joinButton,
        color: j ? o.zx.Colors.PRIMARY : o.zx.Colors.GREEN,
        onClick: x,
        children: P
      })]
    }), (0, r.jsx)(N, {
      entry: l
    })]
  })
}