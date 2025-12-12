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
  Chunk611007 = require("./611007.js");

function m(t) {
  let {
    name: n,
    value: e
  } = t, [s, r] = i.useState(l.uA3.DEFAULT);
  return (0, a.jsx)("div", {
    className: u.infoRow,
    children: (0, a.jsx)(l.gNt, {
      label: n,
      children: (0, a.jsx)(l.kO8, {
        value: e,
        mode: s,
        supportsCopy: o.wS,
        onCopy: () => {
          (0, o.JG)(e, () => r(l.uA3.SUCCESS), () => r(l.uA3.ERROR))
        }
      })
    })
  })
}

function h(t) {
  let {
    onClose: n,
    transitionState: e
  } = t, [o, h] = i.useState(""), [j, p] = i.useState(""), [v, b] = i.useState(null), [N, g] = i.useState(false), [f, C] = i.useState("DOMAIN"), _ = () => {
    g(true), b(null), s.tn.post({
      url: d.ANM.CONNECTION(d.ABu.DOMAIN, o),
      body: {},
      rejectWithError: false
    }).then(() => {
      n()
    }).catch(t => {
      var n, e, a, i, s, l, r;
      (null == (n = t.body) ? true : n.proof) && "DOMAIN" === f ? (p(t.body.proof), C("PROOF_DNS")) : b((null == (l = t.body) || null == (s = l.errors) || null == (i = s.domain) || null == (a = i._errors) || null == (e = a[0]) ? true : e.message) || (null == (r = t.body) ? true : r.message) || t.message)
    }).finally(() => {
      g(false)
    })
  };
  return (0, a.jsxs)(l.Y0X, {
    transitionState: e,
    className: u.__invalid_modal,
    parentComponent: "DomainVerifyModal",
    children: [(0, a.jsxs)(l.xBx, {
      direction: r.Z.Direction.VERTICAL,
      className: u.header,
      separator: false,
      children: [(0, a.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        children: x.intl.string(x.t["7lo8+e"])
      }), (0, a.jsx)(l.olH, {
        className: u.closeButton,
        onClick: n
      })]
    }), (0, a.jsxs)(l.MyZ, {
      activeSlide: f,
      width: 440,
      children: [(0, a.jsx)(l.Mi4, {
        id: "DOMAIN",
        children: (0, a.jsxs)("form", {
          onSubmit: t => {
            t.preventDefault(), _()
          },
          children: [(0, a.jsxs)(l.hzk, {
            className: u.content,
            children: [(0, a.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "text-default",
              className: u.description,
              children: x.intl.string(x.t.NxPUqY)
            }), (0, a.jsx)(l.oil, {
              label: x.intl.string(x.t["4jIAa+"]),
              error: v,
              onChange: h,
              placeholder: c.pL,
              maxLength: 253,
              value: o,
              disabled: N,
              autoFocus: true
            })]
          }), (0, a.jsx)(l.mzw, {
            className: u.footer,
            children: (0, a.jsxs)(l.ButtonGroup, {
              direction: "horizontal-reverse",
              children: [(0, a.jsx)(l.Button, {
                variant: "primary",
                text: x.intl.string(x.t.PDTjLN),
                type: "submit",
                loading: N,
                disabled: "" === o
              }), (0, a.jsx)(l.Button, {
                variant: "secondary",
                text: x.intl.string(x.t["ETE/oC"]),
                onClick: n
              })]
            })
          })]
        })
      }), (0, a.jsxs)(l.Mi4, {
        id: "PROOF_DNS",
        children: [(0, a.jsxs)(l.hzk, {
          className: u.content,
          children: [(0, a.jsxs)("ol", {
            className: u.list,
            children: [(0, a.jsx)("li", {
              children: (0, a.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: x.intl.string(x.t["yOxxA+"])
              })
            }), (0, a.jsxs)("li", {
              children: [(0, a.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: x.intl.string(x.t.cSURbq)
              }), (0, a.jsxs)("div", {
                className: u.dnsRecordContainer,
                children: [(0, a.jsx)(m, {
                  name: x.intl.string(x.t.GL3q7k),
                  value: (0, c.Qv)(o)
                }), (0, a.jsx)(m, {
                  name: x.intl.string(x.t.Ccmixu),
                  value: "TXT"
                }), (0, a.jsx)(m, {
                  name: x.intl.string(x.t.PVLriT),
                  value: j
                })]
              })]
            })]
          }), (0, a.jsx)(l.Wn, {
            messageType: l.QYI.INFO,
            className: u.text,
            children: x.intl.string(x.t.CUBxDB)
          }), null != v && (0, a.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            className: u.text,
            children: v
          })]
        }), (0, a.jsxs)(l.mzw, {
          className: u.footer,
          direction: r.Z.Direction.HORIZONTAL,
          children: [(0, a.jsx)(l.Button, {
            variant: "secondary",
            text: x.intl.string(x.t["13/7kX"]),
            onClick: () => {
              C("DOMAIN"), b(null)
            }
          }), (0, a.jsxs)("div", {
            className: u.footerInner,
            children: [(0, a.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: u.__invalid_switchButton,
              children: (0, a.jsx)(l.Button, {
                variant: "secondary",
                text: x.intl.string(x.t.CkfdNx),
                onClick: () => {
                  C("PROOF_HTTP"), b(null)
                }
              })
            }), (0, a.jsx)(l.Button, {
              variant: "primary",
              text: x.intl.string(x.t["13ofGu"]),
              loading: N,
              onClick: _
            })]
          })]
        })]
      }), (0, a.jsxs)(l.Mi4, {
        id: "PROOF_HTTP",
        children: [(0, a.jsxs)(l.hzk, {
          className: u.content,
          children: [(0, a.jsx)(l.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: x.intl.string(x.t.p4ql7y)
          }), (0, a.jsxs)("div", {
            className: u.httpFileContainer,
            children: [(0, a.jsx)(m, {
              name: x.intl.string(x.t.GL3q7k),
              value: (0, c.F9)(o)
            }), (0, a.jsx)(m, {
              name: x.intl.string(x.t.PVLriT),
              value: j
            })]
          }), null != v && (0, a.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            className: u.text,
            children: v
          })]
        }), (0, a.jsxs)(l.mzw, {
          className: u.footer,
          direction: r.Z.Direction.HORIZONTAL,
          children: [(0, a.jsx)(l.Button, {
            variant: "secondary",
            text: x.intl.string(x.t["13/7kX"]),
            onClick: () => {
              C("DOMAIN"), b(null)
            }
          }), (0, a.jsxs)("div", {
            className: u.footerInner,
            children: [(0, a.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: u.__invalid_switchButton,
              children: (0, a.jsx)(l.Button, {
                variant: "secondary",
                text: x.intl.string(x.t.RhJMVQ),
                onClick: () => {
                  C("PROOF_DNS"), b(null)
                }
              })
            }), (0, a.jsx)(l.Button, {
              variant: "primary",
              text: x.intl.string(x.t["13ofGu"]),
              loading: N,
              onClick: _
            })]
          })]
        })]
      })]
    })]
  })
}