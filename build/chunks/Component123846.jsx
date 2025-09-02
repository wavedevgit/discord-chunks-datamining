/** Chunk was on 6850 **/
/** chunk id: 123846, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk954955 = require("./954955.js"),
  s = require.n(Chunk954955),
  Chunk498607 = require("./498607.js"),
  u = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk246946 = require("./246946.js"),
  Chunk785195 = require("./785195.jsx"),
  Chunk553826 = require("./553826.jsx"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk327999 = require("./327999.js"),
  Chunk734557 = require("./734557.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk791051 = require("./791051.js"),
  Chunk334405 = require("./334405.js");

function H(e) {
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

function w(e, t) {
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
let N = [Chunk327999.gq.DISCOVERY, Chunk327999.gq.VANITY_URL, Chunk327999.gq.BOT, Chunk327999.gq.HUB, Chunk327999.gq.MANUAL_MEMBER_VERIFICATION, Chunk327999.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL];

function S(e) {
  let {
    type: t,
    text: n,
    size: l,
    vanityUrl: o,
    isFocused: a
  } = e, s = null != l ? l : 16, c = function(e, t) {
    switch (e) {
      case g.gq.BOT:
        return (0, r.jsx)(C.wGt, {
          size: "custom",
          color: "currentColor",
          className: O.icon,
          height: t,
          width: t
        });
      case g.gq.INTEGRATION:
        return (0, r.jsx)(C.tYf, {
          size: "custom",
          color: "currentColor",
          className: O.icon,
          height: t,
          width: t
        });
      case g.gq.DISCOVERY:
        return (0, r.jsx)(C.Jmo, {
          size: "custom",
          color: "currentColor",
          className: O.icon,
          height: t,
          width: t
        });
      case g.gq.HUB:
        return (0, r.jsx)(C.aVH, {
          size: "custom",
          color: "currentColor",
          className: O.icon,
          height: t,
          width: t
        });
      case g.gq.INVITE:
      case g.gq.VANITY_URL:
        return (0, r.jsx)(C.xPt, {
          size: "custom",
          color: "currentColor",
          className: O.icon,
          height: t,
          width: t
        });
      case g.gq.MANUAL_MEMBER_VERIFICATION:
        return (0, r.jsx)(p.Z, {
          className: O.icon,
          height: t,
          width: t
        });
      case g.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL:
        return (0, r.jsx)(C.iWm, {
          size: "custom",
          color: "currentColor",
          className: O.icon,
          height: t,
          width: t
        });
      default:
        return null
    }
  }(t, s), u = (0, g.bE)(t, o);
  return (0, r.jsxs)("div", {
    className: O.labelWithIconContainer,
    "aria-label": u,
    children: [null != c ? c : null, (0, r.jsx)(C.Text, {
      variant: 12 === s ? "text-xs/medium" : "text-sm/medium",
      className: i()(O.labelText, {
        [O.focused]: a
      }),
      children: n
    })]
  })
}

function D(e) {
  var t;
  let {
    guildId: n,
    onClose: o
  } = e, a = (0, d.e7)([h.Z], () => h.Z.getSearchStateByGuildId(n), [n], u()), {
    inviteCodes: c
  } = (0, x.s)(n), p = (0, d.e7)([m.Z], () => m.Z.getGuild(n)), D = null != (t = null == p ? true : p.vanityURLCode) ? t : null, [Z, R] = l.useState(false), {
    selectedSourceInviteCode: L,
    selectedJoinSourceType: I
  } = a, P = null != I && I !== g.gq.UNSPECIFIED, M = (0, d.e7)([b.Z], () => b.Z.hideInstantInvites, []);
  M && (c = []);
  let V = s()(e => {
    let t = e.trim();
    (0, j.Dr)(n, {
      selectedSourceInviteCode: "" !== t ? t : true,
      selectedJoinSourceType: true
    })
  }, 300);
  l.useEffect(() => () => {
    V.cancel()
  }, [V]);
  let E = l.useCallback(e => {
      let t = e.trim();
      (0, j.Dr)(n, {
        selectedSourceInviteCode: "" !== t ? t : true,
        selectedJoinSourceType: true
      })
    }, [n]),
    T = l.useCallback(e => {
      e === I ? (0, j.Dr)(n, {
        selectedSourceInviteCode: true,
        selectedJoinSourceType: true
      }) : (0, j.Dr)(n, {
        selectedSourceInviteCode: null,
        selectedJoinSourceType: e
      }), R(false)
    }, [n, I]),
    k = l.useCallback(e => {
      (0, j.Dr)(n, {
        selectedSourceInviteCode: e,
        selectedJoinSourceType: true
      }), V(e)
    }, [n, V]);
  return (0, r.jsx)(C.v2r, {
    navId: "members-table-join-method-menu",
    onClose: () => {
      o()
    },
    "aria-label": y.intl.string(y.t["u/7RdX"]),
    onSelect: v.dG4,
    children: Z ? (0, r.jsxs)(C.kSQ, {
      children: [(0, r.jsx)(C.sNh, {
        id: "back",
        action: () => R(false),
        render: e => (0, r.jsxs)("span", w(H({}, e), {
          className: O.customLabelContainer,
          children: [(0, r.jsx)(C.V7D, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: O.__invalid_caret
          }), (0, r.jsx)(C.Text, {
            variant: "eyebrow",
            color: "header-primary",
            children: y.intl.string(y.t["Kz/cho"])
          })]
        }))
      }), N.map(e => (0, r.jsx)(C.k5B, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, r.jsx)(S, w(H({}, t), {
          type: e,
          vanityUrl: D,
          text: (0, g.bE)(e, D, M)
        })),
        checked: I === e,
        disabled: false,
        action: () => T(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e)))]
    }) : (0, r.jsxs)(C.kSQ, {
      children: [(0, r.jsx)(C.II_, {
        id: "members-table-invite-code-search",
        control: (e, t) => (0, r.jsx)(C.ne, w(H({}, e), {
          query: null != L ? L : "",
          onChange: k,
          ref: t,
          placeholder: y.intl.string(y.t.YwJnGx)
        }))
      }, "invite-code-filter-search"), (0, r.jsx)(C.Clw, {}), (0, r.jsx)(C.k5B, {
        id: "join-source-type-option-all",
        label: y.intl.string(y.t.an9Ry8),
        checked: null == L && null == I,
        disabled: false,
        action: () => T(null),
        group: "join-source-type-options"
      }, "join-source-type-option-all"), c.map(e => (0, r.jsx)(C.k5B, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, r.jsx)(S, w(H({}, t), {
          type: g.gq.INVITE,
          vanityUrl: D,
          text: e
        })),
        checked: L === e,
        disabled: false,
        action: () => E(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e))), (0, r.jsx)(C.Clw, {}), (0, r.jsx)(C.sNh, {
        id: "other-join-methods",
        action: () => R(true),
        render: e => (0, r.jsxs)("div", {
          className: i()(O.containerWithRightCaret, O.customLabelContainer),
          children: [(0, r.jsxs)("div", {
            className: _.label,
            children: [(0, r.jsx)(C.Text, {
              variant: "text-sm/medium",
              className: i()(O.__invalid_selectedRadio, O.labelText, {
                [O.focused]: e.isFocused
              }),
              children: y.intl.string(y.t["Kz/cho"])
            }), P ? (0, r.jsx)("div", {
              className: O.selectedOption,
              children: (0, r.jsx)(S, w(H({}, e), {
                size: 12,
                text: (0, g.bE)(I, D, M),
                type: I,
                vanityUrl: D
              }))
            }) : null]
          }), P ? (0, r.jsx)(f.Z, {
            background: O.__invalid_radio,
            foreground: O.radioSelection,
            width: 16,
            height: 16
          }) : (0, r.jsx)(C.Fbu, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: O.__invalid_caret
          })]
        })
      }, "other-join-methods")]
    })
  })
}