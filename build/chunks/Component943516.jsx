/** Chunk was on 73628 **/
/** chunk id: 943516, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  YP: () => p,
  ZP: () => q,
  aN: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk866442 = require("./866442.js"),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
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

function m(e) {
  let t, {
    onRemove: A,
    role: r
  } = e;
  return t = null != r ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.nn4, {
      children: f.intl.format(f.t["94dBOT"], {
        color: (0, a.Rf)(r.color)
      })
    }), (0, n.jsx)("div", {
      className: g.attachedRoleColor,
      style: {
        backgroundColor: (0, a.Rf)(r.color)
      }
    }), (0, n.jsx)(s.LZC, {
      size: 8,
      horizontal: true
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: r.name
    }), null != A && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(s.LZC, {
        size: 12,
        horizontal: true
      }), (0, n.jsx)(s.P3F, {
        "aria-label": f.intl.string(f.t.tO2HIy),
        onClick: A,
        className: g.attachedRoleClose,
        children: (0, n.jsx)(s.Dio, {
          size: "xs",
          color: "currentColor",
          className: g.attachedRoleCloseIcon
        })
      })]
    })]
  }) : (0, n.jsx)(s.$jN, {
    type: s.$jN.Type.PULSING_ELLIPSIS
  }), (0, n.jsx)("div", {
    className: g.attachedRoleContainer,
    children: t
  })
}

function h() {
  return (0, Chunk951288.jsx)(Chunk481060.Mgn, {
    size: "xs",
    color: "currentColor",
    className: Chunk340036.warningIcon
  })
}

function b(e) {
  let {
    roleName: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: f.intl.format(f.t.i2x5aW, {
        roleName: t,
        emphasisHook: e => (0, n.jsx)(s.Text, {
          tag: "span",
          variant: "text-md/semibold",
          color: "text-default",
          children: e
        })
      })
    }), (0, n.jsxs)(s.X6q, {
      className: g.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, n.jsx)(s.I9k, {
        size: "sm",
        color: "currentColor"
      }), (0, n.jsx)(s.LZC, {
        horizontal: true,
        size: 8
      }), f.intl.string(f.t.KWx4HR)]
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: f.intl.string(f.t.hNHNpq)
    }), (0, n.jsxs)(s.X6q, {
      className: g.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, n.jsx)(s.XHJ, {
        size: "sm",
        color: "currentColor"
      }), (0, n.jsx)(s.LZC, {
        horizontal: true,
        size: 8
      }), f.intl.string(f.t.WIPKAQ)]
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: f.intl.string(f.t["40shJS"])
    })]
  })
}

function q(e) {
  let {
    newRoleParams: t,
    setNewRoleParams: r,
    guildId: a,
    productId: u,
    listingRoleId: p,
    error: q
  } = e, C = (0, o.e7)([d.Z], () => null != p ? d.Z.getRole(a, p) : true);
  return null === t ? (0, n.jsxs)(s.xJW, {
    title: (0, n.jsxs)("div", {
      className: g.warningTitle,
      children: [(0, n.jsx)(h, {}), (0, n.jsx)(s.LZC, {
        horizontal: true,
        size: 4
      }), f.intl.string(f.t.ovXIrK)]
    }),
    tag: "label",
    error: q,
    titleClassName: g.roleHeader,
    children: [(0, n.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: f.intl.string(f.t.H7coX1)
    }), (0, n.jsx)(s.LZC, {
      size: 8
    }), (0, n.jsxs)("div", {
      className: g.reattachRoleRow,
      children: [(0, n.jsx)(m, {
        role: C,
        onRemove: true
      }), (0, n.jsx)(s.LZC, {
        horizontal: true,
        size: 8
      }), (0, n.jsxs)(i.zx, {
        innerClassName: g.restoreDetachedRoleButtonInner,
        color: i.zx.Colors.PRIMARY,
        onClick: () => {
          r(true)
        },
        children: [(0, n.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "none",
          children: f.intl.string(f.t.KkRpFh)
        }), (0, n.jsx)(s.LZC, {
          horizontal: true,
          size: 8
        }), (0, n.jsx)(s.UEU, {
          size: "xs",
          color: "currentColor"
        })]
      })]
    })]
  }) : null != p ? (0, n.jsxs)(s.xJW, {
    title: f.intl.string(f.t.zIg9t7),
    tag: "label",
    error: q,
    titleClassName: g.roleHeader,
    children: [(0, n.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: f.intl.string(f.t.OfuEkJ)
    }), (0, n.jsx)(s.LZC, {
      size: 8
    }), (0, n.jsx)(m, {
      role: C,
      onRemove: () => {
        l()(null != u, "productId cannot be null"), l()(null != C, "no role attached"),
          function(e) {
            let {
              onConfirm: t,
              roleName: r
            } = e;
            (0, s.ZDy)(async () => {
              let {
                default: e
              } = await Promise.resolve().then(A.bind(A, 776045));
              return A => (0, n.jsx)(e, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var A = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(A);
                  "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable
                  }))), n.forEach(function(t) {
                    var n;
                    n = A[t], t in e ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = n
                  })
                }
                return e
              }({
                title: f.intl.string(f.t.Y3Hi3d),
                body: (0, n.jsx)(b, {
                  roleName: r
                }),
                cta: f.intl.string(f.t.VawZV1),
                closeLabel: f.intl.string(f.t["6y+3Bw"]),
                onConfirm: t
              }, A))
            })
          }({
            roleName: C.name,
            onConfirm: () => r(null)
          })
      }
    })]
  }) : (l()(null != t, "newRoleParams cannot be null at this point"), (0, n.jsxs)(s.xJW, {
    required: true,
    title: f.intl.string(f.t.xZvFpK),
    tag: "label",
    error: q,
    titleClassName: g.roleHeader,
    children: [(0, n.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: f.intl.string(f.t.CllC5u)
    }), (0, n.jsx)(s.LZC, {
      size: 8
    }), (0, n.jsx)(c.Z, {
      newRoleParams: t,
      setNewRoleParams: r
    })]
  }))
}