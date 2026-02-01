/** Chunk was on 61344 **/
/** chunk id: 613907, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./264879.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk631576 = require("./631576.js"),
  Chunk679382 = require("./679382.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk320501 = require("./320501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk143413 = require("./143413.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk455683 = require("./455683.js");
let E = "749054660769218631";

function O(e) {
  var t;
  let {
    channel: n
  } = e, [i, O] = r.useState("");
  r.useEffect(() => {
    (0, u.zk)("847199849233514549", true)
  }, []);
  let C = (0, s.bG)([f.A, p.default], () => !!a()(f.A.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== p.default.getId() && e.state === _.cmJ.SENT && !(0, b.A)(e))),
    x = (0, s.bG)([m.default], () => m.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
    S = null != (t = A.Ay.useName(x)) ? t : y.intl.string(y.t.y1Wu2f),
    j = (0, s.bG)([d.A], () => d.A.getStickerById(E)),
    I = r.useCallback(async () => {
      if (null == i || "" === i) try {
        await c.A.sendGreetMessage(n.id, E), g.default.track(_.HAw.DM_EMPTY_ACTION, {
          channel_id: n.id,
          channel_type: n.type,
          source: "Wave",
          type: "Send wave"
        })
      } catch (e) {
        e.ok || 429 !== e.status || O(y.intl.string(y.t.Whhv4w))
      }
    }, [n.id, n.type, i]),
    T = y.intl.formatToPlainString(y.t.m0zYbV, {
      username: S
    }),
    N = null != i && "" !== i ? (0, l.jsx)(o.Text, {
      className: v.z3,
      color: "text-feedback-critical",
      variant: "text-sm/normal",
      children: i
    }) : null;
  return C ? (0, l.jsxs)("div", {
    className: v.ft,
    children: [(0, l.jsxs)(o.DUT, {
      className: null != i && "" !== i ? v.AO : v.Iq,
      "aria-label": y.intl.string(y.t.pJObYI),
      onClick: I,
      children: [(0, l.jsx)(h.A, {
        sticker: j,
        size: 24
      }), (0, l.jsx)(o.Text, {
        className: v.Qq,
        variant: "text-md/medium",
        children: T
      })]
    }), N]
  }) : (0, l.jsxs)("div", {
    className: v.nj,
    children: [(0, l.jsx)(h.A, {
      sticker: j,
      size: 160,
      className: v.Xr
    }), (0, l.jsx)(o.Button, {
      fullWidth: true,
      variant: "primary",
      size: "md",
      onClick: I,
      disabled: !!i,
      text: T
    }), N]
  })
}