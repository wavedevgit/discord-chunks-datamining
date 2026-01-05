/** Chunk was on 40184 **/
/** chunk id: 921235, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./583741.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk268350 = require("./268350.js"),
  Chunk926491 = require("./926491.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk375954 = require("./375954.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk901461 = require("./901461.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk42241 = require("./42241.js");
let O = "749054660769218631";

function E(e) {
  var t;
  let {
    channel: n
  } = e, [l, E] = r.useState("");
  r.useEffect(() => {
    (0, u.FQ)("847199849233514549", true)
  }, []);
  let j = (0, o.e7)([h.Z, f.default], () => !!a()(h.Z.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== f.default.getId() && e.state === y.yb.SENT && !(0, C.Z)(e))),
    S = (0, o.e7)([m.default], () => m.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
    _ = null != (t = b.ZP.useName(S)) ? t : v.intl.string(v.t.y1Wu2f),
    P = (0, o.e7)([d.Z], () => d.Z.getStickerById(O)),
    I = r.useCallback(async () => {
      if (null == l || "" === l) try {
        await c.Z.sendGreetMessage(n.id, O), g.default.track(y.rMx.DM_EMPTY_ACTION, {
          channel_id: n.id,
          channel_type: n.type,
          source: "Wave",
          type: "Send wave"
        })
      } catch (e) {
        e.ok || 429 !== e.status || E(v.intl.string(v.t.Whhv4w))
      }
    }, [n.id, n.type, l]),
    Z = v.intl.formatToPlainString(v.t.m0zYbV, {
      username: _
    }),
    T = null != l && "" !== l ? (0, i.jsx)(s.Text, {
      className: x.error,
      color: "text-feedback-critical",
      variant: "text-sm/normal",
      children: l
    }) : null;
  return j ? (0, i.jsxs)("div", {
    className: x.containerCompact,
    children: [(0, i.jsxs)(s.P3F, {
      className: null != l && "" !== l ? x.compactButtonDisabled : x.compactButton,
      "aria-label": v.intl.string(v.t.pJObYI),
      onClick: I,
      children: [(0, i.jsx)(p.Z, {
        sticker: P,
        size: 24
      }), (0, i.jsx)(s.Text, {
        className: x.text,
        variant: "text-md/medium",
        children: Z
      })]
    }), T]
  }) : (0, i.jsxs)("div", {
    className: x.containerExpanded,
    children: [(0, i.jsx)(p.Z, {
      sticker: P,
      size: 160,
      className: x.stickerExpanded
    }), (0, i.jsx)(s.Button, {
      fullWidth: true,
      variant: "primary",
      size: "md",
      onClick: I,
      disabled: !!l,
      text: Z
    }), T]
  })
}