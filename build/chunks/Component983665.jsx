/** Chunk was on 78250 **/
/** chunk id: 983665, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./896048.js"), require("./492834.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk957565 = require("./957565.js"),
  Chunk677558 = require("./677558.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk159621 = require("./159621.js");

function u(t) {
  let {
    name: e,
    value: s
  } = t, [a, r] = i.useState(l.qCr.DEFAULT);
  return (0, n.jsx)("div", {
    className: m.lj,
    children: (0, n.jsx)(l.D0$, {
      label: e,
      children: (0, n.jsx)(l.e2O, {
        value: s,
        mode: a,
        supportsCopy: c.p5,
        onCopy: () => {
          (0, c.C)(s, () => r(l.qCr.SUCCESS), () => r(l.qCr.ERROR))
        }
      })
    })
  })
}

function h(t) {
  let {
    onClose: e,
    transitionState: s
  } = t, [c, h] = i.useState(""), [j, p] = i.useState(""), [v, N] = i.useState(null), [g, _] = i.useState(false), [f, C] = i.useState("DOMAIN"), O = () => {
    _(true), N(null), a.Bo.post({
      url: o.Rsh.CONNECTION(o.fg2.DOMAIN, c),
      body: {},
      rejectWithError: false
    }).then(() => {
      e()
    }).catch(t => {
      var e, s, n, i, a, l, r;
      (null == (e = t.body) ? true : e.proof) && "DOMAIN" === f ? (p(t.body.proof), C("PROOF_DNS")) : N((null == (l = t.body) || null == (a = l.errors) || null == (i = a.domain) || null == (n = i._errors) || null == (s = n[0]) ? true : s.message) || (null == (r = t.body) ? true : r.message) || t.message)
    }).finally(() => {
      _(false)
    })
  };
  return (0, n.jsxs)(l.EOs, {
    transitionState: s,
    className: m.__invalid_modal,
    parentComponent: "DomainVerifyModal",
    children: [(0, n.jsxs)(l.rQ0, {
      direction: r.A.Direction.VERTICAL,
      className: m.wx,
      separator: false,
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        children: x.intl.string(x.t["7lo8+e"])
      }), (0, n.jsx)(l.s_y, {
        className: m.b,
        onClick: e
      })]
    }), (0, n.jsxs)(l.tN_, {
      activeSlide: f,
      width: 440,
      children: [(0, n.jsx)(l.q7S, {
        id: "DOMAIN",
        children: (0, n.jsxs)("form", {
          onSubmit: t => {
            t.preventDefault(), O()
          },
          children: [(0, n.jsxs)(l.$mQ, {
            className: m.Qs,
            children: [(0, n.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "text-default",
              className: m.h_,
              children: x.intl.string(x.t.NxPUqY)
            }), (0, n.jsx)(l.ksK, {
              label: x.intl.string(x.t["4jIAa+"]),
              error: v,
              onChange: h,
              placeholder: d.Ai,
              maxLength: 253,
              value: c,
              disabled: g,
              autoFocus: true
            })]
          }), (0, n.jsx)(l.jlY, {
            className: m.qr,
            children: (0, n.jsxs)(l.ButtonGroup, {
              direction: "horizontal-reverse",
              children: [(0, n.jsx)(l.Button, {
                variant: "primary",
                text: x.intl.string(x.t.PDTjLN),
                type: "submit",
                loading: g,
                disabled: "" === c
              }), (0, n.jsx)(l.Button, {
                variant: "secondary",
                text: x.intl.string(x.t["ETE/oC"]),
                onClick: e
              })]
            })
          })]
        })
      }), (0, n.jsxs)(l.q7S, {
        id: "PROOF_DNS",
        children: [(0, n.jsxs)(l.$mQ, {
          className: m.Qs,
          children: [(0, n.jsxs)("ol", {
            className: m.p_,
            children: [(0, n.jsx)("li", {
              children: (0, n.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: x.intl.string(x.t["yOxxA+"])
              })
            }), (0, n.jsxs)("li", {
              children: [(0, n.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: x.intl.string(x.t.cSURbq)
              }), (0, n.jsxs)("div", {
                className: m.st,
                children: [(0, n.jsx)(u, {
                  name: x.intl.string(x.t.GL3q7k),
                  value: (0, d.hE)(c)
                }), (0, n.jsx)(u, {
                  name: x.intl.string(x.t.Ccmixu),
                  value: "TXT"
                }), (0, n.jsx)(u, {
                  name: x.intl.string(x.t.PVLriT),
                  value: j
                })]
              })]
            })]
          }), (0, n.jsx)(l.po8, {
            messageType: l.YCn.INFO,
            className: m.Qq,
            children: x.intl.string(x.t.CUBxDB)
          }), null != v && (0, n.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            className: m.Qq,
            children: v
          })]
        }), (0, n.jsxs)(l.jlY, {
          className: m.qr,
          direction: r.A.Direction.HORIZONTAL,
          children: [(0, n.jsx)(l.Button, {
            variant: "secondary",
            text: x.intl.string(x.t["13/7kX"]),
            onClick: () => {
              C("DOMAIN"), N(null)
            }
          }), (0, n.jsxs)("div", {
            className: m.Um,
            children: [(0, n.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: m.__invalid_switchButton,
              children: (0, n.jsx)(l.Button, {
                variant: "secondary",
                text: x.intl.string(x.t.CkfdNx),
                onClick: () => {
                  C("PROOF_HTTP"), N(null)
                }
              })
            }), (0, n.jsx)(l.Button, {
              variant: "primary",
              text: x.intl.string(x.t["13ofGu"]),
              loading: g,
              onClick: O
            })]
          })]
        })]
      }), (0, n.jsxs)(l.q7S, {
        id: "PROOF_HTTP",
        children: [(0, n.jsxs)(l.$mQ, {
          className: m.Qs,
          children: [(0, n.jsx)(l.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: x.intl.string(x.t.p4ql7y)
          }), (0, n.jsxs)("div", {
            className: m.eX,
            children: [(0, n.jsx)(u, {
              name: x.intl.string(x.t.GL3q7k),
              value: (0, d.uu)(c)
            }), (0, n.jsx)(u, {
              name: x.intl.string(x.t.PVLriT),
              value: j
            })]
          }), null != v && (0, n.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            className: m.Qq,
            children: v
          })]
        }), (0, n.jsxs)(l.jlY, {
          className: m.qr,
          direction: r.A.Direction.HORIZONTAL,
          children: [(0, n.jsx)(l.Button, {
            variant: "secondary",
            text: x.intl.string(x.t["13/7kX"]),
            onClick: () => {
              C("DOMAIN"), N(null)
            }
          }), (0, n.jsxs)("div", {
            className: m.Um,
            children: [(0, n.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: m.__invalid_switchButton,
              children: (0, n.jsx)(l.Button, {
                variant: "secondary",
                text: x.intl.string(x.t.RhJMVQ),
                onClick: () => {
                  C("PROOF_DNS"), N(null)
                }
              })
            }), (0, n.jsx)(l.Button, {
              variant: "primary",
              text: x.intl.string(x.t["13ofGu"]),
              loading: g,
              onClick: O
            })]
          })]
        })]
      })]
    })]
  })
}