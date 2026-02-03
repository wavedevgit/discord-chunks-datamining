/** Chunk was on web.js **/
/** chunk id: 136523, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => I,
  m: () => v
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk417597 = require("./417597.js"),
  Chunk319400 = require("./319400.js"),
  Chunk435183 = require("./435183.js"),
  Chunk843472 = require("./843472.js"),
  Chunk309698 = require("./309698.js"),
  Chunk355622 = require("./355622.js"),
  Chunk408018 = require("./408018.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk451909 = require("./451909.js"),
  Chunk383501 = require("./383501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk171927 = require("./171927.js"),
  Chunk379649 = require("./379649.js");
let v = "VoiceChannelStatusModal",
  A = 500;

function I(e) {
  let {
    channel: t,
    transitionState: n,
    sourceAnalyticsLocations: I,
    onClose: S
  } = e, T = (0, o.bG)([u.A], () => u.A.getChannelStatus(t)), C = (0, o.bG)([h.A], () => h.A.getMediaSessionId()), [N, w] = i.useState(null != T ? T : ""), [R, P] = i.useState(false), [D, L] = i.useState(null), x = (0, o.bG)([m.default], () => m.default.getCurrentUser()), M = N.length > A;
  i.useEffect(() => {
    g.default.track(E.HAw.OPEN_MODAL, {
      type: "Voice Channel Topic Modal",
      guild_id: t.guild_id,
      location_stack: I
    })
  }, [t.guild_id, I]);
  let j = e => {
      L(new s.LG(e, e.status).getAnyErrorMessage())
    },
    k = e => {
      let {
        invalidEmojis: n
      } = e;
      if (null != n && n.length > 0) {
        let {
          errorMessage: e
        } = c.A.validateMessage(n, x, t.id);
        return L(e), P(false), {
          hasErrors: true
        }
      }
      return {
        hasErrors: false
      }
    },
    U = async e => {
      N === T && S(), null == e || e.preventDefault(), L(null), P(true);
      let n = N.length,
        r = N.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
        i = _.Ay.parse(t, N),
        {
          hasErrors: a
        } = k(i);
      if (!a) {
        try {
          let e = await l.Ay.updateVoiceChannelStatus(t.id, i.content);
          204 === e.status ? (g.default.track(E.HAw.VOICE_CHANNEL_TOPIC_SET, {
            guild_id: t.guild_id,
            channel_id: t.id,
            media_session_id: C,
            raw_length: n,
            text_length: r,
            location_stack: I
          }), S()) : j(e)
        } catch (e) {
          j(e)
        }
        P(false)
      }
    }, [G, F] = i.useState((0, f.x7)(N)), V = (e, t, n) => {
      w(t), F(n)
    }, B = async () => (M || R || await U(), Promise.resolve({
      shouldClear: false,
      shouldRefocus: true
    })), H = (0, r.jsx)(a.D0$, {
      label: y.intl.string(y.t.Fq5lwN),
      errorMessage: D,
      children: (0, r.jsx)(p.Ay, {
        innerClassName: b.Tg,
        textValue: N,
        richValue: G,
        placeholder: y.intl.formatToPlainString(y.t.DUXxBh, {
          channelName: t.name
        }),
        focused: true,
        channel: t,
        onChange: V,
        onSubmit: B,
        type: d.oU.VOICE_CHANNEL_STATUS,
        canMentionRoles: false,
        canMentionChannels: false,
        allowNewLines: false,
        parentModalKey: v,
        maxCharacterCount: A,
        showRemainingCharsAfterCount: A / 2,
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
    title: y.intl.string(y.t["5CyJBd"]),
    subtitle: y.intl.string(y.t.NRBYju),
    actions: [{
      variant: "secondary",
      text: y.intl.string(y.t["ETE/oC"]),
      onClick: S
    }, {
      variant: "primary",
      loading: R,
      disabled: M,
      text: y.intl.string(y.t.XqK2I2),
      onClick: U
    }],
    children: H
  })
}