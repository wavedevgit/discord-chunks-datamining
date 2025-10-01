/** Chunk was on 49613 **/
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
  Chunk352749 = require("./352749.js");
let x = "749054660769218631";

function O(e) {
  var t;
  let {
    channel: n
  } = e, [l, O] = i.useState("");
  i.useEffect(() => {
    (0, u.FQ)("847199849233514549", true)
  }, []);
  let j = (0, o.e7)([f.Z, h.default], () => !!a()(f.Z.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== h.default.getId() && e.state === C.yb.SENT && !(0, y.Z)(e))),
    E = (0, o.e7)([m.default], () => m.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
    S = null != (t = b.ZP.useName(E)) ? t : _.intl.string(_.t.y1Wu2d),
    P = (0, o.e7)([d.Z], () => d.Z.getStickerById(x)),
    I = i.useCallback(async () => {
      if (null == l || "" === l) try {
        await c.Z.sendGreetMessage(n.id, x), g.default.track(C.rMx.DM_EMPTY_ACTION, {
          channel_id: n.id,
          channel_type: n.type,
          source: "Wave",
          type: "Send wave"
        })
      } catch (e) {
        e.ok || 429 !== e.status || O(_.intl.string(_.t["Whhv4+"]))
      }
    }, [n.id, n.type, l]),
    Z = _.intl.formatToPlainString(_.t.m0zYbW, {
      username: S
    }),
    N = null != l && "" !== l ? (0, r.jsx)(s.Text, {
      className: v.error,
      color: "text-danger",
      variant: "text-sm/normal",
      children: l
    }) : null;
  return j ? (0, r.jsxs)("div", {
    className: v.containerCompact,
    children: [(0, r.jsxs)(s.P3F, {
      className: null != l && "" !== l ? v.compactButtonDisabled : v.compactButton,
      "aria-label": _.intl.string(_.t.pJObYG),
      onClick: I,
      children: [(0, r.jsx)(p.Z, {
        sticker: P,
        size: 24
      }), (0, r.jsx)(s.Text, {
        className: v.text,
        variant: "text-md/medium",
        children: Z
      })]
    }), N]
  }) : (0, r.jsxs)("div", {
    className: v.containerExpanded,
    children: [(0, r.jsx)(p.Z, {
      sticker: P,
      size: 160,
      className: v.stickerExpanded
    }), (0, r.jsx)(s.zxk, {
      fullWidth: true,
      variant: "primary",
      size: "md",
      onClick: I,
      disabled: !!l,
      text: Z
    }), N]
  })
}