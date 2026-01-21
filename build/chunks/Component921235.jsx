/** Chunk was on 82124 **/
/** chunk id: 921235, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
let x = "749054660769218631";

function C(e) {
  var t;
  let {
    channel: n
  } = e, [l, C] = i.useState("");
  i.useEffect(() => {
    (0, u.FQ)("847199849233514549", true)
  }, []);
  let E = (0, o.e7)([h.Z, f.default], () => !!a()(h.Z.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== f.default.getId() && e.state === v.yb.SENT && !(0, y.Z)(e))),
    S = (0, o.e7)([g.default], () => g.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
    _ = null != (t = b.ZP.useName(S)) ? t : O.intl.string(O.t.y1Wu2f),
    I = (0, o.e7)([d.Z], () => d.Z.getStickerById(x)),
    P = i.useCallback(async () => {
      if (null == l || "" === l) try {
        await c.Z.sendGreetMessage(n.id, x), m.default.track(v.rMx.DM_EMPTY_ACTION, {
          channel_id: n.id,
          channel_type: n.type,
          source: "Wave",
          type: "Send wave"
        })
      } catch (e) {
        e.ok || 429 !== e.status || C(O.intl.string(O.t.Whhv4w))
      }
    }, [n.id, n.type, l]),
    Z = O.intl.formatToPlainString(O.t.m0zYbV, {
      username: _
    }),
    N = null != l && "" !== l ? (0, r.jsx)(s.Text, {
      className: j.error,
      color: "text-feedback-critical",
      variant: "text-sm/normal",
      children: l
    }) : null;
  return E ? (0, r.jsxs)("div", {
    className: j.containerCompact,
    children: [(0, r.jsxs)(s.P3F, {
      className: null != l && "" !== l ? j.compactButtonDisabled : j.compactButton,
      "aria-label": O.intl.string(O.t.pJObYI),
      onClick: P,
      children: [(0, r.jsx)(p.Z, {
        sticker: I,
        size: 24
      }), (0, r.jsx)(s.Text, {
        className: j.text,
        variant: "text-md/medium",
        children: Z
      })]
    }), N]
  }) : (0, r.jsxs)("div", {
    className: j.containerExpanded,
    children: [(0, r.jsx)(p.Z, {
      sticker: I,
      size: 160,
      className: j.stickerExpanded
    }), (0, r.jsx)(s.Button, {
      fullWidth: true,
      variant: "primary",
      size: "md",
      onClick: P,
      disabled: !!l,
      text: Z
    }), N]
  })
}