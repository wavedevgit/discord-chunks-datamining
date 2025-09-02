/** Chunk was on web.js **/
/** chunk id: 339340, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => I,
  default: () => T
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk343817 = require("./343817.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
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
  Chunk459931 = require("./459931.js"),
  Chunk740353 = require("./740353.js");
let I = "VoiceChannelStatusModal",
  S = 500;

function T(e) {
  let {
    channel: t,
    transitionState: n,
    sourceAnalyticsLocations: T,
    onClose: A
  } = e, C = (0, a.e7)([d.Z], () => d.Z.getChannelStatus(t)), N = (0, a.e7)([m.Z], () => m.Z.getMediaSessionId()), [R, P] = i.useState(null != C ? C : ""), [w, D] = i.useState(false), [x, L] = i.useState(null), j = (0, a.e7)([g.default], () => g.default.getCurrentUser()), M = R.length > S;
  i.useEffect(() => {
    E.default.track(b.rMx.OPEN_MODAL, {
      type: "Voice Channel Topic Modal",
      guild_id: t.guild_id,
      location_stack: T
    })
  }, [t.guild_id, T]);
  let k = e => {
      L(new o.Hx(e, e.status).getAnyErrorMessage())
    },
    U = e => {
      let {
        invalidEmojis: n
      } = e;
      if (null != n && n.length > 0) {
        let {
          errorMessage: e
        } = u.Z.validateMessage(n, j, t.id);
        return L(e), D(false), {
          hasErrors: true
        }
      }
      return {
        hasErrors: false
      }
    },
    G = async e => {
      R === C && A(), null == e || e.preventDefault(), L(null), D(true);
      let n = R.length,
        r = R.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
        i = h.ZP.parse(t, R),
        {
          hasErrors: a
        } = U(i);
      if (!a) {
        try {
          let e = await c.ZP.updateVoiceChannelStatus(t.id, i.content);
          204 === e.status ? (E.default.track(b.rMx.VOICE_CHANNEL_TOPIC_SET, {
            guild_id: t.guild_id,
            channel_id: t.id,
            media_session_id: N,
            raw_length: n,
            text_length: r,
            location_stack: T
          }), A()) : k(e)
        } catch (e) {
          k(e)
        }
        D(false)
      }
    }, [B, Z] = i.useState((0, _.JM)(R)), F = (e, t, n) => {
      P(t), Z(n)
    }, V = async () => (M || w || await G(), Promise.resolve({
      shouldClear: false,
      shouldRefocus: true
    })), H = (0, r.jsxs)(l.hjN, {
      title: y.intl.string(y.t.Fq5lwM),
      children: [(0, r.jsx)(p.ZP, {
        innerClassName: O.textArea,
        textValue: R,
        richValue: B,
        placeholder: y.intl.formatToPlainString(y.t.DUXxBg, {
          channelName: t.name
        }),
        focused: true,
        channel: t,
        onChange: F,
        onSubmit: V,
        type: f.Ie.VOICE_CHANNEL_STATUS,
        canMentionRoles: false,
        canMentionChannels: false,
        allowNewLines: false,
        parentModalKey: I,
        maxCharacterCount: S,
        showRemainingCharsAfterCount: S / 2,
        emojiPickerCloseOnModalOuterClick: true
      }), null != x ? (0, r.jsx)(l.kzN, {
        className: O.error,
        children: x
      }) : null]
    });
  return (0, r.jsx)(s.I, {
    transitionState: n,
    onClose: A,
    graphic: {
      type: "image",
      src: v
    },
    title: y.intl.string(y.t["5CyJBQ"]),
    subtitle: y.intl.string(y.t.NRBYjo),
    actions: [{
      variant: "secondary",
      text: y.intl.string(y.t["ETE/oK"]),
      onClick: A
    }, {
      variant: "primary",
      loading: w,
      disabled: M,
      text: y.intl.string(y.t.XqK2Iy),
      onClick: G
    }],
    children: H
  })
}