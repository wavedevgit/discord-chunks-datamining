/** Chunk was on web.js **/
/** chunk id: 339340, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => v,
  default: () => T
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
  Chunk343817 = require("./343817.js"),
  Chunk787014 = require("./787014.js"),
  Chunk904245 = require("./904245.js"),
  Chunk12498 = require("./12498.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk957730 = require("./957730.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk418128 = require("./418128.js"),
  Chunk740353 = require("./740353.js");
let v = "VoiceChannelStatusModal",
  I = 500;

function T(e) {
  let {
    channel: t,
    transitionState: n,
    sourceAnalyticsLocations: T,
    onClose: S
  } = e, A = (0, o.e7)([u.Z], () => u.Z.getChannelStatus(t)), C = (0, o.e7)([h.Z], () => h.Z.getMediaSessionId()), [N, R] = i.useState(null != A ? A : ""), [P, w] = i.useState(false), [D, x] = i.useState(null), L = (0, o.e7)([m.default], () => m.default.getCurrentUser()), M = N.length > I;
  i.useEffect(() => {
    g.default.track(E.rMx.OPEN_MODAL, {
      type: "Voice Channel Topic Modal",
      guild_id: t.guild_id,
      location_stack: T
    })
  }, [t.guild_id, T]);
  let k = e => {
      x(new s.Hx(e, e.status).getAnyErrorMessage())
    },
    j = e => {
      let {
        invalidEmojis: n
      } = e;
      if (null != n && n.length > 0) {
        let {
          errorMessage: e
        } = c.Z.validateMessage(n, L, t.id);
        return x(e), w(false), {
          hasErrors: true
        }
      }
      return {
        hasErrors: false
      }
    },
    U = async e => {
      N === A && S(), null == e || e.preventDefault(), x(null), w(true);
      let n = N.length,
        r = N.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
        i = p.ZP.parse(t, N),
        {
          hasErrors: a
        } = j(i);
      if (!a) {
        try {
          let e = await l.ZP.updateVoiceChannelStatus(t.id, i.content);
          204 === e.status ? (g.default.track(E.rMx.VOICE_CHANNEL_TOPIC_SET, {
            guild_id: t.guild_id,
            channel_id: t.id,
            media_session_id: C,
            raw_length: n,
            text_length: r,
            location_stack: T
          }), S()) : k(e)
        } catch (e) {
          k(e)
        }
        w(false)
      }
    }, [G, B] = i.useState((0, f.JM)(N)), Z = (e, t, n) => {
      R(t), B(n)
    }, F = async () => (M || P || await U(), Promise.resolve({
      shouldClear: false,
      shouldRefocus: true
    })), V = (0, r.jsx)(a.gNt, {
      label: b.intl.string(b.t.Fq5lwN),
      errorMessage: D,
      children: (0, r.jsx)(_.ZP, {
        innerClassName: y.textArea,
        textValue: N,
        richValue: G,
        placeholder: b.intl.formatToPlainString(b.t.DUXxBh, {
          channelName: t.name
        }),
        focused: true,
        channel: t,
        onChange: Z,
        onSubmit: F,
        type: d.Ie.VOICE_CHANNEL_STATUS,
        canMentionRoles: false,
        canMentionChannels: false,
        allowNewLines: false,
        parentModalKey: v,
        maxCharacterCount: I,
        showRemainingCharsAfterCount: I / 2,
        emojiPickerCloseOnModalOuterClick: true
      })
    });
  return (0, r.jsx)(a.ExpressiveModal, {
    transitionState: n,
    onClose: S,
    graphic: {
      type: "image",
      src: O
    },
    title: b.intl.string(b.t["5CyJBd"]),
    subtitle: b.intl.string(b.t.NRBYju),
    actions: [{
      variant: "secondary",
      text: b.intl.string(b.t["ETE/oC"]),
      onClick: S
    }, {
      variant: "primary",
      loading: P,
      disabled: M,
      text: b.intl.string(b.t.XqK2I2),
      onClick: U
    }],
    children: V
  })
}