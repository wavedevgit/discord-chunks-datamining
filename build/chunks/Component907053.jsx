/** Chunk was on 64941 **/
/** chunk id: 907053, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js"), require("./457542.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk472305 = require("./472305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932616 = require("./932616.js");

function m(t) {
  let {
    name: n,
    value: e
  } = t, [l, r] = s.useState(a.uA3.DEFAULT);
  return (0, i.jsx)("div", {
    className: u.infoRow,
    children: (0, i.jsx)(a.gNt, {
      label: n,
      children: (0, i.jsx)(a.kO8, {
        value: e,
        mode: l,
        supportsCopy: o.wS,
        onCopy: () => {
          (0, o.JG)(e, () => r(a.uA3.SUCCESS), () => r(a.uA3.ERROR))
        }
      })
    })
  })
}

function h(t) {
  let {
    onClose: n,
    transitionState: e
  } = t, [o, h] = s.useState(""), [j, p] = s.useState(""), [v, N] = s.useState(null), [_, g] = s.useState(false), [b, f] = s.useState("DOMAIN"), C = () => {
    g(true), N(null), l.tn.post({
      url: d.ANM.CONNECTION(d.ABu.DOMAIN, o),
      body: {},
      rejectWithError: false
    }).then(() => {
      n()
    }).catch(t => {
      var n, e, i, s, l, a, r;
      (null == (n = t.body) ? true : n.proof) && "DOMAIN" === b ? (p(t.body.proof), f("PROOF_DNS")) : N((null == (a = t.body) || null == (l = a.errors) || null == (s = l.domain) || null == (i = s._errors) || null == (e = i[0]) ? true : e.message) || (null == (r = t.body) ? true : r.message) || t.message)
    }).finally(() => {
      g(false)
    })
  };
  return (0, i.jsxs)(a.Y0X, {
    transitionState: e,
    className: u.__invalid_modal,
    parentComponent: "DomainVerifyModal",
    children: [(0, i.jsxs)(a.xBx, {
      direction: r.Z.Direction.VERTICAL,
      className: u.header,
      separator: false,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        children: x.intl.string(x.t["7lo8+e"])
      }), (0, i.jsx)(a.olH, {
        className: u.closeButton,
        onClick: n
      })]
    }), (0, i.jsxs)(a.MyZ, {
      activeSlide: b,
      width: 440,
      children: [(0, i.jsx)(a.Mi4, {
        id: "DOMAIN",
        children: (0, i.jsxs)("form", {
          onSubmit: t => {
            t.preventDefault(), C()
          },
          children: [(0, i.jsxs)(a.hzk, {
            className: u.content,
            children: [(0, i.jsx)(a.Text, {
              variant: "text-md/normal",
              color: "text-default",
              className: u.description,
              children: x.intl.string(x.t.NxPUqY)
            }), (0, i.jsx)(a.oil, {
              label: x.intl.string(x.t["4jIAa+"]),
              error: v,
              onChange: h,
              placeholder: c.pL,
              maxLength: 253,
              value: o,
              disabled: _,
              autoFocus: true
            })]
          }), (0, i.jsx)(a.mzw, {
            className: u.footer,
            children: (0, i.jsxs)(a.ButtonGroup, {
              direction: "horizontal-reverse",
              children: [(0, i.jsx)(a.Button, {
                variant: "primary",
                text: x.intl.string(x.t.PDTjLN),
                type: "submit",
                loading: _,
                disabled: "" === o
              }), (0, i.jsx)(a.Button, {
                variant: "secondary",
                text: x.intl.string(x.t["ETE/oC"]),
                onClick: n
              })]
            })
          })]
        })
      }), (0, i.jsxs)(a.Mi4, {
        id: "PROOF_DNS",
        children: [(0, i.jsxs)(a.hzk, {
          className: u.content,
          children: [(0, i.jsxs)("ol", {
            className: u.list,
            children: [(0, i.jsx)("li", {
              children: (0, i.jsx)(a.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: x.intl.string(x.t["yOxxA+"])
              })
            }), (0, i.jsxs)("li", {
              children: [(0, i.jsx)(a.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: x.intl.string(x.t.cSURbq)
              }), (0, i.jsxs)("div", {
                className: u.dnsRecordContainer,
                children: [(0, i.jsx)(m, {
                  name: x.intl.string(x.t.GL3q7k),
                  value: (0, c.Qv)(o)
                }), (0, i.jsx)(m, {
                  name: x.intl.string(x.t.Ccmixu),
                  value: "TXT"
                }), (0, i.jsx)(m, {
                  name: x.intl.string(x.t.PVLriT),
                  value: j
                })]
              })]
            })]
          }), (0, i.jsx)(a.Wn, {
            messageType: a.QYI.INFO,
            className: u.text,
            children: x.intl.string(x.t.CUBxDB)
          }), null != v && (0, i.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            className: u.text,
            children: v
          })]
        }), (0, i.jsxs)(a.mzw, {
          className: u.footer,
          direction: r.Z.Direction.HORIZONTAL,
          children: [(0, i.jsx)(a.Button, {
            variant: "secondary",
            text: x.intl.string(x.t["13/7kX"]),
            onClick: () => {
              f("DOMAIN"), N(null)
            }
          }), (0, i.jsxs)("div", {
            className: u.footerInner,
            children: [(0, i.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: u.__invalid_switchButton,
              children: (0, i.jsx)(a.Button, {
                variant: "secondary",
                text: x.intl.string(x.t.CkfdNx),
                onClick: () => {
                  f("PROOF_HTTP"), N(null)
                }
              })
            }), (0, i.jsx)(a.Button, {
              variant: "primary",
              text: x.intl.string(x.t["13ofGu"]),
              loading: _,
              onClick: C
            })]
          })]
        })]
      }), (0, i.jsxs)(a.Mi4, {
        id: "PROOF_HTTP",
        children: [(0, i.jsxs)(a.hzk, {
          className: u.content,
          children: [(0, i.jsx)(a.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: x.intl.string(x.t.p4ql7y)
          }), (0, i.jsxs)("div", {
            className: u.httpFileContainer,
            children: [(0, i.jsx)(m, {
              name: x.intl.string(x.t.GL3q7k),
              value: (0, c.F9)(o)
            }), (0, i.jsx)(m, {
              name: x.intl.string(x.t.PVLriT),
              value: j
            })]
          }), null != v && (0, i.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            className: u.text,
            children: v
          })]
        }), (0, i.jsxs)(a.mzw, {
          className: u.footer,
          direction: r.Z.Direction.HORIZONTAL,
          children: [(0, i.jsx)(a.Button, {
            variant: "secondary",
            text: x.intl.string(x.t["13/7kX"]),
            onClick: () => {
              f("DOMAIN"), N(null)
            }
          }), (0, i.jsxs)("div", {
            className: u.footerInner,
            children: [(0, i.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: u.__invalid_switchButton,
              children: (0, i.jsx)(a.Button, {
                variant: "secondary",
                text: x.intl.string(x.t.RhJMVQ),
                onClick: () => {
                  f("PROOF_DNS"), N(null)
                }
              })
            }), (0, i.jsx)(a.Button, {
              variant: "primary",
              text: x.intl.string(x.t["13ofGu"]),
              loading: _,
              onClick: C
            })]
          })]
        })]
      })]
    })]
  })
}