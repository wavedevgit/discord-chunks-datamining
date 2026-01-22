/** Chunk was on 78250 **/
/** chunk id: 983665, original params: t,n,e (module,exports,require) **/
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
    name: n,
    value: e
  } = t, [s, r] = a.useState(l.qCr.DEFAULT);
  return (0, i.jsx)("div", {
    className: m.lj,
    children: (0, i.jsx)(l.D0$, {
      label: n,
      children: (0, i.jsx)(l.e2O, {
        value: e,
        mode: s,
        supportsCopy: d.p5,
        onCopy: () => {
          (0, d.C)(e, () => r(l.qCr.SUCCESS), () => r(l.qCr.ERROR))
        }
      })
    })
  })
}

function h(t) {
  let {
    onClose: n,
    transitionState: e
  } = t, [d, h] = a.useState(""), [j, g] = a.useState(""), [p, v] = a.useState(null), [N, _] = a.useState(false), [f, C] = a.useState("DOMAIN"), O = () => {
    _(true), v(null), s.Bo.post({
      url: o.Rsh.CONNECTION(o.fg2.DOMAIN, d),
      body: {},
      rejectWithError: false
    }).then(() => {
      n()
    }).catch(t => {
      var n, e, i, a, s, l, r;
      (null == (n = t.body) ? true : n.proof) && "DOMAIN" === f ? (g(t.body.proof), C("PROOF_DNS")) : v((null == (l = t.body) || null == (s = l.errors) || null == (a = s.domain) || null == (i = a._errors) || null == (e = i[0]) ? true : e.message) || (null == (r = t.body) ? true : r.message) || t.message)
    }).finally(() => {
      _(false)
    })
  };
  return (0, i.jsxs)(l.EOs, {
    "data-migration-pending": true,
    transitionState: e,
    className: m.__invalid_modal,
    parentComponent: "DomainVerifyModal",
    children: [(0, i.jsxs)(l.rQ0, {
      "data-migration-pending": true,
      direction: r.A.Direction.VERTICAL,
      className: m.wx,
      separator: false,
      children: [(0, i.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        children: x.intl.string(x.t["7lo8+e"])
      }), (0, i.jsx)(l.s_y, {
        "data-migration-pending": true,
        className: m.b,
        onClick: n
      })]
    }), (0, i.jsxs)(l.tN_, {
      activeSlide: f,
      width: 440,
      children: [(0, i.jsx)(l.q7S, {
        id: "DOMAIN",
        children: (0, i.jsxs)("form", {
          onSubmit: t => {
            t.preventDefault(), O()
          },
          children: [(0, i.jsxs)(l.$mQ, {
            "data-migration-pending": true,
            className: m.Qs,
            children: [(0, i.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "text-default",
              className: m.h_,
              children: x.intl.string(x.t.NxPUqY)
            }), (0, i.jsx)(l.ksK, {
              label: x.intl.string(x.t["4jIAa+"]),
              error: p,
              onChange: h,
              placeholder: c.Ai,
              maxLength: 253,
              value: d,
              disabled: N,
              autoFocus: true
            })]
          }), (0, i.jsx)(l.jlY, {
            "data-migration-pending": true,
            className: m.qr,
            children: (0, i.jsxs)(l.ButtonGroup, {
              direction: "horizontal-reverse",
              children: [(0, i.jsx)(l.Button, {
                variant: "primary",
                text: x.intl.string(x.t.PDTjLN),
                type: "submit",
                loading: N,
                disabled: "" === d
              }), (0, i.jsx)(l.Button, {
                variant: "secondary",
                text: x.intl.string(x.t["ETE/oC"]),
                onClick: n
              })]
            })
          })]
        })
      }), (0, i.jsxs)(l.q7S, {
        id: "PROOF_DNS",
        children: [(0, i.jsxs)(l.$mQ, {
          "data-migration-pending": true,
          className: m.Qs,
          children: [(0, i.jsxs)("ol", {
            className: m.p_,
            children: [(0, i.jsx)("li", {
              children: (0, i.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: x.intl.string(x.t["yOxxA+"])
              })
            }), (0, i.jsxs)("li", {
              children: [(0, i.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: x.intl.string(x.t.cSURbq)
              }), (0, i.jsxs)("div", {
                className: m.st,
                children: [(0, i.jsx)(u, {
                  name: x.intl.string(x.t.GL3q7k),
                  value: (0, c.hE)(d)
                }), (0, i.jsx)(u, {
                  name: x.intl.string(x.t.Ccmixu),
                  value: "TXT"
                }), (0, i.jsx)(u, {
                  name: x.intl.string(x.t.PVLriT),
                  value: j
                })]
              })]
            })]
          }), (0, i.jsx)(l.po8, {
            messageType: l.YCn.INFO,
            className: m.Qq,
            children: x.intl.string(x.t.CUBxDB)
          }), null != p && (0, i.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            className: m.Qq,
            children: p
          })]
        }), (0, i.jsxs)(l.jlY, {
          "data-migration-pending": true,
          className: m.qr,
          direction: r.A.Direction.HORIZONTAL,
          children: [(0, i.jsx)(l.Button, {
            variant: "secondary",
            text: x.intl.string(x.t["13/7kX"]),
            onClick: () => {
              C("DOMAIN"), v(null)
            }
          }), (0, i.jsxs)("div", {
            className: m.Um,
            children: [(0, i.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: m.__invalid_switchButton,
              children: (0, i.jsx)(l.Button, {
                variant: "secondary",
                text: x.intl.string(x.t.CkfdNx),
                onClick: () => {
                  C("PROOF_HTTP"), v(null)
                }
              })
            }), (0, i.jsx)(l.Button, {
              variant: "primary",
              text: x.intl.string(x.t["13ofGu"]),
              loading: N,
              onClick: O
            })]
          })]
        })]
      }), (0, i.jsxs)(l.q7S, {
        id: "PROOF_HTTP",
        children: [(0, i.jsxs)(l.$mQ, {
          "data-migration-pending": true,
          className: m.Qs,
          children: [(0, i.jsx)(l.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: x.intl.string(x.t.p4ql7y)
          }), (0, i.jsxs)("div", {
            className: m.eX,
            children: [(0, i.jsx)(u, {
              name: x.intl.string(x.t.GL3q7k),
              value: (0, c.uu)(d)
            }), (0, i.jsx)(u, {
              name: x.intl.string(x.t.PVLriT),
              value: j
            })]
          }), null != p && (0, i.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            className: m.Qq,
            children: p
          })]
        }), (0, i.jsxs)(l.jlY, {
          "data-migration-pending": true,
          className: m.qr,
          direction: r.A.Direction.HORIZONTAL,
          children: [(0, i.jsx)(l.Button, {
            variant: "secondary",
            text: x.intl.string(x.t["13/7kX"]),
            onClick: () => {
              C("DOMAIN"), v(null)
            }
          }), (0, i.jsxs)("div", {
            className: m.Um,
            children: [(0, i.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: m.__invalid_switchButton,
              children: (0, i.jsx)(l.Button, {
                variant: "secondary",
                text: x.intl.string(x.t.RhJMVQ),
                onClick: () => {
                  C("PROOF_DNS"), v(null)
                }
              })
            }), (0, i.jsx)(l.Button, {
              variant: "primary",
              text: x.intl.string(x.t["13ofGu"]),
              loading: N,
              onClick: O
            })]
          })]
        })]
      })]
    })]
  })
}