/** Chunk was on 78528 **/
/** chunk id: 613907, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js"), require("./264879.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
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
let j = "749054660769218631";

function v(e) {
  var t;
  let {
    channel: n
  } = e, [i, v] = l.useState("");
  l.useEffect(() => {
    (0, u.zk)("847199849233514549", true)
  }, []);
  let x = (0, a.bG)([f.A, h.default], () => !!s()(f.A.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== h.default.getId() && e.state === y.cmJ.SENT && !(0, A.A)(e))),
    E = (0, a.bG)([g.default], () => g.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
    C = null != (t = b.Ay.useName(E)) ? t : _.intl.string(_.t.y1Wu2f),
    S = (0, a.bG)([d.A], () => d.A.getStickerById(j)),
    I = l.useCallback(async () => {
      if (null == i || "" === i) try {
        await c.A.sendGreetMessage(n.id, j), m.default.track(y.HAw.DM_EMPTY_ACTION, {
          channel_id: n.id,
          channel_type: n.type,
          source: "Wave",
          type: "Send wave"
        })
      } catch (e) {
        e.ok || 429 !== e.status || v(_.intl.string(_.t.Whhv4w))
      }
    }, [n.id, n.type, i]),
    N = _.intl.formatToPlainString(_.t.m0zYbV, {
      username: C
    }),
    T = null != i && "" !== i ? (0, r.jsx)(o.Text, {
      className: O.z3,
      color: "text-feedback-critical",
      variant: "text-sm/normal",
      children: i
    }) : null;
  return x ? (0, r.jsxs)("div", {
    className: O.ft,
    children: [(0, r.jsxs)(o.DUT, {
      className: null != i && "" !== i ? O.AO : O.Iq,
      "aria-label": _.intl.string(_.t.pJObYI),
      onClick: I,
      children: [(0, r.jsx)(p.A, {
        sticker: S,
        size: 24
      }), (0, r.jsx)(o.Text, {
        className: O.Qq,
        variant: "text-md/medium",
        children: N
      })]
    }), T]
  }) : (0, r.jsxs)("div", {
    className: O.nj,
    children: [(0, r.jsx)(p.A, {
      sticker: S,
      size: 160,
      className: O.Xr
    }), (0, r.jsx)(o.Button, {
      fullWidth: true,
      variant: "primary",
      size: "md",
      onClick: I,
      disabled: !!i,
      text: N
    }), T]
  })
}