/** Chunk was on 30042 **/
/** chunk id: 30575, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk626135 = require("./626135.js"),
  Chunk326279 = require("./326279.js"),
  Chunk465322 = require("./465322.js"),
  Chunk533583 = require("./533583.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk815646 = require("./815646.js");

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
      t = <a.Fragment>{null != f ? N.intl.format(N.t["4Xyzx8"], {
          vendorName: f.vendor.name,
          modelName: f.model.name
        }) : N.intl.format(N.t.Z7XQcn, {
          name: n.displayName
        })}{<l.FXm value={x} className={p.options} onChange={e => {
            let {
              value: t
            } = e;
            return h(v(t))
          }} options={[{
            name: N.intl.string(N.t.vhxqwc),
            value: u.Q.INPUT_AND_OUTPUT
          }, {
            name: N.intl.string(N.t["Kqs9+P"]),
            value: u.Q.INPUT
          }, {
            name: N.intl.string(N.t.GGlM3d),
            value: u.Q.OUTPUT
          }]} />}</a.Fragment>
  }
  return <l.Y0X transitionState={_} aria-label={E} parentComponent={"ConnectedDeviceDetectionModal"}>{<l.xBx separator={false}><l.X6q variant={"heading-lg/semibold"}>{E}</l.X6q></l.xBx>}{<l.hzk><l.Text variant={"text-md/normal"}><a.Fragment>{t}{<o.zx className={p.neverShow} look={o.zx.Looks.LINK} color={o.zx.Colors.LINK} onClick={() => {
              T ? (C.current = true, c.Gl(n.displayName), d.default.track(m.rMx.MODAL_DISMISSED, {
                type: null != f ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
                location_object: n.displayName,
                dismiss_type: "permanent"
              })) : (C.current = true, c.oI(), d.default.track(m.rMx.MODAL_DISMISSED, {
                type: null != f ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
                dismiss_type: "permanent"
              })), D()
            }}>{T ? N.intl.formatToPlainString(N.t.cwS3Ex, {
              device: n.displayName
            }) : N.intl.string(N.t["5E9SBw"])}</o.zx>}</a.Fragment></l.Text></l.hzk>}{<l.mzw><div className={p.footerButtons}>{<div data-button-hoisted-classname-wrapper={true} className={p.cancelButton}><l.zxk variant={"secondary"} text={N.intl.string(N.t.vPBgq6)} onClick={() => {
              y(), D()
            }} /></div>}{<l.zxk variant={"primary"} text={N.intl.string(N.t.ydkoDQ)} onClick={() => {
            C.current = true, null != x && c.mo(n.displayName, x, "New Audio Device Detected Modal"), D()
          }} />}</div></l.mzw>}</l.Y0X>
}