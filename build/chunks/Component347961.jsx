/** Chunk was on 68386 **/
/** chunk id: 347961, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk954571 = require("./954571.js"),
  Chunk179172 = require("./179172.js"),
  Chunk792205 = require("./792205.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  switch (e) {
    case o.E.INPUT:
      return o.f.INPUT;
    case o.E.OUTPUT:
      return o.f.OUTPUT;
    case o.E.INPUT_AND_OUTPUT:
      return o.f.INPUT_AND_OUTPUT;
    default:
      return null
  }
}

function T(e) {
  let t, {
      device: n,
      certifiedDeviceMetadata: T,
      onClose: U,
      transitionState: f
    } = e,
    [p, E] = (0, i.useState)(null != n ? m(n.type) : null),
    [D, P] = (0, i.useState)(false),
    _ = (0, i.useRef)(false);

  function y() {
    _.current = true, u.mk(n.displayName), D && v()
  }

  function v() {
    u.BG(n.displayName), d.default.track(s.HAw.MODAL_DISMISSED, {
      type: null != T ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
      location_object: n.displayName,
      dismiss_type: "permanent"
    })
  }(0, c.l0)(() => {
    _.current || y()
  }), (0, i.useEffect)(() => {
    d.default.track(s.HAw.OPEN_MODAL, {
      type: null != T ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
      device_name: null != T ? "".concat(T.vendor.name, " ").concat(T.model.name) : n.displayName
    })
  }, [n.displayName, T]);
  let I = null != T ? N.intl.string(N.t.kiqvHd) : N.intl.string(N.t.AbnGI5);
  switch (n.type) {
    case o.E.INPUT:
      t = null != T ? N.intl.format(N.t.NqNqy2, {
        vendorName: T.vendor.name,
        modelName: T.model.name
      }) : N.intl.format(N.t.stSaRi, {
        name: n.displayName
      });
      break;
    case o.E.OUTPUT:
      t = null != T ? N.intl.format(N.t.uPgqIA, {
        vendorName: T.vendor.name,
        modelName: T.model.name
      }) : N.intl.format(N.t.jyhYp1, {
        name: n.displayName
      });
      break;
    case o.E.INPUT_AND_OUTPUT:
      t = null != T ? N.intl.format(N.t["4Xyzxy"], {
        vendorName: T.vendor.name,
        modelName: T.model.name
      }) : N.intl.format(N.t.Z7XQcr, {
        name: n.displayName
      })
  }
  return (0, a.jsx)(l.aFV, {
    title: I,
    subtitle: t,
    actions: [{
      text: N.intl.string(N.t.vPBgq7),
      variant: "secondary",
      onClick: () => {
        y(), U()
      }
    }, {
      text: N.intl.string(N.t.ydkoDT),
      variant: "primary",
      onClick: () => {
        _.current = true, null != p && (u.TO(n.displayName, p, "New Audio Device Detected Modal"), D && v()), U()
      }
    }],
    actionBarInput: (0, a.jsx)(l.eCc, {
      checked: D,
      label: N.intl.format(N.t.cwS3E6, {
        device: n.displayName
      }),
      onChange: e => P(e)
    }),
    onClose: U,
    transitionState: f,
    children: n.type === o.E.INPUT_AND_OUTPUT && (0, a.jsx)(r.z6M, {
      value: function(e) {
        if (null == e) return null;
        switch (e) {
          case o.f.INPUT:
            return o.E.INPUT;
          case o.f.OUTPUT:
            return o.E.OUTPUT;
          case o.f.INPUT_AND_OUTPUT:
            return o.E.INPUT_AND_OUTPUT;
          default:
            return null
        }
      }(p),
      onChange: e => E(m(e)),
      options: [{
        name: N.intl.string(N.t.vhxqwT),
        value: o.E.INPUT_AND_OUTPUT
      }, {
        name: N.intl.string(N.t["Kqs9+J"]),
        value: o.E.INPUT
      }, {
        name: N.intl.string(N.t.GGlM3e),
        value: o.E.OUTPUT
      }]
    })
  })
}