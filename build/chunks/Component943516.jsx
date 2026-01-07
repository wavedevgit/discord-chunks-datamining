/** Chunk was on 73628 **/
/** chunk id: 943516, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  YP: () => p,
  ZP: () => q,
  aN: () => v
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk850699 = require("./850699.js");

function p() {
  return {
    name: "",
    color: u.p6O
  }
}

function m(e) {
  let t, {
    onRemove: A,
    role: r
  } = e;
  return null != r ? (0, n.jsx)(s.QSK, {
    items: [{
      id: r.id,
      label: r.name,
      icon: {
        type: "role",
        color: (0, l.Rf)(r.color)
      }
    }],
    onRemove: A
  }) : (t = (0, n.jsx)(s.$jN, {
    type: s.$jN.Type.PULSING_ELLIPSIS
  }), (0, n.jsx)("div", {
    className: g.attachedRoleContainer,
    children: t
  }))
}

function v() {
  return (0, n.jsx)(s.Mgn, {
    size: "xs",
    color: "currentColor",
    className: g.warningIcon
  })
}

function h(e) {
  let {
    roleName: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: f.intl.format(f.t.i2x5aY, {
        roleName: t,
        emphasisHook: e => (0, n.jsx)(s.Text, {
          tag: "span",
          variant: "text-md/semibold",
          color: "text-default",
          children: e
        })
      })
    }), (0, n.jsxs)(s.Heading, {
      className: g.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, n.jsx)(s.I9k, {
        size: "sm",
        color: "currentColor"
      }), (0, n.jsx)(s.LZC, {
        horizontal: true,
        size: 8
      }), f.intl.string(f.t.KWx4HY)]
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: f.intl.string(f.t.hNHNph)
    }), (0, n.jsxs)(s.Heading, {
      className: g.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, n.jsx)(s.XHJ, {
        size: "sm",
        color: "currentColor"
      }), (0, n.jsx)(s.LZC, {
        horizontal: true,
        size: 8
      }), f.intl.string(f.t.WIPKAb)]
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: f.intl.string(f.t["40shJX"])
    })]
  })
}

function q(e) {
  let {
    newRoleParams: t,
    setNewRoleParams: r,
    guildId: l,
    productId: u,
    listingRoleId: g,
    error: p
  } = e, v = (0, i.e7)([d.Z], () => null != g ? d.Z.getRole(l, g) : true);
  return null === t ? (0, n.jsx)(s.gNt, {
    label: f.intl.string(f.t.ovXIrP),
    description: f.intl.string(f.t["H7coX+"]),
    children: (0, n.jsxs)(s.NIo, {
      children: [(0, n.jsx)(m, {
        role: v,
        onRemove: true
      }), (0, n.jsx)(o.zxk, {
        text: f.intl.string(f.t.KkRpFi),
        icon: s.UEU,
        iconPosition: "end",
        variant: "secondary",
        onClick: () => {
          r(true)
        }
      })]
    })
  }) : null != g ? (0, n.jsx)(s.gNt, {
    label: f.intl.string(f.t.zIg9tw),
    description: f.intl.string(f.t.OfuEkP),
    errorMessage: p,
    children: (0, n.jsx)(m, {
      role: v,
      onRemove: () => {
        a()(null != u, "productId cannot be null"), a()(null != v, "no role attached"),
          function(e) {
            let {
              onConfirm: t,
              roleName: r
            } = e;
            (0, s.ZDy)(async () => {
              let {
                default: e
              } = await A.e("73322").then(A.bind(A, 776045));
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
                title: f.intl.string(f.t.Y3Hi3R),
                body: (0, n.jsx)(h, {
                  roleName: r
                }),
                cta: f.intl.string(f.t.VawZVx),
                closeLabel: f.intl.string(f.t["6y+3Bw"]),
                onConfirm: t
              }, A))
            })
          }({
            roleName: v.name,
            onConfirm: () => r(null)
          })
      }
    })
  }) : (a()(null != t, "newRoleParams cannot be null at this point"), (0, n.jsx)(s.gNt, {
    required: true,
    label: f.intl.string(f.t.xZvFpA),
    errorMessage: p,
    children: (0, n.jsx)(c.Z, {
      newRoleParams: t,
      setNewRoleParams: r
    })
  }))
}