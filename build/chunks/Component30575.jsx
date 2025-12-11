/** Chunk was on 30042 **/
/** chunk id: 30575, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk626135 = require("./626135.js"),
  Chunk326279 = require("./326279.js"),
  Chunk533583 = require("./533583.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk958429 = require("./958429.js");

function T(e) {
  switch (e) {
    case c.Q.INPUT:
      return c.a.INPUT;
    case c.Q.OUTPUT:
      return c.a.OUTPUT;
    case c.Q.INPUT_AND_OUTPUT:
      return c.a.INPUT_AND_OUTPUT;
    default:
      return null
  }
}

function p(e) {
  let t, {
      device: n,
      certifiedDeviceMetadata: p,
      onClose: f,
      transitionState: v
    } = e,
    [U, h] = (0, i.useState)(null != n ? T(n.type) : null),
    x = (0, i.useRef)(false);

  function D() {
    x.current = true, d.Wz(n.displayName)
  }(0, o.zq)(() => {
    x.current || D()
  }), (0, i.useEffect)(() => {
    s.default.track(u.rMx.OPEN_MODAL, {
      type: null != p ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
      device_name: null != p ? "".concat(p.vendor.name, " ").concat(p.model.name) : n.displayName
    })
  }, [n.displayName, p]);
  let _ = null != p ? m.intl.string(m.t.kiqvHd) : m.intl.string(m.t.AbnGI5);
  switch (n.type) {
    case c.Q.INPUT:
      t = null != p ? m.intl.format(m.t.NqNqy2, {
        vendorName: p.vendor.name,
        modelName: p.model.name
      }) : m.intl.format(m.t.stSaRi, {
        name: n.displayName
      });
      break;
    case c.Q.OUTPUT:
      t = null != p ? m.intl.format(m.t.uPgqIA, {
        vendorName: p.vendor.name,
        modelName: p.model.name
      }) : m.intl.format(m.t.jyhYp1, {
        name: n.displayName
      });
      break;
    default:
      t = (0, a.jsxs)("div", {
        className: N.radioMessageContainer,
        children: [(0, a.jsx)("div", {
          children: null != p ? m.intl.format(m.t["4Xyzxy"], {
            vendorName: p.vendor.name,
            modelName: p.model.name
          }) : m.intl.format(m.t.Z7XQcr, {
            name: n.displayName
          })
        }), (0, a.jsx)(r.FXm, {
          value: function(e) {
            if (null == e) return null;
            switch (e) {
              case c.a.INPUT:
                return c.Q.INPUT;
              case c.a.OUTPUT:
                return c.Q.OUTPUT;
              case c.a.INPUT_AND_OUTPUT:
                return c.Q.INPUT_AND_OUTPUT;
              default:
                return null
            }
          }(U),
          onChange: e => h(T(e)),
          options: [{
            name: m.intl.string(m.t.vhxqwT),
            value: c.Q.INPUT_AND_OUTPUT
          }, {
            name: m.intl.string(m.t["Kqs9+J"]),
            value: c.Q.INPUT
          }, {
            name: m.intl.string(m.t.GGlM3e),
            value: c.Q.OUTPUT
          }]
        })]
      })
  }
  return (0, a.jsxs)(r.Y0X, {
    transitionState: v,
    "aria-label": _,
    parentComponent: "ConnectedDeviceDetectionModal",
    children: [(0, a.jsx)(r.xBx, {
      separator: false,
      children: (0, a.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: _
      })
    }), (0, a.jsx)(r.hzk, {
      children: (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        children: (0, a.jsxs)(i.Fragment, {
          children: [t, (0, a.jsx)(l.zx, {
            className: N.neverShow,
            look: l.zx.Looks.LINK,
            color: l.zx.Colors.LINK,
            onClick: () => {
              x.current = true, d.Gl(n.displayName), s.default.track(u.rMx.MODAL_DISMISSED, {
                type: null != p ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
                location_object: n.displayName,
                dismiss_type: "permanent"
              }), f()
            },
            children: m.intl.formatToPlainString(m.t.cwS3E6, {
              device: n.displayName
            })
          })]
        }, n.displayName)
      })
    }), (0, a.jsx)(r.mzw, {
      children: (0, a.jsxs)("div", {
        className: N.footerButtons,
        children: [(0, a.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: N.cancelButton,
          children: (0, a.jsx)(r.Button, {
            variant: "secondary",
            text: m.intl.string(m.t.vPBgq7),
            onClick: () => {
              D(), f()
            }
          })
        }), (0, a.jsx)(r.Button, {
          variant: "primary",
          text: m.intl.string(m.t.ydkoDT),
          onClick: () => {
            x.current = true, null != U && d.mo(n.displayName, U, "New Audio Device Detected Modal"), f()
          }
        })]
      })
    })]
  })
}