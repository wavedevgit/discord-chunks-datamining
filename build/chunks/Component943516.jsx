/** Chunk was on 73628 **/
/** chunk id: 943516, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  YP: () => p,
  ZP: () => b,
  aN: () => q
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk866442 = require("./866442.js"),
  Chunk399606 = require("./399606.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk485386 = require("./485386.js"),
  Chunk470209 = require("./470209.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk340036 = require("./340036.js");

function p() {
  return {
    name: "",
    color: Chunk981631.p6O
  }
}

function m(A) {
  let e, {
    onRemove: t,
    role: r
  } = A;
  return e = null != r ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.nn4, {
      children: g.intl.format(g.t["94dBOT"], {
        color: (0, l.Rf)(r.color)
      })
    }), (0, n.jsx)("div", {
      className: f.attachedRoleColor,
      style: {
        backgroundColor: (0, l.Rf)(r.color)
      }
    }), (0, n.jsx)(s.LZC, {
      size: 8,
      horizontal: true
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: r.name
    }), null != t && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(s.LZC, {
        size: 12,
        horizontal: true
      }), (0, n.jsx)(s.P3F, {
        "aria-label": g.intl.string(g.t.tO2HIy),
        onClick: t,
        className: f.attachedRoleClose,
        children: (0, n.jsx)(s.Dio, {
          size: "xs",
          color: "currentColor",
          className: f.attachedRoleCloseIcon
        })
      })]
    })]
  }) : (0, n.jsx)(s.$jN, {
    type: s.$jN.Type.PULSING_ELLIPSIS
  }), (0, n.jsx)("div", {
    className: f.attachedRoleContainer,
    children: e
  })
}

function q() {
  return (0, Chunk951288.jsx)(Chunk481060.Mgn, {
    size: "xs",
    color: "currentColor",
    className: Chunk340036.warningIcon
  })
}

function h(A) {
  let {
    roleName: e
  } = A;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: g.intl.format(g.t.i2x5aW, {
        roleName: e,
        emphasisHook: A => (0, n.jsx)(s.Text, {
          tag: "span",
          variant: "text-md/semibold",
          color: "text-default",
          children: A
        })
      })
    }), (0, n.jsxs)(s.X6q, {
      className: f.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, n.jsx)(s.I9k, {
        size: "sm",
        color: "currentColor"
      }), (0, n.jsx)(s.LZC, {
        horizontal: true,
        size: 8
      }), g.intl.string(g.t.KWx4HR)]
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: g.intl.string(g.t.hNHNpq)
    }), (0, n.jsxs)(s.X6q, {
      className: f.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, n.jsx)(s.XHJ, {
        size: "sm",
        color: "currentColor"
      }), (0, n.jsx)(s.LZC, {
        horizontal: true,
        size: 8
      }), g.intl.string(g.t.WIPKAQ)]
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: g.intl.string(g.t["40shJS"])
    })]
  })
}

function b(A) {
  let {
    newRoleParams: e,
    setNewRoleParams: r,
    guildId: l,
    productId: u,
    listingRoleId: p,
    error: b
  } = A, C = (0, i.e7)([d.Z], () => null != p ? d.Z.getRole(l, p) : true);
  return null === e ? (0, n.jsxs)(s.xJW, {
    title: (0, n.jsxs)("div", {
      className: f.warningTitle,
      children: [(0, n.jsx)(q, {}), (0, n.jsx)(s.LZC, {
        horizontal: true,
        size: 4
      }), g.intl.string(g.t.ovXIrK)]
    }),
    tag: "label",
    error: b,
    titleClassName: f.roleHeader,
    children: [(0, n.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: g.intl.string(g.t.H7coX1)
    }), (0, n.jsx)(s.LZC, {
      size: 8
    }), (0, n.jsxs)("div", {
      className: f.reattachRoleRow,
      children: [(0, n.jsx)(m, {
        role: C,
        onRemove: true
      }), (0, n.jsx)(s.LZC, {
        horizontal: true,
        size: 8
      }), (0, n.jsx)(o.zx, {
        text: g.intl.string(g.t.KkRpFh),
        icon: s.UEU,
        iconPosition: "end",
        variant: "secondary",
        onClick: () => {
          r(true)
        }
      })]
    })]
  }) : null != p ? (0, n.jsxs)(s.xJW, {
    title: g.intl.string(g.t.zIg9t7),
    tag: "label",
    error: b,
    titleClassName: f.roleHeader,
    children: [(0, n.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: g.intl.string(g.t.OfuEkJ)
    }), (0, n.jsx)(s.LZC, {
      size: 8
    }), (0, n.jsx)(m, {
      role: C,
      onRemove: () => {
        a()(null != u, "productId cannot be null"), a()(null != C, "no role attached"),
          function(A) {
            let {
              onConfirm: e,
              roleName: r
            } = A;
            (0, s.ZDy)(async () => {
              let {
                default: A
              } = await t.e("73322").then(t.bind(t, 776045));
              return t => (0, n.jsx)(A, function(A) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(t);
                  "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable
                  }))), n.forEach(function(e) {
                    var n;
                    n = t[e], e in A ? Object.defineProperty(A, e, {
                      value: n,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : A[e] = n
                  })
                }
                return A
              }({
                title: g.intl.string(g.t.Y3Hi3d),
                body: (0, n.jsx)(h, {
                  roleName: r
                }),
                cta: g.intl.string(g.t.VawZV1),
                closeLabel: g.intl.string(g.t["6y+3Bw"]),
                onConfirm: e
              }, t))
            })
          }({
            roleName: C.name,
            onConfirm: () => r(null)
          })
      }
    })]
  }) : (a()(null != e, "newRoleParams cannot be null at this point"), (0, n.jsxs)(s.xJW, {
    required: true,
    title: g.intl.string(g.t.xZvFpK),
    tag: "label",
    error: b,
    titleClassName: f.roleHeader,
    children: [(0, n.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: g.intl.string(g.t.CllC5u)
    }), (0, n.jsx)(s.LZC, {
      size: 8
    }), (0, n.jsx)(c.Z, {
      newRoleParams: e,
      setNewRoleParams: r
    })]
  }))
}