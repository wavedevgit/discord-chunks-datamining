/** Chunk was on web.js **/
/** chunk id: 921235, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./583741.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk900170 = require("./900170.js");
let v = "847199849233514549",
  I = "749054660769218631";

function T(e) {
  var t;
  let {
    channel: n
  } = e, [o, T] = i.useState("");
  i.useEffect(() => {
    (0, u.FQ)(v, true)
  }, []);
  let S = (0, s.e7)([p.Z, _.default], () => !!a()(p.Z.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== _.default.getId() && e.state === b.yb.SENT && !(0, E.Z)(e))),
    A = (0, s.e7)([h.default], () => h.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
    N = null != (t = g.ZP.useName(A)) ? t : y.intl.string(y.t.y1Wu2d),
    C = (0, s.e7)([d.Z], () => d.Z.getStickerById(I)),
    R = i.useCallback(async () => {
      if (null == o || "" === o) try {
        await c.Z.sendGreetMessage(n.id, I), m.default.track(b.rMx.DM_EMPTY_ACTION, {
          channel_id: n.id,
          channel_type: n.type,
          source: "Wave",
          type: "Send wave"
        })
      } catch (e) {
        e.ok || 429 !== e.status || T(y.intl.string(y.t["Whhv4+"]))
      }
    }, [n.id, n.type, o]),
    P = y.intl.formatToPlainString(y.t.m0zYbW, {
      username: N
    }),
    w = null != o && "" !== o ? (0, r.jsx)(l.Text, {
      className: O.error,
      color: "text-danger",
      variant: "text-sm/normal",
      children: o
    }) : null;
  return S ? (0, r.jsxs)("div", {
    className: O.containerCompact,
    children: [(0, r.jsxs)(l.P3F, {
      className: null != o && "" !== o ? O.compactButtonDisabled : O.compactButton,
      "aria-label": y.intl.string(y.t.pJObYG),
      onClick: R,
      children: [(0, r.jsx)(f.Z, {
        sticker: C,
        size: 24
      }), (0, r.jsx)(l.Text, {
        className: O.text,
        variant: "text-md/medium",
        children: P
      })]
    }), w]
  }) : (0, r.jsxs)("div", {
    className: O.containerExpanded,
    children: [(0, r.jsx)(f.Z, {
      sticker: C,
      size: 160,
      className: O.stickerExpanded
    }), (0, r.jsx)(l.zxk, {
      fullWidth: true,
      variant: "primary",
      size: "md",
      onClick: R,
      disabled: !!o,
      text: P
    }), w]
  })
}