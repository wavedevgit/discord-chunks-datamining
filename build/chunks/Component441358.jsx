/** Chunk was on 35894 **/
/** chunk id: 441358, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk111956 = require("./111956.js"),
  s = require.n(Chunk111956),
  Chunk33851 = require("./33851.js"),
  u = require.n(Chunk33851),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk71393 = require("./71393.js"),
  Chunk351906 = require("./351906.js"),
  Chunk509402 = require("./509402.jsx"),
  Chunk282054 = require("./282054.jsx"),
  Chunk266047 = require("./266047.js"),
  Chunk221950 = require("./221950.js"),
  Chunk11541 = require("./11541.js"),
  Chunk836968 = require("./836968.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk653952 = require("./653952.js"),
  Chunk658122 = require("./658122.js");

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
let A = [Chunk11541.UP.DISCOVERY, Chunk11541.UP.VANITY_URL, Chunk11541.UP.BOT, Chunk11541.UP.HUB, Chunk11541.UP.MANUAL_MEMBER_VERIFICATION, Chunk11541.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL];

function S(e) {
  let {
    type: t,
    text: n,
    size: l,
    vanityUrl: i,
    isFocused: a
  } = e, s = null != l ? l : 16, c = function(e, t) {
    switch (e) {
      case h.UP.BOT:
        return (0, r.jsx)(C.CnV, {
          size: "custom",
          color: "currentColor",
          className: v.Kk,
          height: t,
          width: t
        });
      case h.UP.INTEGRATION:
        return (0, r.jsx)(C.XC7, {
          size: "custom",
          color: "currentColor",
          className: v.Kk,
          height: t,
          width: t
        });
      case h.UP.DISCOVERY:
        return (0, r.jsx)(C.QGJ, {
          size: "custom",
          color: "currentColor",
          className: v.Kk,
          height: t,
          width: t
        });
      case h.UP.HUB:
        return (0, r.jsx)(C.Pfh, {
          size: "custom",
          color: "currentColor",
          className: v.Kk,
          height: t,
          width: t
        });
      case h.UP.INVITE:
      case h.UP.VANITY_URL:
        return (0, r.jsx)(C.qYV, {
          size: "custom",
          color: "currentColor",
          className: v.Kk,
          height: t,
          width: t
        });
      case h.UP.MANUAL_MEMBER_VERIFICATION:
        return (0, r.jsx)(b.A, {
          className: v.Kk,
          height: t,
          width: t
        });
      case h.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL:
        return (0, r.jsx)(C._xR, {
          size: "custom",
          color: "currentColor",
          className: v.Kk,
          height: t,
          width: t
        });
      default:
        return null
    }
  }(t, s), u = (0, h.CI)(t, i);
  return (0, r.jsxs)("div", {
    className: v.$E,
    "aria-label": u,
    children: [null != c ? c : null, (0, r.jsx)(C.Text, {
      variant: 12 === s ? "text-xs/medium" : "text-sm/medium",
      className: o()(v.QK, {
        [v.in]: a
      }),
      children: n
    })]
  })
}

function D(e) {
  var t;
  let {
    guildId: n,
    onClose: i
  } = e, a = (0, d.bG)([j.A], () => j.A.getSearchStateByGuildId(n), [n], u()), {
    inviteCodes: c
  } = (0, x.N)(n), b = (0, d.bG)([m.A], () => m.A.getGuild(n)), D = null != (t = null == b ? true : b.vanityURLCode) ? t : null, [N, L] = l.useState(false), {
    selectedSourceInviteCode: P,
    selectedJoinSourceType: R
  } = a, V = null != R && R !== h.UP.UNSPECIFIED, E = (0, d.bG)([p.A], () => p.A.hideInstantInvites, []);
  E && (c = []);
  let M = l.useMemo(() => s()(e => {
    let t = e.trim();
    (0, g.Ld)(n, {
      selectedSourceInviteCode: "" !== t ? t : true,
      selectedJoinSourceType: true
    })
  }, 300), [n]);
  l.useEffect(() => () => {
    M.cancel()
  }, [M]);
  let I = l.useCallback(e => {
      let t = e.trim();
      (0, g.Ld)(n, {
        selectedSourceInviteCode: "" !== t ? t : true,
        selectedJoinSourceType: true
      })
    }, [n]),
    T = l.useCallback(e => {
      e === R ? (0, g.Ld)(n, {
        selectedSourceInviteCode: true,
        selectedJoinSourceType: true
      }) : (0, g.Ld)(n, {
        selectedSourceInviteCode: null,
        selectedJoinSourceType: e
      }), L(false)
    }, [n, R]),
    Z = l.useCallback(e => {
      (0, g.Ld)(n, {
        selectedSourceInviteCode: e,
        selectedJoinSourceType: true
      }), M(e)
    }, [n, M]);
  return (0, r.jsx)(C.W1t, {
    navId: "members-table-join-method-menu",
    onClose: () => {
      i()
    },
    "aria-label": O.intl.string(O.t["u/7Rdc"]),
    onSelect: y.tEg,
    children: N ? (0, r.jsxs)(C.rXV, {
      children: [(0, r.jsx)(C.Drp, {
        id: "back",
        action: () => L(false),
        render: e => (0, r.jsxs)("span", w(H({}, e), {
          className: v.RX,
          children: [(0, r.jsx)(C.n2b, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: v.__invalid_caret
          }), (0, r.jsx)(C.Text, {
            variant: "eyebrow",
            color: "text-strong",
            children: O.intl.string(O.t["Kz/cho"])
          })]
        }))
      }), A.map(e => (0, r.jsx)(C.iDA, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, r.jsx)(S, w(H({}, t), {
          type: e,
          vanityUrl: D,
          text: (0, h.CI)(e, D, E)
        })),
        checked: R === e,
        disabled: false,
        action: () => T(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e)))]
    }) : (0, r.jsxs)(C.rXV, {
      children: [(0, r.jsx)(C.aK1, {
        id: "members-table-invite-code-search",
        control: (e, t) => (0, r.jsx)(C.VPO, w(H({}, e), {
          query: null != P ? P : "",
          onChange: Z,
          ref: t,
          placeholder: O.intl.string(O.t.YwJnGz)
        }))
      }, "invite-code-filter-search"), (0, r.jsx)(C.bXX, {}), (0, r.jsx)(C.iDA, {
        id: "join-source-type-option-all",
        label: O.intl.string(O.t.an9Ry3),
        checked: null == P && null == R,
        disabled: false,
        action: () => T(null),
        group: "join-source-type-options"
      }, "join-source-type-option-all"), c.map(e => (0, r.jsx)(C.iDA, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, r.jsx)(S, w(H({}, t), {
          type: h.UP.INVITE,
          vanityUrl: D,
          text: e
        })),
        checked: P === e,
        disabled: false,
        action: () => I(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e))), (0, r.jsx)(C.bXX, {}), (0, r.jsx)(C.Drp, {
        id: "other-join-methods",
        action: () => L(true),
        render: e => (0, r.jsxs)("div", {
          className: o()(v.RI, v.RX),
          children: [(0, r.jsxs)("div", {
            className: _.label,
            children: [(0, r.jsx)(C.Text, {
              variant: "text-sm/medium",
              className: o()(v.__invalid_selectedRadio, v.QK, {
                [v.in]: e.isFocused
              }),
              children: O.intl.string(O.t["Kz/cho"])
            }), V ? (0, r.jsx)("div", {
              className: v.TF,
              children: (0, r.jsx)(S, w(H({}, e), {
                size: 12,
                text: (0, h.CI)(R, D, E),
                type: R,
                vanityUrl: D
              }))
            }) : null]
          }), V ? (0, r.jsx)(f.A, {
            background: v.__invalid_radio,
            foreground: v.QE,
            width: 16,
            height: 16
          }) : (0, r.jsx)(C._BQ, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: v.__invalid_caret
          })]
        })
      }, "other-join-methods")]
    })
  })
}