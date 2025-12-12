/** Chunk was on 30042 **/
/** chunk id: 30575, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk626135 = require("./626135.js"),
  Chunk369183 = require("./369183.js"),
  Chunk533583 = require("./533583.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  switch (e) {
    case o.Q.INPUT:
      return o.a.INPUT;
    case o.Q.OUTPUT:
      return o.a.OUTPUT;
    case o.Q.INPUT_AND_OUTPUT:
      return o.a.INPUT_AND_OUTPUT;
    default:
      return null
  }
}

function T(e) {
  let t, {
      device: n,
      certifiedDeviceMetadata: T,
      onClose: U,
      transitionState: p
    } = e,
    [f, D] = (0, i.useState)(null != n ? m(n.type) : null),
    [P, _] = (0, i.useState)(false),
    y = (0, i.useRef)(false);

  function v() {
    y.current = true, d.Wz(n.displayName), P && I()
  }

  function I() {
    d.Gl(n.displayName), u.default.track(s.rMx.MODAL_DISMISSED, {
      type: null != T ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
      location_object: n.displayName,
      dismiss_type: "permanent"
    })
  }(0, c.zq)(() => {
    y.current || v()
  }), (0, i.useEffect)(() => {
    u.default.track(s.rMx.OPEN_MODAL, {
      type: null != T ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
      device_name: null != T ? "".concat(T.vendor.name, " ").concat(T.model.name) : n.displayName
    })
  }, [n.displayName, T]);
  let C = null != T ? N.intl.string(N.t.kiqvHd) : N.intl.string(N.t.AbnGI5);
  switch (n.type) {
    case o.Q.INPUT:
      t = null != T ? N.intl.format(N.t.NqNqy2, {
        vendorName: T.vendor.name,
        modelName: T.model.name
      }) : N.intl.format(N.t.stSaRi, {
        name: n.displayName
      });
      break;
    case o.Q.OUTPUT:
      t = null != T ? N.intl.format(N.t.uPgqIA, {
        vendorName: T.vendor.name,
        modelName: T.model.name
      }) : N.intl.format(N.t.jyhYp1, {
        name: n.displayName
      });
      break;
    case o.Q.INPUT_AND_OUTPUT:
      t = null != T ? N.intl.format(N.t["4Xyzxy"], {
        vendorName: T.vendor.name,
        modelName: T.model.name
      }) : N.intl.format(N.t.Z7XQcr, {
        name: n.displayName
      })
  }
  return (0, a.jsx)(l.u_l, {
    title: C,
    subtitle: t,
    actions: [{
      text: N.intl.string(N.t.vPBgq7),
      variant: "secondary",
      onClick: () => {
        v(), U()
      }
    }, {
      text: N.intl.string(N.t.ydkoDT),
      variant: "primary",
      onClick: () => {
        y.current = true, null != f && (d.mo(n.displayName, f, "New Audio Device Detected Modal"), P && I()), U()
      }
    }],
    actionBarInput: (0, a.jsx)(l.Blj, {
      checked: P,
      label: N.intl.format(N.t.cwS3E6, {
        device: n.displayName
      }),
      onChange: e => _(e)
    }),
    onClose: U,
    transitionState: p,
    children: n.type === o.Q.INPUT_AND_OUTPUT && (0, a.jsx)(r.FXm, {
      value: function(e) {
        if (null == e) return null;
        switch (e) {
          case o.a.INPUT:
            return o.Q.INPUT;
          case o.a.OUTPUT:
            return o.Q.OUTPUT;
          case o.a.INPUT_AND_OUTPUT:
            return o.Q.INPUT_AND_OUTPUT;
          default:
            return null
        }
      }(f),
      onChange: e => D(m(e)),
      options: [{
        name: N.intl.string(N.t.vhxqwT),
        value: o.Q.INPUT_AND_OUTPUT
      }, {
        name: N.intl.string(N.t["Kqs9+J"]),
        value: o.Q.INPUT
      }, {
        name: N.intl.string(N.t.GGlM3e),
        value: o.Q.OUTPUT
      }]
    })
  })
}