/** Chunk was on 60667 **/
/** chunk id: 85200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk625841 = require("./625841.jsx"),
  Chunk74848 = require("./74848.js"),
  Chunk430452 = require("./430452.js"),
  Chunk723702 = require("./723702.js"),
  Chunk801264 = require("./801264.jsx"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk637462 = require("./637462.js");
let m = Chunk723702.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function g() {
  var e, t;
  let {
    canSetInputDevice: n,
    canSetOutputDevice: c
  } = (0, l.cf)([o.A], () => ({
    canSetInputDevice: o.A.supports(u.O5.AUDIO_INPUT_DEVICE),
    canSetOutputDevice: o.A.supports(u.O5.AUDIO_OUTPUT_DEVICE)
  })), g = (0, a.x5)(u.oh.AUDIO_INPUT), A = (0, a.x5)(u.oh.AUDIO_OUTPUT), [f, h] = (0, a.tR)(u.oh.AUDIO_INPUT, {
    location: "UserSettingsDevices"
  }), [b, E] = (0, a.tR)(u.oh.AUDIO_OUTPUT, {
    location: "UserSettingsDevices"
  }), x = f.concat(h), O = b.concat(E), C = i.useMemo(() => {
    let e = m.some(e => {
        var t;
        return null == g || null == (t = g.hardwareId) ? true : t.startsWith(e)
      }),
      t = m.some(e => {
        var t;
        return null == A || null == (t = A.hardwareId) ? true : t.startsWith(e)
      });
    return e && t && (null == g ? true : g.containerId) != null && g.containerId === (null == A ? true : A.containerId)
  }, [g, A]), T = x[0], I = O[0], S = null != (e = null == T ? true : T.disabled) ? e : !n, j = null != (t = null == I ? true : I.disabled) ? t : !c;
  return (0, r.jsxs)("div", {
    className: p.y0,
    children: [(0, r.jsxs)("div", {
      className: p.o6,
      children: [(0, r.jsx)("div", {
        className: p.fi,
        children: (0, r.jsx)(s.U, {
          label: _.intl.string(_.t.hHMYbb),
          deviceType: u.oh.AUDIO_INPUT,
          location: "UserSettingsDevices",
          hideDeviceTypeIcon: true,
          isDisabled: S
        })
      }), (0, r.jsx)("div", {
        className: p.fi,
        children: (0, r.jsx)(s.U, {
          label: _.intl.string(_.t.dl18zb),
          deviceType: u.oh.AUDIO_OUTPUT,
          location: "UserSettingsDevices",
          hideDeviceTypeIcon: true,
          isDisabled: j
        })
      })]
    }), C && (0, r.jsx)(d.A, {
      look: d.k.WARNING,
      children: _.intl.string(_.t.Ioz3gx)
    })]
  })
}