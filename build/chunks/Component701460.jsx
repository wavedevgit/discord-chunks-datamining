/** Chunk was on 54934 **/
/** chunk id: 701460, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js"), require("./415506.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk726542 = require("./726542.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk823985 = require("./823985.js"),
  Chunk202120 = require("./202120.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk345347 = require("./345347.js");

function h(t) {
  var e, n;
  let {
    onClose: h,
    transitionState: x,
    location: m,
    successRedirect: f,
    platformType: p
  } = t, [j, v] = a.useState(""), [_, g] = a.useState(null), [S, b] = a.useState(false), k = null != (n = null == (e = o.Z.get(p)) ? true : e.name) ? n : d.intl.string(d.t["bU/GZm"]), y = async () => {
    b(true), g(null);
    try {
      let t = await (0, c.H)(p, {
        location: m,
        successRedirect: f,
        handle: j
      });
      if (null == t) throw Error();
      h()
    } catch (t) {
      g(d.intl.string(d.t["7wbPNj"])), b(false)
    }
  }, B = (0, l.r)(p), N = (0, l.j)(j, p);
  return (0, i.jsxs)(r.Y0X, {
    transitionState: x,
    className: u.__invalid_modal,
    parentComponent: "FederatedSocialModal",
    children: [(0, i.jsxs)(r.xBx, {
      direction: s.Z.Direction.VERTICAL,
      className: u.header,
      separator: false,
      children: [(0, i.jsx)(r.X6q, {
        variant: "heading-xl/semibold",
        children: d.intl.formatToPlainString(d.t.ImMhq6, {
          serviceName: k
        })
      }), (0, i.jsx)(r.olH, {
        className: u.closeButton,
        onClick: h
      })]
    }), (0, i.jsxs)("form", {
      onSubmit: t => {
        t.preventDefault(), y()
      },
      children: [(0, i.jsxs)(r.hzk, {
        className: u.content,
        children: [(0, i.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: u.description,
          children: d.intl.formatToPlainString(d.t["7TByKi"], {
            serviceName: k
          })
        }), (0, i.jsx)(r.xJW, {
          title: d.intl.string(d.t.tZ9QFR),
          error: _,
          children: (0, i.jsx)(r.oil, {
            onChange: v,
            placeholder: B,
            value: j,
            disabled: S,
            autoFocus: true
          })
        })]
      }), (0, i.jsx)(r.mzw, {
        className: u.footer,
        children: (0, i.jsxs)(r.hE2, {
          direction: "horizontal-reverse",
          children: [(0, i.jsx)(r.zxk, {
            variant: "primary",
            text: d.intl.string(d.t.PDTjLC),
            type: "submit",
            loading: S,
            disabled: !N
          }), (0, i.jsx)(r.zxk, {
            variant: "secondary",
            text: d.intl.string(d.t["ETE/oK"]),
            onClick: h
          })]
        })
      })]
    })]
  })
}