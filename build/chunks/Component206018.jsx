/** Chunk was on 83898 **/
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
    onClose: D,
    maybeRenderPTTCheckbox: k = false,
    renderDeafenCheckbox: T = false,
    renderInputProfiles: I = false,
    renderOutputDevices: E = false,
    renderOutputVolume: V = false,
    renderInputDevices: M = false,
    renderInputVolume: U = false,
    maybeRenderInputMeter: x = false,
    renderSettingsButton: N = false
  } = e, {
    analyticsLocations: L
  } = (0, s.Ay)();
  (0, b.A)({
    type: o.ImpressionTypes.MENU,
    name: o.ImpressionNames.AUDIO_DEVICE_MENU,
    properties: {
      location_stack: L
    }
  });
  let R = (0, P.A)(t),
    B = (0, p.H)({
      deviceType: w.oh.AUDIO_INPUT,
      analyticsLocations: L,
      asSubmenu: true
    }),
    F = (0, p.H)({
      deviceType: w.oh.AUDIO_OUTPUT,
      analyticsLocations: L,
      asSubmenu: true
    }),
    K = (0, u.bG)([y.A], () => y.A.getActiveInputProfile()),
    X = (0, f.A)(L),
    H = (0, O.A)(L),
    G = (0, d.A)(L),
    J = i.x.DEFAULT,
    Z = y.A.isSelfDeaf(J),
    Y = (0, u.bG)([y.A], () => y.A.getMode()),
    q = Y === A.TBI.VOICE_ACTIVITY ? A.TBI.PUSH_TO_TALK : A.TBI.VOICE_ACTIVITY,
    Q = (0, u.bG)([y.A, g.Ay], () => {
      var e;
      let t = (null == (e = y.A.getModeOptions().shortcut) ? true : e.length) > 0,
        r = null != g.Ay.getKeybindForAction(A.hCu.PUSH_TO_TALK, false, true),
        n = null != g.Ay.getKeybindForAction(A.hCu.PUSH_TO_TALK_PRIORITY, false, true);
      return t || r || n
    }),
    W = (0, u.bG)([m.A], () => null != m.A.getChannelId());
  return (0, n.jsx)(c.A, {
    object: A.ZSU.CONTEXT_MENU,
    children: (0, n.jsxs)(l.W1t, {
      "data-menu-migrated": true,
      onSelect: C,
      onInteraction: r,
      onClose: D,
      navId: "audio-device-context",
      variant: "fixed",
      "aria-label": _.intl.string(_.t.ZR1Ss6),
      className: S.MK,
      children: [(0, n.jsxs)(l.rXV, {
        children: [M && B, I && X, E && F]
      }), (0, n.jsxs)(l.rXV, {
        children: [U && H, x && W && (0, n.jsx)(l.aK1, {
          id: "input-device-meter",
          control: () => (0, n.jsx)(j.A, {
            notchBackground: j.V.BLACK,
            location: {
              section: A.JJy.CONTEXT_MENU
            },
            meterOnly: true,
            containerClassName: S.Eq,
            notchClassName: S.CO
          })
        }), V && G]
      }), (0, n.jsxs)(l.rXV, {
        children: [k && v.isPlatformEmbedded && Q ? (0, n.jsx)(l.sLh, {
          checked: Y === A.TBI.PUSH_TO_TALK,
          id: "input-mode",
          label: _.intl.string(_.t.Q8gkVL),
          action: () => a.A.setMode(q, true, true, {
            analyticsLocations: L
          }),
          disabled: K === h.my.STUDIO
        }) : null, T && (0, n.jsx)(l.sLh, {
          id: "deafen",
          label: _.intl.string(_.t.wjcRFX),
          action: () => a.A.toggleSelfDeaf({
            context: J,
            location: "AudioDeviceMenu"
          }),
          checked: Z
        }, "self-deafen"), N && R]
      })]
    })
  })
}