/** Chunk was on 30042 **/
/** chunk id: 30575, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk626135 = require("./626135.js"),
  Chunk326279 = require("./326279.js"),
  Chunk533583 = require("./533583.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk193183 = require("./193183.js");

function T(e) {
  switch (e) {
    case s.Q.INPUT:
      return s.a.INPUT;
    case s.Q.OUTPUT:
      return s.a.OUTPUT;
    case s.Q.INPUT_AND_OUTPUT:
      return s.a.INPUT_AND_OUTPUT;
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
    _ = (0, i.useRef)(false);

  function x() {
    _.current = true, d.Wz(n.displayName)
  }(0, o.zq)(() => {
    _.current || x()
  }), (0, i.useEffect)(() => {
    c.default.track(u.rMx.OPEN_MODAL, {
      type: null != p ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
      device_name: null != p ? "".concat(p.vendor.name, " ").concat(p.model.name) : n.displayName
    })
  }, [n.displayName, p]);
  let D = null != p ? m.intl.string(m.t.kiqvHR) : m.intl.string(m.t.AbnGIy);
  switch (n.type) {
    case s.Q.INPUT:
      t = null != p ? m.intl.format(m.t.NqNqy8, {
        vendorName: p.vendor.name,
        modelName: p.model.name
      }) : m.intl.format(m.t.stSaRk, {
        name: n.displayName
      });
      break;
    case s.Q.OUTPUT:
      t = null != p ? m.intl.format(m.t.uPgqIC, {
        vendorName: p.vendor.name,
        modelName: p.model.name
      }) : m.intl.format(m.t.jyhYp6, {
        name: n.displayName
      });
      break;
    default:
      t = (0, a.jsxs)(i.Fragment, {
        children: [null != p ? m.intl.format(m.t["4Xyzx8"], {
          vendorName: p.vendor.name,
          modelName: p.model.name
        }) : m.intl.format(m.t.Z7XQcn, {
          name: n.displayName
        }), (0, a.jsx)(r.FXm, {
          value: function(e) {
            if (null == e) return null;
            switch (e) {
              case s.a.INPUT:
                return s.Q.INPUT;
              case s.a.OUTPUT:
                return s.Q.OUTPUT;
              case s.a.INPUT_AND_OUTPUT:
                return s.Q.INPUT_AND_OUTPUT;
              default:
                return null
            }
          }(U),
          onChange: e => h(T(e)),
          options: [{
            name: m.intl.string(m.t.vhxqwc),
            value: s.Q.INPUT_AND_OUTPUT
          }, {
            name: m.intl.string(m.t["Kqs9+P"]),
            value: s.Q.INPUT
          }, {
            name: m.intl.string(m.t.GGlM3d),
            value: s.Q.OUTPUT
          }]
        })]
      })
  }
  return (0, a.jsxs)(r.Y0X, {
    transitionState: v,
    "aria-label": D,
    parentComponent: "ConnectedDeviceDetectionModal",
    children: [(0, a.jsx)(r.xBx, {
      separator: false,
      children: (0, a.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: D
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
              _.current = true, d.Gl(n.displayName), c.default.track(u.rMx.MODAL_DISMISSED, {
                type: null != p ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
                location_object: n.displayName,
                dismiss_type: "permanent"
              }), f()
            },
            children: m.intl.formatToPlainString(m.t.cwS3Ex, {
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
            text: m.intl.string(m.t.vPBgq6),
            onClick: () => {
              x(), f()
            }
          })
        }), (0, a.jsx)(r.Button, {
          variant: "primary",
          text: m.intl.string(m.t.ydkoDQ),
          onClick: () => {
            _.current = true, null != U && d.mo(n.displayName, U, "New Audio Device Detected Modal"), f()
          }
        })]
      })
    })]
  })
}