/** Chunk was on 30042 **/
/** chunk id: 30575, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
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

function p(e) {
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

function v(e) {
  let t, {
      device: n,
      certifiedDeviceMetadata: v,
      onClose: f,
      transitionState: x
    } = e,
    [h, T] = (0, i.useState)(null != n ? p(n.type) : null),
    _ = (0, i.useRef)(false);

  function D() {
    _.current = true, d.Wz(n.displayName)
  }(0, r.zq)(() => {
    _.current || D()
  }), (0, i.useEffect)(() => {
    s.default.track(m.rMx.OPEN_MODAL, {
      type: null != v ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
      device_name: null != v ? "".concat(v.vendor.name, " ").concat(v.model.name) : n.displayName
    })
  }, [n.displayName, v]);
  let y = null != v ? u.intl.string(u.t.kiqvHR) : u.intl.string(u.t.AbnGIy);
  switch (n.type) {
    case c.Q.INPUT:
      t = null != v ? u.intl.format(u.t.NqNqy8, {
        vendorName: v.vendor.name,
        modelName: v.model.name
      }) : u.intl.format(u.t.stSaRk, {
        name: n.displayName
      });
      break;
    case c.Q.OUTPUT:
      t = null != v ? u.intl.format(u.t.uPgqIC, {
        vendorName: v.vendor.name,
        modelName: v.model.name
      }) : u.intl.format(u.t.jyhYp6, {
        name: n.displayName
      });
      break;
    default:
      t = (0, a.jsxs)(i.Fragment, {
        children: [null != v ? u.intl.format(u.t["4Xyzx8"], {
          vendorName: v.vendor.name,
          modelName: v.model.name
        }) : u.intl.format(u.t.Z7XQcn, {
          name: n.displayName
        }), (0, a.jsx)(l.Gu, {
          value: h,
          className: N.options,
          onChange: e => {
            let {
              value: t
            } = e;
            return T(p(t))
          },
          options: [{
            name: u.intl.string(u.t.vhxqwc),
            value: c.Q.INPUT_AND_OUTPUT
          }, {
            name: u.intl.string(u.t["Kqs9+P"]),
            value: c.Q.INPUT
          }, {
            name: u.intl.string(u.t.GGlM3d),
            value: c.Q.OUTPUT
          }]
        })]
      })
  }
  return (0, a.jsxs)(o.Y0X, {
    transitionState: x,
    "aria-label": y,
    parentComponent: "ConnectedDeviceDetectionModal",
    children: [(0, a.jsx)(o.xBx, {
      separator: false,
      children: (0, a.jsx)(o.X6q, {
        variant: "heading-lg/semibold",
        children: y
      })
    }), (0, a.jsx)(o.hzk, {
      children: (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        children: (0, a.jsxs)(i.Fragment, {
          children: [t, (0, a.jsx)(l.zx, {
            className: N.neverShow,
            look: l.zx.Looks.LINK,
            color: l.zx.Colors.LINK,
            onClick: () => {
              _.current = true, d.Gl(n.displayName), s.default.track(m.rMx.MODAL_DISMISSED, {
                type: null != v ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
                location_object: n.displayName,
                dismiss_type: "permanent"
              }), f()
            },
            children: u.intl.formatToPlainString(u.t.cwS3Ex, {
              device: n.displayName
            })
          })]
        }, n.displayName)
      })
    }), (0, a.jsx)(o.mzw, {
      children: (0, a.jsxs)("div", {
        className: N.footerButtons,
        children: [(0, a.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: N.cancelButton,
          children: (0, a.jsx)(o.zxk, {
            variant: "secondary",
            text: u.intl.string(u.t.vPBgq6),
            onClick: () => {
              D(), f()
            }
          })
        }), (0, a.jsx)(o.zxk, {
          variant: "primary",
          text: u.intl.string(u.t.ydkoDQ),
          onClick: () => {
            _.current = true, null != h && d.mo(n.displayName, h, "New Audio Device Detected Modal"), f()
          }
        })]
      })
    })]
  })
}