/** Chunk was on 21087 **/
/** chunk id: 400251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R,
  m: () => T
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk154235 = require("./154235.js"),
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

function P(e, t) {
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
let T = e => {
  let {
    onClick: t
  } = e;
  return (0, r.jsxs)(c.P3F, {
    onClick: t,
    className: E.addEntryCard,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: S
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/semibold",
      color: "header-primary",
      className: E.addServerText,
      children: C.intl.string(C.t.H9jxS0)
    })]
  })
};

function N(e) {
  let {
    entry: t
  } = e, [l, s] = i.useState(false), o = i.useRef(null), {
    canEdit: u
  } = (0, j.Z)(t);
  return (0, r.jsx)("div", {
    className: a()(E.actionButtonsContainer, {
      [E.forceButtonsShow]: l
    }),
    children: (0, r.jsxs)(p.ZP, {
      children: [u ? (0, r.jsx)(c.ua7, {
        text: C.intl.string(C.t.XnuOvL),
        hideOnClick: true,
        children: e => {
          var {
            onClick: i
          } = e, l = P(e, ["onClick"]);
          return (0, r.jsx)(p.zx, Z(I({}, l), {
            onClick: () => {
              null == i || i(), (0, c.ZDy)(async () => {
                let {
                  default: e
                } = await n.e("34191").then(n.bind(n, 303647));
                return n => (0, r.jsx)(e, Z(I({}, n), {
                  entry: t
                }))
              })
            },
            "aria-label": C.intl.string(C.t.XnuOvL),
            children: (0, r.jsx)(c.vdY, {
              size: "xs",
              color: "currentColor",
              className: E.overflowIcon
            })
          }))
        }
      }) : null, (0, r.jsx)(O.Z, {
        targetElementRef: o,
        onRequestOpen: () => s(true),
        onRequestClose: () => s(false),
        entry: t,
        hideEditButton: true,
        children: e => {
          var {
            onClick: t
          } = e, n = P(e, ["onClick"]);
          return (0, r.jsx)(c.ua7, {
            text: C.intl.string(C.t.UKOtz8),
            hideOnClick: true,
            children: e => {
              var {
                onClick: i
              } = e, l = P(e, ["onClick"]);
              return (0, r.jsx)(p.zx, Z(I({}, n, l), {
                ref: o,
                onClick: e => {
                  null == i || i(), t(e)
                },
                "aria-label": C.intl.string(C.t.UKOtz8),
                children: (0, r.jsx)(c.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: E.overflowIcon
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
  } = e, [a, p] = i.useState(false), j = null != (0, s.e7)([y.Z], () => y.Z.getGuild(l.guildId)), O = async () => {
    p(true);
    try {
      j ? (0, b.X)(l.guildId) : await d.Z.joinGuild(l.guildId, {
        source: v.vtS.DIRECTORY_ENTRY
      })
    } finally {
      p(false)
    }
  }, S = x.ZP.getGuildSplashURL({
    id: l.guildId,
    splash: l.splash,
    size: 300 * (0, m.x_)()
  }), P = null != (t = x.ZP.getGuildIconURL({
    id: l.guildId,
    icon: l.icon,
    size: 40
  })) ? t : true, T = C.intl.string(C.t.VJlc0d);
  return j && (T = C.intl.string(C.t.cqWE2d)), (0, r.jsxs)("div", {
    className: E.card,
    onContextMenu: e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 643560));
        return t => (0, r.jsx)(e, Z(I({}, t), {
          entry: l
        }))
      })
    },
    children: [(0, r.jsxs)("div", {
      className: E.cardHeader,
      children: [(0, r.jsx)("div", {
        className: E.splash,
        children: null != S && (0, r.jsx)("img", {
          src: S,
          alt: "",
          className: E.splashImage
        })
      }), (0, r.jsx)("div", {
        className: E.guildIcon,
        children: (0, r.jsx)(h.ZP, {
          mask: h.ZP.Masks.SQUIRCLE,
          width: 48,
          height: 48,
          children: (0, r.jsx)("div", {
            className: E.iconMask,
            children: (0, r.jsx)(f.Z, {
              className: E.icon,
              iconSrc: P,
              guild: (0, _.e)(l),
              size: f.Z.Sizes.MEDIUM,
              active: true
            })
          })
        })
      })]
    }), (0, r.jsxs)("div", {
      className: E.guildInfo,
      children: [(0, r.jsxs)("div", {
        className: E.title,
        children: [(0, r.jsx)(g.Z, {
          className: E.guildBadge,
          guild: l,
          tooltipColor: c.ua7.Colors.PRIMARY
        }), (0, r.jsx)(c.Text, {
          className: E.guildName,
          variant: "heading-md/semibold",
          color: "header-primary",
          children: l.name
        })]
      }), (0, r.jsx)(c.Text, {
        className: E.description,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: l.description
      }), (0, r.jsxs)("div", {
        className: E.memberInfo,
        children: [null != l.approximatePresenceCount && (0, r.jsxs)("div", {
          className: E.memberCount,
          children: [(0, r.jsx)("div", {
            className: E.dotOnline
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: C.intl.format(C.t["LC+S+v"], {
              membersOnline: l.approximatePresenceCount
            })
          })]
        }), null != l.approximateMemberCount && (0, r.jsxs)("div", {
          className: E.memberCount,
          children: [(0, r.jsx)("div", {
            className: E.dotOffline
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
        className: E.joinButton,
        color: j ? o.zx.Colors.PRIMARY : o.zx.Colors.GREEN,
        onClick: O,
        children: T
      })]
    }), (0, r.jsx)(N, {
      entry: l
    })]
  })
}