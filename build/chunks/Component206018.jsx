/** Chunk was on 30819 **/
/** chunk id: 206018, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => C
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk205693 = require("./205693.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk48435 = require("./48435.jsx"),
  Chunk485873 = require("./485873.jsx"),
  Chunk24933 = require("./24933.jsx"),
  Chunk964592 = require("./964592.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk532624 = require("./532624.js"),
  Chunk723702 = require("./723702.js"),
  Chunk17143 = require("./17143.jsx"),
  Chunk819027 = require("./819027.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk509381 = require("./509381.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk220636 = require("./220636.js");

function C(e) {
  let {
    appContext: t,
    onInteraction: r,
    onSelect: C,
    onClose: E,
    maybeRenderPTTCheckbox: D = false,
    renderDeafenCheckbox: I = false,
    renderInputProfiles: T = false,
    renderOutputDevices: k = false,
    renderOutputVolume: x = false,
    renderInputDevices: N = false,
    renderInputVolume: M = false,
    maybeRenderInputMeter: V = false,
    renderSettingsButton: U = false
  } = e, {
    analyticsLocations: R
  } = (0, s.Ay)();
  (0, b.A)({
    type: o.ImpressionTypes.MENU,
    name: o.ImpressionNames.AUDIO_DEVICE_MENU,
    properties: {
      location_stack: R
    }
  });
  let L = (0, A.A)(t),
    B = (0, d.H)({
      deviceType: _.oh.AUDIO_INPUT,
      analyticsLocations: R,
      asSubmenu: true
    }),
    F = (0, d.H)({
      deviceType: _.oh.AUDIO_OUTPUT,
      analyticsLocations: R,
      asSubmenu: true
    }),
    H = (0, i.bG)([m.A], () => m.A.getActiveInputProfile()),
    K = (0, O.A)(R),
    X = (0, p.A)(R),
    G = (0, f.A)(R),
    J = l.x.DEFAULT,
    Z = m.A.isSelfDeaf(J),
    q = (0, i.bG)([m.A], () => m.A.getMode()),
    Y = q === P.TBI.VOICE_ACTIVITY ? P.TBI.PUSH_TO_TALK : P.TBI.VOICE_ACTIVITY,
    Q = (0, i.bG)([m.A, v.Ay], () => {
      var e;
      let t = (null == (e = m.A.getModeOptions().shortcut) ? true : e.length) > 0,
        r = null != v.Ay.getKeybindForAction(P.hCu.PUSH_TO_TALK, false, true),
        n = null != v.Ay.getKeybindForAction(P.hCu.PUSH_TO_TALK_PRIORITY, false, true);
      return t || r || n
    }),
    W = (0, i.bG)([y.A], () => null != y.A.getChannelId());
  return (0, n.jsx)(c.A, {
    object: P.ZSU.CONTEXT_MENU,
    children: (0, n.jsxs)(a.W1t, {
      "data-menu-migrated": true,
      onSelect: C,
      onInteraction: r,
      onClose: E,
      navId: "audio-device-context",
      variant: "fixed",
      "aria-label": S.intl.string(S.t.ZR1Ss6),
      className: w.MK,
      children: [(0, n.jsxs)(a.rXV, {
        children: [N && B, T && K, k && F]
      }), (0, n.jsxs)(a.rXV, {
        children: [M && X, V && W && (0, n.jsx)(a.aK1, {
          id: "input-device-meter",
          control: () => (0, n.jsx)(j.A, {
            notchBackground: j.V.BLACK,
            location: {
              section: P.JJy.CONTEXT_MENU
            },
            meterOnly: true,
            containerClassName: w.Eq,
            notchClassName: w.CO
          })
        }), x && G]
      }), (0, n.jsxs)(a.rXV, {
        children: [D && g.isPlatformEmbedded && Q ? (0, n.jsx)(a.sLh, {
          checked: q === P.TBI.PUSH_TO_TALK,
          id: "input-mode",
          label: S.intl.string(S.t.Q8gkVL),
          action: () => u.A.setMode(Y, true, true, {
            analyticsLocations: R
          }),
          disabled: H === h.my.STUDIO
        }) : null, I && (0, n.jsx)(a.sLh, {
          id: "deafen",
          label: S.intl.string(S.t.wjcRFX),
          action: () => u.A.toggleSelfDeaf({
            context: J,
            location: "AudioDeviceMenu"
          }),
          checked: Z
        }, "self-deafen"), U && L]
      })]
    })
  })
}