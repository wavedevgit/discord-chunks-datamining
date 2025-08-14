/** Chunk was on web.js **/
/** chunk id: 339340, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => C,
  default: () => P
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk343817 = require("./343817.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk904245 = require("./904245.js"),
  Chunk12498 = require("./12498.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk724723 = require("./724723.js"),
  Chunk957730 = require("./957730.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk459931 = require("./459931.js"),
  Chunk740353 = require("./740353.js");
let C = "VoiceChannelStatusModal",
  R = 500;

function P(e) {
  let {
    channel: t,
    transitionState: n,
    sourceAnalyticsLocations: o,
    onClose: P
  } = e, w = b.Z.getCurrentConfig({
    location: "VoiceChannelStatusModal"
  }, {
    autoTrackExposure: true
  }).enabled, D = (0, s.e7)([p.Z], () => p.Z.getChannelStatus(t)), L = (0, s.e7)([O.Z], () => O.Z.getMediaSessionId()), [x, M] = i.useState(null != D ? D : ""), [k, j] = i.useState(false), [U, G] = i.useState(null), B = (0, s.e7)([v.default], () => v.default.getCurrentUser()), Z = x.length > R;
  i.useEffect(() => {
    I.default.track(T.rMx.OPEN_MODAL, {
      type: "Voice Channel Topic Modal",
      guild_id: t.guild_id,
      location_stack: o
    })
  }, [t.guild_id, o]);
  let F = e => {
      G(new l.Hx(e, e.status).getAnyErrorMessage())
    },
    V = e => {
      let {
        invalidEmojis: n
      } = e;
      if (null != n && n.length > 0) {
        let {
          errorMessage: e
        } = _.Z.validateMessage(n, B, t.id);
        return G(e), j(false), {
          hasErrors: true
        }
      }
      return {
        hasErrors: false
      }
    },
    H = async e => {
      x === D && P(), null == e || e.preventDefault(), G(null), j(true);
      let n = x.length,
        r = x.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
        i = y.ZP.parse(t, x),
        {
          hasErrors: a
        } = V(i);
      if (!a) {
        try {
          let e = await f.ZP.updateVoiceChannelStatus(t.id, i.content);
          204 === e.status ? (I.default.track(T.rMx.VOICE_CHANNEL_TOPIC_SET, {
            guild_id: t.guild_id,
            channel_id: t.id,
            media_session_id: L,
            raw_length: n,
            text_length: r,
            location_stack: o
          }), P()) : F(e)
        } catch (e) {
          F(e)
        }
        j(false)
      }
    }, [Y, W] = i.useState((0, m.JM)(x)), K = (e, t, n) => {
      M(t), W(n)
    }, z = async () => (Z || k || await H(), Promise.resolve({
      shouldClear: false,
      shouldRefocus: true
    })), q = (0, r.jsxs)(d.hjN, {
      className: w ? true : A.inputSection,
      title: S.intl.string(S.t.Fq5lwM),
      children: [(0, r.jsx)(g.ZP, {
        innerClassName: A.textArea,
        textValue: x,
        richValue: Y,
        placeholder: S.intl.formatToPlainString(S.t.DUXxBg, {
          channelName: t.name
        }),
        focused: true,
        channel: t,
        onChange: K,
        onSubmit: z,
        type: h.Ie.VOICE_CHANNEL_STATUS,
        canMentionRoles: false,
        canMentionChannels: false,
        allowNewLines: false,
        parentModalKey: C,
        maxCharacterCount: R,
        showRemainingCharsAfterCount: R / 2,
        emojiPickerCloseOnModalOuterClick: true
      }), null != U ? (0, r.jsx)(d.kzN, {
        className: A.error,
        children: U
      }) : null]
    });
  return w ? (0, r.jsx)(c.I, {
    transitionState: n,
    onClose: P,
    graphic: {
      type: "image",
      src: N
    },
    title: S.intl.string(S.t["5CyJBQ"]),
    subtitle: S.intl.string(S.t.NRBYjo),
    actions: [{
      variant: "secondary",
      text: S.intl.string(S.t["ETE/oK"]),
      onClick: P
    }, {
      variant: "primary",
      loading: k,
      disabled: Z,
      text: S.intl.string(S.t.XqK2Iy),
      onClick: H
    }],
    children: q
  }) : (0, r.jsx)("form", {
    onSubmit: H,
    className: A.form,
    children: (0, r.jsxs)(d.Y0X, {
      transitionState: n,
      size: d.CgR.SMALL,
      className: a()(A.modal, A.gradientBorder),
      parentComponent: "VoiceChannelStatusModal",
      children: [(0, r.jsxs)(d.hzk, {
        className: A.container,
        children: [(0, r.jsxs)(d.xBx, {
          direction: E.Z.Direction.VERTICAL,
          className: A.modalHeader,
          separator: false,
          children: [(0, r.jsx)(d.olH, {
            className: A.closeButton,
            onClick: P
          }), (0, r.jsx)("div", {
            className: A.headerImage
          }), (0, r.jsx)(d.vwX, {
            tag: "h1",
            className: A.title,
            children: S.intl.string(S.t["5CyJBQ"])
          }), (0, r.jsx)(d.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: S.intl.string(S.t.NRBYjo)
          })]
        }), q]
      }), (0, r.jsxs)(d.mzw, {
        justify: E.Z.Justify.END,
        direction: E.Z.Direction.HORIZONTAL,
        className: A.modalFooter,
        children: [(0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: A.cancelButton,
          children: (0, r.jsx)(d.zxk, {
            variant: "secondary",
            text: S.intl.string(S.t["ETE/oK"]),
            onClick: P
          })
        }), (0, r.jsx)(u.zx, {
          onClick: H,
          submitting: k,
          className: A.button,
          disabled: Z,
          children: S.intl.string(S.t.XqK2Iy)
        })]
      })]
    })
  })
}