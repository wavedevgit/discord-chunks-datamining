/** Chunk was on 30042 **/
/** chunk id: 30575, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk626135 = require("./626135.js"),
  Chunk326279 = require("./326279.js"),
  Chunk465322 = require("./465322.js"),
  Chunk533583 = require("./533583.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk767871 = require("./767871.js");

function v(e) {
  switch (e) {
    case u.Q.INPUT:
      return u.a.INPUT;
    case u.Q.OUTPUT:
      return u.a.OUTPUT;
    case u.Q.INPUT_AND_OUTPUT:
      return u.a.INPUT_AND_OUTPUT;
    default:
      return null
  }
}

function f(e) {
  let t, {
      device: n,
      certifiedDeviceMetadata: f,
      onClose: D,
      transitionState: _
    } = e,
    [x, h] = (0, a.useState)(null != n ? v(n.type) : null),
    C = (0, a.useRef)(false),
    {
      optOutPerDevice: T
    } = (0, s.H)({
      location: "ConnectedDevice"
    });

  function y() {
    C.current = true, c.Wz(n.displayName)
  }(0, r.zq)(() => {
    C.current || y()
  }), (0, a.useEffect)(() => {
    d.default.track(m.rMx.OPEN_MODAL, {
      type: null != f ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
      device_name: null != f ? "".concat(f.vendor.name, " ").concat(f.model.name) : n.displayName
    })
  }, [n.displayName, f]);
  let E = null != f ? N.intl.string(N.t.kiqvHR) : N.intl.string(N.t.AbnGIy);
  switch (n.type) {
    case u.Q.INPUT:
      t = null != f ? N.intl.format(N.t.NqNqy8, {
        vendorName: f.vendor.name,
        modelName: f.model.name
      }) : N.intl.format(N.t.stSaRk, {
        name: n.displayName
      });
      break;
    case u.Q.OUTPUT:
      t = null != f ? N.intl.format(N.t.uPgqIC, {
        vendorName: f.vendor.name,
        modelName: f.model.name
      }) : N.intl.format(N.t.jyhYp6, {
        name: n.displayName
      });
      break;
    default:
      t = (0, i.jsxs)(a.Fragment, {
        children: [null != f ? N.intl.format(N.t["4Xyzx8"], {
          vendorName: f.vendor.name,
          modelName: f.model.name
        }) : N.intl.format(N.t.Z7XQcn, {
          name: n.displayName
        }), (0, i.jsx)(o.Gu, {
          value: x,
          className: p.options,
          onChange: e => {
            let {
              value: t
            } = e;
            return h(v(t))
          },
          options: [{
            name: N.intl.string(N.t.vhxqwc),
            value: u.Q.INPUT_AND_OUTPUT
          }, {
            name: N.intl.string(N.t["Kqs9+P"]),
            value: u.Q.INPUT
          }, {
            name: N.intl.string(N.t.GGlM3d),
            value: u.Q.OUTPUT
          }]
        })]
      })
  }
  return (0, i.jsxs)(l.Y0X, {
    transitionState: _,
    "aria-label": E,
    parentComponent: "ConnectedDeviceDetectionModal",
    children: [(0, i.jsx)(l.xBx, {
      separator: false,
      children: (0, i.jsx)(l.X6q, {
        variant: "heading-lg/semibold",
        children: E
      })
    }), (0, i.jsx)(l.hzk, {
      children: (0, i.jsx)(l.Text, {
        variant: "text-md/normal",
        children: (0, i.jsxs)(a.Fragment, {
          children: [t, (0, i.jsx)(o.zx, {
            className: p.neverShow,
            look: o.zx.Looks.LINK,
            color: o.zx.Colors.LINK,
            onClick: () => {
              T ? (C.current = true, c.Gl(n.displayName), d.default.track(m.rMx.MODAL_DISMISSED, {
                type: null != f ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
                location_object: n.displayName,
                dismiss_type: "permanent"
              })) : (C.current = true, c.oI(), d.default.track(m.rMx.MODAL_DISMISSED, {
                type: null != f ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
                dismiss_type: "permanent"
              })), D()
            },
            children: T ? N.intl.formatToPlainString(N.t.cwS3Ex, {
              device: n.displayName
            }) : N.intl.string(N.t["5E9SBw"])
          })]
        }, n.displayName)
      })
    }), (0, i.jsx)(l.mzw, {
      children: (0, i.jsxs)("div", {
        className: p.footerButtons,
        children: [(0, i.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: p.cancelButton,
          children: (0, i.jsx)(l.zxk, {
            variant: "secondary",
            text: N.intl.string(N.t.vPBgq6),
            onClick: () => {
              y(), D()
            }
          })
        }), (0, i.jsx)(l.zxk, {
          variant: "primary",
          text: N.intl.string(N.t.ydkoDQ),
          onClick: () => {
            C.current = true, null != x && c.mo(n.displayName, x, "New Audio Device Detected Modal"), D()
          }
        })]
      })
    })]
  })
}