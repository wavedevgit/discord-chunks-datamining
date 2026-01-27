/** Chunk was on 67096 **/
/** chunk id: 319543, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  Ay: () => b,
  Jn: () => p,
  id: () => v
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk317097 = require("./317097.js"),
  Chunk417597 = require("./417597.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk317525 = require("./317525.js"),
  Chunk137766 = require("./137766.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk463091 = require("./463091.js");

function p() {
  return {
    name: "",
    color: c.TGz
  }
}

function m(e) {
  let A, {
    onRemove: t,
    role: n
  } = e;
  return null != n ? (0, r.jsx)(o.CR_, {
    items: [{
      id: n.id,
      label: n.name,
      icon: {
        type: "role",
        color: (0, a.Hl)(n.color)
      }
    }],
    onRemove: t
  }) : (A = (0, r.jsx)(o.y$y, {
    type: o.y$y.Type.PULSING_ELLIPSIS
  }), (0, r.jsx)("div", {
    className: f.qo,
    children: A
  }))
}

function v() {
  return (0, r.jsx)(o.EpV, {
    size: "xs",
    color: "currentColor",
    className: f.QW
  })
}

function h(e) {
  let {
    roleName: A
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: g.intl.format(g.t.i2x5aY, {
        roleName: A,
        emphasisHook: e => (0, r.jsx)(o.Text, {
          tag: "span",
          variant: "text-md/semibold",
          color: "text-default",
          children: e
        })
      })
    }), (0, r.jsxs)(o.Heading, {
      className: f.wV,
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, r.jsx)(o.Nxw, {
        size: "sm",
        color: "currentColor"
      }), (0, r.jsx)(o.hKd, {
        horizontal: true,
        size: 8
      }), g.intl.string(g.t.KWx4HY)]
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: g.intl.string(g.t.hNHNph)
    }), (0, r.jsxs)(o.Heading, {
      className: f.wV,
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, r.jsx)(o.ucK, {
        size: "sm",
        color: "currentColor"
      }), (0, r.jsx)(o.hKd, {
        horizontal: true,
        size: 8
      }), g.intl.string(g.t.WIPKAb)]
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: g.intl.string(g.t["40shJX"])
    })]
  })
}

function b(e) {
  let {
    newRoleParams: A,
    setNewRoleParams: n,
    guildId: a,
    productId: c,
    listingRoleId: f,
    error: p
  } = e, v = (0, i.bG)([d.A], () => null != f ? d.A.getRole(a, f) : true);
  return null === A ? (0, r.jsx)(o.D0$, {
    label: g.intl.string(g.t.ovXIrP),
    description: g.intl.string(g.t["H7coX+"]),
    children: (0, r.jsxs)(o.M_l, {
      children: [(0, r.jsx)(m, {
        role: v,
        onRemove: true
      }), (0, r.jsx)(s.$nd, {
        text: g.intl.string(g.t.KkRpFi),
        icon: o.ejX,
        iconPosition: "end",
        variant: "secondary",
        onClick: () => {
          n(true)
        }
      })]
    })
  }) : null != f ? (0, r.jsx)(o.D0$, {
    label: g.intl.string(g.t.zIg9tw),
    description: g.intl.string(g.t.OfuEkP),
    errorMessage: p,
    children: (0, r.jsx)(m, {
      role: v,
      onRemove: () => {
        l()(null != c, "productId cannot be null"), l()(null != v, "no role attached"),
          function(e) {
            let {
              onConfirm: A,
              roleName: n
            } = e;
            (0, o.mMO)(async () => {
              let {
                default: e
              } = await t.e("44252").then(t.bind(t, 790743));
              return t => (0, r.jsx)(e, function(e) {
                for (var A = 1; A < arguments.length; A++) {
                  var t = null != arguments[A] ? arguments[A] : {},
                    r = Object.keys(t);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }))), r.forEach(function(A) {
                    var r;
                    r = t[A], A in e ? Object.defineProperty(e, A, {
                      value: r,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[A] = r
                  })
                }
                return e
              }({
                title: g.intl.string(g.t.Y3Hi3R),
                body: (0, r.jsx)(h, {
                  roleName: n
                }),
                cta: g.intl.string(g.t.VawZVx),
                closeLabel: g.intl.string(g.t["6y+3Bw"]),
                onConfirm: A
              }, t))
            })
          }({
            roleName: v.name,
            onConfirm: () => n(null)
          })
      }
    })
  }) : (l()(null != A, "newRoleParams cannot be null at this point"), (0, r.jsx)(o.D0$, {
    required: true,
    label: g.intl.string(g.t.xZvFpA),
    errorMessage: p,
    children: (0, r.jsx)(u.A, {
      newRoleParams: A,
      setNewRoleParams: n
    })
  }))
}