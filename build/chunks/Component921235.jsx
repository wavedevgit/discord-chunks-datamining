/** Chunk was on 73726 **/
/** chunk id: 921235, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./583741.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk315146 = require("./315146.js");
let x = "749054660769218631";

function O(e) {
  var t;
  let {
    channel: n
  } = e, [l, O] = i.useState("");
  i.useEffect(() => {
    (0, u.FQ)("847199849233514549", true)
  }, []);
  let E = (0, o.e7)([h.Z, f.default], () => !!a()(h.Z.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== f.default.getId() && e.state === y.yb.SENT && !(0, _.Z)(e))),
    j = (0, o.e7)([m.default], () => m.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
    S = null != (t = b.ZP.useName(j)) ? t : C.intl.string(C.t.y1Wu2f),
    P = (0, o.e7)([d.Z], () => d.Z.getStickerById(x)),
    I = i.useCallback(async () => {
      if (null == l || "" === l) try {
        await c.Z.sendGreetMessage(n.id, x), g.default.track(y.rMx.DM_EMPTY_ACTION, {
          channel_id: n.id,
          channel_type: n.type,
          source: "Wave",
          type: "Send wave"
        })
      } catch (e) {
        e.ok || 429 !== e.status || O(C.intl.string(C.t.Whhv4w))
      }
    }, [n.id, n.type, l]),
    Z = C.intl.formatToPlainString(C.t.m0zYbV, {
      username: S
    }),
    T = null != l && "" !== l ? (0, r.jsx)(s.Text, {
      className: v.error,
      color: "text-danger",
      variant: "text-sm/normal",
      children: l
    }) : null;
  return E ? (0, r.jsxs)("div", {
    className: v.containerCompact,
    children: [(0, r.jsxs)(s.P3F, {
      className: null != l && "" !== l ? v.compactButtonDisabled : v.compactButton,
      "aria-label": C.intl.string(C.t.pJObYI),
      onClick: I,
      children: [(0, r.jsx)(p.Z, {
        sticker: P,
        size: 24
      }), (0, r.jsx)(s.Text, {
        className: v.text,
        variant: "text-md/medium",
        children: Z
      })]
    }), T]
  }) : (0, r.jsxs)("div", {
    className: v.containerExpanded,
    children: [(0, r.jsx)(p.Z, {
      sticker: P,
      size: 160,
      className: v.stickerExpanded
    }), (0, r.jsx)(s.Button, {
      fullWidth: true,
      variant: "primary",
      size: "md",
      onClick: I,
      disabled: !!l,
      text: Z
    }), T]
  })
}