/** Chunk was on 73628 **/
/** chunk id: 943516, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  YP: () => p,
  ZP: () => h,
  aN: () => b
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
  let A, {
    onRemove: t,
    role: n
  } = e;
  return A = null != n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.nn4, {
      children: f.intl.format(f.t["94dBOT"], {
        color: (0, a.Rf)(n.color)
      })
    }), (0, r.jsx)("div", {
      className: g.attachedRoleColor,
      style: {
        backgroundColor: (0, a.Rf)(n.color)
      }
    }), (0, r.jsx)(s.LZC, {
      size: 8,
      horizontal: true
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: n.name
    }), null != t && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.LZC, {
        size: 12,
        horizontal: true
      }), (0, r.jsx)(s.P3F, {
        "aria-label": f.intl.string(f.t.tO2HIy),
        onClick: t,
        className: g.attachedRoleClose,
        children: (0, r.jsx)(s.Dio, {
          size: "xs",
          color: "currentColor",
          className: g.attachedRoleCloseIcon
        })
      })]
    })]
  }) : (0, r.jsx)(s.$jN, {
    type: s.$jN.Type.PULSING_ELLIPSIS
  }), (0, r.jsx)("div", {
    className: g.attachedRoleContainer,
    children: A
  })
}

function b() {
  return (0, Chunk951288.jsx)(Chunk481060.Mgn, {
    size: "xs",
    color: "currentColor",
    className: Chunk340036.warningIcon
  })
}

function q(e) {
  let {
    roleName: A
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: f.intl.format(f.t.i2x5aW, {
        roleName: A,
        emphasisHook: e => (0, r.jsx)(s.Text, {
          tag: "span",
          variant: "text-md/semibold",
          color: "text-default",
          children: e
        })
      })
    }), (0, r.jsxs)(s.X6q, {
      className: g.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, r.jsx)(s.I9k, {
        size: "sm",
        color: "currentColor"
      }), (0, r.jsx)(s.LZC, {
        horizontal: true,
        size: 8
      }), f.intl.string(f.t.KWx4HR)]
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: f.intl.string(f.t.hNHNpq)
    }), (0, r.jsxs)(s.X6q, {
      className: g.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, r.jsx)(s.XHJ, {
        size: "sm",
        color: "currentColor"
      }), (0, r.jsx)(s.LZC, {
        horizontal: true,
        size: 8
      }), f.intl.string(f.t.WIPKAQ)]
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: f.intl.string(f.t["40shJS"])
    })]
  })
}

function h(e) {
  let {
    newRoleParams: A,
    setNewRoleParams: n,
    guildId: a,
    productId: u,
    listingRoleId: p,
    error: h
  } = e, C = (0, o.e7)([d.Z], () => null != p ? d.Z.getRole(a, p) : true);
  return null === A ? (0, r.jsxs)(s.xJW, {
    title: (0, r.jsxs)("div", {
      className: g.warningTitle,
      children: [(0, r.jsx)(b, {}), (0, r.jsx)(s.LZC, {
        horizontal: true,
        size: 4
      }), f.intl.string(f.t.ovXIrK)]
    }),
    tag: "label",
    error: h,
    titleClassName: g.roleHeader,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: f.intl.string(f.t.H7coX1)
    }), (0, r.jsx)(s.LZC, {
      size: 8
    }), (0, r.jsxs)("div", {
      className: g.reattachRoleRow,
      children: [(0, r.jsx)(m, {
        role: C,
        onRemove: true
      }), (0, r.jsx)(s.LZC, {
        horizontal: true,
        size: 8
      }), (0, r.jsxs)(i.zx, {
        innerClassName: g.restoreDetachedRoleButtonInner,
        color: i.zx.Colors.PRIMARY,
        onClick: () => {
          n(true)
        },
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "none",
          children: f.intl.string(f.t.KkRpFh)
        }), (0, r.jsx)(s.LZC, {
          horizontal: true,
          size: 8
        }), (0, r.jsx)(s.UEU, {
          size: "xs",
          color: "currentColor"
        })]
      })]
    })]
  }) : null != p ? (0, r.jsxs)(s.xJW, {
    title: f.intl.string(f.t.zIg9t7),
    tag: "label",
    error: h,
    titleClassName: g.roleHeader,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: f.intl.string(f.t.OfuEkJ)
    }), (0, r.jsx)(s.LZC, {
      size: 8
    }), (0, r.jsx)(m, {
      role: C,
      onRemove: () => {
        l()(null != u, "productId cannot be null"), l()(null != C, "no role attached"),
          function(e) {
            let {
              onConfirm: A,
              roleName: n
            } = e;
            (0, s.ZDy)(async () => {
              let {
                default: e
              } = await t.e("73322").then(t.bind(t, 776045));
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
                title: f.intl.string(f.t.Y3Hi3d),
                body: (0, r.jsx)(q, {
                  roleName: n
                }),
                cta: f.intl.string(f.t.VawZV1),
                closeLabel: f.intl.string(f.t["6y+3Bw"]),
                onConfirm: A
              }, t))
            })
          }({
            roleName: C.name,
            onConfirm: () => n(null)
          })
      }
    })]
  }) : (l()(null != A, "newRoleParams cannot be null at this point"), (0, r.jsxs)(s.xJW, {
    required: true,
    title: f.intl.string(f.t.xZvFpK),
    tag: "label",
    error: h,
    titleClassName: g.roleHeader,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: f.intl.string(f.t.CllC5u)
    }), (0, r.jsx)(s.LZC, {
      size: 8
    }), (0, r.jsx)(c.Z, {
      newRoleParams: A,
      setNewRoleParams: n
    })]
  }))
}